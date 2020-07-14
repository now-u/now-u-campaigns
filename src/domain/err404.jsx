import React from 'react';
import classes from './err404.module.scss';
import { Text } from '../components';
import { err404 } from '../assets';

const error404 = () => {
    return (
        <div className={classes.box}>
            <img src={err404} alt="Error 404"/>
            <div className={classes.text}>
                <Text type="h1">
                    Oh Dear...
                </Text>
                <Text type="p">
                    Looks like something’s wrong…
                </Text>
            </div>
        </div>

    );
}

export default error404;
