async function loadJson(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return await res.json();
}

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function prettySlug(slug) {
  return slug.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}

function makeFallback(container, item, summary) {
  const title = item?.title || summary?.tagline || 'Asset Slot';
  const building = item?.name || summary?.name || 'Building';
  const faction = item?.factionLabel || '';
  const level = item?.level ? `Level ${item.level}` : '';
  container.innerHTML = `
    <div class="placeholder">
      <strong>${building}</strong>
      <span>${faction} ${level}</span>
      <span>${title}</span>
    </div>
  `;
}

function attachImageOrFallback(wrapper, src, alt, item, summary) {
  wrapper.innerHTML = '';
  const img = document.createElement('img');
  img.alt = alt || '';
  img.loading = 'lazy';
  img.src = src;
  img.onerror = () => makeFallback(wrapper, item, summary);
  img.onload = () => {};
  wrapper.appendChild(img);
}
