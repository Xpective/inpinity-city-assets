window.PERSONAL_BUILDING_LEVELS_DATA = {
  "residence": {
    "slug": "residence",
    "name": "Residence",
    "role": "Prestige / Identity / Display",
    "description": "Prestige-, Showcase-, Gallery- und Legacy-Gebäude für Personal Plots.",
    "levels": {
      "1": {
        "title": "Starter Prestige Home",
        "summary": "Kompakte Wohn- und Display-Einheit für den ersten Personal Plot.",
        "specialization": null,
        "visualCues": [
          "central dome",
          "small entrance plaza",
          "single display alcove"
        ],
        "stats": {
          "showcaseSlots": 2,
          "archiveSlots": 0,
          "prestigePresentationBps": 0,
          "legacyFlag": false
        }
      },
      "2": {
        "title": "Social Residence",
        "summary": "Ausgebautes Wohngebäude mit stärkerer Präsentationsfunktion.",
        "specialization": null,
        "visualCues": [
          "second side wing",
          "more display windows",
          "refined facade"
        ],
        "stats": {
          "showcaseSlots": 4,
          "archiveSlots": 0,
          "prestigePresentationBps": 100,
          "legacyFlag": false
        }
      },
      "3": {
        "title": "Gallery-Ready Residence",
        "summary": "Erste Spezialisierungsstufe mit Archiv- und Showcase-Charakter.",
        "specialization": "GalleryHouse unlock",
        "visualCues": [
          "elegant multi-room residence",
          "gallery corridor",
          "two archive niches"
        ],
        "stats": {
          "showcaseSlots": 6,
          "archiveSlots": 2,
          "prestigePresentationBps": 200,
          "legacyFlag": false
        }
      },
      "4": {
        "title": "Curated Residence",
        "summary": "Stärkere Herkunfts- und Sammlerpräsentation im Frontend.",
        "specialization": "GalleryHouse active",
        "visualCues": [
          "elevated terrace",
          "curated showcase bays",
          "refined symmetry"
        ],
        "stats": {
          "showcaseSlots": 8,
          "archiveSlots": 3,
          "prestigePresentationBps": 350,
          "legacyFlag": false
        }
      },
      "5": {
        "title": "Legacy Residence",
        "summary": "Trophy- und Heritage-Charakter beginnt sichtbar zu werden.",
        "specialization": "TrophyHall unlock",
        "visualCues": [
          "trophy annex",
          "legacy banner architecture",
          "heritage court"
        ],
        "stats": {
          "showcaseSlots": 10,
          "archiveSlots": 4,
          "prestigePresentationBps": 500,
          "legacyFlag": true
        }
      },
      "6": {
        "title": "Gallery Estate",
        "summary": "Nahezu masterhafte Präsentation mit starker Legacy-Ausstrahlung.",
        "specialization": "galleryBranchPrep",
        "visualCues": [
          "gallery wing",
          "prestige spire",
          "grand collector hall"
        ],
        "stats": {
          "showcaseSlots": 12,
          "archiveSlots": 5,
          "prestigePresentationBps": 700,
          "legacyFlag": true
        }
      },
      "7": {
        "title": "Founder Residence Palace",
        "summary": "Max-Level Residence mit Founder-/Genesis-Ausstrahlung.",
        "specialization": "galleryBranchPrep + trophyBranchPrep",
        "visualCues": [
          "monumental dome",
          "integrated gallery and trophy halls",
          "founder-level estate"
        ],
        "stats": {
          "showcaseSlots": 14,
          "archiveSlots": 6,
          "prestigePresentationBps": 1000,
          "legacyFlag": true
        }
      }
    }
  },
  "farming-hub": {
    "slug": "farming-hub",
    "name": "Farming Hub",
    "role": "Production / Boost / Claim Support",
    "description": "Produktions- und Farm-Boost-Gebäude mit Claim-Window- und Chain-Synergien.",
    "levels": {
      "1": {
        "title": "Starter Hydro Module",
        "summary": "Kompakter Hydroponik-Kern für frühe Produktionsboni.",
        "specialization": null,
        "visualCues": [
          "compact greenhouse roof",
          "irrigation tanks",
          "grow trays"
        ],
        "stats": {
          "farmingBoostBps": 200,
          "boostDurationBps": 100,
          "claimWindowBonusBps": 0,
          "chainBonusBps": 0
        }
      },
      "2": {
        "title": "Expanded Greenhouse",
        "summary": "Größere Hydrolinien und stabilere Produktionsabläufe.",
        "specialization": null,
        "visualCues": [
          "extended hydro lanes",
          "crop lighting strips",
          "organized pumps"
        ],
        "stats": {
          "farmingBoostBps": 400,
          "boostDurationBps": 200,
          "claimWindowBonusBps": 0,
          "chainBonusBps": 0
        }
      },
      "3": {
        "title": "Specialization-Ready Agro Hub",
        "summary": "Erste Spezialisierung und bessere Claim-Unterstützung.",
        "specialization": "LogisticsHub / HarvestNode unlock",
        "visualCues": [
          "branching grow pods",
          "small claim station",
          "efficient irrigation grid"
        ],
        "stats": {
          "farmingBoostBps": 600,
          "boostDurationBps": 300,
          "claimWindowBonusBps": 100,
          "chainBonusBps": 0
        }
      },
      "4": {
        "title": "Mid-Tier Farm Grid",
        "summary": "Stärkerer Produktionskern mit ersten Kettenvorteilen.",
        "specialization": "LogisticsHub active",
        "visualCues": [
          "modular greenhouse ring",
          "boost relays",
          "logistics junction"
        ],
        "stats": {
          "farmingBoostBps": 800,
          "boostDurationBps": 400,
          "claimWindowBonusBps": 200,
          "chainBonusBps": 50
        }
      },
      "5": {
        "title": "Yield Coordination Hub",
        "summary": "Spürbare Supply- und Claim-Optimierung.",
        "specialization": "HarvestNode active",
        "visualCues": [
          "double greenhouse bays",
          "claim control tower",
          "resource routing ducts"
        ],
        "stats": {
          "farmingBoostBps": 1000,
          "boostDurationBps": 500,
          "claimWindowBonusBps": 300,
          "chainBonusBps": 150
        }
      },
      "6": {
        "title": "Advanced Chain Farm",
        "summary": "Stark vernetztes Produktionszentrum mit langen Buffs.",
        "specialization": "ChainFarm prep",
        "visualCues": [
          "interlinked grow domes",
          "boost array",
          "supply bridge"
        ],
        "stats": {
          "farmingBoostBps": 1200,
          "boostDurationBps": 600,
          "claimWindowBonusBps": 400,
          "chainBonusBps": 300
        }
      },
      "7": {
        "title": "Master Farming Hub",
        "summary": "Max-Level Produktionskomplex mit District-Readiness.",
        "specialization": "District farm synergy prep",
        "visualCues": [
          "multi-dome agro complex",
          "high-yield command core",
          "district synergy pylons"
        ],
        "stats": {
          "farmingBoostBps": 1500,
          "boostDurationBps": 800,
          "claimWindowBonusBps": 500,
          "chainBonusBps": 500
        }
      }
    }
  },
  "forge": {
    "slug": "forge",
    "name": "Forge",
    "role": "Crafting / Creator / Quality",
    "description": "Crafting-, Provenance- und Creator-Gebäude für Rezepte und Qualitätsboni.",
    "levels": {
      "1": {
        "title": "Starter Workshop Forge",
        "summary": "Einfacher Crafting-Startpunkt mit kleinem Kostenbonus.",
        "specialization": null,
        "visualCues": [
          "single furnace",
          "small workbench bay",
          "starter chimney"
        ],
        "stats": {
          "craftTier": 1,
          "recipeTier": 1,
          "craftCostReductionBps": 75,
          "provenanceBonusBps": 0,
          "outputQualityBps": 0
        }
      },
      "2": {
        "title": "Improved Forge Hall",
        "summary": "Mehr Produktionsfluss und bessere Materialorganisation.",
        "specialization": null,
        "visualCues": [
          "reinforced furnace chamber",
          "material racks",
          "dual exhaust vents"
        ],
        "stats": {
          "craftTier": 1,
          "recipeTier": 1,
          "craftCostReductionBps": 150,
          "provenanceBonusBps": 0,
          "outputQualityBps": 0
        }
      },
      "3": {
        "title": "Specialization Forge",
        "summary": "Craft Tier 2 mit ersten Provenance-Vorteilen.",
        "specialization": "WeaponForge / RelicForge / ComponentForge unlock",
        "visualCues": [
          "branching tool bays",
          "specialization anvil",
          "recipe archive niche"
        ],
        "stats": {
          "craftTier": 2,
          "recipeTier": 2,
          "craftCostReductionBps": 225,
          "provenanceBonusBps": 100,
          "outputQualityBps": 0
        }
      },
      "4": {
        "title": "Refined Production Forge",
        "summary": "Stabilere Produktionskette und sichtbare Qualitätssteigerung.",
        "specialization": "WeaponForge active",
        "visualCues": [
          "enhanced smelting core",
          "precision assembly table",
          "forged sigil panel"
        ],
        "stats": {
          "craftTier": 2,
          "recipeTier": 2,
          "craftCostReductionBps": 300,
          "provenanceBonusBps": 200,
          "outputQualityBps": 50
        }
      },
      "5": {
        "title": "Advanced Creator Forge",
        "summary": "Tier 3 Crafting mit ersten echten Output-Boni.",
        "specialization": "RelicForge active",
        "visualCues": [
          "heavy forge hall",
          "creator annex",
          "quality inspection chamber"
        ],
        "stats": {
          "craftTier": 3,
          "recipeTier": 3,
          "craftCostReductionBps": 375,
          "provenanceBonusBps": 300,
          "outputQualityBps": 125
        }
      },
      "6": {
        "title": "High-Tier Provenance Forge",
        "summary": "Starker Creator-Charakter mit hoher Materialeffizienz.",
        "specialization": "ComponentForge active",
        "visualCues": [
          "multi-furnace production hall",
          "provenance beacon",
          "rare alloy vault"
        ],
        "stats": {
          "craftTier": 3,
          "recipeTier": 3,
          "craftCostReductionBps": 500,
          "provenanceBonusBps": 400,
          "outputQualityBps": 250
        }
      },
      "7": {
        "title": "Master Forge",
        "summary": "Max-Level Forge mit Creator-System-Readiness und Master-Rezepten.",
        "specialization": "MasterForge unlock",
        "visualCues": [
          "monumental furnace core",
          "master recipe sanctum",
          "creator-grade output platform"
        ],
        "stats": {
          "craftTier": 4,
          "recipeTier": 4,
          "craftCostReductionBps": 650,
          "provenanceBonusBps": 600,
          "outputQualityBps": 500
        }
      }
    }
  },
  "warehouse": {
    "slug": "warehouse",
    "name": "Warehouse",
    "role": "Storage / Vault / Logistics",
    "description": "Lager-, Vault-, Raid-, Repair- und Decay-Vorbereitung für Ressourcenströme.",
    "levels": {
      "1": {
        "title": "Starter Storage Depot",
        "summary": "Basislager mit kleinen Reserve- und Schutzkapazitäten.",
        "specialization": null,
        "visualCues": [
          "compact depot hall",
          "single loading bay",
          "sealed crates"
        ],
        "stats": {
          "vaultTier": 1,
          "capacityTier": 1,
          "reserveBuckets": 1,
          "protectedBuckets": 1,
          "raidableBuckets": 1
        }
      },
      "2": {
        "title": "Expanded Storage",
        "summary": "Mehr Reservekapazität und bessere Materialstruktur.",
        "specialization": null,
        "visualCues": [
          "second storage wing",
          "stacked containers",
          "reinforced shutter"
        ],
        "stats": {
          "vaultTier": 1,
          "capacityTier": 1,
          "reserveBuckets": 2,
          "protectedBuckets": 1,
          "raidableBuckets": 2
        }
      },
      "3": {
        "title": "Vault-Ready Warehouse",
        "summary": "Erste Decay- und Repair-Vorbereitung wird sichtbar.",
        "specialization": "MerchantVault / DeepStorage prep",
        "visualCues": [
          "vault hatch",
          "repair platform",
          "durability console"
        ],
        "stats": {
          "vaultTier": 2,
          "capacityTier": 2,
          "reserveBuckets": 3,
          "protectedBuckets": 1,
          "raidableBuckets": 2
        }
      },
      "4": {
        "title": "Mid-Tier Logistics Warehouse",
        "summary": "Deutlicher Logistiksprung mit stabiler Reserveverwaltung.",
        "specialization": "DeepStorage active",
        "visualCues": [
          "cargo ramps",
          "reserve chamber",
          "structural reinforcements"
        ],
        "stats": {
          "vaultTier": 2,
          "capacityTier": 2,
          "reserveBuckets": 4,
          "protectedBuckets": 1,
          "raidableBuckets": 3
        }
      },
      "5": {
        "title": "Protected Trade Warehouse",
        "summary": "Stärkere Schutz- und Yield-Vorbereitung mit Guard-Synergie.",
        "specialization": "MerchantVault unlock",
        "visualCues": [
          "protected vault door",
          "trade reserve bay",
          "defense anchor nodes"
        ],
        "stats": {
          "vaultTier": 3,
          "capacityTier": 3,
          "reserveBuckets": 5,
          "protectedBuckets": 2,
          "raidableBuckets": 3
        }
      },
      "6": {
        "title": "Advanced Vault Complex",
        "summary": "Hohe Kapazität und sichtbare Raid-/Repair-Readiness.",
        "specialization": "ShieldedStorage prep",
        "visualCues": [
          "multi-chamber vault",
          "repair gantry",
          "emergency lock array"
        ],
        "stats": {
          "vaultTier": 3,
          "capacityTier": 3,
          "reserveBuckets": 6,
          "protectedBuckets": 2,
          "raidableBuckets": 4
        }
      },
      "7": {
        "title": "Master Warehouse",
        "summary": "Max-Level Storage-Komplex mit Vault-, Rebel- und Yield-Prep.",
        "specialization": "MerchantVault / ShieldedStorage elite",
        "visualCues": [
          "grand vault core",
          "stacked high-capacity silos",
          "fortified logistics spine"
        ],
        "stats": {
          "vaultTier": 4,
          "capacityTier": 4,
          "reserveBuckets": 8,
          "protectedBuckets": 3,
          "raidableBuckets": 4
        }
      }
    }
  },
  "market-stall": {
    "slug": "market-stall",
    "name": "Market Stall",
    "role": "Trade / Listing / Visibility",
    "description": "Handels-, Listing- und Premium-Sichtbarkeits-Gebäude für den Personal Market Layer.",
    "levels": {
      "1": {
        "title": "Starter Vendor Stall",
        "summary": "Einfacher Marktstand mit begrenzten Listings.",
        "specialization": null,
        "visualCues": [
          "single trade counter",
          "small awning",
          "basic display shelves"
        ],
        "stats": {
          "listingCap": 3,
          "categoryMask": 1,
          "feeReductionBps": 0,
          "premiumVisibilityBps": 0,
          "provenancePremium": false
        }
      },
      "2": {
        "title": "Expanded Trading Booth",
        "summary": "Mehr Listings und erste Fee-Vorteile.",
        "specialization": null,
        "visualCues": [
          "second display side",
          "organized goods racks",
          "market signage architecture"
        ],
        "stats": {
          "listingCap": 5,
          "categoryMask": 3,
          "feeReductionBps": 100,
          "premiumVisibilityBps": 50,
          "provenancePremium": false
        }
      },
      "3": {
        "title": "Specialization Market Stall",
        "summary": "Breiteres Handelsprofil und erste Premium-Sichtbarkeit.",
        "specialization": "MerchantHouse unlock",
        "visualCues": [
          "larger canopy",
          "multi-category shelves",
          "merchant ledger kiosk"
        ],
        "stats": {
          "listingCap": 8,
          "categoryMask": 7,
          "feeReductionBps": 200,
          "premiumVisibilityBps": 100,
          "provenancePremium": false
        }
      },
      "4": {
        "title": "Trade Depot Front",
        "summary": "Mehr Kategorien und deutlicher Präsenzgewinn.",
        "specialization": "TradeDepot unlock",
        "visualCues": [
          "trade depot annex",
          "crate staging area",
          "premium display bay"
        ],
        "stats": {
          "listingCap": 12,
          "categoryMask": 15,
          "feeReductionBps": 300,
          "premiumVisibilityBps": 150,
          "provenancePremium": false
        }
      },
      "5": {
        "title": "Commercial Node",
        "summary": "Mittelgroßes Handelszentrum mit stabiler Listing-Macht.",
        "specialization": "MerchantHouse active",
        "visualCues": [
          "double vendor arc",
          "merchant office",
          "featured item podium"
        ],
        "stats": {
          "listingCap": 16,
          "categoryMask": 31,
          "feeReductionBps": 400,
          "premiumVisibilityBps": 250,
          "provenancePremium": false
        }
      },
      "6": {
        "title": "Premium Trading Post",
        "summary": "Hohe Sichtbarkeit mit Provenance-Premium-Readiness.",
        "specialization": "TradeDepot active",
        "visualCues": [
          "premium showcase lane",
          "rare goods vault",
          "elevated trade sign"
        ],
        "stats": {
          "listingCap": 20,
          "categoryMask": 63,
          "feeReductionBps": 550,
          "premiumVisibilityBps": 400,
          "provenancePremium": true
        }
      },
      "7": {
        "title": "Master Market Stall",
        "summary": "Max-Level Handelsknoten mit Elite-Rechten und Premium-Präsenz.",
        "specialization": "Merchant elite prep",
        "visualCues": [
          "grand bazaar canopy",
          "elite merchant annex",
          "premium provenance gallery"
        ],
        "stats": {
          "listingCap": 25,
          "categoryMask": "broad",
          "feeReductionBps": 750,
          "premiumVisibilityBps": 600,
          "provenancePremium": true
        }
      }
    }
  },
  "guard-tower": {
    "slug": "guard-tower",
    "name": "Guard Tower",
    "role": "Defense / Radar / Protection",
    "description": "Verteidigungs- und Schutzgebäude für Warehouse, Radar und spätere Rebels-Hooks.",
    "levels": {
      "1": {
        "title": "Starter Watchtower",
        "summary": "Kleine Verteidigungsplattform für frühe Plot-Sicherheit.",
        "specialization": null,
        "visualCues": [
          "compact watch platform",
          "single turret head",
          "starter barricade"
        ],
        "stats": {
          "defenseBps": 250,
          "warehouseProtectionBps": 0,
          "raidMitigationBps": 0,
          "radarTier": 0,
          "shieldTier": 0
        }
      },
      "2": {
        "title": "Reinforced Tower",
        "summary": "Mehr defensive Präsenz und robustere Plattform.",
        "specialization": null,
        "visualCues": [
          "reinforced tower base",
          "heavier turret mount",
          "sensor mast"
        ],
        "stats": {
          "defenseBps": 500,
          "warehouseProtectionBps": 0,
          "raidMitigationBps": 0,
          "radarTier": 0,
          "shieldTier": 0
        }
      },
      "3": {
        "title": "Protection Tower",
        "summary": "Erste Warehouse-Schutzsynergien und Branch-Optionen.",
        "specialization": "RadarTower / DefenseTower / MercenaryTower unlock",
        "visualCues": [
          "defense ring",
          "warehouse relay node",
          "targeting console"
        ],
        "stats": {
          "defenseBps": 750,
          "warehouseProtectionBps": 200,
          "raidMitigationBps": 0,
          "radarTier": 0,
          "shieldTier": 0
        }
      },
      "4": {
        "title": "Mitigation Tower",
        "summary": "Defensiver Mid-Tier mit früher Raid-Minderung.",
        "specialization": "DefenseTower active",
        "visualCues": [
          "armored tower shell",
          "mitigation emitters",
          "defense array"
        ],
        "stats": {
          "defenseBps": 1000,
          "warehouseProtectionBps": 400,
          "raidMitigationBps": 175,
          "radarTier": 0,
          "shieldTier": 0
        }
      },
      "5": {
        "title": "Radar Guard Post",
        "summary": "Stärkere Schutzwirkung plus erstes Radar-Tier.",
        "specialization": "RadarTower active",
        "visualCues": [
          "radar dish",
          "signal scanner",
          "guard command platform"
        ],
        "stats": {
          "defenseBps": 1250,
          "warehouseProtectionBps": 600,
          "raidMitigationBps": 350,
          "radarTier": 1,
          "shieldTier": 0
        }
      },
      "6": {
        "title": "Shielded Security Tower",
        "summary": "Hochwertiger Schutz mit Radar- und Shield-Komponenten.",
        "specialization": "ShieldTower prep",
        "visualCues": [
          "shield emitter",
          "advanced radar dome",
          "security relay beams"
        ],
        "stats": {
          "defenseBps": 1500,
          "warehouseProtectionBps": 800,
          "raidMitigationBps": 525,
          "radarTier": 2,
          "shieldTier": 1
        }
      },
      "7": {
        "title": "Master Guard Tower",
        "summary": "Max-Level Defense-Turm mit Mercenary- und Rebel-Readiness.",
        "specialization": "ShieldTower unlock",
        "visualCues": [
          "monumental defense cannon",
          "layered shield arrays",
          "elite command tower"
        ],
        "stats": {
          "defenseBps": 1800,
          "warehouseProtectionBps": 1100,
          "raidMitigationBps": 800,
          "radarTier": 3,
          "shieldTier": 2
        }
      }
    }
  },
  "research-lab": {
    "slug": "research-lab",
    "name": "Research Lab",
    "role": "Tech / Discovery / Unlocks",
    "description": "Tech-, Discovery-, Blueprint- und spätere Enchant/Materia-Vorbereitung.",
    "levels": {
      "1": {
        "title": "Starter Analysis Lab",
        "summary": "Kleines Forschungszentrum für frühe Entdeckungen.",
        "specialization": null,
        "visualCues": [
          "analysis dome",
          "small data console",
          "research antenna"
        ],
        "stats": {
          "techTier": 1,
          "discoveryMask": 1,
          "blueprintUnlockTier": 0,
          "forgeSynergyBps": 0,
          "enchantPrep": false,
          "materiaPrep": false
        }
      },
      "2": {
        "title": "Expanded Study Lab",
        "summary": "Mehr Forschungsfläche und erste Forge-Synergie.",
        "specialization": null,
        "visualCues": [
          "second research bay",
          "data conduits",
          "archive shelves"
        ],
        "stats": {
          "techTier": 1,
          "discoveryMask": 3,
          "blueprintUnlockTier": 0,
          "forgeSynergyBps": 150,
          "enchantPrep": false,
          "materiaPrep": false
        }
      },
      "3": {
        "title": "Blueprint Research Lab",
        "summary": "Tech Tier 2 mit Blueprint-Freischaltung und Spezialisierungsoption.",
        "specialization": "BlueprintLab / MateriaLab / EnchantmentLab unlock",
        "visualCues": [
          "blueprint chamber",
          "discovery nodes",
          "forge-link terminal"
        ],
        "stats": {
          "techTier": 2,
          "discoveryMask": 7,
          "blueprintUnlockTier": 1,
          "forgeSynergyBps": 300,
          "enchantPrep": false,
          "materiaPrep": false
        }
      },
      "4": {
        "title": "Discovery Center",
        "summary": "Stärkerer Forschungsfokus mit höherer Blueprint-Dichte.",
        "specialization": "BlueprintLab active",
        "visualCues": [
          "discovery dome",
          "data lattice",
          "research relay pylons"
        ],
        "stats": {
          "techTier": 2,
          "discoveryMask": 15,
          "blueprintUnlockTier": 2,
          "forgeSynergyBps": 450,
          "enchantPrep": false,
          "materiaPrep": false
        }
      },
      "5": {
        "title": "Advanced Tech Lab",
        "summary": "Tech Tier 3 mit Enchant- und Materia-Vorbereitung.",
        "specialization": "MateriaLab active",
        "visualCues": [
          "tech reactor",
          "enchant prep chamber",
          "materia basin"
        ],
        "stats": {
          "techTier": 3,
          "discoveryMask": 31,
          "blueprintUnlockTier": 3,
          "forgeSynergyBps": 600,
          "enchantPrep": true,
          "materiaPrep": true
        }
      },
      "6": {
        "title": "High-Tier Research Complex",
        "summary": "Breite Discovery-Matrix und starke Forge-Kopplung.",
        "specialization": "EnchantmentLab active",
        "visualCues": [
          "multi-wing lab",
          "advanced scanner array",
          "rare blueprint archive"
        ],
        "stats": {
          "techTier": 3,
          "discoveryMask": 63,
          "blueprintUnlockTier": 4,
          "forgeSynergyBps": 800,
          "enchantPrep": true,
          "materiaPrep": true
        }
      },
      "7": {
        "title": "Master Research Lab",
        "summary": "Max-Level Discovery- und Blueprint-Komplex mit MasterLab-Charakter.",
        "specialization": "MasterLab unlock",
        "visualCues": [
          "monumental lab dome",
          "master archive vault",
          "high-energy research spire"
        ],
        "stats": {
          "techTier": 4,
          "discoveryMask": 127,
          "blueprintUnlockTier": 5,
          "forgeSynergyBps": 1100,
          "enchantPrep": true,
          "materiaPrep": true
        }
      }
    }
  }
};
