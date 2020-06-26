import React from 'react';
import classes from './WhySection.module.scss';
import { Text } from '../../../../components';
import { roadSignBlue } from '../../../../assets';

const WhySection = () => {
    return (
        <div className={classes.whySection}>
            <div className={classes.image}>
                <img src={roadSignBlue} alt="Road Sign" />
            </div>
            <div className={classes.content}>
                <div className={classes.header}>
                    <Text type="h3" className={classes.headerText}>
                        Why we started now-u
                    </Text>
                </div>
                <div className={classes.section}>
                    <Text type="p" className={classes.sectionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default WhySection;
