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
      style={{ backgroundColor: "#272a2e" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className=" center-content reveal-from-bottom">
            <h1 style={{ fontSize: "30px", marginTop: "0px" }}>
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
                }}
              >
                <Image
                  src={require("./../../assets/images/certificate.jpeg")}
                  alt="Features split 03"
                  width={520}
                  height={320}
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
