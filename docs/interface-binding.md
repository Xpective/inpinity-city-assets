# Interface-Binding

Die HTML-Seite liest drei Werte aus der URL:

- `building`
- `faction`
- `level`

Beispiel:

```text
building-level.html?building=residence&faction=inpinity&level=4
```

## Ziel-Mapping aus den Contracts

Später sollte die UI aus den Reads sinngemäß ableiten:

- `buildingType -> slug`
- `ownerFaction/originFaction/currentFaction -> faction`
- `level -> level`

Dann wird im Frontend nur noch der passende Manifest-Eintrag gesucht.

## Manifest-Key

Ein Eintrag ist eindeutig durch diese Kombination:

```text
{ slug, faction, level }
```

## Vorteile

- NFT-Bilder und HTML-Visualisierung benutzen dieselbe Asset-Quelle
- Cloudflare/Subdomain Routing bleibt sauber
- creator-settable URI kann später auf dieselben Pfade zeigen
- das Interface muss keine Dateinamen erraten
