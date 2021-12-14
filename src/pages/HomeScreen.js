import React, { useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff8e1",
  },
});

const HomeScreen = () => {
  const classes = useStyles();
  const { view, setView } = useContext(AssessmentContext);
  console.log(view);
  return (
    <Container>
      <Grid item className={classes.marginAutoContainer}>
        <Typography variant="h5">
          What is Emotional Intelligence & Why Does It Matter?
        </Typography>
        <Typography variant="body1">
          Emotional intelligence enables us to manage our emotions so we can
          make rational decisions, communicate effectively, and motivate
          ourselves and others. Leaders with well-developed EI have a deeper
          understanding of themselves, their friends, family members and
          colleagues. They can self-reflect in order to understand their
          emotions in different situations and the effect their emotions have on
          themselves and those around them. They also work to understand the
          emotions of others so they can inspire higher performances or respond
          appropriately to a variety of situations.
        </Typography>
        <Box mt={2} />
        <Typography variant="h5">About this assessment</Typography>
        <Typography variant="body1">
          This assessment is a forced-choice psychological assessment that
          requires you to choose the statement that describes you best. For each
          question, select the statement that best applies to you. Do not
          over-analyze the questions or try to think of "exceptions to the
          rule." Be spontaneous and choose the statement that comes closest to
          the way you usually are. Occasionally, there will be questions that
          ask you to make a close call or require you to respond to situations
          that you have little experience with. This is because the questions
          are designed to distinguish between specific areas of emotional
          intelligence. If a question is very close and you can’t decide which
          statement applies to you best, just choose the answer that seems best.
          If you want, you can come back to it after you have completed the
          other questions. But we recommend that you quickly choose the best
          answer and move on.
        </Typography>
        <Box mt={2}></Box>
        <Typography variant="h5">
          Instructions for the FREE Emotional Intelligence Assessment
        </Typography>
        <Typography variant="body1">
          The evaluation has 50 questions and usually takes about 10 minutes to
          complete. At the end of the assessment, click on the Score Assessment
          button, and wait for your overall results. Don't try to game the
          assessment. That will not help you to understand your emotional
          intelligence, and your assessment is private anyways. We do not share
          this data with anyone, and never will. This assessment has been
          calibrated through many trials and verification interviews to ensure
          it is as accurate as possible. Therefore, your personal assessment
          should be accurate, provided that you have answered honestly and
          accurately.
        </Typography>
      </Grid>
      <Typography
        variant="h5"
        color="primary"
        padding="2rem"
        align="center"
        gutterBottom
      >
        Click here to begin the assessment
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setView("start assessment")}
        >
          Start
        </Button>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
