import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../../components";
import classes from "./PartnerCard.module.scss";

const PartnerCard = ({ id, name, logo_link, website }) => {
	return (
		<a key={id} target="_blank" href={website} rel="noopener noreferrer">
			<figure className={classes.partnerCard}>
				<div className={classes.imageSection}>
					<img src={logo_link} alt="one of our beloved partners" />
				</div>
				<figcaption className={classes.textSection}>
					<Text type="p" className={classes.partnerName}>
						{name}
					</Text>
				</figcaption>
			</figure>
		</a>
	);
};

PartnerCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number,
	logo_link: PropTypes.string,
	website: PropTypes.string,
};

export default PartnerCard;
