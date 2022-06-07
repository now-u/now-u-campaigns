import React from "react";
import { appleStoreNew, googleStoreNew } from "../../assets";
import { Button } from "../../components";
import classes from "./AppDownload.module.scss";
import { appleStoreURL, googleStoreURL } from "../../utils/constants";

const AppDownloadButtons = () => {

  return (
    <div className={classes.appDownloadButtonContainer}>
      <Button
        variant="other"
        onClick={()=> window.open(appleStoreURL, "_blank")}
      >
        <img src={appleStoreNew} alt="app download from apple store" />
      </Button>
      <Button
        variant="other"
        onClick={()=> window.open(googleStoreURL, "_blank")}
      >
        <img src={googleStoreNew} alt="app download from google store" />
      </Button>
    </div>
  );
};

export default AppDownloadButtons;