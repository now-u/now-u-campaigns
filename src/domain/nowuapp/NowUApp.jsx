import React from 'react';
import classes from './NowUApp.module.scss';
import { Text } from '../../components';
// eslint-disable-next-line no-unused-vars
import { app, appStep1, appStep2, appStep3, appStep4 } from '../../assets';

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
                            <Text type="h2" className={classes.contentHeader}>How we help</Text>
                        </div>
                        <div className={classes.contentText}>
                            <Text type="p">
                            Now-u will provide a set of meaningful actions on a monthly basis 
                            for each campaign you choose to support.
                            </Text>
                        </div>
                        <div className={classes.appLinks}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
