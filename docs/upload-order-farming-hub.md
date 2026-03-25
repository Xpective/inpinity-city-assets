# Upload-Reihenfolge – Farming Hub

1. `prompts/farming-hub-l1-l7.md` und `prompts/farming-hub-l1-l7.json` ins Repo legen.
2. Die 14 Bilder nach den Pfaden in `docs/farming-hub-image-paths.md` hochladen.
3. Danach die 14 Metadata-Dateien unter `public/assets/metadata/personal-buildings/farming-hub/...` hochladen.
4. Optional `public/assets/manifests/farming-hub-levels.json` als fokussierten Test-Manifest nutzen.
5. Interface testen mit:

```
building-level.html?building=farming-hub&faction=inpinity&level=1
building-level.html?building=farming-hub&faction=inphinity&level=7
```

Empfehlung: erst Inpinity L1–L7 generieren, dann Inphinity L1–L7 spiegeln.