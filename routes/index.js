const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const Visuel = require('../models/visuel');
const Article = require('../models/article');
const Prog = require('../models/prog');
const Logo = require('../models/logo');
const Audreact = require('../models/audreact');
const Bumpers = require('../models/bumpers');
const Vjing = require('../models/vjing');
const Membre = require('../models/membre');

// GET l'url, si = '/' alors affiche le fichier index.html
router.get('/', async (req, res) => {

    try {
        const [
            visuels,
            articles,
            progs,
            audreacts,
            bumpers,
            vjings,
            membres,
            logos
        ] = await Promise.all([
            Visuel.find(),
            Article.find().sort({ _id: -1 }).exec(),
            Prog.find(),
            Audreact.find(),
            Bumpers.find(),
            Vjing.find(),
            Membre.find(),
            Logo.find()
        ]);

        res.render("front/index", {
            visuels,
            articles,
            progs,
            logos,
            audreacts,
            bumpers,
            vjings,
            membres,
            title: 'Visual DNB'
        });
    } catch (error) {
        console.error(error);

        res.render('front/404');
    }
});

router.post('/', function(req, res){
    let nom = req.body.nom;
    let email = req.body.email;
    let message = req.body.message;



    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        port: 25,
        auth: {
            user : 'yellowaformac@gmail.com',
            pass : 'Snoopy87'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let HelperOptions = {
        from: nom,
        to: 'yellowaformac@gmail.com',
        subject: req.body.subject,
        text: "nom : " + nom + " / " + "Email : " + email + " / " + " Message : " + message
    }

    transporter.sendMail(HelperOptions, (error, info) => {
        if (error){
            console.log(error);
        }
        console.log('Message was sent');
        console.log(info);
    })
    res.redirect(req.get('referer'));
});

router.get('/article/:id', function(req, res){
    let articleId = req.params.id;
    if (articleId.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
        Article.findById(articleId, function (err, result){
            if (err) throw err;
            res.status(200).render('front/article.hbs', {
                article:result,
                title: 'Article'
            });
      });
    };
});

router.get('/membres/:id', function(req, res){
    let membreId = req.params.id;
    if (membreId.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
        Membre.findById(membreId, function (err, result){
            if (err) throw err;
            res.status(200).render('front/membre.hbs', {
                membres:result,
                title: 'Membre'
            });
      });
    };
});

module.exports = router;
