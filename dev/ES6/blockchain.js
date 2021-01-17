const Block = require('./block');
const Transaction = require('./transaction');

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
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = new Block(
            this.chain.length + 1,
            this.pendingTransactions,
            nonce,
            previousBlockHash,
            hash
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
}

module.exports = Blockchain;