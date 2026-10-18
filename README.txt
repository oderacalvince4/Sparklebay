SPARKLE BAY - HOME-SCREEN APP (customer + staff)
================================================

WHAT THIS IS
A small website that wraps your Apps Script app, so it can be installed on a phone
with the Sparkle Bay icon and name.
  - Customers install the app at the main address.
  - Staff install the app at the same address followed by /staff/

STEP 1 - Update Code.gs (one change, already made in the new Code.gs)
  The new Code.gs lets your app be shown inside this wrapper. Paste it over the old one,
  keep your own PIN, then Deploy > Manage deployments > pencil > New version > Deploy.

STEP 2 - Web app address (ALREADY DONE)
  config.js already contains your Apps Script web app address. Nothing to do here
  unless you create a brand new deployment later.

STEP 3 - Put the folder online (free)
  Netlify:  go to app.netlify.com/drop, drag this whole folder onto the page, sign up
            when asked. You get an address like https://something.netlify.app
  (GitHub Pages or Cloudflare Pages also work: upload these files, keep the folder layout.)
  Netlify lets you rename the address under Site settings > Change site name,
  e.g. sparklebay.netlify.app

STEP 4 - Install on a phone
  iPhone (use Safari):  open the address > Share button > Add to Home Screen > Add
  Android (use Chrome): open the address > menu (3 dots) > Install app / Add to Home screen
  Staff: do the same at  https://YOUR-ADDRESS/staff/

IF THE APP DOES NOT SHOW (blank page)
  Add ?direct=1 to the address to open the app without the wrapper, or tap
  "Open directly" on the loading screen. Then check that Code.gs was deployed as a
  NEW VERSION with the change from step 1.

CHANGING THE ICON LATER
  Replace the files in the icons folder (same names and sizes) and upload again.
  Phones keep the old icon until the app is removed and installed again.

KEEP THE STAFF ADDRESS PRIVATE. The staff app also needs your PIN.
