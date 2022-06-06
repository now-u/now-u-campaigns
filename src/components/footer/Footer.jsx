import React from "react";
import classes from "./Footer.module.scss";
import WebFooter from "./WebFooter.jsx";
import MobileFooter from "./MobileFooter.jsx";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <WebFooter />
      <MobileFooter />
    </div>
  );};

export default Footer;
