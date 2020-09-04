import React from "react";
import { appleStoreNew, googleStoreNew } from "../../assets";
import { Button } from "../../components";
import classes from "./AppDownload.module.scss";

const AppDownloadButtons = () => {

	return (
		<div className={classes.appDownloadButtonContainer}>
			<div className={classes.downloadBtns2}>
				<Button variant="other">
					<img src={appleStoreNew} alt="app download from apple store" />
				</Button>
				<Button variant="other">
					<img src={googleStoreNew} alt="app download from google store" />
				</Button>
			</div>
		</div>
	);
};

export default AppDownloadButtons;