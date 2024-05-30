var {con} = require('./util')

con.connect((err) => {
    if (err) throw err;

    con.query('select * from employees', (err, employees) => {
    // con.query('select * from employees where emp_no = ?',[499999], (err, employees) => {
        if (err) throw err;

        console.log(employees);
        // for (let i of employees) 
        //     console.log(`${i.emp_no} - ${i.first_name}`)
        con.end()
    })
})