import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AnnouncementBar.module.scss';

const App = () => {
  return (
    <div className={classes.announcements}>
      Latest campaign: Announcement about latest campaign <Link to={'/campaigns'}> &nbsp;Check it out!</Link>
    </div>
  );
};

export default App;
