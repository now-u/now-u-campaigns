import React, {useState} from 'react';
import { Text } from '../../components';
import classes from './NewsletterSignupModal.module.scss';
import classNames from 'classnames';
import Button from "../button/Button";

const NewsletterSignupModal = () => {
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    hasSubmitted: false,
  });

  const formResponseIframeRef = React.createRef();

  const formSubmitted = () => {
    setFormStatus({
      isSubmitting: true,
      hasSubmitted: false,
    });
  }

  /**
   * The content of the iframe can't be accessed due to cross-origin policy so we can only assume the
   * subscription was successful for the moment and act on that assumption.
   *
   * If the content of the iframe is attempted to be accessed then a DOMException is thrown. This behaviour
   * is used to be able to determine whether a response has returned from the form.
   *
   * TODO: Use API endpoint with fetch() to sign-up users to mailchimp once it is implemented
   */
  const responseContentLoaded = () => {
    try {
      // If it doesn't throw a DOMException due to cross-origin policy then the form wasn't submitted
      // and this was the initial rendering of the iframe on page load
      if (formResponseIframeRef.current.contentWindow.location.href) {
        return;
      }
    } catch(e) {
      if (!(e instanceof DOMException)) {
        throw e;
      }
    }

    localStorage.setItem('newsletter-signup-completed', 'true');

    setFormStatus({
      isSubmitting: false,
      hasSubmitted: true,
    });
  }

  const { isSubmitting, hasSubmitted } = formStatus;

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

      {
        !hasSubmitted ?
        (
          <form
            action="https://now-u.us4.list-manage.com/subscribe/post-json?u=0500f7cdb93e0595e0c9af4d5&amp;id=b604a851dc&c="
            method="POST"
            encType="application/x-www-form-urlencoded"
            autoComplete="off"
            target="form_submit_response_iframe"
            rel="noopener noreferrer"
            onSubmit={formSubmitted}
          >
            <div className={classes.formInputs}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className={classes.formInput}
                  disabled={isSubmitting}
                  type="text"
                  name="NAME"
                  id="name"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className={classes.formInput}
                  disabled={isSubmitting}
                  type="email"
                  name="EMAIL"
                  id="email"
                  placeholder="e.g. JohnDoe@email.com"
                  required
                />
              </div>
            </div>

            <Button
              className={classes.submitButton}
              disabled={isSubmitting}
              type="submit"
              variant="primary"
            >
              Subscribe
            </Button>
          </form>
        ) :
        (
          'Success'
        )
      }

      <iframe
        className={classes.hidden}
        name="form_submit_response_iframe"
        onLoad={responseContentLoaded}
        ref={formResponseIframeRef}
      />
    </div>
    );
};

export default NewsletterSignupModal;
