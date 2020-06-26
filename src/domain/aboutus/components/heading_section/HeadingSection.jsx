import React from 'react';
import classes from './HeadingSection.module.scss';
import { Text } from '../../../../components';
import { roadSignBlue } from '../../../../assets';

const HeadingSection = () => {
    return (
      <div className={classes.aboutUsSection}>
        <div className={classes.content}>
            <div className={classes.pageHeader}>
                <Text type="h2" className={classes.header}>About us</Text>
            </div>
            <div className={classes.pageHeaderText}>
                <Text type="p">
                We are a non-for-profit organisation composed by over 50 volunteers who want to….blablabla around 5 lines 
                </Text>
            </div>
        </div>
        <div className={classes.image}>
            <img src={roadSignBlue} alt="Road Sign" />
        </div>
    </div>
    );
}

export default HeadingSection;
