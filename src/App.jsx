import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    Campaigns,
    Campaign,
    Homepage,
    AboutUs,
    NowUApp,
    GetInTouch,
    Press,
    FAQs,
    err404,
    Blog,
    BlogArticle,
    LoginMobile,
} from './domain';
import { AnnounceBar, Navbar, Footer } from './components';
import './App.scss';
import { openNewsletterSignupModal } from './utils/functions';

const App = () => {
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
            <div className='App'>
                <AnnounceBar />
                <Navbar newsletterSignupModal={openNewsletterSignupModal} />
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/campaigns' exact component={Campaigns} />
                    <Route path='/campaigns/:id' exact component={Campaign} />
                    <Route path='/aboutus' exact component={AboutUs} />
                    <Route path='/now-u-app' exact component={NowUApp} />
                    <Route path='/get-in-touch' exact component={GetInTouch} />
                    <Route path='/press' exact component={Press} />
                    <Route path='/faqs' exact component={FAQs} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/blog/:id' exact component={BlogArticle} />
                    <Route path='/loginMobile' exact component={LoginMobile} />
                    <Route exact component={err404} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
