const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const visuelSchema = new Schema({
    video: String,
    transition1: String,
    transition2: String,
    transition3: String
});

const Visuel = mongoose.model("Visuel", visuelSchema);

module.exports = Visuel;