import React, { useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
import ScrollIntoView from "react-scroll-into-view";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createTheme, ThemeProvider } from "@material-ui/core";
import emoji_smile from "../assets/emoji_smile.png";
import emoji_2 from "../assets/emoji_2.png";
import emoji3 from "../assets/emoji3.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  title: {
    margin: "1rem 0",
  },
  button: {
    margin: "1rem 0",
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
  Card: {
    padding: "1rem",
    width: 120,
    margin: "auto",
    backgroundColor: "#f5f5f5",
  },
  Media: {
    height: 120,
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Helvetica"],
  },
});

theme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "Roboto",
  fontWeight: "bold",
  padding: "1rem",
};

theme.typography.body1 = {
  fontSize: "1.5rem",
  fontFamily: "Roboto",
  alignItems: "center",
};

const HomeScreen = () => {
  const classes = useStyles();
  const { view, setView } = useContext(AssessmentContext);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box item className={classes.marginAutoContainer}>
          <Box padding={0} marginTop={-4} marginBottom={4}>
            <Card className={classes.Card}>
              <CardMedia className={classes.Media} image={emoji_smile} />
            </Card>
          </Box>
          <Typography variant="h2">
            What is Emotional Intelligence & Why Does It Matter?
          </Typography>

          <Typography variant="body1">
            Emotional intelligence enables us to manage our emotions so we can
            make rational decisions, communicate effectively, and motivate
            ourselves and others.
            <br></br>
            <br></br>
            Leaders with well-developed EI have a deeper understanding of
            themselves, their friends, family members and colleagues.
            {/* They can self-reflect in order to understand their
            emotions in different situations and the effect their emotions have
            on themselves and those around them. They also work to understand
            the emotions of others so they can inspire higher performances or
            respond appropriately to a variety of situations. */}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
        >
          <ScrollIntoView selector="#instructions2">
            <KeyboardArrowDownIcon fontSize="large" />
          </ScrollIntoView>
        </Box>

        <Box item className={classes.marginAutoContainer} id="instructions2">
          <Box padding={0} marginTop={-4} marginBottom={4}>
            <Card className={classes.Card}>
              <CardMedia className={classes.Media} image={emoji_2} />
            </Card>
          </Box>
          <Typography variant="h2">About this assessment </Typography>

          <Typography variant="body1">
            This assessment is a forced-choice psychological assessment that
            requires you to choose the statement that describes you best.
            <br></br>
            <br></br>
            This assessment has been calibrated through many trials and
            verification interviews to ensure it is as accurate as possible.
            Therefore, your personal assessment should be accurate, provided
            that you have answered honestly and accurately.
            <br></br>
            <br></br>
            At the end of the assessment, click on the Score Assessment button,
            and wait for your overall results.
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
        >
          <ScrollIntoView selector="#instructions2">
            <KeyboardArrowDownIcon fontSize="large" />
          </ScrollIntoView>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
        ></Box>

        <Box item className={classes.marginAutoContainer} id="instructions2">
          <Box padding={0} marginTop={-4} marginBottom={4}>
            <Card className={classes.Card}>
              <CardMedia className={classes.Media} image={emoji3} />
            </Card>
          </Box>
          <Typography variant="h2">
            Instructions before starting the assessment
          </Typography>

          <Typography variant="body1">
            For each question, select the statement that best applies to you. Do
            not over-analyze the questions or try to think of "exceptions to the
            rule." Be spontaneous and choose the statement that comes closest to
            the way you usually are.
            <br></br>
            <br></br>
            If a question is very close and you can’t decide which statement
            applies to you best, just choose the answer that seems best.
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            padding="2rem"
            align="center"
            gutterBottom
          >
            Click here to begin the assessment
          </Typography>
          <Grid container alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView("start assessment")}
            >
              Start
            </Button>
          </Grid>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default HomeScreen;
