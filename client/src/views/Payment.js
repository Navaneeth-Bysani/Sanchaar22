import React from 'react';
// import sections
import PaymentHero from '../components/sections/PaymentHero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Card = (props) => {
    return(
        <div style = {{"backgroundColor" : "black", "textAlign" : "center", "width" : "80%", "maxWidth" : "25rem", 
            "margin" : "0px auto", "padding" : "10px"}}>
            <p><b>Name: </b> {props.details.name}</p>
            <p><b>Email: </b> {props.details.email}</p>
            <p><b>Phone Number: </b> {props.details.phoneNumber}</p>
            <p><b>Workshop: </b>{props.details.workshop}</p>
        </div>
    )
}
const Payment = () => {
    const details = {
        name : "Bysani R Navaneeth",
        email : "brn14@iitbbs.ac.in",
        phoneNumber : "8985749089",
        workshop : "Workshop-1"
    }
  return (
    <>
      <PaymentHero className="illustration-section-01" /> 
      <Card details = {details}/>     
    </>
  );
}

export default Payment;