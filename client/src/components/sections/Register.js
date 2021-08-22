import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "./../elements/Input";
import FormHint from "../elements/FormHint";
// core components

import componentStyles from "./../../assets/theme/Register";

const useStyles = makeStyles(componentStyles);
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function Register({ workshop, workshops }) {
  const classes = useStyles();
  const theme = useTheme();

  // //console.log(user);

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    workshop: workshop.heading,
  });
  console.log(values.workshop);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const form = (
    <Container
      maxWidth="lg"
      marginTop="0rem"
      classes={{ root: classes.containerRoot }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          xl={8}
          marginBottom="3rem"
          classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
        >
          <Card
            classes={{
              root: classes.cardRoot + " " + classes.cardRootSecondary,
            }}
          >
            <CardHeader
              subheader={
                <Grid
                  container
                  component={Box}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Box
                      component={Typography}
                      variant="h3"
                      marginBottom="0!important"
                    >
                      Register
                    </Box>
                  </Grid>
                </Grid>
              }
              classes={{ root: classes.cardHeaderRoot }}
            ></CardHeader>
            <CardContent>
              <Box
                component={Typography}
                variant="h6"
                color={theme.palette.gray[600] + "!important"}
                paddingTop=".25rem"
                paddingBottom=".25rem"
                fontSize=".75rem!important"
                letterSpacing=".04em"
                marginBottom="1.5rem!important"
                classes={{ root: classes.typographyRootH6 }}
              >
                Details
              </Box>
              <div className={classes.plLg4}>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <FormGroup>
                      <FormLabel>Name</FormLabel>
                      <FormControl
                        variant="filled"
                        width="100%"
                        style={{
                          marginBottom: "1rem!important",
                        }}
                        required
                      >
                        <Input
                          type="text"
                          required
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          classes={{ input: classes.searchInput }}
                        />
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        variant="filled"
                        width="100%"
                        styles={{ marginBottom: "1rem!important" }}
                      >
                        <Input
                          style={{
                            paddingLeft: "0.75rem",
                            paddingRight: "0.75rem",
                            backgroundColor: "#fffff",
                          }}
                          classes={{ input: classes.searchInput }}
                          type="email"
                          value={values.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <FormGroup>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl
                        variant="filled"
                        width="100%"
                        styles={{ marginBottom: "1rem!important" }}
                      >
                        <Input
                          style={{
                            paddingLeft: "0.75rem",
                            paddingRight: "0.75rem",
                          }}
                          classes={{ input: classes.searchInput }}
                          type="text"
                          value={values.mobile}
                          name="mobile"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <FormGroup>
                      <FormLabel>Workshops</FormLabel>
                      <FormControl
                        variant="filled"
                        width="100%"
                        styles={{ marginBottom: "1rem!important" }}
                      >
                        <NativeSelect
                          id="demo-customized-select-native"
                          value={values.workshop}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          name="workshop"
                        >
                          {workshops.map((work, ind) => (
                            <option value={work.heading} id={ind}>
                              {work.heading}
                            </option>
                          ))}
                        </NativeSelect>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
              <Box
                component={Divider}
                marginBottom="0.8rem!important"
                marginTop="0.8rem!important"
              />
              {/* <Box
                component={Typography}
                variant="h6"
                color={theme.palette.gray[600] + "!important"}
                paddingTop=".25rem"
                paddingBottom=".25rem"
                fontSize=".75rem!important"
                letterSpacing=".04em"
                marginBottom="1.5rem!important"
                classes={{ root: classes.typographyRootH6 }}
              >
                Teacher Information
              </Box> */}
            </CardContent>

            <Box
              sx={{
                display: "center",

                p: 2,
              }}
            >
              <Button
                color="primary"
                style={{
                  marginLeft: "40%",
                  marginRight: "40%",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
                classes={{ root: classes.buttonRootDark }}
                variant="contained"
                disabled={
                  !(
                    values.name &&
                    values.email &&
                    values.workshop &&
                    values.mobile
                  )
                }
              >
                Register
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );

  return <>{form}</>;
}

export default Register;
