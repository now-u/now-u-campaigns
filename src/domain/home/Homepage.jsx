import React, { useState, useEffect } from 'react';
import { Text, Button, CampaignsGroup } from '../../components';
import { Intro, OurStory } from './components/index';
import theApp from '../../assets/images/main/the_app.png';
import classes from './Homepage.module.scss';

const Homepage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch('https://now-u-api.herokuapp.com/api/v1/campaigns');
      const campaigns = await resp.json();
      setCampaigns(campaigns?.data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className={classes.homepageContainer}>
      <Intro />
      <OurStory />
      <div id="campaigns" className={classes.liveCampaignsContainer}>
        <CampaignsGroup title="Coming soon: Live Campaigns" campaigns={campaigns} />
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
