/**
 * ES6 Blockchain Block
 * 
 * @version 2.0.0
 * 
 * @author Luke McCann
 */
class Block {
    constructor(index, transactions = [], nonce, previousBlockHash, hash) {
        this.index = index;
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.nonce = nonce;
        this.hash = hash;
        this.previousBlockHash = previousBlockHash;
    }
}

module.exports = Block;