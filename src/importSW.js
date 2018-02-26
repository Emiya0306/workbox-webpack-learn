if ('serviceWorker' in navigator) {
  const { DIST } = process.env;

  navigator.serviceWorker.register('/public/sw.js', { scope: '/public/' }).then(registration => {
    console.log('SW registered: ', registration);
  }).catch(registrationError => {
    console.log('SW registration failed: ', registrationError);
  });
}