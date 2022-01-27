import React, { useState } from "react";
import { AssessmentContext } from "./Helpers/Contexts";

//components
import HomeScreen from "./pages/HomeScreen";
import QuestionCard from "./pages/QuestionCard";
import EndScreen from "./pages/EndScreen";
import ConfirmationScreen from "./pages/ConfirmationScreen";
//material-ui
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Helvetica"],
  },
});

theme.typography.h1 = {
  fontSize: "5rem",
  fontFamily: "Roboto",
  fontWeight: "bold",
  padding: "5rem",
};

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
      >
        <Grid padding={40}>
          <Typography variant="h1">EQ Assessment</Typography>
        </Grid>
        <AssessmentContext.Provider
          value={{ view, setView, score, setScore, value, setValue }}
        >
          {view === "home" && <HomeScreen />}
          {view === "start assessment" && <QuestionCard />}
          {view === "end" && <EndScreen />}
          {view === "confirmation" && <ConfirmationScreen />}
        </AssessmentContext.Provider>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
