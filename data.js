const carData = {
  "0.0": {
    "AUDI": {
      "A6 e-tron": [
        {
          "name": "2025 Audi A6 e-tron",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 85000,
          "maxPrice": 110000,
          "image": "images/cars/AUDI_A6etron_1_1786219230523.jpg"
        }
      ],
      "e-tron": [
        {
          "name": "2019-2022 Audi e-tron (Pre-Facelift)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 37000,
          "maxPrice": 47000,
          "image": "images/cars/AUDI_etron_1_1786219234349.jpg"
        },
        {
          "name": "2023-2026 Audi Q8 e-tron (Facelift)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 54000,
          "maxPrice": 65000,
          "image": "images/cars/AUDI_etron_2_1786220286995.jpg"
        }
      ],
      "e-tron GT": [
        {
          "name": "2022-2024 Audi e-tron GT (Pre-Facelift)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 58000,
          "maxPrice": 66000,
          "image": "images/cars/AUDI_etronGT_1_1786219239302.png"
        },
        {
          "name": "2025-2026 Audi e-tron GT (Facelift)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 75000,
          "maxPrice": 85000,
          "image": "images/cars/AUDI_etronGT_2_1786220295647.jpg"
        }
      ]
    },
    "BMW": {
      "i3": [
        {
          "name": "2014-2017 BMW i3 (Pre-LCI)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 14500,
          "maxPrice": 18500,
          "image": "images/cars/BMW_i3_1_1786219262106.jpg"
        },
        {
          "name": "2018-2022 BMW i3 / i3s (LCI Restyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 18500,
          "maxPrice": 23500,
          "image": "images/cars/BMW_i3_2_1786220313503.jpg"
        }
      ],
      "i4": [
        {
          "name": "2022-2024 BMW i4 (Pre-LCI)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 36500,
          "maxPrice": 50000,
          "image": "images/cars/BMW_i4_1_1786219270473.jpg"
        },
        {
          "name": "2025-2026 BMW i4 (LCI Restyling)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 44000,
          "maxPrice": 60000,
          "image": "images/cars/BMW_i4_2_1786220318701.jpg"
        }
      ],
      "i5": [
        {
          "name": "2024-2026 BMW i5",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 53000,
          "maxPrice": 67000,
          "image": "images/cars/BMW_i5_1_1786219274620.jpg"
        }
      ],
      "i7": [
        {
          "name": "2023-2026 BMW i7",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 75000,
          "maxPrice": 95000,
          "image": "images/cars/BMW_i7_1_1786219278946.jpg"
        }
      ],
      "iX": [
        {
          "name": "2022-2026 BMW ",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/BMW_iX_1_1786219283665.png"
        }
      ]
    },
    "CADILLAC": {
      "Escalade IQ": [
        {
          "name": "2025 Cadillac Escalade IQ",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 180000,
          "maxPrice": 240000,
          "image": "images/cars/CADILLAC_EscaladeIQ_1_1786219295740.jpg"
        }
      ]
    },
    "CHEVROLET": {
      "Blazer EV": [
        {
          "name": "2024-2025 Chevrolet Blazer EV",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 65000,
          "maxPrice": 85000,
          "image": "images/cars/CHEVROLET_BlazerEV_1_1786219310920.webp"
        }
      ],
      "Bolt EUV": [
        {
          "name": "2022-2023 Chevrolet Bolt EUV",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/CHEVROLET_BoltEUV_1_1786219321794.jpg"
        }
      ],
      "Bolt EV": [
        {
          "name": "2017-2021 Chevrolet Bolt EV (Dorestyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 18000,
          "maxPrice": 25000,
          "image": "images/cars/CHEVROLET_BoltEV_1_1786219331332.jpg"
        },
        {
          "name": "2022-2023 Chevrolet Bolt EV (Restyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 26000,
          "maxPrice": 34000,
          "image": "images/cars/CHEVROLET_BoltEV_2_1786220346247.jpg"
        }
      ],
      "Equinox EV": [
        {
          "name": "2024-2026 Chevrolet Equinox EV",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 50000,
          "maxPrice": 68000,
          "image": "images/cars/CHEVROLET_EquinoxEV_1_1786219339906.jpg"
        }
      ],
      "Silverado EV": [
        {
          "name": "2024 Chevrolet Silverado EV",
          "type": "Pickup",
          "fuel": "Electric",
          "minPrice": 110000,
          "maxPrice": 150000,
          "image": "images/cars/CHEVROLET_SilveradoEV_1_1786219349985.png"
        }
      ]
    },
    "DODGE": {
      "Charger Daytona": [
        {
          "name": "2024-2025 Dodge Charger Daytona EV",
          "type": "Coupe",
          "fuel": "Electric",
          "minPrice": 42000,
          "maxPrice": 60000,
          "image": "images/cars/DODGE_ChargerDaytona_1_1786219363869.jpg"
        }
      ]
    },
    "FORD": {
      "E-Transit": [
        {
          "name": "2022-2023 Ford E-Transit 350",
          "type": "Van",
          "fuel": "Electric",
          "minPrice": 30000,
          "maxPrice": 40000,
          "image": "images/cars/FORD_ETransit_1_1786219405056.jpg"
        }
      ],
      "F-150 Lightning": [
        {
          "name": "2022-2025 Ford F-150 Lightning",
          "type": "Pickup",
          "fuel": "Electric",
          "minPrice": 55000,
          "maxPrice": 90000,
          "image": "images/cars/FORD_F150Lightning_1_1786219414608.jpg"
        }
      ],
      "Mustang Mach-E": [
        {
          "name": "2021-2025 Ford Mustang Mach-E",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 30000,
          "maxPrice": 45000,
          "image": "images/cars/FORD_MustangMachE_1_1786219421010.jpg"
        }
      ]
    },
    "GENESIS": {
      "Electrified G80": [
        {
          "name": "2023 Genesis Electrified G80",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 40000,
          "maxPrice": 55000,
          "image": "images/cars/GENESIS_ElectrifiedG80_1_1786219442110.jpg"
        }
      ],
      "Electrified GV70": [
        {
          "name": "2023-2025 Genesis Electrified GV70",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 45000,
          "maxPrice": 65000,
          "image": "images/cars/GENESIS_ElectrifiedGV70_1_1786219448265.jpg"
        }
      ],
      "GV60": [
        {
          "name": "2024 Genesis GV60",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 28000,
          "maxPrice": 40000,
          "image": "images/cars/GENESIS_GV60_1_1786219452310.webp"
        }
      ]
    },
    "GMC": {
      "Hummer EV": [
        {
          "name": "2024-2025 GMC Hummer EV SUV / Pickup",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 140000,
          "maxPrice": 200000,
          "image": "images/cars/GMC_HummerEV_1_1786219462460.jpg"
        }
      ],
      "Sierra EV": [
        {
          "name": "2024 GMC Sierra EV Denali",
          "type": "Pickup",
          "fuel": "Electric",
          "minPrice": 130000,
          "maxPrice": 170000,
          "image": "images/cars/GMC_SierraEV_1_1786219467330.jpg"
        }
      ]
    },
    "HYUNDAI": {
      "Ioniq": [
        {
          "name": "2017-2019 Hyundai Ioniq Electric (Dorestyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 17000,
          "maxPrice": 20000,
          "image": "images/cars/HYUNDAI_Ioniq_1_1786219481642.jpg"
        },
        {
          "name": "2020-2022 Hyundai Ioniq Electric (Restyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 20000,
          "maxPrice": 28000,
          "image": "images/cars/HYUNDAI_Ioniq_2_1786220360841.jpg"
        }
      ],
      "Ioniq 5": [
        {
          "name": "2022-2024 Hyundai Ioniq 5 (Pre-Facelift)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 22000,
          "maxPrice": 32000,
          "image": "images/cars/HYUNDAI_Ioniq5_1_1786219492487.jpg"
        },
        {
          "name": "2025-2026 Hyundai Ioniq 5 (Facelift)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 28000,
          "maxPrice": 35000,
          "image": "images/cars/HYUNDAI_Ioniq5_2_1786220366087.jpg"
        }
      ],
      "Ioniq 6": [
        {
          "name": "2023-2025 Hyundai Ioniq 6",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 25000,
          "maxPrice": 35000,
          "image": "images/cars/HYUNDAI_Ioniq6_1_1786219495804.jpg"
        }
      ],
      "Kona Electric": [
        {
          "name": "2019-2021 Hyundai Kona Electric (Dorestyling)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 26000,
          "maxPrice": 34000,
          "image": "images/cars/HYUNDAI_KonaElectric_1_1786220379583.jpg"
        },
        {
          "name": "2022-2023 Hyundai Kona Electric (Restyling Mk1)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 35000,
          "maxPrice": 42000,
          "image": "images/cars/HYUNDAI_KonaElectric_2_1786220387581.jpg"
        },
        {
          "name": "2024-2026 Hyundai Kona Electric (Mk2 Generation)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 43000,
          "maxPrice": 52000,
          "image": "images/cars/HYUNDAI_KonaElectric_3_1786220391779.jpg"
        }
      ]
    },
    "JAGUAR": {
      "I-Pace": [
        {
          "name": "2019-2024 Jaguar I-Pace",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 50000,
          "maxPrice": 80000,
          "image": "images/cars/JAGUAR_IPace_1_1786219510575.jpg"
        }
      ]
    },
    "JEEP": {
      "Wagoneer S": [
        {
          "name": "2025 Jeep Wagoneer S EV",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 100000,
          "maxPrice": 130000,
          "image": "images/cars/JEEP_WagoneerS_1_1786219520391.jpg"
        }
      ]
    },
    "KIA": {
      "EV6": [
        {
          "name": "2022-2024 KIA EV6 (Pre-Facelift)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 50000,
          "maxPrice": 68000,
          "image": "images/cars/KIA_EV6_1_1786219529164.jpg"
        },
        {
          "name": "2025-2026 KIA EV6 (Facelift)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 70000,
          "maxPrice": 85000,
          "image": "images/cars/KIA_EV6_2_1786220401309.jpg"
        }
      ],
      "EV9": [
        {
          "name": "2024-2026 KIA EV9",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 85000,
          "maxPrice": 115000,
          "image": "images/cars/KIA_EV9_1_1786219533311.jpg"
        }
      ],
      "Niro EV": [
        {
          "name": "2019-2022 KIA Niro EV (Mk1)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/KIA_NiroEV_1_1786219537288.jpg"
        },
        {
          "name": "2023-2026 KIA Niro EV (Mk2 Generation)",
          "type": "Crossover",
          "fuel": "Electric",
          "minPrice": 38000,
          "maxPrice": 48000,
          "image": "images/cars/KIA_NiroEV_2_1786220408266.jpg"
        }
      ]
    },
    "LEXUS": {
      "RZ": [
        {
          "name": "2023-2026 Lexus RZ 450e / RZ 350e",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 75000,
          "maxPrice": 100000,
          "image": "images/cars/LEXUS_RZ_1_1786219544972.jpg"
        }
      ]
    },
    "MERCEDES-BENZ": {
      "B-Class": [],
      "EQB": [
        {
          "name": "2022-2023 Mercedes-Benz EQB (Pre-Facelift)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 58000,
          "maxPrice": 72000,
          "image": "images/cars/MERCEDESBENZ_EQB_1_1786219564115.jpg"
        },
        {
          "name": "2024-2026 Mercedes-Benz EQB (Facelift)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 73000,
          "maxPrice": 88000,
          "image": "images/cars/MERCEDESBENZ_EQB_2_1786220424771.jpg"
        }
      ],
      "EQE": [
        {
          "name": "2023-2025 Mercedes-Benz EQE 350 / 500",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 95000,
          "maxPrice": 130000,
          "image": "images/cars/MERCEDESBENZ_EQE_1_1786219569521.jpg"
        }
      ],
      "EQS": [
        {
          "name": "2022-2024 Mercedes-Benz EQS (Pre-Facelift)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 110000,
          "maxPrice": 150000,
          "image": "images/cars/MERCEDESBENZ_EQS_1_1786219577824.jpg"
        },
        {
          "name": "2025-2026 Mercedes-Benz EQS (Facelift Grille)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 155000,
          "maxPrice": 195000,
          "image": "images/cars/MERCEDESBENZ_EQS_2_1786220433366.jpg"
        }
      ],
      "G-Class": [
        {
          "name": "2025 Mercedes-Benz G 580 EQ",
          "type": "Off-Road SUV",
          "fuel": "Electric",
          "minPrice": 220000,
          "maxPrice": 280000,
          "image": "images/cars/MERCEDESBENZ_GClass_1_1786219582573.jpg"
        }
      ]
    },
    "NISSAN": {
      "Ariya": [
        {
          "name": "2023-2025 Nissan Ariya",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 52000,
          "maxPrice": 72000,
          "image": "images/cars/NISSAN_Ariya_1_1786219593714.jpg"
        }
      ],
      "Leaf": [
        {
          "name": "2018-2022 Nissan Leaf Mk2 (Pre-Facelift)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 18000,
          "maxPrice": 25000,
          "image": "images/cars/NISSAN_Leaf_1_1786219604656.jpg"
        },
        {
          "name": "2023-2025 Nissan Leaf Mk2 (Restyling)",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 26000,
          "maxPrice": 33000,
          "image": "images/cars/NISSAN_Leaf_2_1786220444457.jpg"
        }
      ]
    },
    "PORSCHE": {
      "Macan EV": [
        {
          "name": "2025 Porsche Macan EV",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 110000,
          "maxPrice": 160000,
          "image": "images/cars/PORSCHE_MacanEV_1_1786219622744.jpg"
        }
      ],
      "Taycan": [
        {
          "name": "2020-2024 Porsche Taycan (Pre-Facelift)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 95000,
          "maxPrice": 150000,
          "image": "images/cars/PORSCHE_Taycan_1_1786219628158.jpg"
        },
        {
          "name": "2025-2026 Porsche Taycan (Facelift)",
          "type": "Coupe Sedan",
          "fuel": "Electric",
          "minPrice": 155000,
          "maxPrice": 230000,
          "image": "images/cars/PORSCHE_Taycan_2_1786220459697.webp"
        }
      ]
    },
    "SMART": {
      "Fortwo": [
        {
          "name": "2017-2019 Smart Fortwo Electric Drive / EQ",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 14000,
          "maxPrice": 19000,
          "image": "images/cars/SMART_Fortwo_1_1786219654832.jpg"
        }
      ]
    },
    "TESLA": {
      "Cybertruck": [
        {
          "name": "2024-2026 Tesla Cybertruck",
          "type": "Pickup",
          "fuel": "Electric",
          "minPrice": 130000,
          "maxPrice": 200000,
          "image": "images/cars/TESLA_Cybertruck_1_1786219677510.jpg"
        }
      ],
      "Model 3": [
        {
          "name": "2018-2023 Tesla Model 3 (Dorestyling)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/TESLA_Model3_1_1786219681580.jpg"
        },
        {
          "name": "2024-2026 Tesla Model 3 (Highland Restyling)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 30000,
          "maxPrice": 35000,
          "image": "images/cars/TESLA_Model3_2_1786220504700.jpg"
        }
      ],
      "Model S": [
        {
          "name": "2017-2020 Tesla Model S (Pre-Refresh)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 38000,
          "maxPrice": 62000,
          "image": "images/cars/TESLA_ModelS_1_1786219741483.jpg"
        },
        {
          "name": "2021-2026 Tesla Model S (Plaid / Restyling Interior)",
          "type": "Sedan",
          "fuel": "Electric",
          "minPrice": 68000,
          "maxPrice": 115000,
          "image": "images/cars/TESLA_ModelS_2_1786220513657.png"
        }
      ],
      "Model X": [
        {
          "name": "2017-2020 Tesla Model X (Pre-Refresh)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 48000,
          "maxPrice": 72000,
          "image": "images/cars/TESLA_ModelX_1_1786219758360.jpg"
        },
        {
          "name": "2021-2026 Tesla Model X (Plaid / Restyling Interior)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 78000,
          "maxPrice": 130000,
          "image": "images/cars/TESLA_ModelX_2_1786220535207.jpg"
        }
      ],
      "Model Y": [
        {
          "name": "2020-2024 Tesla Model Y (Pre-Facelift)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 36000,
          "maxPrice": 52000,
          "image": "images/cars/TESLA_ModelY_1_1786220558202.jpg"
        },
        {
          "name": "2025-2026 Tesla Model Y (Juniper Restyling)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 54000,
          "maxPrice": 72000,
          "image": "images/cars/TESLA_ModelY_2_1786220544960.jpg"
        }
      ]
    },
    "TOYOTA": {
      "bZ4X": [
        {
          "name": "2023-2026 Toyota bZ4X",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 52000,
          "maxPrice": 72000,
          "image": "images/cars/TOYOTA_bZ4X_1_1786219787617.jpg"
        }
      ],
      "Mirai": []
    },
    "VOLKSWAGEN": {
      "e-Golf": [
        {
          "name": "2017-2020 Volkswagen e-Golf",
          "type": "Hatchback",
          "fuel": "Electric",
          "minPrice": 20000,
          "maxPrice": 27000,
          "image": "images/cars/VOLKSWAGEN_eGolf_1_1786219835827.jpg"
        }
      ],
      "ID.4": [
        {
          "name": "2021-2023 Volkswagen ID.4 (Pre-Update)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 38000,
          "maxPrice": 52000,
          "image": "images/cars/VOLKSWAGEN_ID4_1_1786219844182.jpg"
        },
        {
          "name": "2024-2026 Volkswagen ID.4 (Tech/Power Restyling)",
          "type": "SUV",
          "fuel": "Electric",
          "minPrice": 54000,
          "maxPrice": 68000,
          "image": "images/cars/VOLKSWAGEN_ID4_2_1786220574098.jpg"
        }
      ]
    }
  },
  "1.0": {
    "FORD": {
      "Focus": [
        {
          "name": "2017-2018 Ford Focus Mk3 1.0 EcoBoost",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 15500,
          "image": "images/cars/indir.jpg"
        },
        {
          "name": "2017-2018 Ford Focus Mk3 1.0 EcoBoost",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 15500,
          "image": "images/cars/2014-focus-20.jpg"
        }
      ],
      "Ecosport": [
        {
          "name": "2018-2021 Ford EcoSport 1.0 EcoBoost",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 17500,
          "image": "images/cars/542963-ford-ecosport-2018-2022-quoi-savoir-avant-d-acheter.jpeg"
        }
      ]
    }
  },
  "1.2": {
    "CHEVROLET": {
      "Trax": [
        {
          "name": "2024-2026 Chevrolet Trax 2nd Gen 1.2T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 28000,
          "image": "images/cars/images (18).jpg"
        }
      ]
    },
    "MITSUBISHI": {
      "Mirage": [
        {
          "name": "2017-2020 Mitsubishi Mirage 1st Restyle 1.2L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 10000,
          "maxPrice": 12500,
          "image": "images/cars/2017_mitsubishi_mirage_4dr-hatchback_gt_fq_oem_1_1600.avif"
        },
        {
          "name": "2021-2024 Mitsubishi Mirage 2nd Restyle 1.2L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 12500,
          "maxPrice": 15000,
          "image": "images/cars/2021_mitsubishi_mirage_4dr-hatchback_carbonite-edition_fq_oem_1_1600.avif"
        }
      ],
      "Mirage G4": [
        {
          "name": "2017-2020 Mitsubishi Mirage G4 1st Restyle 1.2L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 10000,
          "maxPrice": 12500,
          "image": "images/cars/images (30).jpg"
        },
        {
          "name": "2021-2024 Mitsubishi Mirage G4 2nd Restyle 1.2L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 12500,
          "maxPrice": 15000,
          "image": "images/cars/2021_mitsubishi_mirage-g4_sedan_carbonite-edition_fq_oem_1_1600.avif"
        }
      ]
    }
  },
  "1.3": {
    "ALFA ROMEO": {
      "Tonale": [
        {
          "name": "2023-2026 Alfa Romeo Tonale 1st Gen 1.3T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 38000,
          "maxPrice": 45000,
          "image": "images/cars/2023-alfa-romeo-tonale-veloce-front-angle-on-road.jpg"
        }
      ]
    },
    "CHEVROLET": {
      "Trailblazer": [
        {
          "name": "2021-2023 Chevrolet Trailblazer Pre-Facelift 1.3T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/2021_Chevrolet_TrailBlazer_RS_AWD,_front_7.11.20.jpg"
        },
        {
          "name": "2024-2026 Chevrolet Trailblazer Facelift 1.3T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/2026-trailblazer-gallery-ext-07_892x762.avif"
        }
      ]
    },
    "FIAT": {
      "500X": [
        {
          "name": "2019-2023 Fiat 500X Facelift 1.3T MultiAir",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 22000,
          "image": "images/cars/FIAT_500X_1.jpg"
        }
      ]
    },
    "JEEP": {
      "Renegade": [
        {
          "name": "2019-2023 Jeep Renegade Facelift 1.3T MultiAir",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/JEEP_Renegade_1.jpg"
        }
      ]
    }
  },
  "1.4": {
    "AUDI": {
      "A3": [
        {
          "name": "2017-2020 Audi A3 8V Facelift 1.4 TFSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/AUDI_A3_1.jpg"
        }
      ]
    },
    "CHEVROLET": {
      "Cruze": [
        {
          "name": "2017-2018 Chevrolet Cruze J400 Pre-Facelift 1.4T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 15500,
          "image": "images/cars/images (25).jpg"
        },
        {
          "name": "2017-2018 Chevrolet Cruze J400 Pre-Facelift 1.4T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 15500,
          "image": "images/cars/images (17).jpg"
        },
        {
          "name": "2019 Chevrolet Cruze J400 Facelift 1.4T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17000,
          "image": "images/cars/chevrolet-cruze-2019-2024-1782051149.9450848.jpg"
        },
        {
          "name": "2019 Chevrolet Cruze J400 Facelift 1.4T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17000,
          "image": "images/cars/2019-Chevrolet-Cruze-Red-Hot-Premier-Hatch.jpeg"
        }
      ],
      "Sonic": [
        {
          "name": "2017-2020 Chevrolet Sonic Facelift 1.4T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/2018-Chevrolet-Sonic-007.avif"
        },
        {
          "name": "2017-2020 Chevrolet Sonic Facelift 1.4T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/2018_chevrolet_sonic_4dr-hatchback_lt_fq_oem_1_1600.avif"
        }
      ],
      "Spark": [
        {
          "name": "2017-2022 Chevrolet Spark M400 1.4L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 11000,
          "maxPrice": 13500,
          "image": "images/cars/2017-chevrolet-sparkactiv-001-1646682661.avif"
        }
      ],
      "Trax": [
        {
          "name": "2017-2022 Chevrolet Trax 1st Gen Facelift 1.4T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 19000,
          "image": "images/cars/images (19).jpg"
        }
      ]
    },
    "FIAT": {
      "500": [
        {
          "name": "2017-2019 Fiat 500 Pop Lounge Turbo 1.4L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/FIAT_500_1.webp"
        }
      ],
      "124 Spider": [
        {
          "name": "2017-2020 Fiat 124 Spider 1.4T MultiAir",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/FIAT_124Spider_1.webp"
        }
      ],
      "500L": [
        {
          "name": "2018-2020 Fiat 500L Facelift 1.4T",
          "type": "Minivan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 17000,
          "image": "images/cars/FIAT_500L_1.jpg"
        }
      ]
    },
    "HYUNDAI": {
      "Elantra": [
        {
          "name": "2017-2018 Hyundai Elantra AD Eco Pre-Facelift 1.4T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 16500,
          "image": "images/cars/HYUNDAI_Elantra_1.png"
        },
        {
          "name": "2019-2020 Hyundai Elantra AD Eco Facelift 1.4T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 18000,
          "image": "images/cars/HYUNDAI_Elantra_2.jpg"
        }
      ]
    },
    "JEEP": {
      "Renegade": [
        {
          "name": "2017-2018 Jeep Renegade BU Pre-Facelift 1.4T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 19500,
          "image": "images/cars/JEEP_Renegade_1.jpg"
        }
      ]
    },
    "VOLKSWAGEN": {
      "Golf": [
        {
          "name": "2019-2021 Volkswagen Golf Mk7.5 1.4 TSI",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21000,
          "image": "images/cars/VOLKSWAGEN_Golf_1.jpg"
        }
      ],
      "Jetta": [
        {
          "name": "2017-2018 Volkswagen Jetta Mk6 Facelift 1.4 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 16500,
          "image": "images/cars/VOLKSWAGEN_Jetta_1.jpg"
        },
        {
          "name": "2019-2021 Volkswagen Jetta Mk7 1.4 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 20000,
          "image": "images/cars/VOLKSWAGEN_Jetta_2.png"
        }
      ]
    }
  },
  "1.5": {
    "BMW": {
      "i8": [
        {
          "name": "2018-2020 BMW i8 Facelift 1.5T PHEV",
          "type": "Coupe",
          "fuel": "Plug-in Hybrid",
          "minPrice": 85000,
          "maxPrice": 105000,
          "image": "images/cars/BMW_i8_1.jpg"
        },
        {
          "name": "2018-2020 BMW i8 Facelift 1.5T PHEV",
          "type": "Convertible",
          "fuel": "Plug-in Hybrid",
          "minPrice": 85000,
          "maxPrice": 105000,
          "image": "images/cars/BMW_i8_2.jpg"
        }
      ]
    },
    "CHEVROLET": {
      "Equinox": [
        {
          "name": "2018-2021 Chevrolet Equinox 3rd Gen Pre-Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/2018-2021-chevrolet-equinox-v0-vd3vph8rrabe1.jpg"
        },
        {
          "name": "2022-2024 Chevrolet Equinox 3rd Gen Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/images (15).jpg"
        },
        {
          "name": "2025-2026 Chevrolet Equinox 4th Gen 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 31000,
          "image": "images/cars/2025-chevrolet-equinox-activ-pr-102-67f019835c500.avif"
        }
      ],
      "Malibu": [
        {
          "name": "2016-2018 Chevrolet Malibu 9th Gen Pre-Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17500,
          "image": "images/cars/2016_chevrolet_malibu_sedan_premier_fq_oem_1_1600.avif"
        },
        {
          "name": "2019-2025 Chevrolet Malibu 9th Gen Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/2019-chevrolet-malibu-rs-117-1568289288.avif"
        }
      ],
      "Volt": [
        {
          "name": "2016-2019 Chevrolet Volt 2nd Gen 1.5L PHEV",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 17000,
          "maxPrice": 20000,
          "image": "images/cars/2017-chevrolet-volt-5dr-hb-premier-angular-front-exterior-view_100544663_l.jpg"
        }
      ]
    },
    "FORD": {
      "Bronco Sport": [
        {
          "name": "2021-2024 Ford Bronco Sport 1st Gen 1.5 EcoBoost",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 31000,
          "image": "images/cars/car_FORD_BroncoSport_1786202971648.jpg"
        },
        {
          "name": "2025-2026 Ford Bronco Sport Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 37000,
          "image": "images/cars/FORD_BroncoSport_2.png"
        }
      ],
      "Escape": [
        {
          "name": "2017-2019 Ford Escape 3rd Gen Facelift 1.5 EcoBoost",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18500,
          "image": "images/cars/FORD_Escape_1.jpg"
        },
        {
          "name": "2020-2022 Ford Escape 4th Gen Pre-Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/FORD_Escape_2.png"
        },
        {
          "name": "2023-2026 Ford Escape 4th Gen Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 31000,
          "image": "images/cars/FORD_Escape_3.jpg"
        }
      ],
      "Fusion": [
        {
          "name": "2017-2020 Ford Fusion 2nd Gen Facelift 1.5 EcoBoost",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/FORD_Fusion_1.jpg"
        }
      ]
    },
    "GMC": {
      "Terrain": [
        {
          "name": "2018-2021 GMC Terrain 2nd Gen Pre-Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/GMC_Terrain_1.png"
        },
        {
          "name": "2022-2024 GMC Terrain 2nd Gen Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21500,
          "maxPrice": 25000,
          "image": "images/cars/GMC_Terrain_2.jpg"
        },
        {
          "name": "2025-2026 GMC Terrain 3rd Gen 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 33000,
          "image": "images/cars/GMC_Terrain_3.jpg"
        }
      ]
    },
    "HONDA": {
      "Accord": [
        {
          "name": "2018-2020 Honda Accord 10th Gen Pre-Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 24500,
          "image": "images/cars/HONDA_Accord_1.jpg"
        },
        {
          "name": "2021-2022 Honda Accord 10th Gen Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24500,
          "maxPrice": 28000,
          "image": "images/cars/HONDA_Accord_2.webp"
        },
        {
          "name": "2023-2026 Honda Accord 11th Gen 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 35000,
          "image": "images/cars/HONDA_Accord_3.jpg"
        }
      ],
      "Civic": [
        {
          "name": "2017-2018 Honda Civic 10th Gen Pre-Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 20000,
          "image": "images/cars/HONDA_Civic_1.jpg"
        },
        {
          "name": "2017-2018 Honda Civic 10th Gen Pre-Facelift 1.5T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 20000,
          "image": "images/cars/HONDA_Civic_2.jpg"
        },
        {
          "name": "2019-2021 Honda Civic 10th Gen Facelift 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 23500,
          "image": "images/cars/HONDA_Civic_3.jpg"
        },
        {
          "name": "2019-2021 Honda Civic 10th Gen Facelift 1.5T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 23500,
          "image": "images/cars/HONDA_Civic_4.jpg"
        },
        {
          "name": "2022-2025 Honda Civic 11th Gen 1.5T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/HONDA_Civic_5.jpg"
        },
        {
          "name": "2022-2025 Honda Civic 11th Gen 1.5T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/HONDA_Civic_6.png"
        }
      ],
      "Clarity": [
        {
          "name": "2018-2021 Honda Clarity 1.5L PHEV",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/HONDA_Clarity_1.jpg"
        }
      ],
      "CR-V": [
        {
          "name": "2017-2019 Honda CR-V 5th Gen Pre-Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 25500,
          "image": "images/cars/HONDA_CRV_1.jpg"
        },
        {
          "name": "2020-2022 Honda CR-V 5th Gen Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 25500,
          "maxPrice": 29000,
          "image": "images/cars/HONDA_CRV_2.jpg"
        },
        {
          "name": "2023-2026 Honda CR-V 6th Gen 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/HONDA_CRV_3.jpg"
        }
      ],
      "Fit": [
        {
          "name": "2018-2020 Honda Fit 3rd Gen Facelift 1.5L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16500,
          "image": "images/cars/HONDA_Fit_1.jpg"
        }
      ],
      "Insight": [
        {
          "name": "2019-2022 Honda Insight 3rd Gen 1.5L HEV",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/HONDA_Insight_1.jpg"
        }
      ]
    },
    "MINI": {
      "Cooper": [
        {
          "name": "2017-2021 Mini Cooper F55 F56 Facelift 1 1.5T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 21000,
          "image": "images/cars/MINI_Cooper_1.jpg"
        },
        {
          "name": "2022-2024 Mini Cooper F55 F56 Facelift 2 1.5T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/MINI_Cooper_2.jpg"
        }
      ]
    },
    "MITSUBISHI": {
      "Eclipse Cross": [
        {
          "name": "2018-2020 Mitsubishi Eclipse Cross Pre-Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 20000,
          "image": "images/cars/MITSUBISHI_EclipseCross_1.jpg"
        },
        {
          "name": "2022-2025 Mitsubishi Eclipse Cross Facelift 1.5T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20500,
          "maxPrice": 24500,
          "image": "images/cars/MITSUBISHI_EclipseCross_2.jpg"
        }
      ]
    },
    "NISSAN": {
      "Rogue": [
        {
          "name": "2022-2023 Nissan Rogue T33 1.5 VC-Turbo Pre-Facelift",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 28000,
          "image": "images/cars/NISSAN_Rogue_1.jpg"
        },
        {
          "name": "2024-2026 Nissan Rogue T33 1.5 VC-Turbo Facelift",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28500,
          "maxPrice": 34000,
          "image": "images/cars/NISSAN_Rogue_2.webp"
        }
      ]
    },
    "TOYOTA": {
      "Yaris": [
        {
          "name": "2017-2020 Toyota Yaris iA 1.5L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 16000,
          "image": "images/cars/TOYOTA_Yaris_1.jpg"
        },
        {
          "name": "2017-2020 Toyota Yaris iA 1.5L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 16000,
          "image": "images/cars/TOYOTA_Yaris_2.jpg"
        }
      ]
    },
    "VOLKSWAGEN": {
      "Jetta": [
        {
          "name": "2022-2024 Volkswagen Jetta Mk7 Facelift 1.5 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/VOLKSWAGEN_Jetta_1.jpg"
        },
        {
          "name": "2025-2026 Volkswagen Jetta Mk7 2nd Facelift 1.5 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/VOLKSWAGEN_Jetta_2.jpg"
        }
      ],
      "Taos": [
        {
          "name": "2022-2024 Volkswagen Taos Pre-Facelift 1.5 TSI",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/VOLKSWAGEN_Taos_1.jpg"
        },
        {
          "name": "2025-2026 Volkswagen Taos Facelift 1.5 TSI",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 26500,
          "maxPrice": 31000,
          "image": "images/cars/VOLKSWAGEN_Taos_2.jpg"
        }
      ]
    }
  },
  "1.6": {
    "CHEVROLET": {
      "Cruze": [
        {
          "name": "2017-2019 Chevrolet Cruze J400 Turbo Diesel",
          "type": "Sedan",
          "fuel": "Dizel",
          "minPrice": 14500,
          "maxPrice": 17500,
          "image": "images/cars/2017-chevrolet-cruze-diesel-first-drive-review-car-and-driver-photo-677562-s-original.avif"
        },
        {
          "name": "2017-2019 Chevrolet Cruze J400 Turbo Diesel",
          "type": "Hatchback",
          "fuel": "Dizel",
          "minPrice": 14500,
          "maxPrice": 17500,
          "image": "images/cars/2017-chevrolet-cruze-hatchback-premier-review-curbed-with-craig-cole.webp"
        }
      ]
    },
    "FORD": {
      "Fiesta": [
        {
          "name": "2017-2019 Ford Fiesta ST 1.6 EcoBoost",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 18000,
          "image": "images/cars/FORD_Fiesta_1.jpg"
        }
      ]
    },
    "HYUNDAI": {
      "Accent": [
        {
          "name": "2017 Hyundai Accent HC Pre-Facelift",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14000,
          "image": "images/cars/HYUNDAI_Accent_1.jpg"
        },
        {
          "name": "2018-2019 Hyundai Accent 5th Gen Pre-Facelift",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 16500,
          "image": "images/cars/HYUNDAI_Accent_2.jpg"
        },
        {
          "name": "2020-2022 Hyundai Accent 5th Gen Facelift",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 19000,
          "image": "images/cars/HYUNDAI_Accent_3.jpg"
        }
      ],
      "Elantra": [
        {
          "name": "2017-2020 Hyundai Elantra AD Sport 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/HYUNDAI_Elantra_1.jpg"
        },
        {
          "name": "2021-2023 Hyundai Elantra CN7 N Line 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/HYUNDAI_Elantra_2.jpg"
        },
        {
          "name": "2024-2026 Hyundai Elantra CN7 Facelift N Line",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 26500,
          "maxPrice": 31000,
          "image": "images/cars/HYUNDAI_Elantra_3.jpg"
        }
      ],
      "Ioniq": [
        {
          "name": "2017-2019 Hyundai Ioniq Pre-Facelift Hybrid",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 17000,
          "maxPrice": 19500,
          "image": "images/cars/HYUNDAI_Ioniq_1.jpg"
        },
        {
          "name": "2017-2019 Hyundai Ioniq Pre-Facelift PHEV",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 18000,
          "maxPrice": 20000,
          "image": "images/cars/HYUNDAI_Ioniq_2.jpg"
        },
        {
          "name": "2020-2022 Hyundai Ioniq Facelift Hybrid",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 20500,
          "maxPrice": 23000,
          "image": "images/cars/HYUNDAI_Ioniq_3.jpg"
        },
        {
          "name": "2020-2022 Hyundai Ioniq Facelift PHEV",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 21500,
          "maxPrice": 24000,
          "image": "images/cars/HYUNDAI_Ioniq_4.jpg"
        }
      ],
      "Kona": [
        {
          "name": "2018-2021 Hyundai Kona 1st Gen Pre-Facelift 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18500,
          "maxPrice": 21500,
          "image": "images/cars/HYUNDAI_Kona_1.jpg"
        },
        {
          "name": "2022-2023 Hyundai Kona 1st Gen Facelift 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 25000,
          "image": "images/cars/HYUNDAI_Kona_2.jpg"
        },
        {
          "name": "2024-2026 Hyundai Kona 2nd Gen N Line 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 32000,
          "image": "images/cars/HYUNDAI_Kona_3.jpg"
        }
      ],
      "Santa Fe": [
        {
          "name": "2021-2023 Hyundai Santa Fe TM Facelift 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 30000,
          "maxPrice": 35000,
          "image": "images/cars/HYUNDAI_SantaFe_1.jpg"
        },
        {
          "name": "2021-2023 Hyundai Santa Fe TM Facelift 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 32000,
          "maxPrice": 36000,
          "image": "images/cars/HYUNDAI_SantaFe_2.jpg"
        },
        {
          "name": "2024-2026 Hyundai Santa Fe MX5 5th Gen 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 38000,
          "maxPrice": 46000,
          "image": "images/cars/HYUNDAI_SantaFe_3.jpg"
        }
      ],
      "Sonata": [
        {
          "name": "2017-2019 Hyundai Sonata LF Eco Facelift 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 19500,
          "image": "images/cars/HYUNDAI_Sonata_1.jpg"
        },
        {
          "name": "2020-2023 Hyundai Sonata DN8 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/HYUNDAI_Sonata_2.jpg"
        }
      ],
      "Tucson": [
        {
          "name": "2017-2018 Hyundai Tucson TL 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18500,
          "maxPrice": 22000,
          "image": "images/cars/HYUNDAI_Tucson_1.jpg"
        },
        {
          "name": "2022-2024 Hyundai Tucson NX4 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 29000,
          "maxPrice": 33500,
          "image": "images/cars/HYUNDAI_Tucson_2.jpg"
        },
        {
          "name": "2022-2024 Hyundai Tucson NX4 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 31000,
          "maxPrice": 35000,
          "image": "images/cars/HYUNDAI_Tucson_3.jpg"
        },
        {
          "name": "2025-2026 Hyundai Tucson NX4 Facelift 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 35500,
          "maxPrice": 41000,
          "image": "images/cars/HYUNDAI_Tucson_4.jpg"
        }
      ],
      "Veloster": [
        {
          "name": "2017-2018 Hyundai Veloster 1st Gen Turbo 1.6T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 17000,
          "image": "images/cars/HYUNDAI_Veloster_1.png"
        },
        {
          "name": "2019-2021 Hyundai Veloster 2nd Gen Turbo R-Spec 1.6T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21500,
          "image": "images/cars/HYUNDAI_Veloster_2.jpg"
        }
      ],
      "Venue": [
        {
          "name": "2020-2022 Hyundai Venue 1.6 DPI",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 19000,
          "image": "images/cars/HYUNDAI_Venue_1.jpg"
        },
        {
          "name": "2023-2026 Hyundai Venue 1.6L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 22500,
          "image": "images/cars/HYUNDAI_Venue_2.jpg"
        }
      ]
    },
    "KIA": {
      "Carnival": [
        {
          "name": "2025-2026 Kia Carnival Facelift 1.6T Hybrid",
          "type": "Minivan",
          "fuel": "Hybrid",
          "minPrice": 48000,
          "maxPrice": 56000,
          "image": "images/cars/KIA_Carnival_1.jpg"
        }
      ],
      "Forte": [
        {
          "name": "2017-2018 Kia Forte YD SX Turbo 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18000,
          "image": "images/cars/KIA_Forte_1.jpg"
        },
        {
          "name": "2020-2024 Kia Forte BD GT 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 25000,
          "image": "images/cars/KIA_Forte_2.png"
        }
      ],
      "K4": [
        {
          "name": "2025-2026 Kia K4 GT-Line Turbo 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 29000,
          "maxPrice": 34000,
          "image": "images/cars/KIA_K4_1.jpg"
        }
      ],
      "K5": [
        {
          "name": "2021-2024 Kia K5 DL3 1.6T Turbo",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 27500,
          "image": "images/cars/KIA_K5_1.jpg"
        }
      ],
      "Niro": [
        {
          "name": "2017-2022 Kia Niro DE 1st Gen Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 17000,
          "maxPrice": 20500,
          "image": "images/cars/KIA_Niro_1.jpg"
        },
        {
          "name": "2018-2022 Kia Niro DE 1st Gen PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 18500,
          "maxPrice": 22000,
          "image": "images/cars/KIA_Niro_2.jpg"
        },
        {
          "name": "2023-2026 Kia Niro SG2 2nd Gen Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 24000,
          "maxPrice": 28000,
          "image": "images/cars/KIA_Niro_3.jpg"
        },
        {
          "name": "2023-2026 Kia Niro SG2 2nd Gen PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/KIA_Niro_4.jpg"
        }
      ],
      "Optima": [
        {
          "name": "2017-2020 Kia Optima JF 1.6T LX Turbo",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 21000,
          "image": "images/cars/KIA_Optima_1.jpg"
        }
      ],
      "Rio": [
        {
          "name": "2018-2020 Kia Rio YB Pre-Facelift 1.6L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 15500,
          "image": "images/cars/KIA_Rio_1.jpg"
        },
        {
          "name": "2018-2020 Kia Rio YB Pre-Facelift 1.6L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13000,
          "maxPrice": 15500,
          "image": "images/cars/KIA_Rio_2.jpg"
        },
        {
          "name": "2021-2023 Kia Rio YB Facelift 1.6L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19000,
          "image": "images/cars/KIA_Rio_3.jpg"
        },
        {
          "name": "2021-2023 Kia Rio YB Facelift 1.6L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19000,
          "image": "images/cars/KIA_Rio_4.webp"
        }
      ],
      "Seltos": [
        {
          "name": "2021-2023 Kia Seltos Pre-Facelift 1.6T Turbo",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 25500,
          "image": "images/cars/KIA_Seltos_1.jpg"
        },
        {
          "name": "2024-2026 Kia Seltos Facelift 1.6T Turbo 8AT",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/KIA_Seltos_2.jpg"
        }
      ],
      "Sorento": [
        {
          "name": "2021-2023 Kia Sorento MQ4 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 32000,
          "maxPrice": 36000,
          "image": "images/cars/KIA_Sorento_1.jpg"
        },
        {
          "name": "2021-2023 Kia Sorento MQ4 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 34000,
          "maxPrice": 38000,
          "image": "images/cars/KIA_Sorento_2.jpg"
        },
        {
          "name": "2024-2026 Kia Sorento MQ4 Facelift 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 39000,
          "maxPrice": 44000,
          "image": "images/cars/KIA_Sorento_3.jpg"
        },
        {
          "name": "2024-2026 Kia Sorento MQ4 Facelift 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 41000,
          "maxPrice": 46000,
          "image": "images/cars/KIA_Sorento_4.jpg"
        }
      ],
      "Soul": [
        {
          "name": "2017-2019 Kia Soul PS Exclaim Turbo 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17500,
          "image": "images/cars/KIA_Soul_1.jpg"
        },
        {
          "name": "2020-2022 Kia Soul SK3 GT-Line Turbo 1.6T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21000,
          "image": "images/cars/KIA_Soul_2.jpg"
        }
      ],
      "Sportage": [
        {
          "name": "2023-2024 Kia Sportage NQ5 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 31000,
          "maxPrice": 35000,
          "image": "images/cars/KIA_Sportage_1.jpg"
        },
        {
          "name": "2023-2024 Kia Sportage NQ5 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 33000,
          "maxPrice": 37000,
          "image": "images/cars/KIA_Sportage_2.jpg"
        },
        {
          "name": "2025-2026 Kia Sportage NQ5 Facelift 1.6T Hybrid",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 37500,
          "maxPrice": 42000,
          "image": "images/cars/KIA_Sportage_3.jpg"
        },
        {
          "name": "2025-2026 Kia Sportage NQ5 Facelift 1.6T PHEV",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 39500,
          "maxPrice": 44000,
          "image": "images/cars/KIA_Sportage_4.jpg"
        }
      ]
    },
    "NISSAN": {
      "Juke": [
        {
          "name": "2017 Nissan Juke F15 1.6 DIG-T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 16500,
          "image": "images/cars/NISSAN_Juke_1.jpg"
        }
      ],
      "Kicks": [
        {
          "name": "2018-2020 Nissan Kicks P15 Pre-Facelift 1.6L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 17000,
          "image": "images/cars/NISSAN_Kicks_1.png"
        },
        {
          "name": "2021-2024 Nissan Kicks P15 Facelift 1.6L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 20500,
          "image": "images/cars/NISSAN_Kicks_2.jpg"
        },
        {
          "name": "2025-2026 Nissan Kicks 2nd Gen 1.6L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/NISSAN_Kicks_3.jpg"
        }
      ],
      "Sentra": [
        {
          "name": "2017-2019 Nissan Sentra B17 SR Turbo NISMO 1.6T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18500,
          "image": "images/cars/NISSAN_Sentra_1.jpg"
        }
      ],
      "Versa": [
        {
          "name": "2017-2019 Nissan Versa N17 2nd Gen 1.6L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 11000,
          "maxPrice": 13500,
          "image": "images/cars/NISSAN_Versa_1.png"
        },
        {
          "name": "2020-2022 Nissan Versa N18 3rd Gen Pre-Facelift 1.6L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 17000,
          "image": "images/cars/NISSAN_Versa_2.jpg"
        },
        {
          "name": "2023-2025 Nissan Versa N18 3rd Gen Facelift 1.6L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 20000,
          "image": "images/cars/NISSAN_Versa_3.png"
        }
      ]
    },
    "TOYOTA": {
      "GR Corolla": [
        {
          "name": "2023-2026 Toyota GR Corolla G16E-GTS 1.6T AWD",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 52000,
          "image": "images/cars/TOYOTA_GRCorolla_1.jpg"
        }
      ]
    }
  },
  "1.8": {
    "CHEVROLET": {
      "Malibu": [
        {
          "name": "2017-2019 Chevrolet Malibu 9th Gen Hybrid",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/images (16).jpg"
        }
      ],
      "Sonic": [
        {
          "name": "2017-2018 Chevrolet Sonic Facelift 1.8L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 11500,
          "maxPrice": 13500,
          "image": "images/cars/143fdee354cfba7c31dc2775be7a2859.jpg"
        },
        {
          "name": "2017-2018 Chevrolet Sonic Facelift 1.8L",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 11500,
          "maxPrice": 13500,
          "image": "images/cars/chevrolet-sonic-2017-2021-1647409870.322387.jpg"
        }
      ]
    },
    "HONDA": {
      "HR-V": [
        {
          "name": "2017-2018 Honda HR-V RU Pre-Facelift 1.8L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 19500,
          "image": "images/cars/HONDA_HRV_1.jpg"
        },
        {
          "name": "2019-2022 Honda HR-V RU Facelift 1.8L",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 23500,
          "image": "images/cars/HONDA_HRV_2.jpg"
        }
      ]
    },
    "LEXUS": {
      "CT": [
        {
          "name": "2017 Lexus CT 200h Facelift 1.8L HEV",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/LEXUS_CT_1.png"
        }
      ]
    },
    "NISSAN": {
      "Sentra": [
        {
          "name": "2017-2019 Nissan Sentra B17 Facelift 1.8L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16000,
          "image": "images/cars/NISSAN_Sentra_1.jpg"
        }
      ]
    },
    "TOYOTA": {
      "Corolla": [
        {
          "name": "2017-2019 Toyota Corolla E170 Facelift 1.8L",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 19000,
          "image": "images/cars/TOYOTA_Corolla_1.jpg"
        },
        {
          "name": "2020-2022 Toyota Corolla E210 1.8L Benzin",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 23500,
          "image": "images/cars/TOYOTA_Corolla_2.jpg"
        },
        {
          "name": "2020-2026 Toyota Corolla E210 1.8L Hybrid",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 22000,
          "maxPrice": 29000,
          "image": "images/cars/TOYOTA_Corolla_3.jpg"
        }
      ],
      "Prius": [
        {
          "name": "2017-2018 Toyota Prius XW50 Pre-Facelift 1.8L HEV",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 17500,
          "maxPrice": 20500,
          "image": "images/cars/TOYOTA_Prius_1.jpg"
        },
        {
          "name": "2017-2018 Toyota Prius Prime 1.8L PHEV",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 18500,
          "maxPrice": 21500,
          "image": "images/cars/TOYOTA_Prius_2.jpg"
        },
        {
          "name": "2019-2022 Toyota Prius XW50 Facelift 1.8L HEV",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/TOYOTA_Prius_3.jpg"
        },
        {
          "name": "2019-2022 Toyota Prius Prime Facelift 1.8L PHEV",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/TOYOTA_Prius_4.jpg"
        }
      ]
    },
    "VOLKSWAGEN": {
      "Beetle": [
        {
          "name": "2017 Volkswagen Beetle A5 Facelift 1.8 TSI",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19000,
          "image": "images/cars/VOLKSWAGEN_Beetle_1.jpg"
        }
      ],
      "Golf": [
        {
          "name": "2017 Volkswagen Golf Mk7 1.8 TSI",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17500,
          "image": "images/cars/VOLKSWAGEN_Golf_1.jpg"
        },
        {
          "name": "2017 Volkswagen Golf Mk7 1.8 TSI",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 17500,
          "image": "images/cars/VOLKSWAGEN_Golf_2.jpg"
        },
        {
          "name": "2018 Volkswagen Golf Mk7.5 1.8 TSI",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 20500,
          "image": "images/cars/VOLKSWAGEN_Golf_3.jpg"
        },
        {
          "name": "2018 Volkswagen Golf Mk7.5 1.8 TSI",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 20500,
          "image": "images/cars/VOLKSWAGEN_Golf_4.jpg"
        }
      ],
      "Jetta": [
        {
          "name": "2017-2018 Volkswagen Jetta Mk6 Facelift 1.8 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 16500,
          "image": "images/cars/VOLKSWAGEN_Jetta_1.jpg"
        }
      ],
      "Passat": [
        {
          "name": "2017 Volkswagen Passat NMS 1.8 TSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18000,
          "image": "images/cars/VOLKSWAGEN_Passat_1.jpg"
        }
      ]
    }
  },
  "2.0": {
    "ALFA ROMEO": {
      "Giulia": [
        {
          "name": "2017-2022 Alfa Romeo Giulia Pre-Facelift 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 30000,
          "image": "images/cars/ALFAROMEO_Giulia_1.jpg"
        },
        {
          "name": "2023-2025 Alfa Romeo Giulia Facelift 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 40000,
          "image": "images/cars/ALFAROMEO_Giulia_2.webp"
        }
      ],
      "Stelvio": [
        {
          "name": "2023-2025 Alfa Romeo Stelvio Facelift 2.0T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 39000,
          "image": "images/cars/ALFAROMEO_Stelvio_2.jpg"
        }
      ]
    },
    "AUDI": {
      "A3": [
        {
          "name": "2017-2020 Audi A3 8V Facelift 2.0 TFSI",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/AUDI_A3_1.jpg"
        },
        {
          "name": "2022-2025 Audi A3 8Y 40 TFSI 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 32000,
          "image": "images/cars/AUDI_A3_2.jpg"
        }
      ],
      "A4": [
        {
          "name": "2017-2019 Audi A4 B9 Pre-Facelift 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 24000,
          "image": "images/cars/AUDI_A4_1.jpg"
        },
        {
          "name": "2020-2024 Audi A4 B9.5 Facelift 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 33000,
          "image": "images/cars/AUDI_A4_2.jpg"
        }
      ],
      "A5": [
        {
          "name": "2018-2019 Audi A5 F5 Pre-Facelift 2.0T",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 28000,
          "image": "images/cars/AUDI_A5_1.jpg"
        },
        {
          "name": "2018-2019 Audi A5 F5 Pre-Facelift 2.0T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 28000,
          "image": "images/cars/AUDI_A5_2.jpg"
        },
        {
          "name": "2020-2024 Audi A5 F5.5 Facelift 2.0T",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 29000,
          "maxPrice": 37000,
          "image": "images/cars/AUDI_A5_3.png"
        },
        {
          "name": "2020-2024 Audi A5 F5.5 Facelift 2.0T",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 29000,
          "maxPrice": 37000,
          "image": "images/cars/AUDI_A5_4.jpg"
        }
      ],
      "A6": [
        {
          "name": "2019-2024 Audi A6 C8 45 TFSI 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 42000,
          "image": "images/cars/AUDI_A6_1.jpg"
        }
      ],
      "Q3": [
        {
          "name": "2017-2018 Audi Q3 8U Facelift 2.0T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/AUDI_Q3_1.jpg"
        },
        {
          "name": "2019-2025 Audi Q3 F3 40 45 TFSI 2.0T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 35000,
          "image": "images/cars/AUDI_Q3_2.jpg"
        }
      ],
      "Q5": [
        {
          "name": "2018-2020 Audi Q5 FY Pre-Facelift 2.0T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/AUDI_Q5_1.png"
        },
        {
          "name": "2021-2025 Audi Q5 FY Facelift Sportback 2.0T",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 40000,
          "image": "images/cars/AUDI_Q5_2.jpg"
        }
      ],
      "Q7": [
        {
          "name": "2017-2019 Audi Q7 4M Pre-Facelift 45 TFSI 2.0T",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 32000,
          "image": "images/cars/AUDI_Q7_1.jpg"
        },
        {
          "name": "2020-2025 Audi Q7 4M Facelift 45 TFSI 2.0T",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 34000,
          "maxPrice": 48000,
          "image": "images/cars/AUDI_Q7_2.jpg"
        }
      ],
      "S3": [
        {
          "name": "2017-2020 Audi S3 8V Facelift 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 32000,
          "image": "images/cars/AUDI_S3_1.jpg"
        },
        {
          "name": "2022-2025 Audi S3 8Y 2.0T",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 43000,
          "image": "images/cars/AUDI_S3_2.jpg"
        }
      ],
      "TT": [
        {
          "name": "2017-2023 Audi TT 8S 2.0 TFSI",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 35000,
          "image": "images/cars/AUDI_TT_1.jpg"
        },
        {
          "name": "2017-2023 Audi TT 8S 2.0 TFSI",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 35000,
          "image": "images/cars/AUDI_TT_2.webp"
        }
      ]
    },
    "BMW": {
      "2 Series": [
        {
          "name": "2017-2021 (F22 Coupe 230i 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 26000,
          "image": "images/cars/BMW_2Series_1.jpg"
        },
        {
          "name": "2022-2026 (G42 Coupe 230i 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 31000,
          "maxPrice": 40000,
          "image": "images/cars/BMW_2Series_2.jpg"
        },
        {
          "name": "2020-2024 (F44 228i Gran Coupe 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 31000,
          "image": "images/cars/BMW_2Series_3.jpg"
        },
        {
          "name": "2020-2024 (F44 M235i Gran Coupe 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 39000,
          "image": "images/cars/BMW_2Series_4.jpg"
        }
      ],
      "3 Series": [
        {
          "name": "2017-2018 (F30 LCI 330i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 22000,
          "image": "images/cars/BMW_3Series_1.jpg"
        },
        {
          "name": "2017-2018 (F30 LCI 328d 2.0 Diesel)",
          "type": "Sedan",
          "fuel": "Dizel",
          "minPrice": 17500,
          "maxPrice": 21500,
          "image": "images/cars/BMW_3Series_2.jpg"
        },
        {
          "name": "2017-2018 (F31 LCI 328d Wagon 2.0 Diesel)",
          "type": "Wagon",
          "fuel": "Dizel",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/BMW_3Series_3.jpg"
        },
        {
          "name": "2019-2022 (G20 Pre-LCI 330i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/BMW_3Series_4.webp"
        },
        {
          "name": "2019-2022 (G20 Pre-LCI 330e PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 25000,
          "maxPrice": 33000,
          "image": "images/cars/BMW_3Series_5.jpg"
        },
        {
          "name": "2023-2026 (G20 LCI 330i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 42000,
          "image": "images/cars/BMW_3Series_6.jpg"
        },
        {
          "name": "2023-2026 (G20 LCI 330e PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 34500,
          "maxPrice": 43000,
          "image": "images/cars/BMW_3Series_7.webp"
        }
      ],
      "4 Series": [
        {
          "name": "2017-2020 (F32 / F36 LCI 430i 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 27000,
          "image": "images/cars/BMW_4Series_1.jpg"
        },
        {
          "name": "2017-2020 (F32 / F36 LCI 430i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 27000,
          "image": "images/cars/BMW_4Series_2.jpg"
        },
        {
          "name": "2021-2026 (G22 / G26 430i 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/BMW_4Series_3.jpg"
        },
        {
          "name": "2021-2026 (G22 / G26 430i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/BMW-4-serija_2021_Kupeja_2651914536.jpg"
        }
      ],
      "5 Series": [
        {
          "name": "BMW 5 Series G30 530i 2017-2020 USA",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 29000,
          "image": "images/cars/P90237243-the-new-bmw-5-series-sedan-m-sport-10-2016-2249px.jpg"
        },
        {
          "name": "2017-2020 (G30 Pre-LCI 530e PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 27000,
          "maxPrice": 35000,
          "image": "images/cars/G30-BMW-530e-Review-1-630x373.webp"
        },
        {
          "name": "2021-2023 (G30 LCI 530i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/2021-bmw-540i-xdrive-370-edit-1608066218.avif"
        },
        {
          "name": "2021-2023 (G30 LCI 530e PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 31500,
          "maxPrice": 39500,
          "image": "images/cars/images.jpg"
        },
        {
          "name": "2024-2027 (G60 530i 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 43000,
          "maxPrice": 52000,
          "image": "images/cars/images (1).jpg"
        }
      ],
      "X1": [
        {
          "name": "2017-2022 (F48 xDrive28i / sDrive28i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18500,
          "maxPrice": 26000,
          "image": "images/cars/BMW_X1_1.jpg"
        },
        {
          "name": "2023-2026 (U11 xDrive28i / M35i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 31000,
          "maxPrice": 40000,
          "image": "images/cars/BMW_X1_2.jpg"
        }
      ],
      "X2": [
        {
          "name": "2018-2023 (F39 xDrive28i / M235i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 28000,
          "image": "images/cars/BMW_X2_1.png"
        },
        {
          "name": "2024-2026 (U10 xDrive28i / M35i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 34000,
          "maxPrice": 42000,
          "image": "images/cars/BMW_X2_2.jpg"
        }
      ],
      "X3": [
        {
          "name": "2017 (F25 LCI xDrive28i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21000,
          "image": "images/cars/BMW_X3_1.jpg"
        },
        {
          "name": "2017 (F25 LCI xDrive28d 2.0 Diesel)",
          "type": "Crossover",
          "fuel": "Dizel",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/BMW_X3_2.jpg"
        },
        {
          "name": "2018-2021 (G01 Pre-LCI xDrive30i / sDrive30i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 31000,
          "image": "images/cars/BMW_X3_3.jpg"
        },
        {
          "name": "2022-2024 (G01 LCI xDrive30i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 41000,
          "image": "images/cars/BMW_X3_4.jpg"
        },
        {
          "name": "2025-2026 (G45 30 xDrive 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 48000,
          "image": "images/cars/BMW_X3_5.jpg"
        }
      ],
      "X4": [
        {
          "name": "2019-2021 (G02 Pre-LCI xDrive30i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 35000,
          "image": "images/cars/BMW_X4_1.jpg"
        },
        {
          "name": "2022-2025 (G02 LCI xDrive30i 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 36000,
          "maxPrice": 45000,
          "image": "images/cars/BMW_X4_2.jpg"
        }
      ],
      "X5": [
        {
          "name": "2017-2018 (F15 xDrive40e 2.0T PHEV)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 23000,
          "maxPrice": 28000,
          "image": "images/cars/BMW_X5_1.jpg"
        }
      ],
      "Z4": [
        {
          "name": "2019-2026 (G29 sDrive30i 2.0T)",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 48000,
          "image": "images/cars/BMW_Z4_1.jpg"
        }
      ]
    },
    "CADILLAC": {
      "ATS": [
        {
          "name": "2017-2019 (2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/CADILLAC_ATS_1.jpg"
        },
        {
          "name": "2017-2019 (2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/CADILLAC_ATS_2.jpg"
        }
      ],
      "CT4": [
        {
          "name": "2020-2026 (2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 33000,
          "image": "images/cars/CADILLAC_CT4_1.jpg"
        }
      ],
      "CT5": [
        {
          "name": "2020-2024 (2.0T Pre-Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 35000,
          "image": "images/cars/CADILLAC_CT5_1.png"
        },
        {
          "name": "2025-2026 (2.0T Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 36000,
          "maxPrice": 42000,
          "image": "images/cars/CADILLAC_CT5_2.jpg"
        }
      ],
      "CT6": [
        {
          "name": "2017-2019 (2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 26000,
          "image": "images/cars/CADILLAC_CT6_1.jpg"
        }
      ],
      "CTS": [
        {
          "name": "2017-2019 (3-cü nəsil 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/CADILLAC_CTS_1.jpg"
        }
      ],
      "XT4": [
        {
          "name": "2019-2023 (Pre-Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 26000,
          "image": "images/cars/CADILLAC_XT4_1.jpg"
        },
        {
          "name": "2024-2026 (Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 33000,
          "image": "images/cars/CADILLAC_XT4_2.png"
        }
      ],
      "XT5": [
        {
          "name": "2020-2025 (2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 34000,
          "image": "images/cars/CADILLAC_XT5_1.jpg"
        }
      ],
      "XT6": [
        {
          "name": "2021-2025 (2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 37000,
          "image": "images/cars/CADILLAC_XT6_1.jpg"
        }
      ]
    },
    "CHEVROLET": {
      "Blazer": [
        {
          "name": "2020-2026 (2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 31000,
          "image": "images/cars/2026_chevrolet_blazer_4dr-suv_3lt_fq_oem_1_1600.avif"
        }
      ],
      "Camaro": [
        {
          "name": "2017-2023 (2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 28000,
          "image": "images/cars/2019-chevrolet-camaro-2-0t-1le-6mt-106-1539790974.avif"
        }
      ],
      "City Express": [
        {
          "name": "2017-2018 (2.0L)",
          "type": "Van",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 15000,
          "image": "images/cars/2017_chevrolet_city-express_cargo-minivan_lt_fq_oem_2_1600.avif"
        }
      ],
      "Equinox": [
        {
          "name": "2018-2020 (2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21500,
          "image": "images/cars/2018_chevrolet_equinox_4dr-suv_lt_fq_oem_1_1600.avif"
        }
      ],
      "Malibu": [
        {
          "name": "2017-2018 (2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 22500,
          "image": "images/cars/2017_chevrolet_malibu_sedan_premier_fq_oem_3_1600.webp"
        },
        {
          "name": "2019-2022 (2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 25000,
          "image": "images/cars/2021_chevrolet_malibu_sedan_premier_fq_oem_1_1600.avif"
        }
      ]
    },
    "FORD": {
      "Bronco Sport": [
        {
          "name": "2021-2026 (Badlands 2.0 EcoBoost)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/FORD_BroncoSport_1.jpg"
        }
      ],
      "C-MAX": [
        {
          "name": "2017-2018 (2.0L Hybrid HEV)",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/FORD_CMAX_1.jpg"
        },
        {
          "name": "2017-2018 (2.0L Energi PHEV)",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 12500,
          "maxPrice": 15000,
          "image": "images/cars/FORD_CMAX_2.jpg"
        }
      ],
      "Ecosport": [
        {
          "name": "2018-2022 (2.0L Duratec AWD)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 18000,
          "image": "images/cars/FORD_Ecosport_1.jpg"
        }
      ],
      "Edge": [
        {
          "name": "2017-2018 (2-ci nəsil Pre-Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/FORD_Edge_1.jpg"
        },
        {
          "name": "2019-2024 (2-ci nəsil Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 30000,
          "image": "images/cars/FORD_Edge_2.jpg"
        }
      ],
      "Escape": [
        {
          "name": "2017-2019 (3-cü nəsil Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18500,
          "image": "images/cars/FORD_Escape_1.jpg"
        },
        {
          "name": "2020-2022 (4-cü nəsil Pre-Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/FORD_Escape_2.jpg"
        },
        {
          "name": "2020-2022 (4-cü nəsil Pre-Facelift 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/FORD_Escape_3.jpg"
        },
        {
          "name": "2023-2026 (4-cü nəsil Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 32000,
          "image": "images/cars/FORD_Escape_4.jpg"
        },
        {
          "name": "2023-2026 (4-cü nəsil Facelift 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 27000,
          "maxPrice": 33000,
          "image": "images/cars/FORD_Escape_5.jpg"
        }
      ],
      "Focus": [
        {
          "name": "2017-2018 (Mk3 Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/FORD_Focus_1.jpg"
        },
        {
          "name": "2017-2018 (Mk3 Facelift 2.0L)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 12000,
          "maxPrice": 14500,
          "image": "images/cars/FORD_Focus_2.jpg"
        },
        {
          "name": "2017-2018 (ST 2.0 EcoBoost)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 21000,
          "image": "images/cars/FORD_Focus_3.jpg"
        }
      ],
      "Fusion": [
        {
          "name": "2017-2020 (2-ci nəsil Facelift 2.0T Benzin)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 19000,
          "image": "images/cars/FORD_Fusion_1.jpg"
        },
        {
          "name": "2017-2020 (2-ci nəsil Facelift 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/FORD_Fusion_2.jpg"
        },
        {
          "name": "2017-2020 (2-ci nəsil Facelift 2.0 Energi PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 16500,
          "maxPrice": 20000,
          "image": "images/cars/FORD_Fusion_3.jpg"
        }
      ],
      "Maverick": [
        {
          "name": "2022-2024 (2.0 EcoBoost Pre-Facelift)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 29000,
          "image": "images/cars/FORD_Maverick_1.jpg"
        },
        {
          "name": "2025-2026 (2.0 EcoBoost Facelift)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 29500,
          "maxPrice": 35000,
          "image": "images/cars/FORD_Maverick_2.png"
        }
      ],
      "Transit Connect": [
        {
          "name": "2019-2023 (2.0L Duratec)",
          "type": "Van",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 25000,
          "image": "images/cars/FORD_TransitConnect_1.jpg"
        }
      ]
    },
    "GENESIS": {
      "G70": [
        {
          "name": "2019-2021 (Pre-Facelift 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/GENESIS_G70_1.jpg"
        },
        {
          "name": "2022-2024 (Facelift 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 34000,
          "image": "images/cars/GENESIS_G70_2.jpg"
        }
      ]
    },
    "GMC": {
      "Acadia": [
        {
          "name": "2020-2023 (2-ci nəsil Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 28000,
          "image": "images/cars/GMC_Acadia_1.jpg"
        }
      ],
      "Terrain": [
        {
          "name": "2018-2020 (2-ci nəsil 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18500,
          "maxPrice": 23000,
          "image": "images/cars/GMC_Terrain_1.png"
        }
      ]
    },
    "HONDA": {
      "Accord": [
        {
          "name": "2018-2022 (10-cu nəsil 2.0T Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 28000,
          "image": "images/cars/HONDA_Accord_1.jpg"
        },
        {
          "name": "2020-2022 (10-cu nəsil 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 23000,
          "maxPrice": 27500,
          "image": "images/cars/HONDA_Accord_2.webp"
        },
        {
          "name": "2023-2026 (11-ci nəsil 2.0 e:HEV Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/HONDA_Accord_3.jpg"
        }
      ],
      "Civic": [
        {
          "name": "2017-2021 (10-cu nəsil 2.0L K20C2)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 19500,
          "image": "images/cars/HONDA_Civic_1.png"
        },
        {
          "name": "2017-2021 (10-cu nəsil 2.0L K20C2)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 19500,
          "image": "images/cars/HONDA_Civic_2.jpg"
        },
        {
          "name": "2022-2024 (11-ci nəsil 2.0L K20C2)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/HONDA_Civic_3.jpg"
        },
        {
          "name": "2022-2024 (11-ci nəsil 2.0L K20C2)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/HONDA_Civic_4.jpg"
        },
        {
          "name": "2017-2021 (Type R 2.0T FK8)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 40000,
          "image": "images/cars/HONDA_Civic_5.jpg"
        },
        {
          "name": "2023-2026 (Type R 2.0T FL5)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 44000,
          "maxPrice": 52000,
          "image": "images/cars/HONDA_Civic_6.jpg"
        },
        {
          "name": "2025-2026 (11-ci nəsil 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 28000,
          "maxPrice": 33000,
          "image": "images/cars/HONDA_Civic_7.webp"
        },
        {
          "name": "2025-2026 (11-ci nəsil 2.0 Hybrid)",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 28000,
          "maxPrice": 33000,
          "image": "images/cars/HONDA_Civic_8.jpg"
        }
      ],
      "CR-V": [
        {
          "name": "2020-2022 (5-ci nəsil 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 24000,
          "maxPrice": 29000,
          "image": "images/cars/HONDA_CRV_1.jpg"
        },
        {
          "name": "2023-2026 (6-cı nəsil 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/HONDA_CRV_2.jpg"
        }
      ],
      "HR-V": [
        {
          "name": "2023-2026 (3-cü nəsil US 2.0L K20Z5)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 28000,
          "image": "images/cars/HONDA_HRV_1.jpg"
        }
      ]
    },
    "HYUNDAI": {
      "Elantra": [
        {
          "name": "2017-2018 (AD Pre-Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16000,
          "image": "images/cars/HYUNDAI_Elantra_1.jpg"
        },
        {
          "name": "2019-2020 (AD Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 18500,
          "image": "images/cars/HYUNDAI_Elantra_2.jpg"
        },
        {
          "name": "2021-2023 (CN7 Pre-Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 22000,
          "image": "images/cars/HYUNDAI_Elantra_3.jpg"
        },
        {
          "name": "2021-2023 (CN7 Pre-Facelift 2.0 HEV)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 20000,
          "maxPrice": 23000,
          "image": "images/cars/HYUNDAI_Elantra_4.jpg"
        },
        {
          "name": "2024-2026 (CN7 Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 23500,
          "maxPrice": 26500,
          "image": "images/cars/HYUNDAI_Elantra_5.jpg"
        },
        {
          "name": "2024-2026 (CN7 Facelift 2.0 HEV)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 24500,
          "maxPrice": 27500,
          "image": "images/cars/HYUNDAI_Elantra_6.jpg"
        },
        {
          "name": "2022-2026 (Elantra N 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 31000,
          "maxPrice": 38000,
          "image": "images/cars/HYUNDAI_Elantra_7.jpg"
        }
      ],
      "Kona": [
        {
          "name": "2018-2021 (1-ci nəsil Pre-Facelift 2.0L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19000,
          "image": "images/cars/HYUNDAI_Kona_1.jpg"
        },
        {
          "name": "2022-2023 (1-ci nəsil Facelift 2.0L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 24000,
          "image": "images/cars/HYUNDAI_Kona_2.jpg"
        },
        {
          "name": "2022-2023 (Kona N 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/HYUNDAI_Kona_3.jpg"
        },
        {
          "name": "2024-2026 (2-ci nəsil 2.0L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 28000,
          "image": "images/cars/HYUNDAI_Kona_4_1786208227610.webp"
        }
      ],
      "Santa Fe": [
        {
          "name": "2017-2018 (Santa Fe Sport 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 20500,
          "image": "images/cars/HYUNDAI_SantaFe_1_1786208847262.jpg"
        },
        {
          "name": "2019-2020 (TM 2.0T Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/HYUNDAI_SantaFe_2_1786208850960.jpg"
        }
      ],
      "Sonata": [
        {
          "name": "2017-2019 (LF Facelift 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15500,
          "maxPrice": 18500,
          "image": "images/cars/HYUNDAI_Sonata_1_1786208854014.jpg"
        },
        {
          "name": "2017-2019 (LF Facelift 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 16500,
          "maxPrice": 19500,
          "image": "images/cars/HYUNDAI_Sonata_2_1786208857508.png"
        },
        {
          "name": "2020-2023 (DN8 Pre-Facelift 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/HYUNDAI_Sonata_3_1786208860900.jpg"
        },
        {
          "name": "2024-2026 (DN8 Facelift 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 26000,
          "maxPrice": 30000,
          "image": "images/cars/HYUNDAI_Sonata_4_1786208863559.jpg"
        }
      ],
      "Tucson": [
        {
          "name": "2017-2021 (TL 2.0L Nu GDI)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 21000,
          "image": "images/cars/HYUNDAI_Tucson_1_1786208868032.jpg"
        }
      ],
      "Veloster": [
        {
          "name": "2019-2021 (2-ci nəsil 2.0L Nu)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 19500,
          "image": "images/cars/HYUNDAI_Veloster_1_1786208884096.jpg"
        },
        {
          "name": "2019-2022 (Veloster N 2.0T)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 30000,
          "image": "images/cars/HYUNDAI_Veloster_2_1786208887406.webp"
        }
      ]
    },
    "INFINITI": {
      "Q50": [
        {
          "name": "2017-2019 (2.0t Benzin)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21500,
          "image": "images/cars/INFINITI_Q50_1_1786208893367.jpg"
        }
      ],
      "Q60": [
        {
          "name": "2017-2018 (2.0t)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 23500,
          "image": "images/cars/INFINITI_Q60_1_1786208901627.png"
        }
      ],
      "QX30": [
        {
          "name": "2017-2019 (2.0t)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 20000,
          "image": "images/cars/INFINITI_QX30_1_1786208908324.jpg"
        }
      ],
      "QX50": [
        {
          "name": "2019-2025 (2.0 VC-Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 32000,
          "image": "images/cars/INFINITI_QX50_1_1786208916480.jpg"
        }
      ],
      "QX55": [
        {
          "name": "2022-2025 (2.0 VC-Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/INFINITI_QX55_1_1786208922106.jpg"
        }
      ],
      "QX60": [
        {
          "name": "2025-2026 (2.0 VC-Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 52000,
          "image": "images/cars/INFINITI_QX60_1_1786208928200.jpg"
        }
      ]
    },
    "JAGUAR": {
      "E-Pace": [
        {
          "name": "2018-2020 (P250 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 27000,
          "image": "images/cars/JAGUAR_EPace_1_1786208932110.jpg"
        }
      ],
      "F-Pace": [
        {
          "name": "2017-2020 (20d 2.0 Diesel)",
          "type": "Crossover",
          "fuel": "Dizel",
          "minPrice": 21000,
          "maxPrice": 27000,
          "image": "images/cars/JAGUAR_FPace_1_1786208935479.webp"
        },
        {
          "name": "2017-2020 (25t / 30t Pre-Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 30000,
          "image": "images/cars/JAGUAR_FPace_2_1786208939376.png"
        },
        {
          "name": "2021-2025 (P250 Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 42000,
          "image": "images/cars/JAGUAR_FPace_3_1786208943967.jpg"
        }
      ],
      "F-Type": [
        {
          "name": "2018-2024 (P300 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/JAGUAR_FType_1_1786208948983.jpg"
        },
        {
          "name": "2018-2024 (P300 2.0T)",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/JAGUAR_FType_2_1786208968157.jpg"
        }
      ],
      "XE": [
        {
          "name": "2017-2019 (20d 2.0 Diesel)",
          "type": "Sedan",
          "fuel": "Dizel",
          "minPrice": 16500,
          "maxPrice": 21000,
          "image": "images/cars/JAGUAR_XE_1_1786208958873.jpg"
        },
        {
          "name": "2017-2020 (20t / 25t / 30t 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 24000,
          "image": "images/cars/JAGUAR_XE_2_1786208974090.jpg"
        }
      ],
      "XF": [
        {
          "name": "2017-2019 (20d 2.0 Diesel)",
          "type": "Sedan",
          "fuel": "Dizel",
          "minPrice": 18500,
          "maxPrice": 23500,
          "image": "images/cars/JAGUAR_XF_1_1786208978715.jpg"
        },
        {
          "name": "2017-2020 (25t / 30t Pre-Facelift 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 26000,
          "image": "images/cars/JAGUAR_XF_2_1786208982639.jpg"
        },
        {
          "name": "2021-2024 (P250 Facelift 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 35000,
          "image": "images/cars/JAGUAR_XF_3_1786208988275.jpg"
        }
      ]
    },
    "JEEP": {
      "Cherokee": [
        {
          "name": "2019-2023 (KL Facelift 2.0T Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 18500,
          "maxPrice": 24000,
          "image": "images/cars/JEEP_Cherokee_1_1786208991914.png"
        }
      ],
      "Compass": [
        {
          "name": "2017-2022 (2.0L / 2.4L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 21000,
          "image": "images/cars/JEEP_Compass_1_1786209000814.jpg"
        },
        {
          "name": "2023-2026 (2.0T Turbo 200 hp)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 28000,
          "image": "images/cars/JEEP_Compass_2_1786209018542.jpg"
        }
      ],
      "Grand Cherokee": [
        {
          "name": "2022-2026 (WL 2.0T 4xe PHEV)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 42000,
          "maxPrice": 58000,
          "image": "images/cars/JEEP_GrandCherokee_1_1786209022880.jpg"
        }
      ],
      "Patriot": [],
      "Wrangler": [
        {
          "name": "2018-2023 (JL Pre-Facelift 2.0T Turbo)",
          "type": "Off-Road SUV",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 40000,
          "image": "images/cars/JEEP_Wrangler_1_1786209032654.jpg"
        },
        {
          "name": "2021-2023 (JL Pre-Facelift 4xe PHEV)",
          "type": "Off-Road SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/JEEP_Wrangler_2_1786209038927.jpg"
        },
        {
          "name": "2024-2026 (JL Facelift 2.0T Turbo)",
          "type": "Off-Road SUV",
          "fuel": "Benzin",
          "minPrice": 43000,
          "maxPrice": 50000,
          "image": "images/cars/JEEP_Wrangler_3_1786209042251.jpg"
        },
        {
          "name": "2024-2026 (JL Facelift 4xe PHEV)",
          "type": "Off-Road SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 45000,
          "maxPrice": 52000,
          "image": "images/cars/JEEP_Wrangler_4_1786209045439.jpg"
        }
      ]
    },
    "KIA": {
      "Forte": [
        {
          "name": "2019-2024 (BD 2.0 Nu MPI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 21000,
          "image": "images/cars/KIA_Forte_2_1786209054357.jpg"
        }
      ],
      "K4": [
        {
          "name": "2025-2026 (2.0L Nu MPI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 28000,
          "image": "images/cars/KIA_K4_1_1786209057545.jpg"
        }
      ],
      "Optima": [
        {
          "name": "2017-2020 (JF 2.0T Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 21500,
          "image": "images/cars/KIA_Optima_1_1786209060624.jpg"
        },
        {
          "name": "2017-2020 (JF 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 16500,
          "maxPrice": 20500,
          "image": "images/cars/KIA_Optima_2_1786209068726.jpg"
        }
      ],
      "Seltos": [
        {
          "name": "2021-2023 (Pre-Facelift 2.0 Nu)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 22500,
          "image": "images/cars/KIA_Seltos_1_1786209073465.jpg"
        },
        {
          "name": "2024-2026 (Facelift 2.0 Nu)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 26000,
          "image": "images/cars/KIA_Seltos_2_1786209076289.webp"
        }
      ],
      "Sorento": [
        {
          "name": "2017-2018 (UM 2.0T Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/KIA_Sorento_1_1786209079059.jpg"
        }
      ],
      "Soul": [
        {
          "name": "2017-2019 (PS Facelift 2.0L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16500,
          "image": "images/cars/KIA_Soul_1_1786209083285.jpg"
        },
        {
          "name": "2020-2025 (SK3 2.0L)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 21000,
          "image": "images/cars/KIA_Soul_2_1786209086101.jpg"
        }
      ],
      "Sportage": [
        {
          "name": "2017-2022 (QL 2.0L / 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 23000,
          "image": "images/cars/KIA_Sportage_1_1786209089367.jpg"
        }
      ],
      "Stinger": [
        {
          "name": "2018-2021 (2.0T Theta II)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 28000,
          "image": "images/cars/KIA_Stinger_1_1786209102077.jpg"
        },
        {
          "name": "2018-2021 (2.0T Theta II)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 28000,
          "image": "images/cars/KIA_Stinger_2_1786209108012.jpg"
        }
      ]
    },
    "LAND ROVER": {
      "Defender": [
        {
          "name": "2020-2025 (L663 P300 2.0T)",
          "type": "Off-Road SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 65000,
          "image": "images/cars/LANDROVER_Defender_1_1786209140997.jpg"
        }
      ],
      "Discovery Sport": [
        {
          "name": "2017-2019 (L550 2.0 Td4 Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 18500,
          "maxPrice": 24000,
          "image": "images/cars/LANDROVER_DiscoverySport_1_1786209117917.jpg"
        },
        {
          "name": "2017-2019 (L550 Pre-Facelift 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 26000,
          "image": "images/cars/LANDROVER_DiscoverySport_2_1786209123134.jpg"
        },
        {
          "name": "2020-2025 (L550 Facelift P250 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 42000,
          "image": "images/cars/LANDROVER_DiscoverySport_3_1786209149223.jpg"
        }
      ],
      "Range Rover Evoque": [
        {
          "name": "2017-2019 (L538 2.0 Td4 Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 19500,
          "maxPrice": 24500,
          "image": "images/cars/LANDROVER_RangeRoverEvoque_1_1786209154147.jpg"
        },
        {
          "name": "2017-2019 (L538 1-ci nəsil 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 26000,
          "image": "images/cars/LANDROVER_RangeRoverEvoque_2_1786209158631.jpg"
        },
        {
          "name": "2020-2026 (L551 2-ci nəsil P250 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/LANDROVER_RangeRoverEvoque_3_1786209162632.jpg"
        }
      ],
      "Range Rover Velar": [
        {
          "name": "2018-2020 (L560 D180 2.0 Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 29000,
          "maxPrice": 37000,
          "image": "images/cars/LANDROVER_RangeRoverVelar_1_1786209166765.jpg"
        },
        {
          "name": "2018-2026 (L560 P250 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 52000,
          "image": "images/cars/LANDROVER_RangeRoverVelar_2_1786209169830.jpg"
        }
      ]
    },
    "LEXUS": {
      "IS": [
        {
          "name": "2017-2020 (XE30 IS 200t / IS 300 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 27000,
          "image": "images/cars/LEXUS_IS_1_1786209176833.png"
        },
        {
          "name": "2021-2025 (XE30 Facelift IS 300 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 29000,
          "maxPrice": 38000,
          "image": "images/cars/LEXUS_IS_2_1786209180874.jpg"
        }
      ],
      "NX": [
        {
          "name": "2017-2021 (AZ10 NX 200t / NX 300 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 31000,
          "image": "images/cars/LEXUS_NX_1_1786209185464.png"
        }
      ],
      "RC": [
        {
          "name": "2017-2022 (XC10 RC 200t / RC 300 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 32000,
          "image": "images/cars/LEXUS_RC_1_1786209196001.png"
        }
      ],
      "UX": [
        {
          "name": "2019-2022 (ZA10 UX 200 2.0L Benzin)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/LEXUS_UX_1_1786209199608.jpg"
        },
        {
          "name": "2019-2024 (ZA10 UX 250h 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/LEXUS_UX_2_1786209204356.jpg"
        },
        {
          "name": "2025-2026 (ZA10 UX 300h 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 35000,
          "maxPrice": 40000,
          "image": "images/cars/LEXUS_UX_3_1786209215000.jpg"
        }
      ]
    },
    "LINCOLN": {
      "Corsair": [
        {
          "name": "2020-2022 (Pre-Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 32000,
          "image": "images/cars/LINCOLN_Corsair_1_1786209218692.jpg"
        },
        {
          "name": "2023-2026 (Facelift 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 39000,
          "image": "images/cars/LINCOLN_Corsair_2_1786209223468.jpg"
        }
      ],
      "MKC": [
        {
          "name": "2017-2019 (2.0 EcoBoost)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 22000,
          "image": "images/cars/LINCOLN_MKC_1_1786209227713.jpg"
        }
      ],
      "MKZ": [
        {
          "name": "2017-2020 (Facelift 2.0 EcoBoost)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 21000,
          "image": "images/cars/LINCOLN_MKZ_1_1786209232417.jpg"
        },
        {
          "name": "2017-2020 (Facelift 2.0 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 16500,
          "maxPrice": 22000,
          "image": "images/cars/LINCOLN_MKZ_2_1786209235020.jpg"
        }
      ],
      "Nautilus": [
        {
          "name": "2019-2023 (1-ci nəsil 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/LINCOLN_Nautilus_1_1786209238603.jpg"
        },
        {
          "name": "2024-2026 (2-ci nəsil 2.0T Benzin)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 48000,
          "image": "images/cars/LINCOLN_Nautilus_2_1786209243491.jpg"
        },
        {
          "name": "2024-2026 (2-ci nəsil 2.0 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 44000,
          "maxPrice": 50000,
          "image": "images/cars/LINCOLN_Nautilus_3_1786209250238.jpg"
        }
      ]
    },
    "MASERATI": {
      "Grecale": [
        {
          "name": "2023-2026 (GT / Modena 2.0T Mild Hybrid)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 65000,
          "image": "images/cars/MASERATI_Grecale_1_1786209253181.jpg"
        }
      ]
    },
    "MAZDA": {
      "Mazda 3": [
        {
          "name": "2017-2018 (BN Facelift 2.0 SkyActiv-G)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16500,
          "image": "images/cars/MAZDA_Mazda3_1_1786209257867.jpg"
        },
        {
          "name": "2017-2018 (BN Facelift 2.0 SkyActiv-G)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 13500,
          "maxPrice": 16500,
          "image": "images/cars/MAZDA_Mazda3_2_1786209261243.jpg"
        },
        {
          "name": "2019-2024 (BP 2.0 SkyActiv-G)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/MAZDA_Mazda3_3_1786209267134.jpg"
        },
        {
          "name": "2019-2024 (BP 2.0 SkyActiv-G)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 21000,
          "image": "images/cars/MAZDA_Mazda3_4_1786209271062.jpg"
        }
      ],
      "CX-3": [
        {
          "name": "2017-2021 (2.0 SkyActiv-G)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 19500,
          "image": "images/cars/MAZDA_CX3_1_1786209278742.jpg"
        }
      ],
      "MX-5 Miata": [
        {
          "name": "2017-2018 (ND1 2.0L 155hp)",
          "type": "Roadster",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/MAZDA_MX5Miata_1_1786209283303.jpg"
        },
        {
          "name": "2019-2026 (ND2 / ND3 2.0L 181hp)",
          "type": "Roadster",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/MAZDA_MX5Miata_2_1786209290644.jpg"
        }
      ]
    },
    "MERCEDES-BENZ": {
      "A-Class": [
        {
          "name": "2019-2022 (V177 A 220 2.0T / AMG A 35)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 38000,
          "image": "images/cars/images (4).jpg"
        }
      ],
      "C-Class": [
        {
          "name": "2017-2018 (W205 C 300 2.0T Pre-Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/1948318ea657bda30518da807ffcc78f.jpg"
        },
        {
          "name": "2017-2018 (W205 C 300 2.0T Pre-Facelift)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 23000,
          "image": "images/cars/img1419532585-1439398184739.webp"
        },
        {
          "name": "2019-2021 (W205 C 300 2.0T Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 30000,
          "image": "images/cars/images (5).jpg"
        },
        {
          "name": "2019-2021 (W205 C 300 2.0T Facelift)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 30000,
          "image": "images/cars/589836.avif"
        },
        {
          "name": "2022-2026 (W206 C 300 / AMG C 43 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 58000,
          "image": "images/cars/2022-mercedes-benz-c-class-118-1613767289.avif"
        },
        {
          "name": "2024-2026 (W206 AMG C 63 S E Performance)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 75000,
          "maxPrice": 90000,
          "image": "images/cars/2026_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_1280.avif"
        }
      ],
      "CLA-Class": [
        {
          "name": "2017-2019 (C117 CLA 250 2.0T)",
          "type": "Coupe Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/2017_mercedes-benz_cla-class_sedan_amg-cla-45_fq_oem_1_1600.avif"
        },
        {
          "name": "2020-2026 (C118 CLA 250 / AMG CLA 35)",
          "type": "Coupe Sedan",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 42000,
          "image": "images/cars/cwnx4qaqu5t5wpw8lpg5xmvcm.jpg"
        }
      ],
      "CLE-Class": [
        {
          "name": "2024-2026 (CLE 300 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 68000,
          "image": "images/cars/2026_mercedes-benz_cle-pic-6295713166014143086-1024x768.jpeg"
        }
      ],
      "E-Class": [
        {
          "name": "2017-2020 (W213 E 300 / E 350 Pre-Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 31000,
          "image": "images/cars/63773a_d6a8a4fd31a146aa8bb5b4bd0f91af54~mv2.avif"
        },
        {
          "name": "2021-2023 (W213 E 350 Facelift)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 42000,
          "image": "images/cars/images (2).jpg"
        },
        {
          "name": "2024-2026 (W214 E 350 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 58000,
          "image": "images/cars/2024-mercedesbenz-e350-03.jpg"
        }
      ],
      "GLA-Class": [
        {
          "name": "2017-2020 (X156 GLA 250 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17500,
          "maxPrice": 22000,
          "image": "images/cars/mercedes-benz_gla-class__645358874bx.jpg"
        },
        {
          "name": "2021-2026 (H247 GLA 250 / AMG GLA 35)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 27000,
          "maxPrice": 39000,
          "image": "images/cars/images (6).jpg"
        }
      ],
      "GLB-Class": [
        {
          "name": "2020-2026 (X247 GLB 250 / AMG GLB 35)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 45000,
          "image": "images/cars/images (7).jpg"
        }
      ],
      "GLC-Class": [
        {
          "name": "2017-2019 (X253 GLC 300 Pre-Facelift)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/22fscmbnc5b3mbutdc1rha2lc.jpg"
        },
        {
          "name": "2020-2022 (X253 GLC 300 Facelift)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 35000,
          "image": "images/cars/1138363.avif"
        },
        {
          "name": "2023-2026 (X254 GLC 300 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 48000,
          "image": "images/cars/2023-mercedesbenz-glc300-10.jpg"
        },
        {
          "name": "2024-2026 (X254 GLC 350e PHEV)",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 45000,
          "maxPrice": 55000,
          "image": "images/cars/images (8).jpg"
        }
      ],
      "GLE-Class": [
        {
          "name": "2020-2023 (V167 GLE 350 Pre-Facelift)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 46000,
          "image": "images/cars/2020-GLE-SUV-GALLERY-002-SET-Q-FI-DR.avif"
        },
        {
          "name": "2024-2026 (V167 GLE 350 Facelift)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 58000,
          "image": "images/cars/001-2024-mercedes-benz-gle-450e-front-in-motion.avif"
        },
        {
          "name": "2024-2026 (V167 GLE 450e PHEV)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 55000,
          "maxPrice": 65000,
          "image": "images/cars/2024-mercedes-benz-gle450e-101-643702f785158.avif"
        }
      ],
      "Metris": [
        {
          "name": "2017-2023 (2.0T)",
          "type": "Van",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 26000,
          "image": "images/cars/6-2023-mercedes-benz-metris-exterior.avif"
        }
      ],
      "SLC": [
        {
          "name": "2017-2020 (SLC 300 2.0T)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/2017-slc-16c3-012.jpg"
        }
      ],
      "Sprinter": [
        {
          "name": "2021-2026 (2.0T Petrol)",
          "type": "Van",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 44000,
          "image": "images/cars/images (9).jpg"
        },
        {
          "name": "2021-2026 (2.0 Turbo Diesel)",
          "type": "Van",
          "fuel": "Dizel",
          "minPrice": 35000,
          "maxPrice": 48000,
          "image": "images/cars/2026_mercedes-benz_sprinter_cargo-van_2500-144-wb-cargo_fq_oem_1_1280.avif"
        }
      ]
    },
    "MINI": {
      "Clubman": [
        {
          "name": "2017-2024 (F54 Cooper S / JCW 2.0T)",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 29000,
          "image": "images/cars/MINI_Clubman_1_1786209301158.jpg"
        }
      ],
      "Cooper": [
        {
          "name": "2017-2021 (F55 / F56 Cooper S / JCW 2.0T)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 25000,
          "image": "images/cars/MINI_Cooper_1_1786209308498.jpg"
        },
        {
          "name": "2017-2021 (F55 / F56 Cooper S / JCW 2.0T)",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 25000,
          "image": "images/cars/MINI_Cooper_2_1786209312096.png"
        },
        {
          "name": "2022-2024 (F55 / F56 Facelift 2 Cooper S / JCW)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 32000,
          "image": "images/cars/MINI_Cooper_3_1786209318581.jpg"
        },
        {
          "name": "2022-2024 (F55 / F56 Facelift 2 Cooper S / JCW)",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 32000,
          "image": "images/cars/MINI_Cooper_4_1786209322898.jpg"
        },
        {
          "name": "2025-2026 (F66 5-ci nəsil Cooper S 2.0T)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 38000,
          "image": "images/cars/MINI_Cooper_5_1786209327323.jpg"
        }
      ],
      "Countryman": [
        {
          "name": "2017-2023 (F60 Cooper S / JCW 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 29000,
          "image": "images/cars/MINI_Countryman_1_1786209331759.png"
        },
        {
          "name": "2024-2027 (U25 Countryman S / JCW 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 42000,
          "image": "images/cars/MINI_Countryman_2_1786209338564.jpg"
        }
      ]
    },
    "MITSUBISHI": {
      "Outlander": [
        {
          "name": "2018-2022 (PHEV 2.0L 4B11)",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 17000,
          "maxPrice": 24000,
          "image": "images/cars/MITSUBISHI_Outlander_1_1786209342826.jpg"
        }
      ]
    },
    "NISSAN": {
      "Altima": [
        {
          "name": "2019-2024 (L34 2.0 VC-Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 27000,
          "image": "images/cars/NISSAN_Altima_1_1786209347528.jpg"
        }
      ],
      "Kicks": [
        {
          "name": "2025-2026 (2-ci nəsil 2.0L MR20DD)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/NISSAN_Kicks_1_1786209351893.jpg"
        }
      ],
      "Murano": [
        {
          "name": "2025-2026 (4-cü nəsil 2.0 VC-Turbo)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 46000,
          "image": "images/cars/NISSAN_Murano_1_1786209357378.webp"
        }
      ],
      "NV200": [],
      "Rogue Sport": [
        {
          "name": "2017-2022 (2.0L MR20DD)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 14500,
          "maxPrice": 20000,
          "image": "images/cars/NISSAN_RogueSport_1_1786209367231.jpg"
        }
      ],
      "Sentra": [
        {
          "name": "2020-2023 (B18 Pre-Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19000,
          "image": "images/cars/NISSAN_Sentra_1_1786209371380.jpg"
        },
        {
          "name": "2024-2026 (B18 Facelift 2.0L)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19500,
          "maxPrice": 23000,
          "image": "images/cars/NISSAN_Sentra_2_1786209375003.jpg"
        }
      ]
    },
    "PORSCHE": {
      "Macan": [
        {
          "name": "2017-2018 (Base 2.0T Pre-Facelift)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 38000,
          "image": "images/cars/PORSCHE_Macan_1_1786209379863.jpg"
        },
        {
          "name": "2019-2021 (Base 2.0T Facelift 1)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 39000,
          "maxPrice": 47000,
          "image": "images/cars/PORSCHE_Macan_2_1786209383954.jpg"
        },
        {
          "name": "2022-2026 (Base / Macan T 2.0T Facelift 2)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/PORSCHE_Macan_3_1786209387423.jpg"
        }
      ],
      "718 Boxster / Cayman": [
        {
          "name": "2017-2025 (718 Base / T 2.0T Turbo)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 68000,
          "image": "images/cars/PORSCHE_718BoxsterCayman_1_1786209390684.jpg"
        },
        {
          "name": "2017-2025 (718 Base / T 2.0T Turbo)",
          "type": "Roadster",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 68000,
          "image": "images/cars/PORSCHE_718BoxsterCayman_2_1786209396136.jpg"
        }
      ]
    },
    "SUBARU": {
      "Crosstrek": [
        {
          "name": "2018-2023 (2-ci nəsil 2.0L FB20)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 21000,
          "image": "images/cars/SUBARU_Crosstrek_1_1786209405324.jpg"
        },
        {
          "name": "2024-2026 (3-cü nəsil 2.0L FB20)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 26000,
          "image": "images/cars/SUBARU_Crosstrek_2_1786209413368.jpg"
        }
      ],
      "Impreza": [
        {
          "name": "2017-2023 (5-ci nəsil 2.0L FB20)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 18500,
          "image": "images/cars/SUBARU_Impreza_1_1786209416694.jpg"
        },
        {
          "name": "2017-2023 (5-ci nəsil 2.0L FB20)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 18500,
          "image": "images/cars/SUBARU_Impreza_2_1786209420264.jpg"
        },
        {
          "name": "2024-2026 (6-cı nəsil 2.0L FB20)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 25000,
          "image": "images/cars/SUBARU_Impreza_3_1786209424393.jpg"
        }
      ],
      "WRX": [
        {
          "name": "2017-2021 (VA 2.0T FA20DIT)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 26000,
          "image": "images/cars/SUBARU_WRX_1_1786209427984.jpg"
        }
      ]
    },
    "TOYOTA": {
      "86": [
        {
          "name": "2017-2020 (2.0 Boxer FA20)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/TOYOTA_86_1_1786209432630.jpg"
        }
      ],
      "C-HR": [
        {
          "name": "2018-2022 (2.0L 3ZR-FAE)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 21000,
          "image": "images/cars/TOYOTA_CHR_1_1786209445308.jpg"
        }
      ],
      "Corolla": [
        {
          "name": "2019-2022 (E210 SE / XSE 2.0L Dynamic Force)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21500,
          "image": "images/cars/TOYOTA_Corolla_1_1786209450438.jpg"
        },
        {
          "name": "2019-2022 (E210 SE / XSE 2.0L Dynamic Force)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 21500,
          "image": "images/cars/TOYOTA_Corolla_2_1786209453907.jpg"
        },
        {
          "name": "2023-2026 (E210 Facelift 2.0L Dynamic Force)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 26000,
          "image": "images/cars/TOYOTA_Corolla_3_1786209457562.png"
        },
        {
          "name": "2023-2026 (E210 Facelift 2.0L Dynamic Force)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 26000,
          "image": "images/cars/TOYOTA_Corolla_4_1786209467350.jpg"
        }
      ],
      "Corolla Cross": [
        {
          "name": "2022-2026 (2.0L Benzin M20A-FKS)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 27000,
          "image": "images/cars/TOYOTA_CorollaCross_1_1786209474566.jpg"
        },
        {
          "name": "2023-2026 (2.0L Hybrid M20A-FXS)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 26000,
          "maxPrice": 32000,
          "image": "images/cars/TOYOTA_CorollaCross_2_1786209478041.jpg"
        }
      ],
      "GR Supra": [
        {
          "name": "2021-2024 (2.0T B48)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 46000,
          "image": "images/cars/TOYOTA_GRSupra_1_1786209481936.jpg"
        }
      ],
      "Prius": [
        {
          "name": "2023-2026 (XW60 2.0 Hybrid)",
          "type": "Hatchback",
          "fuel": "Hybrid",
          "minPrice": 29000,
          "maxPrice": 34000,
          "image": "images/cars/TOYOTA_Prius_1_1786209512347.jpg"
        },
        {
          "name": "2023-2026 (XW60 2.0 Prime PHEV)",
          "type": "Hatchback",
          "fuel": "Plug-in Hybrid",
          "minPrice": 32000,
          "maxPrice": 39000,
          "image": "images/cars/TOYOTA_Prius_2_1786209524399.jpg"
        }
      ]
    },
    "VOLKSWAGEN": {
      "Atlas": [
        {
          "name": "2018-2023 (Pre-Facelift 2.0 TSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 30000,
          "image": "images/cars/VOLKSWAGEN_Atlas_1_1786209534200.jpg"
        },
        {
          "name": "2024-2026 (Facelift 2.0 TSI 269hp)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 33000,
          "maxPrice": 42000,
          "image": "images/cars/VOLKSWAGEN_Atlas_2_1786209538280.jpg"
        }
      ],
      "Beetle": [
        {
          "name": "2018-2019 (A5 2.0 TSI EA888.3)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 21000,
          "image": "images/cars/VOLKSWAGEN_Beetle_1_1786209542971.jpg"
        },
        {
          "name": "2018-2019 (A5 2.0 TSI EA888.3)",
          "type": "Convertible",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 21000,
          "image": "images/cars/VOLKSWAGEN_Beetle_2_1786209547161.jpg"
        }
      ],
      "CC": [
        {
          "name": "2017 (Facelift 2.0 TSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 14000,
          "maxPrice": 17000,
          "image": "images/cars/VOLKSWAGEN_CC_1_1786209551430.png"
        }
      ],
      "Golf / Golf SportWagen": [
        {
          "name": "2019-2021 (Mk7.5 2.0 TSI / Alltrack)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/VOLKSWAGEN_GolfGolfSportWagen_1_1786209556712.png"
        },
        {
          "name": "2019-2021 (Mk7.5 2.0 TSI / Alltrack)",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 23000,
          "image": "images/cars/VOLKSWAGEN_GolfGolfSportWagen_2_1786209564098.jpg"
        }
      ],
      "Golf GTI": [
        {
          "name": "2017-2021 (Mk7 / Mk7.5 2.0 TSI)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 26000,
          "image": "images/cars/VOLKSWAGEN_GolfGTI_1_1786209580142.jpg"
        },
        {
          "name": "2022-2026 (Mk8 / Mk8.5 2.0 TSI)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/VOLKSWAGEN_GolfGTI_2_1786209589320.jpg"
        }
      ],
      "Golf R": [
        {
          "name": "2017-2019 (Mk7.5 2.0 TSI AWD)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 34000,
          "image": "images/cars/VOLKSWAGEN_GolfR_1_1786209593345.jpg"
        },
        {
          "name": "2022-2026 (Mk8 2.0 TSI AWD)",
          "type": "Hatchback",
          "fuel": "Benzin",
          "minPrice": 37000,
          "maxPrice": 45000,
          "image": "images/cars/VOLKSWAGEN_GolfR_2_1786209601453.jpg"
        }
      ],
      "Jetta": [
        {
          "name": "2017-2018 (Mk6 GLI 2.0 TSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 15000,
          "maxPrice": 18500,
          "image": "images/cars/VOLKSWAGEN_Jetta_1_1786209604991.jpg"
        },
        {
          "name": "2019-2026 (Mk7 / Mk7.5 GLI 2.0 TSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 29000,
          "image": "images/cars/VOLKSWAGEN_Jetta_2_1786209610098.png"
        }
      ],
      "Passat": [
        {
          "name": "2018-2022 (NMS II 2.0 TSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 22000,
          "image": "images/cars/VOLKSWAGEN_Passat_1_1786209614440.jpg"
        }
      ],
      "Tiguan": [
        {
          "name": "2018-2024 (Mk2 LWB 2.0 TSI)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 16500,
          "maxPrice": 27000,
          "image": "images/cars/VOLKSWAGEN_Tiguan_1_1786209619749.jpg"
        },
        {
          "name": "2025-2026 (Mk3 2.0 TSI)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 29000,
          "maxPrice": 36000,
          "image": "images/cars/VOLKSWAGEN_Tiguan_2_1786209623365.jpg"
        }
      ]
    },
    "VOLVO": {
      "S60": [
        {
          "name": "2017-2018 (2-ci nəsil T5 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 16000,
          "maxPrice": 19500,
          "image": "images/cars/VOLVO_S60_1_1786209630247.jpg"
        },
        {
          "name": "2019-2022 (3-cü nəsil T5 / T6 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 29000,
          "image": "images/cars/VOLVO_S60_2_1786209634749.webp"
        },
        {
          "name": "2023-2026 (3-cü nəsil B5 Mild-Hybrid)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/VOLVO_S60_3_1786209639386.jpg"
        }
      ],
      "S90": [
        {
          "name": "2017-2021 (T5 / T6 2.0T)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 30000,
          "image": "images/cars/VOLVO_S90_1_1786209646978.webp"
        },
        {
          "name": "2022-2025 (B5 / B6 Mild-Hybrid)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/VOLVO_S90_2_1786209651112.jpg"
        }
      ],
      "V60": [
        {
          "name": "2017-2018 (1-ci nəsil T5 2.0T)",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 21000,
          "image": "images/cars/VOLVO_V60_1_1786209656552.jpg"
        },
        {
          "name": "2019-2025 (2-ci nəsil T5 / B5 Cross Country)",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 38000,
          "image": "images/cars/VOLVO_V60_2_1786209665520.jpg"
        }
      ],
      "V90": [
        {
          "name": "2018-2025 (Cross Country T5 / T6 / B5)",
          "type": "Station Wagon",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 40000,
          "image": "images/cars/VOLVO_V90_1_1786209668741.jpg"
        }
      ],
      "XC40": [
        {
          "name": "2019-2022 (T4 / T5 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 29000,
          "image": "images/cars/VOLVO_XC40_1_1786209673053.jpg"
        },
        {
          "name": "2023-2026 (B4 / B5 Mild-Hybrid)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 38000,
          "image": "images/cars/VOLVO_XC40_2_1786209678588.jpg"
        }
      ],
      "XC60": [
        {
          "name": "2018-2021 (2-ci nəsil T5 / T6 2.0T)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 30000,
          "image": "images/cars/VOLVO_XC60_1_1786209682752.png"
        },
        {
          "name": "2022-2026 (2-ci nəsil B5 / B6 Mild-Hybrid)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 31000,
          "maxPrice": 43000,
          "image": "images/cars/VOLVO_XC60_2_1786209687445.jpg"
        },
        {
          "name": "2021-2026 (T8 Recharge PHEV)",
          "type": "Crossover",
          "fuel": "Plug-in Hybrid",
          "minPrice": 42000,
          "maxPrice": 58000,
          "image": "images/cars/VOLVO_XC60_3_1786209693206.jpg"
        }
      ],
      "XC90": [
        {
          "name": "2017-2021 (2-ci nəsil T5 / T6 2.0T)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 33000,
          "image": "images/cars/VOLVO_XC90_1_1786209698024.jpg"
        },
        {
          "name": "2022-2026 (2-ci nəsil B5 / B6 Mild-Hybrid)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 52000,
          "image": "images/cars/VOLVO_XC90_2_1786209707242.jpg"
        },
        {
          "name": "2021-2026 (T8 Recharge PHEV)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 45000,
          "maxPrice": 62000,
          "image": "images/cars/VOLVO_XC90_3_1786209718570.jpg"
        }
      ]
    }
  },
  "2.2": {
    "Mercedes-Benz": {
      "Sprinter": [
        {
          "name": "2021-2022 W907 / W910",
          "type": "Minivan",
          "fuel": "Dizel",
          "minPrice": 45000,
          "maxPrice": 65000,
          "image": "images/cars/images (10).jpg"
        }
      ]
    }
  },
  "2.3": {
    "Ford": {
      "Bronco": [
        {
          "name": "2021-2026 VI Generation (EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 50000,
          "maxPrice": 75000,
          "image": "images/cars/Ford_Bronco_1_1786209739994.jpg"
        }
      ],
      "Explorer": [
        {
          "name": "2017-2019 V Restyling (EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Ford_Explorer_1_1786209747409.jpg"
        },
        {
          "name": "2020-2026 VI Generation (EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 65000,
          "image": "images/cars/Ford_Explorer_2_1786209751463.jpg"
        }
      ],
      "Focus": [],
      "Mustang": [
        {
          "name": "2017-2023 VI Generation (EcoBoost)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 45000,
          "image": "images/cars/Ford_Mustang_1_1786209763633.jpg"
        },
        {
          "name": "2024-2026 VII Generation (EcoBoost)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 75000,
          "image": "images/cars/Ford_Mustang_2_1786209772292.jpg"
        }
      ],
      "Ranger": [
        {
          "name": "2019-2023 IV Generation (EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 50000,
          "image": "images/cars/Ford_Ranger_1_1786209783406.jpg"
        },
        {
          "name": "2024-2026 V Generation (EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 72000,
          "image": "images/cars/Ford_Ranger_2_1786209791107.jpg"
        }
      ]
    },
    "Lincoln": {
      "Corsair": [
        {
          "name": "2020 I Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 48000,
          "image": "images/cars/Lincoln_Corsair_1_1786209796215.jpg"
        }
      ],
      "MKC": []
    }
  },
  "2.4": {
    "Fiat": {
      "500X": [
        {
          "name": "2017-2018 I Generation",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 17000,
          "maxPrice": 23000,
          "image": "images/cars/Fiat_500X_1_1786209847040.png"
        }
      ]
    },
    "Honda": {
      "Accord": [],
      "CR-V": [
        {
          "name": "2017-2019 V Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 26000,
          "maxPrice": 35000,
          "image": "images/cars/Honda_CRV_1_1786209863611.jpg"
        }
      ]
    },
    "Hyundai": {
      "Santa Fe": [
        {
          "name": "2019-2020 IV Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Hyundai_SantaFe_2_1786209879535.jpg"
        }
      ]
    },
    "Jeep": {
      "Compass": [
        {
          "name": "2017-2022 II Generation (MP)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 32000,
          "image": "images/cars/Jeep_Compass_1_1786209908910.jpg"
        }
      ],
      "Renegade": [
        {
          "name": "2017-2021 I Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 27000,
          "image": "images/cars/Jeep_Renegade_1_1786209918882.jpg"
        }
      ]
    },
    "Lexus": {
      "NX": [
        {
          "name": "2022-2024 NX 350 (2.4 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 65000,
          "maxPrice": 85000,
          "image": "images/cars/Lexus_NX_1_1786209941827.jpg"
        }
      ],
      "RX": [
        {
          "name": "2023-2026 V Generation (RX 350 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 85000,
          "maxPrice": 115000,
          "image": "images/cars/Lexus_RX_1_1786209946825.jpg"
        }
      ],
      "TX": [
        {
          "name": "2024-2026 TX 350 (2.4 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 90000,
          "maxPrice": 120000,
          "image": "images/cars/Lexus_TX_1_1786209951776.jpg"
        },
        {
          "name": "2024-2026 TX 500h (2.4 Turbo Hybrid)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 110000,
          "maxPrice": 140000,
          "image": "images/cars/Lexus_TX_2_1786209956530.jpg"
        }
      ]
    },
    "Subaru": {
      "BRZ": [
        {
          "name": "2023-2025 II Generation",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 52000,
          "image": "images/cars/Subaru_BRZ_1_1786209985526.jpg"
        }
      ],
      "Legacy": [
        {
          "name": "2022-2024 VII Generation (XT Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 45000,
          "image": "images/cars/Subaru_Legacy_1_1786209992457.jpg"
        }
      ],
      "Outback": [
        {
          "name": "2025-2026 VI Generation (XT Turbo)",
          "type": "Wagon",
          "fuel": "Benzin",
          "minPrice": 50000,
          "maxPrice": 65000,
          "image": "images/cars/Subaru_Outback_1_1786210000313.jpg"
        }
      ]
    },
    "Toyota": {
      "4Runner": [
        {
          "name": "2025-2026 VI Generation (2.4 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 75000,
          "maxPrice": 98000,
          "image": "images/cars/Toyota_4Runner_1_1786210004598.jpg"
        }
      ],
      "GR86": [
        {
          "name": "2023-2025 I Generation",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 52000,
          "image": "images/cars/Toyota_GR86_1_1786210008382.jpg"
        }
      ],
      "Grand Highlander": [
        {
          "name": "2024-2025 I Generation (2.4 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 75000,
          "maxPrice": 95000,
          "image": "images/cars/Toyota_GrandHighlander_1_1786210014305.jpg"
        }
      ],
      "Highlander": [
        {
          "name": "2024-2025 IV Restyling (2.4 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 65000,
          "maxPrice": 85000,
          "image": "images/cars/Toyota_Highlander_1_1786210019174.jpg"
        }
      ],
      "Tacoma": [
        {
          "name": "2024-2026 IV Generation (2.4 Turbo)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 60000,
          "maxPrice": 85000,
          "image": "images/cars/Toyota_Tacoma_1_1786210022741.jpg"
        }
      ]
    }
  },
  "2.5": {
    "Audi": {
      "RS3": [
        {
          "name": "2018 III Generation (8V Restyling - 2.5 TFSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 60000,
          "image": "images/cars/Audi_RS3_1_1786210027451.jpg"
        }
      ]
    },
    "Chevrolet": {
      "Blazer": [
        {
          "name": "2019 I Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 32000,
          "image": "images/cars/images (20).jpg"
        }
      ],
      "Colorado": [
        {
          "name": "2019-2022 II Generation",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 32000,
          "image": "images/cars/2018_chevrolet_colorado_crew-cab-pickup_zr2_fq_oem_1_1600.avif"
        }
      ],
      "Traverse": [
        {
          "name": "2025-2026 III Generation (2.5 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 65000,
          "maxPrice": 85000,
          "image": "images/cars/1-2025-chevrolet-traverse-z71-front-view.avif"
        }
      ]
    },
    "Ford": {
      "Escape": [
        {
          "name": "2020-2023 IV Generation (Hybrid)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 26000,
          "maxPrice": 35000,
          "image": "images/cars/Ford_Escape_2_1786210043525.jpg"
        }
      ],
      "Maverick": [
        {
          "name": "2022-2026 I Generation (2.5 Hybrid)",
          "type": "Pickup",
          "fuel": "Hybrid",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/Ford_Maverick_1_1786210060650.jpg"
        }
      ],
      "Transit Connect": [
        {
          "name": "2018 II Restyling",
          "type": "Minivan",
          "fuel": "Benzin",
          "minPrice": 18000,
          "maxPrice": 24000,
          "image": "images/cars/Ford_TransitConnect_1_1786210108815.jpg"
        }
      ]
    },
    "GMC": {
      "Acadia": [
        {
          "name": "2017-2020 II Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 21000,
          "maxPrice": 29000,
          "image": "images/cars/GMC_Acadia_1_1786210115991.jpg"
        }
      ]
    },
    "Genesis": {
      "G70": [
        {
          "name": "2026 I Restyling (2.5 Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/Genesis_G70_1_1786210120717.jpg"
        }
      ],
      "G80": [
        {
          "name": "2023 II Generation (2.5 Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/Genesis_G80_1_1786210134687.jpg"
        }
      ],
      "GV70": [
        {
          "name": "2022-2024 I Generation (2.5 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 68000,
          "image": "images/cars/Genesis_GV70_1_1786210142177.jpg"
        }
      ],
      "GV80": [
        {
          "name": "2021 I Generation (2.5 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 58000,
          "maxPrice": 72000,
          "image": "images/cars/Genesis_GV80_1_1786210158443.jpg"
        }
      ]
    },
    "Hyundai": {
      "Santa Cruz": [
        {
          "name": "2022-2025 I Generation",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 44000,
          "image": "images/cars/Hyundai_SantaCruz_1_1786210169738.jpg"
        }
      ],
      "Santa Fe": [
        {
          "name": "2021-2023 IV Restyling (TM)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 42000,
          "image": "images/cars/Hyundai_SantaFe_1_1786210174038.jpg"
        },
        {
          "name": "2024-2025 V Generation (MX5)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 65000,
          "image": "images/cars/Hyundai_SantaFe_2_1786210178633.jpg"
        }
      ],
      "Sonata": [
        {
          "name": "2020-2023 VIII Generation (DN8)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 33000,
          "image": "images/cars/Hyundai_Sonata_1_1786210184342.jpg"
        },
        {
          "name": "2024-2025 VIII Restyling (DN8)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 45000,
          "image": "images/cars/Hyundai_Sonata_2_1786210191021.png"
        }
      ],
      "Tucson": [
        {
          "name": "2022-2026 IV Generation (NX4)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 38000,
          "image": "images/cars/Hyundai_Tucson_1_1786210198097.jpg"
        }
      ]
    },
    "KIA": {
      "K5": [
        {
          "name": "2025-2026 I Restyling (DL3)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 45000,
          "image": "images/cars/KIA_K5_1_1786210203939.jpg"
        }
      ],
      "Sorento": [
        {
          "name": "2021-2026 IV Generation (MQ4)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 52000,
          "image": "images/cars/KIA_Sorento_1_1786210208312.jpg"
        }
      ],
      "Sportage": [
        {
          "name": "2023-2026 V Generation (NQ5)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 43000,
          "image": "images/cars/KIA_Sportage_1_1786210215562.jpg"
        }
      ]
    },
    "Lexus": {
      "ES": [
        {
          "name": "2018-2023 VII Generation (ES 250 / ES 300h)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 55000,
          "image": "images/cars/Lexus_ES_1_1786210219265.webp"
        }
      ],
      "NX": [
        {
          "name": "2022-2025 II Generation (NX 250 / NX 350h)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 50000,
          "maxPrice": 70000,
          "image": "images/cars/Lexus_NX_1_1786210235376.jpg"
        }
      ]
    },
    "Lincoln": {
      "Corsair": [
        {
          "name": "2025 I Restyling (Grand Touring Plug-in Hybrid)",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 55000,
          "maxPrice": 68000,
          "image": "images/cars/Lincoln_Corsair_1_1786210248730.webp"
        }
      ]
    },
    "Mazda": {
      "Mazda 3": [],
      "Mazda 6": [],
      "CX-30": [
        {
          "name": "2020-2026 I Generation (DM)",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 35000,
          "image": "images/cars/Mazda_CX30_1_1786210297599.jpg"
        }
      ],
      "CX-5": [
        {
          "name": "2017-2021 II Generation (KF)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 23000,
          "maxPrice": 32000,
          "image": "images/cars/Mazda_CX5_1_1786210303435.png"
        },
        {
          "name": "2022-2026 II Restyling (KF)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Mazda_CX5_2_1786210312099.jpg"
        }
      ],
      "CX-50": [
        {
          "name": "2023-2025 I Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 48000,
          "image": "images/cars/Mazda_CX50_1_1786210319834.png"
        }
      ],
      "CX-9": []
    },
    "Mitsubishi": {
      "Outlander": [
        {
          "name": "2022-2025 IV Generation",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 42000,
          "image": "images/cars/Mitsubishi_Outlander_1_1786210332993.jpg"
        }
      ]
    },
    "Nissan": {
      "Altima": [
        {
          "name": "2019-2026 VI Generation (L34)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 22000,
          "maxPrice": 32000,
          "image": "images/cars/Nissan_Altima_2_1786210344633.jpg"
        }
      ],
      "Frontier": [],
      "Rogue": [
        {
          "name": "2017-2021 II Generation (T32)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 19000,
          "maxPrice": 27000,
          "image": "images/cars/Nissan_Rogue_1_1786210357380.jpg"
        }
      ]
    },
    "Subaru": {
      "Crosstrek": [
        {
          "name": "2021-2023 II Restyling",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 24000,
          "maxPrice": 31000,
          "image": "images/cars/Subaru_Crosstrek_1_1786210361750.jpg"
        },
        {
          "name": "2024-2025 III Generation",
          "type": "Crossover",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 40000,
          "image": "images/cars/Subaru_Crosstrek_2_1786210365841.jpg"
        }
      ],
      "Forester": [
        {
          "name": "2019-2025 V Generation (SK)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 36000,
          "image": "images/cars/Subaru_Forester_2_1786210385333.jpg"
        }
      ],
      "Legacy": [],
      "Outback": [
        {
          "name": "2020-2025 VI Generation (BT)",
          "type": "Wagon",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 38000,
          "image": "images/cars/Subaru_Outback_2_1786210415792.jpg"
        }
      ],
      "WRX": [
        {
          "name": "2021 VA Generation (2.5 Turbo STI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 50000,
          "image": "images/cars/Subaru_WRX_1_1786210420723.jpg"
        }
      ]
    },
    "Toyota": {
      "Avalon": [
        {
          "name": "2020 V Generation (2.5 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Toyota_Avalon_1_1786210424828.jpg"
        }
      ],
      "Camry": [
        {
          "name": "2018-2024 XV70 Generation",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 25000,
          "maxPrice": 38000,
          "image": "images/cars/Toyota_Camry_2_1786210438463.jpg"
        },
        {
          "name": "2025-2026 XV80 Generation (Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 42000,
          "maxPrice": 55000,
          "image": "images/cars/Toyota_Camry_3_1786210456031.jpg"
        }
      ],
      "Crown": [
        {
          "name": "2024-2025 XVI Generation (2.5 Hybrid)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/Toyota_Crown_1_1786210467558.jpg"
        }
      ],
      "Crown Signia": [
        {
          "name": "2025 I Generation (2.5 Hybrid)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 60000,
          "maxPrice": 75000,
          "image": "images/cars/Toyota_CrownSignia_1_1786210471723.jpg"
        }
      ],
      "Grand Highlander": [
        {
          "name": "2026 I Generation (2.5 Hybrid)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 70000,
          "maxPrice": 88000,
          "image": "images/cars/Toyota_GrandHighlander_1_1786210477012.jpg"
        }
      ],
      "Highlander": [
        {
          "name": "2021-2025 IV Generation (2.5 Hybrid)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 48000,
          "maxPrice": 65000,
          "image": "images/cars/Toyota_Highlander_1_1786210481602.jpg"
        }
      ],
      "RAV4": [
        {
          "name": "2019-2026 V Generation (XA50)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 45000,
          "image": "images/cars/Toyota_RAV4_1_1786210498202.png"
        }
      ],
      "Sienna": [
        {
          "name": "2021-2025 IV Generation (2.5 Hybrid)",
          "type": "Minivan",
          "fuel": "Hybrid",
          "minPrice": 50000,
          "maxPrice": 70000,
          "image": "images/cars/Toyota_Sienna_1_1786210505177.jpg"
        }
      ],
      "Venza": [
        {
          "name": "2021-2022 II Generation (2.5 Hybrid)",
          "type": "Crossover",
          "fuel": "Hybrid",
          "minPrice": 38000,
          "maxPrice": 48000,
          "image": "images/cars/Toyota_Venza_1_1786210516497.webp"
        }
      ]
    }
  },
  "2.7": {
    "Chevrolet": {
      "Colorado": [
        {
          "name": "2023-2026 III Generation (2.7 Turbo)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 58000,
          "image": "images/cars/my23-colorado-tb-1658934745.avif"
        }
      ],
      "Silverado 1500": [
        {
          "name": "2019-2021 IV Generation (2.7 Turbo)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 48000,
          "image": "images/cars/images (21).jpg"
        },
        {
          "name": "2022-2026 IV Restyling (TurboMax)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 65000,
          "image": "images/cars/silverado-1500-26-mov-cw2.avif"
        }
      ]
    },
    "Ford": {
      "Bronco": [
        {
          "name": "2021-2026 VI Generation (2.7 V6 EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 80000,
          "image": "images/cars/Ford_Bronco_1_1786210532098.jpg"
        }
      ],
      "Edge": [
        {
          "name": "2019-2024 II Restyling (ST - 2.7 EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 48000,
          "image": "images/cars/Ford_Edge_2_1786210553792.jpg"
        }
      ],
      "F-150": [
        {
          "name": "2017-2020 XIII Generation (2.7 V6 EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 48000,
          "image": "images/cars/Ford_F150_1_1786210550599.jpg"
        },
        {
          "name": "2021-2026 XIV Generation (2.7 V6 EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 50000,
          "maxPrice": 72000,
          "image": "images/cars/Ford_F150_2_1786210558396.jpg"
        }
      ],
      "Fusion": [
        {
          "name": "2017-2019 II Restyling (Sport - 2.7 EcoBoost V6)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 20000,
          "maxPrice": 27000,
          "image": "images/cars/Ford_Fusion_1_1786210563381.jpg"
        }
      ],
      "Ranger": [
        {
          "name": "2024-2025 V Generation (2.7 V6 EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 58000,
          "maxPrice": 75000,
          "image": "images/cars/Ford_Ranger_1_1786210579856.webp"
        }
      ]
    },
    "GMC": {
      "Canyon": [
        {
          "name": "2023-2025 III Generation (2.7 Turbo)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 62000,
          "image": "images/cars/GMC_Canyon_1_1786210583616.jpg"
        }
      ],
      "Sierra 1500": [
        {
          "name": "2019-2021 V Generation (2.7 Turbo)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 36000,
          "maxPrice": 50000,
          "image": "images/cars/GMC_Sierra1500_1_1786210606270.jpg"
        },
        {
          "name": "2022-2026 V Restyling (TurboMax)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 50000,
          "maxPrice": 68000,
          "image": "images/cars/GMC_Sierra1500_2_1786210612338.jpg"
        }
      ]
    },
    "Toyota": {
      "Highlander": [],
      "Tacoma": [
        {
          "name": "2017-2023 III Generation (2.7 2TR-FE)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 38000,
          "image": "images/cars/Toyota_Tacoma_1_1786210677516.jpg"
        }
      ]
    }
  },
  "3.0": {
    "Audi": {
      "A6": [
        {
          "name": "2019-2024 C8 Generation (55 TFSI / 3.0 V6)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 58000,
          "image": "images/cars/Audi_A6_1_1786210690184.png"
        }
      ],
      "A7 / A7 Sportback": [
        {
          "name": "2017-2019 C7 Restyling (3.0 TFSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Audi_A7A7Sportback_1_1786210702449.jpg"
        },
        {
          "name": "2021 C8 Generation (55 TFSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/Audi_A7A7Sportback_2_1786210706605.jpg"
        }
      ],
      "A8": [
        {
          "name": "2019 D5 Generation (55 TFSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/Audi_A8_1_1786210712156.jpg"
        }
      ],
      "Q7": [
        {
          "name": "2017-2019 II Generation (3.0 TFSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/Audi_Q7_1_1786210716242.webp"
        },
        {
          "name": "2020-2025 II Restyling (55 TFSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 72000,
          "image": "images/cars/Audi_Q7_2_1786210721696.jpg"
        }
      ],
      "Q8": [
        {
          "name": "2019-2025 I Generation (55 TFSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 58000,
          "maxPrice": 82000,
          "image": "images/cars/Audi_Q8_1_1786210726797.jpg"
        }
      ],
      "S4": [
        {
          "name": "2021 B9 Restyling (3.0 TFSI)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 52000,
          "image": "images/cars/Audi_S4_1_1786210732450.png"
        }
      ],
      "S5 / All-New S5": [
        {
          "name": "2018-2024 F5 Generation (3.0 TFSI)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 55000,
          "image": "images/cars/Audi_S5AllNewS5_1_1786210736320.jpg"
        },
        {
          "name": "2025 B10 Generation (S5 MHEV)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 68000,
          "maxPrice": 85000,
          "image": "images/cars/Audi_S5AllNewS5_2_1786210742229.jpg"
        }
      ],
      "SQ5 / SQ5 Sportback": [
        {
          "name": "2018-2024 FY Generation (3.0 TFSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 55000,
          "image": "images/cars/Audi_SQ5SQ5Sportback_1_1786210751977.jpg"
        },
        {
          "name": "2022-2024 FY Sportback (3.0 TFSI)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 62000,
          "image": "images/cars/Audi_SQ5SQ5Sportback_2_1786210757902.jpg"
        }
      ]
    },
    "BMW": {
      "2 Series": [
        {
          "name": "2022-2025 G42 Generation (M240i xDrive)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/BMW_2Series_1_1786210762115.jpg"
        }
      ],
      "3 Series": [
        {
          "name": "2017-2018 F30 Restyling (340i)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 36000,
          "image": "images/cars/BMW_3Series_1_1786210782848.jpg"
        },
        {
          "name": "2019-2021 G20 Generation (M340i)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 55000,
          "image": "images/cars/BMW_3Series_2_1786210794610.jpg"
        }
      ],
      "4 Series": [
        {
          "name": "2018-2020 F32 Restyling (440i)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 42000,
          "image": "images/cars/BMW_4Series_1_1786210801057.jpg"
        },
        {
          "name": "2021-2026 G22 Generation (M440i)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 70000,
          "image": "images/cars/BMW_4Series_2_1786210817116.jpg"
        }
      ],
      "5 Series": [
        {
          "name": "2017-2022 G30 Generation (540i)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 48000,
          "image": "images/cars/BMW_5Series_1_1786210826326.jpg"
        }
      ],
      "6 Series": [
        {
          "name": "2017 F12/F13 Restyling (640i)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 30000,
          "maxPrice": 40000,
          "image": "images/cars/BMW_6Series_1_1786210843876.jpg"
        }
      ],
      "7 Series": [
        {
          "name": "2018-2022 G11/G12 Generation (740i)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 62000,
          "image": "images/cars/BMW_7Series_1_1786210849856.jpg"
        },
        {
          "name": "2023-2026 G70 Generation (740i B58)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 85000,
          "maxPrice": 115000,
          "image": "images/cars/BMW_7Series_2_1786210853435.jpg"
        }
      ],
      "8 Series": [
        {
          "name": "2024 G16 Gran Coupe (840i)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 75000,
          "maxPrice": 95000,
          "image": "images/cars/BMW_8Series_1_1786210858158.jpg"
        }
      ],
      "M2": [
        {
          "name": "2020-2021 F87 (M2 CS / Competition - S55)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 55000,
          "maxPrice": 70000,
          "image": "images/cars/BMW_M2_1_1786210864172.png"
        },
        {
          "name": "2023-2026 G87 Generation (S58)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 72000,
          "maxPrice": 90000,
          "image": "images/cars/BMW_M2_2_1786210877033.jpg"
        }
      ],
      "M3": [
        {
          "name": "2018 F80 Restyling (S55)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/BMW_M3_1_1786210882475.png"
        },
        {
          "name": "2021-2025 G80 Generation (S58)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 78000,
          "maxPrice": 105000,
          "image": "images/cars/BMW_M3_2_1786210887123.jpg"
        }
      ],
      "M4": [
        {
          "name": "2018-2020 F82 Restyling (S55)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 50000,
          "maxPrice": 65000,
          "image": "images/cars/BMW_M4_1_1786210891943.jpg"
        },
        {
          "name": "2021-2026 G82 Generation (S58)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 80000,
          "maxPrice": 110000,
          "image": "images/cars/BMW_M4_2_1786210926781.jpg"
        }
      ],
      "X3": [
        {
          "name": "2018-2024 G01 Generation (M40i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 55000,
          "image": "images/cars/BMW_X3_1_1786210936937.jpg"
        },
        {
          "name": "2025-2026 G45 Generation (M50 xDrive)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 68000,
          "maxPrice": 85000,
          "image": "images/cars/BMW_X3_2_1786210944965.jpg"
        }
      ],
      "X4": [
        {
          "name": "2018-2024 G02 Generation (M40i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 40000,
          "maxPrice": 58000,
          "image": "images/cars/BMW_X4_1_1786210949983.png"
        }
      ],
      "X5 / PHEV": [
        {
          "name": "2018-2023 G05 Generation (xDrive40i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 68000,
          "image": "images/cars/BMW_X5PHEV_1_1786210980436.jpg"
        },
        {
          "name": "2024-2026 G05 LCI / xDrive50e PHEV",
          "type": "SUV",
          "fuel": "Plug-in Hybrid",
          "minPrice": 75000,
          "maxPrice": 98000,
          "image": "images/cars/BMW_X5PHEV_2_1786210984401.jpg"
        }
      ],
      "X6": [
        {
          "name": "2017-2019 F16 Generation (xDrive35i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 45000,
          "image": "images/cars/BMW_X6_1_1786210997421.png"
        },
        {
          "name": "2020-2025 G06 Generation (xDrive40i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 62000,
          "maxPrice": 88000,
          "image": "images/cars/BMW_X6_2_1786211004827.jpg"
        }
      ],
      "X7": [
        {
          "name": "2020-2026 G07 Generation (xDrive40i)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 70000,
          "maxPrice": 105000,
          "image": "images/cars/BMW_X7_1_1786211012068.jpg"
        }
      ]
    },
    "Cadillac": {
      "CT5 / CT5-V": [
        {
          "name": "2020-2025 I Generation (3.0 V6 Twin-Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 65000,
          "image": "images/cars/Cadillac_CT5CT5V_1_1786211020947.jpg"
        }
      ],
      "CT6": [
        {
          "name": "2019 I Restyling (3.0 V6 Twin-Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 48000,
          "image": "images/cars/Cadillac_CT6_1_1786211025889.jpg"
        }
      ],
      "Escalade": [
        {
          "name": "2021-2023 V Generation (3.0 Duramax Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 85000,
          "maxPrice": 115000,
          "image": "images/cars/Cadillac_Escalade_1_1786211031076.jpg"
        }
      ]
    },
    "Chevrolet": {
      "Silverado 1500": [
        {
          "name": "2020-2026 IV Generation (3.0 Duramax Diesel)",
          "type": "Pickup",
          "fuel": "Dizel",
          "minPrice": 42000,
          "maxPrice": 65000,
          "image": "images/cars/images (22).jpg"
        }
      ],
      "Suburban": [
        {
          "name": "2024-2025 XII Generation (3.0 Duramax Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 75000,
          "maxPrice": 95000,
          "image": "images/cars/images (23).jpg"
        }
      ],
      "Tahoe": [
        {
          "name": "2023-2025 V Generation (3.0 Duramax Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 70000,
          "maxPrice": 90000,
          "image": "images/cars/images (24).jpg"
        }
      ]
    },
    "Dodge": {
      "Charger": [
        {
          "name": "2026 VIII Generation (3.0 Hurricane Inline-6)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 65000,
          "maxPrice": 85000,
          "image": "images/cars/Dodge_Charger_1_1786211079684.jpg"
        }
      ]
    },
    "Ford": {
      "Bronco": [
        {
          "name": "2024-2025 Raptor (3.0 EcoBoost V6)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 85000,
          "maxPrice": 110000,
          "image": "images/cars/Ford_Bronco_1_1786211094604.webp"
        }
      ],
      "Explorer": [
        {
          "name": "2020-2026 VI Generation (ST / Platinum 3.0 V6 EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 42000,
          "maxPrice": 65000,
          "image": "images/cars/Ford_Explorer_1_1786211098652.jpg"
        }
      ],
      "Ranger": [
        {
          "name": "2024 Raptor (3.0 V6 EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 62000,
          "maxPrice": 78000,
          "image": "images/cars/Ford_Ranger_1_1786211103488.jpg"
        }
      ]
    },
    "GMC": {
      "Sierra 1500": [
        {
          "name": "2021-2026 V Generation (3.0 Duramax Diesel)",
          "type": "Pickup",
          "fuel": "Dizel",
          "minPrice": 45000,
          "maxPrice": 68000,
          "image": "images/cars/GMC_Sierra1500_1_1786211107590.jpg"
        }
      ],
      "Yukon": [
        {
          "name": "2023-2024 V Generation (3.0 Duramax Diesel)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 72000,
          "maxPrice": 92000,
          "image": "images/cars/GMC_Yukon_1_1786211114853.jpg"
        }
      ]
    },
    "Jaguar": {
      "F-Pace": [
        {
          "name": "2017 I Generation (3.0 Supercharged)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 28000,
          "maxPrice": 38000,
          "image": "images/cars/Jaguar_FPace_1_1786211500676.jpg"
        }
      ],
      "XE": [],
      "XF": []
    },
    "Jeep": {
      "Grand Cherokee": [
        {
          "name": "2023-2026 WL Generation (3.0 Hurricane I6)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 72000,
          "image": "images/cars/Jeep_GrandCherokee_1_1786211518468.jpg"
        }
      ],
      "Grand Wagoneer / Wagoneer": [
        {
          "name": "2023-2025 Wagoneer (3.0 Hurricane I6)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 65000,
          "maxPrice": 88000,
          "image": "images/cars/Jeep_GrandWagoneerWagoneer_1_1786211523667.jpg"
        },
        {
          "name": "2024 Grand Wagoneer (3.0 Hurricane High Output)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 85000,
          "maxPrice": 115000,
          "image": "images/cars/Jeep_GrandWagoneerWagoneer_2_1786211530287.jpg"
        }
      ],
      "Wrangler": [
        {
          "name": "2021 JL Generation (3.0 EcoDiesel V6)",
          "type": "SUV",
          "fuel": "Dizel",
          "minPrice": 42000,
          "maxPrice": 55000,
          "image": "images/cars/Jeep_Wrangler_1_1786211537666.jpg"
        }
      ]
    },
    "Land Rover": {
      "Defender": [
        {
          "name": "2020-2024 L663 Generation (P400 3.0 MHEV)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 65000,
          "maxPrice": 90000,
          "image": "images/cars/LandRover_Defender_1_1786211549444.jpg"
        }
      ],
      "Discovery": [
        {
          "name": "2017-2025 L462 Generation (3.0 Supercharged / P360)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 35000,
          "maxPrice": 58000,
          "image": "images/cars/LandRover_Discovery_1_1786211559667.jpg"
        }
      ],
      "Range Rover / Sport": [
        {
          "name": "2017-2021 L405 / L494 (3.0 Supercharged)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 70000,
          "image": "images/cars/LandRover_RangeRoverSport_1_1786211571617.jpg"
        },
        {
          "name": "2022-2026 L460 Generation (P400 3.0 MHEV)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 110000,
          "maxPrice": 160000,
          "image": "images/cars/LandRover_RangeRoverSport_2_1786211575855.jpg"
        }
      ],
      "Range Rover": [
        {
          "name": "2024-2026",
          "fuel": "Benzin",
          "type": "SUV",
          "minPrice": 170000,
          "maxPrice": 250000,
          "image": "images/cars/LandRover_RangeRover_1_1786550269619.png"
        }
      ]
    },
    "Maserati": {
      "Ghibli": [
        {
          "name": "2017-2019 M156 Generation (3.0 V6 Twin-Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/Maserati_Ghibli_1_1786212139012.jpg"
        }
      ],
      "Levante": [
        {
          "name": "2017-2024 M161 Generation (3.0 V6 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 62000,
          "image": "images/cars/Maserati_Levante_1_1786212149534.jpg"
        }
      ],
      "Quattroporte": []
    },
    "Mercedes-Benz": {
      "C-Class / AMG C 43": [
        {
          "name": "2017-2019 W205 (C 400 / AMG C 43 3.0 V6 Biturbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 32000,
          "maxPrice": 45000,
          "image": "images/cars/2019-mercedes-amg-c43-mmp-1544738283.avif"
        }
      ],
      "CLE-Class / AMG CLE 53": [
        {
          "name": "2026 C236 (CLE 450 / AMG CLE 53 3.0 M256)",
          "type": "Coupe",
          "fuel": "Hybrid",
          "minPrice": 75000,
          "maxPrice": 98000,
          "image": "images/cars/2025-mercedes-amg-cle53-coupe-9642-68f628c3cee1d.avif"
        }
      ],
      "CLS-Class": [
        {
          "name": "2019-2022 C257 Generation (CLS 450 3.0 Inline-6)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 48000,
          "maxPrice": 68000,
          "image": "images/cars/images (11).jpg"
        }
      ],
      "E-Class / E 400 / AMG E 43 / AMG E 53": [
        {
          "name": "2018-2020 W213 (E 400 / AMG E 43 3.0 V6 Biturbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 52000,
          "image": "images/cars/2018-mercedes-benz-e-class-amg-e-43-4matic-sedan.jpg"
        },
        {
          "name": "2021-2025 W213 Restyling (E 450 / AMG E 53 Inline-6)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 55000,
          "maxPrice": 78000,
          "image": "images/cars/images (3).jpg"
        },
        {
          "name": "2026 W214 (AMG E 53 HYBRID 3.0 PHEV)",
          "type": "Sedan",
          "fuel": "Plug-in Hybrid",
          "minPrice": 88000,
          "maxPrice": 110000,
          "image": "images/cars/2026_mercedes-benz_e-class_sedan_amg-e-53-hybrid_fq_oem_1_1600.avif"
        }
      ],
      "GLC-Class": [
        {
          "name": "2021 X253 Restyling (AMG GLC 43 3.0 Biturbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/images (12).jpg"
        }
      ],
      "GLE-Class / GLE 450 / AMG GLE 53": [
        {
          "name": "2020-2026 V167 (GLE 450 / AMG GLE 53 Coupe)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 68000,
          "maxPrice": 98000,
          "image": "images/cars/a7f0077d54f63bbce8325f3c0a3bb547.jpg"
        }
      ],
      "GLS-Class / GLS 450": [
        {
          "name": "2019-2025 X167 Generation (GLS 450 3.0 Inline-6)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 70000,
          "maxPrice": 105000,
          "image": "images/cars/2025_mercedes-benz_gls-class_4dr-suv_amg-gls-63_fq_oem_1_1280.avif"
        }
      ],
      "AMG GT 43 / GT 53": [
        {
          "name": "2019-2024 X290 4-Door Coupe (GT 43 / GT 53)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 75000,
          "maxPrice": 115000,
          "image": "images/cars/2019-2023-x290-c190-sedan-mercedes-benz-amg-gt43-gt53-gt63.webp"
        }
      ],
      "S-Class": [
        {
          "name": "2019-2020 W222 Restyling (S 450 3.0 V6 Biturbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 70000,
          "image": "images/cars/images (13).jpg"
        },
        {
          "name": "2021-2023 W223 Generation (S 500 3.0 Inline-6)",
          "type": "Sedan",
          "fuel": "Hybrid",
          "minPrice": 95000,
          "maxPrice": 135000,
          "image": "images/cars/images (14).jpg"
        }
      ],
      "Sprinter": [
        {
          "name": "2018-2020 W907 / 2500 (3.0 V6 OM642 Diesel)",
          "type": "Minivan",
          "fuel": "Dizel",
          "minPrice": 38000,
          "maxPrice": 52000,
          "image": "images/cars/mercedes-benz_sprinter_935498.jpg"
        }
      ]
    },
    "Nissan": {
      "Z": [
        {
          "name": "2024-2025 R34 Generation (3.0 Twin-Turbo VR30DDTT)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 68000,
          "image": "images/cars/Nissan_Z_1_1786212167334.jpg"
        }
      ]
    },
    "Porsche": {
      "911": [
        {
          "name": "2017-2019 991.2 Restyling (Carrera 3.0 Twin-Turbo)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 75000,
          "maxPrice": 98000,
          "image": "images/cars/Porsche_911_1_1786212191474.jpg"
        },
        {
          "name": "2020-2026 992 Generation (Carrera 3.0 Twin-Turbo)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 115000,
          "maxPrice": 160000,
          "image": "images/cars/Porsche_911_2_1786212196458.jpg"
        }
      ],
      "Cayenne / E-Hybrid": [
        {
          "name": "2019-2026 PO536 Generation (3.0 Turbo / E-Hybrid)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 65000,
          "maxPrice": 98000,
          "image": "images/cars/Porsche_CayenneEHybrid_1_1786212200881.jpg"
        }
      ],
      "Macan": [
        {
          "name": "2017-2021 I Restyling (Macan S 3.0 V6 Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 38000,
          "maxPrice": 55000,
          "image": "images/cars/Porsche_Macan_1_1786212205605.jpg"
        }
      ],
      "Panamera": [
        {
          "name": "2017-2020 971 Generation (3.0 V6 Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 72000,
          "image": "images/cars/Porsche_Panamera_1_1786212209770.jpg"
        }
      ]
    },
    "RAM": {
      "1500": [
        {
          "name": "2018-2024 DS/DT Generation (3.0 EcoDiesel V6)",
          "type": "Pickup",
          "fuel": "Dizel",
          "minPrice": 32000,
          "maxPrice": 50000,
          "image": "images/cars/RAM_1500_1_1786212213872.jpg"
        },
        {
          "name": "2025-2026 DT Restyling (3.0 Hurricane I6)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 58000,
          "maxPrice": 82000,
          "image": "images/cars/RAM_1500_2_1786212221789.jpg"
        }
      ]
    },
    "Toyota": {
      "GR Supra": [
        {
          "name": "2020-2022 A90 Generation (BMW B58 3.0 Inline-6)",
          "type": "Coupe",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 62000,
          "image": "images/cars/Toyota_GRSupra_1_1786212226210.jpg"
        }
      ]
    }
  },
  "3.5": {
    "Ford": {
      "Expedition": [
        {
          "name": "2025-2026 V Generation (3.5 V6 EcoBoost)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 95000,
          "maxPrice": 135000,
          "image": "images/cars/Ford_Expedition_1_1786212251552.jpg"
        }
      ],
      "F-150": [
        {
          "name": "2025 XIV Restyling (3.5 V6 EcoBoost)",
          "type": "Pickup",
          "fuel": "Benzin",
          "minPrice": 90000,
          "maxPrice": 115000,
          "image": "images/cars/Ford_F150_1_1786212274484.jpg"
        }
      ],
      "Transit / Transit-150 / 250 / 350 / Passenger Van": []
    },
    "Genesis": {
      "G90": [
        {
          "name": "2026 II Generation (3.5 V6 Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 100000,
          "maxPrice": 125000,
          "image": "images/cars/Genesis_G90_1_1786212299104.jpg"
        }
      ],
      "GV70": [
        {
          "name": "2025-2026 I Restyling (3.5 V6 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 67000,
          "image": "images/cars/Genesis_GV70_1_1786212306052.jpg"
        }
      ],
      "GV80": [
        {
          "name": "2025-2026 I Restyling (3.5 V6 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 105000,
          "maxPrice": 115000,
          "image": "images/cars/Genesis_GV80_1_1786212311890.jpg"
        }
      ]
    },
    "Honda": {
      "Odyssey": [],
      "Passport": [
        {
          "name": "2025-2026 IV Generation (3.5 V6 i-VTEC)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 45000,
          "maxPrice": 62000,
          "image": "images/cars/Honda_Passport_1_1786212321006.jpg"
        }
      ],
      "Pilot": [
        {
          "name": "2025-2026 IV Generation (3.5 V6 DOHC)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 68000,
          "image": "images/cars/Honda_Pilot_1_1786212324020.jpg"
        }
      ],
      "Ridgeline": []
    },
    "Hyundai": {
      "Palisade": [
        {
          "name": "2026 II Generation (3.5 V6 GDi)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 58000,
          "maxPrice": 78000,
          "image": "images/cars/Hyundai_Palisade_1_1786212337966.jpg"
        }
      ]
    },
    "Infiniti": {
      "QX80": [
        {
          "name": "2025-2026 Z63 Generation (3.5 V6 Twin-Turbo VR35DDTT)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 120000,
          "maxPrice": 165000,
          "image": "images/cars/Infiniti_QX80_1_1786212344115.png"
        }
      ]
    },
    "Lexus": {
      "ES": [
        {
          "name": "2025 VII Restyling (ES 350 - 3.5 V6)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 52000,
          "maxPrice": 70000,
          "image": "images/cars/Lexus_ES_1_1786212354350.jpg"
        }
      ],
      "IS": [
        {
          "name": "2025-2026 XE30 Restyling (IS 350 - 3.5 V6)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 48000,
          "maxPrice": 65000,
          "image": "images/cars/Lexus_IS_1_1786212361082.jpg"
        }
      ]
    },
    "Lincoln": {
      "Navigator": [
        {
          "name": "2025 V Generation (3.5 V6 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 125000,
          "maxPrice": 175000,
          "image": "images/cars/Lincoln_Navigator_1_1786212367408.jpg"
        }
      ]
    },
    "Nissan": {
      "Armada": [
        {
          "name": "2025-2026 III Generation (3.5 V6 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 90000,
          "maxPrice": 125000,
          "image": "images/cars/Nissan_Armada_1_1786212373069.jpg"
        }
      ],
      "Pathfinder": []
    }
  },
  "4.0": {
    "Audi": {
      "RS6 / RS6 Avant": [],
      "RS7 / RS 7 Sportback": [
        {
          "name": "2025-2026 C8 Generation (4.0 TFSI V8 Twin-Turbo)",
          "type": "Sedan",
          "fuel": "Benzin",
          "minPrice": 180000,
          "maxPrice": 225000,
          "image": "images/cars/2025-audi-rs7-125-67f68b49cafa4.avif"
        }
      ],
      "RS Q8 / RS Q8 Performance": [],
      "S8": [],
      "SQ7": [
        {
          "name": "2025 II Restyling (4.0 TFSI V8)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 95000,
          "maxPrice": 115000,
          "image": "images/cars/images (26).jpg"
        }
      ],
      "SQ8": [
        {
          "name": "2025 I Restyling (4.0 TFSI V8)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 100000,
          "maxPrice": 140000,
          "image": "images/cars/images (27).jpg"
        }
      ]
    },
    "Lamborghini": {
      "Urus": [
        {
          "name": "2025 Urus S / Performante (4.0 V8 Twin-Turbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 300000,
          "maxPrice": 350000,
          "image": "images/cars/2025-lamborghini-urus-se-01.jpg"
        }
      ]
    },
    "Mercedes-Benz": {
      "G-Class / AMG G 63": [
        {
          "name": "2025-2026 W464 LCI (G 500 V8 / AMG G 63 4.0 V8 Biturbo)",
          "type": "SUV",
          "fuel": "Benzin",
          "minPrice": 175000,
          "maxPrice": 225000,
          "image": "images/cars/666.jpg"
        }
      ],
      "GLE-Class / GLE 580 / AMG GLE 63 S / Coupe": [
        {
          "name": "2025-2026 V167 LCI (GLE 580 / AMG GLE 63 S 4.0 V8 Biturbo)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 145000,
          "maxPrice": 200000,
          "image": "images/cars/003-2025-mercedes-benz-gle-450e-front-view.avif"
        }
      ],
      "GLS-Class / AMG GLS 63": [
        {
          "name": "2025-2026 X167 LCI (GLS 580 / AMG GLS 63 4.0 V8 Biturbo)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 110000,
          "maxPrice": 155000,
          "image": "images/cars/004-2024-mercedes-benz-gls580.avif"
        }
      ],
      "S-Class / S 580 / AMG S 63 E Performance": [],
      "AMG GT / AMG SL 55 / AMG GT 63 4-Door": []
    },
    "Porsche": {
      "911": [],
      "718 Cayman / Boxster / Spyder": [],
      "Cayenne / Coupe / E-Hybrid": [
        {
          "name": "2025-2026 PO536 LCI (Cayenne S V8 / Turbo E-Hybrid 4.0 V8)",
          "type": "SUV",
          "fuel": "Hybrid",
          "minPrice": 110000,
          "maxPrice": 155000,
          "image": "images/cars/50689-large.webp"
        }
      ],
      "Panamera": []
    }
  }
};
