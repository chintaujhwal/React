var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('interest'));

app.get('/interest', (req, res) => {
    let amount = req.query.amount;
    res.render('interest_result', {amount: amount, interest: amount*0.15})
});

app.listen(8888, () => console.log('Server running'))