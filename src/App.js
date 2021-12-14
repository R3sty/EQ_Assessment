import React, { useState } from "react";
import { AssessmentContext } from "./Helpers/Contexts";

//components
import HomeScreen from "./pages/HomeScreen";
import QuestionCard from "./pages/QuestionCard";
import EndScreen from "./pages/EndScreen";
//material-ui
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9f2827",
    },
    secondary: {
      main: "#E7B800",
    },
  },
  typography: {
    fontFamily: "Lato",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

function App() {
  const [view, setView] = useState("home");
  const [value, setValue] = useState(0);
  const [score, setScore] = useState({
    selfAwareness: value,
    selfManagement: value,
    socialSkills: value,
    empathy: value,
    motivation: value,
    totalScore: value,
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
        spacing={5}
      >
        <Grid item>
          <Typography variant="h2" color="primary">
            EQ Assessment
          </Typography>
        </Grid>
        <AssessmentContext.Provider
          value={{ view, setView, score, setScore, value, setValue }}
        >
          {view === "home" && <HomeScreen />}
          {view === "start assessment" && <QuestionCard />}
          {view === "end" && <EndScreen />}
        </AssessmentContext.Provider>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
