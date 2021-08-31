import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AlertDialog from "../components/elements/MaterialModal";
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
  Typography,
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
        <Typography>
          <b>Name: </b> {props.details.name}
        </Typography>
        <Typography>
          <b>Email: </b> {props.details.email}
        </Typography>
        <Typography>
          <b>Phone Number: </b> {props.details.phoneNumber}
        </Typography>
        <Typography>
          <b>Workshop: </b>
          {props.details.workshop}
        </Typography>
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
    hasPaid: false,
  });

  const [showError, setShowError] = useState(false);

  const handleError = () => {
    setShowError(false);
  };
  const classes = useStyles();
  const regId = useParams().regId;

  const onPayClick = () => {
    // console.log(regId);
    axios
      .post(
        `https://wiss-sanchaar-2022.herokuapp.com/api/register/initiatePayment/${regId}`,
        {}
      )
      .then((res) => {
        // console.log(res);
        window.location.href = res.data.redirectUrl;
      })
      .catch((err) => {
        setShowError(true);
        console.log(err);
      });
  };

  // console.log(regId);
  useEffect(() => {
    axios
      .patch(
        `https://wiss-sanchaar-2022.herokuapp.com/api/register/verifyEmail/${regId}`,
        {}
      )
      .then((res) => {
        // console.log(res);
        if (
          res.data.message === "email verified" ||
          res.data.message === "already verified"
        ) {
          setDetails({
            name: res.data.registration.name,
            email: res.data.registration.email,
            phoneNumber: res.data.registration.phoneNumber,
            workshop: res.data.registration.workshop,
            hasPaid: res.data.registration.paymentId ? true : false,
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
          color={details.hasPaid ? "secondary" : "primary"}
          onClick={onPayClick}
          classes={{ root: classes.buttonRootDark }}
          variant="contained"
          disabled={details.hasPaid}
        >
          {!details.hasPaid ? "Pay" : "Paid"}
        </Button>
      </div>
      <AlertDialog
        show={showError}
        handleClose={handleError}
        content="Please enter a valid phone number for registration"
      ></AlertDialog>
    </Container>
  );
};

export default Payment;
