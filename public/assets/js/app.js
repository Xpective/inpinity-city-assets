
function qs(name){ return new URLSearchParams(window.location.search).get(name); }

function getState(){
  return JSON.parse(localStorage.getItem('inpinityCityDemoState') || '{"hasKey":false,"faction":"","selectedBuilding":"residence"}');
}
function setState(next){
  localStorage.setItem('inpinityCityDemoState', JSON.stringify(next));
}

function renderHome(){
  const state = getState();
  const cards = document.getElementById('buildingCards');
  if(!cards) return;

  document.getElementById('keyStatus').textContent = state.hasKey ? 'gesetzt' : 'nicht gesetzt';
  document.getElementById('factionStatus').textContent = state.faction || 'nicht gewählt';

  document.getElementById('setKeyBtn')?.addEventListener('click', ()=>{
    const next = getState(); next.hasKey = !next.hasKey; setState(next); renderHome();
  });
  document.getElementById('chooseInpinityBtn')?.addEventListener('click', ()=>{
    const next = getState(); next.faction = 'inpinity'; setState(next); renderHome();
  });
  document.getElementById('chooseInphinityBtn')?.addEventListener('click', ()=>{
    const next = getState(); next.faction = 'inphinity'; setState(next); renderHome();
  });

  cards.innerHTML = '';
  for(const [slug, building] of Object.entries(window.BUILDINGS_DATA)){
    const faction = state.faction || 'inpinity';
    const asset = window.PERSONAL_BUILDINGS_MANIFEST.find(x => x.slug === slug && x.faction === faction);
    const allowed = state.hasKey && !!state.faction;
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${asset.imageLocal}" alt="${building.name}">
      <div class="card-body">
        <small class="kicker">${building.role}</small>
        <h3>${building.name}</h3>
        <p>${building.description}</p>
        <div class="chip-row">${building.synergies.slice(0,3).map(s => `<span class="chip">${s}</span>`).join('')}</div>
        <div class="actions">
          <a class="button ${allowed ? 'primary' : ''}" href="${allowed ? `building.html?building=${slug}&faction=${faction}` : '#'}" ${allowed ? '' : 'onclick="return false;"'}>${allowed ? 'Öffnen' : 'Key + Faction nötig'}</a>
          <a class="button" href="${asset.metadataLocal}" target="_blank" rel="noreferrer">Metadata</a>
        </div>
      </div>
    `;
    cards.appendChild(card);
  }
}

function renderBuilding(){
  const slug = qs('building') || 'residence';
  const faction = qs('faction') || getState().faction || 'inpinity';
  const building = window.BUILDINGS_DATA[slug];
  const asset = window.PERSONAL_BUILDINGS_MANIFEST.find(x => x.slug === slug && x.faction === faction);
  if(!building || !asset) return;

  document.title = `${building.name} — Inpinity City`;
  document.getElementById('buildingName').textContent = building.name;
  document.getElementById('buildingRole').textContent = building.role;
  document.getElementById('buildingDesc').textContent = building.description;
  document.getElementById('heroImage').src = asset.imageLocal;
  document.getElementById('heroImage').alt = `${building.name} ${faction}`;
  document.getElementById('factionPill').textContent = faction === 'inpinity' ? 'Inpinity Variant' : 'Inphinity Variant';
  document.getElementById('imageUri').textContent = asset.imageUri;
  document.getElementById('metadataUri').textContent = asset.metadataUri;
  document.getElementById('externalUri').textContent = asset.externalUrl;
  document.getElementById('metadataLink').href = asset.metadataLocal;
  document.getElementById('assetLink').href = asset.imageLocal;

  document.getElementById('requirements').innerHTML = building.requires.map(x => `<span class="chip">${x}</span>`).join('');
  document.getElementById('synergies').innerHTML = building.synergies.map(x => `<span class="chip">${x}</span>`).join('');

  const sampleMeta = {
    name: `Inpinity City Personal Building — ${building.name}`,
    image: asset.imageUri,
    external_url: asset.externalUrl,
    attributes: [
      { trait_type: 'Building Type', value: building.name },
      { trait_type: 'Faction Variant', value: faction === 'inpinity' ? 'Inpinity' : 'Inphinity' }
    ]
  };
  document.getElementById('metadataPreview').textContent = JSON.stringify(sampleMeta, null, 2);

  const groups = document.getElementById('contractGroups');
  groups.innerHTML = '';
  for(const [groupName, contracts] of Object.entries(window.CONTRACTS_DATA)){
    const wrap = document.createElement('section');
    wrap.className = 'panel contract-group';
    wrap.innerHTML = `<h2>${groupName === 'cityCore' ? 'City Core Contracts' : 'Ecosystem Contracts'}</h2>`;
    for(const [name, cfg] of Object.entries(contracts)){
      const abiHref = cfg.abi;
      const card = document.createElement('div');
      card.className = 'contract-card';
      card.innerHTML = `
        <div class="row">
          <div>
            <h3>${name}</h3>
            <div class="addr">${cfg.address}</div>
            <div class="stats">
              <span class="chip">${cfg.functionCount} functions</span>
              <span class="chip">${cfg.eventCount} events</span>
              <span class="chip">${cfg.errorCount} errors</span>
            </div>
          </div>
          <div class="actions">
            <a class="button" href="${abiHref}" target="_blank" rel="noreferrer">ABI JSON</a>
          </div>
        </div>`;
      wrap.appendChild(card);
    }
    groups.appendChild(wrap);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderBuilding();
});
