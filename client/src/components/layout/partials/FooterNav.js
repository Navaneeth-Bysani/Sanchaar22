import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      {/* <ul className="list-reset"> */}
        {/* <li> */}
          Contact: Divyesh 8317652305
        {/* </li> */}
        {/* <br/> */}
        <br/>
        {/* <li> */}
          Mail: competitions.wissenaire@gmail.com
        {/* </li> */}
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      {/* </ul> */}
    </nav>
  );
}

export default FooterNav;