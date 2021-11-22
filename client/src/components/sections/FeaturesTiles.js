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
    name: "Machine Learning with Python",
    content: "11th,Sept 2021",
    delay: "200",
    image: "ML.jpg",
    link: "https://drive.google.com/file/d/17BVsWCP3F0KeUCifX2wiiDcl9oALkAEs/view?usp=sharing",
    // gForm : ""
  },
  {
    name: "Full Stack Web Development",
    content: "11th,Sept 2021",
    delay: "400",
    image: "web.jpg",
    link: "https://drive.google.com/file/d/1HDEJa6m3p_9AmeLy-LJDAHXAlxJ1wI7g/view?usp=sharing",
    // gForm : ""
  },
  {
    name: "Product & UI/UX design",
    content: "11th,Sept 2021",
    delay: "600",
    image: "ui.jpg",
    link: "https://drive.google.com/file/d/1kiYFM1RYXlMW6n2lPiU7IHz_gB4EPcs7/view?usp=sharing",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },

  // {
  //   name: "Automobile",
  //   content: "11th,Sept 2021",
  //   delay: "600",
  //   image: "Automobile.jpg",
  //   // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  // },
  {
    name: "Embedded Systems with Robotics & IoT",
    content: "11th,Sept 2021",
    delay: "200",
    image: "embd.jpg",
    link: "https://drive.google.com/file/d/1OlQAHnsgwScAgSS9sAsZ0M6m2nVTE-dH/view?usp=sharing",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  {
    name: "Cyber Security and Ethical Hacking",
    content: "11th,Sept 2021",
    delay: "400",
    image: "cyber.jpg",
    link: "https://drive.google.com/file/d/1s8QyWtJ7Z51HN-NRmp8WOb0IchNpzEKW/view?usp=sharing",
    // gForm : "http://tinyurl.com/techvantoacademyworkshop"
  },
  {
    name: "Mechatronics with Advanced Study",
    content: "11th,Sept 2021",
    delay: "600",
    image: "mechatronics.jpg",
    link: "https://drive.google.com/file/d/1ERnC7dEcz16yAfYUJ3AqtUnMQPp2Qyh4/view?usp=sharing",
    // gForm : ""
  },
  {
    name: "CPM (Construction Project Management)",
    content: "11th,Sept 2021",
    delay: "200",
    image: "cpm.jpg",
    link: "https://drive.google.com/file/d/1WIR8_4yusuEFEizRW1oMyG1pJ_VKN_D9/view?usp=sharing",
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
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "#030d14" }}
    >
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
            <div
              style={{ textAlign: "center" }}
              className="split-item-content center-content-mobile reveal-from-top"
            >
              <h5>
                Total fee INR 2999/- Pay in installments| Book your seat now
                with just @ Rs. 499/- only.
              </h5>
              <h5
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#bab8b8",
                }}
              >
                <b>Eligibility Criteria:</b> For All graduates, Diploma, Btech,
                engineering & other all interested students & professionals.
              </h5>
              <h5
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#bab8b8",
                }}
              >
                <b>Note:</b> Mechatronics with advanced study is for Mechanical
                and Mechatronics students and CPM is for Civil and Civil
                management students
              </h5>
            </div>
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
