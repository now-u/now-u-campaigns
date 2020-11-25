import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from '../Blog.module.scss';
import { SearchDropdown } from '../../../components';

const BlogSearchControls = ({ blogs, campaigns, filterBlogs }) => {

    const [campaignsToShow, setCampaignsToShow] = useState([]);

    useEffect(() => {
        // Only campaigns that current blogs are linked to, should be shown in the dropdown
        // Filter the campaigns to include only campaigns linked to blogs
        const filteredCampaigns = campaigns.map(campaign => {
            const campaignBlogExists = blogs.some((blog) => blog.campaign_id === campaign.id);
            if(campaignBlogExists) {
                return {
                    id: campaign.id,
                    title: campaign.title,
                    selected: true
                }
            }
        }).filter(campaign => campaign !== null && campaign !== undefined);
        setCampaignsToShow(filteredCampaigns);
    }, [blogs, campaigns]);

    // Callback called when a dropdown item is clicked
    const toggleSearchDropdown = (campaignModified) => {
        const filteredCampaigns = campaignsToShow.map(campaign => {
            if(campaign.id === campaignModified.id) {
                campaign.selected = !campaign.selected;
            }
            return campaign;
        });
        setCampaignsToShow(filteredCampaigns);
        filterBlogsToShow(filteredCampaigns);
    };

    // Callback to filter which blogs to show based on the selected campaigns
    const filterBlogsToShow = (filteredCampaignsToShow) => {
        const filteredBlogs = blogs.map(blog => {
            const showBlog = filteredCampaignsToShow.find(campaign => campaign.id === blog.campaign_id)?.selected;
            return showBlog ? blog : null;
        }).filter(blog => blog !== null);
        filterBlogs(filteredBlogs);
    }

    return (
        <div className={classes.SearchControls}>
            <SearchDropdown title="Choose Campaigns" values={campaignsToShow} onListItemClick={toggleSearchDropdown} />
            {/* <SearchBox title="I want to look for" placeholder="Search for article" onSubmit={onSearch} /> */}
        </div>
    );
};

BlogSearchControls.propTypes = {
    blogs: PropTypes.array,
    campaigns: PropTypes.array,
    filterBlogs: PropTypes.func
}

export default BlogSearchControls;
