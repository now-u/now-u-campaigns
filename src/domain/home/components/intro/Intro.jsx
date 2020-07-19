import React from 'react';
import { Text, Button, DownloadButtons, NewsletterSignup } from '../../../../components';
import classes from './Intro.module.scss';
import { worldIllustration } from '../../../../assets';
import { ModalService } from '../../../../services';

const Intro = () => {
  const openModal = () => {
    ModalService.open(NewsletterSignup, {}, {color: 'dark'});
  }

  return (
    <div id="home" className={classes.introContainer}>
      <div className={classes.introContent}>
        <div className={classes.introMesg}>
          <div onClick={openModal}>Pop modal</div>
          <Text type="h1">It&apos;s time to <br/>change together</Text>
          <Text type="h3">
            Download the app to discover simple, meaningful and effective ways to support
            causes that you care about.
          </Text>
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
