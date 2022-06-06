import React from "react";
import classes from "./Footer.module.scss";
import { AppDownloadButtons } from "../../components";
import {footerLinks} from "../../utils/constants";
import SocialLinks from "./SocialLinks";
import {CharityInfo} from "./CharityInfo";
import {nowUOrange} from "../../assets";

//This version of the footer layout is for browser users
const WebFooter = () => {
  return (
    <div className={classes.webFooter}>
      <div className={classes.left}>
        <div className={classes.logo}>
          <img src={nowUOrange} alt="logo"/>
        </div>
        <div className={classes.navLinks}>
          {footerLinks.map(link => {
            return (
              <div key={link.id}>
                <a href={link.href} target={link.newtab ? "_blank" : null} title={link.newtab ? "Opens PDF in a new tab" : null} className={classes.links}>{link.name}</a>
                <span className={classes.divider} >{link.id == footerLinks.length ? null : "|"}</span>
              </div>
            );
          })}
        </div>
        <CharityInfo />

      </div>
      <div className={classes.right}>
        <SocialLinks />
        <AppDownloadButtons />

      </div>
    </div>
  );
};

export default WebFooter;