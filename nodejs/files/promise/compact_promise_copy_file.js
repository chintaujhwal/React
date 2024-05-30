const fs = require('fs').promises

let p = fs.readFile('./files/test.txt', 'utf-8');
p.then(
    data => fs.writeFile('./files/test_copy.txt', data)
        .then(() => console.log('Copied!'))
        .catch((error) => console.log('Copying Failed!'))
)