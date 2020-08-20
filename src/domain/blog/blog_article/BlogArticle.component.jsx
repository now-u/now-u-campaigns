import React from 'react';
import PropTypes from 'prop-types';
import classes from './BlogArticle.module.scss';
import { Text, Button, AppDownloadRectangle, Avatar } from '../../../components';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Blog = ({ blog, sections }) => {
    const { title, subtitle, tags, campaign_id, user, reading_time } = blog;
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
                    {tags.sort((a, b) => a.appearance_order - b.appearance_order)
                            .map(tag =>
                                <Text type="p" key={tag.id}>#{tag.tag}</Text>
                                )
                    }
                </div>
                <div className={classes.blogTitle}>
                    <Text type="h2">{title}</Text>
                </div>
                {reading_time &&
                    <div className={classes.readingTime}>
                        <i className="material-icons">schedule</i>
                        {reading_time} min
                    </div>
                }
                {subtitle &&
                    <div className={classes.blogSubtitle}>
                        <Text type="p">{subtitle}</Text>
                    </div>
                }
                <div className={classes.blogContent}>
                    {sections.map(section => {
                        if(section.section_type === 'image_section') {
                            return (
                                <div className={classes.blogImageSection}>
                                    <img 
                                        key={section.id}
                                        src={section.img_url}
                                        alt="blog image"
                                    />
                                </div>
                            )
                        } else if(section.section_type === 'text_section') {
                            return(
                                <div key={section.id} className={classes.blogTextSection}>
                                    <Text type="p" className={classes.textSectionTitle}>
                                        {section.title}
                                    </Text>
                                    <ReactMarkdown source={section.content} escapeHtml={false}/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={classes.blogButtonBar}>
                    <Button className={classes.btnCampaignPage} to={campaignURL}>
                        Go to this campaign page
                    </Button>
                </div>
                <AppDownloadRectangle />
                {user &&
                    <div className={classes.authorInfo}>
                        <div className={classes.author}>
                            {user.profile_picture_url &&
                                <Avatar src={user.profile_picture_url} />
                            }
                            {user.full_name && 
                                <Text type="h4" className={classes.authorName}>{user.full_name}</Text>
                            }
                        </div>
                        {user.description &&
                            <Text type="p" className={classes.authorDescription}>{user.description}</Text>
                        }
                    </div>
                }
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    sections : PropTypes.array
};


export default Blog;
