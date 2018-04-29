const db  = require('./index.js');
const fs = require('fs');
const Funding = require('./Funding.js');
const path = require('path');

const insertSampleData = function(data) {
  Funding.create(data)
    .then(() => db.disconnect());
};

fs.readFile(path.join(__dirname, 'funding_rounds.json'), (err, data) => {
  if (err) throw err;
  var data = JSON.parse(data);

  var fundingData = [];

  for (var i = 0; i < data.length; i++) {
    var singleFundingRound = {};
    singleFundingRound.company = data[i].name;
    singleFundingRound.announcedDate = data[i].funded_at;
    singleFundingRound.transactionName = data[i].funding_round_type;
    singleFundingRound.leadInvestor = 'Lowercase Capital';
    singleFundingRound.numInvestors = data[i].participants;
    singleFundingRound.moneyRaised = data[i].raised_amount_usd;
    fundingData.push(singleFundingRound)
  }
  insertSampleData(fundingData);
});





  // company: String,                //name
  // announcedDate: String,          //funded_at
  // transactionName: String,        //funding_round_type
  // leadInvestor: String,           //Will need to create dummy data
  // numInvestors: Number,           //participants
  // moneyRaised: Number,            //raised_amount_usd