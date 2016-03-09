var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressSession = require('express-session');
var corsOptions = {
  origin: 'http://localhost:8989'
};
var config = require('./config.js');
var profiles = require('./controllers/profileCtrl');
var users = require('./controllers/userCtrl');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(expressSession({secret: config.sessionSecret }));

app.post('/api/login', users.login);
app.get('/api/profiles', profiles.friendGetter);








app.listen(8989, function(){
  console.log('listening on port 8989');
});
