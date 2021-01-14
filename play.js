// const net = require('net');

const { connect } = require('./client');  //inside our object we are getting from require we have an object called connect lets pull it out
const { setupInput } = require('./input'); //getting the function setupInput from the file input
console.log('Connecting ...');

setupInput(connect()); //connect returns an object called conn which holds all connectivity stuff

//play is like a table of operations calling on different functions importing stuff from different modules etc
//the purpose of not running connect() in client.js is to have more modular code