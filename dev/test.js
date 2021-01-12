const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(8934, 'ADF7EHEJDF', 'ADHHFDSHF7');

bitcoin.createNewTransaction(100, 'ROBFGSSGFSG', 'LUKEFFJGFJG');

bitcoin.createNewBlock(123123, '093hsafnd', 'o4udfndsng87');

console.log(bitcoin.chain[1]);