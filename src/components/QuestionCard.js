import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
import { allQuestions } from "../Helpers/questionBank";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

//get total number of questions
const totalQuestions = allQuestions.length;
//make an array of random questions from allQuestions
const randomQuestions = allQuestions.sort(() => 0.5 - Math.random());

const QuestionCard = () => {
  const { view, setView } = useContext(AssessmentContext);
  const [value, setValue] = useState("");
  const [score, setScore] = useState({
    selfAwareness: 0,
    selfManagement: 0,
    socialSkills: 0,
    empathy: 0,
    motivation: 0,
    totalScore: 0,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleScore = (event) => {
    if (value === "") {
      setValue(0);
    }
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  const category = allQuestions[currentQuestion].category;
  const isPositive = allQuestions[currentQuestion].positive;

  const updateScore = () => {
    const parsedValue = parseInt(value);

    const reverseScore = () => {
      if (parsedValue === 1) {
        return parsedValue + 4;
      }
      if (parsedValue === 2) {
        return parsedValue + 2;
      }
      if (parsedValue === 3) {
        return parsedValue;
      }
      if (parsedValue === 4) {
        return parsedValue - 2;
      }
      if (parsedValue === 5) {
        return parsedValue - 4;
      }
    };
    //update score
    if (isPositive)
      setScore({
        ...score,
        [category]: parsedValue + score[category],
        totalScore: parsedValue + score.totalScore,
      });
    else
      setScore({
        ...score,
        [category]: reverseScore() + score[category],
        totalScore: reverseScore() + score.totalScore,
      });
    setValue("");

    console.log("category----->", category);
    console.log("isPositive----->", isPositive);
    console.log("value----->", value);
    console.log("parsedValue----->", parsedValue);
    console.log("reverseParsedValue----->", reverseScore());
    console.log("score----->", score);
  };
  console.log(view);
  const nextQuestion = () => {
    //check if a value has been selected
    if (value === "") {
      alert("Please answer before proceeding to the next question");
      return;
    }
    //check if the question is the first question
    updateScore();
    setCurrentQuestion(currentQuestion + 1);
  };

  const setFinalScore = () => {
    updateScore();
    setView("end");
  };

  return (
    <Box>
      <Typography gutterBottom variant="h6" component="div" color="secondary">
        Question {currentQuestion + 1} of {totalQuestions}
      </Typography>
      <Typography variant="h5" color="primary" align="left">
        {randomQuestions[currentQuestion].question}
      </Typography>
      <br />
      <br />
      <Box textAlign="center">
        <FormControl>
          <RadioGroup
            aria-label="options"
            name="radio-buttons-group"
            value={value}
            onChange={handleScore}
            required={true}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Almost never true"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="Usually not true"
            />
            <FormControlLabel
              value={3}
              control={<Radio />}
              label="Occasionally true"
            />
            <FormControlLabel
              value={4}
              control={<Radio />}
              label="Usually true"
            />
            <FormControlLabel
              value={5}
              control={<Radio />}
              label="Almost always true"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box textAlign="right">
        {currentQuestion === allQuestions.length - 1 ? (
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            //set the final score and set view to "end"
            onClick={() => {
              setFinalScore();
            }}
          >
            See results
          </Button>
        ) : (
          <Button
            type="submit"
            //update score and set next question
            onClick={() => {
              nextQuestion();
            }}
            variant="contained"
            color="secondary"
          >
            Next question
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default QuestionCard;
