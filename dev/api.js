const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./ES6/blockchain');
const Block = require('./ES6/block');
const bitcoin = new Blockchain();

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

// 'Mine" (create) the block
app.get('/mine', function (request, response) {

});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});