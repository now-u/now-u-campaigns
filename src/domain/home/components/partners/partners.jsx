import React from 'react';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { Text} from '../../../../components';
import classes from './partners.module.scss';
//import { useHistory } from "react-router-dom";

const Partners = ({ partners }) => {

  //const history = useHistory();

  return (
    <div id="partners" className={classes.activeCampaignsContainer}>
      <div className={classes.activeCampaignsContent}>
        <div className={classes.header}>
          <Text type="h1">Our Partners</Text>
          <Text type="p">Want to be a partner?</Text>
          <p>{partners[1]?.name}</p>
        </div>
        {/* <div className={classes.campaignsRow}>
          {campaigns ? (
            campaigns.map(({ id, title, header_image }) => {
              return (
                <Link key={id} to={`/campaigns/${id}`}>
                  <div
                    key={id}
                    className={classes.campaign}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${header_image})`,
                    }}
                  >
                    <div className={classes.campaignTitle}>
                      <Text type="h3">{title}</Text>
                      <i className="material-icons">chevron_right</i>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <Text type="h3" className={classes.noCampaigns}>
              Check back to see campaigns you can support on the app!
            </Text>
          )}
        </div> */}
        
      </div>
    </div>
  );
};

// Partners.propTypes = {
//   title: PropTypes.string.isRequired,
//   campaigns: PropTypes.array || null,
// };

export default Partners;
