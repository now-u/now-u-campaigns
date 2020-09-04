import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "./Text.module.scss";

const Text = ({ type = "h3", className, removeMargin, children }) => {
	const TextComponent = type;

	const textClassNames = classNames(
		classes.text,
		className,
		removeMargin ? classes.noMargin : null
	);

	return <TextComponent className={textClassNames}>{children}</TextComponent>;
};

Text.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	removeMargin: PropTypes.bool,
	children: PropTypes.any,
};

export default Text;
