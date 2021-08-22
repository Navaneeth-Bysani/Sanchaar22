import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import WorkshopCard from "./CardTile";
import Modal from "../elements/Modal";
import Input from "../elements/Input";
import Register from "./Register";
import FormHint from "../elements/FormHint";
import { set } from "react-ga";

const workshops = [
  {
    heading: "Workshop 1",
    content: "Some text about each workshop should be displayed here",
    delay: "200",
  },
  {
    heading: "Workshop 2",
    content: "Some text about each workshop should be displayed here",
    delay: "400",
  },
  {
    heading: "Workshop 3",
    content: "Some text about each workshop should be displayed here",
    delay: "600",
  },
  {
    heading: "Workshop 4",
    content: "Some text about each workshop should be displayed here",
    delay: "200",
  },
  {
    heading: "Workshop 5",
    content: "Some text about each workshop should be displayed here",
    delay: "400",
  },
  {
    heading: "Workshop 6",
    content: "Some text about each workshop should be displayed here",
    delay: "600",
  },
];
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [workshopSelected, setWorkshopSelected] = useState(null);

  const handleClose = () => {
    setShow(false);
    setWorkshopSelected(null);
  };

  const handleOpen = (workshop) => {
    setWorkshopSelected((wokrshopSelected) => workshop);
    setShow(true);
  };

  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Workshops",
    paragraph: "",
  };

  const form = (
    <div>
      <Input label="Name" value="Kartikeya"></Input>
      <Input label="Name" value="Kartikeya"></Input>
      <Input label="Name" value="Kartikeya"></Input>
    </div>
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {workshops.map((workshop, index) => {
              return (
                <WorkshopCard
                  workshop={workshop}
                  key={index}
                  handleOpen={() => handleOpen(workshop)}
                />
              );
            })}
            <Modal handleClose={handleClose} show={show}>
              <Register
                workshop={workshopSelected}
                workshops={workshops}
                handleClose={handleClose}
              />
            </Modal>
            {/* <div className="tiles-item reveal-from-bottom ">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header center-content">
                  <div className="features-tiles-item-image mb-16 ">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content ">
                  <h4 className="mt-0 mb-8 center-content">Company 1</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehe ndrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-content">
                  <span className="testimonial-item-link">
                    <a href="#0">Register</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom center-content"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content center-content">
                  <h4 className="mt-0 mb-8">Company 2</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehe ndrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">Register</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom center-content"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Company 3</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehe ndrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">Register</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom center-content">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Company 4</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehe ndrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">Register</a>
                  </span>
                </div>
              </div>
            </div>

            <WorkshopCard />

            <div
              className="tiles-item reveal-from-bottom center-content"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Company 6</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehe ndrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a href="#0">Register</a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
