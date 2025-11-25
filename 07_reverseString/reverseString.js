const reverseString = function(string) {
    let str = '';
    const chars = string.split('');

    for(let i = chars.length - 1; i >= 0; i--) {
        str += chars[i];
    }

    return str;
};

// Do not edit below this line
module.exports = reverseString;
