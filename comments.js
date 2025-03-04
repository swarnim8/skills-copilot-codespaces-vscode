// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Read comments.json file
var comments = require('./comments.json');