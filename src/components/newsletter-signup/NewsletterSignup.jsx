import React from 'react';
import { Button, Text } from '../../components';
import classes from './NewsletterSignup.module.scss';
import classNames from 'classnames';

const NewsletterSignup = () => {
  return (
    <div className={classes.container}>
      <Text type="h1" className={classes.header}>Now-u newsletter</Text>
      <Text type="h4">Subscribe to stay up to date with:</Text>

      <ul className={classes.list}>
        <li className={classes.listItem}>
          <i className={classNames('small material-icons', classes.listCheckmark)}>check_circle</i>
          <Text className={classes.listText} type="p" removeMargin={true}>Campaign & partnership announcements</Text>
        </li>
        <li className={classes.listItem}>
          <i className={classNames('small material-icons', classes.listCheckmark)}>check_circle</i>
          <Text className={classes.listText} type="p" removeMargin={true}>Informative blog posts and community updates</Text>
        </li>
        <li className={classes.listItem}>
          <i className={classNames('small material-icons', classes.listCheckmark)}>check_circle</i>
          <Text className={classes.listText} type="p" removeMargin={true}>
            New app features, actions, and special offers from our partners
          </Text>
        </li>
      </ul>

      <div className={classes.emailForm}>
        <input
          className={classes.emailInput}
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Enter your email address"
          required
        />
        <Button className={classes.submitButton} type="submit" variant="primary">Subscribe</Button>
      </div>
    </div>
    );
};

export default NewsletterSignup;
