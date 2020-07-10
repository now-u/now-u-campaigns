import React from 'react';
import classes from './HeadingSection.module.scss';
import { Text } from '../../../../components';
import { aboutUs } from '../../../../assets';

const HeadingSection = () => {
    return (
      <div className={classes.aboutUsSection}>
        <div className={classes.content}>
            <div className={classes.pageHeader}>
                <Text type="h2" className={classes.header}>About us</Text>
            </div>
            <div className={classes.pageHeaderText}>
                <Text type="p">
                now-u is a new non-profit app that launched in July 2020 with a mission to inform, involve and inspire people to help tackle some of the world’s most pressing environmental and social problems.
                <br/><br/>
                The global lockdown has offered us an opportunity to take stock of what’s really important to us, and a chance to move forward together instead of falling ‘back to normal’. We believe that each of us has the power to create lasting and sustainable change, together. <b>now u!</b>
                </Text>
            </div>
        </div>
        <div className={classes.image}>
            <img src={aboutUs} alt="About Us" />
        </div>
    </div>
    );
}

export default HeadingSection;
