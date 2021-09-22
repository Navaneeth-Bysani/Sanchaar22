import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Avatar from "react-avatar";

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
    title: "Learn from world class faculties",
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "#DBDDDF" }}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className=" center-content reveal-from-bottom">
            <h1
              style={{ fontSize: "30px", marginTop: "0px", color: "#002E5E" }}
            >
              Learn from world class faculties
            </h1>
          </div>
          <div>
            <div
              className="split-item"
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                style={{ display: "flex", flexFlow: "column" }}
              >
                <Avatar
                  src={require(`./../../assets/images/avatar.png`)}
                  size="150"
                  round="50%"
                />
                {/* <div style={{ width: "100px" }}>
                  <h3 style={{ fontSize: "18px" }}>Faculty Name</h3>
                  <p style={{ fontSize: "18px" }}>
                    Bachelors in IIT Bhubaneswar, Mtech in IIT Madras
                  </p>
                </div> */}
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                style={{ top: "10px" }}
              >
                <Avatar
                  src={require(`./../../assets/images/avatar.png`)}
                  size="150"
                  round="50%"
                />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
                style={{ top: "10px" }}
              >
                <Avatar
                  src={require(`./../../assets/images/avatar.png`)}
                  size="150"
                  round="50%"
                />
              </div>
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
                style={{ top: "10px" }}
              >
                <Avatar
                  src={require(`./../../assets/images/avatar.png`)}
                  size="150"
                  round="50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
