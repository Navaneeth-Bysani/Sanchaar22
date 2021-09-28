import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import trainingImage from "./../../assets/images/training.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  className = "illustration-section-01";

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={outerClasses}
      // style={{
      //   backgroundImage: `url(${trainingImage})`,
      // }}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">
                Winter Internship & Traning Program
              </span>
            </h1>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
            style={{ marginTop: "20px" }}
          >
            <a href="https://wissenaire.org/" target="_blank">
              <Image
                // className="has-shadow"
                src={require("./../../assets/images/w.png")}
                alt="Hero"
                width={348}
                height={232}
              />
            </a>
            <h3
              style={{
                fontSize: "15px",
                margin: "0px",
                fontWeight: "400",
                fontStyle: "italic",
                marginTop: "5px",
              }}
            >
              {" "}
              in association with{" "}
            </h3>
            <Image
              // className="has-shadow"
              src={require("./../../assets/images/ed.png")}
              // src={require("./../../assets/images/techVantoLogo.jpeg")}
              alt="Hero"
              width={348}
              height={252}
            />
            {/* </a> */}
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
