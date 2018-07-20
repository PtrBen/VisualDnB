const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const progSchema = new Schema({
    url: String,
    nom: String
});

const Prog = mongoose.model("Prog", progSchema);

module.exports = Prog;