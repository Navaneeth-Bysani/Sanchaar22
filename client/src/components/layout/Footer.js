import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Button from "../elements/Button";
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <div className="footer-top space-between text-xxs">
              <span>
                <a
                  href="https://drive.google.com/file/d/1aRwWYqIaAzZt1OH2BjcHeXdM7Lx-1o1O/view"
                  alt="Terms"
                >
                  Terms and conditions
                </a>
              </span>
            </div>
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            {/* <div className="footer-copyright">Made by <a href="https://cruip.com">Cruip</a>. All right reserved</div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
