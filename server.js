var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");

// app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/assets'))
// app.use(express.static(__dirname + '/assets'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})
// var clientRoutes = require('./app/routes/routes.js')(app, express);
// app.use(clientRoutes);

app.listen(port);
console.log('Blog client is spinning on port', port)