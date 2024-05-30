const fs = require('fs')

fs.readFile('./files/names.txt', 'utf-8', (error, data) => {
    if(error)
        console.log(error.message)
    else
        console.log(data)
});

console.log('Started reading....')