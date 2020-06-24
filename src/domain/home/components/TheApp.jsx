import React from 'react';
import { Text } from '../../../components';
import { theApp } from '../../../assets';
import classes from '../Homepage.module.scss';

const TheApp = () => {
  return (
    <div id="the_app" className={classes.theAppContainer}>
      <div className={classes.appContentContainer}>
        <div className={classes.appLeft}>
          <img src={theApp} alt="app" />
        </div>
        <div className={classes.appRight}>
          <Text type="h2">now-u app</Text>
          <Text type="p">
            now-u empowers you to tackle global problems with simple action. By signing up to campaigns and completing
            weekly tasks, you can engage in causes you care about and link up with other opportunities relevant to you.
          </Text>
          <Text type="p">With now-u, doing good is easy, enjoyable and makes a real difference.</Text>
        </div>
      </div>
    </div>
  );
};

export default TheApp;
