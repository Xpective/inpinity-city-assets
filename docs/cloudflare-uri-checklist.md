# Cloudflare / Asset URI Checklist

## Zielidee
- HTML auf City-Subdomain
- Bilder + Metadata auf Asset-Subdomain

## Erwartete Basis
- HTML: `https://city.inpinity.online/`
- Assets: `https://assets.inpinity.online/city/`

## Bild-URI-Schema
```text
https://assets.inpinity.online/city/images/buildings/personal/{slug}/{faction}/level-{n}.png
```

## Metadata-URI-Schema
```text
https://assets.inpinity.online/city/metadata/buildings/personal/{slug}/{faction}/level-{n}.json
```

## Vor Deploy prüfen
- sind CORS-Regeln für statische JSON-Dateien okay
- stimmen Dateinamen exakt mit dem Manifest überein
- bleibt `building-level.html` unter der finalen City-Domain erreichbar
- ersetzt ihr Platzhalter-Bilder später mit denselben Dateinamen
