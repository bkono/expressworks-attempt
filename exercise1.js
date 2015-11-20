var app = require('express')()

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

var port = process.argv[2] || 3000
app.listen(port)
