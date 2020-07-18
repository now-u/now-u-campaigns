import React from 'react';
import PropTypes from 'prop-types';
import classes from './BlogArticle.module.scss';
import { Text, Button, AppDownloadRectangle, Avatar } from '../../../components';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { title, subtitle, hashtags, sections, campaign_id, user } = blog;
    const campaignURL = `/campaigns/${campaign_id}`;

    return (
        <div className={classes.blogArticleContainer}>
            <div className={classes.blogBreadcrumb}>
                <Link to={'/blog'}>
                    <Text type="h4">
                        <i className="material-icons">chevron_left</i>
                        <span>Back to Blog</span>
                    </Text>
                </Link>
            </div>
            <div className={classes.articleBody}>
                <div className={classes.hashtags}>
                    {hashtags.map((tag, i) => 
                        <Text type="p" key={i}>#{tag}</Text>)}
                </div>
                <div className={classes.blogTitle}>
                    <Text type="h2">{title}</Text>
                </div>
                <div className={classes.blogSubtitle}>
                    <Text type="p">{subtitle}</Text>
                </div>
                <div className={classes.blogContent}>
                    {sections.map((section, i) => {
                        if(section.type === 'image_section') {
                            return (
                                <div className={classes.blogImageSection}>
                                    <img 
                                        key={i}
                                        src={section.img_url}
                                        alt="blog image"
                                    />
                                </div>
                            )
                        } else if(section.type === 'text_section') {
                            return(
                                <div key={i} className={classes.blogTextSection}>
                                    <Text type="p" className={classes.textSectionTitle}>
                                        {section.title}
                                    </Text>
                                    <Text type="p" className={classes.textSectionContent}>
                                        {section.content}
                                    </Text>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={classes.blogButtonBar}>
                    <Button className={classes.btnCampaignPage} to={campaignURL}>
                        Go to this campaign page
                    </Button>
                    <Button className={classes.btnShare}>
                        Share
                    </Button>
                </div>
                <AppDownloadRectangle />
                <div className={classes.authorInfo}>
                    <Avatar src={user.profile_image} />
                </div>
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
};


export default Blog;
