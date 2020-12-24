import React from "react";
import { Text, Button } from "../index";
import { appDownload, appleStore, googleStore } from "../../assets";
import classes from "./AppDownload.module.scss";
import { appleStoreURL, googleStoreURL } from "../../utils/constants";

const AppDownload = () => {
  return (
    <div className={classes.appDownloadContainer}>
      <div className={classes.downloadContent}>
        <Text type="h2" className={classes.header}>
          Download our app to take part
        </Text>
        <Text type="p" className={classes.downloadDescription}>
          To get involved and sign up to a campaign, download &apos;now-u&apos; from the app store on your smart phone
          on the 1st July.
        </Text>
        <div className={classes.downloadBtns}>
          <Button
            variant="other"
            onClick={()=> window.open(appleStoreURL, "_blank")}
          >
            <img src={appleStore} alt="app download from apple store" />
          </Button>
          <Button
            variant="other"
            onClick={()=> window.open(googleStoreURL, "_blank")}
          >
            <img src={googleStore} alt="app download from google store" />
          </Button>
        </div>
        <img className={classes.appImage} src={appDownload} alt="mobile app" />
      </div>
    </div>
  );
};

export default AppDownload;
