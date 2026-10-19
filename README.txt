SPARKLE BAY - TWO SEPARATE HOME-SCREEN APPS
===========================================

  /client/   customer app   (ID: sparkle-bay-customer, name "Sparkle Bay")
  /staff/    staff app      (ID: sparkle-bay-staff,    name "SB Staff")

Each has its own icon, ID, install scope and service worker, so neither can
interfere with the other. Both show the same Sparkle Bay logo (the staff icon
carries a small green STAFF tag). Both talk to the same Apps Script backend.

FIRST-TIME SETUP
  1. Apps Script: paste the latest Code.gs, keep your PIN, then
     Deploy > Manage deployments > pencil > New version > Deploy.
  2. config.js already holds your Apps Script web app address.
  3. Upload everything in this folder to your host (GitHub Pages or Netlify).
  4. Customer address:  https://YOUR-SITE/YOUR-REPO/client/
     Staff address:     https://YOUR-SITE/YOUR-REPO/staff/   (keep it private)

UPDATING AN OLD UPLOAD (you used the earlier single-folder version)
  - Upload all files again; same names are replaced and the new client folder is added.
  - Optional tidy-up: delete the old manifest.webmanifest in the main folder.
  - On the phone: remove the old "Sparkle Bay" app AND any Chrome-badged shortcut,
    then install again from the /client/ address.

INSTALLING
  Android (Chrome): open the address. Tap Install in the blue bar at the top, or
                    menu > Install app. Choose Install (not "Create shortcut").
  iPhone (Safari):  Share > Add to Home Screen.

IF THE APP SHOWS A BLANK PAGE
  Add ?direct=1 to the address, or tap "Open directly" on the loading screen, and
  check that Code.gs was deployed as a NEW VERSION.
