// const net = require('net');

const { connect } = require('./client');  //connect looked like this before { connect } //this will return whole connect function
const { setupInput } = require('./input');
console.log('Connecting ...');

setupInput(connect());

//play is like a table of operations calling on different functions importing stuff from different modules etc
//the purpose of not running connect() in client.js is to have more modular code