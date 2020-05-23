import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { TopNav } from '../index';
import { Campaigns, Campaign } from '../../domain';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="announcements">
          Latest campaign: Stand for Gender Equality in the UK <Link to={'/campaigns'}> &nbsp;Check it out!</Link>
        </div>
        <TopNav />
        <Switch>
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/campaigns/:id" exact component={Campaign} />
          <Redirect to={'/campaigns'} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
