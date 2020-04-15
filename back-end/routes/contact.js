const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail');

const apiKey = process.env.SEND_GRID_API_KEY 
const senderVerifiedEmail= process.env.SENDER_EMAIL

// sends email
router.post('/', (req, res) => {
    const {subject, message, to}= req.body
    sgMail.setApiKey(apiKey)
    const msg = {
        to: process.env.SENDER_EMAIL,
        from: senderVerifiedEmail,
        subject: subject,
        text: message+' '+to+' '
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      //ES8
      (async () => {
        try {
          await sgMail.send(msg);
          res.send('Email sent')
        } catch (error) {
          console.error(error); 
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
})

module.exports = router