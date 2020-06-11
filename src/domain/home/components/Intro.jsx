import React, { useState, useEffect } from 'react';
import { Text } from '../../../components';
import scroll from '../../../assets/images/header/icons/scroll.png';
import classes from '../Homepage.module.scss';
import { Link } from "react-scroll";

const Intro = () => {
  const [state, setState] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date('July 1, 2020 00:00:00').getTime();
    const setCountDown = setInterval(() => {
      const now = new Date().getTime();

      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setState({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(setCountDown);
  }, []);

  return (
    <div id="home" className={classes.welcomeScreenContainer}>
      <Text type="h3" className={classes.appLaunch}>
        App launch in
      </Text>
      <div className={classes.timerContainer}>
        <div className={classes.timeWrapper}>
          <Text type="h2">{state.days}</Text>
          <Text type="p">Days</Text>
        </div>
        <div className={classes.timeWrapper}>
          <Text type="h2">{state.hours}</Text>
          <Text type="p">Hours</Text>
        </div>
        <div className={classes.timeWrapper}>
          <Text type="h2">{state.minutes}</Text>
          <Text type="p">Minutes</Text>
        </div>
        <div className={classes.timeWrapper}>
          <Text type="h2">{state.seconds}</Text>
          <Text type="p">Seconds</Text>
        </div>
      </div>
      <div className={classes.headerTextContainer}>
        <Text type="h1">It’s time to change together&#46;</Text>
        <Text type="h3">Find out how you can get involved</Text>
        <Text type="p">
          Get ready 
          <Link to="our_story" smooth={true} duration={500} offset={-100} >
            <img className={classes.downArrow} src={scroll} alt="image" />
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default Intro;
