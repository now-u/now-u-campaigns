import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text, Button } from '../../../../components';
import classes from './ActiveCampaigns.module.scss';
import { useHistory } from 'react-router-dom';
import CampaignCard from './campaign_card/CampaignCard';

const ActiveCampaign = ({ campaigns }) => {
    const history = useHistory();

    return (
        <section className={classes.campaignContainer}>
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
                    {campaigns ? (
                        campaigns.map(({ id, title, header_image }) => {
                            return (
                                <CampaignCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    header_image={header_image}
                                />
                            );
                        })
                    ) : (
                        <div className={classes.textSection}>
                            <Text type='h3' className={classes.noCampaigns}>
                                Check back to see campaigns you can support on
                                the app!
                            </Text>
                        </div>
                    )}
                </div>
                <Button
                    variant='secondary'
                    onClick={() => history.push('/campaigns')}
                >
                    See all campaigns
                </Button>
            </div>
        </section>
        // <Link key={id} to={`/campaigns/${id}`}>
        //     <figure
        //         key={id}
        //         className={classes.campaignCard}
        //         style={{
        //             backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))`,
        //         }}
        //     >
        //         <img
        //             src={`url(${header_image})`}
        //             alt={`dynamic picture of ${title}`}
        //         />
        //         <figcaption
        //             className={classes.campaignTitle}
        //         >
        //             <Text type='h3'>{title}</Text>
        //         </figcaption>
        //     </figure>
        //     {
        //         // <div
        //         //     key={id}
        //         //     className={classes.campaignCard}
        //         //     style={{
        //         //         backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${header_image})`,
        //         //     }}
        //         // >
        //         //     <div className={classes.campaignTitle}>
        //         //         <Text type='h3'>{title}</Text>
        //         //         <i className='material-icons'>
        //         //             chevron_right
        //         //         </i>
        //         //     </div>
        //         // </div>
        //     }
        // </Link>
        //         );
        //     })
        // ) : (
        //     <Text type='h3' className={classes.noCampaigns}>
        //         Check back to see campaigns you can support on the
        //         app!
        //     </Text>
        // )}
        //         </div>
        //         <Button
        //             variant='inverted'
        //             onClick={() => history.push('/campaigns')}
        //         >
        //             See all campaigns
        //         </Button>
        //     </div>
        // </section>
        // <div id="campaigns" className={classes.activeCampaignsContainer}>
        //   <div className={classes.activeCampaignsContent}>
        //     <div className={classes.header}>
        //       <Text type="h1">Active campaigns</Text>
        //       <Text type="p">Our monthly campaigns tackle different issues in partnership with trusted institutions</Text>
        //     </div>
        //     <div className={classes.campaignsRow}>
        //       {campaigns ? (
        //         campaigns.map(({ id, title, header_image }) => {
        //           return (
        //             <Link key={id} to={`/campaigns/${id}`}>
        //               <div
        //                 key={id}
        //                 className={classes.campaign}
        //                 style={{
        //                   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${header_image})`,
        //                 }}
        //               >
        //                 <div className={classes.campaignTitle}>
        //                   <Text type="h3">{title}</Text>
        //                   <i className="material-icons">chevron_right</i>
        //                 </div>
        //               </div>
        //             </Link>
        //           );
        //         })
        //       ) : (
        //         <Text type="h3" className={classes.noCampaigns}>
        //           Check back to see campaigns you can support on the app!
        //         </Text>
        //       )}
        //     </div>
        //     <Button
        //       variant="inverted"
        //       onClick={() => history.push('/campaigns')}
        //     >
        //       See all campaigns
        //     </Button>
        //   </div>
        // </div>
    );
};

ActiveCampaign.propTypes = {
    // title: PropTypes.string.isRequired,
    campaigns: PropTypes.array || null,
};

export default ActiveCampaign;
