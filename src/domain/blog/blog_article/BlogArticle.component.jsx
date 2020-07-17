import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, subtitle } = blog;
    
    return (
        <div>
            {title}
            {subtitle}
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
};


export default Blog;
