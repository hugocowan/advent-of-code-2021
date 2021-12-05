// Common code shared between challenges.

const getCommonBinaryBits = (arr, index = null) => {
    ones = [];

    // Get all the common digits
    if (index === null) {
        arr.forEach(binaryNumber => {
            binaryNumber.split('').forEach((digit, i) => {
                if (ones[i] === undefined) ones[i] = parseInt(digit);
                else ones[i] += parseInt(digit);
            });
        });
    
    } else {
        // Get the common digit at a specific index
        arr.forEach(binaryNumber => {
            if (ones[index] === undefined) ones[index] = parseInt(binaryNumber[index]);
            else ones[index] += parseInt(binaryNumber[index]);
        });
    }

    let gammaRate = ones.map(totalOnes => (totalOnes >= arr.length - totalOnes) ? 1 : 0).join(''),
        epsilonRate = gammaRate.split('').map(n => n == 0 ? 1 : 0).join('');
    
    return [ gammaRate, epsilonRate ];
}

const getNthWinningBingoBoardScore = (n = 1) => {
    let result = 0, winningBoardCount = 0, matchedNumbers = {}, tempBoards = JSON.parse(JSON.stringify(bingoBoards));


    checkDraw:
    // Go through every 
    for (let drawIndex = 0; drawIndex < bingoDrawSequence.length; drawIndex++) {
        console.log('drawIndex:', drawIndex, '/', bingoDrawSequence.length - 1);
        for (let boardIndex = 0; boardIndex < tempBoards.length; boardIndex++) {
            console.log('boardIndex:', boardIndex, '/', tempBoards.length - 1);
            for (let xIndex = 0; xIndex < 5; xIndex++) {
                // console.log('xIndex:', xIndex, '/', 4);
                let row = tempBoards[boardIndex].slice(xIndex * 5, xIndex * 5 + 5),
                yIndex = row.indexOf(bingoDrawSequence[drawIndex]);

                if (yIndex > -1 && (!matchedNumbers[boardIndex] || !matchedNumbers[boardIndex]['won'])) {
                    matchedNumbers[boardIndex] = matchedNumbers[boardIndex] || {x:[[],[],[],[],[]],y:[[],[],[],[],[]]};
                    matchedNumbers[boardIndex]['x'][xIndex].push(bingoDrawSequence[drawIndex]);
                    matchedNumbers[boardIndex]['y'][yIndex].push(bingoDrawSequence[drawIndex]);
                    
                    // Check if we have 5 matches in a row, either vertically or horizontally.
                    if (
                        matchedNumbers[boardIndex]['x'].filter(arr => arr.length === 5).length > 0 || 
                        matchedNumbers[boardIndex]['y'].filter(arr => arr.length === 5).length > 0
                    ) {

                        winningBoardCount++;

                        console.log(`bingoBoard:\n`, ...tempBoards[boardIndex].slice(0, 5), '\n', ...tempBoards[boardIndex].slice(5, 10), '\n', ...tempBoards[boardIndex].slice(10, 15), '\n', ...tempBoards[boardIndex].slice(15, 20), '\n', ...tempBoards[boardIndex].slice(20, 25));
                        console.log('boardIndex:', boardIndex, 'tempBoards length:', tempBoards.length, 'winningBoardCount:', winningBoardCount);

                        matchedNumbers[boardIndex]['won'] = true;

                        if (winningBoardCount === n) {
                            let unmatchedBoardNumbers = tempBoards[boardIndex].filter(n => bingoDrawSequence.slice(0, drawIndex + 1).indexOf(n) === -1);

                            let total = unmatchedBoardNumbers.reduce((total, n) => total + n);
    
                            result = bingoDrawSequence[drawIndex] * total;
                            
                            console.log('unmatchedBoardNumbers:', unmatchedBoardNumbers, 'total:', total, 'drawIndex:', drawIndex, 'draw:', bingoDrawSequence[drawIndex], 'result:', result);
                            console.log('bingoDrawSequence:', bingoDrawSequence.slice(0, drawIndex + 1), 'matchedNumbers[boardIndex]:', matchedNumbers[boardIndex]);
                            // console.log(`bingoBoard ${boardIndex}:\n`, ...tempBoards[boardIndex].slice(0, 5), '\n', ...tempBoards[boardIndex].slice(5, 10), '\n', ...tempBoards[boardIndex].slice(10, 15), '\n', ...tempBoards[boardIndex].slice(15, 20), '\n', ...tempBoards[boardIndex].slice(20, 25));
                            break checkDraw;
                        }
                    }
                }
            }
        }
    }

    return result;
}