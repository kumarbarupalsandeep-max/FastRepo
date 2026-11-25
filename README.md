# Daylight — Daily Planner

A responsive, browser-based task manager inspired by the simplicity of Microsoft To Do. Daylight is an independent project and is not affiliated with or endorsed by Microsoft.

## Features

- **My Day:** Focus on tasks due today.
- **Important:** Keep starred tasks close.
- **Planned:** See tasks that have a due date.
- **All tasks:** Browse every task across your lists.
- **Custom lists:** Create and remove lists for different areas of life.
- **Task actions:** Add, complete, star, and delete tasks.
- **Due dates:** Set dates and see today, tomorrow, and overdue labels.
- **Search and filters:** Find tasks and switch between All, To do, and Done.
- **Progress summary:** Track completion at a glance.
- **Dark mode:** Switch between light and dark appearance.
- **Local persistence:** Tasks and lists are stored in this browser using localStorage.
- **Offline shell:** A service worker caches the app shell after the first online visit.

## Run locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open the index.html file in a browser.

For service-worker/offline testing, serve the folder through a local HTTP server, for example:

    python -m http.server 8000

Then open http://localhost:8000.

## Publish with GitHub Pages

1. Open the repository Settings → Pages.
2. Under Build and deployment, choose Deploy from a branch.
3. Select the main branch and root folder, then save.
4. Open the published URL shown by GitHub Pages.

## Data and privacy

This first version is frontend-only. It does not send tasks to a server. Data is saved in the browser profile on the device where the app is used. Clearing browser site data will remove locally saved tasks. There is no account sync or cross-device backup yet.

## Project structure

    FastRepo/
    ├── index.html
    ├── manifest.webmanifest
    ├── sw.js
    ├── assets/
    │   └── icon.svg
    ├── css/
    │   └── style.css
    └── js/
        └── app.js

## Next development stage

- Task editing and drag-and-drop ordering
- Recurring reminders and notifications
- User accounts and cloud synchronization
- Shared lists and task assignment
- Backend API and database
