# Travelogue

A private travel journal where every trip is a magazine issue. Opens on your phone like an app and works offline.

## Put it online with GitHub Pages

1. On github.com, create a new repository named `travelogue` (public).
2. Upload everything in this folder to it: `index.html`, `manifest.json`, `sw.js`, `cover.png`, `.nojekyll`, and the `icons` and `fonts` folders.
3. In the repository, open Settings, then Pages. Under Build and deployment, choose Deploy from a branch, pick `main` and the `/ (root)` folder, then Save.
4. After a minute the app is live at `https://YOUR-USERNAME.github.io/travelogue/`.
5. In Settings, then General, you can upload `cover.png` as the social preview image.

## Install it on your phone

- iPhone: open the link in Safari, tap Share, then Add to Home Screen.
- Android: open the link in Chrome, tap the menu, then Install app.

## Adding memories you already wrote

Open an issue, tap Edit, then Paste a list. Paste the whole list. Lines such as Day 1, Day 2: Lluc or Nap 3 are picked up as the days, and each numbered line or each line of text becomes a memory.

## Sharing a trip with a friend

- Open the trip and tap Share. Choose whether your friend may edit their copy, then send the file with any app.
- Your friend opens Travelogue, taps + and then Import a shared trip (left of Next), and picks the file. If it arrives in WhatsApp or Messages, they save it to Files first.
- The friend gets their own copy. Share the trip again to send them an update.

## If you cannot add it to your phone's home screen

- Open the address directly in Safari (iPhone) or Chrome (Android). A link opened inside WhatsApp, Mail, GitHub or Claude uses an in-app browser that has no Add to Home Screen.
- iPhone: tap the Share button, scroll down the list and tap Add to Home Screen. If it is missing, scroll to the bottom of the share sheet, tap Edit Actions and add it.
- Android: tap the menu with the three dots, then Install app or Add to Home screen.

## Good to know

- Everything you add is stored on that phone only. A different phone or browser starts empty.
- To publish an update, replace `index.html` and `sw.js`. If you edit `sw.js` yourself, raise `VERSION` by one (for example to `travelogue-v11`).
