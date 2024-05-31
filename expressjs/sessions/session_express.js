var express = require('express');
var app = express();

var session = require('express-session');

app.use(session({
    name: 'session-data',
    maxAge: 24 * 60 * 60 * 1000,
    resave: false,
    secret: 'abc',
    saveUninitialized: false
}))

app.get('/names', (req, res) => {
    names = (req.session.names ?? [])
    if(req.query.name) {
        names.push(req.query.name)
        req.session.names = names
    }
    let output = names.join(", ")
    res.send(`<h1>${output}</h1>`)
})

app.listen(8888, () => console.log('Server running'));