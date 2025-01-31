const crypto = require('crypto');

// Create a generic block of a blockchain
class Block {
    //Constructor to intalize a block
    constructor(index, transactions, prevHash = '') {
        this.index = index; // Block index in the chain
        this.transactions = transactions; // List of transactions in the block
        this.prevHash = prevHash; // Hash of the previous block
        this.timestamp = Date.now(); // Timestamp of block creation
        this.hash = this.generateHash(); // Hash of the current block
        this.nonce = 0; // Nonce value for Proof-of-Work (PoW)
    }

    // Function to generate the hash for a block
    generateHash() {
        const dataToBeHashed = JSON.stringify({
            index: this.index,
            transactions: this.transactions,
            prevHash: this.prevHash,
            timestamp: this.timestamp,
            nonce: this.nonce
        });
        return crypto.createHash('sha256').update(dataToBeHashed).digest('hex');
    }

    // Function to mine the block (Proof-of-Work)
    mineBlock(difficulty) {
        const target = Array(difficulty + 1).join("0"); // Create a string with 'difficulty' number of zeros
        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++; // Increment nonce
            this.hash = this.generateHash(); // Recalculate hash
        }
        console.log(`Block mined: ${this.hash}`);
    }
}

module.exports = Block;

