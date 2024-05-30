const fs = require('fs').promises

let p = fs.readFile('./files/test.txt', 'utf-8');
p.then(
    data => {
        let wp = fs.writeFile('./files/test_copy.txt', data)

        wp.then(
            () => console.log('Copied!'),
            (error) => console.log('Copying Failed!')
        )
    },
    error => console.log('Reading Failed!')
)