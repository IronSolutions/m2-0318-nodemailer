const express = require('express');
const router  = express.Router();

const sendAwesomeMail = require('../mail/sendMail');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { messages: req.flash('info') });
});


/* SEND A MAIL */
router.post('/send-email', (req, res, next) => {
  console.log("RECEIVED MAIL");
  console.log(req.body);
  sendAwesomeMail('boyander@gmail.com',{mail_title:"HOLA CARACOLA"})
  .then(() => {
    req.flash('info', 'MENSAJE ENVIADO');
    res.redirect('/')
  })
  .catch(error => {
    req.flash('info', 'ERROR, NO SE HA PODIDO ENVIAR EL MENSAJE');
    next(error)
  })
});


module.exports = router;
