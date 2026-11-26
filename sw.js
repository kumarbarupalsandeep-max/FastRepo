const CACHE_NAME = "worksuite-shell-v7";
const APP_FILES = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./shared/app.css",
  "./shared/app.js",
  "./shared/toolkit.js",
  "./manifest.webmanifest",
  "./assets/icon.svg","./assets/worksuite-mark.svg","./assets/icons.svg","./assets/previews/documents.svg","./assets/previews/collaboration.svg","./assets/previews/planning.svg","./assets/previews/media.svg","./assets/previews/automation.svg","./assets/previews/security.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== "daylight-todo-shell-v3")
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (response.ok && new URL(event.request.url).origin === self.location.origin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
