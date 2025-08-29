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
const CACHE_NAME = 'carddraw-cache-v1';
const urlsToCache = [
  '/CardDraw6/',
  '/CardDraw6/index.html',
  '/CardDraw6/style.css',
  '/CardDraw6/script.js',
  '/CardDraw6/icon-192.png',
  '/CardDraw6/icon-512.png',
  '/CardDraw6/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
