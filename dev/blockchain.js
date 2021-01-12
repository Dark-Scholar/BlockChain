/**
 * ES5 Blockchain
 * 
 * @version 1.0.0
 * 
 * @author Luke McCann
 */
function Blockchain() {
    this.chain = []; 
    this.newTransactions = []; 
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };

    // Clear newTransactions
    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length -1];
}

module.exports = Blockchain;