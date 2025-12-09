class Block {
  constructor(timestamp, data, previousBlockHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.previousBlockHash = previousBlockHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const crypto = require("crypto");
    const data = this.previousBlockHash + this.timestamp + JSON.stringify(this.data);
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    return hash;
  }

  getPreviousBlockHash() {
    return this.previousBlockHash;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const timestamp = Date.now();
    const data = "This is the genesis block!";
    return new Block(timestamp, data);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousBlockHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isValidChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.getPreviousBlockHash() !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
