const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "key-6a668273abfe5d595941ed578aefa2b4-c9746cf8-75138edc",
    domain: "sandbox0907648724e64b05b7b17d39ecdf60f8.mailgun.org",
  },
};
const transporter = nodemailer.createTransport(mailGun(auth));
  const sendMail = (name, email, msg, cb) => {
    const mailOptions = {
      sender: name,
      from: email,
      to: "bookingapp133@gmail.com",
      text: msg,
    };
  
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  };

  module.exports = sendMail;