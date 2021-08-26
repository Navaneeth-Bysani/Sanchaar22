import React from "react";
import Image from "../elements/Image";
import classNames from "classnames";
import Button from "../elements/Button";

const WorkshopCard = ({ workshop, handleOpen, className}) => {
  return (
    <div
      className="tiles-item reveal-from-bottom center-content"
      data-reveal-delay={workshop.delay}
    >
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <Image
              src={require(`./../../assets/images/${workshop.image}`)}
              alt="Features tile icon 05"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">{workshop.heading}</h4>
          <a href={workshop.pdfLink} target="_blank">
            Know more
          </a>
          <p className="m-0 text-sm">{workshop.content}</p>
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
