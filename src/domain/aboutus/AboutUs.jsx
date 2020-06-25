import React from 'react';
import classes from './AboutUs.module.scss';
import { HeadingSection, WhySection, WhoSection } from './components';
import MissionSection from './components/mission_section/MissionSection';

const AboutUs = () => {
    return (
        <div className={classes.aboutUsContainer}>
            <HeadingSection />
            <WhySection />
            <WhoSection />
            <MissionSection />
        </div>
    );
}

export default AboutUs;
