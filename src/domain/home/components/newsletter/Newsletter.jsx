import React from "react";
import classes from "./Newsletter.module.scss";
import PropTypes from "prop-types";

const Newsletter = ({ children }) => {
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
