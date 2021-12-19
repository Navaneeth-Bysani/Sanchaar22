import React from "react";
import Image from "../elements/Image";
import classNames from "classnames";
import Button from "../elements/Button";
import { BiCalendar } from "react-icons/bi";
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
          style={{ postion: "relative", margin: "10px", marginBottom: "2px" }}
        >
          <h4 className="mt-0 mb-8" style={{ fontSize: "22px" }}>
            {workshop.name}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 5px",
            }}
          >
            <div style={{ display: "flex", flexFlow: "column" }}>
              <p
                style={{
                  display: "flex",
                  color: "#6185b0",
                  fontSize: "14px",
                  marginBottom: "0px",
                  marginTop: "15px",
                }}
              >
                <BiCalendar style={{ marginLeft: "5px", marginRight: "5px" }} />{" "}
                Batch 2 : 2nd Jan'22
              </p>
            </div>
            <div style={{ display: "flex", flexFlow: "column" }}>
              <p
                style={{
                  display: "flex",
                  color: "#6185b0",
                  fontSize: "14px",
                  marginBottom: "0px",
                }}
              >
                <FaPhoneAlt style={{ marginLeft: "5px", marginRight: "5px" }} />{" "}
                8317652305
              </p>
              <p
                style={{
                  display: "flex",
                  color: "#6185b0",
                  fontSize: "14px",
                  marginBottom: "0px",
                }}
              >
                <FaPhoneAlt style={{ marginLeft: "5px", marginRight: "5px" }} />{" "}
                8168123648
              </p>
            </div>
          </div>

          <div>
            <span className="testimonial-item-link">
              <a
                tag="a"
                color="dark"
                wideMobile
                style={{
                  marginBottom: 0,
                  fontSize: "16px",
                  cursor: "pointer",
                  background: "none",
                  color: "#178f37",
                  fontWeight: "600",
                }}
                href={workshop.link}
                // alt="Link"
                target="_blank"
              >
                Know More
              </a>
            </span>
          </div>
        </div>

        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
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
