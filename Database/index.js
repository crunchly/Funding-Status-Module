const mongoose = require('mongoose');
const mongoUri = 'mongodb://database/funding_status';

const db = mongoose.connect(mongoUri);

module.exports = db;
