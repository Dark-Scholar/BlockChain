/**
 * ES6 Blockchain Block
 * 
 * @version 2.0.0
 * 
 * @author Luke McCann
 */

class Transaction {
    constructor(amount, sender, recipient) {
        this.amount = amount;
        this.sender = sender;
        this.recipient = recipient;
    }
}

module.exports = Transaction;