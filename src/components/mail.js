
var nodemailer = require('nodemailer');
const cron=require('node-cron');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ecephy2017@gmail.com',
    pass: 'ecestudents@'
  }
});

var mailOptions = {
  from: 'ecephy2017@gmail.com',
  to: '{text1.value}@gmail.com',
  subject: 'todays task',
  text: 'manage task'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
export default transporter;