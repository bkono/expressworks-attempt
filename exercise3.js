var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

var port = process.argv[2] || 3000
app.listen(port)
