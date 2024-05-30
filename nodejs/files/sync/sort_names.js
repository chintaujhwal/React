const fs = require('fs')

const data = fs.readFileSync('./files/names.txt', 'utf-8');
const lines = data.split('\n')

for (let i of lines.sort()) {
    console.log(i)
}


