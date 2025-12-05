const palindromes = function (string) {
    const forward = [...string].filter(char => /\w+/.test(char))
                               .join('')
                               .toLowerCase();
    const backward = [...forward].reverse().join('');

    return forward === backward ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
