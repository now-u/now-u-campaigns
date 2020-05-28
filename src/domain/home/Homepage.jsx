import React, { useState, useEffect } from 'react';
import { Text, Button, CampaignsGroup } from '../../components';
import { NavHashLink as Link } from 'react-router-hash-link';
import scroll from '../../assets/images/header/icons/scroll.png';
import ourStory from '../../assets/images/main/our_story_img.png';
import theApp from '../../assets/images/main/the_app.png';
import classes from './Homepage.module.scss';

const Homepage = () => {
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
    <div className={classes.homepageContainer}>
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
            Get ready <img src={scroll} alt="image" />
          </Text>
        </div>
      </div>

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
              worth capturing. By forcing us to stop and look at the world around us, coronavirus offers us a chance -
              an opportunity we can’t miss - to start shaping a better world and a better future.
            </Text>
            <Link scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/#get_involved">
              <Button variant="primary" to="#get_involved">
                Find out more
              </Button>
            </Link>
          </div>
          <div className={classes.storyRight}>
            <img src={ourStory} alt="choose direction" />
          </div>
        </div>
      </div>
      <div id="campaigns" className={classes.liveCampaignsContainer}>
        <CampaignsGroup title="Coming soon: Live Campaigns" />
      </div>
      <div id="the_app" className={classes.theAppContainer}>
        <div className={classes.appContentContainer}>
          <div className={classes.appLeft}>
            <img src={theApp} alt="app" />
          </div>
          <div className={classes.appRight}>
            <Text type="h2">now-u app</Text>
            <Text type="p">
              now-u empowers you to tackle global problems with simple action. By signing up to campaigns and completing
              weekly tasks, you can engage in causes you care about and link up with other opportunities relevant to
              you.
            </Text>
            <Text type="p">With now-u, doing good is easy, enjoyable and makes a real difference.</Text>
          </div>
        </div>
      </div>
      <div id="get_involved" className={classes.getInvolvedContainer}>
        <div className={classes.getInvolvedContent}>
          <Text type="h2">Ready to act now?</Text>
          <Text type="p">Sign up to be the first to hear about our app launch.</Text>
          <form
            action="https://now-u.us4.list-manage.com/subscribe/post?u=0500f7cdb93e0595e0c9af4d5&amp;id=b604a851dc"
            method="POST"
            encType="application/x-www-form-urlencoded"
            name="mc-embedded-subscribe-form"
            id="mc-embedded-subscribe-form"
            className="validate"
            autoComplete="off"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.formInputs}>
              <div className={classes.inputWrapper}>
                <label htmlFor="mce-NAME">Name</label>
                <input type="text" name="NAME" id="mce-NAME" placeholder="e.g. John Doe" />
              </div>
              <div className={classes.inputWrapper}>
                <label htmlFor="EMAIL">Email</label>
                <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="e.g. JohnDoe@email.com" required />
              </div>
            </div>
            <Button type="submit" variant="primary">
              Sign me up!
            </Button>
          </form>
          <Text type="p">
            Also, help us out by leaving your feedback{' '}
            <a href="https://forms.gle/c67832H8tFrS9aKD7" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </Text>
        </div>
      </div>
      <div className={classes.footer}>
        <a
          href="https://www.facebook.com/nowufb"
          className="fa fa-facebook"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a href="https://twitter.com/now_u_app" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
        <a
          href="https://www.instagram.com/now_u_app/"
          className="fa fa-instagram"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href="https://www.linkedin.com/company/now-u/?viewAsMember=true"
          className="fa fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default Homepage;
