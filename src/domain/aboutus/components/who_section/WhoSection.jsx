import React from 'react';
import classes from './WhoSection.module.scss';
import { Text, Button } from '../../../../components';
import { teamCollage } from '../../../../assets';

const WhoSection = () => {
    return (
        <div className={classes.whoSection}>
            <div className={classes.textSection}>
                <div className={classes.header}>
                    <Text type="h2" className={classes.headerText}>
                        Who is making it happen
                    </Text>
                </div>
                <div className={classes.content}>
                    <Text type="p" className={classes.contentText}>
                        Lorem ipsum dolor sit amet, Lizzie and James Elgar  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </div>
            </div>
            <div className={classes.imageSection}>
                <div className={classes.collage}>
                    <img src={teamCollage} alt="Team Collage" />
                </div>
                <div className={classes.buttonSection}>
                    <Button 
                        variant="secondary"
                        className={classes.meetTeamBtn}
                        onClick={()=> window.open("https://www.linkedin.com/company/now-u/people/", "_blank")}
                    >
                        Meet the team
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WhoSection;
