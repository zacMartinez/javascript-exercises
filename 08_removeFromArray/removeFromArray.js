const removeFromArray = function(arr, ...filters) {
    return arr.filter((i) => !filters.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
