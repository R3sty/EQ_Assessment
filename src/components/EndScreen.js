import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { allQuestions } from "../Helpers/questionBank";
import TextField from "@material-ui/core/TextField";
import { sendEmail } from "../email";

import { resultsDescription, getDescription } from "../Helpers/description";

const checkResults = () => {
  console.log("Check Results");
};

const EndScreen = () => {
  const { score, setScore } = useContext(AssessmentContext);
  console.log("Score from Endscreen----->", score);

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

  console.log("Average Score--->", averageScore);
  console.log("description---->", setDescription(averageScore, "empathy"));

  return (
    <div>
      <Box textAlign="center">
        <h1>Your Results</h1>
        <h3>{setDescription(averageScore, "overAll")}</h3>
      </Box>
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
      <Box textAlign="center">
        <h2>To get your full report, enter your email address below</h2>
      </Box>
      <Box
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
      </Box>
      <br />

      <Button variant="contained" color="secondary" onClick={sendEmail}>
        Send me the full report
      </Button>
    </div>
  );
};

export default EndScreen;
