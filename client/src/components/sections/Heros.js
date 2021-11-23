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
    title: "Winter Training Program",
    // paragraph: "Techno management fest of IIT Bhubaneswar",
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
              <section {...props} className={outerClasses}>
                <div className="container-sm">
                  <div className={innerClasses}>
                    <div className="hero-content">
                      <h1
                        className="mt-0 mb-16 reveal-from-bottom"
                        data-reveal-delay="200"
                      >
                        <span className="text-color-primary">
                          Winter Training Program
                        </span>
                      </h1>
                    </div>
                    <div
                      className="hero-figure reveal-from-bottom illustration-element-01"
                      data-reveal-value="20px"
                      data-reveal-delay="800"
                    >
                      <a href="https://wissenaire.org/" target="_blank">
                        <Image
                          // className="has-shadow"
                          src={require("./../../assets/images/wissLogo.png")}
                          alt="Hero"
                          width={348}
                          height={252}
                        />
                      </a>
                      <Image
                        // className="has-shadow"
                        src={require("./../../assets/images/Edu-Vitae.png")}
                        // src={require("./../../assets/images/techVantoLogo.jpeg")}
                        alt="Hero"
                        width={348}
                        height={252}
                      />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </section>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/training.jpg")}
                  alt="Features split 03"
                  width={328}
                  height={396}
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
