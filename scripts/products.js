/* ═══════════════════════════════════════════════
   PRODUCTS — Reiky SG
   Edit this file to update all product pages.
   When the dashboard is live, this will be
   replaced by a database-backed API.
   ═══════════════════════════════════════════════ */

var PRODUCTS = {

  /* ── WEALTH ─────────────────────────────────── */

  'citrine': {
    name: 'Citrine Bracelet',
    stone: 'Natural Citrine · A-Grade',
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$38 SGD',
    rating: 5.0,
    reviewCount: 24,
    badge: 'Bestseller',
    imgClass: 'ccard-img--citrine',
    highlights: [
      { icon: '✨', title: "Merchant's Stone", desc: "The most popular wealth crystal in feng shui tradition, worn by entrepreneurs and business owners for centuries." },
      { icon: '💎', title: "A-Grade Natural Citrine", desc: "Handpicked for deep golden colour and clarity. Genuine natural citrine from Brazil — not heat-treated amethyst." },
      { icon: '🌙', title: "Intention-Set Before Shipping", desc: "Each bracelet is cleansed under full moonlight and charged with abundance intentions before it reaches you." }
    ],
    description: "Citrine is one of the most powerful crystals for attracting wealth and abundance. Known as the \"Merchant's Stone\", it has been placed in cash registers and wallets for centuries in Chinese feng shui practice. Its sunny golden colour resonates with the Solar Plexus chakra — the energy centre of personal power, confidence, and manifestation.\n\nThis A-Grade natural citrine bracelet is handpicked for depth of colour and clarity. Each 8mm bead is precision-cut and hand-strung on durable elastic cord. Unlike most citrine on the market, our stones are genuine natural citrine from Brazil — not heat-treated amethyst passed off as citrine.\n\nWear on your left wrist (receiving hand) to draw in wealth energy, or your right wrist to project confidence and attract business opportunities. Pairs powerfully with our Pyrite Bracelet for amplified wealth activation.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Solar Plexus' },
      { icon: '🔥', label: 'Element', value: 'Fire' },
      { icon: '🌍', label: 'Origin', value: 'Brazil' },
      { icon: '💎', label: 'Hardness', value: '7 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Golden Yellow' },
      { icon: '♈', label: 'Zodiac', value: 'Aries · Leo · Libra' },
      { icon: '✨', label: 'Intention', value: 'Wealth & Abundance' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'S', name: 'Sarah T.', date: 'April 2026', text: 'Beautiful bracelet! The citrine is such a vibrant golden yellow. I\'ve been wearing it for 2 weeks and I genuinely feel more motivated and positive. Great quality, fast shipping!' },
      { initial: 'J', name: 'Jen L.', date: 'March 2026', text: 'Got this after reading about citrine\'s wealth properties. Looks exactly like the photos and arrived with a lovely care card. This is my third order from Reiky SG — always excellent!' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 4.9 }, { label: 'Value', score: 4.8 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  'pyrite': {
    name: 'Pyrite Bracelet',
    stone: 'Natural Pyrite · Premium Cut',
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$42 SGD',
    rating: 4.9,
    reviewCount: 18,
    badge: null,
    imgClass: 'ccard-img--pyrite',
    highlights: [
      { icon: '🛡️', title: "Wealth Shield", desc: "Protects against financial loss, bad investments, and energetic leaks that drain prosperity." },
      { icon: '💎', title: "Premium Cut Beads", desc: "Each bead is precision-cut to maximise the natural metallic lustre unique to pyrite." },
      { icon: '⚡', title: "Action Amplifier", desc: "Stimulates willpower and physical action — the bridge between intention and wealth creation." }
    ],
    description: "Pyrite — also known as Fool's Gold — carries a very real, very powerful energy for wealth manifestation. Far from a trick, its name comes from the Greek \"pyr\" (fire), and it carries that fire energy: igniting ambition, fuelling action, and shielding your financial field from loss.\n\nIn feng shui, pyrite is used to activate the wealth corner of a home or office. Wearing it on your wrist keeps that activation close throughout the day. Our premium-cut pyrite beads are sourced from Spain, known for producing the highest quality specimens with richest metallic lustre.\n\nPyrite pairs exceptionally well with Citrine — together they form a classic wealth-activation duo worn by practitioners who take their financial energy seriously.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Solar Plexus · Sacral' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🌎', label: 'Origin', value: 'Spain' },
      { icon: '💎', label: 'Hardness', value: '6–6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Metallic Gold' },
      { icon: '♌', label: 'Zodiac', value: 'Leo · Aries' },
      { icon: '✨', label: 'Intention', value: 'Wealth Shield & Action' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'M', name: 'Marcus K.', date: 'March 2026', text: 'This looks incredible — the metallic gold finish is even better in person. I wear it to every business meeting. Don\'t know if it\'s the crystal or the confidence, but deals have been closing!' },
      { initial: 'R', name: 'Rachel L.', date: 'February 2026', text: 'Great quality, heavier than I expected (in a good way). The beads are cut really cleanly. Bought this and the citrine bracelet together as a pair. Very happy with both.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 4.7 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'jade': {
    name: 'Green Jade Bracelet',
    stone: 'Nephrite Jade · Grade A',
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$55 SGD',
    rating: 5.0,
    reviewCount: 31,
    badge: 'Popular',
    imgClass: 'ccard-img--jade',
    highlights: [
      { icon: '🌿', title: "Feng Shui Essential", desc: "The most revered prosperity stone in Chinese tradition — used for over 7,000 years to attract good fortune." },
      { icon: '💎', title: "Grade A Nephrite Jade", desc: "Natural nephrite jade, not dyed or treated. Genuine green colour from iron content in the stone." },
      { icon: '🏆', title: "Good Fortune Magnet", desc: "Traditionally worn during major life decisions — business launches, property purchases, and life transitions." }
    ],
    description: "Green Jade holds a special place in Chinese culture unlike any other crystal. For over 7,000 years it has been the stone of nobility, prosperity, and harmony. In Confucian philosophy, jade embodies five virtues: benevolence, wisdom, courage, justice, and purity. To the Chinese, jade is more than a stone — it is a philosophical ideal made material.\n\nOur Grade A nephrite jade is sourced from certified suppliers in China and Myanmar. Grade A means it has undergone no chemical treatment, bleaching, or colour enhancement — only mechanical polishing. The rich forest green comes naturally from iron and chromium content in the stone itself.\n\nIn feng shui, wearing jade on the left wrist (receiving hand) attracts wealth, health, and protection simultaneously. It is particularly powerful during Bazi luck cycles when your wealth or resource stars are activated.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🌏', label: 'Origin', value: 'China · Myanmar' },
      { icon: '💎', label: 'Hardness', value: '6–6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Forest Green' },
      { icon: '♉', label: 'Zodiac', value: 'Taurus · Libra' },
      { icon: '✨', label: 'Intention', value: 'Prosperity & Harmony' },
      { icon: '📿', label: 'Bead Size', value: '10mm' }
    ],
    reviews: [
      { initial: 'L', name: 'Linda C.', date: 'April 2026', text: 'The jade colour is so rich and even — nothing like the pale, fake-looking ones sold elsewhere. My grandmother saw it and immediately said it was quality jade. Worth every cent.' },
      { initial: 'D', name: 'David W.', date: 'March 2026', text: 'Bought this after my Bazi reading with Reiky SG. The practitioner recommended jade for my current luck cycle. Beautiful bracelet, and I feel good wearing it every day.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 4.8 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  'tigers-eye': {
    name: "Tiger's Eye Bracelet",
    stone: "Natural Tiger's Eye · Golden Grade",
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$36 SGD',
    rating: 4.8,
    reviewCount: 15,
    badge: null,
    imgClass: 'ccard-img--tigers-eye',
    highlights: [
      { icon: '🎯', title: "Decision Maker's Stone", desc: "Brings piercing clarity during high-stakes choices — business decisions, investments, negotiations." },
      { icon: '💫', title: "Natural Chatoyancy", desc: "The signature silk-like shimmer (chatoyancy) is a completely natural optical effect — no treatment." },
      { icon: '⚡', title: "Action & Opportunity", desc: "Bridges willpower with right timing — helps you recognise and act on wealth-creating opportunities." }
    ],
    description: "Tiger's Eye has been used as a talisman against ill wishes and curses since ancient Egyptian times. Warriors wore it for courage in battle; today, business leaders wear it for clarity and decisive action in the marketplace. The stone's golden chatoyancy — the moving band of light within the stone — represents the piercing gaze of a tiger: focused, unwavering, and opportunistic.\n\nThis bracelet features golden-grade Tiger's Eye from South Africa, known for producing the richest chatoyancy. Each bead is cut perpendicular to the fibre orientation to maximise the optical silk effect that makes Tiger's Eye so distinctive.\n\nBest suited for those who know what they want but struggle with follow-through, or for navigating complex decisions where clarity is needed. Pair with Citrine for a wealth manifestation combination that covers both clarity and attraction energy.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Solar Plexus · Sacral' },
      { icon: '🔥', label: 'Element', value: 'Fire · Earth' },
      { icon: '🌍', label: 'Origin', value: 'South Africa' },
      { icon: '💎', label: 'Hardness', value: '7 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Golden Brown' },
      { icon: '♏', label: 'Zodiac', value: 'Scorpio · Capricorn' },
      { icon: '✨', label: 'Intention', value: 'Clarity & Action' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'A', name: 'Alex T.', date: 'March 2026', text: 'The chatoyancy is mesmerising — you can see the light shift as you move your wrist. Very well made. I wear this when I have important meetings and it genuinely makes me feel sharper.' },
      { initial: 'P', name: 'Priya M.', date: 'February 2026', text: 'Good quality, arrived quickly. The golden tones are more subtle than in photos but still beautiful. Would buy again.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 4.8 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.7 }, { label: 'Value', score: 4.9 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.8 }
    ]
  },

  'yellow-calcite': {
    name: 'Yellow Calcite Bracelet',
    stone: 'Natural Yellow Calcite · A-Grade',
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$34 SGD',
    rating: 4.9,
    reviewCount: 12,
    badge: null,
    imgClass: 'ccard-img--yellow-calcite',
    highlights: [
      { icon: '☀️', title: "Confidence Amplifier", desc: "Boosts self-belief and positive outlook — removes mental blocks that prevent you from pursuing wealth." },
      { icon: '🪨', title: "Smooth & Lightweight", desc: "Polished calcite beads are especially comfortable for all-day wear. Great entry-level wealth crystal." },
      { icon: '🧠', title: "Mental Clarity", desc: "Helps dissolve negative thought patterns and limiting beliefs that block abundance mindset." }
    ],
    description: "Yellow Calcite works on the mind first — making it the ideal wealth crystal for those whose biggest obstacle is their own thinking. While Citrine and Pyrite attract and protect wealth externally, Yellow Calcite clears the internal blockages: self-doubt, scarcity mindset, fear of success, and imposter syndrome.\n\nCalcite is one of the most common minerals on Earth, but its pale lemony yellow variety carries a gentle yet effective Solar Plexus activation. Its smooth, waxy texture makes it extremely comfortable to wear — ideal for those new to crystal bracelets or those with sensitive skin.\n\nYellow Calcite is especially recommended during periods of study, exam preparation, or career transitions where mental clarity and confidence are the primary needs.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Solar Plexus' },
      { icon: '🔥', label: 'Element', value: 'Fire' },
      { icon: '🌎', label: 'Origin', value: 'Mexico' },
      { icon: '💎', label: 'Hardness', value: '3 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Pale Lemon Yellow' },
      { icon: '♊', label: 'Zodiac', value: 'Gemini · Leo' },
      { icon: '✨', label: 'Intention', value: 'Confidence & Clarity' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'N', name: 'Nicole H.', date: 'April 2026', text: 'Subtly beautiful — the colour is a soft pale yellow that goes with everything. I got this alongside the citrine and wear them as a stack. Really good quality for the price.' },
      { initial: 'T', name: 'Timothy L.', date: 'March 2026', text: 'Bought this before a series of job interviews. Whether it was the crystal or the mindset shift from wearing it, I got the job! Lovely packaging too.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 4.9 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'green-aventurine': {
    name: 'Green Aventurine Bracelet',
    stone: 'Natural Green Aventurine · Premium',
    category: 'Wealth & Abundance',
    categorySlug: 'wealth',
    categoryEmoji: '✨',
    price: '$38 SGD',
    rating: 5.0,
    reviewCount: 9,
    badge: 'New',
    imgClass: 'ccard-img--green-aventurine-w',
    highlights: [
      { icon: '🍀', title: "Opportunity Stone", desc: "Attracts luck and opens doors to new possibilities in career, finance, and personal ventures." },
      { icon: '🌟', title: "New to Our Collection", desc: "Recently added after popular demand. Limited stock — first batch has sold well." },
      { icon: '💚', title: "All-Day Comfort", desc: "Medium hardness (6.5 Mohs) and smooth finish make this ideal for continuous daily wear." }
    ],
    description: "Green Aventurine is called the \"Stone of Opportunity\" for good reason — it is consistently associated with luck, chance, and the opening of doors that were previously closed. Unlike other wealth crystals that work on activation or shielding, Aventurine's gift is alignment: it aligns you with the right opportunities at the right time.\n\nOur premium green aventurine comes from India, the primary source of the highest quality specimens. The characteristic aventurescence (sparkle) comes from tiny fuchsite mica inclusions — a completely natural phenomenon. The rich forest green colour is deeper and more saturated than typical aventurine.\n\nGreen Aventurine is especially effective for those starting new businesses, entering new career fields, or seeking promotion. It is often recommended alongside a Bazi reading to time major moves with your personal luck cycles.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '🌿', label: 'Element', value: 'Earth' },
      { icon: '🌏', label: 'Origin', value: 'India' },
      { icon: '💎', label: 'Hardness', value: '6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Forest Green' },
      { icon: '♈', label: 'Zodiac', value: 'Aries · Taurus' },
      { icon: '✨', label: 'Intention', value: 'Luck & Opportunity' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'C', name: 'Clara N.', date: 'April 2026', text: 'Just received this — the green is gorgeous, very rich colour. I can already see the sparkle from the mica. Excited to wear this regularly. Fast delivery, lovely packaging.' },
      { initial: 'B', name: 'Ben A.', date: 'April 2026', text: 'Bought this on recommendation from a friend who had a great experience with Reiky SG. The bracelet quality is excellent — well strung and the beads are all uniform in size. Happy with this.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  /* ── LOVE ────────────────────────────────────── */

  'rose-quartz': {
    name: 'Rose Quartz Bracelet',
    stone: 'Natural Rose Quartz · A-Grade',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$36 SGD',
    rating: 5.0,
    reviewCount: 42,
    badge: 'Bestseller',
    imgClass: 'ccard-img--rose-quartz',
    highlights: [
      { icon: '💗', title: "Our #1 Bestseller", desc: "The most gifted crystal in our collection. Loved by customers for self-love and romantic attraction." },
      { icon: '❤️', title: "Unconditional Love Frequency", desc: "Rose Quartz vibrates at the frequency of unconditional love — works for self-love as much as romantic love." },
      { icon: '🎁', title: "Perfect for Gifting", desc: "Most popular for birthdays, Valentine's Day, and housewarmings. Comes in elegant gift-ready packaging." }
    ],
    description: "Rose Quartz is perhaps the most universally beloved crystal in the world. Its gentle pink energy speaks directly to the heart chakra — softening emotional barriers, dissolving old wounds, and creating space for love in all its forms. It doesn't just attract romantic love; it first teaches you to love yourself, which is the foundation everything else is built on.\n\nThis A-Grade natural rose quartz features a translucent, soft pink colour characteristic of high-quality specimens from Brazil and Madagascar. The gentle opacity and smooth texture make it one of the most wearable crystals — appropriate for every occasion, from a board meeting to a first date.\n\nFor best results, set a clear intention when you first wear your bracelet — whether it's attracting a partner, healing after a breakup, or simply cultivating more self-compassion. Rose Quartz amplifies whatever you give it.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '💧', label: 'Element', value: 'Water' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · Madagascar' },
      { icon: '💎', label: 'Hardness', value: '7 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Soft Pink' },
      { icon: '♉', label: 'Zodiac', value: 'Taurus · Libra' },
      { icon: '💗', label: 'Intention', value: 'Love & Self-Love' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'A', name: 'Amy K.', date: 'April 2026', text: 'I\'ve bought rose quartz from multiple places and this is by far the best quality. The pink is so even and the bracelet sits beautifully. Bought one for myself and one as a gift.' },
      { initial: 'V', name: 'Vivian T.', date: 'March 2026', text: 'Reiky SG wraps everything so beautifully. This was a gift for my best friend and she loved it. The crystal quality is really evident — you can feel the difference from cheap ones.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 4.9 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  'rhodonite': {
    name: 'Rhodonite Bracelet',
    stone: 'Natural Rhodonite · Premium Grade',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$40 SGD',
    rating: 4.9,
    reviewCount: 16,
    badge: null,
    imgClass: 'ccard-img--rhodonite',
    highlights: [
      { icon: '🩹', title: "The Rescue Stone", desc: "Especially effective for healing emotional wounds from past relationships, grief, and heartbreak." },
      { icon: '🖤', title: "Unique Pink & Black Patterns", desc: "Natural black manganese oxide veining creates a completely unique pattern in every single stone." },
      { icon: '🕊️', title: "Forgiveness Energy", desc: "Promotes compassion and the release of resentment — allows you to forgive without forgetting." }
    ],
    description: "Rhodonite is known as the \"rescue stone\" — and for good reason. Where Rose Quartz opens the heart to new love, Rhodonite first does the healing work: clearing away the residue of old relationships, dissolving resentment, and teaching the hardest lesson of all — that forgiveness is not for the person who hurt you, but for yourself.\n\nThe striking pink and black colouring of Rhodonite is entirely natural. The black veins are manganese oxide, which forms naturally within the stone during its crystallisation. This means every bead has a completely unique pattern — no two bracelets are identical.\n\nRhodonite is particularly powerful during divorce, breakups, or periods of significant emotional healing. It is also used by healers to clear the emotional residue that unconsciously attracts the same types of unhealthy relationships.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🌎', label: 'Origin', value: 'Russia · Australia' },
      { icon: '💎', label: 'Hardness', value: '5.5–6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Pink with Black Veins' },
      { icon: '♏', label: 'Zodiac', value: 'Scorpio · Taurus' },
      { icon: '💗', label: 'Intention', value: 'Healing & Forgiveness' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'H', name: 'Hannah J.', date: 'April 2026', text: 'Bought this during a really difficult breakup. I don\'t know how to explain it but wearing this bracelet genuinely made me feel more at peace. The patterns on each bead are so beautiful.' },
      { initial: 'E', name: 'Emily G.', date: 'February 2026', text: 'The black veining on each bead is stunning — truly unique. Great quality, came with a card explaining the crystal\'s properties which I really appreciated.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 4.9 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'moonstone': {
    name: 'Moonstone Bracelet',
    stone: 'Rainbow Moonstone · A-Grade',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$48 SGD',
    rating: 5.0,
    reviewCount: 27,
    badge: 'Popular',
    imgClass: 'ccard-img--moonstone',
    highlights: [
      { icon: '🌙', title: "Feminine Energy & Intuition", desc: "Deeply connected to lunar cycles. Enhances emotional intelligence and intuitive understanding in relationships." },
      { icon: '🌈', title: "Natural Rainbow Flash", desc: "The blue-white adularescence (rainbow glow) is a completely natural optical phenomenon — not treated." },
      { icon: '🌱', title: "Stone of New Beginnings", desc: "Ideal when entering a new relationship, phase of life, or healing after a significant ending." }
    ],
    description: "Moonstone holds the light of the moon within it. The blue-white flash you see — called adularescence — is caused by light scattering between microscopic layers of feldspar minerals, creating the appearance of a glowing inner light. In ancient India, moonstone was considered sacred and was placed in the mouths of the gods to bestow blessings.\n\nOur A-Grade rainbow moonstone features strong adularescence with flashes of blue, white, and gold depending on the angle. The white base colour is clean and milky — characteristic of high-quality Sri Lankan and Indian specimens. We grade and select each bead individually for consistency of the rainbow effect.\n\nMoonstone works on the emotional level more than any other love crystal. It heightens empathy, deepens emotional communication, and creates a field of compassion around you — making it easier for others to open up and connect authentically.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Crown · Third Eye' },
      { icon: '💧', label: 'Element', value: 'Water' },
      { icon: '🌏', label: 'Origin', value: 'Sri Lanka · India' },
      { icon: '💎', label: 'Hardness', value: '6–6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'White with Rainbow Flash' },
      { icon: '♋', label: 'Zodiac', value: 'Cancer · Scorpio · Libra' },
      { icon: '🌙', label: 'Intention', value: 'Intuition & New Beginnings' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'Y', name: 'Yvonne C.', date: 'April 2026', text: 'The rainbow flash is REAL — I didn\'t expect it to be so vivid. Every time I look at my wrist in different lighting it shows a different colour. Absolutely stunning quality.' },
      { initial: 'K', name: 'Kate L.', date: 'March 2026', text: 'Bought this for a fresh start after a breakup. Whether it\'s the crystal or the intention I set, I feel really hopeful again. Beautiful bracelet, excellent packaging.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 4.8 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  'pink-tourmaline': {
    name: 'Pink Tourmaline Bracelet',
    stone: 'Natural Pink Tourmaline',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$52 SGD',
    rating: 4.8,
    reviewCount: 11,
    badge: null,
    imgClass: 'ccard-img--pink-tourmaline',
    highlights: [
      { icon: '🛡️', title: "Emotional Safety", desc: "Creates a field of warmth and security — makes you feel safe to open your heart to love." },
      { icon: '💎', title: "Rarer Than Diamonds", desc: "Pink tourmaline is statistically rarer than diamonds by weight. A genuinely precious crystal." },
      { icon: '🌿', title: "Stress & Anxiety Relief", desc: "Known to calm the nervous system, reduce stress responses, and create emotional equilibrium." }
    ],
    description: "Pink Tourmaline is one of the most emotionally sophisticated crystals available. Where Rose Quartz broadcasts love openly and Rhodonite heals wounds, Pink Tourmaline creates emotional safety — it generates a field of warmth and security that allows the heart to open without fear of being hurt again.\n\nIn terms of rarity, pink tourmaline rivals gemstones that cost 10x more. Its colour comes from trace manganese, and the intensity varies from pale blush to deep hot pink. Our stones are a vibrant mid-pink with excellent transparency — gemstone quality in a healing bracelet.\n\nPink Tourmaline is particularly recommended for those who have been deeply hurt and find it difficult to trust again, or for highly empathic people who absorb others' emotions and need a protective boundary while remaining emotionally open.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '💧', label: 'Element', value: 'Water · Fire' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · Afghanistan' },
      { icon: '💎', label: 'Hardness', value: '7–7.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Vibrant Mid-Pink' },
      { icon: '♎', label: 'Zodiac', value: 'Libra · Scorpio' },
      { icon: '💗', label: 'Intention', value: 'Emotional Safety & Healing' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'F', name: 'Fiona L.', date: 'March 2026', text: 'The colour is so vibrant — proper deep pink, not pale. Very different from rose quartz energy, more intense and focused. Really happy with this purchase.' },
      { initial: 'G', name: 'Grace T.', date: 'February 2026', text: 'Excellent quality. The beads are consistent in size and colour. I can feel a real difference in my emotional state when wearing this vs not. Highly recommend.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.8 },
      { label: 'Packaging', score: 4.7 }, { label: 'Value', score: 4.6 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.8 }
    ]
  },

  'morganite': {
    name: 'Morganite Bracelet',
    stone: 'Natural Morganite · A-Grade',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$58 SGD',
    rating: 4.9,
    reviewCount: 8,
    badge: null,
    imgClass: 'ccard-img--morganite',
    highlights: [
      { icon: '💫', title: "Divine Love Frequency", desc: "Vibrates at the frequency of divine compassion — the love that asks nothing in return." },
      { icon: '🍑', title: "Natural Peach-Pink Hue", desc: "Soft blush colour from trace manganese. The peach undertone is unique to morganite in the beryl family." },
      { icon: '⬆️', title: "High Vibration Heart Opener", desc: "One of the strongest heart chakra activators available. Works quickly and gently." }
    ],
    description: "Morganite belongs to the beryl family — the same mineral group as emerald and aquamarine. Its delicate peach-pink colour comes from trace amounts of manganese, and its energy is often described as the most \"divine\" of the love crystals: it doesn't focus on romantic love specifically, but on the broader experience of love as a state of being.\n\nPractitioners describe Morganite as a crystal that dissolves the barriers between the personal and the universal — it moves you from \"I want love\" to \"I am love\". This shift in perspective often paradoxically attracts more love, because you stop looking for what you're already carrying.\n\nOur A-Grade Morganite is sourced from Pakistan and Brazil, featuring clear transparent stones with a consistent peach-pink tone. At this price point, Morganite represents exceptional value for a gemstone-quality healing crystal.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart' },
      { icon: '💧', label: 'Element', value: 'Water' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · Pakistan' },
      { icon: '💎', label: 'Hardness', value: '7.5–8 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Peach Pink' },
      { icon: '♎', label: 'Zodiac', value: 'Libra · Pisces' },
      { icon: '💗', label: 'Intention', value: 'Divine Love & Compassion' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'I', name: 'Isabelle M.', date: 'April 2026', text: 'Such a delicate, beautiful colour — like a sunset. The energy of this crystal is incredibly gentle and calming. I wear this when I need to approach difficult conversations with compassion.' },
      { initial: 'W', name: 'Wendy C.', date: 'March 2026', text: 'Good quality for the price given this is morganite. The peach tone is lovely. Fast delivery and nice packaging. Would recommend to anyone interested in heart chakra work.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 4.7 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'kunzite': {
    name: 'Kunzite Bracelet',
    stone: 'Natural Kunzite · Premium Cut',
    category: 'Love & Relationships',
    categorySlug: 'love',
    categoryEmoji: '🌸',
    price: '$62 SGD',
    rating: 5.0,
    reviewCount: 6,
    badge: 'New',
    imgClass: 'ccard-img--kunzite',
    highlights: [
      { icon: '🌟', title: "New Arrival — Limited Stock", desc: "Just added to our collection. First batch has been extremely well received — very limited quantity." },
      { icon: '🔮', title: "Highest Vibration Love Stone", desc: "Bridges the heart chakra with higher consciousness — where love meets spiritual awakening." },
      { icon: '💜', title: "Natural Lilac-Pink Colour", desc: "Colour from manganese and lithium traces. Deepens when exposed to natural light over time." }
    ],
    description: "Kunzite is one of the highest-vibration love crystals available and has only recently become more widely accessible outside of specialist crystal shops. It bridges the heart and crown chakras — making it not just a love crystal, but a crystal of spiritual love: the kind that transcends ego, attachment, and conditions.\n\nThe lilac-pink colour comes from trace amounts of manganese and lithium within the spodumene mineral. An interesting property of Kunzite is that its colour can deepen with regular exposure to natural light — meaning your bracelet becomes more vivid over time as you wear it.\n\nKunzite is particularly recommended for those on a spiritual path who want their relationships to reflect their highest values, or for anyone who feels that their relationships have become too transactional or conditional.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Heart · Crown' },
      { icon: '💨', label: 'Element', value: 'Water · Air' },
      { icon: '🌏', label: 'Origin', value: 'Pakistan · Afghanistan' },
      { icon: '💎', label: 'Hardness', value: '6.5–7 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Lilac Pink' },
      { icon: '♎', label: 'Zodiac', value: 'Libra · Taurus · Leo' },
      { icon: '💗', label: 'Intention', value: 'Spiritual Love & Heart Opening' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'O', name: 'Olivia H.', date: 'April 2026', text: 'This is genuinely a stunning crystal. The colour is this perfect lilac-pink and the energy is so soft and high. I\'ve been sleeping with mine on my bedside table too. Absolutely love it.' },
      { initial: 'Z', name: 'Zoe K.', date: 'April 2026', text: 'Worth every cent. The quality is exceptional and the packaging was beautiful. I\'ve bought several crystals from Reiky SG now and the consistency is impressive.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 4.9 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  /* ── PROTECTION ──────────────────────────────── */

  'black-tourmaline': {
    name: 'Black Tourmaline Bracelet',
    stone: 'Natural Black Tourmaline · A-Grade',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$38 SGD',
    rating: 5.0,
    reviewCount: 36,
    badge: 'Bestseller',
    imgClass: 'ccard-img--black-tourmaline',
    highlights: [
      { icon: '🛡️', title: "Master Protection Crystal", desc: "The most widely recommended protection crystal worldwide. Creates a powerful energetic barrier." },
      { icon: '📱', title: "EMF Neutraliser", desc: "Studied for its ability to absorb and neutralise electromagnetic frequencies from devices." },
      { icon: '🌍', title: "Root Chakra Grounding", desc: "Keeps you anchored, stable, and centred — especially useful under sustained stress or pressure." }
    ],
    description: "Black Tourmaline is the gold standard of protection crystals. Electrically active by nature (it generates a small electrical charge under pressure), it creates a shield that deflects negative energy, psychic attack, and harmful environmental frequencies before they reach your aura. It is the first crystal recommended to anyone beginning their crystal practice.\n\nOur A-Grade black tourmaline is sourced from Brazil, where the highest quality schorl (black tourmaline) deposits are found. The deep, pure black of A-Grade tourmaline indicates maximum iron content — and maximum protection energy.\n\nBlack Tourmaline is especially valuable for empaths, healers, and anyone who works in high-stress, high-density environments (offices, transport, hospitals). It is also one of the few crystals that does not need regular cleansing — it processes and transmutes negative energy rather than simply absorbing it.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Root' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · Africa' },
      { icon: '💎', label: 'Hardness', value: '7–7.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Deep Black' },
      { icon: '♑', label: 'Zodiac', value: 'Capricorn · Libra' },
      { icon: '🛡️', label: 'Intention', value: 'Protection & Grounding' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'R', name: 'Ryan C.', date: 'April 2026', text: 'I work in a busy hospital environment. Since wearing this I feel noticeably less drained at the end of a shift. Maybe it\'s placebo, but the quality is definitely real — well-made bracelet.' },
      { initial: 'S', name: 'Sandra K.', date: 'March 2026', text: 'Third time ordering this from Reiky SG — I\'ve given them as gifts too. This is the best quality black tourmaline bracelet I\'ve found in Singapore. Highly recommend.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 4.9 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  },

  'obsidian': {
    name: 'Black Obsidian Bracelet',
    stone: 'Natural Volcanic Obsidian',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$36 SGD',
    rating: 4.9,
    reviewCount: 22,
    badge: null,
    imgClass: 'ccard-img--obsidian',
    highlights: [
      { icon: '🪞', title: "Mirror Stone", desc: "Reflects negative energy and psychic attack back to its source before it enters your field." },
      { icon: '🌋', title: "Volcanic Origin", desc: "Formed from rapidly cooled lava — carries raw Earth and Fire energy combined." },
      { icon: '🔍', title: "Shadow Work Stone", desc: "Brings hidden blockages, self-deception, and unconscious patterns to the surface for healing." }
    ],
    description: "Black Obsidian is more intense than Black Tourmaline — rather than deflecting negative energy, it acts like a mirror, reflecting it back to its source. For this reason it is one of the most powerful protection stones, but also requires respect: its tendency to bring shadow aspects to the surface means it can accelerate healing in ways that may initially feel uncomfortable.\n\nObsidian is a naturally occurring volcanic glass, formed when molten lava cools so rapidly that crystals don't have time to form. It has been used as a scrying mirror, surgical blade, and protective talisman across cultures for thousands of years. Our specimens are sourced from Mexico and Iceland, known for producing the deepest, most mirror-like obsidian available.\n\nBlack Obsidian is recommended for experienced crystal practitioners, those doing deliberate shadow work, or anyone dealing with a specific source of negativity they need to address rather than just shield against.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Root' },
      { icon: '🔥', label: 'Element', value: 'Earth · Fire' },
      { icon: '🌎', label: 'Origin', value: 'Mexico · Iceland' },
      { icon: '💎', label: 'Hardness', value: '5–5.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Mirror Black' },
      { icon: '♏', label: 'Zodiac', value: 'Scorpio · Sagittarius' },
      { icon: '🛡️', label: 'Intention', value: 'Protection & Shadow Healing' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'T', name: 'Tom W.', date: 'March 2026', text: 'The obsidian is genuinely mirror-like — you can see your reflection in the beads. Very sleek looking bracelet. I bought this during a particularly stressful period at work and it helped.' },
      { initial: 'M', name: 'Mei J.', date: 'February 2026', text: 'Good quality, arrived with care instructions which I appreciated. The beads are very uniform. My second purchase from Reiky SG and I\'m consistently impressed.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 4.9 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'shungite': {
    name: 'Shungite Bracelet',
    stone: 'Russian Shungite · Elite Grade',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$44 SGD',
    rating: 4.8,
    reviewCount: 14,
    badge: 'Popular',
    imgClass: 'ccard-img--shungite',
    highlights: [
      { icon: '🌍', title: "2 Billion Year Old Mineral", desc: "Found only in Karelia, Russia. One of Earth's oldest carbon-based minerals — unique on the planet." },
      { icon: '📡', title: "EMF Research Background", desc: "Among the most studied crystals for shielding effects. Contains fullerenes (C60) unique to shungite." },
      { icon: '💎', title: "Elite Grade (1% of supply)", desc: "Elite grade contains ~98% carbon. Only ~1% of all extracted shungite qualifies. Significantly more powerful." }
    ],
    description: "Shungite is in a category of its own among protection crystals. Formed over 2 billion years ago in the Karelian region of Russia, it contains fullerenes (C60 molecules) — a form of carbon not found in significant quantities in any other natural mineral on Earth. This unique structure is the basis for significant scientific interest in shungite's potential for EMF absorption and water purification.\n\nOur bracelets use Elite Grade shungite — the highest classification, containing approximately 98% carbon. Regular shungite (Type II–III) contains 30–75% carbon and is significantly less powerful. Elite grade is silver-black, highly lustrous, and lightweight. Only about 1% of all shungite extracted from the Karelian mines qualifies as elite grade.\n\nShungite is recommended for anyone who spends significant time near electronics, WiFi routers, or in urban environments with high electromagnetic exposure. It pairs powerfully with Black Tourmaline for a comprehensive protection stack.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Root' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🇷🇺', label: 'Origin', value: 'Karelia, Russia (Only Source)' },
      { icon: '💎', label: 'Hardness', value: '3.5–4 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Silver Black' },
      { icon: '♑', label: 'Zodiac', value: 'Capricorn · Cancer' },
      { icon: '📡', label: 'Intention', value: 'EMF Protection & Purification' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'K', name: 'Kevin T.', date: 'March 2026', text: 'I researched shungite extensively before buying and this is clearly elite grade. The silver-black lustre is distinctive and the beads are lightweight. Great for tech workers.' },
      { initial: 'L', name: 'Lena C.', date: 'January 2026', text: 'This was a gift for my husband who works in IT and is around computers all day. He wears it every day now. The bracelet quality is solid — not flimsy at all.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 4.9 }, { label: 'Accuracy', score: 4.8 },
      { label: 'Packaging', score: 4.7 }, { label: 'Value', score: 4.6 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 4.8 }
    ]
  },

  'smoky-quartz': {
    name: 'Smoky Quartz Bracelet',
    stone: 'Natural Smoky Quartz · A-Grade',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$38 SGD',
    rating: 4.9,
    reviewCount: 19,
    badge: null,
    imgClass: 'ccard-img--smoky-quartz',
    highlights: [
      { icon: '🌫️', title: "Gentle Grounding", desc: "Less intense than Obsidian — the ideal entry-level protection crystal for new practitioners." },
      { icon: '☢️', title: "Natural Irradiation Colour", desc: "The smoky brown colour comes from natural gamma irradiation in the earth — completely natural, never artificial." },
      { icon: '🔄', title: "Transmutation Stone", desc: "Uniquely converts negative energy into positive, usable energy rather than just blocking or absorbing it." }
    ],
    description: "Smoky Quartz is the gentlest of the protection crystals and the most recommended for beginners. Where Black Tourmaline shields and Obsidian mirrors, Smoky Quartz transmutes: it doesn't just protect you from negative energy, it converts it into something you can actually use — turning fear into courage, anxiety into alertness, and heaviness into groundedness.\n\nThe smoky brown colour is caused by natural gamma irradiation from surrounding granite rocks — it is never artificial. The colour can range from pale, barely-visible smoke to deep chocolate brown. Our A-Grade selection features mid-to-deep brown with strong translucency, a sign of quality.\n\nSmoky Quartz is particularly useful for those with anxiety, hypervigilance, or stress-related conditions. It works by gently bringing scattered or anxious energy down into the body — grounding it without suppressing it.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Root' },
      { icon: '🌍', label: 'Element', value: 'Earth' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · USA' },
      { icon: '💎', label: 'Hardness', value: '7 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Smoky Brown' },
      { icon: '♑', label: 'Zodiac', value: 'Capricorn · Sagittarius' },
      { icon: '🛡️', label: 'Intention', value: 'Grounding & Transmutation' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'N', name: 'Nathan L.', date: 'April 2026', text: 'This is my go-to recommendation for people new to crystals. It\'s grounding without being heavy, protective without being intense. Great quality from Reiky SG as always.' },
      { initial: 'P', name: 'Patricia Y.', date: 'March 2026', text: 'The warm brown colour goes with everything. I wear this to work every day. It has a calming energy that helps with my anxiety. Excellent bracelet.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 4.9 },
      { label: 'Packaging', score: 4.8 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 4.9 }, { label: 'Overall', score: 4.9 }
    ]
  },

  'hematite': {
    name: 'Hematite Bracelet',
    stone: 'Natural Hematite · Polished',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$30 SGD',
    rating: 4.7,
    reviewCount: 10,
    badge: null,
    imgClass: 'ccard-img--hematite',
    highlights: [
      { icon: '💰', title: "Best Value Protection", desc: "Entry-level protection and grounding at an accessible price — ideal for gifting or first crystal." },
      { icon: '🔩', title: "High Iron Content", desc: "Hematite is iron ore. Its high iron content creates a strong magnetic grounding pull to the earth." },
      { icon: '🧠', title: "Focus & Memory", desc: "Enhances mental focus, memory retention, and logical thinking alongside its protection properties." }
    ],
    description: "Hematite is one of the most grounding crystals available — both physically (its high iron content makes it unusually heavy for its size) and energetically (its magnetic quality pulls scattered energy back down into the body). It is the entry-level protection and grounding crystal, recommended for those just beginning to work with crystals, or for gifting to someone who needs grounding support.\n\nThe silver-grey metallic sheen of polished hematite is one of the most distinctive looks in the crystal kingdom. Each bead has a high-shine mirror finish that makes this an unusually stylish choice — it looks more like jewellery than most crystal bracelets.\n\nHematite is particularly useful for students, for those with scattered thinking, or for anyone who needs to be \"in their body\" more — athletes, performers, public speakers. Its focus-enhancing properties make it a useful study aid alongside its protective function.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Root' },
      { icon: '🔥', label: 'Element', value: 'Earth · Fire' },
      { icon: '🌍', label: 'Origin', value: 'Brazil · Morocco' },
      { icon: '💎', label: 'Hardness', value: '5–6 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Silver-Grey Metallic' },
      { icon: '♈', label: 'Zodiac', value: 'Aries · Aquarius' },
      { icon: '🛡️', label: 'Intention', value: 'Grounding & Focus' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'J', name: 'James K.', date: 'March 2026', text: 'This looks exactly like a proper bracelet, not a "crystal" bracelet if you know what I mean. The metallic shine is sleek. Good for wearing to work without looking out of place.' },
      { initial: 'C', name: 'Christine L.', date: 'February 2026', text: 'Good quality for the price. I bought this as a starter protection crystal. The grounding effect is noticeable — I feel less "in my head" when wearing it.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 4.7 }, { label: 'Accuracy', score: 4.8 },
      { label: 'Packaging', score: 4.6 }, { label: 'Value', score: 5.0 },
      { label: 'Shipping', score: 4.9 }, { label: 'Overall', score: 4.7 }
    ]
  },

  'labradorite': {
    name: 'Labradorite Bracelet',
    stone: 'Natural Labradorite · Premium',
    category: 'Protection & Grounding',
    categorySlug: 'protection',
    categoryEmoji: '🛡️',
    price: '$46 SGD',
    rating: 5.0,
    reviewCount: 7,
    badge: 'New',
    imgClass: 'ccard-img--labradorite',
    highlights: [
      { icon: '🌟', title: "New Arrival — Limited Stock", desc: "Just added to our protection collection. Very limited first batch — strong initial demand." },
      { icon: '🌈', title: "Labradorescence Flash", desc: "Vivid blue-green-gold flash unique to this mineral — caused by light interfering within twinned crystal layers." },
      { icon: '🔮', title: "Aura Protector", desc: "Specifically protects the aura from external interference — ideal for sensitives, empaths, and healers." }
    ],
    description: "Labradorite is the most visually dramatic crystal in our collection. The phenomenon called \"labradorescence\" — the vivid play of blue, green, gold, and sometimes purple light — is caused by light interfering within alternating layers of labradorite feldspar. No two stones display identical colours, making every bracelet truly one of a kind.\n\nBeyond its visual spectacle, Labradorite is one of the most sophisticated protection crystals. Rather than creating a physical barrier like Tourmaline or a mirror like Obsidian, Labradorite works on the level of the aura — sealing and strengthening your energetic field so that other people's energies and emotions cannot accidentally bleed into yours. This makes it invaluable for empaths and energy-sensitive individuals.\n\nLabradorite also enhances intuition and psychic perception — making it a dual-purpose stone: protecting your current energy while opening your perception of subtle energy. This combination is unique among protection crystals.",
    properties: [
      { icon: '🌀', label: 'Chakra', value: 'Third Eye · Crown' },
      { icon: '💨', label: 'Element', value: 'Water · Air' },
      { icon: '🌍', label: 'Origin', value: 'Madagascar · Canada' },
      { icon: '💎', label: 'Hardness', value: '6–6.5 Mohs' },
      { icon: '🎨', label: 'Colour', value: 'Grey with Blue-Green Flash' },
      { icon: '♒', label: 'Zodiac', value: 'Aquarius · Sagittarius · Leo' },
      { icon: '🛡️', label: 'Intention', value: 'Aura Protection & Intuition' },
      { icon: '📿', label: 'Bead Size', value: '8mm' }
    ],
    reviews: [
      { initial: 'Y', name: 'Yuki S.', date: 'April 2026', text: 'The labradorescence is INCREDIBLE in person. Photographs cannot capture how it looks in real light. The blue-green flash is vivid and shifts constantly. One of my favourite purchases ever.' },
      { initial: 'H', name: 'Helen T.', date: 'April 2026', text: 'So glad Reiky SG added this. I\'ve been looking for quality labradorite in Singapore for ages. This does not disappoint — the flash is strong and every bead is different.' }
    ],
    ratingBreakdown: [
      { label: 'Quality', score: 5.0 }, { label: 'Accuracy', score: 5.0 },
      { label: 'Packaging', score: 5.0 }, { label: 'Value', score: 4.9 },
      { label: 'Shipping', score: 5.0 }, { label: 'Overall', score: 5.0 }
    ]
  }

}
