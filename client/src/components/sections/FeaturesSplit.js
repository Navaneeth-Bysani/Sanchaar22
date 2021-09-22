import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Edu-Vitae",
    paragraph: "Join! Learn! Achieve! ",
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "#272a2e" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Our Traning Program Includes</h3>

                <div>
                  <ul style={{ fontSize: "18px" }}>
                    <li>
                      {/* <span
                        className="text-xxs text-color-primary"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Technical Workshops
                      </span>{" "} */}
                      {/* <br></br> */}
                      Live Online Training
                    </li>
                    <li>
                      {/* <span
                        className="text-xxs text-color-primary"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Industrial Training
                      </span>{" "}
                      <br></br> */}
                      Certificate of Internship from Wissenaire, IIT Bhubaneswar
                    </li>
                    <li>
                      {/* <span
                        className="text-xxs text-color-primary"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Software/Product Development
                      </span>{" "}
                      <br></br> */}
                      Practical and Project Based Learning
                    </li>
                    <li>
                      {/* <span
                        className="text-xxs text-color-primary"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Major/Minor Projects Development
                      </span>{" "}
                      <br></br> */}
                      Learn from IITians & Industry Experts
                    </li>
                    <li>
                      Access of Offline Internship Program as per Govt.
                      Guidelines (T&C Apply)
                    </li>
                    <li>Important Notes & Session Related Documents</li>
                    <li>Flexible Timing with Morning/Evening Sessions only</li>
                  </ul>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Brand.png")}
                  alt="Features split 01"
                  width={400}
                  height={296}
                />
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  What makes our workshops interesting
                </h3>
                <ul style={{ fontSize: "18px" }}>
                  <li>
                    <span
                      className="text-xxs text-color-primary"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Interactive Competitions/Quizzes
                    </span>{" "}
                    <br></br>
                    To incur interest in students, we conduct team competitions
                    or individual quizzes in relation to the topic at the end of
                    the workshop session.
                  </li>
                  <li>
                    <span
                      className="text-xxs text-color-primary"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Scholarship to the Winners
                    </span>{" "}
                    <br></br>
                    The winners get scholarships and amazing discounts on
                    training programs from Techvanto.
                  </li>
                  <li>
                    <span
                      className="text-xxs text-color-primary"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Hardware and Practicals
                    </span>{" "}
                    <br></br>
                    Our every workshop comprises of interactive practical
                    sessions in which students get to implement the learned
                    techniques on real-time projects and hardware.
                  </li>
                </ul>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/engineering.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
