import React from "react";
import { Link } from "react-router-dom";
import classes from "./AnnouncementBar.module.scss";

const App = () => {
	return (
		<div className={classes.announcements}>
      New campaigns added <Link to={"/campaigns"}> &nbsp;Check them out!</Link>
		</div>
	);
};

export default App;
