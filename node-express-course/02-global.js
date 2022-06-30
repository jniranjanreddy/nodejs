// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log("Hey this is the PWD", __dirname)
console.log("Hey this is the fileName", __filename)
setInterval(() => {
  console.log('hello world')
}, 1000)