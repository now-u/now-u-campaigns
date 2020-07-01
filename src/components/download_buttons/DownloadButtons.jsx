import React from 'react';
import { googlePlayBadge, appleStore } from '../../assets';
import classes from './DownloadButtons.module.scss';

const DownloadButtons = () => {
  return (
    <div className={classes.downloadBtns}>
      <a href="https://apps.apple.com/us/app/now-u/id1516126639" target="_blank" rel="noopener noreferrer">
        <img src={appleStore} alt="app download from apple store" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.nowu.app" target="_blank" rel="noopener noreferrer">
        <img src={googlePlayBadge} alt="app download from google store" />
      </a>
    </div>
  );
};

export default DownloadButtons;
