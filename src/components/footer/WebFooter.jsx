import React from "react";
import classes from "./Footer.module.scss";
import { nowUOrange } from "../../assets";
import { AppDownloadButtons } from "../../components";
import {footerLinks} from "../../utils/constants";
import SocialLinks from "./SocialLinks";

//This version of the footer layout is for browser users
const WebFooter = () => {
  return (
    <div className={classes.webFooter}>
      <div className={classes.footerBackground}>
        <div className={classes.logo}>
          <img src={nowUOrange} alt="logo" />
        </div>
        <div className={classes.footer}>
          <div className={classes.footerLeft}>
            {footerLinks.map(link => {
              return (
                <div className={classes.links} key={link.id}>
                  <a href={link.href} target={link.newtab ? "_blank" : null} title={link.newtab ? "Opens PDF in a new tab" : null} className={classes.links}>{link.name}</a>
                  {link.id == footerLinks.length ? null : "|"}
                </div>
              );
            })}
            <div className={classes.footerBottom}>The now-u brand encompasses now-u CIC (registered UK company number: 12709184) and now-u community CIO (registered UK charity number: 1196568)</div>
          </div>
          <div className={classes.footerRight}>
            <SocialLinks className={classes.webSocialLinks} />
            <div className={classes.appDownloadLinksForWeb}>
              <AppDownloadButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFooter;