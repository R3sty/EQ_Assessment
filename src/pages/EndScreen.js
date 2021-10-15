import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
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
  },
  marginAutoContainer: {
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#fce4ec",
  },
});

const EndScreen = () => {
  const classes = useStyles();
  const { score, setScore } = useContext(AssessmentContext);
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  console.log(email);

  setDescription(averageEmpathyScore, "empathy");
  setDescription(averageSocialSkillsScore, "socialSkills");

  console.log("Average Score--->", averageScore);
  console.log("description---->", setDescription(averageScore, "empathy"));

  // get the information entered by the user

  console.log("email--->", email);

  return (
    <Container>
      <Grid className={classes.marginAutoContainer}>
        <Typography variant="h4" color="primary" align="center">
          Your Results
        </Typography>
        <Box mt={2}></Box>
        <Typography>{setDescription(averageScore, "overAll")}</Typography>
      </Grid>
      <Box textAlign="center">
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
      </Box>
      <Box mt={2}></Box>

      <Grid>
        <Typography textAlign="center" variant="h6" align="center">
          To get your full report, enter your email address below
        </Typography>
      </Grid>
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
          id="standard-basic"
          label="Enter your email"
          variant="standard"
        />
      </Grid>
      <br />
      <Grid align="center">
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          color="secondary"
          //set the state of the email to the email entered by the user onClick
          className={classes.button}
        >
          Send me the full report
        </Button>
      </Grid>
    </Container>
  );
};

export default EndScreen;
