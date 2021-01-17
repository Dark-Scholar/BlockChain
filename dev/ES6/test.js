const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const block1 = bitcoin.createNewBlock(1234, 'ALEXASFHSJADFH', 'TOMASFHAFH');
const block2 = bitcoin.createNewBlock(1412, 'FREDASFHSJADFH', 'MATTASFHAFH');
const lastBlock = bitcoin.getLastBlock();

const transaction1 = bitcoin.createNewTransaction(200, 'MARKASJFJSDAHF', 'BILLDFJIASDFHJ');
const block3 = bitcoin.createNewBlock(3214, 'MARKASJFJSDAHF', 'BILLDFJIASDFHJ');

console.log(bitcoin);