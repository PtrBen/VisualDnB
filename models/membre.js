const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const membreSchema = new Schema({
    urlPicture: String, 
    urlNom: String, 
    nom: String,
    urlSerial: String,
    skills: String, 
    contact: String, 
    site: String,
    description: String,
    urlSound: String,  
    urlPhoto: {
        url1: String,
        url2: String,
        url3: String, 
        url4: String, 
        url5: String, 
        url6: String, 
        url7: String, 
        url8: String, 
        url9: String, 
        url10: String 
    },
    urlVideo : {
        url1: String,
        url2: String,
        url3: String
    }
});

const Membre = mongoose.model("Membre", membreSchema);

module.exports = Membre;