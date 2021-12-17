// Challenges stored in an object
const challenges = {
    firstChallenge(name) {
        let result = 0;
        let prevMeasurement = null;

        measurementsArray.forEach(m => {
            if (null !== prevMeasurement) {
                if (m - prevMeasurement > 0) result++;
            }
            prevMeasurement = m;
        });

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    secondChallenge(name) {
        let result = 0, 
        prevMeasurement = null, 
        measurements = [], 
        measurement = null;

        for (let i = 0; i <= measurementsArray.length; i++) {

            // If we have a previous measurement and a current one, check them.
            // console.log(prevMeasurement, measurement);
            if (prevMeasurement && measurement) {
                if (measurement - prevMeasurement > 0) result++;
            }

            // Push the current measurement
            measurements.push(measurementsArray[i]);

            // Get the first and last measurements. The others are handled better than this first one.
            if (i === 2 || i === measurementsArray.length) measurement = measurements.reduce((total, m) => m + total);

            // If we have four measurements, get rid of the 1st one 
            // then update measurement and prevMeasurement.
            if (measurements.length === 4) {
                measurements.shift();
                prevMeasurement = measurement;
                measurement = measurements.reduce((total, m) => m + total);
            }
        }

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirdChallenge(name) {
        let result = 0,
            horizontalPos = 0,
            depthPos = 0;

        positionsArray.forEach(pos => {
            if (pos.includes('forward')) {
                horizontalPos += parseInt(pos.substr(8));
            } else if (pos.includes('down')) {
                depthPos += parseInt(pos.substr(5));
            } else {
                depthPos -= parseInt(pos.substr(3));
            }
        });
        
        result = horizontalPos * depthPos;

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourthChallenge(name) {
        let result = 0,
            horizontalPos = 0,
            depthPos = 0,
            aim = 0;

        positionsArray.forEach(pos => {
            if (pos.includes('forward')) {
                horizontalPos += parseInt(pos.substr(8));
                depthPos += (aim * parseInt(pos.substr(8)));
            } else if (pos.includes('down')) {
                aim += parseInt(pos.substr(5));
            } else {
                aim -= parseInt(pos.substr(3));
            }
        });
        
        result = horizontalPos * depthPos;

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fifthChallenge(name) {
        let result = 0, 
            [ gammaRate, epsilonRate ] = getCommonBinaryBits(diagnosticReport);

        result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
        console.log(gammaRate,parseInt(gammaRate, 2), epsilonRate,parseInt(epsilonRate, 2), result);
        
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    sixthChallenge(name) {
        let result = 0, gammaRate = 0, epsilonRate = 0, oxygenGeneratorRating = 0, cO2ScrubberRating = 0,
            tempGammaRateResults = diagnosticReport, tempEpsilonRateResults = diagnosticReport;

        for (let i = 0; i < diagnosticReport[0].length; i++) {
            [ gammaRate, epsilonRate ] = getCommonBinaryBits(tempGammaRateResults, i);
            tempGammaRateResults = tempGammaRateResults.filter(binaryNumber => binaryNumber.substr(i, 1) === gammaRate);

            if (tempGammaRateResults.length === 1) oxygenGeneratorRating = tempGammaRateResults[0];

            [ gammaRate, epsilonRate ] = getCommonBinaryBits(tempEpsilonRateResults, i);
            tempEpsilonRateResults = tempEpsilonRateResults.filter(binaryNumber => binaryNumber.substr(i, 1) === epsilonRate);
            
            if (tempEpsilonRateResults.length === 1) cO2ScrubberRating = tempEpsilonRateResults[0];
        }
        
        result = parseInt(oxygenGeneratorRating, 2) * parseInt(cO2ScrubberRating, 2);

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    seventhChallenge(name) {
        let result = getNthWinningBingoBoardScore();
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    eigthChallenge(name) {
        let result = getNthWinningBingoBoardScore(100);
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    ninthChallenge(name) {
        let result = getOverlappingCoords();
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    tenthChallenge(name) {
        let result = getOverlappingCoords(true);
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    eleventhChallenge(name) {
        let result = getLanternFishNumber(80);

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twelfthChallenge(name) {
        let result = getLanternFishNumber(256);

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirteenthChallenge(name) {
        let result = 0;
        const sortedCrabPositions = crabPositions.slice().sort((a,b) => a - b);
        const middle = Math.floor(sortedCrabPositions.length / 2);

        let medianCrab = (sortedCrabPositions.length % 2 === 0) ? Math.round((sortedCrabPositions[middle - 1] + sortedCrabPositions[middle]) / 2) : sortedCrabPositions[middle];

        console.log(medianCrab);

        sortedCrabPositions.forEach(crabPos => {
            result += Math.abs(crabPos - medianCrab);
        });

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourteenthChallenge(name) {
        let result = 0;

        const avgCrabPos = Math.floor(crabPositions.reduce((t, n) => t + n) / crabPositions.length);
        const crabPosList = crabPositions.reduce((obj, crabPos) => {
            obj[crabPos] ? obj[crabPos]++ : obj[crabPos] = 1;
            return obj;  
        }, {});

        Object.keys(crabPosList).forEach(crabPos => {
            let diffFromAvg = Math.abs(crabPos - avgCrabPos),
                fuelCost = 0;
        
            for (let i = diffFromAvg; i > 0; i--) {
                fuelCost += i;
            }

            result += fuelCost * crabPosList[crabPos];
        });

        console.log('crabPositions:', crabPositions, 'avgCrabPos:', avgCrabPos, 'crabPosList:', crabPosList, 'result:', result);

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fifteenthChallenge(name) {
        let result = 0;

        displaySignals.forEach(signal => {
            // Get the number of 1s, 4s, 7s and 8s
            result += signal.reduce((total, letters, i) => {
                if (i > 9 && [ 2, 3, 4, 7 ].includes(letters.length)) console.log(letters);
                return (i > 9 && [ 2, 3, 4, 7 ].includes(letters.length)) ? ++total : total
            }, 0);
        });

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    sixteenthChallenge(name) {
        let result = 0;

        displaySignals.forEach(signal => {

            const signalLetterOrder = ['a','b','c','d','e','f','g'];
            const signalLetters = ['', '',  '','','','',''];

            const numberDict = [ 'abcefg', 'cf', 'acdeg', 'acdfg', 'bcdf', 'abdfg', 'abdefg', 'acf', 'abcdefg', 'abcdfg' ];

            const [ displaySignals, output ] = [ signal.slice(0, 10), signal.slice(10) ];

            const one = displaySignals.find(code => code.length === 2);
            const three = displaySignals.find(code => code.length === 5 && code.includes(one.split('')[0]) && code.includes(one.split('')[1]));
            const four = displaySignals.find(code => code.length === 4);
            const seven = displaySignals.find(code => code.length === 3);

            // a
            signalLetters[0] = seven.split('').filter(l => !signalLetters.includes(l) && !one.split('').includes(l))[0];

            // b
            signalLetters[1] = four.split('').filter(l => !signalLetters.includes(l) && !three.split('').includes(l))[0];

            const five = displaySignals.find(code => code.length === 5 && code.includes(signalLetters[1]));
            const two = displaySignals.find(code => code.length === 5 && code !== three && code !== five);
            
            // c
            signalLetters[2] = two.split('').filter(l => !signalLetters.includes(l) && one.split('').includes(l))[0];

            // d
            signalLetters[3] = two.split('').filter(l => !signalLetters.includes(l) && four.split('').includes(l))[0];

            // e
            signalLetters[4] = two.split('').filter(l => !signalLetters.includes(l) && !three.split('').includes(l))[0];
            
            // f
            signalLetters[5] = one.split('').filter(l => !signalLetters.includes(l))[0];
            
            // g
            signalLetters[6] = two.split('').filter(l => !signalLetters.includes(l))[0];

            const decodedSignalLetters = signalLetters.reduce((obj, l, i) => {
                obj[l] = signalLetterOrder[i];
                return obj;
            }, {});
            
            let number = parseInt(output.reduce((digits, code, i) => {
                let decodedLetter = code.split('').map(letter => decodedSignalLetters[letter]).sort().join('');
                
                digits += numberDict.indexOf(decodedLetter);

                return digits;
            }, ''));

            result += number;
        });

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    seventeenthChallenge(name) {
        let result = 0;

        heightMap.forEach((heightList, i) => {
            const prevHeights = heightMap[i - 1] ? heightMap[i - 1].split('') : false;
            const heights = heightList.split('');
            const nextHeights = heightMap[i + 1] ? heightMap[i + 1].split('') : false;

            heights.forEach((height, j) => {
                if (
                    (!heights[j - 1] || (heights[j - 1] && height < heights[j - 1]) ) && 
                    (!heights[j + 1] || (heights[j + 1] && height < heights[j + 1]) ) && 
                    (!prevHeights || (prevHeights && prevHeights[j] && height < prevHeights[j]) ) &&
                    (!nextHeights || (nextHeights && nextHeights[j] && height < nextHeights[j]) )
                ) {
                    result += parseInt(height) + 1;
                }
            });
        });

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    eighteenthChallenge(name) {
        let result = 0;
        const basins = []; // One array per basin

        heightMap.forEach((heightList, i) => {
            const heights = heightList.split('');
            

            heights.forEach((height, j) => {

                // console.log(i, j);

                if (
                    height !== '9'
                ) {

                    const adjacentBasinIndex = basins.reduce((index, basin, k) => {

                        if (index !== -1) return index;
                    
                        basin.forEach(coords => {
                            if (
                                (coords[1] === i && (coords[0] === j + 1 || coords[0] === j - 1  || coords[0] === j) ) ||
                                (coords[0] === j && (coords[1] === i + 1 || coords[1] === i - 1 || coords[1] === i) )
                            ) {
                                index = k;
                            }
                        });
                        return index;
                    }, -1);

                    if (adjacentBasinIndex !== -1) {
                        // console.log('adding to basin - ', 'height:', height, 'coords:', [j, i]);
                        basins[adjacentBasinIndex].push([j, i]);
                    } else {
                        // console.log('new basin       - ', 'height:', height, 'coords:', [j, i]);
                        basins.push([ [j, i] ]);
                    }
                }
            });
        });

        let threeLargestBasins = basins.sort((a, b) => b.length - a.length).slice(0, 3);

        console.log(basins, threeLargestBasins, threeLargestBasins.reduce((total, basin) => total + basin.length, 0));

        result = threeLargestBasins.reduce((total, basin) => total + basin.length, 0);

        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    nineteenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentiethChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyfirstChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentysecondChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentythirdChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyfourthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyfifthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentysixthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyseventhChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyeighthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twentyninthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtiethChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtyfirstChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtysecondChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtythirdChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirthyfourthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtyfithChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirthysixthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtyseventhChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirtyeighthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirthyninthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtiethChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyfirstChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtysecondChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtythirdChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyfourthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyfithChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtysixthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyseventhChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyeigthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourtyninthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fiftiethChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    }
};

const body = document.getElementsByTagName('body')[0];

// Dynamically create html for each challenge
Object.keys(challenges).forEach(challengeName => {
    body.innerHTML += `<div>
        <button onclick="challenges['${challengeName}']('${challengeName}')">${challengeName.split('Challenge')[0]} Challenge</button> <p>Result: <span class="result ${challengeName}Result"></span></p>
    </div>`;
});