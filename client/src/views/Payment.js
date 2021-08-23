import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

// import sections
import PaymentHero from '../components/sections/PaymentHero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Card = (props) => {
    return(
        <div style = {{"backgroundColor" : "black", "textAlign" : "center", "width" : "80%", "maxWidth" : "40rem", 
            "margin" : "0px auto", "padding" : "10px"}}>
            <p><b>Name: </b> {props.details.name}</p>
            <p><b>Email: </b> {props.details.email}</p>
            <p><b>Phone Number: </b> {props.details.phoneNumber}</p>
            <p><b>Workshop: </b>{props.details.workshop}</p>
        </div>
    )
}
const Payment = () => {
    const [details, setDetails] = useState({
        name : "",
        email : "",
        phoneNumber : "",
        workshop : ""
    })
    const regId = useParams().regId;
    console.log(regId);
    useEffect(() => {
      axios.patch(`http://localhost:5000/api/register/verifyEmail/${regId}`, {}).then(res=> {
        console.log(res);
        if(res.data.message === "email verified" || res.data.message === "already verified") {
          setDetails({
            name : res.data.registration.name,
            email : res.data.registration.email,
            phoneNumber : res.data.registration.phoneNumber,
            workshop : res.data.registration.workshop,
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
    }, []);
  return (
    <>
      <PaymentHero className="illustration-section-01" /> 
      <Card details = {details}/>     
    </>
  );
}

export default Payment;