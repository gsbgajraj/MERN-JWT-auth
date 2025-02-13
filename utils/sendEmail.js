import nodemailer from 'nodemailer';

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Use 465 for secure connection (SSL), 587 for TLS
    secure: true, // false for TLS, true for SSL (465)
    auth: {
      user: process.env.EMAILADD, // Your Gmail address
      pass: process.env.EMAILPASS, // App password (not your Gmail password)
    },
  });

  const mailOptions = {
    from: process.env.EMAILADD,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

export default sendEmail;
