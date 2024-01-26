import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();



/**
      * The following event is sent when the page loads. You could
      * wrap the event in a JavaScript function so the event is
      * sent when the user performs some action.
      */
      gtag('event', 'screen_view', { 'debug_mode':true }, {
        'app_name': 'myAppName',
        'screen_name': 'Home'
      });


// Custom Event Tracking - button click
  const myButton = document.getElementById('my-button');
  myButton.addEventListener('click', function() {
  
    gtag('event', 'button_click', {
      'event_category': 'your_category',
      'event_label': 'your_label',
      'value': 1
    });
  });