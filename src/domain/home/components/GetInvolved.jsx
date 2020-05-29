import React from 'react';
import { Text, Button } from '../../../components';
import classes from '../Homepage.module.scss';

const GetInvolved = () => {
  return (
    <div id="get_involved" className={classes.getInvolvedContainer}>
      <div className={classes.getInvolvedContent}>
        <Text type="h2">Ready to act now?</Text>
        <Text type="p">Sign up to be the first to hear about our app launch.</Text>
        <form
          action="https://now-u.us4.list-manage.com/subscribe/post?u=0500f7cdb93e0595e0c9af4d5&amp;id=b604a851dc"
          method="POST"
          encType="application/x-www-form-urlencoded"
          name="mc-embedded-subscribe-form"
          id="mc-embedded-subscribe-form"
          className="validate"
          autoComplete="off"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.formInputs}>
            <div className={classes.inputWrapper}>
              <label htmlFor="mce-NAME">Name</label>
              <input type="text" name="NAME" id="mce-NAME" placeholder="e.g. John Doe" />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="EMAIL">Email</label>
              <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="e.g. JohnDoe@email.com" required />
            </div>
          </div>
          <Button type="submit" variant="primary">
            Sign me up!
          </Button>
        </form>
        <Text type="p">
          Also, help us out by leaving your feedback{' '}
          <a href="https://forms.gle/c67832H8tFrS9aKD7" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </Text>
      </div>
    </div>
  );
};

export default GetInvolved;
