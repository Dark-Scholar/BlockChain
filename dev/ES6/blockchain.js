const Block = require('./block');

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