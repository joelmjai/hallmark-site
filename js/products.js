// Generated from the live Hallmark Enterprises site's public catalog API.
// Local images are expected at the paths referenced below (see download-images.ps1).
const CATEGORIES = [
  "Fabric Care",
  "Food & Beverages",
  "Home Care",
  "Personal Care",
  "Ritual Essentials"
];

const BRANDS = [
  {
    "id": "emitol",
    "name": "Emitol",
    "shortDesc": "High power antibacterial cleaning liquids",
    "logo": "images/brands/emitol.jpg"
  },
  {
    "id": "fabritt",
    "name": "Fabritt",
    "shortDesc": "Deeply fragranced fabric conditioner for all-day freshness",
    "logo": "images/brands/fabritt.png"
  },
  {
    "id": "foline",
    "name": "Foline",
    "shortDesc": "Quality fabric care products and cleaning liquids for your home",
    "logo": ""
  },
  {
    "id": "hallmark",
    "name": "Hallmark",
    "shortDesc": "Tissue Boxes – Made from soft, hygienic materials and perfect for everyday use",
    "logo": "images/brands/hallmark.jpg"
  },
  {
    "id": "pdm-maharaja",
    "name": "Maharaja",
    "shortDesc": "Your destination for handpicked premium spices & dry fruits",
    "logo": "images/brands/pdm-maharaja.png"
  },
  {
    "id": "punch",
    "name": "Punch",
    "shortDesc": "High quality detergent liquid for your clothes",
    "logo": "images/brands/punch.png"
  },
  {
    "id": "river-hill-tea",
    "name": "River Hill",
    "shortDesc": "A rich, bold tea that keeps you feeling refreshed all day",
    "logo": "images/brands/river-hill-tea.png"
  },
  {
    "id": "soph",
    "name": "Soph Fair Deal",
    "shortDesc": "Soph offers a range of high-quality fabric care products for effective cleaning & lasting freshness.",
    "logo": "images/brands/soph.png"
  },
  {
    "id": "soph-mediplus-aloevera-handwash-250ml",
    "name": "Soph MediPlus",
    "shortDesc": "Offering Aloevera handwash for effective germ protection with soothing care.",
    "logo": "images/brands/soph-mediplus-aloevera-handwash-250ml.png"
  },
  {
    "id": "vita-rich",
    "name": "Vita Rich",
    "shortDesc": "",
    "logo": "images/brands/vita-rich.png"
  }
];

const PRODUCTS = [
  {
    "id": "500ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner",
    "name": "500ML Combo Pack - Toilet Cleaner, Dishwash Liquid & Floor Cleaner",
    "desc": "A convenient cleaning combo for everyday household needs. This pack includes Toilet Cleaner, Dishwash Liquid, and Floor Cleaner, providing an effective solution for keeping your toilet, kitchen utensils, and floors fresh, clean, and hygienic. Three essential cleaners in one value-packed combo!",
    "images": [
      "images/products/500ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner-1.png"
    ],
    "price": "215",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "190"
      },
      {
        "minQty": 6,
        "price": "185"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "500ml each"
      },
      {
        "name": "Brands",
        "value": "Dishwash Liquid (Soph), Toilet Cleaner (Emitol) & Floor Cleaner (Emitol)"
      }
    ]
  },
  {
    "id": "250ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner",
    "name": "250ML Combo Pack - Toilet Cleaner, Dishwash Liquid & Floor Cleaner",
    "desc": "A convenient cleaning combo for everyday household needs. This pack includes Toilet Cleaner, Dishwash Liquid, and Floor Cleaner, providing an effective solution for keeping your toilet, kitchen utensils, and floors fresh, clean, and hygienic. Three essential cleaners in one value-packed combo!",
    "images": [
      "images/products/250ml-combo-pack-toilet-cleaner-dishwash-liquid-floor-cleaner-1.png"
    ],
    "price": "129",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "115"
      },
      {
        "minQty": 6,
        "price": "113"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "250ml each"
      },
      {
        "name": "Brands",
        "value": "Dishwash Liquid (Soph), Toilet Cleaner (Emitol) & Floor Cleaner (Emitol)"
      }
    ]
  },
  {
    "id": "soph-fair-deal-liquid-detergent-5-ltr",
    "name": "Soph Fair Deal Liquid Detergent 5Kg",
    "desc": "Removes tough stains while keeping clothes soft, fresh, and vibrant. Quick-dissolving formula works in both machine and hand wash, giving you an easy and effective everyday clean at a fair price.",
    "images": [
      "images/products/soph-fair-deal-liquid-detergent-5-ltr-1.png",
      "images/products/soph-fair-deal-liquid-detergent-5-ltr-2.png",
      "images/products/soph-fair-deal-liquid-detergent-5-ltr-3.jpg",
      "images/products/soph-fair-deal-liquid-detergent-5-ltr-4.jpg",
      "images/products/soph-fair-deal-liquid-detergent-5-ltr-5.png"
    ],
    "price": "449",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "365"
      },
      {
        "minQty": 6,
        "price": "360"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Pour 1–2 caps of liquid into the detergent tray or drum",
      "Add clothes and start the wash",
      "For Hand Wash:",
      "Mix ½–1 cap in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Wash gently and rinse well",
      "Tip: Use a little extra for heavily stained clothes."
    ],
    "specifications": [
      {
        "name": "Item",
        "value": "Highly perfumed detergent liquid with active colour guards"
      },
      {
        "name": "Item Net Volume",
        "value": "5Kg"
      },
      {
        "name": "Type",
        "value": "Suitable for both top load and front load machines"
      }
    ]
  },
  {
    "id": "punch-detergent-liquid-5kg",
    "name": "Punch Detergent Liquid 5Kg",
    "desc": "Delivers powerful deep cleaning to remove tough stains while caring for fabrics. Its long-lasting freshness keeps clothes smelling fresh and clean. Suitable for both Top Load and Front Load washing machines",
    "images": [
      "images/products/punch-detergent-liquid-5kg-1.png",
      "images/products/punch-detergent-liquid-5kg-2.png"
    ],
    "price": "399",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "320"
      },
      {
        "minQty": 6,
        "price": "310"
      },
      {
        "minQty": 12,
        "price": "299"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Punch",
    "brandSlug": "punch",
    "howToUse": [
      "For Machine Wash:",
      "Pour 1–2 caps of liquid into the detergent tray or drum",
      "Add clothes and start the wash",
      "For Bucket Wash:",
      "Mix ½–1 cap in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Wash gently and rinse well",
      "Tip: Use a little extra for heavily stained clothes."
    ],
    "specifications": [
      {
        "name": "Item",
        "value": "Highly perfumed detergent liquid with active colour guards"
      },
      {
        "name": "Fragrance",
        "value": "Lavender"
      },
      {
        "name": "Item Net Volume",
        "value": "5Kg"
      },
      {
        "name": "Type",
        "value": "Suitable for both top load and front load machines"
      }
    ]
  },
  {
    "id": "soph-fair-deal-dishwash-liquid-500ml-green",
    "name": "Soph Fair Deal Dishwash Liquid 500ML Green",
    "desc": "SOPH Dishwash Liquid Gel is specially formulated with advanced grease-cutting technology to remove tough oil, sticky food residues, and stains with ease. Infused with a natural lemon scent, this dishwashing gel eliminates odors and leaves your kitchenware smelling fresh after every wash.",
    "images": [
      "images/products/soph-fair-deal-dishwash-liquid-500ml-green-1.png",
      "images/products/soph-fair-deal-dishwash-liquid-500ml-green-2.png",
      "images/products/soph-fair-deal-dishwash-liquid-500ml-green-3.png"
    ],
    "price": "99",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "72"
      },
      {
        "minQty": 6,
        "price": "70"
      },
      {
        "minQty": 12,
        "price": "68"
      },
      {
        "minQty": 24,
        "price": "65"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Add a Few Drops – Pour a small amount of dish wash liquid onto a wet sponge or scrubber.",
      "Create Rich Foam – Gently squeeze or rub the sponge to produce foam.",
      "Scrub Utensils Thoroughly – Clean plates, glasses, cookware, and cutlery to remove grease and food residue.",
      "Rinse with Clean Water – Wash off all foam and residue thoroughly.",
      "Dry and Store – Allow utensils to air dry or wipe with a clean cloth for a sparkling finish.",
      "Quick Tips:",
      "✔ Use only a small quantity for regular cleaning.",
      "✔ For heavily greasy utensils, soak for a few minutes before scrubbing.",
      "✔ Suitable for stainless steel, glass, ceramic, and non-stick cookware."
    ],
    "specifications": [
      {
        "name": "Item Net Weight",
        "value": "500ML"
      },
      {
        "name": "Item Type",
        "value": "High power liquid dishwash"
      },
      {
        "name": "Scent",
        "value": "Lemon"
      }
    ]
  },
  {
    "id": "soph-fair-deal-dishwash-liquid-250ml-green",
    "name": "Soph Fair Deal Dishwash Liquid 250ML Green",
    "desc": "SOPH Dishwash Liquid Gel is specially formulated with advanced grease-cutting technology to remove tough oil, sticky food residues, and stains with ease. Infused with a natural lemon scent, this dishwashing gel eliminates odors and leaves your kitchenware smelling fresh after every wash.",
    "images": [
      "images/products/soph-fair-deal-dishwash-liquid-250ml-green-1.png",
      "images/products/soph-fair-deal-dishwash-liquid-250ml-green-2.png",
      "images/products/soph-fair-deal-dishwash-liquid-250ml-green-3.png"
    ],
    "price": "50",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "39"
      },
      {
        "minQty": 6,
        "price": "38"
      },
      {
        "minQty": 12,
        "price": "36"
      },
      {
        "minQty": 24,
        "price": "34"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Add a Few Drops – Pour a small amount of dish wash liquid onto a wet sponge or scrubber.",
      "Create Rich Foam – Gently squeeze or rub the sponge to produce foam.",
      "Scrub Utensils Thoroughly – Clean plates, glasses, cookware, and cutlery to remove grease and food residue.",
      "Rinse with Clean Water – Wash off all foam and residue thoroughly.",
      "Dry and Store – Allow utensils to air dry or wipe with a clean cloth for a sparkling finish.",
      "Quick Tips:",
      "✔ Use only a small quantity for regular cleaning.",
      "✔ For heavily greasy utensils, soak for a few minutes before scrubbing.",
      "✔ Suitable for stainless steel, glass, ceramic, and non-stick cookware."
    ],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "250ML"
      },
      {
        "name": "Item Type",
        "value": "High power liquid dishwash"
      },
      {
        "name": "Scent",
        "value": "Lemon"
      }
    ]
  },
  {
    "id": "emitol-toilet-cleaner-1-ltr",
    "name": "Emitol Toilet Cleaner 1 Ltr",
    "desc": "Experience powerful hygiene with Emitol Blue Drops Toilet Cleaner, specially formulated with 10X Ultra Clean technology to remove stubborn stains, kill 99.9% of germs, and leave your toilet sparkling clean with every use.",
    "images": [
      "images/products/emitol-toilet-cleaner-1-ltr-1.png",
      "images/products/emitol-toilet-cleaner-1-ltr-2.jpg",
      "images/products/emitol-toilet-cleaner-1-ltr-3.jpg"
    ],
    "price": "169",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "125"
      },
      {
        "minQty": 6,
        "price": "120"
      },
      {
        "minQty": 12,
        "price": "115"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [
      "* Flush the toilet before cleaning",
      "* Apply the cleaner under the rim and around the bowl",
      "* Let it sit for 10–15 minutes",
      "* Scrub gently with a toilet brush",
      "* Flush thoroughly",
      "* Use regularly to keep your toilet clean, fresh, and germ-free."
    ],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "1 Ltr Jumbo Pack"
      },
      {
        "name": "Antibacterial",
        "value": "Kills 99.9% of germs and bacteria for superior hygiene."
      },
      {
        "name": "Extra Thick Formula",
        "value": "100% Safe on Ceramic Toilet Bowls"
      }
    ]
  },
  {
    "id": "emitol-toilet-cleaner-500ml-single-pc",
    "name": "Emitol Toilet Cleaner 500ML",
    "desc": "Emitol Toilet Cleaner delivers powerful cleaning that removes tough stains, kills germs, and eliminates odors. Its fast-acting formula leaves your toilet sparkling clean and fresh after every use.",
    "images": [
      "images/products/emitol-toilet-cleaner-500ml-single-pc-1.png",
      "images/products/emitol-toilet-cleaner-500ml-single-pc-2.jpg",
      "images/products/emitol-toilet-cleaner-500ml-single-pc-3.jpg"
    ],
    "price": "70",
    "wasPrice": "95",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "72"
      },
      {
        "minQty": 6,
        "price": "70"
      },
      {
        "minQty": 12,
        "price": "65"
      },
      {
        "minQty": 24,
        "price": "60"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [
      "* Flush the toilet before cleaning",
      "* Apply the cleaner under the rim and around the bowl",
      "* Let it sit for 10–15 minutes",
      "* Scrub gently with a toilet brush",
      "* Flush thoroughly",
      "* Use regularly to keep your toilet clean, fresh, and germ-free."
    ],
    "specifications": [
      {
        "name": "Net Volume",
        "value": "500ML"
      }
    ]
  },
  {
    "id": "emitol-toilet-cleaner-250ml",
    "name": "Emitol Toilet Cleaner 250ML",
    "desc": "Emitol Toilet Cleaner delivers powerful cleaning that removes tough stains, kills germs, and eliminates odors. Its fast-acting formula leaves your toilet sparkling clean and fresh after every use.",
    "images": [
      "images/products/emitol-toilet-cleaner-250ml-1.png",
      "images/products/emitol-toilet-cleaner-250ml-2.jpg",
      "images/products/emitol-toilet-cleaner-250ml-3.jpg"
    ],
    "price": "49",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "39"
      },
      {
        "minQty": 6,
        "price": "38"
      },
      {
        "minQty": 12,
        "price": "35"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [
      "* Flush the toilet before cleaning",
      "* Apply the cleaner under the rim and around the bowl",
      "* Let it sit for 10–15 minutes",
      "* Scrub gently with a toilet brush",
      "* Flush thoroughly",
      "* Use regularly to keep your toilet clean, fresh, and germ-free."
    ],
    "specifications": []
  },
  {
    "id": "soph-fair-deal-detergent-liquid-1-ltr",
    "name": "Soph Fair Deal Detergent Liquid 1 Ltr",
    "desc": "Removes tough stains while keeping clothes soft, fresh, and vibrant. Quick-dissolving formula works in both machine and hand wash, giving you an easy and effective everyday clean at a fair price.",
    "images": [
      "images/products/soph-fair-deal-detergent-liquid-1-ltr-1.png",
      "images/products/soph-fair-deal-detergent-liquid-1-ltr-2.png"
    ],
    "price": "120",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "95"
      },
      {
        "minQty": 6,
        "price": "93"
      },
      {
        "minQty": 12,
        "price": "90"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Pour 1–2 caps of liquid into the detergent tray or drum",
      "Add clothes and start the wash",
      "For Hand Wash:",
      "Mix ½–1 cap in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Wash gently and rinse well",
      "Tip: Use a little extra for heavily stained clothes."
    ],
    "specifications": [
      {
        "name": "Item Net Volume",
        "value": "1 Ltr"
      },
      {
        "name": "Scent",
        "value": "Floral Fresh"
      },
      {
        "name": "Item Type",
        "value": "Thick high power detergent liquid"
      }
    ]
  },
  {
    "id": "soph-fair-deal-detergent-liquid-500ml",
    "name": "Soph Fair Deal Detergent Liquid 500ML",
    "desc": "Removes tough stains while keeping clothes soft, fresh, and vibrant. Quick-dissolving formula works in both machine and hand wash, giving you an easy and effective everyday clean at a fair price.",
    "images": [
      "images/products/soph-fair-deal-detergent-liquid-500ml-1.png",
      "images/products/soph-fair-deal-detergent-liquid-500ml-2.png"
    ],
    "price": "69",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "57"
      },
      {
        "minQty": 6,
        "price": "56"
      },
      {
        "minQty": 12,
        "price": "55"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Pour 1–2 caps of liquid into the detergent tray or drum",
      "Add clothes and start the wash",
      "For Hand Wash:",
      "Mix ½–1 cap in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Wash gently and rinse well",
      "Tip: Use a little extra for heavily stained clothes."
    ],
    "specifications": [
      {
        "name": "Item Net Volume",
        "value": "500ML"
      },
      {
        "name": "Item Type",
        "value": "Thick high power detergent liquid"
      },
      {
        "name": "Scent",
        "value": "Floral Fresh"
      }
    ]
  },
  {
    "id": "soph-fair-deal-liquid-detergent-1-ltr-pouch",
    "name": "Soph Fair Deal Liquid Detergent 1 Ltr Pouch",
    "desc": "Delivers powerful cleaning with an extra-thick formula that removes tough stains while protecting your clothes. Suitable for both Front Load and Top Load automatic washing machines, it is enriched with Active Colour Guards to help keep fabrics looking vibrant. Its highly perfumed formula leaves your laundry fresh, soft, and clean after every wash.",
    "images": [
      "images/products/soph-fair-deal-liquid-detergent-1-ltr-pouch-1.png",
      "images/products/soph-fair-deal-liquid-detergent-1-ltr-pouch-2.png"
    ],
    "price": "99",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "75"
      },
      {
        "minQty": 6,
        "price": "72"
      },
      {
        "minQty": 12,
        "price": "69"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Pour 1 cap (30–40 ml) of Soph Fair Deal Detergent Liquid into the detergent drawer or directly into the washing machine drum.",
      "Add your clothes and select the desired wash program.",
      "For heavily soiled clothes, use 1½–2 caps (45–60 ml).",
      "Suitable for both Front Load and Top Load automatic washing machines and also for bucket wash.",
      "Tip: Do not pour the detergent directly onto dry clothes. Store in a cool, dry place and keep out of reach of children."
    ],
    "specifications": [
      {
        "name": "Net Volume",
        "value": "1 Ltr"
      },
      {
        "name": "Type",
        "value": "Highly perfumed and thick detergent liquid"
      },
      {
        "name": "Scent",
        "value": "Floral"
      },
      {
        "name": "Liquid Colour",
        "value": "Blue"
      }
    ]
  },
  {
    "id": "vita-rich-rice-flakes-avil-400g",
    "name": "Vita Rich Rice Flakes (Avil) 400g",
    "desc": "Crispy, wholesome rice flakes for quick meals and healthy snacking. \r\nNaturally light and nutritious – perfect for breakfast, snacks, and traditional treats.",
    "images": [
      "images/products/vita-rich-rice-flakes-avil-400g-1.png"
    ],
    "price": "49",
    "wasPrice": "45",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "34"
      },
      {
        "minQty": 6,
        "price": "33"
      },
      {
        "minQty": 12,
        "price": "32"
      }
    ],
    "category": "Food & Beverages",
    "categorySlug": "food-beverages",
    "brand": "Vita Rich",
    "brandSlug": "vita-rich",
    "howToUse": [
      "* Soaked & Sweet: Soak in milk or water, add jaggery or sugar for a soft, sweet breakfast.",
      "* Poha (Savory): Lightly sauté with mustard seeds, onions, and curry leaves for a classic savory dish.",
      "* Upma Style: Cook with vegetables and spices for a nutritious, hearty meal.",
      "* Chivda Snack: Roast with nuts, spices, and a pinch of salt for a crunchy snack."
    ],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "600 Grams"
      },
      {
        "name": "Item Type",
        "value": "Matta Rice Flakes"
      }
    ]
  },
  {
    "id": "river-hill-premium-dust-tea-100g",
    "name": "River Hill Premium Dust Tea 100g",
    "desc": "Experience the rich aroma and bold flavor of River Hill Dust Tea, crafted for tea lovers who enjoy a strong and refreshing cup. Its fine dust blend brews quickly, delivering deep color, full-bodied taste, and lasting freshness in every sip. Perfect for your daily chai, River Hill Dust Tea brings energy, warmth, and satisfaction to every moment.",
    "images": [
      "images/products/river-hill-premium-dust-tea-100g-1.png",
      "images/products/river-hill-premium-dust-tea-100g-2.png"
    ],
    "price": "31",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "25"
      },
      {
        "minQty": 6,
        "price": "24"
      },
      {
        "minQty": 12,
        "price": "23"
      }
    ],
    "category": "Food & Beverages",
    "categorySlug": "food-beverages",
    "brand": "River Hill",
    "brandSlug": "river-hill-tea",
    "howToUse": [
      "Boil water in a pan.",
      "Add 1 teaspoon of River Hill Dust Tea.",
      "Let it boil for 2–3 minutes for a strong flavor.",
      "Add milk and sugar as desired.",
      "Strain and serve hot.",
      "Tip: Boil longer for a stronger, richer taste."
    ],
    "specifications": [
      {
        "name": "Type",
        "value": "Assam CTC Dust Tea"
      },
      {
        "name": "Net Weight",
        "value": "100g"
      },
      {
        "name": "Tips",
        "value": "Boil 2 minutes extra for super strong tea."
      }
    ]
  },
  {
    "id": "fabritt-fabric-conditioner-60ml-highly-perfumed",
    "name": "Fabritt Fabric Conditioner 60ML Highly Perfumed",
    "desc": "Detergent cleans clothes, but Fabritt Fabric Conditioner keeps them soft, smooth, and fresh with a long-lasting fragrance for up to 14 days.",
    "images": [
      "images/products/fabritt-fabric-conditioner-60ml-highly-perfumed-1.png",
      "images/products/fabritt-fabric-conditioner-60ml-highly-perfumed-2.png"
    ],
    "price": "10",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "8.5"
      },
      {
        "minQty": 12,
        "price": "8"
      },
      {
        "minQty": 24,
        "price": "7.5"
      },
      {
        "minQty": 36,
        "price": "7.25"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Fabritt",
    "brandSlug": "fabritt",
    "howToUse": [
      "Wash clothes with detergent as usual, preferably by Soph Fair Deal brand detergent liquid or powder.",
      "In the final rinse, add ½ cap or 40ml of Fabritt to a bucket of water (max. 5-7 ltr).",
      "Soak up to 10 clothes (white or coloured) for 5 - 7 minutes.",
      "Remove the clothes and dry naturally.",
      "DO NOT RINSE AGAIN AFTER USING FABRITT.",
      "Enjoy long-lasting freshness, softness, and easy-to-wear comfort with every wash."
    ],
    "specifications": [
      {
        "value": "60ml per sachet",
        "name": "Net Volume"
      },
      {
        "value": "Do not apply directly onto clothes. Keep out of reach of children. Avoid contact with eyes. In case of eye contact, rinse thoroughly with clean water.",
        "name": "Safety Description"
      },
      {
        "value": "Highly perfumed fabric softening liquid",
        "name": "Item"
      }
    ]
  },
  {
    "id": "soph-fair-deal-washing-powder-rs-10-pack",
    "name": "Soph Fair Deal Washing Powder Rs. 10/- Pack",
    "desc": "Powerful cleaning that removes tough dirt and odors while keeping fabrics fresh, soft, and long-lasting. With a pleasant fragrance and easy use for both hand and machine wash, it’s the perfect everyday solution at a fair price.",
    "images": [
      "images/products/soph-fair-deal-washing-powder-rs-10-pack-1.png",
      "images/products/soph-fair-deal-washing-powder-rs-10-pack-2.png"
    ],
    "price": "10",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "8"
      },
      {
        "minQty": 11,
        "price": "7.5"
      },
      {
        "minQty": 24,
        "price": "7"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Add 1–2 scoops of Soph Fair Deal Washing Powder (depending on load size) into the detergent tray or drum.",
      "Put in clothes to the size of the machine and start the wash cycle.",
      "For Hand Wash:",
      "Dissolve 1 scoop in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Gently scrub and rinse thoroughly",
      "Tip: Use a little extra powder for heavily soiled clothes."
    ],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "120g"
      },
      {
        "name": "Highly Perfumed",
        "value": "Floral Fragrance"
      },
      {
        "name": "Kills",
        "value": "99.9% Germs"
      },
      {
        "name": "100% Safe for Clothes",
        "value": "With Active Colour Guards"
      }
    ]
  },
  {
    "id": "soph-mediplus-lavender-handwash-250ml-combo-pack",
    "name": "Soph MediPlus Lavender Handwash 250ML Combo Pack",
    "desc": "2 pcs combo pack now only Rs. 99/- Soph MediPlus Lavender Handwash offers effective germ protection with the soothing care of aloe vera. Its gentle formula cleans deeply while keeping hands soft, fresh, and hydrated—perfect for everyday use.",
    "images": [
      "images/products/soph-mediplus-lavender-handwash-250ml-combo-pack-1.png",
      "images/products/soph-mediplus-lavender-handwash-250ml-combo-pack-2.png"
    ],
    "price": "56",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "45"
      },
      {
        "minQty": 6,
        "price": "43"
      },
      {
        "minQty": 12,
        "price": "40"
      }
    ],
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "brand": "Soph MediPlus",
    "brandSlug": "soph-mediplus-aloevera-handwash-250ml",
    "howToUse": [
      "Wet your hands with clean water",
      "Take a small amount of handwash",
      "Rub hands together to create lather (20 seconds)",
      "Clean between fingers, nails, and back of hands",
      "Rinse thoroughly and dry",
      "Use regularly for clean, soft, and protected hands."
    ],
    "specifications": [
      {
        "name": "Net Weight",
        "value": "250ml+250ml = 500ml"
      },
      {
        "name": "Item",
        "value": "Perfumed anti bacterial handwash with active Aloe Vera essence"
      },
      {
        "name": "Scent",
        "value": "Lavender"
      },
      {
        "name": "Skin Type",
        "value": "Suitable for all skin types"
      }
    ]
  },
  {
    "id": "soph-fair-deal-liquid-detergent-70ml",
    "name": "Soph Fair Deal Liquid Detergent 70ML",
    "desc": "Delivers powerful cleaning with an extra-thick formula that removes tough stains while protecting your clothes. Suitable for both Front Load and Top Load automatic washing machines, it is enriched with Active Colour Guards to help keep fabrics looking vibrant. Its highly perfumed formula leaves your laundry fresh, soft, and clean after every wash.",
    "images": [
      "images/products/soph-fair-deal-liquid-detergent-70ml-1.png"
    ],
    "price": "10",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "8.5"
      },
      {
        "minQty": 12,
        "price": "8"
      },
      {
        "minQty": 24,
        "price": "7.5"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Pour the Soph Fair Deal Detergent Liquid into the detergent drawer or directly into the washing machine drum.",
      "Add your clothes and select the desired wash program.",
      "Suitable for both Front Load and Top Load automatic washing machines and also for bucket wash.",
      "Tip: Do not pour the detergent directly onto dry clothes. Store in a cool, dry place and keep out of reach of children."
    ],
    "specifications": [
      {
        "name": "Item Net Volume",
        "value": "70ml"
      },
      {
        "name": "Type",
        "value": "Highly perfumed and thick liquid detergent"
      },
      {
        "name": "Scent",
        "value": "Floral"
      }
    ]
  },
  {
    "id": "emitol-floor-cleaner-lavender-250ml",
    "name": "Emitol Antibacterial Floor Cleaner 250ML (Lavender, Jasmine, Tulsi & Lemon)",
    "desc": "Kills 99.9% of disease-causing germs and bacteria while effortlessly removing tough stains. Its long-lasting, refreshing fragrance keeps your home smelling fresh, making every corner feel cleaner and more inviting. Safe and effective for all floor and surface types, including kitchens, bathrooms, and living spaces. Available in LAVENDER, JASMINE, TULSI AND LEMON fragrances.",
    "images": [
      "images/products/emitol-floor-cleaner-lavender-250ml-1.png",
      "images/products/emitol-floor-cleaner-lavender-250ml-2.png"
    ],
    "price": "49",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "38"
      },
      {
        "minQty": 6,
        "price": "37"
      },
      {
        "minQty": 12,
        "price": "35"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [
      "Dilute 1–2 capfuls of Emitol Floor Cleaner in half a bucket (4–5 litres) of water.",
      "Mop the floor or wipe the surface with the solution.",
      "No rinsing required for regular cleaning.",
      "For tough stains, apply a small amount directly to the affected area, scrub gently, and wipe clean.",
      "Suitable for: Tiles, marble, granite, ceramic, vinyl, and other washable floor surfaces, including kitchens and bathrooms."
    ],
    "specifications": [
      {
        "name": "Item Volume",
        "value": "250ML"
      },
      {
        "name": "Fragrances",
        "value": "Lavender, Jasmine, Tulsi & Lemon"
      },
      {
        "name": "Antibacterial",
        "value": "Kills 99.9% of germs & bacteria"
      }
    ]
  },
  {
    "id": "emitol-floor-cleaner-lavender-500ml",
    "name": "Emitol Antibacterial Floor Cleaner 500ML (Lavender, Jasmine, Tulsi & Lemon)",
    "desc": "Kills 99.9% of disease-causing germs and bacteria while effortlessly removing tough stains. Its long-lasting, refreshing fragrance keeps your home smelling fresh, making every corner feel cleaner and more inviting. Safe and effective for all floor and surface types, including kitchens, bathrooms, and living spaces. Available in LAVENDER, JASMINE, TULSI & LEMON fragrances.",
    "images": [
      "images/products/emitol-floor-cleaner-lavender-500ml-1.png",
      "images/products/emitol-floor-cleaner-lavender-500ml-2.png"
    ],
    "price": "89",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "60"
      },
      {
        "minQty": 6,
        "price": "58"
      },
      {
        "minQty": 12,
        "price": "55"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Emitol",
    "brandSlug": "emitol",
    "howToUse": [
      "Dilute 1–2 capfuls of Emitol Floor Cleaner in half a bucket (4–5 litres) of water.",
      "Mop the floor or wipe the surface with the solution.",
      "No rinsing required for regular cleaning.",
      "For tough stains, apply a small amount directly to the affected area, scrub gently, and wipe clean.",
      "Suitable for: Tiles, marble, granite, ceramic, vinyl, and other washable floor surfaces, including kitchens and bathrooms."
    ],
    "specifications": [
      {
        "name": "Net Volume",
        "value": "500ml"
      },
      {
        "name": "Fragrance",
        "value": "Lavender, Jasmine, Tulsi & Lemon"
      },
      {
        "name": "Antibacterial",
        "value": "Kills 99.9% of germs & bacteria"
      }
    ]
  },
  {
    "id": "foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs",
    "name": "Foline Multi-purpose Cleaning Liquid 1 Ltr Each",
    "desc": "Ultimate all-in-one solution for a spotless and fragrant home. Specially formulated for areas like bathrooms and living spaces, this multipurpose cleaner combines powerful anti-bacterial protection with a luxurious, long-lasting scent. Available in LAVENDER, ROSE, TULSI, JASMINE, LEMON GRASS, SANDAL AND LEMON fragrances.",
    "images": [
      "images/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs-1.png",
      "images/products/foline-multi-purpose-cleaning-liquid-1-ltr-each-assorted-set-of-4-pcs-2.png"
    ],
    "price": "69",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "40"
      },
      {
        "minQty": 6,
        "price": "38"
      },
      {
        "minQty": 12,
        "price": "36"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Foline",
    "brandSlug": "foline",
    "howToUse": [
      "For Regular Floor Cleaning: Mix 1 capful of Foline in half a bucket (approx. 4 liters) of water. Mop the surface gently.",
      "For Tough Bathroom Stains: Apply the liquid directly to the stained area, leave for 5 minutes, scrub lightly, and rinse with water.",
      "For Best Results: Use daily to maintain a germ-free home and a continuous fresh atmosphere."
    ],
    "specifications": [
      {
        "name": "Net Volume",
        "value": "1 Ltr each"
      },
      {
        "name": "Fragrance",
        "value": "Lavender, Rose, Sandal, Tulsi, Jasmine, Lemon Grass and Lemon frgrances"
      },
      {
        "name": "Type",
        "value": "Highly perfumed anti bacterial cleaning liquid"
      }
    ]
  },
  {
    "id": "soph-mediplus-aloevera-handwash-250ml",
    "name": "Soph MediPlus Aloevera Handwash 250ML Combo Pack",
    "desc": "2 pcs combo pack now only Rs. 99/-\r\n\r\nSoph MediPlus Aloevera Handwash offers effective germ protection with the soothing care of aloe vera. Its gentle formula cleans deeply while keeping hands soft, fresh, and hydrated—perfect for everyday use.",
    "images": [
      "images/products/soph-mediplus-aloevera-handwash-250ml-1.png",
      "images/products/soph-mediplus-aloevera-handwash-250ml-2.png"
    ],
    "price": "99",
    "wasPrice": "112",
    "b2bPricingTiers": [
      {
        "minQty": 5,
        "price": "46"
      },
      {
        "minQty": 6,
        "price": "44"
      },
      {
        "minQty": 12,
        "price": "42"
      }
    ],
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "brand": "Soph MediPlus",
    "brandSlug": "soph-mediplus-aloevera-handwash-250ml",
    "howToUse": [
      "* Wet your hands with clean water",
      "* Take a small amount of handwash",
      "* Rub hands together to create lather (20 seconds)",
      "* Clean between fingers, nails, and back of hands",
      "* Rinse thoroughly and dry",
      "* Use regularly for clean, soft, and protected hands."
    ],
    "specifications": []
  },
  {
    "id": "soph-fair-deal-dishwash-liquid-500ml",
    "name": "Soph Fair Deal Dishwash Liquid 500ML",
    "desc": "SOPH Dishwash Liquid Gel is specially formulated with advanced grease-cutting technology to remove tough oil, sticky food residues, and stains with ease. Infused with a natural lemon scent, this dishwashing gel eliminates odors and leaves your kitchenware smelling fresh after every wash.",
    "images": [
      "images/products/soph-fair-deal-dishwash-liquid-500ml-1.png",
      "images/products/soph-fair-deal-dishwash-liquid-500ml-2.png",
      "images/products/soph-fair-deal-dishwash-liquid-500ml-3.png"
    ],
    "price": "99",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "72"
      },
      {
        "minQty": 6,
        "price": "70"
      },
      {
        "minQty": 12,
        "price": "65"
      },
      {
        "minQty": 24,
        "price": "60"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Add a Few Drops – Pour a small amount of dish wash liquid onto a wet sponge or scrubber.",
      "Create Rich Foam – Gently squeeze or rub the sponge to produce foam.",
      "Scrub Utensils Thoroughly – Clean plates, glasses, cookware, and cutlery to remove grease and food residue.",
      "Rinse with Clean Water – Wash off all foam and residue thoroughly.",
      "Dry and Store – Allow utensils to air dry or wipe with a clean cloth for a sparkling finish.",
      "Quick Tips:",
      "✔ Use only a small quantity for regular cleaning.",
      "✔ For heavily greasy utensils, soak for a few minutes before scrubbing.",
      "✔ Suitable for stainless steel, glass, ceramic, and non-stick cookware."
    ],
    "specifications": [
      {
        "name": "Item Net Weight",
        "value": "500ML"
      },
      {
        "name": "Item Type",
        "value": "High power liquid dishwash"
      },
      {
        "name": "Scent",
        "value": "Lemon "
      }
    ]
  },
  {
    "id": "soph-fair-deal-dishwash-liquid-250ml",
    "name": "Soph Fair Deal Dishwash Liquid 250ML",
    "desc": "SOPH Dishwash Liquid Gel is specially formulated with advanced grease-cutting technology to remove tough oil, sticky food residues, and stains with ease. Infused with a natural lemon scent, this dishwashing gel eliminates odors and leaves your kitchenware smelling fresh after every wash.",
    "images": [
      "images/products/soph-fair-deal-dishwash-liquid-250ml-1.png",
      "images/products/soph-fair-deal-dishwash-liquid-250ml-2.png",
      "images/products/soph-fair-deal-dishwash-liquid-250ml-3.png"
    ],
    "price": "50",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "39"
      },
      {
        "minQty": 6,
        "price": "37"
      },
      {
        "minQty": 12,
        "price": "35"
      },
      {
        "minQty": 24,
        "price": "33"
      }
    ],
    "category": "Home Care",
    "categorySlug": "home-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "Add a Few Drops – Pour a small amount of dish wash liquid onto a wet sponge or scrubber.",
      "Create Rich Foam – Gently squeeze or rub the sponge to produce foam.",
      "Scrub Utensils Thoroughly – Clean plates, glasses, cookware, and cutlery to remove grease and food residue.",
      "Rinse with Clean Water – Wash off all foam and residue thoroughly.",
      "Dry and Store – Allow utensils to air dry or wipe with a clean cloth for a sparkling finish.",
      "Quick Tips:",
      "✔ Use only a small quantity for regular cleaning.",
      "✔ For heavily greasy utensils, soak for a few minutes before scrubbing.",
      "✔ Suitable for stainless steel, glass, ceramic, and non-stick cookware."
    ],
    "specifications": [
      {
        "name": "Item Net Weight",
        "value": "250ML"
      },
      {
        "name": "Item Type",
        "value": "High power liquid dishwash"
      },
      {
        "name": "Scent",
        "value": "Lemon"
      }
    ]
  },
  {
    "id": "soph-fair-deal-washing-powder-1-1-kg-combo-pack",
    "name": "Soph Fair Deal Washing Powder 1Kg Pack",
    "desc": "Powerful cleaning that removes tough dirt and odors while keeping fabrics fresh, soft, and long-lasting. With a pleasant fragrance and easy use for both hand and machine wash, it’s the perfect everyday solution at a fair price.",
    "images": [
      "images/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack-1.png",
      "images/products/soph-fair-deal-washing-powder-1-1-kg-combo-pack-2.png"
    ],
    "price": "80",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "60"
      },
      {
        "minQty": 6,
        "price": "55"
      },
      {
        "minQty": 12,
        "price": "50"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Add 1–2 scoops of Soph Fair Deal Washing Powder (depending on load size) into the detergent tray or drum.",
      "Put in clothes to the size of the machine and start the wash cycle.",
      "For Hand Wash:",
      "Dissolve 1 scoop in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Gently scrub and rinse thoroughly",
      "Tip: Use a little extra powder for heavily soiled clothes."
    ],
    "specifications": []
  },
  {
    "id": "hallmark-premium-tissue-box-2-ply-100-pulls",
    "name": "Hallmark Premium Tissue Box 2-Ply 100 Pulls",
    "desc": "Extra-soft 2-ply tissues designed for everyday comfort and hygiene. Highly absorbent and gentle on the skin, they're perfect for home, office, car, and travel. Each box contains 100 pulls for convenient daily use.",
    "images": [
      "images/products/hallmark-premium-tissue-box-2-ply-100-pulls-1.png",
      "images/products/hallmark-premium-tissue-box-2-ply-100-pulls-2.png"
    ],
    "price": "70",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "48"
      },
      {
        "minQty": 6,
        "price": "47"
      },
      {
        "minQty": 12,
        "price": "45"
      }
    ],
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "brand": "Hallmark",
    "brandSlug": "hallmark",
    "howToUse": [
      "Pull out one tissue from the box.",
      "Use as needed for wiping your face, hands, or cleaning small spills.",
      "Dispose of the used tissue in a dustbin.",
      "Keep the box in a clean, dry place.",
      "Note: Do not flush tissues down the toilet."
    ],
    "specifications": [
      {
        "name": "Item",
        "value": "Premium quality tissue"
      },
      {
        "name": "Item Type ",
        "value": "2 Ply"
      },
      {
        "name": "No of pulls",
        "value": "100 pulls"
      }
    ]
  },
  {
    "id": "foline-detergent-powder-500g",
    "name": "Foline Detergent Powder 500g",
    "desc": "Delivers powerful cleaning with deep stain removal for bright, fresh, and spotless clothes. Its advanced Power Wash formula helps remove tough dirt while keeping fabrics clean and refreshed after every wash.",
    "images": [
      "images/products/foline-detergent-powder-500g-1.png"
    ],
    "price": "50",
    "wasPrice": "",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "37"
      },
      {
        "minQty": 6,
        "price": "35"
      },
      {
        "minQty": 12,
        "price": "32"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Foline",
    "brandSlug": "foline",
    "howToUse": [
      "Sort clothes by color and fabric type.",
      "Add the required amount of Foline Detergent Powder:",
      "Bucket Wash: 1–2 scoops in water",
      "Machine Wash: 2–3 scoops depending on load size",
      "Soak clothes for 10–15 minutes for tough stains.",
      "Wash and rinse thoroughly with clean water.",
      "Dry clothes under sunlight or in a well-ventilated area.",
      "For Best Results:",
      "Use warm water for heavily stained clothes and avoid pouring detergent directly onto fabrics."
    ],
    "specifications": [
      {
        "name": "Item Weight",
        "value": "500g"
      },
      {
        "name": "Item Type",
        "value": "Highly perfumed detergent powder"
      }
    ]
  },
  {
    "id": "soph-fair-deal-detergent-liquid-3-ltr",
    "name": "Soph Fair Deal Detergent Liquid 3 Ltr",
    "desc": "Removes tough stains while keeping clothes soft, fresh, and vibrant. Quick-dissolving formula works in both machine and hand wash, giving you an easy and effective everyday clean at a fair price.",
    "images": [
      "images/products/soph-fair-deal-detergent-liquid-3-ltr-1.png"
    ],
    "price": "279",
    "wasPrice": "299",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "246"
      },
      {
        "minQty": 6,
        "price": "241"
      },
      {
        "minQty": 12,
        "price": "237"
      }
    ],
    "category": "Fabric Care",
    "categorySlug": "fabric-care",
    "brand": "Soph Fair Deal",
    "brandSlug": "soph",
    "howToUse": [
      "For Machine Wash:",
      "Pour 1–2 caps of liquid into the detergent tray or drum",
      "Add clothes and start the wash",
      "For Hand Wash:",
      "Mix ½–1 cap in a bucket of water",
      "Soak clothes for 10–15 minutes",
      "Wash gently and rinse well",
      "Tip: Use a little extra for heavily stained clothes."
    ],
    "specifications": []
  },
  {
    "id": "river-hill-premium-dust-tea-250g",
    "name": "River Hill Premium Dust Tea 250g",
    "desc": "Experience the rich aroma and bold flavor of River Hill Dust Tea, crafted for tea lovers who enjoy a strong and refreshing cup. Its fine dust blend brews quickly, delivering deep color, full-bodied taste, and lasting freshness in every sip.\r\n\r\nPerfect for your daily chai, River Hill Dust Tea brings energy, warmth, and satisfaction to every moment.",
    "images": [
      "images/products/river-hill-premium-dust-tea-250g-1.png",
      "images/products/river-hill-premium-dust-tea-250g-2.png"
    ],
    "price": "62",
    "wasPrice": "75",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "64"
      },
      {
        "minQty": 6,
        "price": "62"
      },
      {
        "minQty": 12,
        "price": "60"
      }
    ],
    "category": "Food & Beverages",
    "categorySlug": "food-beverages",
    "brand": "River Hill",
    "brandSlug": "river-hill-tea",
    "howToUse": [
      "Boil water in a pan",
      "Add 1 teaspoon of River Hill Dust Tea",
      "Let it boil for 2–3 minutes for a strong flavor",
      "Add milk and sugar as desired",
      "Strain and serve hot",
      "Tip: Boil longer for a stronger, richer taste."
    ],
    "specifications": [
      {
        "name": "Type",
        "value": "Assam CTC Dust Tea"
      },
      {
        "name": "Net Weight",
        "value": "250g"
      },
      {
        "name": "Tips",
        "value": "Boil 2 minutes extra for super strong tea. "
      }
    ]
  },
  {
    "id": "vita-rich-white-chana-vella-kadala-500g",
    "name": "Vita Rich White Chana (Vella Kadala) 500g",
    "desc": "Nutritious, protein-packed chickpeas for a healthy lifestyle. Perfect for soups, salads, and snacks, delivering natural goodness in every bite.",
    "images": [
      "images/products/vita-rich-white-chana-vella-kadala-500g-1.png"
    ],
    "price": "50",
    "wasPrice": "50",
    "b2bPricingTiers": [
      {
        "minQty": 1,
        "price": "46"
      },
      {
        "minQty": 6,
        "price": "44"
      },
      {
        "minQty": 12,
        "price": "42"
      }
    ],
    "category": "Food & Beverages",
    "categorySlug": "food-beverages",
    "brand": "Vita Rich",
    "brandSlug": "vita-rich",
    "howToUse": [
      "* Boiled & Spiced: Soft-boil and toss with your favorite spices for a healthy snack.",
      "* Chana Curry: Simmer in tomato-onion gravy for a protein-rich main dish.",
      "* Salad Mix: Combine boiled chana with fresh veggies and a zesty dressing for a light meal."
    ],
    "specifications": []
  }
];
