var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('<h1>Hello</h1>'));

app.get('/temp', (req, res) => {
    let date = new Date().toString();
    res.send(`<h1>${date}</h1>`)
});

app.get('/user_1', (req, res) => {
    let name =  req.query.name ?? 'Guest';
    res.send(`<h1>Hello, ${name}</h1>`)
})

app.get('/user_2/:name', (req, res) => {
    let name = req.params.name ?? 'Guest';
    res.send(`<h1>Hey, ${name}</h1>`)
})

app.listen(8888, () => console.log('Server running'));
