// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
var ranNumber = require('./moduleOne.js');
var convertedValue = require('./moduleTwo.js');

exports.accountBalance = function(){
  convertedValue(ranNumber());
  return convertedValue(ranNumber());
}

exports.stuff = function() {
  return 'Account Balance: \n';
}
