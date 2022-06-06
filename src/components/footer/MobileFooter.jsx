import React from "react";
import classes from "./Footer.module.scss";
import {AppDownloadButtons} from "../index";
import {footerLinks} from "../../utils/constants";
import SocialLinks from "./SocialLinks";
import {CharityInfo} from "./CharityInfo";
import {nowUOrange} from "../../assets";

//This version of the footer layout is for users on small-screen devices
const MobileFooter = () => {

  return (
    <div className={classes.mobileFooter}>
      <div className={classes.logo}>
        <img src={nowUOrange} alt="logo"/>
      </div>
      <div className={classes.navLinks}>
        {footerLinks.map(link => {
          return (
            <div className={classes.links} key={link.id}>
              <a href={link.href} target={link.newtab ? "_blank" : null} title={link.newtab ? "Opens PDF in a new tab" : null} className={classes.links}>{link.name == "Terms and conditions" ? "Terms" : link.name}</a>
            </div>
          );
        })}
      </div>
      <SocialLinks className={classes.mobileSocialLinks}/>
      <AppDownloadButtons/>
      <CharityInfo />
    </div>
  );
};

export default MobileFooter;