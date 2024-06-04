var mysql2 = require('mysql2/promise');
var path = require('path');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())

var {database} = require('./database');

app.get('/departments', async (req, res) => {
    try {
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("select * from departments");
        con.close();
    
        res.json(results);
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
});

app.get('/departments/:dept_no', async (req, res) => {
    try {
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("select * from departments where dept_no = ?", [req.params.dept_no]);
        con.close();
        
        if (results.length > 0)
            res.json(results);
        else
            res.status(404).send("dept_no, not found");
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
        
});

// Insert a new department
app.post('/departments', async (req, res) => {
    try {
        if(!req.body.dept_no || !req.body.dept_name) {
            res.status(400).send("Invalid data");
            return;
        }
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.execute("insert into departments (dept_no, dept_name) values(?, ?)", [req.body.dept_no, req.body.dept_name]);
        con.close();
    
        res.status(201).send(req.body);
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
});

// Delete a department
app.delete('/departments/:dept_no', async (req, res) => {
    try {
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("delete from departments where dept_no = ?", [req.params.dept_no]);
        con.close();
        
        if (results.affectedRows == 1)
            res.status(204).send("");
        else
            res.status(404).send("dept_no, not found");
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
        
});

// Update a department
app.put('/departments/:dept_no', async (req, res) => {
    try {
        if(!req.body.dept_no || !req.body.dept_name) {
            res.status(400).send("Invalid data");
            return;
        }

        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("update departments set dept_name = ? where dept_no = ?", [req.body.dept_name, req.params.dept_no]);
        con.close();
        
        if (results.affectedRows == 1)
            res.status(204).send("Successfully updated");
        else
            res.status(404).send("dept_no, not found");
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }  
});

app.get('/employees', async (req, res) => {
    try {
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("select * from employees");
        con.close();
        
        res.json(results);
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
        
});

app.get('/employees/:gender', async (req, res) => {
    try {
        const con = await mysql2.createConnection(database);
        const [results, fields] = await con.query("select first_name, last_name, gender from employees where gender = ?", [req.params.gender]);
        con.close();
        
        res.json(results);
    }
    catch(ex) {
        console.log("Error: " + ex);
        res.status(500).send(ex.message);
    }
        
});

app.listen(8888, () => console.log("Server running"));