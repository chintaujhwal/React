var mysql = require('mysql');

var con = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'root',
database: 'employees'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.end()
});