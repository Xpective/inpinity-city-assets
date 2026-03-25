# Inpinity City Assets

Asset- und Interface-Repository für die **Personal Buildings** von **Inpinity City**.

Dieses Repo dient als zentrale Quelle für:

- statische **NFT-Bilder**
- **Level-Metadaten** für Personal Buildings
- **Gallery- und Detailseiten** für das Web-Interface
- **Manifeste** zur Zuordnung von Building, Fraktion und Level
- **ABI-/Contract-Referenzen** für die City- und Ecosystem-Anbindung
- **Prompt-Sammlungen** zur schrittweisen Bildgenerierung

---

## Ziel des Repos

Die Personal Buildings von Inpinity City sollen:

- visuell als **NFTs** funktionieren
- im **Web-Interface** automatisch je nach Building / Fraktion / Level angezeigt werden
- später sauber mit den bestehenden **City Contracts**, **ABIs** und **Metadata-URIs** zusammenarbeiten
- über eine eigene Asset-Domain wie z. B. `assets.inpinity.online` ausgeliefert werden

Dieses Repo ist also die **Asset-, Metadata- und Frontend-Schicht** für die City-Buildings.

---

## Aktueller Fokus

Der aktuelle Schwerpunkt liegt auf den **7 Personal Buildings**:

1. Residence
2. Farming Hub
3. Forge
4. Warehouse
5. Market Stall
6. Guard Tower
7. Research Lab

Für jedes Building sind vorbereitet:

- **2 Fraktionen**
  - Inpinity
  - Inphinity
- **7 Level**
  - Level 1 bis Level 7
- strukturierte Pfade für:
  - Bilder
  - Metadaten
  - Manifeste
  - Prompts

Das ergibt insgesamt:

- **7 Buildings**
- **2 Fraktionen**
- **7 Level**
- = **98 Varianten**

---

## Repo-Struktur

```text
inpinity-city-assets/
├─ cloudflare/
├─ docs/
├─ prompts/
│  ├─ residence/
│  ├─ farming-hub/
│  ├─ forge/
│  ├─ warehouse/
│  ├─ market-stall/
│  ├─ guard-tower/
│  ├─ research-lab/
│  └─ personal-buildings/
├─ public/
│  ├─ index.html
│  ├─ building-level.html
│  └─ assets/
│     ├─ abis/
│     │  ├─ city-core/
│     │  └─ ecosystem/
│     ├─ css/
│     ├─ js/
│     ├─ images/
│     │  └─ personal-buildings/
│     │     ├─ residence/
│     │     ├─ farming-hub/
│     │     ├─ forge/
│     │     ├─ warehouse/
│     │     ├─ market-stall/
│     │     ├─ guard-tower/
│     │     └─ research-lab/
│     ├─ manifests/
│     └─ metadata/
│        └─ personal-buildings/
├─ scripts/
├─ package.json
└─ README.md