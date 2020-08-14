import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from '../../../../components';
import classes from './Partners.module.scss';
import { useHistory } from 'react-router-dom';
// import CampaignCard from './campaign_card/CampaignCard';

// const Partners = ({ campaigns }) => {
const Partners = () => {
    const history = useHistory();

    return (
        <section className={classes.partnersContainer}>
            <div className={classes.content}>
                <div className={classes.textSection}>
                    <Text type='h2' className={classes.header}>
                        Active campaigns
                    </Text>
                    <Text type='p' className={classes.description}>
                        Our monthly campaigns tackle different issues in
                        partnership with trusted institutions
                    </Text>
                </div>
                <div className={classes.campaignSection}>
                    {
                        //     campaigns ? (
                        //     campaigns.map(({ id, title, header_image }) => {
                        //         return (
                        //             // <CampaignCard
                        //             //     key={id}
                        //             //     id={id}
                        //             //     title={title}
                        //             //     header_image={header_image}
                        //             // />
                        //         );
                        //     })
                        // ) : (
                        //     <div className={classes.textSection}>
                        //         <Text type='h3' className={classes.noCampaigns}>
                        //             Check back to see campaigns you can support on
                        //             the app!
                        //         </Text>
                        //     </div>
                        // )
                    }
                </div>
                <Button
                    variant='secondary'
                    onClick={() => history.push('/campaigns')}
                >
                    See all campaigns
                </Button>
            </div>
        </section>
    );
};

Partners.propTypes = {
    campaigns: PropTypes.array || null,
};

export default Partners;
