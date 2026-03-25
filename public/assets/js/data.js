window.BUILDINGS_DATA = {
  "residence": {
    "slug": "residence",
    "name": "Residence",
    "role": "Prestige / Identity / Display",
    "description": "Starter- und Prestigegebäude für Showcase, Trophy- und Legacy-Präsentation.",
    "synergies": [
      "Market Stall",
      "Research Lab",
      "Forge"
    ],
    "requires": [
      "City Key gesetzt",
      "Faction gewählt",
      "Personal Plot reserviert",
      "Plot vollständig per Qubiq gebaut"
    ],
    "pageTitle": "Residence Gateway"
  },
  "farming-hub": {
    "slug": "farming-hub",
    "name": "Farming Hub",
    "role": "Production / Boost / Claim Support",
    "description": "Zeitgesteuerte Farm-Booster, Claim-Window-Verbesserung und Produktionsfluss.",
    "synergies": [
      "Warehouse",
      "Market Stall",
      "Research Lab"
    ],
    "requires": [
      "City Key gesetzt",
      "Faction gewählt",
      "Personal Plot vollständig",
      "FarmingV6 gekoppelt"
    ],
    "pageTitle": "Farming Hub"
  },
  "forge": {
    "slug": "forge",
    "name": "Forge",
    "role": "Crafting / Creator / Quality",
    "description": "Crafting-Zugang, Spezialisierungen und provenance-starke High-Tier-Rezepte.",
    "synergies": [
      "Research Lab",
      "Warehouse",
      "Market Stall",
      "Residence"
    ],
    "requires": [
      "Plot vollständig",
      "Crafting Stack live",
      "Research Tier optional"
    ],
    "pageTitle": "Forge"
  },
  "warehouse": {
    "slug": "warehouse",
    "name": "Warehouse",
    "role": "Storage / Vault / Logistics",
    "description": "Ressourcenlager, späterer Vault-, Raid-, Decay- und Repair-Prep-Layer.",
    "synergies": [
      "Farming Hub",
      "Market Stall",
      "Forge",
      "Guard Tower"
    ],
    "requires": [
      "Plot vollständig",
      "ResourceToken Approval",
      "Vault-Logik aktivierbar"
    ],
    "pageTitle": "Warehouse"
  },
  "market-stall": {
    "slug": "market-stall",
    "name": "Market Stall",
    "role": "Trade / Listing / Visibility",
    "description": "Listing-Rechte, Fee-Reduktion, Kategorie-Freischaltungen und Premium-Sichtbarkeit.",
    "synergies": [
      "Residence",
      "Warehouse",
      "Forge",
      "Guard Tower",
      "Research Lab"
    ],
    "requires": [
      "Plot vollständig",
      "Marketplace UI",
      "spätere Community-Market-Anbindung"
    ],
    "pageTitle": "Market Stall"
  },
  "guard-tower": {
    "slug": "guard-tower",
    "name": "Guard Tower",
    "role": "Defense / Radar / Protection",
    "description": "Defense-Kern für Raid-Minderung, Radar-, Shield- und Mercenary-Synergien.",
    "synergies": [
      "Warehouse",
      "Market Stall",
      "Research Lab",
      "Residence"
    ],
    "requires": [
      "Plot vollständig",
      "PiratesV6 / MercenaryV4 eingebunden"
    ],
    "pageTitle": "Guard Tower"
  },
  "research-lab": {
    "slug": "research-lab",
    "name": "Research Lab",
    "role": "Tech / Discovery / Unlocks",
    "description": "Tech-Tiers, Discovery-Masken, Blueprint- und später Enchant/Materia-Freigaben.",
    "synergies": [
      "Forge",
      "Guard Tower",
      "Farming Hub",
      "Market Stall",
      "Residence"
    ],
    "requires": [
      "Plot vollständig",
      "Crafting Stack live",
      "Tech-Gating gewünscht"
    ],
    "pageTitle": "Research Lab"
  }
};
window.CONTRACTS_DATA = {
  "cityCore": {
    "CityConfig": {
      "address": "0x565076216ec76E7Af61BafBE22D8EA7C1C8DF691",
      "abi": "/assets/abis/city-core/CityConfig.json",
      "functionCount": 33,
      "eventCount": 4,
      "errorCount": 4
    },
    "CityRegistry": {
      "address": "0x5d3269813Fea0C0F487A21cBf9992b95008558BF",
      "abi": "/assets/abis/city-core/CityRegistry.json",
      "functionCount": 22,
      "eventCount": 5,
      "errorCount": 10
    },
    "CityLand": {
      "address": "0x0547a35c2Ff215004A2EBfe2Be5f3A8EeE6A5323",
      "abi": "/assets/abis/city-core/CityLand.json",
      "functionCount": 22,
      "eventCount": 5,
      "errorCount": 7
    },
    "CityDistricts": {
      "address": "0xB3cFaeDA09FB5ee84C3c26F276980773197af113",
      "abi": "/assets/abis/city-core/CityDistricts.json",
      "functionCount": 12,
      "eventCount": 1,
      "errorCount": 4
    },
    "CityStatus": {
      "address": "0x28AfE371044e9AcD4C99Bef3F5FbBe2431cF04C0",
      "abi": "/assets/abis/city-core/CityStatus.json",
      "functionCount": 16,
      "eventCount": 3,
      "errorCount": 4
    },
    "CityHistory": {
      "address": "0x6C83aC3E4C58c493e3116E31cF7e32935497Af3c",
      "abi": "/assets/abis/city-core/CityHistory.json",
      "functionCount": 11,
      "eventCount": 5,
      "errorCount": 5
    },
    "CityValidation": {
      "address": "0x77BBd6850C2780055c4C20008145E9E5dEC20332",
      "abi": "/assets/abis/city-core/CityValidation.json",
      "functionCount": 14,
      "eventCount": 1,
      "errorCount": 3
    }
  },
  "ecosystem": {
    "INPI": {
      "address": "0x232FB12582ac10d5fAd97e9ECa22670e8Ba67d0D",
      "abi": "/assets/abis/ecosystem/INPI.json",
      "functionCount": 15,
      "eventCount": 3,
      "errorCount": 8
    },
    "ResourceToken": {
      "address": "0x71E76a6065197acdd1a4d6B736712F80D1Fd3D8b",
      "abi": "/assets/abis/ecosystem/ResourceToken.json",
      "functionCount": 31,
      "eventCount": 7,
      "errorCount": 9
    },
    "InpinityNFT": {
      "address": "0x277a0D5864293C78d7387C54B48c35D5E9578Ab1",
      "abi": "/assets/abis/ecosystem/InpinityNFT.json",
      "functionCount": 40,
      "eventCount": 8,
      "errorCount": 12
    },
    "PartnershipV2": {
      "address": "0xb18323efE4Cc8c36e10D664E287b4e2c82Fe3ad9",
      "abi": "/assets/abis/ecosystem/PartnershipV2.json",
      "functionCount": 11,
      "eventCount": 3,
      "errorCount": 2
    },
    "Pitrone": {
      "address": "0x7240Ec5B3Ba944888E186c74D0f8B4F5F71c9AE8",
      "abi": "/assets/abis/ecosystem/Pitrone.json",
      "functionCount": 23,
      "eventCount": 5,
      "errorCount": 8
    },
    "FarmingV6": {
      "address": "0x55Ee68e576E97288802D3b887d79Bf7177EfCb92",
      "abi": "/assets/abis/ecosystem/FarmingV6.json",
      "functionCount": 65,
      "eventCount": 16,
      "errorCount": 20
    },
    "PiratesV6": {
      "address": "0xc3A9c40fE8664A0aa9243a8DEe27ADf4E4f9e731",
      "abi": "/assets/abis/ecosystem/PiratesV6.json",
      "functionCount": 57,
      "eventCount": 16,
      "errorCount": 22
    },
    "MercenaryV4": {
      "address": "0x484d4ae1C70c938a4819B04d4b08DCBFf9639094",
      "abi": "/assets/abis/ecosystem/MercenaryV4.json",
      "functionCount": 58,
      "eventCount": 13,
      "errorCount": 19
    }
  }
};
window.PERSONAL_BUILDINGS_MANIFEST = [
  {
    "slug": "residence",
    "faction": "inpinity",
    "name": "Residence",
    "imageLocal": "/assets/images/personal-buildings/residence-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/residence-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/residence-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/residence-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=residence&faction=inpinity"
  },
  {
    "slug": "residence",
    "faction": "inphinity",
    "name": "Residence",
    "imageLocal": "/assets/images/personal-buildings/residence-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/residence-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/residence-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/residence-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=residence&faction=inphinity"
  },
  {
    "slug": "farming-hub",
    "faction": "inpinity",
    "name": "Farming Hub",
    "imageLocal": "/assets/images/personal-buildings/farming-hub-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/farming-hub-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/farming-hub-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/farming-hub-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=farming-hub&faction=inpinity"
  },
  {
    "slug": "farming-hub",
    "faction": "inphinity",
    "name": "Farming Hub",
    "imageLocal": "/assets/images/personal-buildings/farming-hub-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/farming-hub-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/farming-hub-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/farming-hub-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=farming-hub&faction=inphinity"
  },
  {
    "slug": "forge",
    "faction": "inpinity",
    "name": "Forge",
    "imageLocal": "/assets/images/personal-buildings/forge-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/forge-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/forge-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/forge-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=forge&faction=inpinity"
  },
  {
    "slug": "forge",
    "faction": "inphinity",
    "name": "Forge",
    "imageLocal": "/assets/images/personal-buildings/forge-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/forge-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/forge-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/forge-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=forge&faction=inphinity"
  },
  {
    "slug": "warehouse",
    "faction": "inpinity",
    "name": "Warehouse",
    "imageLocal": "/assets/images/personal-buildings/warehouse-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/warehouse-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/warehouse-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/warehouse-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=warehouse&faction=inpinity"
  },
  {
    "slug": "warehouse",
    "faction": "inphinity",
    "name": "Warehouse",
    "imageLocal": "/assets/images/personal-buildings/warehouse-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/warehouse-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/warehouse-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/warehouse-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=warehouse&faction=inphinity"
  },
  {
    "slug": "market-stall",
    "faction": "inpinity",
    "name": "Market Stall",
    "imageLocal": "/assets/images/personal-buildings/market-stall-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/market-stall-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/market-stall-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/market-stall-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=market-stall&faction=inpinity"
  },
  {
    "slug": "market-stall",
    "faction": "inphinity",
    "name": "Market Stall",
    "imageLocal": "/assets/images/personal-buildings/market-stall-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/market-stall-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/market-stall-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/market-stall-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=market-stall&faction=inphinity"
  },
  {
    "slug": "guard-tower",
    "faction": "inpinity",
    "name": "Guard Tower",
    "imageLocal": "/assets/images/personal-buildings/guard-tower-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/guard-tower-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/guard-tower-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/guard-tower-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=guard-tower&faction=inpinity"
  },
  {
    "slug": "guard-tower",
    "faction": "inphinity",
    "name": "Guard Tower",
    "imageLocal": "/assets/images/personal-buildings/guard-tower-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/guard-tower-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/guard-tower-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/guard-tower-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=guard-tower&faction=inphinity"
  },
  {
    "slug": "research-lab",
    "faction": "inpinity",
    "name": "Research Lab",
    "imageLocal": "/assets/images/personal-buildings/research-lab-inpinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/research-lab-inpinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/research-lab-inpinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/research-lab-inpinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=research-lab&faction=inpinity"
  },
  {
    "slug": "research-lab",
    "faction": "inphinity",
    "name": "Research Lab",
    "imageLocal": "/assets/images/personal-buildings/research-lab-inphinity.png",
    "imageUri": "https://assets.inpinity.online/city/images/buildings/personal/research-lab-inphinity.png",
    "metadataLocal": "/assets/metadata/personal-buildings/research-lab-inphinity.json",
    "metadataUri": "https://assets.inpinity.online/city/metadata/buildings/personal/research-lab-inphinity.json",
    "externalUrl": "https://city.inpinity.online/building.html?building=research-lab&faction=inphinity"
  }
];