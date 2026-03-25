async function initGallery() {
  const [master, summary] = await Promise.all([
    loadJson('assets/manifests/personal-buildings-master.json'),
    loadJson('assets/manifests/personal-buildings-summary.json')
  ]);
  const summaryMap = Object.fromEntries(summary.map(s => [s.slug, s]));
  const cardsEl = document.getElementById('cards');
  const tableBody = document.getElementById('buildingTableBody');
  const factionSelect = document.getElementById('factionSelect');
  const levelSelect = document.getElementById('levelSelect');
  const sortSelect = document.getElementById('sortSelect');
  const countChip = document.getElementById('countChip');
  const emptyState = document.getElementById('emptyState');

  summary.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><a href="building-level.html?building=${item.slug}&faction=inpinity&level=1"><strong>${item.name}</strong></a></td>
      <td>${item.role}</td>
      <td>${item.synergies.join(', ')}</td>
    `;
    tableBody.appendChild(tr);
  });

  function getFiltered() {
    let rows = [...master];
    const faction = factionSelect.value;
    const level = levelSelect.value;
    const sort = sortSelect.value;

    if (faction !== 'all') rows = rows.filter(r => r.faction === faction);
    if (level !== 'all') rows = rows.filter(r => String(r.level) === String(level));

    if (sort === 'name') {
      rows.sort((a, b) => a.name.localeCompare(b.name) || a.faction.localeCompare(b.faction) || a.level - b.level);
    } else if (sort === 'level') {
      rows.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name) || a.faction.localeCompare(b.faction));
    }
    return rows;
  }

  function renderCards() {
    const rows = getFiltered();
    countChip.textContent = `${rows.length} Slots`;
    cardsEl.innerHTML = '';
    emptyState.style.display = rows.length ? 'none' : 'block';

    rows.forEach(item => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = `building-level.html?building=${item.slug}&faction=${item.faction}&level=${item.level}`;
      const meta = summaryMap[item.slug];
      card.innerHTML = `
        <div class="card-image"><div class="placeholder"></div></div>
        <div class="card-body">
          <div class="card-title">
            <h3>${item.name}</h3>
            <span class="chip">L${item.level}</span>
          </div>
          <div class="muted small">${item.title}</div>
          <div class="meta">
            <span class="chip">${item.factionLabel}</span>
            <span class="chip">${meta.role}</span>
          </div>
          <p>${meta.tagline}</p>
        </div>
      `;
      attachImageOrFallback(card.querySelector('.card-image'), item.imageLocal, `${item.name} ${item.factionLabel} Level ${item.level}`, item, meta);
      cardsEl.appendChild(card);
    });
  }

  [factionSelect, levelSelect, sortSelect].forEach(el => el.addEventListener('change', renderCards));
  renderCards();
}

initGallery().catch(err => {
  console.error(err);
  document.getElementById('cards').innerHTML = `<div class="empty">Fehler beim Laden der Gallery-Daten: ${err.message}</div>`;
});
