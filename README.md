# WorkSuite — Independent Productivity Ecosystem

WorkSuite contains **52 independent frontend workspaces** in one searchable launcher. Each app has its own folder and page, a consistent Poppins typography system, original SVG artwork, a shared application engine and local productivity tools.

## Workspace groups

Documents and writing, spreadsheets, presentations, notes, communication, local files, forms, task planning, data lists, bookings, media, visual design, diagrams, whiteboards, project tracking, dashboards, automation design, assistant prototypes, safety dashboards, device inventories, identity checklists, customer contacts and publishing.

## Shared features in every workspace

Quick notes (edit, duplicate, pin, archive and delete), personal checklists, due dates, reminders, quick links, reusable tags, workspace search, activity history, JSON import/export, CSV export, local backups, backup restore and print view are available alongside the app-specific modules.

## Frontend-only boundaries

All workspaces are HTML, CSS and JavaScript prototypes. Data is stored in the current browser where supported. There is no backend, login, database, account system, cloud synchronization or real multi-user collaboration.

Email, chat, booking, AI, safety, device management, cloud desktop and automation interactions are local demonstrations only. They do not send real email, connect to live services, scan or protect devices, execute external automations or contact an AI model. Small file previews are local to this browser; larger files may be recorded as metadata only.

## Run locally

```bash
python -m http.server 8000
```
Open `http://localhost:8000`.

## Publish

Configure static hosting to publish the repository root. The launcher is at `/`; each workspace opens at its own folder URL.

## Copyright and branding

Copyright © 2026 WorkSuite. Keep WorkSuite source code, page copy, visual assets, SVG icons and illustrations independently authored. Do not add third-party logos, registered marks, proprietary artwork, copied screenshots or external product branding. Review applicable intellectual-property rights before commercial use. This document is general project guidance, not legal advice.
