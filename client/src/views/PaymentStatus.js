import React, { useEffect, useState } from "react";
import axios from "axios";
// const url = require("url");
import { useParams } from "react-router-dom";
import AlertDialog from "../components/elements/MaterialModal";
// import sections
import PaymentStatusHero from "../components/sections/PaymentStatusHero";

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

const PaymentStatus = () => {
  const useStyles = makeStyles(componentStyles);
  const classes = useStyles();
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    console.log("here");
    let link = window.location.href;
    const idx = link.indexOf("callback");
    const str = link.substring(idx);
    axios
      .get(`https://wiss-sanchaar-2022.herokuapp.com/api/register/${str}`)
      .then((res) => {
        console.log(res);
        setMessage("Payment Successful, Please check your emails");
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          "There was an error while making payment!\nPlease contact our team, if money is deducted"
        );
      });
  }, []);
  return (
    <Container alignItems="center" classes={{ root: classes.containerRoot }}>
      <PaymentStatusHero className="illustration-section-01" />
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
          <Typography>{message}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PaymentStatus;
