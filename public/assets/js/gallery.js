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
