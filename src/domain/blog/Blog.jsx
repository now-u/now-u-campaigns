import React, { useState, useEffect } from 'react';
import classes from './Blog.module.scss';
import { Text, AppDownloadSquare } from '../../components';
import { BlogPoster } from './components';
import BlogSearchControls from './components/BlogSearchControls';
import { blogsURL, campaignsURL } from '../../utils/constants';
import { useBreakpoint } from '../../utils/breakpoint';
import { MonthCampaigns } from './components';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [campaigns, setCampaigns] = useState([]);

    const breakpoints = useBreakpoint();
    const smallDevice = !!breakpoints.sm;

    useEffect(() => {
        const fetchBlogs = async () => {
            const resp = await fetch(blogsURL);
            const blogs = await resp.json();
            setBlogs(blogs?.data ? blogs.data : blogs);
            setFilteredBlogs(blogs?.data ? blogs.data : blogs);
        }
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchCampaigns = async () => {
          const resp = await fetch(campaignsURL);
          const campaigns = await resp.json();
          setCampaigns(campaigns?.data);
        };
        fetchCampaigns();
    }, []);

    const filterBlogs = (newFilteredBlogs) => {
        setFilteredBlogs(newFilteredBlogs);
    }

    const BlogPosters = () => {
        const blogItems = [...filteredBlogs];
        // grab the first blog as the highlighted blog
        // No highlighted blog on small device screens
        const blogHighlighted = smallDevice ? null : blogItems.shift();

        return (
            <div>
                {blogHighlighted &&
                    <div className={classes.highlightedBlog}>
                        <BlogPoster blog={blogHighlighted} highlighted />
                    </div>
                }
                {blogItems &&
                    <div className={classes.blogList}>
                        {blogItems.map((blog) => (
                            <BlogPoster blog={blog} key={blog.id} />
                        ))}
                    </div>
                }
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Text className={classes.title} type="h2">
                    Blog
                </Text>
            </div>
            <div className={classes.content}>
                <div className={classes.blogs}>
                    <div className={classes.searchContainer}>
                        <BlogSearchControls blogs={blogs} campaigns={campaigns} filterBlogs={filterBlogs} />
                    </div>
                    <BlogPosters />
                </div>
                <div className={classes.blogAds}>
                    <AppDownloadSquare />
                    <MonthCampaigns campaigns={campaigns} />
                </div>
            </div>
        </div>
    );
}

export default Blog;
