import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import ReactPixel from 'react-facebook-pixel';

const trackingId = "UA-164779666-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const tagManagerArgs = {
    gtmId: trackingId
}
 
TagManager.initialize(tagManagerArgs)

const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('2581817878752174', options);

// Tracks page views (more useful in future versions)
ReactPixel.pageView();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
