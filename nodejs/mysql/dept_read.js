var { con } = require('./util')

con.connect(function (err) {
    if (err) throw err;

    con.query("select * from departments",
        function (err, departments) {
            if (err) throw err;
            
            console.log(departments);
            // for (let i of departments) {
            //     console.log(`${i.dept_no} - ${i.dept_name}`)
            // }
            con.end()
        })
});