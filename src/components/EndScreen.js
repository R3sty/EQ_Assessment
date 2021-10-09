import React, { useState } from "react";
import { AssessmentContext } from "../Helpers/Contexts";
//material ui
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const checkResults = () => {
  console.log("Check Results");
};

export const EndScreen = () => {
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
