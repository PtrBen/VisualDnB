const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const articleSchema = new Schema({
    url: String,
    titre: String,
    date: String,
    description: String,
    photos: {
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
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;