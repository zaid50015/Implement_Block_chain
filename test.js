const BlockChain = require("./main/BlockChain");


// Test 1: Test adding blocks to the blockchain
const blockchain = new BlockChain();
blockchain.addNewBlock([ "alice sends 1eth to charlie"]);
blockchain.addNewBlock(["bob sends 1eth to alice"]);

console.log("Blockchain after adding blocks:");
blockchain.printBlockChain();

// Test 2: Test blockchain integrity
const isValid = blockchain.isBlockValid();
console.log(`Blockchain is valid: ${isValid}`);

// Test 3: Test tampering detection
blockchain.chain[1].transactions = [{ amount: 100, sender: 'Eve', receiver: 'Mallory' }];
blockchain.chain[1].hash = blockchain.chain[1].generateHash(); // Recalculate tampered hash
const isTamperedValid = blockchain.isBlockValid();
console.log(`Blockchain after tampering: ${isTamperedValid}`);
