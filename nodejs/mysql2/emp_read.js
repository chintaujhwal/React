var mysql2 = require('mysql2/promise');

async function emp_read() {
    const con = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees'
    });

    const [result, fields] = await con.execute('select * from employees limit 10'); // Select first 10 rows
    
    for (let i of result) 
        console.log(`${i.emp_no} - ${i.first_name}`)
    con.end()
}

emp_read()