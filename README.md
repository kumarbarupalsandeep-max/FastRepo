# WorkSuite — Independent Productivity Ecosystem

WorkSuite is a browser-based collection of **52 independent frontend app prototypes**, organized into individual folders and presented through one app launcher. The suite uses the blue-and-white design language from the Daylight To Do project.

This repository is for learning, interface research and frontend prototyping. It is **not Microsoft software**, is not affiliated with or endorsed by Microsoft, and does not reuse Microsoft's source code, logos or proprietary assets. Product and service names are referenced only to describe the workflow each independent prototype explores. The code, page names and UI artwork here are independently authored.

## Start here

Open the root `index.html` file to see the WorkSuite app launcher. Each app has its own folder and its own `index.html` page.

## App directory

| App inspiration / workflow | WorkSuite workspace | Folder |
|---|---|---|
| Word | Writer Studio | `word/` |
| Excel | Grid Studio | `excel/` |
| PowerPoint | Presentation Studio | `powerpoint/` |
| Outlook | Mail Desk | `outlook/` |
| OneNote | Notes Studio | `onenote/` |
| OneDrive | Cloud Files | `onedrive/` |
| Teams | Team Chat | `teams/` |
| Forms | Form Builder | `forms/` |
| Planner | Plan Board | `planner/` |
| Lists | Data Lists | `lists/` |
| Loop | Shared Canvas | `loop/` |
| SharePoint | Team Portal | `sharepoint/` |
| Bookings | Booking Desk | `bookings/` |
| Clipchamp | Video Studio | `clipchamp/` |
| Designer | Design Canvas | `designer/` |
| Stream | Media Library | `stream/` |
| Sway | Story Builder | `sway/` |
| Visio | Diagram Studio | `visio/` |
| Whiteboard | Whiteboard | `whiteboard/` |
| Project | Project Timeline | `project/` |
| Access | Data Manager | `access/` |
| Power BI | Insight Dashboard | `power-bi/` |
| Power Apps | App Builder | `power-apps/` |
| Power Automate | Flow Builder | `power-automate/` |
| Copilot-style assistant | AI Companion | `copilot/` |
| Defender-style security | Safety Centre | `defender/` |
| Intune | Device Centre | `intune/` |
| Viva Engage | Community Feed | `viva-engage/` |
| Viva Insights | Focus Insights | `viva-insights/` |
| Places | Room Planner | `places/` |
| Power Pages | Page Builder | `power-pages/` |
| Publisher-style publishing | Publication Studio | `publisher/` |
| Exchange | Mail Service Desk | `exchange/` |
| Identity administration | Identity Centre | `identity/` |
| Dynamics-style CRM | Customer Desk | `dynamics-365/` |
| To Do | Daylight To Do | `todo/` |
| Microsoft 365 Archive-style | Archive Vault | `archive/` |
| Microsoft 365 Backup-style | Backup Centre | `backup/` |
| Edge-style browser start page | Browse Studio | `edge/` |
| Editor-style writing checks | Writing Assistant | `editor/` |
| Endpoint Manager | Endpoint Desk | `endpoint-manager/` |
| Enterprise Mobility + Security | Mobility Centre | `enterprise-mobility/` |
| Microsoft 365 mobile apps | Mobile Hub | `mobile-apps/` |
| Microsoft 365 Copilot-style | Copilot Workspace | `m365-copilot/` |
| Windows settings concept | Device Settings | `windows/` |
| Windows 365-style | Cloud PC | `windows-365/` |
| Cloud App Security-style | Cloud App Safety | `cloud-app-security/` |
| Defender for Business-style | Business Protection | `defender-business/` |
| Defender for Endpoint-style | Endpoint Protection | `defender-endpoint/` |
| Defender for Identity-style | Identity Protection | `defender-identity/` |
| Defender for Office 365-style | Mail Protection | `defender-office/` |
| OneDrive for Business-style | Business Files | `onedrive-business/` |

The Microsoft 365 catalogue is broad and changes over time. This collection is a broad starter ecosystem, not a guarantee that every Microsoft product, SKU, legacy service or regional offering is represented. Refer to Microsoft's current [apps and services catalogue](https://www.microsoft.com/en-in/microsoft-365/products-apps-services) for the official product list.

## Frontend-only scope

For the current phase, all apps are HTML, CSS and JavaScript prototypes. The shared engine and visual system are in `shared/`; the launcher styles and scripts are in `css/` and `js/`.

- No backend, database, login, subscription or multi-user account system.
- No cloud file uploads or cross-device synchronization.
- No real email delivery, calendar integrations or live collaboration.
- No connected AI model or external AI API.
- No actual device management, malware scanning, security protection or operating-system control.
- No real cloud desktop, virtual machine or remote session.
- Demo content is saved in the current browser where supported; some file, canvas and presentation demos are temporary/local.
- Export actions (for example, CSV or SVG) create files locally in the browser.

The security and AI workspaces are deliberately labelled as demos and must not be treated as real protection or real AI services.

## Run locally

No package install or build step is required.

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Select **Deploy from a branch**.
3. Choose `main` and `/(root)`, then save.
4. Use the GitHub Pages URL shown by GitHub.

The root `sw.js` caches the WorkSuite app shell. The To Do app has its own service worker inside `todo/`.

## Folder structure

```text
FastRepo/
├── index.html                 # WorkSuite app launcher
├── css/                       # Launcher styles
├── js/                        # Launcher search, filters and favorites
├── shared/                    # Shared app engine and app theme
├── todo/                      # Daylight To Do app (kept as its own app)
├── word/ excel/ powerpoint/ outlook/ onenote/
├── onedrive/ teams/ forms/ planner/ lists/ loop/
├── sharepoint/ bookings/ clipchamp/ designer/ stream/ sway/
├── visio/ whiteboard/ project/ access/ publisher/
├── power-bi/ power-apps/ power-automate/ power-pages/
├── copilot/ m365-copilot/ viva-engage/ viva-insights/
├── defender/ defender-business/ defender-endpoint/
├── defender-identity/ defender-office/ cloud-app-security/
├── intune/ endpoint-manager/ enterprise-mobility/
├── windows/ windows-365/ edge/ editor/ archive/ backup/
├── mobile-apps/ places/ exchange/ identity/ onedrive-business/
├── dynamics-365/
└── README.md
```
