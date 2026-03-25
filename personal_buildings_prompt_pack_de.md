# Inpinity City – Personal Buildings Prompt Pack

Dieses Paket ist auf euren Stil ausgerichtet: isometrische Sci‑fi/Fantasy-City-Assets mit klarer Fraktionssprache, sauberen Silhouetten und Level-Progession von L1 bis L7.

## 1. Grundregeln für alle Generierungen

- Einheitliche Kamera: immer dieselbe isometrische 3/4-Perspektive pro Gebäude.
- Einheitlicher Bildtyp: ein zentrales Gebäude pro Bild, keine UI, keine Schrift, keine Charaktere.
- Für NFT-Art: atmosphärischer, etwas filmischer.
- Für Web/UI: sauberer, ruhiger, leichter freizustellen.
- Für Level-Fortschritt: gleiche Seed-Familie je Gebäude + Fraktion verwenden und L2–L7 möglichst aus dem Vorlevel weiterentwickeln.

## 2. Master Prompts

### MASTER_NFT_STYLE

`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition`

### MASTER_UI_STYLE

`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition`

### FACTION_INPINITY

`Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere`

### FACTION_INPHINITY

`Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance`

### NEGATIVE_PROMPT

`people, character, crowd, vehicles, battle scene, explosions, smoke covering the building, text, letters, numbers, logo, UI frame, icon border, watermark, blurry image, low detail, muddy colors, multiple disconnected buildings, giant cityscape dominating the scene, cut off edges, cropped roof, distorted perspective, deformed architecture, duplicate parts`

## 3. Empfohlene Settings

- **aspect_ratio**: 1:1
- **camera**: same isometric 3/4 top-down camera for every level of the same building
- **seed_strategy**: keep one seed per building+faction, then evolve from L1 to L7 with image reference when possible
- **guidance**: medium to medium-high
- **detail_strategy**: increase complexity, height, lighting intensity, and prestige gradually from L1 to L7
- **background_strategy**: NFT variant may use subtle atmospheric backdrop; UI variant should stay cleaner and easier to cut out

## 4. Prompt-Struktur

Für alle Bilder gilt:

`FINAL_NFT_PROMPT = MASTER_NFT_STYLE + FACTION + LEVEL_DESCRIPTOR`

`FINAL_UI_PROMPT  = MASTER_UI_STYLE  + FACTION + LEVEL_DESCRIPTOR`

## 5. Alle Personal Buildings – der Reihe nach

## Residence

Prestige, showcase, gallery, trophy and legacy home.

### Level 1

**LEVEL_DESCRIPTOR**  
`Residence level 1, compact personal dwelling with one central dome, small entrance plaza, one visitor lounge, one display alcove, warm interior lights, starter prestige home`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 1, compact personal dwelling with one central dome, small entrance plaza, one visitor lounge, one display alcove, warm interior lights, starter prestige home`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 1, compact personal dwelling with one central dome, small entrance plaza, one visitor lounge, one display alcove, warm interior lights, starter prestige home`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 1, compact personal dwelling with one central dome, small entrance plaza, one visitor lounge, one display alcove, warm interior lights, starter prestige home`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 1, compact personal dwelling with one central dome, small entrance plaza, one visitor lounge, one display alcove, warm interior lights, starter prestige home`

### Level 2

**LEVEL_DESCRIPTOR**  
`Residence level 2, expanded dwelling with a second side wing, additional display windows, more refined facade, improved entry steps, stronger social-home presence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 2, expanded dwelling with a second side wing, additional display windows, more refined facade, improved entry steps, stronger social-home presence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 2, expanded dwelling with a second side wing, additional display windows, more refined facade, improved entry steps, stronger social-home presence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 2, expanded dwelling with a second side wing, additional display windows, more refined facade, improved entry steps, stronger social-home presence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 2, expanded dwelling with a second side wing, additional display windows, more refined facade, improved entry steps, stronger social-home presence`

### Level 3

**LEVEL_DESCRIPTOR**  
`Residence level 3, elegant residence with trophy wall gallery, small courtyard, visible display hall, prestige banners, first true collector-home identity`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 3, elegant residence with trophy wall gallery, small courtyard, visible display hall, prestige banners, first true collector-home identity`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 3, elegant residence with trophy wall gallery, small courtyard, visible display hall, prestige banners, first true collector-home identity`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 3, elegant residence with trophy wall gallery, small courtyard, visible display hall, prestige banners, first true collector-home identity`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 3, elegant residence with trophy wall gallery, small courtyard, visible display hall, prestige banners, first true collector-home identity`

### Level 4

**LEVEL_DESCRIPTOR**  
`Residence level 4, archive residence with data-vault annex, ceremonial entry arch, deeper heritage storage, stately facade, curated collectible atmosphere`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 4, archive residence with data-vault annex, ceremonial entry arch, deeper heritage storage, stately facade, curated collectible atmosphere`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 4, archive residence with data-vault annex, ceremonial entry arch, deeper heritage storage, stately facade, curated collectible atmosphere`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 4, archive residence with data-vault annex, ceremonial entry arch, deeper heritage storage, stately facade, curated collectible atmosphere`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 4, archive residence with data-vault annex, ceremonial entry arch, deeper heritage storage, stately facade, curated collectible atmosphere`

### Level 5

**LEVEL_DESCRIPTOR**  
`Residence level 5, gallery-ready manor, long glass exhibition wing, refined central dome, premium showcase halls, strong legacy presence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 5, gallery-ready manor, long glass exhibition wing, refined central dome, premium showcase halls, strong legacy presence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 5, gallery-ready manor, long glass exhibition wing, refined central dome, premium showcase halls, strong legacy presence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 5, gallery-ready manor, long glass exhibition wing, refined central dome, premium showcase halls, strong legacy presence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 5, gallery-ready manor, long glass exhibition wing, refined central dome, premium showcase halls, strong legacy presence`

### Level 6

**LEVEL_DESCRIPTOR**  
`Residence level 6, trophy-hall-ready estate, elevated central atrium, ceremonial banners, broader wings, richer lighting, elite prestige residence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 6, trophy-hall-ready estate, elevated central atrium, ceremonial banners, broader wings, richer lighting, elite prestige residence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 6, trophy-hall-ready estate, elevated central atrium, ceremonial banners, broader wings, richer lighting, elite prestige residence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 6, trophy-hall-ready estate, elevated central atrium, ceremonial banners, broader wings, richer lighting, elite prestige residence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 6, trophy-hall-ready estate, elevated central atrium, ceremonial banners, broader wings, richer lighting, elite prestige residence`

### Level 7

**LEVEL_DESCRIPTOR**  
`Residence level 7, legacy residence palace, grand multi-wing estate with monumental dome and prestige spire, integrated gallery and trophy halls, founder-level collectible showcase`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 7, legacy residence palace, grand multi-wing estate with monumental dome and prestige spire, integrated gallery and trophy halls, founder-level collectible showcase`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 7, legacy residence palace, grand multi-wing estate with monumental dome and prestige spire, integrated gallery and trophy halls, founder-level collectible showcase`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Residence level 7, legacy residence palace, grand multi-wing estate with monumental dome and prestige spire, integrated gallery and trophy halls, founder-level collectible showcase`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Residence level 7, legacy residence palace, grand multi-wing estate with monumental dome and prestige spire, integrated gallery and trophy halls, founder-level collectible showcase`


## Farming Hub

Timed farming booster, hydroponic production and claim support building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Farming Hub level 1, compact hydroponic farm module with greenhouse roof, irrigation tanks, grow trays, starter harvest control kiosk`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 1, compact hydroponic farm module with greenhouse roof, irrigation tanks, grow trays, starter harvest control kiosk`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 1, compact hydroponic farm module with greenhouse roof, irrigation tanks, grow trays, starter harvest control kiosk`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 1, compact hydroponic farm module with greenhouse roof, irrigation tanks, grow trays, starter harvest control kiosk`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 1, compact hydroponic farm module with greenhouse roof, irrigation tanks, grow trays, starter harvest control kiosk`

### Level 2

**LEVEL_DESCRIPTOR**  
`Farming Hub level 2, larger greenhouse with extended hydro lanes, improved pumps, crop lighting strips, more organized harvest workflow`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 2, larger greenhouse with extended hydro lanes, improved pumps, crop lighting strips, more organized harvest workflow`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 2, larger greenhouse with extended hydro lanes, improved pumps, crop lighting strips, more organized harvest workflow`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 2, larger greenhouse with extended hydro lanes, improved pumps, crop lighting strips, more organized harvest workflow`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 2, larger greenhouse with extended hydro lanes, improved pumps, crop lighting strips, more organized harvest workflow`

### Level 3

**LEVEL_DESCRIPTOR**  
`Farming Hub level 3, specialization-ready agro hub with branching grow pods, small claim station, efficient irrigation grid, clear production upgrade`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 3, specialization-ready agro hub with branching grow pods, small claim station, efficient irrigation grid, clear production upgrade`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 3, specialization-ready agro hub with branching grow pods, small claim station, efficient irrigation grid, clear production upgrade`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 3, specialization-ready agro hub with branching grow pods, small claim station, efficient irrigation grid, clear production upgrade`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 3, specialization-ready agro hub with branching grow pods, small claim station, efficient irrigation grid, clear production upgrade`

### Level 4

**LEVEL_DESCRIPTOR**  
`Farming Hub level 4, multi-module farming complex with linked greenhouse units, raised hydro channels, harvest routing node, stronger production footprint`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 4, multi-module farming complex with linked greenhouse units, raised hydro channels, harvest routing node, stronger production footprint`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 4, multi-module farming complex with linked greenhouse units, raised hydro channels, harvest routing node, stronger production footprint`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 4, multi-module farming complex with linked greenhouse units, raised hydro channels, harvest routing node, stronger production footprint`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 4, multi-module farming complex with linked greenhouse units, raised hydro channels, harvest routing node, stronger production footprint`

### Level 5

**LEVEL_DESCRIPTOR**  
`Farming Hub level 5, advanced agri center with storage silos, claim buffer chamber, extended grow arrays, serious economic utility`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 5, advanced agri center with storage silos, claim buffer chamber, extended grow arrays, serious economic utility`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 5, advanced agri center with storage silos, claim buffer chamber, extended grow arrays, serious economic utility`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 5, advanced agri center with storage silos, claim buffer chamber, extended grow arrays, serious economic utility`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 5, advanced agri center with storage silos, claim buffer chamber, extended grow arrays, serious economic utility`

### Level 6

**LEVEL_DESCRIPTOR**  
`Farming Hub level 6, high-output chain farming complex with vertical grow towers, strong irrigation lattice, longer boost infrastructure, premium agricultural design`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 6, high-output chain farming complex with vertical grow towers, strong irrigation lattice, longer boost infrastructure, premium agricultural design`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 6, high-output chain farming complex with vertical grow towers, strong irrigation lattice, longer boost infrastructure, premium agricultural design`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 6, high-output chain farming complex with vertical grow towers, strong irrigation lattice, longer boost infrastructure, premium agricultural design`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 6, high-output chain farming complex with vertical grow towers, strong irrigation lattice, longer boost infrastructure, premium agricultural design`

### Level 7

**LEVEL_DESCRIPTOR**  
`Farming Hub level 7, peak farming nexus, vast hydroponic command complex with control tower, chained greenhouse network, elite production architecture`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 7, peak farming nexus, vast hydroponic command complex with control tower, chained greenhouse network, elite production architecture`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 7, peak farming nexus, vast hydroponic command complex with control tower, chained greenhouse network, elite production architecture`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Farming Hub level 7, peak farming nexus, vast hydroponic command complex with control tower, chained greenhouse network, elite production architecture`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Farming Hub level 7, peak farming nexus, vast hydroponic command complex with control tower, chained greenhouse network, elite production architecture`


## Forge

Crafting, creator, recipe and quality building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Forge level 1, compact crafting workshop with a single furnace core, one chimney, tool bench, starter smithy silhouette`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 1, compact crafting workshop with a single furnace core, one chimney, tool bench, starter smithy silhouette`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 1, compact crafting workshop with a single furnace core, one chimney, tool bench, starter smithy silhouette`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 1, compact crafting workshop with a single furnace core, one chimney, tool bench, starter smithy silhouette`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 1, compact crafting workshop with a single furnace core, one chimney, tool bench, starter smithy silhouette`

### Level 2

**LEVEL_DESCRIPTOR**  
`Forge level 2, expanded smithy with second work bay, stronger furnace housing, extra chimney vents, better crafting infrastructure`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 2, expanded smithy with second work bay, stronger furnace housing, extra chimney vents, better crafting infrastructure`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 2, expanded smithy with second work bay, stronger furnace housing, extra chimney vents, better crafting infrastructure`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 2, expanded smithy with second work bay, stronger furnace housing, extra chimney vents, better crafting infrastructure`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 2, expanded smithy with second work bay, stronger furnace housing, extra chimney vents, better crafting infrastructure`

### Level 3

**LEVEL_DESCRIPTOR**  
`Forge level 3, specialization-ready forge with modular annex, hotter central core, precise workstations, early weapon relic component crafting identity`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 3, specialization-ready forge with modular annex, hotter central core, precise workstations, early weapon relic component crafting identity`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 3, specialization-ready forge with modular annex, hotter central core, precise workstations, early weapon relic component crafting identity`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 3, specialization-ready forge with modular annex, hotter central core, precise workstations, early weapon relic component crafting identity`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 3, specialization-ready forge with modular annex, hotter central core, precise workstations, early weapon relic component crafting identity`

### Level 4

**LEVEL_DESCRIPTOR**  
`Forge level 4, advanced forge with rare-material crucibles, component racks, reinforced vents, deeper industrial fantasy craftsmanship`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 4, advanced forge with rare-material crucibles, component racks, reinforced vents, deeper industrial fantasy craftsmanship`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 4, advanced forge with rare-material crucibles, component racks, reinforced vents, deeper industrial fantasy craftsmanship`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 4, advanced forge with rare-material crucibles, component racks, reinforced vents, deeper industrial fantasy craftsmanship`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 4, advanced forge with rare-material crucibles, component racks, reinforced vents, deeper industrial fantasy craftsmanship`

### Level 5

**LEVEL_DESCRIPTOR**  
`Forge level 5, elite creation hall with mechanical support arms, intense furnace chamber, unique craft focus, premium artisanal power`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 5, elite creation hall with mechanical support arms, intense furnace chamber, unique craft focus, premium artisanal power`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 5, elite creation hall with mechanical support arms, intense furnace chamber, unique craft focus, premium artisanal power`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 5, elite creation hall with mechanical support arms, intense furnace chamber, unique craft focus, premium artisanal power`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 5, elite creation hall with mechanical support arms, intense furnace chamber, unique craft focus, premium artisanal power`

### Level 6

**LEVEL_DESCRIPTOR**  
`Forge level 6, high-efficiency forge complex with quality-control chamber, refined metalwork architecture, stronger provenance-crafting aura`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 6, high-efficiency forge complex with quality-control chamber, refined metalwork architecture, stronger provenance-crafting aura`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 6, high-efficiency forge complex with quality-control chamber, refined metalwork architecture, stronger provenance-crafting aura`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 6, high-efficiency forge complex with quality-control chamber, refined metalwork architecture, stronger provenance-crafting aura`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 6, high-efficiency forge complex with quality-control chamber, refined metalwork architecture, stronger provenance-crafting aura`

### Level 7

**LEVEL_DESCRIPTOR**  
`Forge level 7, master forge citadel with towering furnace spire, multiple specialized wings, creator-grade craftsmanship, legendary premium workshop`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 7, master forge citadel with towering furnace spire, multiple specialized wings, creator-grade craftsmanship, legendary premium workshop`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 7, master forge citadel with towering furnace spire, multiple specialized wings, creator-grade craftsmanship, legendary premium workshop`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Forge level 7, master forge citadel with towering furnace spire, multiple specialized wings, creator-grade craftsmanship, legendary premium workshop`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Forge level 7, master forge citadel with towering furnace spire, multiple specialized wings, creator-grade craftsmanship, legendary premium workshop`


## Warehouse

Storage, vault, logistics, protection, decay and repair prep building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Warehouse level 1, sturdy storage depot with secure door, stacked containers, resource crates, practical starter logistics structure`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 1, sturdy storage depot with secure door, stacked containers, resource crates, practical starter logistics structure`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 1, sturdy storage depot with secure door, stacked containers, resource crates, practical starter logistics structure`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 1, sturdy storage depot with secure door, stacked containers, resource crates, practical starter logistics structure`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 1, sturdy storage depot with secure door, stacked containers, resource crates, practical starter logistics structure`

### Level 2

**LEVEL_DESCRIPTOR**  
`Warehouse level 2, larger storage warehouse with expanded cargo bays, more containers, stronger support beams, improved capacity silhouette`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 2, larger storage warehouse with expanded cargo bays, more containers, stronger support beams, improved capacity silhouette`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 2, larger storage warehouse with expanded cargo bays, more containers, stronger support beams, improved capacity silhouette`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 2, larger storage warehouse with expanded cargo bays, more containers, stronger support beams, improved capacity silhouette`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 2, larger storage warehouse with expanded cargo bays, more containers, stronger support beams, improved capacity silhouette`

### Level 3

**LEVEL_DESCRIPTOR**  
`Warehouse level 3, yield-ready warehouse with first vault room, reserve tanks, repair gantry cues, early secure logistics identity`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 3, yield-ready warehouse with first vault room, reserve tanks, repair gantry cues, early secure logistics identity`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 3, yield-ready warehouse with first vault room, reserve tanks, repair gantry cues, early secure logistics identity`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 3, yield-ready warehouse with first vault room, reserve tanks, repair gantry cues, early secure logistics identity`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 3, yield-ready warehouse with first vault room, reserve tanks, repair gantry cues, early secure logistics identity`

### Level 4

**LEVEL_DESCRIPTOR**  
`Warehouse level 4, fortified vault warehouse with thicker walls, loading platform, stronger reserve chambers, serious protection feel`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 4, fortified vault warehouse with thicker walls, loading platform, stronger reserve chambers, serious protection feel`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 4, fortified vault warehouse with thicker walls, loading platform, stronger reserve chambers, serious protection feel`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 4, fortified vault warehouse with thicker walls, loading platform, stronger reserve chambers, serious protection feel`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 4, fortified vault warehouse with thicker walls, loading platform, stronger reserve chambers, serious protection feel`

### Level 5

**LEVEL_DESCRIPTOR**  
`Warehouse level 5, trade-depot-grade warehouse with protected vault wing, organized resource lanes, secure reserve blocks, high utility presence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 5, trade-depot-grade warehouse with protected vault wing, organized resource lanes, secure reserve blocks, high utility presence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 5, trade-depot-grade warehouse with protected vault wing, organized resource lanes, secure reserve blocks, high utility presence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 5, trade-depot-grade warehouse with protected vault wing, organized resource lanes, secure reserve blocks, high utility presence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 5, trade-depot-grade warehouse with protected vault wing, organized resource lanes, secure reserve blocks, high utility presence`

### Level 6

**LEVEL_DESCRIPTOR**  
`Warehouse level 6, high-efficiency logistics fortress with layered storage modules, repair infrastructure, reinforced safety systems, premium industrial order`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 6, high-efficiency logistics fortress with layered storage modules, repair infrastructure, reinforced safety systems, premium industrial order`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 6, high-efficiency logistics fortress with layered storage modules, repair infrastructure, reinforced safety systems, premium industrial order`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 6, high-efficiency logistics fortress with layered storage modules, repair infrastructure, reinforced safety systems, premium industrial order`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 6, high-efficiency logistics fortress with layered storage modules, repair infrastructure, reinforced safety systems, premium industrial order`

### Level 7

**LEVEL_DESCRIPTOR**  
`Warehouse level 7, master vault fortress warehouse with monumental central vault, merchant-fortress hybrid design, maximum storage authority`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 7, master vault fortress warehouse with monumental central vault, merchant-fortress hybrid design, maximum storage authority`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 7, master vault fortress warehouse with monumental central vault, merchant-fortress hybrid design, maximum storage authority`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Warehouse level 7, master vault fortress warehouse with monumental central vault, merchant-fortress hybrid design, maximum storage authority`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Warehouse level 7, master vault fortress warehouse with monumental central vault, merchant-fortress hybrid design, maximum storage authority`


## Market Stall

Marketplace access, listing rights, visibility and merchant prestige building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Market Stall level 1, premium starter trade kiosk with awning, small counter, curated display shelves, charming commerce atmosphere`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 1, premium starter trade kiosk with awning, small counter, curated display shelves, charming commerce atmosphere`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 1, premium starter trade kiosk with awning, small counter, curated display shelves, charming commerce atmosphere`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 1, premium starter trade kiosk with awning, small counter, curated display shelves, charming commerce atmosphere`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 1, premium starter trade kiosk with awning, small counter, curated display shelves, charming commerce atmosphere`

### Level 2

**LEVEL_DESCRIPTOR**  
`Market Stall level 2, expanded stall with second counter, stronger canopy structure, extra listing displays, more active merchant silhouette`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 2, expanded stall with second counter, stronger canopy structure, extra listing displays, more active merchant silhouette`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 2, expanded stall with second counter, stronger canopy structure, extra listing displays, more active merchant silhouette`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 2, expanded stall with second counter, stronger canopy structure, extra listing displays, more active merchant silhouette`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 2, expanded stall with second counter, stronger canopy structure, extra listing displays, more active merchant silhouette`

### Level 3

**LEVEL_DESCRIPTOR**  
`Market Stall level 3, specialization-ready market house with several booths, category display sections, improved trade frontage`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 3, specialization-ready market house with several booths, category display sections, improved trade frontage`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 3, specialization-ready market house with several booths, category display sections, improved trade frontage`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 3, specialization-ready market house with several booths, category display sections, improved trade frontage`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 3, specialization-ready market house with several booths, category display sections, improved trade frontage`

### Level 4

**LEVEL_DESCRIPTOR**  
`Market Stall level 4, advanced exchange hall with multiple storefront modules, listing-board architecture, richer commercial layout`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 4, advanced exchange hall with multiple storefront modules, listing-board architecture, richer commercial layout`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 4, advanced exchange hall with multiple storefront modules, listing-board architecture, richer commercial layout`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 4, advanced exchange hall with multiple storefront modules, listing-board architecture, richer commercial layout`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 4, advanced exchange hall with multiple storefront modules, listing-board architecture, richer commercial layout`

### Level 5

**LEVEL_DESCRIPTOR**  
`Market Stall level 5, rare-goods pavilion with premium display cases, refined merchant decor, elevated economic prestige`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 5, rare-goods pavilion with premium display cases, refined merchant decor, elevated economic prestige`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 5, rare-goods pavilion with premium display cases, refined merchant decor, elevated economic prestige`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 5, rare-goods pavilion with premium display cases, refined merchant decor, elevated economic prestige`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 5, rare-goods pavilion with premium display cases, refined merchant decor, elevated economic prestige`

### Level 6

**LEVEL_DESCRIPTOR**  
`Market Stall level 6, elite bazaar node with visibility tower, luxury storefront details, high-end trade authority, strong premium market presence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 6, elite bazaar node with visibility tower, luxury storefront details, high-end trade authority, strong premium market presence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 6, elite bazaar node with visibility tower, luxury storefront details, high-end trade authority, strong premium market presence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 6, elite bazaar node with visibility tower, luxury storefront details, high-end trade authority, strong premium market presence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 6, elite bazaar node with visibility tower, luxury storefront details, high-end trade authority, strong premium market presence`

### Level 7

**LEVEL_DESCRIPTOR**  
`Market Stall level 7, merchant house prestige exchange, grand trade lodge with ceremonial frontage, premier commercial landmark`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 7, merchant house prestige exchange, grand trade lodge with ceremonial frontage, premier commercial landmark`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 7, merchant house prestige exchange, grand trade lodge with ceremonial frontage, premier commercial landmark`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Market Stall level 7, merchant house prestige exchange, grand trade lodge with ceremonial frontage, premier commercial landmark`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Market Stall level 7, merchant house prestige exchange, grand trade lodge with ceremonial frontage, premier commercial landmark`


## Guard Tower

Defense, radar, shield and mercenary-branch building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Guard Tower level 1, compact defense outpost with watch platform, armored base, light turret or guard beacon, clear protective role`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 1, compact defense outpost with watch platform, armored base, light turret or guard beacon, clear protective role`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 1, compact defense outpost with watch platform, armored base, light turret or guard beacon, clear protective role`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 1, compact defense outpost with watch platform, armored base, light turret or guard beacon, clear protective role`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 1, compact defense outpost with watch platform, armored base, light turret or guard beacon, clear protective role`

### Level 2

**LEVEL_DESCRIPTOR**  
`Guard Tower level 2, stronger defense tower with thicker armor, reinforced battlements, heavier support legs, upgraded security posture`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 2, stronger defense tower with thicker armor, reinforced battlements, heavier support legs, upgraded security posture`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 2, stronger defense tower with thicker armor, reinforced battlements, heavier support legs, upgraded security posture`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 2, stronger defense tower with thicker armor, reinforced battlements, heavier support legs, upgraded security posture`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 2, stronger defense tower with thicker armor, reinforced battlements, heavier support legs, upgraded security posture`

### Level 3

**LEVEL_DESCRIPTOR**  
`Guard Tower level 3, radar-ready tower with visible sensor dish, scanning antenna, advanced watch structure, tactical upgrade feel`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 3, radar-ready tower with visible sensor dish, scanning antenna, advanced watch structure, tactical upgrade feel`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 3, radar-ready tower with visible sensor dish, scanning antenna, advanced watch structure, tactical upgrade feel`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 3, radar-ready tower with visible sensor dish, scanning antenna, advanced watch structure, tactical upgrade feel`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 3, radar-ready tower with visible sensor dish, scanning antenna, advanced watch structure, tactical upgrade feel`

### Level 4

**LEVEL_DESCRIPTOR**  
`Guard Tower level 4, specialized defense tower with shield emitters, heavier defensive plating, command access module, real fortress energy`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 4, specialized defense tower with shield emitters, heavier defensive plating, command access module, real fortress energy`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 4, specialized defense tower with shield emitters, heavier defensive plating, command access module, real fortress energy`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 4, specialized defense tower with shield emitters, heavier defensive plating, command access module, real fortress energy`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 4, specialized defense tower with shield emitters, heavier defensive plating, command access module, real fortress energy`

### Level 5

**LEVEL_DESCRIPTOR**  
`Guard Tower level 5, mercenary-command-ready bastion with tactical annex, defense control deck, stronger raid mitigation presence`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 5, mercenary-command-ready bastion with tactical annex, defense control deck, stronger raid mitigation presence`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 5, mercenary-command-ready bastion with tactical annex, defense control deck, stronger raid mitigation presence`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 5, mercenary-command-ready bastion with tactical annex, defense control deck, stronger raid mitigation presence`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 5, mercenary-command-ready bastion with tactical annex, defense control deck, stronger raid mitigation presence`

### Level 6

**LEVEL_DESCRIPTOR**  
`Guard Tower level 6, shield-support tower with dual-tier structure, energy barrier projectors, powerful surveillance silhouette`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 6, shield-support tower with dual-tier structure, energy barrier projectors, powerful surveillance silhouette`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 6, shield-support tower with dual-tier structure, energy barrier projectors, powerful surveillance silhouette`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 6, shield-support tower with dual-tier structure, energy barrier projectors, powerful surveillance silhouette`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 6, shield-support tower with dual-tier structure, energy barrier projectors, powerful surveillance silhouette`

### Level 7

**LEVEL_DESCRIPTOR**  
`Guard Tower level 7, bastion peak citadel with integrated radar crown, shield generators, elite defensive architecture, imposing strategic landmark`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 7, bastion peak citadel with integrated radar crown, shield generators, elite defensive architecture, imposing strategic landmark`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 7, bastion peak citadel with integrated radar crown, shield generators, elite defensive architecture, imposing strategic landmark`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Guard Tower level 7, bastion peak citadel with integrated radar crown, shield generators, elite defensive architecture, imposing strategic landmark`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Guard Tower level 7, bastion peak citadel with integrated radar crown, shield generators, elite defensive architecture, imposing strategic landmark`


## Research Lab

Tech, discovery, blueprint and advanced creation building.

### Level 1

**LEVEL_DESCRIPTOR**  
`Research Lab level 1, compact laboratory dome with data antenna, observation windows, starter experiment chamber, clean science identity`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 1, compact laboratory dome with data antenna, observation windows, starter experiment chamber, clean science identity`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 1, compact laboratory dome with data antenna, observation windows, starter experiment chamber, clean science identity`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 1, compact laboratory dome with data antenna, observation windows, starter experiment chamber, clean science identity`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 1, compact laboratory dome with data antenna, observation windows, starter experiment chamber, clean science identity`

### Level 2

**LEVEL_DESCRIPTOR**  
`Research Lab level 2, expanded lab with side archive pod, more scanners, better data access, library-science atmosphere`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 2, expanded lab with side archive pod, more scanners, better data access, library-science atmosphere`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 2, expanded lab with side archive pod, more scanners, better data access, library-science atmosphere`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 2, expanded lab with side archive pod, more scanners, better data access, library-science atmosphere`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 2, expanded lab with side archive pod, more scanners, better data access, library-science atmosphere`

### Level 3

**LEVEL_DESCRIPTOR**  
`Research Lab level 3, combo-unlock research complex with multiple domes, blueprint console wing, advanced discovery silhouette`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 3, combo-unlock research complex with multiple domes, blueprint console wing, advanced discovery silhouette`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 3, combo-unlock research complex with multiple domes, blueprint console wing, advanced discovery silhouette`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 3, combo-unlock research complex with multiple domes, blueprint console wing, advanced discovery silhouette`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 3, combo-unlock research complex with multiple domes, blueprint console wing, advanced discovery silhouette`

### Level 4

**LEVEL_DESCRIPTOR**  
`Research Lab level 4, advanced creation lab with experimental chambers, precision instruments, stronger techno-arcane innovation identity`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 4, advanced creation lab with experimental chambers, precision instruments, stronger techno-arcane innovation identity`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 4, advanced creation lab with experimental chambers, precision instruments, stronger techno-arcane innovation identity`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 4, advanced creation lab with experimental chambers, precision instruments, stronger techno-arcane innovation identity`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 4, advanced creation lab with experimental chambers, precision instruments, stronger techno-arcane innovation identity`

### Level 5

**LEVEL_DESCRIPTOR**  
`Research Lab level 5, specialized discovery institute with blueprint vaults, enchantment-ready chambers, premium research authority`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 5, specialized discovery institute with blueprint vaults, enchantment-ready chambers, premium research authority`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 5, specialized discovery institute with blueprint vaults, enchantment-ready chambers, premium research authority`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 5, specialized discovery institute with blueprint vaults, enchantment-ready chambers, premium research authority`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 5, specialized discovery institute with blueprint vaults, enchantment-ready chambers, premium research authority`

### Level 6

**LEVEL_DESCRIPTOR**  
`Research Lab level 6, high-end research campus with rare energy cores, active scan towers, deeper experimental prestige`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 6, high-end research campus with rare energy cores, active scan towers, deeper experimental prestige`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 6, high-end research campus with rare energy cores, active scan towers, deeper experimental prestige`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 6, high-end research campus with rare energy cores, active scan towers, deeper experimental prestige`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 6, high-end research campus with rare energy cores, active scan towers, deeper experimental prestige`

### Level 7

**LEVEL_DESCRIPTOR**  
`Research Lab level 7, master research lab, grand techno-arcane institute with dominant central dome, multiple discovery wings, elite innovation landmark`

**NFT Prompt – Inpinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 7, master research lab, grand techno-arcane institute with dominant central dome, multiple discovery wings, elite innovation landmark`

**NFT Prompt – Inphinity**  
`premium game-ready NFT illustration of a single isometric sci-fi fantasy building, 3/4 top-down view, centered composition, placed on a compact stone-tech platform, highly readable silhouette, intricate architectural detail, cinematic lighting, polished materials, collectible city-builder art, subtle atmosphere, clean framing, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 7, master research lab, grand techno-arcane institute with dominant central dome, multiple discovery wings, elite innovation landmark`

**UI Prompt – Inpinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inpinity faction style, advanced elegant civilization, cobalt blue and cyan energy, silver alloy, white stone, glass panels, cool luminous accents, refined clean geometry, hopeful futuristic atmosphere, Research Lab level 7, master research lab, grand techno-arcane institute with dominant central dome, multiple discovery wings, elite innovation landmark`

**UI Prompt – Inphinity**  
`clean game asset render of a single isometric sci-fi fantasy building, 3/4 top-down view, centered, isolated structure on a compact stone-tech platform, crisp readable silhouette, controlled detail, neutral presentation for web interface, soft shadow, minimal background, no characters, no text, no logos, no UI, no watermark, square composition, Inphinity faction style, aggressive frontier civilization, obsidian black, crimson red, volcanic orange energy, dark steel, copper accents, heated industrial atmosphere, sharper angular geometry, powerful intimidating elegance, Research Lab level 7, master research lab, grand techno-arcane institute with dominant central dome, multiple discovery wings, elite innovation landmark`


## 6. Empfohlene Dateinamen

Beispielstruktur:

```
public/assets/images/personal-buildings/residence/inpinity/l1-nft.png
public/assets/images/personal-buildings/residence/inpinity/l1-ui.png
public/assets/images/personal-buildings/residence/inphinity/l1-nft.png
public/assets/images/personal-buildings/residence/inphinity/l1-ui.png
```

Dasselbe Muster dann für alle Slugs: `residence`, `farming-hub`, `forge`, `warehouse`, `market-stall`, `guard-tower`, `research-lab`.

## 7. Wichtiger Produktionshinweis

Nicht die komplette UI aus dem Referenzbild mitgenerieren. Das UI sollte später im HTML/CSS sitzen. Für die NFT- und Web-Assets besser nur die Gebäude generieren, damit die Darstellung im Interface sauber steuerbar bleibt.
