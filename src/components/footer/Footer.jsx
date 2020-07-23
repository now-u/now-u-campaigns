import React from 'react';
import classes from './Footer.module.scss';
import { privacyNotice } from '../../assets';
import { AppDownloadButtons } from '../../components';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerLeft}>
        <a href={privacyNotice} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
      <div className={classes.footerRight}>
        <div className={classes.appDownloadLinks}>
          <AppDownloadButtons />
        </div>
        <div>
          <a
            href="https://www.facebook.com/nowufb"
            className="fa fa-facebook fa-2x"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a href="https://twitter.com/now_u_app" 
            className="fa fa-twitter fa-2x" 
            target="_blank" 
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/now_u_app/"
            className="fa fa-instagram fa-2x"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.linkedin.com/company/now-u/?viewAsMember=true"
            className="fa fa-linkedin fa-2x"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
