// Dependencies and packages
const express = require('express');
const app = express();
const https = require('https');

app.use(express.static("public"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Get
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function() {
  console.log("Server running on port 3000")
});  