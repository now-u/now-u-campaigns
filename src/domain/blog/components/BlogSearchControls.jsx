import React from 'react';
import classes from '../Blog.module.scss';
import SearchBox from '../../../components/search_box/SearchBox';


const BlogSearchControls = () => {
    return (
        <div className={classes.SearchControls}>
            <SearchBox title="I want to know about" placeholder="Choose Campaigns" />
            <SearchBox title="I want to look for" placeholder="Search for article" />
        </div>
    );
};


export default BlogSearchControls;
