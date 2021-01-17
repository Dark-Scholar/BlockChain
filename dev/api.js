const { request, response } = require('express');
const express = require('express');
const app = express();

const port = 3000;

// Get the whole blockchain
app.get('/blockchain', function (request, response) {
    
});

// Create a new transaction
app.post('/transaction', function (request, response) {

});

// 'Mine" (create) the block
app.get('/mine', function (request, response) {

});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});