var express = require('express');
var app = express();

var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session-data',
    keys: ['k1'],
    maxAge: 24 * 60 * 60 * 1000
  }))

app.get('/countViews', (req, res) => {
    req.session.count = (req.session.count || 0) + 1;
    req.session.lastaccess  = new Date().toString();
    res.end(`<h1>You viewed this page, ${req.session.count} times</h1> <p>Last viewed at ${req.session.lastaccess}</p>`)
})

app.listen(8888, () => console.log('Server running'));