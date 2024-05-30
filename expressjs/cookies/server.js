var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/create", (req, res) => {
    res.cookie(req.query.name, req.query.value, {maxAge: 20 * 60 * 60* 1000}) // name: LOCATION_TYPE ? City, value: LOCATION_NAME ? Sydney
    res.end(`<h1>Cookie created</h1> Name: ${req.query.name} <br> Value: ${req.query.value}`)
})

app.get("/show", (req, res) => {
    if(req.cookies.city)
        res.end(`You live in ${req.cookies.city}`)
    else
        res.end(`Sorry! I don't know where you live`)
})

app.get("/list", (req, res) => {
    let output = "<ul>";
    for (let key in req.cookies)
        output += `<li>${key} - ${req.cookies[key]}</li>`
    output += "</ul>"
    res.send(output)
})

app.listen(8888, () => console.log("Server running"));