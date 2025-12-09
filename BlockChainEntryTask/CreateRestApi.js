const express = require('express');
const bodyParser = require('body-parser');
const Block = require('./Block');
const Blockchain = require('./Blockchain');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

const blockchain = new Blockchain();

// Endpoint to get all blocks
app.get('/blocks/all', (req, res) => {
  const blocks = db.getAllBlocks();
  res.json(blocks);
});

// Endpoint to get block by hash
app.get('/block/hash', (req, res) => {
  const hash = req.query.hash;
  const block = db.getBlockByHash(hash);
  if (block) {
    res.json(block);
  } else {
    res.status(404).send('Block not found');
  }
});

// Endpoint to add a new block
app.post('/blocks', (req, res) => {
  const data = req.body.data;
  const block = new Block(data, blockchain.getLatestBlock().hash);
  blockchain.addBlock(block);
  db.saveBlock(block);
  res.json(block);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
