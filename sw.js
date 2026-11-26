const CACHE_NAME = "worksuite-shell-v10";
const APP_FILES = [
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./shared/app.css",
  "./shared/app.js",
  "./shared/toolkit.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/worksuite-mark.svg",
  "./assets/icons.svg",
  "./assets/previews/documents.svg",
  "./assets/previews/collaboration.svg",
  "./assets/previews/planning.svg",
  "./assets/previews/media.svg",
  "./assets/previews/automation.svg",
  "./assets/previews/security.svg",
  "./todo/index.html",
  "./todo/css/style.css",
  "./todo/js/app.js",
  "./todo/manifest.webmanifest",
  "./todo/assets/icon.svg",
  "./app-builder/index.html",
  "./archive-vault/index.html",
  "./assistant-workspace/index.html",
  "./backup-center/index.html",
  "./booking-desk/index.html",
  "./browse-studio/index.html",
  "./business-files/index.html",
  "./business-safety/index.html",
  "./cloud-files/index.html",
  "./cloud-safety/index.html",
  "./community-feed/index.html",
  "./customer-desk/index.html",
  "./data-lists/index.html",
  "./data-manager/index.html",
  "./design-canvas/index.html",
  "./device-center/index.html",
  "./device-settings/index.html",
  "./diagram-studio/index.html",
  "./endpoint-center/index.html",
  "./endpoint-safety/index.html",
  "./flow-builder/index.html",
  "./focus-insights/index.html",
  "./form-builder/index.html",
  "./grid-studio/index.html",
  "./idea-board/index.html",
  "./identity-center/index.html",
  "./identity-safety/index.html",
  "./insight-dashboard/index.html",
  "./mail-desk/index.html",
  "./mail-operations/index.html",
  "./mail-safety/index.html",
  "./media-library/index.html",
  "./mobile-hub/index.html",
  "./mobility-center/index.html",
  "./notes-studio/index.html",
  "./page-builder/index.html",
  "./plan-board/index.html",
  "./presentation-studio/index.html",
  "./project-timeline/index.html",
  "./publication-studio/index.html",
  "./room-planner/index.html",
  "./safety-center/index.html",
  "./shared-canvas/index.html",
  "./smart-assistant/index.html",
  "./story-builder/index.html",
  "./team-chat/index.html",
  "./team-portal/index.html",
  "./video-studio/index.html",
  "./virtual-desktop/index.html",
  "./writer-studio/index.html",
  "./writing-assistant/index.html",

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
            event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        });
    })
  );
});
