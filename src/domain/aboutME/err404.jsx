import React from 'react';
import classes from './err404.module.scss';
import { Text } from '../../components';
import { err404 } from '../../assets';

const error404 = () => {
    return (
    <div className={classes.aboutUsSection}>
        <div className={classes.content}>
            <div className={classes.pageHeader}>
                <Text type="h1" className={classes.header}>Oh Dear...</Text>
            </div>
            <div className={classes.pageHeaderText}>
                <Text type="p">
                Looks like something’s wrong…
                </Text>
            </div>
        </div>
        <div className={classes.image}>
            <img src={err404} alt="Error 404" />
        </div>
    </div>
    );
}

export default error404;
