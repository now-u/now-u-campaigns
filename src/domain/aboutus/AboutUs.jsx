import React from 'react';
import classes from './AboutUs.module.scss';
import { HeadingSection } from './components';

const AboutUs = () => {
    return (
        <div className={classes.aboutUsContainer}>
            <HeadingSection />
        </div>
    );
}

export default AboutUs;
