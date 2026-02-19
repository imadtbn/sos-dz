const CACHE_NAME = "najda-cache-v1";

const urlsToCache = [
  "/najda-dz/",
  "/najda-dz/index.html",
  "/najda-dz/css/style.css",
  "/najda-dz/icons/najda_icon_3.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
