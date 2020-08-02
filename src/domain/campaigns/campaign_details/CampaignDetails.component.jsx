import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { Text, AppDownloadButtons } from '../../../components';
import classes from './CampaignDetails.module.scss';
import GetInvolvedIcon from '../../../assets/action_svg/GetInvolved.svg'
import RaiseMoneyIcon from '../../../assets/action_svg/RaiseMoney.svg'
import AdvocateIcon from '../../../assets/action_svg/Advocate.svg'

const Campaign = ({
  campaign: { header_image, title, video_link, actions, number_of_campaigners, description_web },
}) => {
  const descriptionParagraphs = description_web.split('<br>');
  const GetInvolved = ['volunteer', 'behaviour', 'protest', 'connect']
  const RaiseMoney = ['donate', 'fundraise']
  const Advocate = ['awareness', 'sign', 'contact']
  const action = (title, link, type) => {
    return (
      <a key={title} href={link} target="_blank" rel="noopener noreferrer">
        <div className={classes.actionItem}>
          <div className={classes.actionIconContainer}>
            <img src={type} alt="" className={classes.actionIcon}/>
          </div>
          <Text type="h4" className={classes.actionTitle}>{title}</Text>
        </div>
      </a>
    );
  }
  return (
    <div className={classes.campaignContainer}>
      <div className={classes.header}>
        <div className={classes.headerImage}>
          <img src={header_image} alt="header image" />
          <div className={classes.centeredHeaderText}>
            <Text className={classes.title} type="h1">
              {title}
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.summary}>
        <Link className={classes.navBack} to={'/campaigns'}>
          <i className="material-icons">chevron_left</i>
          <Text type="p">Campaigns</Text>
        </Link>
        
        {number_of_campaigners > 1 && (
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
          </div>
          </div>
        )}
      </div>
      <div className={classes.contentGroup}>
        <div className={classes.videoWrapper}>  
          <ReactPlayer className={classes.video} url={video_link} width="100%" height="45vh" />
        </div>
        {descriptionParagraphs.map((p) => (
          <Text type="p" key={p}>
            {p}
          </Text>
        ))}
      </div>
      <div className={classes.actionContainer}>

      <div className={classes.actionContent}>
        <Text className={classes.subtitle} type="h2">
          Take action now!
        </Text>
        <Text type="p" className={classes.caption}>
          Complete weekly actions on our app to help us tackle this challenge. Here are some examples of how you can
          help today.
        </Text>
        {actions.map(({ title, link , type}) => {
          if (GetInvolved.includes(type)) { 
            return (action(title, link, GetInvolvedIcon))
          } else if (RaiseMoney.includes(type)) {
            return (action(title, link, RaiseMoneyIcon))
          } else if (Advocate.includes(type)) {
            return (action(title, link, AdvocateIcon))
          }
        })}
        <div className={classes.actionFooter}>
          <Text type="p">
            Find out what other actions you can take to support this campaign in our app!
          </Text>
          <AppDownloadButtons />
        </div>
      </div>
    </div>
    </div>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default Campaign;
