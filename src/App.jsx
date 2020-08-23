import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Campaigns, Campaign, Homepage, AboutUs, NowUApp, GetInTouch, Press, FAQs, err404, Blog, BlogArticle } from './domain';
import { AnnounceBar, TopNav, Footer, NewsletterSignupModal } from './components';
import { ModalService } from "./services";
import './App.scss';

const App = () => {
  const openNewsletterSignupModal = () => {
    const newsletterSignupDismissed = sessionStorage.getItem('newsletter-signup-dismissed');
    const newsletterSignupCompleted = localStorage.getItem('newsletter-signup-completed');

    const showNewsletterSignup = !(newsletterSignupDismissed || newsletterSignupCompleted);

    if (showNewsletterSignup) {
      const modalRef = ModalService.open(
        NewsletterSignupModal,
        {
          onSuccessfulSignup: () => { closeNewsletterSignupModal(modalRef) }
        },
        {
          color: 'dark',
          onClose: () => sessionStorage.setItem('newsletter-signup-dismissed', 'true')
        }
      );
    }
  }

  // Close newsletter sign-up modal after 5 seconds
  const closeNewsletterSignupModal = (modalRef) => {
    setTimeout(() => {
      ModalService.close(modalRef);
    }, 5000);
  }

  useEffect(() => {
    // Display newsletter sign-up modal after 30 seconds
    const timer = setTimeout(() => {
      openNewsletterSignupModal();
    }, 30000);

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
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={BlogArticle} />
          <Route exact component={err404} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
