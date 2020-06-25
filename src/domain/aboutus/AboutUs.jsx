import React from 'react';
import classes from './AboutUs.module.scss';
import { HeadingSection, WhySection, WhoSection } from './components';

const AboutUs = () => {
    return (
        <div className={classes.aboutUsContainer}>
            <HeadingSection />
            <WhySection />
            <WhoSection />
        </div>
    );
}

export default AboutUs;
