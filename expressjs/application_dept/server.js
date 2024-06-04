var mysql2 = require('mysql2/promise');
var path = require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var {database} = require('./database');

async function getDepartments() {
    const con = await mysql2.createConnection(database);
    const [results, fields] = await con.query("select * from departments");
    con.close();

    return results;
}

async function addDepartment(dept_no, dept_name) {
    const con = await mysql2.createConnection(database);
    const [result, fields] = await con.execute("insert into departments values(?,?)", [dept_no, dept_name]);
    con.close();

    if (result.affectedRows == 0)
        return false;
    else
        return true;
}

async function deleteDepartment(dept_no, dept_name) {
    const con = await mysql2.createConnection(database);
    const [result, fields] = await con.execute("delete from departments where dept_no = ?", [dept_no]);
    con.close();

    if (result.affectedRows == 0)
        return false;
    else
        return true;
}

async function updateDepartment(dept_no, dept_name) {
    const con = await mysql2.createConnection(database);
    const [result, fields] = await con.execute('update departments set dept_name = ? where dept_no = ?', [dept_name, dept_no]);
    con.close();

    if (result.affectedRows == 0)
        return false;
    else
        return true;
}

app.get('/', async (req, res) => {
    let depts = await getDepartments();

    if(depts)
        res.render('dept_list', {departments: depts});
    else
        res.render('error');
});

app.get('/add', async (req, res) => {
    res.render('dept_add');
});

app.post('/add', async (req, res) => {
    let dept_no = req.body.deptNo;
    let dept_name = req.body.deptName;
    
    let result = await addDepartment(dept_no, dept_name);
    if(result)
        res.redirect('/');
    else
        res.render('error');
});

app.get('/delete', async (req, res) => {
    let dept_no = req.query.deptNo;

    if(!dept_no) {
        res.send(`<h3>Department <span style='color: orange'>${dept_no}</span> not found</h3>`);
        return;
    }

    let result = await deleteDepartment(dept_no);
    if(result)
        res.redirect('/');
    else
        res.render('error');
})

app.get('/update', async (req, res) => {
    res.render('dept_update', {deptNo: (req.query.deptNo).toString()});
});

app.post('/update', async (req, res) => {
    let dept_no = req.body.deptNo;
    let dept_name = req.body.deptName;
    
    let result = await updateDepartment(dept_no, dept_name);
    if(result)
        res.redirect('/');
    else
        res.render('error');
});

app.listen(8888, () => console.log("Server running"));