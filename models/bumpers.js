const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const bumpersSchema = new Schema({
    image: String,
    video: String
});

const Bumpers = mongoose.model("Bumpers", bumpersSchema);

module.exports = Bumpers;