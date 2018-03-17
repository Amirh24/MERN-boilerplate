const mongoose = require('mongoose');

const DappSchema = new mongoose.Schema({
    rank: { type: Number, required: true },
    name: { type: String, required: true },
    usage: {type: Number, required: true }
});

module.exports = mongoose.model('Dapp', DappSchema);
