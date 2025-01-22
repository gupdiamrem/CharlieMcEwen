// analytics.js
import config from './config.js'; // Assuming the script is in the same folder

(function() {
  var script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', config.googleAnalyticsId);
  };
})();
