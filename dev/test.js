const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, '0INA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(111, '0IANSDF04N09', '0INA90SDNF90N');
bitcoin.createNewBlock(2899, '0INA90SDNF90N', '0IANSDF04N09');

console.log(bitcoin);