import '../styles/globals.css'
// swiper slider css
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "https://fonts.googleapis.com/icon?family=Material+Icons"
import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
import "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700&family=Ubuntu+Condensed&display=swap"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.WOW = require('wowjs');
    }

    let wow = new WOW.WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {

        },
        scrollContainer: null
      }
    );
    wow.init();
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
