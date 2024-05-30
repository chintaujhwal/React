const fs = require('fs')

function showData(error, data) {
    console.log(data)
}

fs.readFile('./files/names.txt', 'utf-8', showData);
console.log('Started Reading....')