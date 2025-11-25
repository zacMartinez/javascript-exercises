const sumAll = function(a, b) {
    const min = Math.min(a, b);
    const max = a === min ? b : a;

    if (Number.isInteger(min) 
        && Number.isInteger(max)
        && min >= 0
        && max >= 0) {
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }

        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
