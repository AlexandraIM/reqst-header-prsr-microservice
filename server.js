
// init project
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get("/", function(request, response) {
  response.sendFile(process.cwd() + '/views/index.html');
});
app.get("/whoami", function (request, response) {

  var object = {
    "ipaddress" : request.header('x-forwarded-for').split(',')[0],
    "language"  : request.header('accept-language').split(',')[0],
    "software"  : request.header('user-agent').split(')')[0].split('(')[1]
  }

  response.send(object);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
