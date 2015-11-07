var express = require('express');
var app = express();
var port = process.env.PORT || 8080

var clientRoutes = require('./app/routes/routes.js')(app, express);
app.use(clientRoutes);

app.listen(port);
console.log('Blog client is spinning on port', port)