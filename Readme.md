# Basic Blockchain

This project implements a simple blockchain with Proof-of-Work (PoW) and transaction handling. The blockchain stores blocks with transaction data, and each block is validated using a hashing mechanism. The project demonstrates the basics of blockchain concepts and tampering detection.

## Features:
- Create and mine blocks with transactions.
- Verify the integrity of the blockchain.
- Detect any tampering attempts with the blockchain.

## Functionality:
- **Proof-of-Work (PoW):** Blocks are mined using a computational process where the block's hash must start with a specified number of zeros (difficulty).
- **Transaction Handling:** Each block can contain transactions, and they are printed along with the block details.
- **Blockchain Validation:** The blockchain checks if the current block's hash matches the computed hash and if the previous block's hash is correctly stored.

## Running the Project:

1. Clone the repository:
    ```bash
    git clone https://github.com/zaid50015/Implement_Block_chain.git
    cd basic_block_chain
    ```

2. Run the tests:
    ```bash
    npm test
    ```

## Test Output:

Below is the test output that demonstrates the basic functionality of the blockchain:
Block mined: 000505f39fe7195d420057910868943b4fdbf63c264861aef1e975e9d234778b
Block mined: 000ea5ec2bc1f1c2eb66adc4c68eeb369e2b5efb33f000fb0e958915fca1132c
Blockchain after adding blocks:
Block-Chain [
  Block {
    index: 0,
    transactions: [],
    prevHash: '',
    timestamp: 1738328907812,
    hash: '820565c0e82b60ca59ee3c256715637cbd5b76926e332aec885ef52c6f88a96e',
    nonce: 0
  },
  Block {
    index: 1,
    transactions: [ 'alice sends 1eth to charlie' ],
    prevHash: '820565c0e82b60ca59ee3c256715637cbd5b76926e332aec885ef52c6f88a96e',
    timestamp: 1738328907813,
    hash: '000505f39fe7195d420057910868943b4fdbf63c264861aef1e975e9d234778b',
    nonce: 501
  },
  Block {
    index: 2,
    transactions: [ 'bob sends 1eth to alice' ],
    prevHash: '000505f39fe7195d420057910868943b4fdbf63c264861aef1e975e9d234778b',
    timestamp: 1738328907819,
    hash: '000ea5ec2bc1f1c2eb66adc4c68eeb369e2b5efb33f000fb0e958915fca1132c',
    nonce: 9851
  }
]
Blockchain is valid: true
Blockchain after tampering: false


