const fs = require('fs')

const data = fs.readFileSync('./files/names.txt', 'utf-8');
console.log(data)