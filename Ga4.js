import ReactGA from "react-ga4";

const TrackGoogleAnalyticsEvent = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send GA4
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};


export { TrackGoogleAnalyticsEvent };
