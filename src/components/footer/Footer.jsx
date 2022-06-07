import React from "react";
import classes from "./Footer.module.scss";
import DesktopFooter from "./DesktopFooter.jsx";
import MobileFooter from "./MobileFooter.jsx";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <DesktopFooter />
      <MobileFooter />
    </div>
  );};

export default Footer;
