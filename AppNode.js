
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routers = require('./email');
var login = require('./login');
var optcpt = require('./optcpt');
var dailySenarios = require('./dailySenarios');
var fileupload = require('./fileLoad');
var path = require("path");
var postQuesion = require("./postQuestion");
var deleteQuestion = require("./deleteQuestion");
var deleteAnswer = require("./deleteAnswer");
var postAnswer = require("./postAnswer");
var getquestions = require("./getquestions");
var getAnswers = require ("./getAnswers");
var postLikeDislike = require('./postLikeDislike');



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


var port = process.env.PORT || 8080;

var http= require('http');

app.use('/api/email/',routers);
app.use('/api/login/',login);
app.use('/api/optcpt/',optcpt);
app.use('/api/dailySenarios/',dailySenarios);
app.use('/api/fileLoad/', fileupload);
app.use('/api/postQuestion/',postQuesion);
app.use('/api/postAnswer/',postAnswer);
app.use('/api/getquestions/',getquestions);
app.use('/api/getAnswers/',getAnswers);
app.use('/api/postLikeDislike/',postLikeDislike);
app.use('/api/deleteQuestion/',deleteQuestion);
app.use('/api/deleteAnswer/',deleteAnswer);


app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, 'public/build')));
  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  });




var server = http.createServer(app);

server.listen(port);






