const convertToCelsius = function(fahr) {
  const string = ((fahr - 32) * 5/9).toFixed(1);
  return parseFloat(string);
};

const convertToFahrenheit = function(cel) {
  const string = (cel * 9/5 + 32).toFixed(1);
  return parseFloat(string);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
