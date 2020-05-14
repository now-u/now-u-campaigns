import React from 'react';
import { Text } from '../../components';
import { roadSign } from '../../assets';
import classes from './Homepage.module.scss';

const Homepage = () => {
  return (
    <div className={classes.homepageContainer}>
      <div className={classes.greeting}>
        <Text className={classes.greetingMsg} type="h1">
          It&apos;s time to change together.
        </Text>
      </div>
      <div className={classes.homepageImg}>
        <img src={roadSign} alt="person choosing path" />
      </div>
      <div className={classes.scrollNotice}>
        <Text type="h4">Are you ready?</Text>
      </div>
    </div>
  );
};

export default Homepage;
