const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blockchain", { useNewUrlParser: true });

const transactionSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
});

const blockSchema = new mongoose.Schema({
  timestamp: Number,
  data: [transactionSchema],
  previousBlockHash: String,
  hash: String,
});

const Block = mongoose.model("Block", blockSchema);

const blockchain = new Blockchain();
const blockData = [
  { from: "Alice", to: "Bob", message: "Hello, Bob!" },
  { from: "Bob", to: "Alice", message: "Hello, Alice!" },
];
const newBlock = new Block(Date.now(), blockData);
blockchain.addBlock(newBlock);

newBlock.save(function (err, block) {
  if (err) return console.error
