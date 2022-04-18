import React from "react";
import classes from "./Footer.module.scss";
import { nowUOrange } from "../../assets";
import { AppDownloadButtons } from "../../components";
import {footerLinks} from "../../utils/constants";

const Footer = () => {
  
  return (
    <div className={classes.footerBackground}>
      <div className={classes.logo}>
        <img src={nowUOrange} alt="logo" />
      </div>
      <div className={classes.footer}>
        <div className={classes.footerLeft}>
          <div className={classes.linksColumnOne}>
            {footerLinks.map(link => {
              return (
                <div className={classes.links} key={link.id}>
                  <a href={link.href} className={classes.links}>{link.name}</a>
                </div>
              );
            })}
          </div>
          <div className={classes.linksColumnTwo}>
            {footerLinks.map(link => {
              return (
                <div className={classes.links} key={link.id}>
                  { link.href.includes("https://") 
                    // Open external links in a new tab
                    ? <a href={link.href} className={classes.links} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    // Internal links (routes)
                    : <a href={link.href} className={classes.links}>{link.name}</a>
                  }
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.footerRight}>
          <div>
            <a
              href="https://www.instagram.com/now_u_app/"
              className="fa fa-instagram fa-2x"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
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
              href="https://www.linkedin.com/company/now-u/?viewAsMember=true"
              className="fa fa-linkedin fa-2x"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div className={classes.appDownloadLinks}>
            <AppDownloadButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
