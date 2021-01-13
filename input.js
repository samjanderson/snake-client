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

module.exports = {
  setupInput
};
//we dont need to export handleUserInput because its only needed by setupInput, it doesnt need to be called or referenced anywhere else