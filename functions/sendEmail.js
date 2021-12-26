exports.handler = async function (event, context) {
  const sgMail = require("@sendgrid/mail");

  require("dotenv").config();

  const sendGridAPI = process.env.REACT_APP_SENDGRID_API_KEY;
  console.log("sendgrid API----->", sendGridAPI);
  console.log("EVENT----->", JSON.parse(event.body));
  sgMail.setApiKey(sendGridAPI);

  const parsedData = JSON.parse(event.body);
  const msg = {
    to: parsedData.email, // Change to your recipient
    from: "iral.resty@gmail.com", // Change to your verified sender
    subject: "Your Emotional Intelligence Assessment Full Result",
    text: "Your Emotional Intelligence Assessment Full Result",
    html: `<p>Dear ${parsedData.name},
    </br>
    </br>
    Here is your full emotional assessment results.
    </br>
    </br>
    <b>Self-Awareness:</b> ${parsedData.selfAwareness}
    </br>
    </br>
    <b>Empathy:</b> ${parsedData.empathy}
    </br>
    </br>
    <b>Motivation:</b> ${parsedData.motivation}
    </br>
    </br>
    <b>Social Skills:</b> ${parsedData.socialSkills}
    </br>
    </br>
    <b>Self-Management:</b> ${parsedData.selfManagement}
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
      console.log("Event.body----->", event.body);
      return {
        message: "Email sent",
        success: true,
      };
    })
    .catch((error) => {
      console.error(error);
    });
};
