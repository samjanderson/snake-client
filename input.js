let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function handleUserInput (key) {
    if (key === 'w') {
      connection.write("Move: up");
      console.log('Up');
    }
    else if (key === 'a') {
      connection.write("Move: left");
      console.log('Left');
    }
    else if (key === 's') {
      connection.write("Move: down");
      console.log('Down');
    }
    else if (key === 'd') {
      conn.write("Move: right");
      console.log('Right');
    }
    else if (key === '\u0003') {
      console.log('You Lose.');
      process.exit()
    }
  });  /// client in on connect from node.js
  return stdin;
}



module.exports = { setupInput };
//we dont need to export handleUserInput because its only needed by setupInput, it doesnt need to be called or referenced anywhere else