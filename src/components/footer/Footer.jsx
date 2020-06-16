import React from 'react';
import classes from './Footer.module.scss';
import { privacyNotice } from '../../assets';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <a href={privacyNotice} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
      <div className={classes.socialLinks}>
        <a
          href="https://www.facebook.com/nowufb"
          className="fa fa-facebook"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a href="https://twitter.com/now_u_app" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
        <a
          href="https://www.instagram.com/now_u_app/"
          className="fa fa-instagram"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href="https://www.linkedin.com/company/now-u/?viewAsMember=true"
          className="fa fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default Footer;
