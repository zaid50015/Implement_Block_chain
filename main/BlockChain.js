const Block = require('./Block')
const POW = require('../utils/pow');
class BlockChain {
  constructor() {
    this.chain = [new Block(0, [])]; //the first entry here specifies the creation of  genesis block
    this.difficulty = 3;
    this.adjustmentInterval = 100; // increase difficulty after every 100 blocks
  }
  //this function returns the lenght of the block chain
  getBlockChainLength() {
    return this.chain.length;
  }
  //this returns the latest block present in the block chain
  getLatestBlock() {
    return this.chain[this.getBlockChainLength() - 1];
  }
 
  //This function prints our entire block chain
  printBlockChain() {
    console.log("Block-Chain", this.chain);
  }
  // This function mines and the adds the block to block chain
  addNewBlock(transactions) {
    const blockChainLength = this.getBlockChainLength();
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(blockChainLength, transactions, latestBlock.hash) //Mining a new Block
    newBlock.mineBlock(this.difficulty);// Adding new Block to the block chain
    this.chain.push(newBlock);
    this.difficulty = POW(newBlock,latestBlock,this.difficulty);
  }
  isBlockValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      //checking if the current block hash is equal to the hash created by the block
      //checking if the hash of the previous block stored in current block is equal to the prevHash of the block
      if (currentBlock.hash !== currentBlock.generateHash() || currentBlock.prevHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
};
module.exports = BlockChain