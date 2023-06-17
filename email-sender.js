const nodemailer = require('nodemailer');

async function sendEmail() {
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'eryn.shields@ethereal.email',
          pass: '6k8JWybh32eY2bkSRj'
      }
  });

  const mailOptions = {
    from: 'eryn.shields@ethereal.email',
    to : 'eryn.shields@ethereal.email',
    subject: "Test Email",
    text: "This is a test email.",
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


}
sendEmail()
