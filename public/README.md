# Inpinity City – Personal Buildings Master Gallery Pack

Dieses Paket bündelt die komplette 7er-Reihe der Personal Buildings in einer einzigen Repo-freundlichen Struktur.

## Enthalten
- zentrales Master-Manifest für **98 Slots**
- gruppiertes Manifest für **Building → Fraktion → Level**
- Summary-Manifest mit Rollen, Synergien, Placement-Regeln und Hook Targets
- Contract-/ABI-Index für City-Core und verfügbare Live-ABIs
- `index.html` / `gallery.html` als Übersicht
- `building-level.html` als Detailansicht
- CSS + JS für statische Cloudflare-/GitHub-Deployments
- Metadata-Templates für **alle 98 Varianten**
- vorbereitete Bildordner für spätere PNGs

## Routing
```text
index.html
building-level.html?building=residence&faction=inpinity&level=4
```

## Bildpfade
```text
public/assets/images/personal-buildings/{slug}/{faction}/level-{n}.png
```

## Metadata-Pfade
```text
public/assets/metadata/personal-buildings/{slug}/{faction}/level-{n}.json
```

## Wichtiger Vorteil
Die Gallery und Detailseite haben einen eingebauten Fallback, wenn Bilder noch nicht hochgeladen sind.
So kannst du das Interface zuerst deployen und die finalen Building-Bilder später schrittweise ersetzen.
