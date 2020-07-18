import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Campaigns, Campaign, Homepage, AboutUs, NowUApp, GetInTouch, Press, FAQs, err404 } from './domain';
import { AnnounceBar, TopNav, Footer } from './components';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AnnounceBar />
        <TopNav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/campaigns/:id" exact component={Campaign} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/now-u-app" exact component={NowUApp} />
          <Route path="/get-in-touch" exact component={GetInTouch} />
          <Route path="/press" exact component={Press} />
          <Route path="/faqs" exact component={FAQs} />
          <Route exact component={err404} />

        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
