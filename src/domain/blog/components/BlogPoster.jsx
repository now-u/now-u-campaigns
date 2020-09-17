import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Blog.module.scss';
import { defaultBlogImg } from '../../../assets';
import { Text } from '../../../components';
import { Link } from 'react-router-dom';

const BlogPoster = ({ blog, highlighted }) => {
    const blogHeaderImage = blog.header_image ? blog.header_image : defaultBlogImg;
    const blogHashtags = blog.tags;

    return (
        <Link to={`/blog/${blog.id}`} className={classes.blogPost}>
            <div className={classes.blogImage}>
                <img src={blogHeaderImage} />
                {highlighted &&
                    <div><Text type="p">{blog.title}</Text></div>
                }
            </div>
            <div className={classes.blogPostText}>
                <div className={classes.blogHashtags}>
                    {blogHashtags.map(tag => (
                        <span key={`${blog.id}-${tag.id}`} href="#">#{tag.tag}</span>
                    ))}
                </div>
                <div>
                    <Text type="p" className={classes.blogTitle}>
                        {highlighted ?
                            blog.subtitle
                            :
                            blog.title
                        }
                    </Text>
                </div>
                <div className={classes.blogAuthor}>
                    <Text type="p">{blog?.user?.full_name ? blog.user.full_name : ''}</Text>
                    <Text type="p" className={classes.readingTime}>
                        <i className="material-icons">schedule</i>
                        {blog.reading_time} min
                    </Text>
                </div>
            </div>
        </Link>
    );
}

BlogPoster.propTypes = {
    blog: PropTypes.object.isRequired,
    highlighted: PropTypes.bool
};

export default BlogPoster;