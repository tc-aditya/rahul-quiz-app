import React from "react";
import HeaderNew from "../HeaderNew/header.new";
import { Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const Login = () => {
  return (
    <div style={{ backgroundColor: " #EFEFEF" }}>
      <HeaderNew pageTitle="Get Started" />
      <br />
      <>
        <Typography variant="subtitle1" gutterBottom align="center">
          Just enter your email address and we'll email you a magic link to log
          straight in.
        </Typography>{" "}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "60vh",
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                defaultValue="What's your email address?"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                sx={{ m: 1, width: "auto" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ColorButton variant="contained">Login In</ColorButton>
            </div>
          </Grid>
        </Grid>
      </>
      <br />
    </div>
  );
};

export default Login;
