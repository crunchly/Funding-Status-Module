var express = require('express');
var app = express();

const Funding = require('../database/Funding.js');

const PORT = 3003;

console.log('../Client/dist');

app.use(express.static(__dirname + '/../Client/dist'));

app.get('/api/funding_round', function(req, res) {

	var data = Funding.find({'company': 'Facebook'}, function(err, rounds) {
		if (err) {
			return err;
		}
		res.send(rounds);
	})
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});