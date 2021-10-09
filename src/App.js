import React, { useState } from "react";
import { AssessmentContext } from "./Helpers/Context";

//components
import HomeScreen from "./components/HomeScreen";
import QuestionCard from "./components/QuestionCard";
import EndScreen from "./components/EndScreen";
//material-ui
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

function App() {
  const [view, setView] = useState("home");
  const [score, setScore] = useState(0);

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
            value={{ view, setView, score, setScore }}
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
