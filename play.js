// const net = require('net');

const { connect } = require('./client');  //connect looked like this before { connect } //this will return whole connect function
console.log('Connecting ...');
connect(); //calling connect function we imported from client js

// * Setup User Interface 
// * Specifically, so that we can handle user input via stdin
// */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
  }

  // stdin.on('data', (key) => {
  //   if (key === '\u0003') {
  //     process.exit();
  //   }
  // });

  stdin.on('data', (key) => handleUserInput(key));

  return stdin;
}

setupInput();
//  module.exports = connect
//play is like a table of operations calling on different functions importing stuff from different modules etc
//the purpose of not running connect() in client.js is to have more modular code