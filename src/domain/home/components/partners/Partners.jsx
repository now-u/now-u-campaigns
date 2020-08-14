import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components';
import classes from './Partners.module.scss';
// import { useHistory } from 'react-router-dom';
import PartnerCard from './partner_card/PartnerCard';

const Partners = ({ partners }) => {
    //const history = useHistory();

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
                        href={
                            'https://share.now-u.com/partners/now-u_charity_collaboration_&_partnership_guide.pdf'
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        partnership guide.
                    </a>
                </Text>
            </article>
            <div className={classes.cardSection}>
                {partners ? (
                    partners.map(({ name, id, logo_link }) => {
                        return (
                            <PartnerCard
                                key={id}
                                name={name}
                                id={id}
                                logo_link={logo_link}
                            />
                        );
                    })
                ) : (
                    <div>
                        <Text type='p'>Loading...</Text>
                    </div>
                )}
            </div>
            -{' '}
        </section>
    );
};

Partners.propTypes = {
    // title: PropTypes.string.isRequired,
    partners: PropTypes.array || null,
};

export default Partners;
