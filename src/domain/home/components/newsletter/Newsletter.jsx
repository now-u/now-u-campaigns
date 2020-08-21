import React from 'react';
// import { Text, Button } from '../../../../components';
import classes from './Newsletter.module.scss';
// import modalClasses from '../../../../components/newsletter-signup-modal/NewsletterSignupModal.module.scss';
import PropTypes from 'prop-types';

// const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const Newsletter = ({ children }) => {
    /* eslint-disable no-console */
    // console.log(children);
    /* eslint-enable no-console */

    return (
        <section className={classes.newsletterContainer}>
            <div className={classes.formSection}>{children}</div>
        </section>
    );
};

Newsletter.propTypes = {
    children: PropTypes.object,
};

export default Newsletter;
