const express = require("express");
const User = require("./user");
const app = express();
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/result", (req, res) => {
  req.body.email;
  req.body.email;
  req.body.email;

  const user = new User(req.body.description, req.body.email, req.body.level);

  user.save();
});

app.post("/send-email", (req, res) => {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: req.body.email, // Change to your recipient
    from: "iral.resty@gmail.com", // Change to your verified sender
    subject: "Your Emotional Intelligence Assessment Full Result",
    text: "Your Emotional Intelligence Assessment Full Result",
    html: `<p>Dear ${req.body.name},
    </br>
    </br>
    Here is the full results of your Emotional Intelligence Test.
    </br>
    </br>
    <b>Self-Awareness:</b> ${req.body.selfAwareness}
    </p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      console.log("req.body----->", req.body);
      res.json({
        message: "Email sent",
        success: true,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
