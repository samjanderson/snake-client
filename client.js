//  const x = require('./connect');
//const connect = require(../snake-client)
const net = require('net'); //require is importing a different file into your current file ./ importing local file ../ parent folder
//if no dots or slashes importing an actual module, net module does networking to allow connection between client and server
const connect = function () {
  const conn = net.createConnection({ //creates a connection obj you can use to do other functions
    host: '135.23.222.131', //host and port means this is the server were connection 
    port: 50542          //only need to do this one time when importing net module
  });                   //6-9 are instructions for how we can find the server and talk to it

  conn.on('connect', () => {
    console.log('Successfully connected to the name server') //11-13 happens locally on your machine
  })

  //.on(condition, callback)
  conn.on('connect', () => {      //on is an event handler so whenever a specific event happens it runs a callback function
    conn.write('Name: SJA');     //conn.write is what we are sending to the server
  });

  conn.on('data', (data) => {     //when we receive data just console log this data
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn; //this entire connect functions is to return this connection object
}

module.exports = {
  connect
};
//the connect in here refers to the entire connect function module.export is an object
//we are redefining the module.exports object and creating a connect key which holds the connect value inside of it so we can shorthand

