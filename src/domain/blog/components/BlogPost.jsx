import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Blog.module.scss';

const BlogPost = ({ blogTitle, blogAuthor, blogHashtags, blogImageSrc }) => {
    return (
        <div className={classes.blogPost}>
            <div className={classes.blogImage}>
                <img src={blogImageSrc} />
            </div>
            <div className={classes.blogPostText}>
                <div className={classes.blogHashtags}>
                    {blogHashtags && blogHashtags.map((tag, index) => (
                        <a key={index} href="#">#{tag}</a>
                    ))}
                </div>
                <div className={classes.blogTitle}>
                    {blogTitle}
                </div>
                <div className={classes.blogAuthor}>
                    {blogAuthor}
                </div>
            </div>
        </div>
    );
}

BlogPost.propTypes = {
    blogTitle: PropTypes.string.isRequired,
    blogAuthor: PropTypes.string.isRequired,
    blogHashtags: PropTypes.array,
    blogImageSrc: PropTypes.string.isRequired
};

export default BlogPost;