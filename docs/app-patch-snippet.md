# Patch für bestehende Übersicht

Wenn du in `public/assets/js/app.js` schon auf eine Detailseite verlinkst, kannst du das später so anpassen:

```js
const href = `building-level.html?building=${slug}&faction=${faction}&level=1`;
```

Damit öffnet jeder Kartenklick zunächst das Level-1-Bild der gewählten Fraktion.
