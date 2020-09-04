import React from "react";
import classes from "../Blog.module.scss";
import { SearchDropdown } from "../../../components";


const BlogSearchControls = () => {

	const campaigns = ["Campaign Name", "Campaign Name", "Campaign Name", "General"];

	return (
		<div className={classes.SearchControls}>
			<SearchDropdown title="Choose Campaigns" values={campaigns} />
			{/* <SearchBox title="I want to look for" placeholder="Search for article" onSubmit={onSearch} /> */}
		</div>
	);
};


export default BlogSearchControls;
