const fs = require('fs').promises

let p = fs.readFile('./files/names.txt', 'utf-8');
p.then(
    data => console.log(data),
    error => console.log(error.message)
)

console.log('The End!')