const CACHE_NAME = "worksuite-shell-v8";
const APP_FILES = [
  "./",
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
  "./app-builder/",
  "./archive-vault/index.html",
  "./archive-vault/",
  "./assistant-workspace/index.html",
  "./assistant-workspace/",
  "./backup-center/index.html",
  "./backup-center/",
  "./booking-desk/index.html",
  "./booking-desk/",
  "./browse-studio/index.html",
  "./browse-studio/",
  "./business-files/index.html",
  "./business-files/",
  "./business-safety/index.html",
  "./business-safety/",
  "./cloud-files/index.html",
  "./cloud-files/",
  "./cloud-safety/index.html",
  "./cloud-safety/",
  "./community-feed/index.html",
  "./community-feed/",
  "./customer-desk/index.html",
  "./customer-desk/",
  "./data-lists/index.html",
  "./data-lists/",
  "./data-manager/index.html",
  "./data-manager/",
  "./design-canvas/index.html",
  "./design-canvas/",
  "./device-center/index.html",
  "./device-center/",
  "./device-settings/index.html",
  "./device-settings/",
  "./diagram-studio/index.html",
  "./diagram-studio/",
  "./endpoint-center/index.html",
  "./endpoint-center/",
  "./endpoint-safety/index.html",
  "./endpoint-safety/",
  "./flow-builder/index.html",
  "./flow-builder/",
  "./focus-insights/index.html",
  "./focus-insights/",
  "./form-builder/index.html",
  "./form-builder/",
  "./grid-studio/index.html",
  "./grid-studio/",
  "./idea-board/index.html",
  "./idea-board/",
  "./identity-center/index.html",
  "./identity-center/",
  "./identity-safety/index.html",
  "./identity-safety/",
  "./insight-dashboard/index.html",
  "./insight-dashboard/",
  "./mail-desk/index.html",
  "./mail-desk/",
  "./mail-operations/index.html",
  "./mail-operations/",
  "./mail-safety/index.html",
  "./mail-safety/",
  "./media-library/index.html",
  "./media-library/",
  "./mobile-hub/index.html",
  "./mobile-hub/",
  "./mobility-center/index.html",
  "./mobility-center/",
  "./notes-studio/index.html",
  "./notes-studio/",
  "./page-builder/index.html",
  "./page-builder/",
  "./plan-board/index.html",
  "./plan-board/",
  "./presentation-studio/index.html",
  "./presentation-studio/",
  "./project-timeline/index.html",
  "./project-timeline/",
  "./publication-studio/index.html",
  "./publication-studio/",
  "./room-planner/index.html",
  "./room-planner/",
  "./safety-center/index.html",
  "./safety-center/",
  "./shared-canvas/index.html",
  "./shared-canvas/",
  "./smart-assistant/index.html",
  "./smart-assistant/",
  "./story-builder/index.html",
  "./story-builder/",
  "./team-chat/index.html",
  "./team-chat/",
  "./team-portal/index.html",
  "./team-portal/",
  "./video-studio/index.html",
  "./video-studio/",
  "./virtual-desktop/index.html",
  "./virtual-desktop/",
  "./writer-studio/index.html",
  "./writer-studio/",
  "./writing-assistant/index.html",
  "./writing-assistant/"
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
