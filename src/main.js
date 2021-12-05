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
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    tenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    eleventhChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    twelfthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    thirteenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fourteenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    fifteenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    sixteenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    seventeenthChallenge(name) {
        let result = 0;
        document.getElementsByClassName(`${name}Result`)[0].innerHTML = result;
    },




    eighteenthChallenge(name) {
        let result = 0;
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