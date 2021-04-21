var nodemailer = require('nodemailer');
var fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  port: 587,
  auth: {
      // user: "jay@equitydentalpartners.com",
      user: "Jay@eqdpi.com",
      pass: "jalliaccount9$"
  },
  tls: {
      rejectUnauthorized: false
  }
});


fs.readFile('../Mjml/boardmember.html', {encoding: 'utf-8'}, function (err, html) {
 if (err) {
   console.log(err);
 } else {
        // setup email data with unicode symbols  steve.abrams@​hoganlovells.com
        let mailOptions = {
          // from: "jay@equitydentalpartners.com", // sender address
          from: "Jay@eqdpi.com",
          to: 'eyal.org@outlook.com', 
          subject: 'Eyal Orgad - Non Executive Member Board of Directors',
          html: html
      };

   transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
     console.log(error);
    } else {
     console.log('Email has been sent: ' + info.response);
    }
  });
 }
});