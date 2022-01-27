import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  marginAutoContainer: {
    marginTop: 10,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 10px #DCDCDC",
  },
  closing: {
    fontSize: "2rem",
    fontFamily: "Roboto",
  },
});

const ConfirmationScreen = () => {
  const classes = useStyles();
  return (
    <Box item className={classes.marginAutoContainer}>
      <h1 item className={classes.closing}>
        Your results have been sent to your email!
      </h1>
    </Box>
  );
};

export default ConfirmationScreen;
