const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail');

const apiKey = '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' // should be store in env variable

// sends email
router.post('/', (req, res) => {
    const {subject, message, to}= req.body
    sgMail.setApiKey(apiKey)
    const msg = {
        to: to,
        from: 'jcruz3@drew.edu',
        subject: subject,
        text: message
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