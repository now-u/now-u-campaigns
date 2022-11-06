import React, { useState, useEffect } from "react";
import classes from "./Blog.module.scss";
import { Text, AppDownloadSquare } from "../../components";
import { BlogPoster } from "./components";
import BlogSearchControls from "./components/BlogSearchControls";
// eslint-disable-next-line no-unused-vars
import { blogsURL, campaignsURL } from "../../utils/constants";
import { useBreakpoint } from "../../utils/breakpoint";
import { MonthCampaigns } from "./components";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [monthCampaigns, setMonthCampaigns] = useState([]);

  const breakpoints = useBreakpoint();
  const smallDevice = !!breakpoints.sm;

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await fetch(blogsURL);
      const blogs = await resp.json();
      setBlogs(blogs?.data ? blogs.data : blogs);
      setFilteredBlogs(blogs?.data ? blogs.data : blogs);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const resp = await fetch(campaignsURL);
      const campaigns = await resp.json();
      setMonthCampaigns(campaigns?.data);

      // Fetch Old campaigns as well, as blogs might be linked to them
      const respOldCampaigns = await fetch(`${campaignsURL}?old=true`);
      const oldCampaigns = await respOldCampaigns.json();
      setAllCampaigns([...(campaigns?.data ?? {}), ...(oldCampaigns?.data ?? {})]);
    };

    fetchCampaigns();

  }, []);

  const filterBlogs = (newFilteredBlogs) => {
    setFilteredBlogs(newFilteredBlogs);
  };

  const BlogPosters = () => {
    const blogItems = [...filteredBlogs];
    const noBlogsFound = blogItems.length === 0;

    if(noBlogsFound) {
      return (
        <div>
                    No Blogs found!
        </div>
      );
    }

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
  };

  return (
    <div className={classes.container}>
      <Helmet>
        <title>now-u | Blog</title>
      </Helmet>
      <div className={classes.header}>
        <Text className={classes.title} type="h2">
                    Blog
        </Text>
      </div>
      <div className={classes.content}>
        <div className={classes.blogs}>
          <div className={classes.searchContainer}>
            <BlogSearchControls blogs={blogs} campaigns={allCampaigns} filterBlogs={filterBlogs} />
          </div>
          <BlogPosters />
        </div>
        <div className={classes.blogAds}>
          <AppDownloadSquare />
          <MonthCampaigns campaigns={monthCampaigns} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
