const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const mediaSchema = new Schema({
    filename: String
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;