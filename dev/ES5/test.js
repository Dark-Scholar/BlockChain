const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// Hash Tests 
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


let nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
let result = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(result)