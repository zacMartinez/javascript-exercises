const repeatString = function(string, reps) {
    let newString = '';
    if (reps >= 0) {
        for(let i = 0; i < reps; i++) {
            newString += string;
        }
    } else {
        newString += 'ERROR';
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
