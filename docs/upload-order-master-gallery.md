# Upload-Reihenfolge – Master Gallery

## 1) Interface-Basis
Diese Dateien zuerst hochladen:
- `public/index.html`
- `public/gallery.html`
- `public/building-level.html`
- `public/assets/css/styles.css`
- `public/assets/js/shared.js`
- `public/assets/js/gallery.js`
- `public/assets/js/building-level.js`

## 2) Datenbasis
Dann:
- `public/assets/manifests/personal-buildings-master.json`
- `public/assets/manifests/personal-buildings-grouped.json`
- `public/assets/manifests/personal-buildings-summary.json`
- `public/assets/manifests/contracts-index.json`

## 3) ABI-Layer
Dann:
- `public/assets/abis/*.json`

## 4) Metadata
Dann:
- `public/assets/metadata/personal-buildings/...`

## 5) Bilder
Zum Schluss nach und nach:
- `public/assets/images/personal-buildings/{slug}/{faction}/level-{n}.png`

## Empfehlung
Erst `Residence` komplett hochladen und testen, dann Gebäude für Gebäude ergänzen.
Die Seiten laufen auch ohne finale Bilder, weil das Interface automatisch Fallback-Karten anzeigt.
