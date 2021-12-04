// Common code shared between challenges.

const getCommonBinaryBits = (arr, index = null) => {
    ones = [];

    if (index === null) {
        arr.forEach(binaryNumber => {
            binaryNumber.split('').forEach((digit, i) => {
                if (ones[i] === undefined) ones[i] = parseInt(digit);
                else ones[i] += parseInt(digit);
            });
        });
    
    } else {
        arr.forEach(binaryNumber => {
            if (ones[index] === undefined) ones[index] = parseInt(binaryNumber[index]);
            else ones[index] += parseInt(binaryNumber[index]);
        });
    }

    if (null !== index) console.log(ones, arr.length - ones[index], ones.map(totalOnes => (totalOnes >= arr.length - totalOnes) ? 1 : 0).join(''))

    let gammaRate = ones.map(totalOnes => (totalOnes >= arr.length - totalOnes) ? 1 : 0).join(''),
        epsilonRate = gammaRate.split('').map(n => n == 0 ? 1 : 0).join('');
    
    return [ gammaRate, epsilonRate ];
}