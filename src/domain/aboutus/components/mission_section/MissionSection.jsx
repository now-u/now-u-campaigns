import React from 'react';
import classes from './MissionSection.module.scss';
import { Text } from '../../../../components';
import { ourMission } from '../../../../assets';

const MissionSection = () => {
    return (
        <div className={classes.missionSection}>
            <div className={classes.imageSection}>
                <img src={ourMission} alt="Road Sign" />
            </div>
            <div className={classes.textSection}>
                <div className={classes.header}>
                    <Text type="h2" className={classes.missionHeader}>
                        Our mission
                    </Text>
                </div>
                <div className={classes.content}>
                    <Text type="p" className={classes.missionText}>
                        Our mission is to connect individuals with tangible and effective actions they can take to help tackle important issues through coordinated collective campaigns. We aspire to become the template for a new model of collective action and altruism, bringing people together to create A World of Good in a way that’s simple, meaningful and leads to lasting and sustainable change.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default MissionSection;
