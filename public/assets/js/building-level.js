
function qsv(name){
  return new URLSearchParams(window.location.search).get(name);
}

function formatStatLabel(key){
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, c => c.toUpperCase());
}

function renderLevelPage(){
  const slug = qsv('building') || 'residence';
  const faction = qsv('faction') || 'inpinity';
  const level = String(qsv('level') || '1');

  const building = window.PERSONAL_BUILDING_LEVELS_DATA?.[slug];
  const manifest = window.PERSONAL_BUILDINGS_LEVELS_MANIFEST?.find(x => x.slug === slug && x.faction === faction && String(x.level) === level);
  const fallbackBuilding = window.BUILDINGS_DATA?.[slug];

  if(!building || !manifest){
    document.getElementById('app').innerHTML = '<div class="panel"><h1>Kein passender Level-Eintrag gefunden.</h1></div>';
    return;
  }

  const levelData = building.levels[level];
  document.title = `${building.name} — Level ${level} — Inpinity City`;

  document.getElementById('buildingName').textContent = building.name;
  document.getElementById('buildingRole').textContent = building.role;
  document.getElementById('buildingDesc').textContent = building.description;
  document.getElementById('levelTitle').textContent = `Level ${level} — ${levelData.title}`;
  document.getElementById('levelSummary').textContent = levelData.summary;
  document.getElementById('heroImage').src = manifest.imageLocal;
  document.getElementById('heroImage').alt = `${building.name} ${faction} Level ${level}`;
  document.getElementById('factionPill').textContent = faction === 'inpinity' ? 'Inpinity Variant' : 'Inphinity Variant';
  document.getElementById('levelPill').textContent = `Level ${level}`;
  document.getElementById('imageUri').textContent = manifest.imageUri;
  document.getElementById('metadataUri').textContent = manifest.metadataUri;
  document.getElementById('externalUri').textContent = manifest.externalUrl;
  document.getElementById('assetLink').href = manifest.imageLocal;
  document.getElementById('metadataLink').href = manifest.metadataLocal;

  const stats = Object.entries(levelData.stats || {}).map(([k,v]) => `<span class="chip"><strong>${formatStatLabel(k)}:</strong> ${v}</span>`).join('');
  document.getElementById('levelStats').innerHTML = stats;

  const cues = (levelData.visualCues || []).map(x => `<span class="chip">${x}</span>`).join('');
  document.getElementById('visualCues').innerHTML = cues;

  document.getElementById('specialization').innerHTML = levelData.specialization
    ? `<span class="chip">${levelData.specialization}</span>`
    : '<span class="chip">keine Spezialisierung auf diesem Level</span>';

  const lvlNav = [];
  for(let i=1;i<=7;i++){
    const href = `building-level.html?building=${slug}&faction=${faction}&level=${i}`;
    lvlNav.push(`<a class="button ${String(i)===level ? 'primary' : ''}" href="${href}">L${i}</a>`);
  }
  document.getElementById('levelNav').innerHTML = lvlNav.join('');

  const factionToggle = faction === 'inpinity' ? 'inphinity' : 'inpinity';
  document.getElementById('toggleFaction').href = `building-level.html?building=${slug}&faction=${factionToggle}&level=${level}`;

  const requires = fallbackBuilding?.requires || [];
  const synergies = fallbackBuilding?.synergies || [];
  document.getElementById('requirements').innerHTML = requires.map(x => `<span class="chip">${x}</span>`).join('');
  document.getElementById('synergies').innerHTML = synergies.map(x => `<span class="chip">${x}</span>`).join('');

  const sampleMeta = {
    name: `Inpinity City Personal Building — ${building.name} — Level ${level}`,
    image: manifest.imageUri,
    external_url: manifest.externalUrl,
    attributes: [
      { trait_type: 'Building', value: building.name },
      { trait_type: 'Faction', value: faction === 'inpinity' ? 'Inpinity' : 'Inphinity' },
      { trait_type: 'Level', value: Number(level) }
    ]
  };
  document.getElementById('metadataPreview').textContent = JSON.stringify(sampleMeta, null, 2);
}

document.addEventListener('DOMContentLoaded', renderLevelPage);
