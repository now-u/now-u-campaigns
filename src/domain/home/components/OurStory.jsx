import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Text, Button } from '../../../components';
import ourStory from '../../../assets/images/main/our_story_img.png';
import classes from '../Homepage.module.scss';

const OurStory = () => {
  return (
    <div id="our_story" className={classes.ourStoryContainer}>
      <div className={classes.storyContentContainer}>
        <div className={classes.storyLeft}>
          <Text type="h2">Our Story</Text>
          <Text type="p">
            Founded in a world ruptured by global pandemic, now-u was sparked by the clear realisation that we cannot
            ‘go back to normal’.
          </Text>
          <Text type="p">
            The recent collective effort to protect ourselves and others has revealed a strength and community spirit
            worth capturing. By forcing us to stop and look at the world around us, coronavirus offers us a chance - an
            opportunity we can’t miss - to start shaping a better world and a better future.
          </Text>
          <Link scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/#get_involved">
            <Button variant="primary" to="#get_involved" size="large">
              Ready to act now?
            </Button>
          </Link>
        </div>
        <div className={classes.storyRight}>
          <img src={ourStory} alt="choose direction" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
