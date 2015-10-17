var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./model/db');
var blogModel = require('./model/blog');
var blogRoutes = require('./routes/blog');

var app = express();
app.use(express.static('public'));
app.use('/api/blogs', blogRoutes);
app.get('/', function(req, res){
    res.readFile('index.html')
});
app.listen(3000); 