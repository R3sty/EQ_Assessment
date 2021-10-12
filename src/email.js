export const sendEmail = () => {
  const sgMail = require("@sendgrid/mail");

  const API_key =
    "SG.YbFFA3Z3TaGH3WbJkxVewQ.CCtn5BFl - zYJbg862WfeU9OtqHuUexzuN - Xw26_yOMo";

  sgMail.setApiKey(API_key);

  const message = {
    to: "resty.iral@icloud.com",
    from: "resty.iral@icloud.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(message)
    .then((response) => console.log("Email sent--->", response))
    .catch((error) => console.log("Error--->", error));
};
