import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { allQuestions } from "../Helpers/questionBank";
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

  console.log("Average Score--->", averageScore);
  console.log("description---->", setDescription(averageScore, "empathy"));

  return (
    <div>
      <h1>This is the end screen </h1>
      <Box textAlign="center">
        <Button variant="contained" color="secondary" onClick={checkResults}>
          Check results
        </Button>
        <h1>Over all Results</h1>
        <p1>{setDescription(averageScore, "overAll")}</p1>
      </Box>
    </div>
  );
};

export default EndScreen;
