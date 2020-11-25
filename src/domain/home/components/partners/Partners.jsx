import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components';
import classes from './Partners.module.scss';
import PartnerCard from './partner_card/PartnerCard';
import { partnershipGuideURL } from '../../../../utils/constants';

const Partners = ({ partners }) => {
    return (
        <section id='partners' className={classes.partnersContainer}>
            <article className={classes.textSection}>
                <Text type='h1' className={classes.header}>
                    Our Partners
                </Text>
                <Text type='p' className={classes.description}>
                    We work with many amazing charities and social enterprises.
                    Want to find out more about partnering with now-u? Download
                    our{' '}
                    <a
                        href={partnershipGuideURL}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        partnership guide.
                    </a>
                </Text>
            </article>
            <div className={classes.cardSection}>
                {partners ? (
                    partners.map(({ name, id, logo_link, website }) => {
                        return (
                            <PartnerCard
                                key={id}
                                name={name}
                                id={id}
                                logo_link={logo_link}
                                website={website}
                            />
                        );
                    })
                ) : (
                    <div>
                        <Text type='p' className={classes.loadingMsg}>
                            Loading...
                        </Text>
                    </div>
                )}
            </div>
        </section>
    );
};

Partners.propTypes = {
    partners: PropTypes.array || null,
};

export default Partners;
