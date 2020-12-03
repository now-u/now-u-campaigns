import React from "react";
import PropTypes from "prop-types";
import { Text, Button } from "../../components";
import classes from "./CampaignPoster.module.scss";

const CampaignPoster = ({ campaign: { id, title = "Coming soon..", header_image, description_web } }) => {
  const description = description_web.split("<br>")[0];
  return (
    <div key={id} className={classes.campaignPoster}>
      <div className={classes.left}>
        <img src={header_image} alt={"Poster for " + title}/>
      </div>
      <div className={classes.right}>
        <Text type="h4">{title}</Text>
        <Text type="p" className={classes.description}>{description}</Text>
        <Button id={id} className={classes.campaignBtn} variant="primary" to={`/campaigns/${id}`}>
            Learn more
        </Button>
      </div>
    </div>
  );
};

CampaignPoster.propTypes = {
  campaign: PropTypes.any.isRequired,
};

export default CampaignPoster;
