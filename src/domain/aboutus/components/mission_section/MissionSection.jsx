import React from 'react';
import classes from './MissionSection.module.scss';
import { Text } from '../../../../components';
import { roadSign } from '../../../../assets';

const MissionSection = () => {
    return (
        <div className={classes.missionSection}>
            <div className={classes.imageSection}>
                <img src={roadSign} alt="Road Sign" />
            </div>
            <div className={classes.textSection}>
                <div className={classes.header}>
                    <Text type="h2" className={classes.missionHeader}>
                        Our mission
                    </Text>
                </div>
                <div className={classes.content}>
                    <Text type="p" className={classes.missionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida
                        <br/><br/>
                        tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default MissionSection;
