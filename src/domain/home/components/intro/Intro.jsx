import React from 'react';
import { Text, Button, DownloadButtons } from '../../../../components';
import classes from './Intro.module.scss';
import { worldIllustration } from '../../../../assets';

const Intro = () => {
  return (
    <div id="home" className={classes.introContainer}>
      <div className={classes.introContent}>
        <div className={classes.introMesg}>
          <Text type="h1">It&apos;s time to change together</Text>
          <Text type="h3">We help you help others: choose a cause to fight for and take action today!</Text>
          <Button variant="secondary" className={classes.watchVideoBtn}>
            <a href="https://www.youtube.com/watch?v=h5vnFpWCOhQ" target="_blank" rel="noopener noreferrer">
              <i className="material-icons">play_arrow</i>
              Watch our video
            </a>
          </Button>
          <DownloadButtons />
        </div>
        <div className={classes.introImg}>
          <img src={worldIllustration} alt="choose direction" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
