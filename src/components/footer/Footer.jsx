import React from 'react';
import classes from './Footer.module.scss';
// import { nowUOrange } from '../../assets';
import { privacyNotice, nowUOrange } from '../../assets';
import { AppDownloadButtons } from '../../components';

const Footer = () => {
  return (
    <div className={classes.footerBackground}>
      <div className={classes.logo}>
        <img src={nowUOrange} alt="logo" />
      </div>
      <div className={classes.footer}>
        <div className={classes.footerLeft}>
          <div className={classes.linksColumnOne}>
            <div className={classes.links}>
              <a href="/campaigns" className={classes.links}>Campaigns</a>
            </div>
            <div className={classes.links}>
              <a href="/now-u-app" className={classes.links}>Now-u app</a>
            </div>
            <div className={classes.links}>
              <a href="aboutus" className={classes.links}>About us</a>
            </div>
            <div className={classes.links}>
              <a href="get-in-touch" className={classes.links}>Get in touch</a>
            </div>
            <div className={classes.links}>
              <a href="press" className={classes.links}>Press</a>
            </div>
          </div>
          <div className={classes.linksColumnTwo}>
            <div className={classes.links}>
              <a href="faqs" className={classes.links}>FAQ</a>
            </div>
            <div className={classes.links}>
              <a href="/" className={classes.links}>Blog</a>
            </div>
            <div className={classes.links}>
              <a href="/" className={classes.links}>Newsletter</a>
            </div>
            <div className={classes.links} target="_blank" rel="noopener noreferrer">
              <a href={privacyNotice} >Privacy Notice</a>
            </div>
          </div>
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
    </div>
  );
};

export default Footer;
