import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { TopNav } from '../index';
import { Campaigns } from '../../domain';
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
          <Route path="/" exact component={() => <div />} />
          <Route path="/campaigns" exact component={Campaigns} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
