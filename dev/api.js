const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

// Get the whole blockchain
app.get('/blockchain', function (request, response) {
    
});

// Create a new transaction
app.post('/transaction', function (request, response) {
    let body = request.body;
    response.send(`You have sent ${body.amount} to address ${body.recipient}`);
});

// 'Mine" (create) the block
app.get('/mine', function (request, response) {

});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});