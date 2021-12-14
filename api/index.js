const express = require("express");
const User = require("./user");
const app = express();
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

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

const sendGridAPI = process.env.REACT_APP_SENDGRID_API_KEY;
console.log("sendgrid API----->", sendGridAPI);
app.post("/send-email", (req, res) => {
  sgMail.setApiKey(sendGridAPI);
  const msg = {
    to: req.body.email, // Change to your recipient
    from: "iral.resty@gmail.com", // Change to your verified sender
    subject: "Your Emotional Intelligence Assessment Full Result",
    text: "Your Emotional Intelligence Assessment Full Result",
    html: `<p>Dear ${req.body.name},
    </br>
    </br>
    Here is your full emotional assessment results.
    </br>
    </br>
    <b>Self-Awareness:</b> ${req.body.selfAwareness}
    </br>
    </br>
    <b>Empathy:</b> ${req.body.empathy}
    </br>
    </br>
    <b>Motivation:</b> ${req.body.motivation}
    </br>
    </br>
    <b>Social Skills:</b> ${req.body.socialSkills}
    </br>
    </br>
    <b>Self-Management:</b> ${req.body.selfManagement}
    </br>
    </br>
    Understanding your base EI score is the first step to improving your responses to your emotions and the world around you.
</br>
</br>
You may be asking yourself what's next.
<br/>
<br/>
I recommend you do the following three or four things:
</br>
<br/>
1. Read your assessment and identify areas for improvement.
</br>
</br>
2. Use the tips in your customized report to take the first steps.
</br>
</br>
3. Look for our free five-tip email course coming to your inbox. You will receive customized suggestions for enhancing your EI over the next few days. If you don't get the emails, check your spam folder and promotions tab. Then make taking action part of your daily schedule.
</br>
</br>
4. Alternatively, you can book a 60-minute coaching session to review your results and create a personal action plan. You can do that by replying to this email.
</br>
</br>
I hope you find your EI assessment helpful for improving your ability to understand your emotions, devise effective responses to those and build value into your relationships through empathy and better social skills.
</br>
</br>
Looking forward to hearing from you.
</br>
</br>
Win the day!
</br>
</br>
John
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
