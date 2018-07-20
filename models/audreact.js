const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const audreactSchema = new Schema({
    image: String,
    video: String
});

const Audreact = mongoose.model("Audreact", audreactSchema);

module.exports = Audreact;