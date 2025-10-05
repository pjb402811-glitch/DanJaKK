const CACHE_NAME = 'danzzak-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/apple-touch-icon.svg',
  '/icon-192x192.svg',
  '/icon-512x512.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/services/geminiService.ts',
  '/hooks/useWordData.ts',
  '/components/Dashboard.tsx',
  '/components/FlashcardView.tsx',
  '/components/QuizGame.tsx',
  '/components/AddWordView.tsx',
  '/components/SpellingBeeGame.tsx',
  '/components/WordListView.tsx',
  '/components/icons/Icons.tsx'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          // If a navigation request fails, fallback to the root cache
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
