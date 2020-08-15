import React from 'react';
import { Text, Button } from '../../../../components';
import classes from './Newsletter.module.scss';

const Newsletter = () => {
    return (
        <section className={classes.newsletterContainer}>
            <form
                htmlFor='newsletter'
                className={classes.formSection}
                action='#'
                method='post'
            >
                <Text type='h2' className={classes.header}>
                    Now-u newsletter
                </Text>
                <Text type='p' className={classes.description}>
                    Subscribe to stay up to date with:
                </Text>
                <ul>
                    <li>
                        <span className={classes.checkmark}></span>
                        <Text type='p' className={classes.list}>
                            Campaign & partnership announcements
                        </Text>
                    </li>
                    <li>
                        <span className={classes.checkmark}></span>
                        <Text type='p' className={classes.list}>
                            Informative blog posts and community updates
                        </Text>
                    </li>
                    <li>
                        <span className={classes.checkmark}></span>
                        <Text type='p' className={classes.list}>
                            New app features, actions, and special offers from
                            our partners
                        </Text>
                    </li>
                </ul>
                <fieldset>
                    <input type='text' placeholder='email' value='' />
                    <Button
                        className={classes.submitButton}
                        type='submit'
                        variant='primary'
                        onClick={() => '#'}
                    >
                        Subscribe
                    </Button>
                </fieldset>
            </form>
        </section>
    );
};

export default Newsletter;
