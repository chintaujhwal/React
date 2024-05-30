var express = require('express');
var app = express();
var path  = require('path');

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/login', (req, res) => res.render("login"));

app.post('/login', (req, res) => {
    res.cookie('username', req.body.username, {maxAge: 20 * 60 * 60* 1000});
    res.redirect('home');
})

app.get('/home', (req, res) => {
    if(req.cookies.username)
        res.send(`<h1>Welcome ${req.cookies.username}</h1>`);
    else
        res.redirect('login');
})

app.listen(8888, () => console.log("Server running"));




