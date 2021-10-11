import React, { useState } from "react";
import { AssessmentContext } from "./Helpers/Contexts";

//components
import HomeScreen from "./components/HomeScreen";
import QuestionCard from "./components/QuestionCard";
import EndScreen from "./components/EndScreen";
//material-ui
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

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
    <React.Fragment>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs="auto">
          <AssessmentContext.Provider
            value={{ view, setView, score, setScore, value, setValue }}
          >
            <Box textAlign="center">
              <h1>EQ Assessment</h1>
              {view === "home" && <HomeScreen />}
              {view === "start assessment" && <QuestionCard />}
              {view === "end" && <EndScreen />}
            </Box>
          </AssessmentContext.Provider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
