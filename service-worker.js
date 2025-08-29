self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// You can add caching logic below as needed, but even a minimal SW like this works for installability
self.addEventListener('fetch', event => {
  // Default: just let network handle requests
});