var express = require('express');
var app = express();

var mysql2 = require('mysql2/promise');

async function getDepartments() {
    const con = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "employees"
    });

    const [results, fields] = await con.query("select * from departments");

    return results;
}

app.use(express.static('public'))

app.get('/', async (req, res) => {
    let departments = await getDepartments();
    let output = "<h1>Departments</h1> <ul>";
    for (let i of departments)
        output += `<li>${i.dept_no} - ${i.dept_name}</li>`;
    output += "</ul>";
    res.end(output);
})

app.listen(8888, () => console.log("Server running"));