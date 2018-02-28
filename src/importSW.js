if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/public/sw.js', { scope: '../' }).then(registration => {
    console.log('SW registered: ', registration);
  }).catch(registrationError => {
    console.log('SW registration failed: ', registrationError);
  });
}