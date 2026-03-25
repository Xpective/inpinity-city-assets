# Upload-Reihenfolge – Forge

1. `prompts/forge-l1-l7.md` und `prompts/forge-l1-l7.json` ins Repo legen.
2. Die 14 Bilder nach den Pfaden in `docs/forge-image-paths.md` hochladen.
3. Danach die 14 Metadata-Dateien unter `public/assets/metadata/personal-buildings/forge/...` hochladen.
4. Optional `public/assets/manifests/forge-levels.json` als fokussierten Test-Manifest nutzen.
5. Interface testen mit:

```
building-level.html?building=forge&faction=inpinity&level=1
building-level.html?building=forge&faction=inphinity&level=7
```

Empfehlung: erst Inpinity L1–L7 generieren, danach Inphinity L1–L7 spiegeln.
