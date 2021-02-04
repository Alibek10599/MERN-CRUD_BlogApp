require('./db')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var fs = require('fs');
var path = require('path');
var imgModel = require('./models/image');
var postMessageRoutes = require('./controllers/postMessageController');
var postImageRoutes = require('./controllers/postImageController');


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4000,()=>console.log('Server started at : 4000'))
app.set("view engine", "ejs");

app.use('/postMessages',postMessageRoutes)
app.use('/postImages', postImageRoutes)