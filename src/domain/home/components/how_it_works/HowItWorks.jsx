import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Text, DownloadButtons } from '../../../../components';
import { ourStory, step1, step2, step3 } from '../../../../assets';
import classes from './HowItWorks.module.scss';

const HomeItWorks = () => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={classes.actionMesgContainer}>
        <Link className={classes.downArrow} scroll={(el) => scrollWithOffset(el, 100)} to="/#our_story">
          <i className="material-icons">expand_more</i>
        </Link>
        <div className={classes.actionMesg}>
          <Text type="h1">Empowering for action</Text>
          <Text type="p">
            We are seeing problems surging everywhere on a global scale, and many well intended people want to help but
            struggle to know how. That&apos;s what we are here for.
          </Text>
        </div>
      </div>
      <div className={classes.processContainer}>
        <Text type="h1">How it works</Text>
        <div className={classes.stepContainer}>
          <div className={classes.stepContent}>
            <div className={classes.stepDetails}>
              <img className={classes.stepBackground} src={step1} alt="step number" />
              <Text type="h3">Pick a cause that resonates with you</Text>
              <Text type="p">
                Our monthly campaigns tackle different issues in partnership with trusted institutions
              </Text>
            </div>
            <div className={classes.stepImg}>
              <img src={ourStory} alt="choose direction" />
            </div>
          </div>
        </div>
        <div className={classes.stepContainer}>
          <div className={classes.stepContent}>
            <div className={classes.stepImg}>
              <img src={ourStory} alt="choose direction" />
            </div>
            <div className={classes.stepDetails}>
              <img className={classes.stepBackground} src={step2} alt="step number" />
              <Text type="h3">Discover meaningful ways to support it</Text>
              <Text type="p">Each campaign will have a set of actions you can take that have a real impact</Text>
            </div>
          </div>
        </div>
        <div className={classes.stepContainer}>
          <div className={classes.stepContent}>
            <div className={classes.stepDetails}>
              <img className={classes.stepBackground} src={step3} alt="step number" />
              <Text type="h3">Pick a cause that resonates with you</Text>
              <Text type="p">
                Our monthly campaigns tackle different issues in partnership with trusted institutions
              </Text>
            </div>
            <div className={classes.stepImg}>
              <img src={ourStory} alt="choose direction" />
            </div>
          </div>
        </div>
        <div className={classes.cta}>
          <Text type="h3">Get started now</Text>
          <DownloadButtons />
        </div>
      </div>
    </>
  );
};

export default HomeItWorks;
