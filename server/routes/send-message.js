const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Successfully verified');
    }
  });

  const name = req.body.name;
  const attend = req.body.attend;
  const message = req.body.message;
  const html = `<b>Name:</b> ${name}<br /><b>Zu-/Absage:</b> ${attend}<br /><b>Nachricht:</b> ${message}<br /><br /><i>Diese Nachricht wurde über das Formular auf foerderverein-ggnauen.de gesendet.</i>`;
  const text = `Name: ${name} \nZu-/Absage: ${attend} \nNachricht: ${message} \n\n Diese Nachricht wurde über das Formular auf foerderverein-ggnauen.de gesendet.`;

  const mail = {
    from: {
      name: name,
      address: process.env.MAIL,
    },
    to: process.env.USER,
    subject: 'Mitgliederversammlung',
    html: html,
    text: text,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

module.exports = router;
