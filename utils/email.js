const nodemailer = require("nodemailer");
const AppError = require("./appError");

const sendEmail = async (options) => {
  //create transport function
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codelions.org@gmail.com",
        pass: "codelions@1234",
      },
    });

    const mailOptions = {
      from: "Wissenaire Sanchaar <codelions.org@gmail.com>",
      to: options.email,
      subject: options.subject,
      text: options.text,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new AppError(err, 500);
  }
};

module.exports = sendEmail;
