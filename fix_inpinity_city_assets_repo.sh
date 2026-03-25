#!/usr/bin/env bash
set -euo pipefail

# Run from repo root: Xpective/inpinity-city-assets
# Usage:
#   bash fix_inpinity_city_assets_repo.sh

if [[ ! -f package.json || ! -d public || ! -d public/assets ]]; then
  echo "Bitte aus dem Repo-Root von inpinity-city-assets ausführen."
  exit 1
fi

mkdir -p public/assets/images/personal-buildings/residence/inpinity
mkdir -p public/assets/images/personal-buildings/residence/inphinity
mkdir -p public/assets/metadata/personal-buildings/residence/inpinity
mkdir -p public/assets/metadata/personal-buildings/residence/inphinity
mkdir -p public/assets/manifests
mkdir -p public/assets/js

# 1) Detail page an die Root verschieben, damit building-level.html?... wirklich existiert.
if [[ -f public/assets/building-level.html && ! -f public/building-level.html ]]; then
  mv public/assets/building-level.html public/building-level.html
fi

# 2) Residence-Bilder aus der alten Starter-Struktur in die neue Level-Struktur umziehen.
legacy_inpinity_dir="public/assets/images/personal-buildings/personal/inpinity"
if [[ -d "$legacy_inpinity_dir" ]]; then
  declare -A MAP=(
    [residence-inpinity-l1.png]=level-1.png
    [residence-inpinity-l2.png]=level-2.png
    [residence-inpinity-l3.png]=level-3.png
    [residence-inpinity-l4.png]=level-4.png
    [residence-inpinity-l5.png]=level-5.png
    [residence-inpinity-l6.png]=level-6.png
    [residence-inpinity-l7.png]=level-7.png
  )
  for src in "${!MAP[@]}"; do
    if [[ -f "$legacy_inpinity_dir/$src" ]]; then
      mv "$legacy_inpinity_dir/$src" "public/assets/images/personal-buildings/residence/inpinity/${MAP[$src]}"
    fi
  done
  rm -f "$legacy_inpinity_dir/residence-inpinity-l7-alt.png"
fi

touch public/assets/images/personal-buildings/residence/inphinity/.gitkeep

# 3) Alte Legacy-Dateien umbenennen, damit die neue Level-UI gewinnt.
if [[ -f public/building.html ]]; then
  mv public/building.html public/building-legacy.html
fi
if [[ -f public/assets/manifests/personal-buildings.json ]]; then
  mv public/assets/manifests/personal-buildings.json public/assets/manifests/personal-buildings.legacy.json
fi

# 4) Detailseite so vereinfachen, dass sie nur noch shared.js + building-level.js braucht.
cat > public/building-level.html <<'HTML'
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title id="pageTitle">Building Level</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div id="app" class="container">
    <section class="hero">
      <a class="badge" href="index.html">← zurück zur Übersicht</a>
      <div class="hero-asset" style="margin-top:18px">
        <div id="heroImageWrap" class="hero-image"></div>
        <div class="panel">
          <small class="kicker">Personal Building / Level Detail View</small>
          <h1 id="buildingName">Residence</h1>
          <div class="lead">
            <div id="buildingTagline"></div>
            <div id="buildingDescription"></div>
          </div>
          <div class="chip-row" style="margin:18px 0">
            <span class="chip" id="factionChip">Inpinity</span>
            <span class="chip" id="levelChip">Level 1</span>
            <span class="chip" id="roleChip">Role</span>
          </div>
          <h2 id="pageSubtitle" style="margin:8px 0 6px 0">Level 1</h2>
          <p id="levelHighlight"></p>
          <div class="controls" style="margin-top:18px">
            <a id="prevLevel" class="button" href="#">← Level zurück</a>
            <a id="nextLevel" class="button" href="#">Level weiter →</a>
            <a id="switchFaction" class="button primary" href="#">Fraktion wechseln</a>
          </div>
          <div id="levelStrip" class="chip-row" style="margin-top:18px"></div>
          <div class="controls" style="margin-top:18px">
            <a id="imageLink" class="button" target="_blank" rel="noreferrer" href="#">Image öffnen</a>
            <a id="metadataLink" class="button" target="_blank" rel="noreferrer" href="#">Metadata öffnen</a>
            <a id="externalLink" class="button" target="_blank" rel="noreferrer" href="#">Extern öffnen</a>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-2" style="margin-top:18px">
      <article class="panel">
        <h2>Routing / NFT URI</h2>
        <div class="kv">
          <div class="muted">Image URI</div><div class="addr" id="imageUri"></div>
          <div class="muted">Metadata URI</div><div class="addr" id="metadataUri"></div>
          <div class="muted">External URL</div><div class="addr" id="externalUri"></div>
          <div class="muted">Lokaler Bildpfad</div><div class="addr" id="imageLocal"></div>
          <div class="muted">Lokaler Metadata-Pfad</div><div class="addr" id="metadataLocal"></div>
        </div>
      </article>

      <article class="panel">
        <h2>Synergien</h2>
        <div id="synergyRow" class="chip-row"></div>
        <h3 style="margin-top:18px">Spezialisierungen</h3>
        <div id="specRow" class="chip-row"></div>
      </article>
    </section>

    <section class="grid grid-2" style="margin-top:18px">
      <article class="panel">
        <h2>Placement Voraussetzungen</h2>
        <div id="placementList"></div>
        <h3 style="margin-top:18px">Spätere Hook-Contracts</h3>
        <div id="futureContracts" class="chip-row"></div>
      </article>

      <article class="panel">
        <h2>Contract Hooks</h2>
        <div id="hookList"></div>
      </article>
    </section>

    <section class="grid grid-2" style="margin-top:18px">
      <article class="panel">
        <h2>Sample Metadata</h2>
        <div class="code-box"><pre id="metadataPreview"></pre></div>
      </article>
    </section>
  </div>

  <script src="assets/js/shared.js"></script>
  <script src="assets/js/building-level.js"></script>
</body>
</html>
HTML

# 5) Gemeinsame Browser-Helfer für Gallery + Detailseite anlegen.
cat > public/assets/js/shared.js <<'JS'
function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

async function loadJson(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.json();
}

function attachImageOrFallback(container, src, alt, item = {}, meta = {}) {
  if (!container) return;
  container.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'hero-image';

  const img = document.createElement('img');
  img.alt = alt || item.name || 'Building';
  img.loading = 'lazy';
  img.referrerPolicy = 'no-referrer';
  img.src = src;

  img.onerror = () => {
    wrap.innerHTML = '';
    const fallback = document.createElement('div');
    fallback.className = 'panel';
    fallback.style.minHeight = '320px';
    fallback.style.display = 'grid';
    fallback.style.placeItems = 'center';
    fallback.style.textAlign = 'center';
    fallback.innerHTML = `
      <div>
        <div class="kicker">Fallback Preview</div>
        <h3 style="margin:8px 0">${item.name || 'Personal Building'}</h3>
        <div class="chip-row" style="justify-content:center">
          <span class="chip">${item.factionLabel || item.faction || 'Faction offen'}</span>
          <span class="chip">Level ${item.level ?? '—'}</span>
        </div>
        <p class="muted" style="margin-top:12px">${meta.role || ''}</p>
        <p class="small muted">PNG noch nicht hochgeladen – Routing funktioniert bereits.</p>
      </div>
    `;
    wrap.appendChild(fallback);
  };

  wrap.appendChild(img);
  container.appendChild(wrap);
}

window.qs = qs;
window.loadJson = loadJson;
window.attachImageOrFallback = attachImageOrFallback;
JS

# 6) Gallery-JS anlegen.
cat > public/assets/js/gallery.js <<'JS'
const CANONICAL_ORDER = [
  'residence',
  'farming-hub',
  'forge',
  'warehouse',
  'market-stall',
  'guard-tower',
  'research-lab'
];

function sortItems(items, mode) {
  const canonicalIndex = new Map(CANONICAL_ORDER.map((slug, i) => [slug, i]));
  const copy = [...items];
  if (mode === 'name') {
    copy.sort((a, b) => a.name.localeCompare(b.name) || a.level - b.level || a.faction.localeCompare(b.faction));
  } else if (mode === 'level') {
    copy.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name) || a.faction.localeCompare(b.faction));
  } else {
    copy.sort((a, b) => (canonicalIndex.get(a.slug) ?? 999) - (canonicalIndex.get(b.slug) ?? 999) || a.level - b.level || a.faction.localeCompare(b.faction));
  }
  return copy;
}

function renderScopeTable(summary) {
  const tbody = document.getElementById('buildingTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  summary.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.role}</td>
      <td>${entry.synergies.join(', ')}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderCards(items, summaryMap) {
  const cards = document.getElementById('cards');
  const empty = document.getElementById('emptyState');
  const countChip = document.getElementById('countChip');
  if (!cards) return;

  cards.innerHTML = '';
  countChip.textContent = `${items.length} Slots`;
  empty.style.display = items.length ? 'none' : 'block';

  items.forEach(item => {
    const meta = summaryMap[item.slug] || {};
    const card = document.createElement('article');
    card.className = 'panel';

    const hero = document.createElement('div');
    attachImageOrFallback(hero, item.imageLocal, `${item.name} ${item.factionLabel} Level ${item.level}`, item, meta);

    const link = document.createElement('a');
    link.className = 'button primary';
    link.href = `building-level.html?building=${item.slug}&faction=${item.faction}&level=${item.level}`;
    link.textContent = 'Detailansicht';

    const chips = (meta.synergies || []).slice(0, 3).map(s => `<span class="chip">${s}</span>`).join('');
    card.innerHTML = `
      <div class="kicker">${item.factionLabel} · Level ${item.level}</div>
      <h3 style="margin-top:10px">${item.name}</h3>
      <p class="muted">${item.title}</p>
      <p>${meta.description || ''}</p>
      <div class="chip-row">${chips}</div>
      <div style="margin-top:16px"></div>
    `;
    card.querySelector('div:last-child').appendChild(link);
    card.insertBefore(hero, card.firstChild.nextSibling);
    cards.appendChild(card);
  });
}

async function initGallery() {
  const [master, summary] = await Promise.all([
    loadJson('assets/manifests/personal-buildings-master.json'),
    loadJson('assets/manifests/personal-buildings-summary.json')
  ]);

  const summaryMap = Object.fromEntries(summary.map(x => [x.slug, x]));
  renderScopeTable(summary);

  const factionSelect = document.getElementById('factionSelect');
  const levelSelect = document.getElementById('levelSelect');
  const sortSelect = document.getElementById('sortSelect');

  const rerender = () => {
    let items = [...master];
    if (factionSelect.value !== 'all') items = items.filter(x => x.faction === factionSelect.value);
    if (levelSelect.value !== 'all') items = items.filter(x => Number(x.level) === Number(levelSelect.value));
    items = sortItems(items, sortSelect.value);
    renderCards(items, summaryMap);
  };

  [factionSelect, levelSelect, sortSelect].forEach(el => el && el.addEventListener('change', rerender));
  rerender();
}

window.addEventListener('DOMContentLoaded', () => {
  initGallery().catch(err => {
    console.error(err);
    const cards = document.getElementById('cards');
    if (cards) cards.innerHTML = `<div class="empty">Gallery konnte nicht geladen werden: ${err.message}</div>`;
  });
});
JS

# 7) Falsche ABI-Links in index.html korrigieren.
python3 - <<'PY'
from pathlib import Path
p = Path('public/index.html')
text = p.read_text(encoding='utf-8')
text = text.replace('assets/abis/FarmingV6.json', 'assets/abis/ecosystem/FarmingV6.json')
text = text.replace('assets/abis/PiratesV6.json', 'assets/abis/ecosystem/PiratesV6.json')
p.write_text(text, encoding='utf-8')
PY

# 8) Residence-Level-Manifest + Residence-Metadata erzeugen.
python3 - <<'PY'
import json
from pathlib import Path

base_titles = {
    1: 'Compact Starter Residence',
    2: 'Upgraded Prestige Residence',
    3: 'Showcase Residence',
    4: 'Refined Heritage Residence',
    5: 'Legacy Residence',
    6: 'Grand Gallery Residence',
    7: 'Master Founder Residence',
}

manifest = []
for faction, label in [('inpinity', 'Inpinity'), ('inphinity', 'Inphinity')]:
    for level in range(1, 8):
        item = {
            'slug': 'residence',
            'name': 'Residence',
            'faction': faction,
            'factionLabel': label,
            'level': level,
            'title': base_titles[level],
            'imageLocal': f'/assets/images/personal-buildings/residence/{faction}/level-{level}.png',
            'imageUri': f'https://assets.inpinity.online/city/images/buildings/personal/residence/{faction}/level-{level}.png',
            'metadataLocal': f'/assets/metadata/personal-buildings/residence/{faction}/level-{level}.json',
            'metadataUri': f'https://assets.inpinity.online/city/metadata/buildings/personal/residence/{faction}/level-{level}.json',
            'externalUrl': f'https://city.inpinity.online/building-level.html?building=residence&faction={faction}&level={level}',
        }
        manifest.append(item)
        meta_path = Path(f'public/assets/metadata/personal-buildings/residence/{faction}/level-{level}.json')
        meta_path.parent.mkdir(parents=True, exist_ok=True)
        metadata = {
            'name': f'Inpinity City Residence — {label} Level {level}',
            'description': 'Personal Building NFT asset for Inpinity City. Residence line with creator-settable image routing and level-based interface support.',
            'image': item['imageUri'],
            'external_url': item['externalUrl'],
            'attributes': [
                {'trait_type': 'Building Type', 'value': 'Residence'},
                {'trait_type': 'Faction', 'value': label},
                {'trait_type': 'Level', 'value': level},
            ],
        }
        meta_path.write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding='utf-8')

Path('public/assets/manifests/residence-levels.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
PY

# 9) contracts.json in das von building-level.js erwartete Flat-Index-Format überführen.
python3 - <<'PY'
import json
from pathlib import Path

src = Path('public/assets/manifests/contracts.json')
out = Path('public/assets/manifests/contracts-index.json')
raw = json.loads(src.read_text(encoding='utf-8'))
flat = {}
for section in ('cityCore', 'ecosystem'):
    for label, cfg in raw.get(section, {}).items():
        flat[label] = {
            'label': label,
            'address': cfg.get('address'),
            'abiLocal': cfg.get('abi'),
            'notes': section,
        }
out.write_text(json.dumps(flat, ensure_ascii=False, indent=2), encoding='utf-8')
PY

# 10) Master + Grouped aus allen vorhandenen *-levels.json Dateien erzeugen.
python3 - <<'PY'
import json
from pathlib import Path

manifest_dir = Path('public/assets/manifests')
master = []
for path in sorted(manifest_dir.glob('*-levels.json')):
    master.extend(json.loads(path.read_text(encoding='utf-8')))

master_path = manifest_dir / 'personal-buildings-master.json'
master_path.write_text(json.dumps(master, ensure_ascii=False, indent=2), encoding='utf-8')

grouped = {}
for item in master:
    grouped.setdefault(item['slug'], {'slug': item['slug'], 'name': item['name'], 'factions': {}})
    grouped[item['slug']]['factions'].setdefault(item['faction'], {})[str(item['level'])] = item

grouped_path = manifest_dir / 'personal-buildings-grouped.json'
grouped_path.write_text(json.dumps(list(grouped.values()), ensure_ascii=False, indent=2), encoding='utf-8')
PY

# 11) Summary-Manifest anlegen, auf das Gallery + Detailseite zugreifen.
cat > public/assets/manifests/personal-buildings-summary.json <<'JSON'
[
  {
    "slug": "residence",
    "name": "Residence",
    "role": "Prestige / Identity / Display / Legacy",
    "tagline": "Persönlicher Prestige- und Showcase-Kern",
    "description": "Residence bündelt Showcase, Herkunft, Legacy-Charakter und persönliche Präsentation im City-System.",
    "synergies": ["Prestige Commerce", "Legacy Knowledge"],
    "specializations": ["GalleryHouse", "TrophyHall"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Faction valid", "District valid", "Dormant block optional"],
    "futureContracts": ["CityBuildingNFTV1", "CityBuildingPlacement", "CityBuildingFunctionRegistry"],
    "hookTargets": [
      {"label": "CityRegistry", "notes": "City-Key- / Faction-Kontext"},
      {"label": "CityLand", "notes": "Plot- und Qubiq-Fortschritt"},
      {"label": "CityValidation", "notes": "Placement-Voraussetzungen"}
    ],
    "levelHighlights": {
      "1": "Starter-Wohngebäude mit erster Display-Funktion.",
      "2": "Mehr Raum für persönliche Präsentation.",
      "3": "Showcase-Slots werden ernsthaft relevant.",
      "4": "Herkunft und Prestige werden sichtbarer.",
      "5": "Legacy-Charakter beginnt.",
      "6": "Gallery-Branch-Vorbereitung.",
      "7": "Master Residence mit Founder-/Heritage-Vibe."
    }
  },
  {
    "slug": "farming-hub",
    "name": "Farming Hub",
    "role": "Production / Yield / Claim Support",
    "tagline": "Produktions- und Claim-Beschleuniger",
    "description": "Farming Hub verbindet Produktion, Claim-Fenster und spätere Chain-/Logistics-Synergien.",
    "synergies": ["Logistics Chain", "Supply Chain Core"],
    "specializations": ["LogisticsHub", "HarvestNode", "ChainFarm"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["PersonalBuildings", "CityBuildingFunctionRegistry"],
    "hookTargets": [
      {"label": "FarmingV6", "notes": "Yield- und Farming-Read-Integration"},
      {"label": "CityRegistry", "notes": "Fraktions- und Benutzerkontext"}
    ],
    "levelHighlights": {
      "1": "Früher Starter-Boost.",
      "2": "Mehr Laufzeit und Stabilität.",
      "3": "Spezialisierungsreif.",
      "4": "Grid-/Chain-Farm-Sprache beginnt.",
      "5": "Yield-Koordination sichtbar.",
      "6": "Advanced-Chain-Look.",
      "7": "Master Farming Hub."
    }
  },
  {
    "slug": "forge",
    "name": "Forge",
    "role": "Crafting / Creator / Output Quality",
    "tagline": "Crafting- und Creator-Kern",
    "description": "Forge verbindet Recipe-Tiers, Output-Qualität, Provenance-Bonus und den späteren Creator-Branch.",
    "synergies": ["Deep Crafting Core", "Production Chain", "Craft Commerce"],
    "specializations": ["WeaponForge", "RelicForge", "ComponentForge", "MasterForge"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["PersonalBuildings", "CityBuildingFunctionRegistry", "ResearchLab"],
    "hookTargets": [
      {"label": "INPI", "notes": "Wert-/Utility-Kontext"},
      {"label": "ResourceToken", "notes": "Crafting-Ressourcen"}
    ],
    "levelHighlights": {
      "1": "Erste Crafting-Basis.",
      "2": "Reduzierte Kosten und mehr Stabilität.",
      "3": "Recipe-Tier 2 und Spezialiserung offen.",
      "4": "Provenance-Relevanz steigt.",
      "5": "Output-Qualität spürbar besser.",
      "6": "High-tier Crafting.",
      "7": "MasterForge / Creator-Branch vorbereitet."
    }
  },
  {
    "slug": "warehouse",
    "name": "Warehouse",
    "role": "Storage / Vault / Logistics / Yield Lock",
    "tagline": "Lager-, Vault- und Logistics-Kern",
    "description": "Warehouse ist der Storage-Layer für Reserve, Schutz, spätere Raid-/Repair- und Yield-Lock-Mechaniken.",
    "synergies": ["Logistics Chain", "Trade Storage", "Vault Fortress Core", "Trade Fortress Core"],
    "specializations": ["MerchantVault", "DeepStorage", "ShieldedStorage"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["CityBuildingVault", "CityBuildingFunctionRegistry", "CityRebelsHooks"],
    "hookTargets": [
      {"label": "ResourceToken", "notes": "Storage-/Bucket-Kontext"},
      {"label": "PiratesV6", "notes": "Spätere Raid-/Defense-Hooks"}
    ],
    "levelHighlights": {
      "1": "Kompaktes Starter-Lager.",
      "2": "Mehr Buckets und bessere Reserve.",
      "3": "Vault-/Decay-Prep beginnt.",
      "4": "Logistics ernsthaft sichtbar.",
      "5": "Protected-Trade-Charakter.",
      "6": "Stärkerer Vault-/Security-Look.",
      "7": "Master Warehouse."
    }
  },
  {
    "slug": "market-stall",
    "name": "Market Stall",
    "role": "Listing / Sale / Visibility / Trade Utility",
    "tagline": "Persönlicher Handels- und Listing-Knoten",
    "description": "Market Stall steuert Listing-Rechte, Sichtbarkeit, Handelsvorteile und spätere Premium-/Provenance-Profile.",
    "synergies": ["Prestige Commerce", "Trade Storage", "Protected Trade", "Trade Fortress Core"],
    "specializations": ["MerchantHouse", "TradeDepot"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["CommunityMarketplace", "CityBuildingFunctionRegistry"],
    "hookTargets": [
      {"label": "InpinityNFT", "notes": "NFT-/Listing-Kontext"},
      {"label": "PartnershipV2", "notes": "Spätere Marketplace-/Partner-Hooks"}
    ],
    "levelHighlights": {
      "1": "Kompakter Händlerkiosk.",
      "2": "Mehr Listings und erste Fee-Vorteile.",
      "3": "Premium-Schaufenster beginnt.",
      "4": "Merchant-Arcade-Look.",
      "5": "Prestige-Handel wird sichtbar.",
      "6": "Collector-/Provenance-Vibe.",
      "7": "Elite-Market-Stall."
    }
  },
  {
    "slug": "guard-tower",
    "name": "Guard Tower",
    "role": "Defense / Raid Mitigation / Protection",
    "tagline": "Persönlicher Defense- und Radar-Knoten",
    "description": "Guard Tower liefert Defense, Radar, Shield-Readiness und die spätere Kopplung zu Vault, Mercenaries und Rebels.",
    "synergies": ["Protected Trade", "Tactical Tech", "Vault Fortress Core", "Trade Fortress Core"],
    "specializations": ["RadarTower", "DefenseTower", "MercenaryTower", "ShieldTower"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["ICityGuardDefenseRead", "IMercenaryCityAdapter"],
    "hookTargets": [
      {"label": "PiratesV6", "notes": "Defense-/Raid-Mitigation"},
      {"label": "MercenaryV4", "notes": "Spätere Mercenary-Kopplung"}
    ],
    "levelHighlights": {
      "1": "Kompakter Wachposten.",
      "2": "Stabilere persönliche Sicherung.",
      "3": "Erste Tower-Spezialisierung möglich.",
      "4": "Mehr Bastion-Charakter.",
      "5": "Radar-Tier wird sichtbar.",
      "6": "Shield-/Mitigation-Sprache.",
      "7": "Elite-Defense-Knoten."
    }
  },
  {
    "slug": "research-lab",
    "name": "Research Lab",
    "role": "Discovery / Tech / Unlocks / Blueprint Logic",
    "tagline": "Tech-, Discovery- und Blueprint-Kern",
    "description": "Research Lab verbindet Discovery, Blueprint-Unlocks, Forge-Synergien und die spätere Enchant-/Materia-Schicht.",
    "synergies": ["Deep Crafting Core", "Tactical Tech", "Legacy Knowledge", "Cultural Prestige Core"],
    "specializations": ["BlueprintLab", "MateriaLab", "EnchantmentLab", "MasterLab"],
    "placementRules": ["Owner Match", "Completed Personal Plot", "Personal Plot only"],
    "futureContracts": ["CityBuildingFunctionRegistry", "Forge", "EnchantSystem"],
    "hookTargets": [
      {"label": "INPI", "notes": "Tech-/Discovery-Wertschicht"},
      {"label": "ResourceToken", "notes": "Forschungsressourcen"}
    ],
    "levelHighlights": {
      "1": "Discovery-Start.",
      "2": "Mehr Analyse und Forge-Support.",
      "3": "Blueprint-Tier beginnt.",
      "4": "Applied Discovery.",
      "5": "Enchant- und Materia-Prep.",
      "6": "Knowledge-Nexus-Look.",
      "7": "Master Lab."
    }
  }
]
JSON

# 12) Hinweise für git.
echo
echo "Fertig. Danach typischerweise ausführen:"
echo "  git status"
echo "  python3 -m http.server 8787 --directory public"
echo "  # Browser: http://localhost:8787 und http://localhost:8787/building-level.html?building=residence&faction=inpinity&level=1"
echo "  git add -A && git commit -m 'fix asset layout and level UI wiring'"
