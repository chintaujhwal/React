var express = require('express');
var path = require('path');
var app = express();
var port = 8888 

// Process data sent from HTML form using post request 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("interest", {interest : 0 , amount : ''})  
})

// Handle POST request
app.post('/interest', (req, res) => {
  let amount = req.body.amount   // take data from body 
  let interest = amount * 15 / 100 
  res.render("interest" , {interest : interest, amount : amount})  
})

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  