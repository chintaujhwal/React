const fs = require('fs')

function copyData(error, data) {
    if(error)
        console.log('Sorry! File not found');
    else {
        fs.writeFile('./files/names_copy.txt', data, (err) => {
            if(err)
                console.log(err.message)
            else
                console.log('Copied!')
        })
    }
}

fs.readFile('./files/names.txt', 'utf-8', copyData);
console.log('Reading Started')
