import React from 'react';
import classes from '../Blog.module.scss';
import SearchBox from '../../../components/search_box/SearchBox';


const BlogSearchControls = () => {

    const onSearch = (searchText) => {
        // eslint-disable-next-line no-console
        console.log(`${searchText} needs to be searched!`);
    }

    return (
        <div className={classes.SearchControls}>
            <SearchBox title="I want to know about" placeholder="Choose Campaigns" />
            <SearchBox title="I want to look for" placeholder="Search for article" onSubmit={onSearch} />
        </div>
    );
};


export default BlogSearchControls;
