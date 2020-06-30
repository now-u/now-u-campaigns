/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './NowUApp.module.scss';
import { Text, DownloadButtons } from '../../components';
// eslint-disable-next-line no-unused-vars
import { app, appStep1, appStep2, appStep3, appStep4, step1 } from '../../assets';

const AboutUs = () => {
    return (
        <div className={classes.nowUAppContainer}>
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
        </div>
    );
}

export default AboutUs;
