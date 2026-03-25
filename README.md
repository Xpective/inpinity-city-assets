# inpinity-city-assets — Starter Seed

Dieses Paket ist als erster Inhalt für das GitHub-Repo `Xpective/inpinity-city-assets` gedacht.

Es liefert dir direkt einen sauberen Start für drei Ebenen:

- **NFT-Assets** für die 7 Personal Buildings in zwei Faction-Varianten
- **Metadata + URI-Struktur** für Cloudflare / R2 / Subdomain-Auslieferung
- **statische HTML-Demo** für den Flow `City Key -> Faction -> Residence/Building UI`

## Was schon drin ist

- `public/assets/images/personal-buildings/`  
  14 Startgrafiken für die 7 Buildings in `inpinity` und `inphinity`
- `public/assets/metadata/personal-buildings/`  
  Beispiel-Metadata für NFT-URIs
- `public/assets/abis/city-core/`  
  CityConfig / Registry / Land / Districts / Status / History / Validation
- `public/assets/abis/ecosystem/`  
  InpinityNFT / ResourceToken / INPI / Pitrone / FarmingV6 / PiratesV6 / MercenaryV4 / PartnershipV2
- `public/index.html`  
  Starter-Übersicht mit Building-Karten
- `public/building.html`  
  bildhafte Detailseite pro Building
- `prompts/personal-buildings/`  
  Prompt-Dateien, damit wir die finalen Bildgenerationen gemeinsam schrittweise verfeinern können
- `docs/`  
  Cloudflare-, GitHub-, Repo-Fill- und Asset-Routing-Hinweise

## Schnell lokal testen

```bash
cd public
python3 -m http.server 8787
```

Dann öffnen:

- `http://localhost:8787`
- `http://localhost:8787/building.html?building=residence&faction=inpinity`

## Empfohlene Live-Struktur

- App/UI: `https://city.inpinity.online`
- Assets: `https://assets.inpinity.online/city/...`

Beispiele:

- Image: `https://assets.inpinity.online/city/images/buildings/personal/residence-inpinity.png`
- Metadata: `https://assets.inpinity.online/city/metadata/buildings/personal/residence-inpinity.json`

## Wichtige Regel

- **CityBuildingNFTV1** = Asset-/Identity-/URI-Schicht
- **PersonalBuildings** = Gameplay-/Logic-Schicht

Nicht vermischen.

## Empfohlener nächster Git-Schritt

Falls du dieses Paket direkt in das neue Repo legen willst:

```bash
git clone https://github.com/Xpective/inpinity-city-assets.git
cd inpinity-city-assets
# dann den Inhalt dieses Starter-Pakets hineinkopieren
# danach:
git add .
git commit -m "seed personal buildings asset structure"
git push origin main
```
