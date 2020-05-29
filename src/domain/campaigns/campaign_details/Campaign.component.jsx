import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { AppDownload, Text } from '../../../components';
import classes from './Campaign.module.scss';

const Campaign = ({
  campaign: { header_image, title, video_link, actions, number_of_campaigners, description_web },
}) => {
  return (
    <div className={classes.campaignContainer}>
      <div className={classes.header}>
        <img src={header_image} alt="header image" />
        <Link className={classes.navBack} to={'/campaigns'}>
          <i className="material-icons">chevron_left</i>
          Campaigns
        </Link>
      </div>
      <div className={classes.summary}>
        <Text className={classes.title} type="h2">
          {title}
        </Text>
        <div className={classes.meta}>
          <div className={classes.participants}>
            <Text type="h4">
              <i className="material-icons">group</i>
              &nbsp;{number_of_campaigners} people have joined
            </Text>
            <Text type="h4">You can too, on our app</Text>
          </div>
          <div className={classes.participants}>
            <Text type="h4">This campaign is initiated by:</Text>
            <Text type="h4">Let&apos;s Do It Foundation</Text>

            {/* <img src={header_image} alt="organization thumbnail" /> */}
          </div>
        </div>
      </div>
      <div className={classes.contentGroup}>
        <Text className={classes.subtitle} type="h2">
          What is it about?
        </Text>
        <Text type="p" className={classes.caption}>
          This is a caption that concludes the key message of the video
        </Text>
        <ReactPlayer className={classes.video} url={video_link} width="100%" height="45vh" />
        <Text type="p">{description_web}</Text>
      </div>
      <div className={classes.actionContainer}>
        <Text className={classes.subtitle} type="h2">
          What are the actions for this week?
        </Text>
        <Text type="p" className={classes.caption}>
          Complete weekly actions on our app to help us tackle this challenge. Here are some examples of how you can
          help today.
        </Text>
        {actions.map(({ title }) => {
          return (
            <div key={title} className={classes.actionItem}>
              <div className={classes.divider} />
              <i className="material-icons">assignment_turned_in</i>
              <Text type="h4">{title}</Text>
            </div>
          );
        })}
      </div>
      <AppDownload />
    </div>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.any.isRequired,
};

export default Campaign;
