SSL Certificate Expiry Checker

Checks the expiration dates of SSL/TLS certificates for a list of websites and displays the results in a human-readable format. Supports Docker and Slack notifications.
Project Files

    checker.py – main Python script
    websites.yml – configuration file with websites and warning/error thresholds
    Dockerfile – to build Docker image
    docker-compose.yml – for easy container execution
    .gitignore – excludes unnecessary files from git

Requirements
Python 3.11+
Python libraries:

pip install cryptography pyyaml

