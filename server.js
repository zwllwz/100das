var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 3000));



app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());


app.listen(app.get('port'), function () {
  console.log("Server started: http://localhost:" + app.get('port') + '/');
});
