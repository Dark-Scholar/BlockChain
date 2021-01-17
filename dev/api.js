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

// Create a new transaction
app.post('/transaction', function (request, response) {
    let body = request.body;
    response.send(`You have sent ${body.amount} to address ${body.recipient}.`);
});

// 'Mine" (create) the block
app.get('/mine', function (request, response) {

});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});