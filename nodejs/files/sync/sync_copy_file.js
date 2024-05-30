const fs = require('fs')

try {
    const data = fs.readFileSync('./files/names.txt', 'utf-8');
    fs.writeFileSync('./files/names_copy.txt', data);
    console.log('Copied!')
}
catch(error) {
    console.log(error)
}

