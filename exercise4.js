var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''))
})

var port = process.argv[2] || 3000
app.listen(port)
