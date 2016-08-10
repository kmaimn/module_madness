var http = require('http');
var result = require('./moduleThree.js');
var ranNumber = require('./moduleOne.js');
var convertedValue = require('./moduleTwo');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(result.stuff() + result.accountBalance());

  res.end();

}).listen(3000);
console.log(convertedValue(ranNumber()));
