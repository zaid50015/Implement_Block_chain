const POW = (currentBlock , previousBlock, difficulty) => { // this module will look at the time difference between the current block and the previous block and adjust the difficulty accordingly
    if(difficulty <= 8){ // limit of increasing difficulty as we are considering int range ~= 10^9
    let timeDifference = (currentBlock.timeStamp - previousBlock.timeStamp)/(60000);
    let newDifficulty = difficulty;
    if(timeDifference < 5){ // increasing the difficulty if the time difference is less than 2 minutes
        newDifficulty = newDifficulty+1;
        console.log("Minning difficulty increased: ", newDifficulty);
    }
    if(timeDifference > 7){ // decreasing the difficulty if the time difference is more than 5 minutes
        newDifficulty = newDifficulty-1;
        console.log("Minning difficulty decreased: ", newDifficulty);
    }
    return newDifficulty;
    }
    else{ // if the difficulty is already at the limit then no change in difficulty
        console.log("Minning difficulty not changed ");
        return difficulty;
    }
}
module.exports = POW;