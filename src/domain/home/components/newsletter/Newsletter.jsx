import React, { useState } from 'react';
import { Text, Button } from '../../../../components';
import classes from './Newsletter.module.scss';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const Newsletter = () => {
    const [formText, setFormText] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        setFormText(event.target.value.trim());
        setIsValid(emailRegex.test(formText));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(formText);
    };

    return (
        <section className={classes.newsletterContainer}>
            <form
                htmlFor='newsletter'
                className={classes.formSection}
                action='#'
                // method='post'
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
                        <Text type='p' className={classes.listBenefits}>
                            Campaign & partnership announcements
                        </Text>
                    </li>
                    <li>
                        <span className={classes.checkmark}></span>
                        <Text type='p' className={classes.listBenefits}>
                            Informative blog posts and community updates
                        </Text>
                    </li>
                    <li>
                        <span className={classes.checkmark}></span>
                        <Text type='p' className={classes.listBenefits}>
                            New app features, actions, and special offers from
                            our partners
                        </Text>
                    </li>
                </ul>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Enter e-mail'
                        onChange={(event) => handleChange(event)}
                        value={formText}
                    />
                    <Button
                        className={
                            isValid
                                ? `${classes.submitButton}`
                                : `${classes.submitButton} ${classes.disabled}`
                        }
                        type='submit'
                        variant='primary'
                        onClick={(event) => handleSubmit(event)}
                    >
                        Subscribe
                    </Button>
                </fieldset>
            </form>
        </section>
    );
};

export default Newsletter;
