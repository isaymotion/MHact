const CACHE_NAME = "mh-trainer-v6";
const ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "data.js",
  "flashcards.js",
  "practice.js",
  "law.js",
  "interventions.js",
  "glossary.js",
  "sdoh.js",
  "manifest.json",
  "assets/apple-touch-icon.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("mh-trainer-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      try {
        const response = await fetch(event.request);
        if (response && response.ok && new URL(event.request.url).origin === self.location.origin) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        if (event.request.mode === "navigate") {
          return (await cache.match("index.html")) || (await cache.match("./"));
        }
        throw error;
      }
    })
  );
});
