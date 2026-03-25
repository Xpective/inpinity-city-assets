# Asset URI Map

## Image Pfade

- local: `public/assets/images/personal-buildings/<slug>-<faction>.png`
- remote: `https://assets.inpinity.online/city/images/buildings/personal/<slug>-<faction>.png`

## Metadata Pfade

- local: `public/assets/metadata/personal-buildings/<slug>-<faction>.json`
- remote: `https://assets.inpinity.online/city/metadata/buildings/personal/<slug>-<faction>.json`

## HTML Detailansicht

- local: `public/building.html?building=<slug>&faction=<faction>`
- remote: `https://city.inpinity.online/building.html?building=<slug>&faction=<faction>`

## Hinweis

Wenn ihr statt `assets.inpinity.online/city/...` eine neue Subdomain nutzen wollt, müsst ihr nur:

1. `public/assets/manifests/contracts.json`
2. `public/assets/manifests/personal-buildings.json`
3. die JSON-Metadata-Dateien
4. `public/assets/js/data.js`

auf die neue Base-URL umstellen.
