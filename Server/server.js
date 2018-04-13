var express = require('express');
var app = express();

const Funding = require('../database/Funding.js');

const PORT = 3003;

console.log('../Client/dist');

app.use(express.static(__dirname + '/../Client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});