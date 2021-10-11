import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { allQuestions } from "../Helpers/questionBank";

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

  //link to description

  return (
    <div>
      <h1>This is the end screen </h1>
      <Box textAlign="center">
        <Button variant="contained" color="secondary" onClick={checkResults}>
          Check results
        </Button>
      </Box>
    </div>
  );
};

export default EndScreen;
