import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AnnouncementBar.module.scss';

const App = () => {
  return (
    <div className={classes.announcements}>
      Latest campaign: Stand for Gender Equality in the UK <Link to={'/campaigns'}> &nbsp;Check it out!</Link>
    </div>
  );
};

export default App;
