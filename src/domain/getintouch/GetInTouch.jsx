import React from 'react';
import classes from './GetInTouch.module.scss';
import { Text } from '../../components';
import { roadSignBlue } from '../../assets';

const GetInTouch = () => {
    return (
        <div className={classes.getInTouchContainer}>
            <div className={classes.header}>
                <Text type="h2" className={classes.headerText}>Get In Touch</Text>
            </div>
            <div className={classes.content}>
                <div className={classes.imageSection}>
                    <img src={roadSignBlue} alt="Road Sign" className={classes.roadSignImage} />
                </div>
                <div className={classes.textSection}>
                    <Text type="h2" className={classes.heading}>Get in Touch</Text>
                    <Text type="p" className={classes.paragraphText}>
                        To propose a partnership or get in touch send us an email at <a href="mailto:hello@now-u.com">hello@now-u.com</a>
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
