import React from 'react';
import classes from './HeadingSection.module.scss';
import { Text } from '../../../../components';

const HeadingSection = () => {
    return (
        <section className={classes.aboutUsSection}>
            <div className={classes.content}>
                <Text type='h2' className={classes.header}>
                    What is now-u?
                </Text>
                <Text type='p' className={classes.description}>
                    We are a new non-profit app that launched in July 2020 with
                    a mission to inform, involve and inspire people to help
                    tackle some of the world&apos;s most pressing environmental
                    and social problems.
                </Text>
            </div>
        </section>
    );
};

export default HeadingSection;
