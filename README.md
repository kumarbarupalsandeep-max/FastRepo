# WorkSuite — Independent Productivity App Collection

This repository contains a set of independent, browser-based productivity app prototypes. The interface uses the same blue-and-white visual theme as the original Daylight task manager.

**Important:** This is an independent learning/demo project. It is not Microsoft software, is not affiliated with or endorsed by Microsoft, and does not reproduce Microsoft's source code, logos, or proprietary assets. Product names are used only to identify the kinds of workflows that inspired each prototype. The app experiences use original names and original code.

## App collection

The Microsoft 365 product catalogue changes over time and includes many apps and services. This repository focuses on a broad selection of productivity app categories shown in Microsoft's public app and services catalogue. It is not a complete implementation of every Microsoft product.

| Inspiration / category | Independent app folder |
|---|---|
| Word | `word/` — Writer Studio |
| Excel | `excel/` — Grid Studio |
| PowerPoint | `powerpoint/` — Presentation Studio |
| Outlook / Exchange | `outlook/`, `exchange/` — Mail Desk / Mail Service Desk |
| OneNote | `onenote/` — Notes Studio |
| OneDrive | `onedrive/` — Cloud Files |
| Teams | `teams/` — Team Chat |
| Forms | `forms/` — Form Builder |
| Planner | `planner/` — Plan Board |
| Lists | `lists/` — Data Lists |
| Loop | `loop/` — Shared Canvas |
| SharePoint | `sharepoint/` — Team Portal |
| Bookings | `bookings/` — Booking Desk |
| Clipchamp / Stream | `clipchamp/`, `stream/` — Video Studio / Media Library |
| Designer | `designer/` — Design Canvas |
| Sway | `sway/` — Story Builder |
| Visio | `visio/` — Diagram Studio |
| Whiteboard | `whiteboard/` — Whiteboard |
| Project | `project/` — Project Timeline |
| Access | `access/` — Data Manager |
| Power BI | `power-bi/` — Insight Dashboard |
| Power Apps | `power-apps/` — App Builder |
| Power Automate | `power-automate/` — Flow Builder |
| Copilot | `copilot/` — AI Companion prototype |
| Defender / Intune | `defender/`, `intune/` — Safety Centre / Device Centre |
| Viva Engage / Insights | `viva-engage/`, `viva-insights/` — Community Feed / Focus Insights |
| Places | `places/` — Room Planner |
| Power Pages | `power-pages/` — Page Builder |
| Publisher | `publisher/` — Publication Studio |
| Dynamics 365-style CRM | `dynamics-365/` — Customer Desk |
| Identity administration | `identity/` — Identity Centre |

## Daylight To Do

The original Daylight task manager has been retained inside **`todo/`**. Its HTML, CSS, JavaScript, manifest, offline service worker, and icon are kept together in that folder.

## Run locally

No build step is needed. Open the root `index.html` file in a browser. For offline/service-worker testing, serve the repository with a local HTTP server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

Enable Pages under repository Settings → Pages → Deploy from a branch → `main` → `/(root)`. The root page is the app launcher, and every app folder has its own `index.html`.

## Current implementation limits

These are frontend prototypes, not complete Microsoft 365 replacements. Most demos save their sample data in the current browser using localStorage. There is no authentication, backend, cloud sync, real email delivery, live collaboration, real security scanning, or connected AI model. File/media tools keep local file metadata or previews; they do not provide a cloud storage or video transcoding service.

## Official product reference

Microsoft's public catalogue of apps and services: https://www.microsoft.com/microsoft-365/products-apps-services

Use this repository to study interface patterns and build original tools, not to impersonate Microsoft or reuse protected brand assets.
