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
    name: "Python",
    content: "11th,Sept 2021",
    delay: "200",
    image: "python.png",
    // gForm : ""
  },
  {
    name: "Java",
    content: "11th,Sept 2021",
    delay: "400",
    image: "java.png",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  {
    name: "Machine Learning",
    content: "11th,Sept 2021",
    delay: "600",
    image: "ML.jpg",
    // gForm : ""
  },
  {
    name: "Full Stack Development",
    content: "11th,Sept 2021",
    delay: "200",
    image: "web.jpg",
    // gForm : ""
  },
  {
    name: "Android Development",
    content: "11th,Sept 2021",
    delay: "400",
    image: "android.png",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },

  {
    name: "Automobile",
    content: "11th,Sept 2021",
    delay: "600",
    image: "Automobile.jpg",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  {
    name: "Embedded systems with Robotics",
    content: "11th,Sept 2021",
    delay: "200",
    image: "embd.jpg",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  {
    name: "Cyber Security and Ethical Hacking",
    content: "11th,Sept 2021",
    delay: "400",
    image: "cyber.jpg",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  // {
  //   name: "Ethical Hacking",
  //   content: "11th,Sept 2021",
  //   delay: "600",
  //   image: "ethical.jpg",
  //   // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  // },
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
    setWorkshopSelected((workshopSelected) => workshop);
    setShow(true);
    // window.location.href = workshop.gForm;
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
    title: "Training Programs",
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
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
