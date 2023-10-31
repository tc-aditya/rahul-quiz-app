import React from "react";
import {
  AppBar,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";

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

const data = [
  "Create Unlimited Projects",
  "Upload multiple pages per issue",
  "100% web-based, always in sync",
  "Access on mobile or desktop",
  "Contribute to our roadmap",
];

const dataItems = data.map((course) => (
  <ListItem>
    <ListItemIcon>
      <Check />
    </ListItemIcon>
    {course}
  </ListItem>
));
const LandingPage = () => {
  return (
    <div style={{ backgroundColor: " #EFEFEF" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
              style={{ marginTop: "5vh", marginBottom: "3vh" }}
            >
              Unleash Your <br />
              Auditing <br />
              Superpowers
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <>
        <StyledTypography>
          <Typography variant="subtitle1" gutterBottom align="center">
            Kich chaos to the crub and make your site audits a breeze.
          </Typography>
        </StyledTypography>
        <List>
          {data.map((item) => (
            <ListItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              {item}
            </ListItem>
          ))}
        </List>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30vh",
              }}
            >
              <ColorButton variant="contained">Get started Free</ColorButton>
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
              <Link href="#" underline="always" color="inherit">
                {"Already have an account? Log in here"}
              </Link>
            </div>
          </Grid>
        </Grid>
      </>
      <br />
    </div>
  );
};

export default LandingPage;
