var nodemailer = require('nodemailer');

const sendEmailMessage = (to, subject, message) => {

   try{
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mommygkbysanju@gmail.com',
          pass: 'zvga huel bvtk banz'
        }
      });
    
        var mailOptions = {
            from: 'mommygkbysanju@gmail.com',
            to: to,
            subject: subject,
            text: message
        };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
   }
   catch(er)
   {
        console.log(er);
   }

    
}

module.exports = sendEmailMessage;




