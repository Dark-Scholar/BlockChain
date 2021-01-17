const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const block1 = bitcoin.createNewBlock(1234, 'ALEXASFHSJADFH', 'TOMASFHAFH');
const block2 = bitcoin.createNewBlock(1412, 'FREDASFHSJADFH', 'MATTASFHAFH');
const lastBlock = bitcoin.getLastBlock();

const transaction1 = bitcoin.createNewTransaction(200, 'MARKASJFJSDAHF', 'BILLDFJIASDFHJ');
const block3 = bitcoin.createNewBlock(3214, 'MARKASJFJSDAHF', 'BILLDFJIASDFHJ');

// Hash Testing
const previousBlockHash = '0ANDDDFHDJFSFLHKSFH';
const currentBlockData = [
    {
        amount: 1235,
        sender: 'N9DSAFDGJSGNDSFG',
        recipient: 'KFNSKDHGSFHGSJFDHG',
    },
    {
        amount: 23,
        sender: '9SAFFDSKGFHGKGGFDS',
        recipient: 'FSJFGJFSGJDFGJ8',
    },
    {
        amount: 75,
        sender: 'JJFJDSFJKGS8888',
        recipient: 'FDNSKFSDGSJHG8',
    }
];

const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(hash);