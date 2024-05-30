var {con} = require('./util')

con.connect((err) => {
    if (err) throw err;

    con.query('delete from employees where emp_no = ?', [499998], (err, result) => {
        if (err) throw err;
        
        // console.log(result)
        if (result.affectedRows == 0)
            console.log('Sorry! emp_no not found')
        else
            console.log('Employee deleted')
        con.end()
    })
})
