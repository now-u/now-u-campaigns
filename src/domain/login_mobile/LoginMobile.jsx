import React from "react";
import classes from "./LoginMobile.module.scss";
import { Text } from "../../components";
import { mobileLogin } from "../../assets";

const LoginMobile = () => {
  return (
    <div className={classes.background}>
      <div className={classes.loginMobileContainer}>
        <div className={classes.messageContent}>
          <Text type="h2" className={classes.messageHeader}>Oops!</Text>
          <Text type="p" className={classes.message}>You need to open this link on your phone :)</Text>
        </div>
        <div className={classes.image}>  
          <img src={mobileLogin} alt="Mobile Login Image" className={classes.mobileImage} />
        </div>
      </div>
    </div>
  );
};

export default LoginMobile;
