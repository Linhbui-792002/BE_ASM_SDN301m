const nodemailer = require('nodemailer');

console.log('secure param', process.env.EMAIL_SECUREPARAM);

const sendEmail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECUREPARAM.toLowerCase() === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Failed to send mail!', error);
      return false;
    }
    console.log('info: ', info);

    return true;
  });
};

export default sendEmail;
