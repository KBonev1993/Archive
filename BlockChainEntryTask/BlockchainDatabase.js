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
