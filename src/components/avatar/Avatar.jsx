import React from "react";
import PropTypes from "prop-types";
import classes from "./Avatar.module.scss";


const Avatar = ({ src }) => {

	return (
		<div className={classes.avatarContainer}>
			{
				src ?
					<img src={src} alt="Avatar" />
					:
					<i className="material-icons">account_circle</i>
			}
		</div>
	);
};


Avatar.propTypes = {
	src: PropTypes.string
};


export default Avatar;
