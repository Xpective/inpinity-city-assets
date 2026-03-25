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
