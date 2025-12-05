const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(addends) {
	return addends.reduce((sum, addend) => {return sum + addend}, 0);
};

const multiply = function(factors) {
  return factors.reduce((multiple, factor) => multiple * factor, 1);
};

const power = function(b, n) {
  return multiply(Array(n).fill(b));
};

const factorial = function(n) {
  if (n > 0) {
    return multiply([...Array(n).keys().map(i => ++i)]); 
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
