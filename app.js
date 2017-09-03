var express = require('express');
var app = express();
var controller=require('./controller/index.js');

controller.init(app);

app.listen(3000)