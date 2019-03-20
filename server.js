
var express = require('express');
var PORT = process.env.PORT || 8080

var buildPath = 'dist'

// Initialize
var app = express();

// Serve static resources from 'build' folder
app.use(express.static(buildPath));

// Otherwise serve index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + "/" + buildPath + "/index.html");
});

app.listen(PORT);
