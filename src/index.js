import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";

// Component to use media queries in React
// Ref: https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
import { BreakpointProvider } from "./utils/breakpoint";

const queries = {
	max: "(max-width: 1400px)",
	md: "(max-width: 825px)",
	sm: "(max-width: 480px)",
};

const trackingId = "UA-164779666-1"; // Replace with your Google Analytics tracking ID

ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const tagManagerArgs = {
	gtmId: trackingId,
};

TagManager.initialize(tagManagerArgs);

const options = {
	autoConfig: true, // set pixel's autoConfig
	debug: false, // enable logs
};
ReactPixel.init("2581817878752174", options);

// Tracks page views (more useful in future versions)
ReactPixel.pageView();

ReactDOM.render(
	<React.StrictMode>
		<BreakpointProvider queries={queries}>
			<App />
		</BreakpointProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
