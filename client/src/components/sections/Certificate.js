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
    title: "Certificate Awarded",
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: "#d1d1d1" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className=" center-content reveal-from-top">
            <h1
              style={{ fontSize: "30px", marginTop: "0px", color: "#054599" }}
            >
              Certificate Awarded
            </h1>
          </div>
          <div className={splitClasses}>
            <div>
              <div
                className="center-content reveal-from-bottom"
                style={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "18px",
                }}
                duration="400"
              >
                <Image
                  src={require("./../../assets/images/certificate.jpg")}
                  alt="Features split 03"
                  width={520}
                  height={320}
                  border={18}
                />
              </div>
            </div>

            <div
              style={{ textAlign: "center" }}
              className="split-item-content center-content-mobile reveal-from-bottom"
            >
              <h5 style={{ color: "black", fontSize: "16px" }}>
                It’s a <b style={{ color: "green" }}>Certified Program.</b>{" "}
                Certificate will be given to all participants as per their
                requirement. Like: 2/4/6/8 Weeks or as per their college
                requirement.
              </h5>
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
