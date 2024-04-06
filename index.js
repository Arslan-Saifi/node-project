var express = require('express')
var ejs = require('ejs')
var bodyParderer = require('body-parderer');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080);
app.use(bodyParderer.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.render('pages/index');
});