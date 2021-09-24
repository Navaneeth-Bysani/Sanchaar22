import React from "react";
import Image from "../elements/Image";
import classNames from "classnames";
import Button from "../elements/Button";
import { CgCalendarDates } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const WorkshopCard = ({ workshop, handleOpen, className }) => {
  return (
    <div
      className="tiles-item reveal-from-bottom center-content"
      data-reveal-delay={workshop.delay}
    >
      <div className="tiles-item-inner">
        <div
          className="features-tiles-item-header"
          style={{ maxHeight: "150px" }}
        >
          <div
            className="features-tiles-item-image mb-16"
            style={{ height: "150px", width: "100%" }}
          >
            <Image
              src={require(`./../../assets/images/${workshop.image}`)}
              alt="Features tile icon 05"
            />
          </div>
        </div>
        <div
          className="features-tiles-item-content"
          style={{ postion: "relative", marginLeft: "10px", marginTop: "10px" }}
        >
          <h4 className="mt-0 mb-8" style={{ fontSize: "22px" }}>
            {workshop.name}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <p style={{ display: "flex", color: "#6987AB", fontSize: "16px" }}>
              <CgCalendarDates
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />{" "}
              {workshop.content}
            </p>
            <p style={{ display: "flex", color: "#6987AB", fontSize: "16px" }}>
              <FaPhoneAlt style={{ marginLeft: "10px", marginRight: "10px" }} />{" "}
              998283839
            </p>
          </div>
        </div>

        <div
          className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"
          style={{ bottom: "10px" }}
        >
          <span className="testimonial-item-link">
            <Button tag="a" color="dark" wideMobile onClick={handleOpen}>
              Register
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

// () =>
//                 (window.location.href = "http://pages.razorpay.com/witp")
