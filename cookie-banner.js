document.addEventListener('DOMContentLoaded', function() {
  // Check if cookies were already accepted or declined
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (cookiesAccepted === 'true') {
    initializeAnalytics(); // Initialize analytics if cookies were previously accepted
    return;
  } else if (cookiesAccepted === 'false') {
    return; // Do not show the banner if cookies were declined
  }

  // Create the cookie banner
  const cookieBanner = document.createElement('div');
  cookieBanner.id = 'cookie-banner';
  cookieBanner.style.position = 'fixed';
  cookieBanner.style.bottom = '0';
  cookieBanner.style.width = '100%';
  cookieBanner.style.maxWidth = '100%';
  cookieBanner.style.backgroundColor = '#2c3e50';
  cookieBanner.style.color = 'white';
  cookieBanner.style.padding = '1rem';
  cookieBanner.style.textAlign = 'center';
  cookieBanner.style.zIndex = '1000';
  cookieBanner.style.boxSizing = 'border-box';
  cookieBanner.style.overflowWrap = 'break-word';

  cookieBanner.innerHTML = `
    <p style="margin: 0; font-size: 1rem;">
      Hi there! I use cookies to track how many people visit my portfolio. This data is collected purely for my educational purposes and curiosity to see who is interested in my work. Your data will never be shared outside of this portfolio. 😊
    </p>
    <button id="accept-cookies" style="margin: 0.5rem; padding: 0.5rem 1rem; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">Accept</button>
    <button id="decline-cookies" style="margin: 0.5rem; padding: 0.5rem 1rem; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">Decline</button>
  `;

  document.body.appendChild(cookieBanner);

  // Prevent side scrolling
  document.body.style.overflowX = 'hidden';

  // Handle button clicks
  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    initializeAnalytics(); // Initialize analytics when cookies are accepted
    cookieBanner.style.display = 'none';
  });

  document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.style.display = 'none';
  });

  function initializeAnalytics() {
    // Load Google Analytics script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K9LWXWYHJ1';
    document.head.appendChild(script);

    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-K9LWXWYHJ1');
    };
  }
});
