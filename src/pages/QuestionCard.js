import React, { useState, useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
import { allQuestions } from "../Helpers/questionBank";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  button: {
    margin: "1rem 0",
    color: "primary",
  },
  center: {
    textAlign: "center",
  },
  marginAutoContainer: {
    margin: "auto",
    width: "80%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

//get total number of questions
const totalQuestions = allQuestions.length;
//make an array of random questions from allQuestions
const randomQuestions = allQuestions.sort(() => 0.5 - Math.random());

const QuestionCard = () => {
  const classes = useStyles();
  const { view, setView } = useContext(AssessmentContext);
  const { value, setValue } = useContext(AssessmentContext);
  const { score, setScore } = useContext(AssessmentContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const category = allQuestions[currentQuestion].category;
  const isPositive = allQuestions[currentQuestion].positive;
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

  const handleSubmit = (event) => {
    event.preventDefault();
    //check if the current question is the last question

    if (currentQuestion === totalQuestions - 1) {
      setFinalScore();
    } else {
      nextQuestion();
    }
  };

  const updateScore = () => {
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
  };

  const nextQuestion = () => {
    if (value === "" || value === 0) {
      alert("Please answer before proceeding to the next question");
      return;
    }
    updateScore();
    //check if a value has been selected
    //check if the question is the first question
    setCurrentQuestion(currentQuestion + 1);
    setValue("");
    console.log("category----->", category);
    console.log("isPositive----->", isPositive);
    console.log("value----->", value);
    console.log("parsedValue----->", parsedValue);
    console.log("reverseParsedValue----->", reverseScore());
    console.log("score----->", score);
  };

  const setFinalScore = () => {
    updateScore();
    setView("end");
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.marginAutoContainer}>
        <Grid>
          <Typography
            className={classes.center}
            variant="subtitle2"
            color="secondary"
          >
            Question {currentQuestion + 1} of {totalQuestions}
          </Typography>
        </Grid>
        <Box mt={2}></Box>
        <Grid>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color="primary">
                {randomQuestions[currentQuestion].question}
              </FormLabel>
              <Box mt={2}></Box>
              <RadioGroup
                name="EQ test"
                value={value}
                onChange={handleRadioChange}
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
              <Grid align="right">
                {currentQuestion === allQuestions.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<ChevronRightIcon />}
                  >
                    See results
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<ChevronRightIcon />}
                  >
                    Next question
                  </Button>
                )}
              </Grid>
            </FormControl>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default QuestionCard;
