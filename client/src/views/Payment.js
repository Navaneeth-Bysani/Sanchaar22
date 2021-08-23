import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// import sections
import PaymentHero from "../components/sections/PaymentHero";

import Button from "./../components/elements/Button";
import {
  Container,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Box,
  Divider,
} from "@material-ui/core";
import componentStyles from "./../assets/theme/Register";

// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const useStyles = makeStyles(componentStyles);

const CardDetails = (props) => {
  return (
    <Card
      style={{
        backgroundColor: "black",
        textAlign: "center",
        width: "80%",
        maxWidth: "40rem",
        margin: "0px auto",
        padding: "10px",
      }}
    >
      <CardContent>
        <p>
          <b>Name: </b> {props.details.name}
        </p>
        <p>
          <b>Email: </b> {props.details.email}
        </p>
        <p>
          <b>Phone Number: </b> {props.details.phoneNumber}
        </p>
        <p>
          <b>Workshop: </b>
          {props.details.workshop}
        </p>
        <Box
          component={Divider}
          marginBottom="0.8rem!important"
          marginTop="0.8rem!important"
        />
      </CardContent>
    </Card>
  );
};
const Payment = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    workshop: "",
  });

  const classes = useStyles();
  const regId = useParams().regId;
  const onPayClick = () => {
    console.log(regId);
    axios
      .post(`http://localhost:5000/api/register/initiatePayment/${regId}`, {})
      .then((res) => {
        console.log(res);
        window.location.href = res.data.redirectUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(regId);
  useEffect(() => {
    axios
      .patch(`http://localhost:5000/api/register/verifyEmail/${regId}`, {})
      .then((res) => {
        console.log(res);
        if (
          res.data.message === "email verified" ||
          res.data.message === "already verified"
        ) {
          setDetails({
            name: res.data.registration.name,
            email: res.data.registration.email,
            phoneNumber: res.data.registration.phoneNumber,
            workshop: res.data.registration.workshop,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container alignItems="center" classes={{ root: classes.containerRoot }}>
      <PaymentHero className="illustration-section-01" />
      <CardDetails details={details} />
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <Button
          color="primary"
          onClick={onPayClick}
          classes={{ root: classes.buttonRootDark }}
          variant="contained"
        >
          Pay
        </Button>
      </div>
    </Container>
  );
};

export default Payment;
