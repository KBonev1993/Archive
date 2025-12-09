#!/usr/bin/env python3
"""
SSL Certificate Expiry Checker (Windows/Linux/Docker compatible)

- Извлича SSL сертификатите на сайтовете от YAML конфигурация
- Парсира изтичащата дата с cryptography (UTC, без warnings)
- Поддържа паралелни проверки за много сайтове
- Показва статус OK/WARNING/ERROR/EXPIRED
- Поддържа Slack webhook известия
"""
import socket
import ssl
import datetime
import yaml
import argparse
import sys
import os
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Tuple
from cryptography import x509
from cryptography.hazmat.backends import default_backend

DEFAULT_TIMEOUT = 10  # seconds
MAX_WORKERS = 10      # брой паралелни threads

def load_config(path: str) -> dict:
    with open(path, 'r', encoding='utf-8') as f:
        return yaml.safe_load(f)

def get_certificate_notAfter(hostname: str, port: int = 443, timeout: int = DEFAULT_TIMEOUT) -> datetime.datetime:
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    with socket.create_connection((hostname, port), timeout=timeout) as sock:
        with ctx.wrap_socket(sock, server_hostname=hostname) as ssock:
            der_cert = ssock.getpeercert(binary_form=True)
            pem_cert = ssl.DER_cert_to_PEM_cert(der_cert)
            cert = x509.load_pem_x509_certificate(pem_cert.encode('utf-8'), default_backend())
            return cert.not_valid_after_utc  # datetime object in UTC

def days_until(dt: datetime.datetime) -> int:
    now = datetime.datetime.now(datetime.timezone.utc)
    delta = dt - now
    return delta.days

def send_slack(webhook_url: str, payload: dict) -> None:
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(webhook_url, data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        resp.read()

def check_site(entry: dict, thresholds: dict, slack_webhook: str | None) -> Tuple[str, str, int]:
    host = entry.get('host')
    port = entry.get('port', 443)
    label = entry.get('name', host)

    try:
        exp = get_certificate_notAfter(host, port)
        days = days_until(exp)
        status = 'OK'
        if days < 0:
            status = 'EXPIRED'
        elif days <= thresholds.get('error_days', 7):
            status = 'ERROR'
        elif days <= thresholds.get('warning_days', 30):
            status = 'WARNING'

        message = f"{label} ({host}:{port}) -> Expires: {exp.isoformat()} UTC ({days} days) [{status}]"
        print(message)

        if slack_webhook and status in ('WARNING', 'ERROR', 'EXPIRED'):
            payload = {'text': message}
            try:
                send_slack(slack_webhook, payload)
            except Exception as e:
                print(f"Failed to send Slack alert: {e}", file=sys.stderr)

        return label, status, days

    except Exception as e:
        err_msg = f"{label} ({host}:{port}) -> ERROR retrieving certificate: {e}"
        print(err_msg, file=sys.stderr)
        if slack_webhook:
            try:
                send_slack(slack_webhook, {'text': err_msg})
            except Exception:
                pass
        return label, 'ERROR', -9999

def main():
    parser = argparse.ArgumentParser(description='SSL Certificate Expiry Checker')
    parser.add_argument('-c', '--config', default='websites.yml', help='Path to config YAML')
    parser.add_argument('--no-slack', action='store_true', help='Disable Slack alerts even if webhook provided')
    args = parser.parse_args()

    cfg_path = args.config
    if not os.path.exists(cfg_path):
        print(f'Config file not found: {cfg_path}', file=sys.stderr)
        sys.exit(2)

    cfg = load_config(cfg_path)
    sites = cfg.get('sites', [])
    thresholds = cfg.get('thresholds', {})
    slack_webhook = os.environ.get('SLACK_WEBHOOK_URL')
    if args.no_slack:
        slack_webhook = None

    results = []

    # Паралелно проверяване на сайтовете
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_site = {executor.submit(check_site, site, thresholds, slack_webhook): site for site in sites}
        for future in as_completed(future_to_site):
            results.append(future.result())

    # Определяне на exit code
    codes = {r[1] for r in results}
    exit_code = 0
    if 'ERROR' in codes or 'EXPIRED' in codes:
        exit_code = 2
    elif 'WARNING' in codes:
        exit_code = 1

    sys.exit(exit_code)

if __name__ == '__main__':
    main()
