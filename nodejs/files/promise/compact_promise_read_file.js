const fs = require('fs').promises

// 1
// fs.readFile('./files/names.txt', 'utf-8').then(
//     data => console.log(data),
//     error => console.log(error.message)
// )

// 2
fs.readFile('./files/names.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

console.log('The End!')