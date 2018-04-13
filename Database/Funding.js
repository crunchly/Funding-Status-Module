const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const fundingSchema = new mongoose.Schema({
  company: String,								//name
  announcedDate: String,					//funded_at
  transactionName: String,				//funding_round_type
  leadInvestor: String,						//Will need to create dummy data
  numInvestors: Number,						//participants
  moneyRaised: Number,						//raised_amount_usd
});

const Funding = mongoose.model('Funding', fundingSchema);

module.exports = Funding;
