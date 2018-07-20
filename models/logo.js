const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const logoSchema = new Schema({
    url: String,
    nom: String
});

const Logo = mongoose.model("Logo", logoSchema);

module.exports = Logo;