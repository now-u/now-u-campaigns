import React from "react";
import classes from "./AppDownloadRectangle.module.scss";
import { Text, Button } from "../../components";
import { appleStore, googlePlayBadge } from "../../assets";
import { appleStoreURL, googleStoreURL } from "../../utils/constants";

const AppDownloadRectangle = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <Text type="p">
                    Download our app to take part!
        </Text>
      </div>
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
          <img src={googlePlayBadge} alt="app download from google store" />
        </Button>
      </div>
            
    </div>
  );
};

export default AppDownloadRectangle;
