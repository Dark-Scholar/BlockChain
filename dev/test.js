const Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();

const previousBlockHash = 'A123AD93J';
const currentBlockData = [
    {
        amount: 10,
        sender: 'DSAFJDHFSDSH',
        recipient: 'DSAJFDHFDSF'
    },
    {
        amount: 50,
        sender: 'DDHFDHSFJJ',
        recipient: 'JFISDFJDSJF'
    }
];

const nonce = 100;

let result = bitcoin.hasBlock(previousBlockHash, currentBlockData, nonce);

console.log(result);