var {con} = require('./util')

con.connect((err) => {
    if (err) throw err;

    con.query('update departments set dept_name = ? where dept_no = ?', ['Animation', 'd011'], (err, result) => {
        if (err) throw err;
        
        // console.log(result);
        if (result.affectedRows == 0)
            console.log("Sorry! dept_no not found")
        else
            console.log('Department updated')
        con.end()
    })
})
