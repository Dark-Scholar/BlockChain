const Blockchain = require('./blockchain');
const Block = require('./block');

const bitcoin = new Blockchain();
const block1 = bitcoin.createNewBlock(1234, 'ALEXASFHSJADFH', 'TOMASFHAFH');
const block2 = bitcoin.createNewBlock(1412, 'FREDASFHSJADFH', 'MATTASFHAFH');


console.log(bitcoin);