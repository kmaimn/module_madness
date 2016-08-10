// The second module should accept a number and convert it to a USD value.
//
// HINT: You will want to Google examples of this. I found a couple reasonable examples of this in a simple 5-minute search.
var convertedValue = function (number) {
  number = number.toFixed(2);
  number = number.toString();
  number = '$' + number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return number;
}

module.exports = convertedValue;
