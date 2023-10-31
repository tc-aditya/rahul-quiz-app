import React from "react";
import HeaderNew from "../HeaderNew/header.new";
import { Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const MyProjects = () => {
  return (
    <div style={{ backgroundColor: " #EFEFEF" }}>
      <HeaderNew pageTitle="Create Project" />
      <br />
      <>
        <StyledTypography>
          <Typography variant="subtitle1" gutterBottom align="center">
            Just enter the name of your project, it could be the name of the
            site you're working on, the location or something else.
          </Typography>
        </StyledTypography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "40vh",
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                defaultValue="What's the name of this project?"
                inputProps={{
                  min: 0,
                  style: { width: "400px", color: "gray" },
                }}
                sx={{ m: 1, mx: 4 }}
                style={{ background: "white" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10vh",
              }}
            >
              <ColorButton variant="contained">Save</ColorButton>
            </div>
          </Grid>
        </Grid>
      </>
      <br />
    </div>
  );
};

export default MyProjects;
