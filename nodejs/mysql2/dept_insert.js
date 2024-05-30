var mysql2 = require('mysql2/promise');

async function dept_insert() {
    const con = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees'
    });

    const [result, fields] = await con.execute('insert into departments (dept_no, dept_name) values (?,?)', ['d012', 'Music']) 

    console.log(result);
    con.end()
}

dept_insert()