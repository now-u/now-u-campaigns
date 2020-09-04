import React from "react";
import { googlePlayBadge, appleStore } from "../../assets";
import classes from "./DownloadButtons.module.scss";
import { appleStoreURL, googleStoreURL } from "../../utils/constants";

const DownloadButtons = () => {
	return (
		<div className={classes.downloadBtns}>
			<a href={appleStoreURL} target="_blank" rel="noopener noreferrer">
				<img src={appleStore} alt="app download from apple store" />
			</a>
			<a href={googleStoreURL} target="_blank" rel="noopener noreferrer">
				<img src={googlePlayBadge} alt="app download from google store" />
			</a>
		</div>
	);
};

export default DownloadButtons;
