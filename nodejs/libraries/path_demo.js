const path = require('path')

const test = 'c:/classroom/apr30/test.txt';

console.log(path.dirname(test));    // folder -> c:/classroom/apr30
console.log(path.basename(test));   // filename -> test.txt
console.log(path.extname(test));    // extension -> .txt
console.log(path.join("node", "files", "test.txt")) // \node\files\test.txt
console.log(path.normalize("/node/files/path/.."))  // \node\files