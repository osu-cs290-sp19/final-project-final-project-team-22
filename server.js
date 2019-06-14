var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

var selectData = require('./selectData');
var infoData = require('./infoData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/tank-heroes', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/tank-heroes.html');
});

app.get('/damage-heroes', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/damage-heroes.html');
});

app.get('/support-heroes', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/support-heroes.html');
});

app.get('/support-heroes/:hero', function (req, res) {
  var hero = req.params.hero;
    res.status(200).render('infoPage', infoData[hero]);
});

app.get('/tank-heroes/:hero', function (req, res) {
  var hero = req.params.hero;
    res.status(200).render('infoPage', infoData[hero]);
});

app.get('/damage-heroes/:hero', function (req, res) {
  var hero = req.params.hero;
    res.status(200).render('infoPage', infoData[hero]);
});

app.get('*',function(req, res){
  res.status(404);
  res.render('404');
});

app.listen(port, function () {
  console.log("*****Server is listening on port******", port);
});
