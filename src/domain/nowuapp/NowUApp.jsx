/* eslint-disable no-unused-vars */
import React from "react";
import classes from "./NowUApp.module.scss";
import { Text, DownloadButtons } from "../../components";
// eslint-disable-next-line no-unused-vars
import { app, appStep1, appStep2, appStep3, appStep4, step1, step2, step3, step4 } from "../../assets";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className={classes.nowUAppContainer}>
      <Helmet>
        <title>now-u | Now-u app</title>
      </Helmet>
      <div className={classes.header}>
        <div className={classes.heading}>
          <Text type="h2" className={classes.headingText}>APP</Text>
        </div>
        <div className={classes.content}>
          <div className={classes.imageSection}>
            <img src={app} alt="Now-u app" className={classes.image} />
          </div>
          <div className={classes.textSection}>
            <div className={classes.contentHeader}>
              <Text type="h2" className={classes.contentHeaderText}>How we help</Text>
            </div>
            <div className={classes.contentText}>
              <Text type="p" className={classes.contentTextParagraph}>
                                Now-u will provide a set of meaningful actions on a monthly basis 
                                for each campaign you choose to support.
              </Text>
            </div>
            <div className={classes.appLinks}>
              <Text type="p" className={classes.downloadButtonsText}>
                                Get Started Now
              </Text>
              <DownloadButtons />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stepContainer}>
        <div className={classes.step1Background}>
          <div className={classes.content}>
            <div className={classes.textSection}>
              <img src={step1} alt="Step 1" className={classes.stepBackground} />
              <div className={classes.contentHeader}>
                <Text type="h2" className={classes.stepHeaderText}>Selecting campaigns <br/>to join</Text>
              </div>
              <div className={classes.contentText}>
                <Text type="p" className={classes.contentTextParagraph}>
                                    Our monthly campaigns tackle different issues in partnership with trusted institutions
                  <br/><br/>
                                    You can join as many or as few campaigns as you like !
                </Text>
              </div>
            </div>
            <div className={classes.imageSection}>
              <img src={appStep1} alt="Step 1" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stepContainer}>
        <div className={classes.content}>
          <div className={classes.imageSection}>
            <img src={appStep2} alt="Step2" />
          </div>
          <div className={classes.textSection}>
            <img src={step2} alt="Step 2" className={classes.stepBackground} />
            <div className={classes.contentHeader}>
              <Text type="h2" className={classes.stepHeaderText}>Easy to start your action</Text>
            </div>
            <div className={classes.contentText}>
              <Text type="p" className={classes.contentTextParagraph}>
                                Various actions people can take to make a difference for each campaign
                <br/>
                                You can filter actions according to campaign, action type and estimated 
                                completion time in order to find actions you are most willing to do at that time.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stepContainer}>
        <div className={classes.step3Background}>
          <div className={classes.content}>
            <div className={classes.textSection}>
              <img src={step3} alt="Step 3" className={classes.stepBackground} />
              <div className={classes.contentHeader}>
                <Text type="h2" className={classes.stepHeaderText}>News feed</Text>
              </div>
              <div className={classes.contentText}>
                <Text type="p" className={classes.contentTextParagraph}>
                                    The news feed will include stories and articles relating to one of the three campaigns, or to other charitable causes
                  <br/><br/>
                                    We will focus on positive and inspiring news, such as the progress of charitable work and personal success stories
                </Text>
              </div>
            </div>
            <div className={classes.imageSection}>
              <img src={appStep3} alt="Step 3" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stepContainer}>
        <div className={classes.content}>
          <div className={classes.imageSection}>
            <img src={appStep4} alt="Step4" />
          </div>
          <div className={classes.textSection}>
            <img src={step4} alt="Step 4" className={classes.stepBackground} />
            <div className={classes.contentHeader}>
              <Text type="h2" className={classes.stepHeaderText}>Information about our partners</Text>
            </div>
            <div className={classes.contentText}>
              <Text type="p" className={classes.contentTextParagraph}>
                                We will display the logos of our partners on the relevant campaign page, as well as on a separate partnerships page
                <br/><br/>
                                We will include a brief description of the organisation and their work, as well as links to their website and key resources
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
