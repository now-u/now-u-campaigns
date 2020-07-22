import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Campaigns, Campaign, Homepage, AboutUs, NowUApp, GetInTouch, Press, FAQs } from './domain';
import {AnnounceBar, TopNav, Footer, NewsletterSignup} from './components';
import './App.scss';
import { ModalService } from "./services";

const App = () => {
  const openNewsletterSignupModal = () => {
    const showNewsletterSignup = true ||
      !(sessionStorage.getItem('newsletter-signup-dismissed') ||
        localStorage.getItem('newsletter-signup-completed'));

    if (showNewsletterSignup) {
      ModalService.open(
        NewsletterSignup,
        undefined,
        {
          color: 'dark',
          onClose: () => sessionStorage.setItem('newsletter-signup-dismissed', 'true')
        }
      );
    }
  }

  useEffect(() => {
    // Display newsletter signup after 30 seconds
    const timer = setTimeout(() => {
      openNewsletterSignupModal();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

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
          <Redirect to={'/'} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
