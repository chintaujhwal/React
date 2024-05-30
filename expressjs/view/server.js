var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/temp', (req, res) => {
    var date =  new Date().toString()
    res.render('temp', {value: date})
});

app.get('/course', (req, res) => {
    var course = {
        title: 'React',
        duration: '12 Days',
        fee: 2500,
    }
    res.render('course', {value: course})
});

let courses = [
    {title: 'Mongo', duration: '10 Days', fee: 2000},
    {title: 'Express', duration: '2 Days', fee: 1250},
    {title: 'React', duration: '12 Days', fee: 2500},
    {title: 'Node', duration: '4 Days', fee: 1250}
]

app.get('/course_list', (req, res) => {
    res.render('course_list', {values: courses})
})

app.get('/course_table', (req, res) => {
    res.render('course_table', {values: courses})
})

app.listen(8888, () =>  console.log('Server running'));

