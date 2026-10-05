const VERSION = 'travelogue-v12';
const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-48.png",
  "fonts/playfair-display-latin-700-normal.woff2",
  "fonts/playfair-display-latin-ext-700-normal.woff2",
  "fonts/playfair-display-latin-800-normal.woff2",
  "fonts/playfair-display-latin-ext-800-normal.woff2",
  "fonts/newsreader-latin-400-normal.woff2",
  "fonts/newsreader-latin-ext-400-normal.woff2",
  "fonts/newsreader-latin-400-italic.woff2",
  "fonts/newsreader-latin-ext-400-italic.woff2",
  "fonts/inter-latin-400-normal.woff2",
  "fonts/inter-latin-ext-400-normal.woff2",
  "fonts/inter-latin-500-normal.woff2",
  "fonts/inter-latin-ext-500-normal.woff2"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Open instantly from the cache, then refresh it in the background.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const fresh = fetch(e.request).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }
        return res;
      }).catch(() => hit || caches.match('index.html'));
      return hit || fresh;
    })
  );
});
