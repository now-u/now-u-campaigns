import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Blog.module.scss';
import { defaultBlogImg } from '../../../assets';
import { Text } from '../../../components';

const BlogPoster = ({ blog, highlighted }) => {
    const blogImageSection = blog.sections.find(section => section.type === 'image_section');
    const blogImage = blogImageSection ? blogImageSection["img_url"] : defaultBlogImg;
    const blogHashtags = blog.hashtags;

    return (
        <div className={classes.blogPost}>
            <div className={classes.blogImage}>
                <img src={blogImage} />
                {highlighted &&
                    <div><Text type="p">{blog.title}</Text></div>
                }
            </div>
            <div className={classes.blogPostText}>
                <div className={classes.blogHashtags}>
                    {blogHashtags && blogHashtags.map((tag, index) => (
                        <a key={index} href="#">#{tag}</a>
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
                    {blog.user.full_name}
                </div>
            </div>
        </div>
    );
}

BlogPoster.propTypes = {
    blog: PropTypes.object.isRequired,
    highlighted: PropTypes.bool
};

export default BlogPoster;