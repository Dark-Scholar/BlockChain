const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./ES6/blockchain');
const Block = require('./ES6/block');
const bitcoin = new Blockchain();
const { v1: uuidv1 } = require('uuid');

const nodeAddress = uuidv1().split('-').join('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.get('/blockchain', function (request, response) {
    response.send(bitcoin);
});

app.post('/transaction', function (request, response) {
    let body = request.body;
    const blockIndex = bitcoin.createNewTransaction(body.amount, body.sender, body.recipient);
    response.json({ note: `Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function (request, response) {
    const previousBlock = bitcoin.getLastBlock();
    const previousBlockHash = previousBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions, 
        index: previousBlock['index'] + 1,
    };

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    // Reward Miner
    bitcoin.createNewTransaction(7, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    response.json({
        note: "New block mined successfully!",
        block: newBlock
    })
});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});