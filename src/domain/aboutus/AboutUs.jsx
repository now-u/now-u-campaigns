import React from 'react';
import classes from './AboutUs.module.scss';
import { HeadingSection, WhySection } from './components';

const AboutUs = () => {
    return (
        <div className={classes.aboutUsContainer}>
            <HeadingSection />
            <WhySection />
        </div>
    );
}

export default AboutUs;
