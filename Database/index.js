const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/funding_status';

const db = mongoose.connect(mongoUri);

module.exports = db;
