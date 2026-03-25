# Contract Hook Notes für das Interface

Dieses Paket enthält bereits einen `contracts-index.json`-Layer.

## Zweck
- ABI-Dateien zentral verlinken
- bekannte Live-Adressen an einer Stelle pflegen
- Building-spezifische Hook Targets im Interface anzeigen

## Bereits enthalten
- City Core: CityConfig, CityRegistry, CityLand, CityDistricts, CityStatus, CityHistory, CityValidation
- Live ABIs: ResourceToken, PartnershipV2, INPI, InpinityNFT, Pitrone, FarmingV6, PiratesV6, MercenaryV4

## Nächster sinnvoller Schritt
Später kann zusätzlich ein `building-contract-hooks.json` oder ein `contracts/buildings-index.json` ergänzt werden, wenn `CityBuildingNFTV1`, `PersonalBuildings`, `CityBuildingFunctionRegistry` und `CityBuildingVault` als reale Deployments dazukommen.
