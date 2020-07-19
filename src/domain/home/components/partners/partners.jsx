import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text} from '../../../../components';
import classes from './partners.module.scss';
//import { useHistory } from "react-router-dom";

const Partners = ({ partners }) => {

  //const history = useHistory();

  return (
    <div id="partners" className={classes.partnersContainer}>
      <div className={classes.partnersContent}>
        <div className={classes.header}>
          <Text type="h1">Our Partners</Text>
          <Text type="p">We work with many amazing charities and social enterprises. 
          Want to find out more about partnering with now-u? 
          Download our partnership guide.</Text>
          <p>{partners[1]?.name}</p>
        </div>
        {partners ? (
            partners.map(({name, id}) => {
              return (
                <Link key={id} to={`/partners/${id}`}>
                    <div className={classes.partnerName}>
                      <Text type="h3">{name}</Text>
                    </div>
                </Link>
              );
            })
          ) : (
        )}
        {/* <div className={classes.campaignsRow}>
          {partners ? (
            partners.map(({title}) => {
              return (
                <Link key={id} to={`/campaigns/${id}`}>
                  <div
                    key={id}
                    className={classes.partner}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${header_image})`,
                    }}
                  >
                    <div className={classes.partnerTitle}>
                      <Text type="h3">{title}</Text>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
          )}
        </div> */}
        
      </div>
    </div>
  );
};

Partners.propTypes = {
   title: PropTypes.string.isRequired,
   partners: PropTypes.array || null,
};

export default Partners;
