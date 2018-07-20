const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const vjingSchema = new Schema({
    image: String,
    video: String
});

const Vjing = mongoose.model("Vjing", vjingSchema);

module.exports = Vjing;