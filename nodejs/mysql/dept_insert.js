var {con} = require('./util')

con.connect((err) => {
    if (err) throw err;

    con.query('insert into departments (dept_no, dept_name) values (?,?)', ['d011', 'Direction'], (err, result) => {
        if (err) throw err;
        
        // console.log(result);
        if (result.affectedRows == 0)
            console.log("Sorry! Department couldn't be inserted")
        else
            console.log('Department inserted')
        con.end()
    })
})
