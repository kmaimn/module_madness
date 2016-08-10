var ranNumber = function () {
  var number = randomWholeNumber(100, 1000000);
  // var number = number.toString();
  return number;
};

function randomWholeNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = ranNumber;
