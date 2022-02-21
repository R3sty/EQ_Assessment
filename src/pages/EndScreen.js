import React, { useContext, useState } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
import axios from "axios";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { allQuestions } from "../Helpers/questionBank";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { getDescription } from "../Helpers/description";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    margin: "1rem 0",
  },
  button: {
    margin: "1rem 0",
    backgroundColor: "#872e2e",
    color: "white",
  },

  marginAutoContainer: {
    marginTop: 10,
    padding: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 10px #DCDCDC",
  },
});

const EndScreen = () => {
  const classes = useStyles();
  const { score, setScore } = useContext(AssessmentContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { view, setView } = useContext(AssessmentContext);
  console.log(view);
  setScore(score);
  console.log("score from endscreen----->", score);

  const averageScore = score.totalScore / allQuestions.length;
  //number of questions
  const selfAwarenessQuestions = allQuestions.filter(
    (question) => question.category === "selfAwareness"
  );
  const empathyQuestions = allQuestions.filter(
    (question) => question.category === "empathy"
  );
  const motivationQuestions = allQuestions.filter(
    (question) => question.category === "motivation"
  );
  const socialSkillsQuestions = allQuestions.filter(
    (question) => question.category === "socialSkills"
  );
  const selfManagementQuestions = allQuestions.filter(
    (question) => question.category === "selfManagement"
  );
  //average score for each category
  const averageSelfAwarenessScore =
    score.selfAwareness / selfAwarenessQuestions.length;
  const averageEmpathyScore = score.empathy / empathyQuestions.length;
  const averageMotivationScore = score.motivation / motivationQuestions.length;
  const averageSocialSkillsScore =
    score.socialSkills / socialSkillsQuestions.length;
  const averageSelfManagementScore =
    score.selfManagement / selfManagementQuestions.length;

  const setDescription = (averageScore, skill, level) => {
    if (averageScore >= 4.0) {
      level = "high";
      return getDescription(skill, level);
    }
    if (averageScore >= 3.0) {
      level = "medium";
      return getDescription(skill, level);
    } else {
      level = "low";
      return getDescription(skill, level);
    }
  };

  setDescription(averageEmpathyScore, "empathy");
  setDescription(averageSocialSkillsScore, "socialSkills");

  console.log("Average Score from EndScreen--->", averageScore);

  // get the information entered by the user
  const postEmail = () => {
    axios.post("api/sendEmail", {
      email: email,
      name: name,
      selfAwareness: setDescription(averageSelfAwarenessScore, "selfAwareness"),
      empathy: setDescription(averageEmpathyScore, "empathy"),
      motivation: setDescription(averageMotivationScore, "motivation"),
      socialSkills: setDescription(averageSocialSkillsScore, "socialSkills"),
      selfManagement: setDescription(
        averageSelfManagementScore,
        "selfManagement"
      ),
    });
  };

  return (
    <Container>
      <Grid className={classes.marginAutoContainer}>
        <Typography variant="h4" style={{ color: "#4e7a9e" }} align="center">
          Your Results
        </Typography>
        <Box padding={2}></Box>
        <Typography>{setDescription(averageScore, "overAll")}</Typography>
      </Grid>
      {/* <Box textAlign="center">
        <h3>Self Awareness</h3>
        <p>{setDescription(averageSelfAwarenessScore, "selfAwareness")}</p>
      </Box>
      <Box textAlign="center">
        <h3>Self Management</h3>
        <p>{setDescription(averageSelfManagementScore, "selfManagement")}</p>
      </Box>
      <Box textAlign="center">
        <h3>Empathy</h3>
        <p>{setDescription(averageEmpathyScore, "empathy")}</p>
      </Box>
      <Box textAlign="center">
        <h3>Social Skills</h3>
        <p>{setDescription(averageSocialSkillsScore, "socialSkills")}</p>
      </Box>
      <Box textAlign="center">
        <h3>Motivation</h3>
        <p>{setDescription(averageMotivationScore, "motivation")}</p>
      </Box> */}
      <Box mt={6}></Box>

      <Grid>
        <Typography variant="h6" align="center">
          To get your full report, enter your contact details below
        </Typography>
      </Grid>
      <br />
      <Grid
        align="center"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            setView("confirmation");
            postEmail();
          }}
        >
          Submit
        </Button>
      </Grid>
      <br />
    </Container>
  );
};

export default EndScreen;
