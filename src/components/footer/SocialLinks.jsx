import React from "react";
import PropTypes from "prop-types";
import classes from "./Footer.module.scss";


const SocialLinks = () => {
  SocialLinks.propTypes = {className: PropTypes.string};
  return (
    <div className={classes.socialLinks}>
      <a href="https://www.instagram.com/now_u_app/" className="fa fa-instagram fa-2x" target="_blank" rel="noopener noreferrer"/>
      <a href="https://www.facebook.com/nowufb" className="fa fa-facebook fa-2x" target="_blank" rel="noopener noreferrer"/>
      <a href="https://twitter.com/now_u_app" className="fa fa-twitter fa-2x" target="_blank" rel="noopener noreferrer"/>
      <a href="https://www.linkedin.com/company/now-u/?viewAsMember=true" className="fa fa-linkedin fa-2x" target="_blank" rel="noopener noreferrer"/>
    </div>
  );
};

export default SocialLinks;