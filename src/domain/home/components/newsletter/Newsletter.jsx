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
    setFormText('');
    setIsValid(false);
  };

  return (
    <section className={classes.newsletterContainer}>
      <form
        htmlFor="newsletter"
        className={classes.formSection}
        action="https://now-u.us4.list-manage.com/subscribe/post-json?u=0500f7cdb93e0595e0c9af4d5&amp;id=b604a851dc&c="
        method="POST"
        encType="application/x-www-form-urlencoded"
        name="newsletterForm"
        autoComplete="off"
        rel="noopener noreferrer"
        onSubmit={handleSubmit}
      >
        <Text type="h2" className={classes.header}>
          Now-u newsletter
        </Text>
        <Text type="p" className={classes.description}>
          Subscribe to stay up to date with:
        </Text>
        <ul>
          <li>
            <span className={classes.checkmark}></span>
            <Text type="p" className={classes.listBenefits}>
              Campaign & partnership announcements
            </Text>
          </li>
          <li>
            <span className={classes.checkmark}></span>
            <Text type="p" className={classes.listBenefits}>
              Informative blog posts and community updates
            </Text>
          </li>
          <li>
            <span className={classes.checkmark}></span>
            <Text type="p" className={classes.listBenefits}>
              New app features, actions, and special offers from our partners
            </Text>
          </li>
        </ul>
        <div className={classes.formInputs}>
          <input
            type="text"
            name="email"
            placeholder="Enter e-mail"
            onChange={(event) => handleChange(event)}
            value={formText}
            required
          />
          <Button
            className={classes.submitButton}
            type="submit"
            variant="primary"
            disabled={!isValid}
          >
            Subscribe
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
