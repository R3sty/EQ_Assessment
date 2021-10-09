import React, { useContext } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const HomeScreen = () => {
  const { view, setView } = useContext(AssessmentContext);
  return (
    <div>
      <h1>Start Assessment</h1>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setView("start assessment")}
        >
          {console.log(view)}
          Start
        </Button>
      </Box>
    </div>
  );
};

export default HomeScreen;
