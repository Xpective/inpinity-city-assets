# Cloudflare / R2 / Subdomain Plan

## Ziel

Die NFT-Bilder und Metadata sollen unter einer stabilen Asset-Domain liegen, getrennt von der App-Oberfläche.

## Empfohlen

- **App**: `city.inpinity.online`
- **Assets**: `assets.inpinity.online/city/...`

## R2 Bucket Struktur

```text
city-assets/
  city/
    images/
      buildings/
        personal/
          residence-inpinity.png
          residence-inphinity.png
          ...
    metadata/
      buildings/
        personal/
          residence-inpinity.json
          residence-inphinity.json
          ...
```

## Empfehlung

Wenn `assets.inpinity.online` bereits für `city/metadata/weapons/` genutzt wird, dann dieselbe Domain weiterverwenden und nur den Pfad für `city/images/buildings/` und `city/metadata/buildings/` ergänzen.

## Upload-Reihenfolge

1. `public/assets/images/personal-buildings/*`
2. `public/assets/metadata/personal-buildings/*`
3. Contract-Metadata testen
4. Erst danach NFT-URI im Contract setzen

## Beispiel-Mapping

- local `public/assets/images/personal-buildings/forge-inpinity.png`
- remote `https://assets.inpinity.online/city/images/buildings/personal/forge-inpinity.png`

- local `public/assets/metadata/personal-buildings/forge-inpinity.json`
- remote `https://assets.inpinity.online/city/metadata/buildings/personal/forge-inpinity.json`
