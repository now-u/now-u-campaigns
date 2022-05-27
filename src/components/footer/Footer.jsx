import React from "react";
import classes from "./Footer.module.scss";
import WebFooter from "./WebFooter.jsx";
import MobileFooter from "./MobileFooter.jsx";
import {nowUOrange} from "../../assets";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src={nowUOrange} alt="logo"/>
      </div>
      <WebFooter />
      <MobileFooter />
    </div>
  );};

export default Footer;
