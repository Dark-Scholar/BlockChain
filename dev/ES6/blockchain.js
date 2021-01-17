const Block = require('./block');
const Transaction = require('./transaction');
const sha256 = require('sha256');

/**
 * ES6 Blockchain
 * 
 * @version 2.0.0
 * 
 * @author Luke McCann
 */
class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];

        this.createNewBlock(50, '0', '0');
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = new Block(
            this.chain.length + 1,
            this.pendingTransactions,
            nonce,
            previousBlockHash,
            hash,
        );

        this.clearPendingTransactions();
        this.addToChain(newBlock);

        return newBlock;
    }

    createNewTransaction(amount, sender, recipient) {
        const newTransaction = new Transaction(amount, sender, recipient);
        this.pendingTransactions.push(newTransaction);

        return this.getLastBlock()['index'] + 1;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    clearPendingTransactions() {
        this.pendingTransactions = [];
    }

    addToChain(block) {
        this.chain.push(block);
    }

    hashBlock(previousBlockHash, currentBlockData, nonce) {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        return sha256(dataAsString);
    }

    proofOfWork(previousBlockHash, currentBlockData) {
        let nonce = -1;
        let hash = '';

        do {
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        } while (hash.substr(0, 4) !== '0000');

        return nonce;
    }

    getGenesisBlock() {
        return this.chain[0];
    }
}

module.exports = Blockchain;