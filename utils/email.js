const nodemailer = require("nodemailer");
const AppError = require("./appError");
const config = require("./config");

const sendEmail = async (options) => {
  //create transport function

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.EMAIL_USERNAME,
      pass: config.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Wissenaire Sanchaar <wissenaire.sanchaar@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
