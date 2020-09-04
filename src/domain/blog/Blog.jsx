import React, { useState, useEffect } from "react";
import classes from "./Blog.module.scss";
import { Text, AppDownloadSquare } from "../../components";
import { BlogPoster } from "./components";
// eslint-disable-next-line no-unused-vars
import BlogSearchControls from "./components/BlogSearchControls";
import { blogsURL } from "../../utils/constants";
import { useBreakpoint } from "../../utils/breakpoint";
// eslint-disable-next-line no-unused-vars
import { MonthCampaigns } from "./components";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const breakpoints = useBreakpoint();
	const smallDevice = !!breakpoints.sm;

	useEffect(() => {
		const fetchBlogs = async () => {
			const resp = await fetch(blogsURL);
			const blogs = await resp.json();
			setBlogs(blogs?.data ? blogs.data : blogs);
		};

		fetchBlogs();
	}, []);

	const BlogPosters = () => {
		const blogItems = [...blogs];
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
			<div className={classes.header}>
				<Text className={classes.title} type="h2">
                    Blog
				</Text>
			</div>
			<div className={classes.content}>
				<div className={classes.blogs}>
					{/* TODO <div className={classes.searchContainer}>
                        <BlogSearchControls />
                    </div> */}
					<BlogPosters />
				</div>
				<div className={classes.blogAds}>
					<AppDownloadSquare />
					{/* <MonthCampaigns /> */}
				</div>
			</div>
		</div>
	);
};

export default Blog;
