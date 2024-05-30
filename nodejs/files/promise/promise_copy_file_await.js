const fs = require("fs").promises

async function copyFile() {
    try {
        console.log("About to read!")
        let data = await fs.readFile('./files/names.txt', "utf-8")

        console.log("About to write!")
        await fs.writeFile('./files/names_copy.txt', data)

        console.log("Copied!")
    }
    catch (error) {
        console.log(error.message)
    }
}

copyFile() 

for(let i = 1; i <= 20; i++)
   console.log(i)