async function initDetail() {
  const [master, summary, contracts] = await Promise.all([
    loadJson('assets/manifests/personal-buildings-master.json'),
    loadJson('assets/manifests/personal-buildings-summary.json'),
    loadJson('assets/manifests/contracts-index.json')
  ]);
  const summaryMap = Object.fromEntries(summary.map(s => [s.slug, s]));
  const building = qs('building') || 'residence';
  const faction = qs('faction') || 'inpinity';
  const level = Number(qs('level') || 1);

  const item = master.find(r => r.slug === building && r.faction === faction && Number(r.level) === level);
  const meta = summaryMap[building];
  if (!item || !meta) {
    document.body.innerHTML = `<div class="container"><div class="empty">Eintrag nicht gefunden. Prüfe building, faction und level in der URL.</div></div>`;
    return;
  }

  document.getElementById('pageTitle').textContent = `${item.name} — ${item.factionLabel} Level ${item.level}`;
  document.getElementById('pageSubtitle').textContent = `${item.title} · ${meta.role}`;
  document.getElementById('buildingName').textContent = item.name;
  document.getElementById('buildingTagline').textContent = meta.tagline;
  document.getElementById('buildingDescription').textContent = meta.description;
  document.getElementById('factionChip').textContent = item.factionLabel;
  document.getElementById('levelChip').textContent = `Level ${item.level}`;
  document.getElementById('roleChip').textContent = meta.role;
  document.getElementById('levelHighlight').textContent = meta.levelHighlights[String(item.level)] || item.title;

  attachImageOrFallback(
    document.getElementById('heroImageWrap'),
    item.imageLocal,
    `${item.name} ${item.factionLabel} Level ${item.level}`,
    item,
    meta
  );

  const bindText = (id, value) => document.getElementById(id).textContent = value ?? '—';
  bindText('imageUri', item.imageUri);
  bindText('metadataUri', item.metadataUri);
  bindText('externalUri', item.externalUrl);
  bindText('imageLocal', item.imageLocal);
  bindText('metadataLocal', item.metadataLocal);

  const imageLink = document.getElementById('imageLink');
  imageLink.href = item.imageLocal;
  const metadataLink = document.getElementById('metadataLink');
  metadataLink.href = item.metadataLocal;
  const externalLink = document.getElementById('externalLink');
  externalLink.href = item.externalUrl;

  const synergyRow = document.getElementById('synergyRow');
  meta.synergies.forEach(name => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = name;
    synergyRow.appendChild(span);
  });

  const specRow = document.getElementById('specRow');
  meta.specializations.forEach(name => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = name;
    specRow.appendChild(span);
  });

  const placementList = document.getElementById('placementList');
  meta.placementRules.forEach(rule => {
    const div = document.createElement('div');
    div.className = 'contract-card';
    div.textContent = rule;
    placementList.appendChild(div);
  });

  const futureContracts = document.getElementById('futureContracts');
  meta.futureContracts.forEach(name => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = name;
    futureContracts.appendChild(span);
  });

  const hookList = document.getElementById('hookList');
  meta.hookTargets.forEach(target => {
    const live = contracts[target.label] || target;
    const card = document.createElement('div');
    card.className = 'contract-card';
    const addressLine = live.address ? `<div class="tiny muted">${live.address}</div>` : `<div class="tiny muted">Adresse folgt / nicht gesetzt</div>`;
    const abiLine = live.abiLocal ? `<div style="margin-top:10px"><a class="button" href="${live.abiLocal}" target="_blank" rel="noreferrer">ABI öffnen</a></div>` : '';
    card.innerHTML = `
      <strong>${live.label}</strong>
      ${addressLine}
      <div class="small muted" style="margin-top:8px">${live.notes || ''}</div>
      ${abiLine}
    `;
    hookList.appendChild(card);
  });

  const metadata = await loadJson(item.metadataLocal);
  document.getElementById('metadataPreview').textContent = JSON.stringify(metadata, null, 2);

  const levelStrip = document.getElementById('levelStrip');
  for (let i = 1; i <= 7; i++) {
    const a = document.createElement('a');
    a.className = `level-link${i === item.level ? ' active' : ''}`;
    a.href = `building-level.html?building=${item.slug}&faction=${item.faction}&level=${i}`;
    a.textContent = `L${i}`;
    levelStrip.appendChild(a);
  }

  const otherFaction = item.faction === 'inpinity' ? 'inphinity' : 'inpinity';
  document.getElementById('switchFaction').href = `building-level.html?building=${item.slug}&faction=${otherFaction}&level=${item.level}`;
  document.getElementById('prevLevel').href = `building-level.html?building=${item.slug}&faction=${item.faction}&level=${Math.max(1, item.level - 1)}`;
  document.getElementById('nextLevel').href = `building-level.html?building=${item.slug}&faction=${item.faction}&level=${Math.min(7, item.level + 1)}`;

  const variantChips = document.getElementById('variantChips');
  master.filter(r => r.slug === item.slug).forEach(variant => {
    const a = document.createElement('a');
    a.className = 'chip';
    a.href = `building-level.html?building=${variant.slug}&faction=${variant.faction}&level=${variant.level}`;
    a.textContent = `${variant.factionLabel} L${variant.level}`;
    variantChips.appendChild(a);
  });
}

initDetail().catch(err => {
  console.error(err);
  document.body.innerHTML = `<div class="container"><div class="empty">Fehler beim Laden der Detailansicht: ${err.message}</div></div>`;
});
