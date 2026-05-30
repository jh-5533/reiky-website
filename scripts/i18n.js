/* ═══════════════════════════════════════════════════════
   i18n — Reiky SG
   EN / ZH language toggle.
   Load this script BEFORE nav.js on every page.
   ═══════════════════════════════════════════════════════ */

;(function () {

  var DICT = {
    en: {
      /* ── Nav ── */
      nav_crystals:            'Crystals',
      nav_shop_by_intent:      'Shop by Intent',
      nav_wealth_title:        '✨ Wealth & Abundance',
      nav_wealth_sub:          'Citrine, Pyrite, Green Jade',
      nav_love_title:          '🌸 Love & Relationships',
      nav_love_sub:            'Rose Quartz, Rhodonite',
      nav_protection_title:    '🛡️ Protection & Grounding',
      nav_protection_sub:      'Black Tourmaline, Obsidian',
      nav_health_title:        '💚 Health & Healing',
      nav_health_sub:          'Amethyst, Clear Quartz',
      nav_collections:         'Collections',
      nav_bundles_title:       '🎁 Bundles & Sets',
      nav_bundles_sub:         'Curated multi-bracelet packs',
      nav_view_all_crystals:   'View all crystals →',
      nav_bazi:                'Bazi Analysis',
      nav_wealth_prayers:      'Wealth Prayers',
      nav_contact_us:          'Contact Us',
      nav_home:                'Home',

      /* ── Buttons ── */
      btn_shop_crystals:       'Shop Crystals',
      btn_book_bazi:           'Book Bazi Reading',
      btn_chat_wa:             'Chat on WhatsApp',
      btn_contact_wa:          'Contact Us on WhatsApp',
      btn_enquire_wa:          'Enquire on WhatsApp',
      btn_buy_now_wa:          'Buy Now on WhatsApp',
      btn_buy_now:             'Buy Now',
      btn_add_cart:            'Add to Cart',
      btn_show_more:           'Show more',
      btn_view_bundles:        'View Bundles →',
      btn_build_your_set:      'Build Your Set',

      /* ── Badges ── */
      badge_bestseller:        'Bestseller',
      badge_popular:           'Popular',
      badge_new:               'New',

      /* ── Footer (shared) ── */
      footer_tagline:          'Crystal Bracelets & Feng Shui · Singapore',
      footer_crystals:         'Crystals',
      footer_bazi:             'Bazi Analysis',
      footer_prayers:          'Wealth Prayers',
      footer_contact:          'Contact',
      footer_shop:             'Shop',
      footer_services:         'Services',
      footer_explore:          'Explore',
      footer_legal:            'Legal',
      footer_wealth_link:      'Wealth & Abundance',
      footer_love_link:        'Love & Relationships',
      footer_protection_link:  'Protection & Grounding',
      footer_all_crystals:     'All Crystals',
      footer_consultation:     'Crystal Consultation',
      footer_our_story:        'Our Story',
      footer_how_it_works:     'How It Works',
      footer_reviews:          'Reviews',
      footer_privacy:          'Privacy Policy',
      footer_terms:            'Terms of Service',
      footer_whatsapp_us:      'WhatsApp Us',
      footer_copyright:        '© 2026 Reiky SG. All rights reserved.',
      footer_copyright_25:     '© 2025 Reiky SG. All rights reserved.',

      /* ── Index hero ── */
      hero_eyebrow:            'Crystal Bracelets & Feng Shui · Singapore',
      hero_sub:                'Handpicked crystals set with intention. Bazi-guided readings and wealth rituals to help you live in harmony with your destiny.',
      row_wealth:              'Wealth & Abundance',
      row_love:                'Love & Relationships',
      row_protection:          'Protection & Grounding',
      row_view_all:            'View all',
      cta_personal_rec:        'Personal Recommendation',
      cta_not_sure_title:      "Don't know what to get?",
      cta_not_sure_sub:        "Tell us a little about yourself and we'll suggest the right crystal for your energy, goals, and Bazi profile.",
      footer_headline:         'Crystals aligned with your energy.',
      footer_shop_crystals:    'Shop Crystals',

      /* ── Bazi page ── */
      bazi_eyebrow:            'Feng Shui Services',
      bazi_h1:                 'Bazi Analysis',
      bazi_sub:                'Your birth chart holds the blueprint of your destiny. A Bazi reading reveals your elemental strengths, life pillars, and the timing of auspicious windows — so you can act with clarity.',
      bazi_what_eyebrow:       'What is Bazi?',
      bazi_four_pillars:       'The Four Pillars of Destiny',
      bazi_what_sub:           'Bazi (八字), or Four Pillars of Destiny, is a Chinese metaphysical system based on your birth date and time. It maps the balance of the five elements in your life — Wood, Fire, Earth, Metal, Water — and how they interact with your luck cycles.',
      bazi_year_pillar:        'Year Pillar',
      bazi_year_desc:          'Your ancestry, early life, and the societal energy you were born into.',
      bazi_month_pillar:       'Month Pillar',
      bazi_month_desc:         'Parents, career path, and the core of your adult life.',
      bazi_day_pillar:         'Day Pillar',
      bazi_day_desc:           'Your self — personality, relationships, and marriage.',
      bazi_hour_pillar:        'Hour Pillar',
      bazi_hour_desc:          'Children, later life, and your hidden talents.',
      bazi_includes_eyebrow:   'Reading Includes',
      bazi_includes_title:     "What You'll Receive",
      bazi_process_eyebrow:    'How It Works',
      bazi_process_title:      'Simple Process',
      bazi_step1_title:        'Contact Us on WhatsApp',
      bazi_step1_desc:         'Share your full birth date, birth time, and place of birth.',
      bazi_step2_title:        'We Prepare Your Chart',
      bazi_step2_desc:         'Your Four Pillars chart is calculated and interpreted by our practitioner.',
      bazi_step3_title:        'Receive Your Reading',
      bazi_step3_desc:         'A written report plus a 20-minute WhatsApp consultation to walk you through insights.',
      bazi_cta_eyebrow:        'Book Now',
      bazi_cta_title:          'Ready for Your Reading?',
      bazi_cta_sub:            "Reach out on WhatsApp with your birth details and we'll get back to you within 24 hours.",
      prompt_label:            'Quick message — tap to fill:',
      textarea_ph:             'Type your message here…',

      /* ── Wealth Prayers page ── */
      wp_eyebrow:              'Feng Shui Services',
      wp_h1:                   'Wealth Prayers',
      wp_sub:                  'Ancient rituals adapted for modern life. Open energetic pathways to abundance, clear blockages, and invite the flow of prosperity into your home and business.',
      wp_practice_eyebrow:     'The Practice',
      wp_practice_title:       'Why Wealth Prayers Work',
      wp_practice_sub:         'In Chinese metaphysics, intention and ritual create a resonance that aligns your personal energy with the flow of wealth. Combined with your Bazi chart and the right crystals, wealth prayers amplify your luck cycle during auspicious windows.',
      wp_blockages_title:      'Clear Blockages',
      wp_blockages_desc:       'Remove stagnant energy that prevents wealth from flowing into your life.',
      wp_activate_title:       'Activate Wealth Stars',
      wp_activate_desc:        'Energise the wealth sectors in your home or office using Feng Shui principles.',
      wp_amplify_title:        'Amplify with Crystals',
      wp_amplify_desc:         'Pair prayers with intention-set crystals for a stronger energetic effect.',
      wp_includes_eyebrow:     'Service Details',
      wp_includes_title:       "What's Included",
      wp_process_eyebrow:      'How It Works',
      wp_process_title:        'Getting Started',
      wp_step1_title:          'Share Your Details',
      wp_step1_desc:           'Send us your birth date and a brief description of your wealth goals.',
      wp_step2_title:          'We Customise the Prayer',
      wp_step2_desc:           'Our practitioner aligns the ritual to your elemental profile and current luck cycle.',
      wp_step3_title:          'Perform & Activate',
      wp_step3_desc:           'Follow the guide on the prescribed date and time for maximum effect.',
      wp_cta_eyebrow:          'Get Started',
      wp_cta_title:            'Invite Abundance In',
      wp_cta_sub:              'Message us on WhatsApp to begin your wealth prayer journey.',

      /* ── All Crystals page ── */
      all_crystals_eyebrow:    'Collections',
      all_crystals_h1:         'All Crystals',
      all_crystals_sub:        'Every bracelet is handpicked, cleansed, and charged with intention before it reaches you. Find your match by purpose.',
      shop_by_intent_eyebrow:  'Shop by Intent',
      shop_by_intent_title:    'What Are You Calling In?',
      intent_wealth_tag:       '✨ Wealth & Abundance',
      intent_love_tag:         '🌸 Love & Relationships',
      intent_protection_tag:   '🛡️ Protection & Grounding',
      intent_health_tag:       '💚 Health & Healing',
      intent_wealth_desc:      'Attract financial flow, activate prosperity energy, and align with abundance.',
      intent_love_desc:        'Open your heart, attract love, and deepen existing connections.',
      intent_protection_desc:  'Shield your energy, stay grounded, and block negativity.',
      intent_health_desc:      'Support wellbeing, clarity of mind, and physical vitality.',
      intent_shop_wealth:      'Shop Wealth →',
      intent_shop_love:        'Shop Love →',
      intent_shop_protection:  'Shop Protection →',
      intent_shop_health:      'Shop Health →',
      all_bundles_eyebrow:     'Collections',
      all_bundles_title:       'Bundles & Sets',
      all_bundles_sub:         'Curated multi-bracelet packs for layering intentions and gifting.',
      all_contact_eyebrow:     'Need Help Choosing?',
      all_contact_title:       'Ask Us on WhatsApp',
      all_contact_sub:         "Not sure which crystal is right for you? We'll help you find the perfect match.",

      /* ── Wealth crystals page ── */
      wealth_page_eyebrow:     'Crystals / Wealth & Abundance',
      wealth_h1:               '✨ Wealth & Abundance',
      wealth_sub:              'Crystals that align your energy with prosperity, financial flow, and the abundance mindset. Worn daily to keep your intentions activated.',
      wealth_collection_eyebrow: 'The Collection',
      wealth_collection_title: 'Wealth Bracelets',
      wealth_how_eyebrow:      'How It Works',
      wealth_how_title:        'Why These Crystals for Wealth',
      wealth_how_sub:          'Wealth crystals work by resonating with the energy of abundance. Worn on the wrist — closest to your pulse — they serve as a constant reminder of your intention and energetically support your mindset through the day.',
      wealth_solar_title:      'Solar Plexus Activation',
      wealth_solar_desc:       "Citrine and Tiger's Eye stimulate confidence and action — the foundations of wealth creation.",
      wealth_loss_title:       'Protection from Loss',
      wealth_loss_desc:        'Pyrite creates an energetic shield around your finances and business decisions.',
      wealth_harmony_title:    'Harmony & Flow',
      wealth_harmony_desc:     'Green Jade aligns your energy with the natural flow of prosperity in Chinese metaphysics.',
      wealth_cta_eyebrow:      'Ready to Order?',
      wealth_cta_title:        'Enquire via WhatsApp',
      wealth_cta_sub:          "Tell us which bracelet you're interested in and we'll get back to you with availability and pricing.",

      /* ── Love crystals page ── */
      love_page_eyebrow:       'Crystals / Love & Relationships',
      love_h1:                 '🌸 Love & Relationships',
      love_sub:                'Open your heart to love, deepen your bonds, and attract the relationships you deserve. Crystals aligned to the heart chakra and relationship energy.',
      love_collection_title:   'Love Bracelets',
      love_how_title:          'Why These Crystals for Love',
      love_heart_title:        'Heart Chakra Opening',
      love_heart_desc:         'Rose Quartz and Rhodonite resonate directly with the heart energy centre, softening barriers to love.',
      love_balance_title:      'Emotional Balance',
      love_balance_desc:       'Moonstone harmonises emotions, helping you attract and hold loving energy without overwhelm.',
      love_healing_title:      'Relationship Healing',
      love_healing_desc:       'Rhodonite is especially powerful for healing past wounds and rebuilding trust in existing relationships.',
      love_cta_title:          'Enquire via WhatsApp',
      love_cta_eyebrow:        'Ready to Order?',
      love_cta_sub:            "Tell us which bracelet you're interested in and we'll get back to you with availability and pricing.",

      /* ── Protection crystals page ── */
      protection_page_eyebrow: 'Crystals / Protection & Grounding',
      protection_h1:           '🛡️ Protection & Grounding',
      protection_sub:          'Ground your energy, shield against negativity, and create an energetic boundary around your aura. Powerful stones for empaths and sensitive individuals.',
      protection_collection_title: 'Protection Bracelets',
      protection_how_title:    'Why These Crystals for Protection',
      protection_cta_title:    'Enquire via WhatsApp',
      protection_cta_eyebrow:  'Ready to Order?',
      protection_cta_sub:      "Tell us which bracelet you're interested in and we'll get back to you with availability and pricing.",

      /* ── Health crystals page ── */
      health_page_eyebrow:     'Crystals / Health & Healing',
      health_h1:               '💚 Health & Healing',
      health_sub:              'Support your physical and emotional wellbeing with crystals that promote clarity, vitality, and inner harmony.',
      health_collection_title: 'Health Bracelets',
      health_how_title:        'Why These Crystals for Health',
      health_cta_title:        'Enquire via WhatsApp',
      health_cta_eyebrow:      'Ready to Order?',
      health_cta_sub:          "Tell us which bracelet you're interested in and we'll get back to you with availability and pricing.",

      /* ── Bundles page ── */
      bundles_page_eyebrow:    'Crystals / Bundles & Sets',
      bundles_h1:              '🎁 Bundles & Sets',
      bundles_sub:             'Curated multi-bracelet packs designed to layer intentions, give as gifts, or build a complete crystal practice.',
      bundles_collection_eyebrow: 'Collections',
      bundles_collection_title: 'Curated Sets',
      bundles_gifting_eyebrow: 'Gifting',
      bundles_gifting_title:   'Give the Gift of Intention',
      bundles_gift_box_title:  'Premium Gift Box',
      bundles_gift_box_desc:   'All sets come in a branded gift box — ready to give.',
      bundles_card_title:      'Personalised Card',
      bundles_card_desc:       'Add a handwritten message for birthdays, housewarmings, or celebrations.',
      bundles_dispatch_title:  'Same-Day Dispatch',
      bundles_dispatch_desc:   'Order before 2pm for same-day dispatch across Singapore.',
      bundles_cta_eyebrow:     'Order Now',
      bundles_cta_title:       'Ready to Build Your Set?',
      bundles_cta_sub:         "Message us and we'll put together the perfect bundle for you or your gift recipient.",

      /* ── Product page (static) ── */
      pdp_home:                'Home',
      pdp_crystals:            'Crystals',
      pdp_crystal_props:       'Crystal Properties',
      pdp_things_to_know:      'Things to Know',
      pdp_crystal_care:        'Crystal Care',
      pdp_shipping:            'Shipping & Returns',
      pdp_promise:             'Our Promise',
      pdp_care1:               'Cleanse monthly under running water or moonlight',
      pdp_care2:               'Avoid prolonged direct sunlight (may fade some crystals)',
      pdp_care3:               'Do not soak in salt water — damages elastic cord',
      pdp_ship1:               'Free delivery within Singapore (1–3 business days)',
      pdp_ship2:               'Same-day dispatch for orders before 2pm',
      pdp_ship3:               '7-day returns for unworn items in original packaging',
      pdp_promise1:            'All crystals are natural and ethically sourced',
      pdp_promise2:            'Intention-set under moonlight before shipping',
      pdp_promise3:            'Certificate of authenticity available on request',
      pdp_per_bracelet:        'per bracelet',
      pdp_free_delivery:       'Free delivery within Singapore',
      pdp_note:                "You won't be charged until we confirm availability via WhatsApp.",
      pdp_added_to_cart:       'Added to cart!',

      /* ── Service page (static) ── */
      svc_home:                'Home',
      svc_services:            'Services',
      svc_enquire_wa:          'Enquire on WhatsApp',
      svc_consultation:        'Book a Consultation',
      svc_about:               'About This Service',
    },

    zh: {
      /* ── Nav ── */
      nav_crystals:            '水晶',
      nav_shop_by_intent:      '按心意购',
      nav_wealth_title:        '✨ 财富与丰盛',
      nav_wealth_sub:          '黄水晶、黄铁矿、绿玉',
      nav_love_title:          '🌸 爱情与缘分',
      nav_love_sub:            '粉水晶、蔷薇辉石',
      nav_protection_title:    '🛡️ 防护与接地',
      nav_protection_sub:      '黑碧玺、黑曜石',
      nav_health_title:        '💚 健康与疗愈',
      nav_health_sub:          '紫水晶、白水晶',
      nav_collections:         '系列',
      nav_bundles_title:       '🎁 套装礼盒',
      nav_bundles_sub:         '精选多手链套装',
      nav_view_all_crystals:   '查看全部水晶 →',
      nav_bazi:                '八字分析',
      nav_wealth_prayers:      '财富祈愿',
      nav_contact_us:          '联系我们',
      nav_home:                '首页',

      /* ── Buttons ── */
      btn_shop_crystals:       '选购水晶',
      btn_book_bazi:           '预约八字解读',
      btn_chat_wa:             'WhatsApp 联系',
      btn_contact_wa:          'WhatsApp 联系我们',
      btn_enquire_wa:          'WhatsApp 询价',
      btn_buy_now_wa:          'WhatsApp 立即购买',
      btn_buy_now:             '立即购买',
      btn_add_cart:            '加入购物车',
      btn_show_more:           '显示更多',
      btn_view_bundles:        '查看套装 →',
      btn_build_your_set:      '定制套装',

      /* ── Badges ── */
      badge_bestseller:        '畅销',
      badge_popular:           '热门',
      badge_new:               '新品',

      /* ── Footer (shared) ── */
      footer_tagline:          '水晶手链 · 风水 · 新加坡',
      footer_crystals:         '水晶',
      footer_bazi:             '八字分析',
      footer_prayers:          '财富祈愿',
      footer_contact:          '联系',
      footer_shop:             '购物',
      footer_services:         '服务',
      footer_explore:          '探索',
      footer_legal:            '法律',
      footer_wealth_link:      '财富与丰盛',
      footer_love_link:        '爱情与缘分',
      footer_protection_link:  '防护与接地',
      footer_all_crystals:     '全部水晶',
      footer_consultation:     '水晶咨询',
      footer_our_story:        '关于我们',
      footer_how_it_works:     '工作原理',
      footer_reviews:          '用户评价',
      footer_privacy:          '隐私政策',
      footer_terms:            '服务条款',
      footer_whatsapp_us:      'WhatsApp 联系',
      footer_copyright:        '© 2026 Reiky SG. 保留所有权利。',
      footer_copyright_25:     '© 2025 Reiky SG. 保留所有权利。',

      /* ── Index hero ── */
      hero_eyebrow:            '水晶手链 · 风水 · 新加坡',
      hero_sub:                '精选水晶，承载心意。八字命理指引，财富仪式护航，助你与命运和谐共舞。',
      row_wealth:              '财富与丰盛',
      row_love:                '爱情与缘分',
      row_protection:          '防护与接地',
      row_view_all:            '查看全部',
      cta_personal_rec:        '个人推荐',
      cta_not_sure_title:      '不知道该选哪款？',
      cta_not_sure_sub:        '告诉我们你的信息，我们将根据你的能量、目标和八字为你推荐最合适的水晶。',
      footer_headline:         '水晶与你的能量相互共鸣。',
      footer_shop_crystals:    '选购水晶',

      /* ── Bazi page ── */
      bazi_eyebrow:            '风水服务',
      bazi_h1:                 '八字分析',
      bazi_sub:                '你的命盘蕴藏着命运的蓝图。八字解读揭示你的五行强弱、命运支柱与吉祥时机，让你行事更有方向。',
      bazi_what_eyebrow:       '什么是八字？',
      bazi_four_pillars:       '四柱命理',
      bazi_what_sub:           '八字，又称四柱命理，是以出生日期和时间为基础的中国命理学体系。它描绘了你生命中五行（木、火、土、金、水）的平衡状态，以及它们与你命运周期的互动关系。',
      bazi_year_pillar:        '年柱',
      bazi_year_desc:          '祖先、早年生活，以及你降生时的社会能量。',
      bazi_month_pillar:       '月柱',
      bazi_month_desc:         '父母、事业路径，以及你成年生活的核心。',
      bazi_day_pillar:         '日柱',
      bazi_day_desc:           '自身 — 个性、感情关系与婚姻。',
      bazi_hour_pillar:        '时柱',
      bazi_hour_desc:          '子女、晚年生活，以及你隐藏的天赋。',
      bazi_includes_eyebrow:   '解读内容',
      bazi_includes_title:     '您将获得',
      bazi_process_eyebrow:    '如何进行',
      bazi_process_title:      '简单流程',
      bazi_step1_title:        'WhatsApp 联系我们',
      bazi_step1_desc:         '提供你的完整出生日期、出生时间和出生地点。',
      bazi_step2_title:        '为你准备命盘',
      bazi_step2_desc:         '我们的老师将为你计算并解读四柱命盘。',
      bazi_step3_title:        '接收你的解读',
      bazi_step3_desc:         '书面报告加 20 分钟 WhatsApp 咨询，带你深入理解解读内容。',
      bazi_cta_eyebrow:        '立即预约',
      bazi_cta_title:          '准备好接受解读了吗？',
      bazi_cta_sub:            '在 WhatsApp 上发送你的出生信息，我们将在 24 小时内回复。',
      prompt_label:            '快捷消息 — 点击填写：',
      textarea_ph:             '在此输入你的消息…',

      /* ── Wealth Prayers page ── */
      wp_eyebrow:              '风水服务',
      wp_h1:                   '财富祈愿',
      wp_sub:                  '古法仪式，融入现代生活。开辟财富能量通道，清除阻滞，为你的家宅和事业引入繁荣之流。',
      wp_practice_eyebrow:     '仪式简介',
      wp_practice_title:       '财富祈愿为何有效',
      wp_practice_sub:         '在中国命理学中，意念与仪式能产生共鸣，将你的个人能量与财富之流对齐。结合八字命盘与合适的水晶，财富祈愿可在吉祥时机放大你的好运周期。',
      wp_blockages_title:      '清除阻滞',
      wp_blockages_desc:       '驱散阻碍财富流入你生命的停滞能量。',
      wp_activate_title:       '激活财位',
      wp_activate_desc:        '运用风水原理，激活你家宅或办公室的财富方位。',
      wp_amplify_title:        '水晶加持',
      wp_amplify_desc:         '将祈愿与加持水晶配合使用，增强能量效果。',
      wp_includes_eyebrow:     '服务详情',
      wp_includes_title:       '包含内容',
      wp_process_eyebrow:      '如何进行',
      wp_process_title:        '开始使用',
      wp_step1_title:          '提供你的信息',
      wp_step1_desc:           '发送你的出生日期和财富目标的简短描述。',
      wp_step2_title:          '定制祈愿内容',
      wp_step2_desc:           '我们的老师将仪式与你的五行特征及当前命运周期相结合。',
      wp_step3_title:          '执行与激活',
      wp_step3_desc:           '在规定的日期和时间按照指南进行，以获得最大效果。',
      wp_cta_eyebrow:          '立即开始',
      wp_cta_title:            '迎接丰盛的到来',
      wp_cta_sub:              '在 WhatsApp 上联系我们，开始你的财富祈愿之旅。',

      /* ── All Crystals page ── */
      all_crystals_eyebrow:    '系列',
      all_crystals_h1:         '全部水晶',
      all_crystals_sub:        '每条手链经过精心挑选、净化并注入心意，才会交到你手中。按心意寻找属于你的那一款。',
      shop_by_intent_eyebrow:  '按心意购',
      shop_by_intent_title:    '你在召唤什么？',
      intent_wealth_tag:       '✨ 财富与丰盛',
      intent_love_tag:         '🌸 爱情与缘分',
      intent_protection_tag:   '🛡️ 防护与接地',
      intent_health_tag:       '💚 健康与疗愈',
      intent_wealth_desc:      '吸引财富之流，激活丰盛能量，与富足对齐。',
      intent_love_desc:        '开放心扉，吸引爱情，深化现有关系。',
      intent_protection_desc:  '守护能量，保持接地，阻挡负能量。',
      intent_health_desc:      '支持健康，思绪清明，提升身体活力。',
      intent_shop_wealth:      '选购财富水晶 →',
      intent_shop_love:        '选购爱情水晶 →',
      intent_shop_protection:  '选购防护水晶 →',
      intent_shop_health:      '选购健康水晶 →',
      all_bundles_eyebrow:     '系列',
      all_bundles_title:       '套装礼盒',
      all_bundles_sub:         '精选多手链套装，适合叠戴组合或馈赠礼物。',
      all_contact_eyebrow:     '需要帮助选择？',
      all_contact_title:       '在 WhatsApp 上问我们',
      all_contact_sub:         '不确定哪款水晶适合你？我们来帮你找到最完美的一款。',

      /* ── Wealth crystals page ── */
      wealth_page_eyebrow:     '水晶 / 财富与丰盛',
      wealth_h1:               '✨ 财富与丰盛',
      wealth_sub:              '与富足能量共振的水晶手链，激活财富意识，每日佩戴，持续激活你的心意。',
      wealth_collection_eyebrow: '系列展示',
      wealth_collection_title: '财富手链',
      wealth_how_eyebrow:      '原理解析',
      wealth_how_title:        '这些水晶为何助财',
      wealth_how_sub:          '财富水晶通过与丰盛能量产生共鸣发挥作用。佩戴在手腕——靠近脉搏——作为你心意的持续提醒，全天从能量上支持你的心态。',
      wealth_solar_title:      '太阳神经丛激活',
      wealth_solar_desc:       '黄水晶和虎眼石激发自信与行动力——财富创造的基础。',
      wealth_loss_title:       '防止财富流失',
      wealth_loss_desc:        '黄铁矿在你的财务和商业决策周围建立能量屏障。',
      wealth_harmony_title:    '和谐与流动',
      wealth_harmony_desc:     '绿玉将你的能量与中国命理学中财富自然流动的规律对齐。',
      wealth_cta_eyebrow:      '准备下单？',
      wealth_cta_title:        'WhatsApp 询价',
      wealth_cta_sub:          '告诉我们你感兴趣的手链，我们将回复你库存和价格信息。',

      /* ── Love crystals page ── */
      love_page_eyebrow:       '水晶 / 爱情与缘分',
      love_h1:                 '🌸 爱情与缘分',
      love_sub:                '开放心扉，深化情感纽带，吸引你值得拥有的缘分。与心轮和情感能量共振的水晶。',
      love_collection_title:   '爱情手链',
      love_how_title:          '这些水晶为何助缘',
      love_heart_title:        '心轮开启',
      love_heart_desc:         '粉水晶和蔷薇辉石直接与心能量中心产生共鸣，柔化爱情的阻碍。',
      love_balance_title:      '情感平衡',
      love_balance_desc:       '月光石调和情绪，帮助你在不感到压力的情况下吸引并保持爱的能量。',
      love_healing_title:      '关系疗愈',
      love_healing_desc:       '蔷薇辉石特别擅长治愈过去的伤痛，重建现有关系中的信任。',
      love_cta_title:          'WhatsApp 询价',
      love_cta_eyebrow:        '准备下单？',
      love_cta_sub:            '告诉我们你感兴趣的手链，我们将回复你库存和价格信息。',

      /* ── Protection crystals page ── */
      protection_page_eyebrow: '水晶 / 防护与接地',
      protection_h1:           '🛡️ 防护与接地',
      protection_sub:          '稳固你的能量，抵挡负能量，在你的气场周围建立能量边界。适合高度敏感人士的强效水晶。',
      protection_collection_title: '防护手链',
      protection_how_title:    '这些水晶为何助防护',
      protection_cta_title:    'WhatsApp 询价',
      protection_cta_eyebrow:  '准备下单？',
      protection_cta_sub:      '告诉我们你感兴趣的手链，我们将回复你库存和价格信息。',

      /* ── Health crystals page ── */
      health_page_eyebrow:     '水晶 / 健康与疗愈',
      health_h1:               '💚 健康与疗愈',
      health_sub:              '以促进清晰、活力和内在和谐的水晶支持你的身心健康。',
      health_collection_title: '健康手链',
      health_how_title:        '这些水晶为何助健康',
      health_cta_title:        'WhatsApp 询价',
      health_cta_eyebrow:      '准备下单？',
      health_cta_sub:          '告诉我们你感兴趣的手链，我们将回复你库存和价格信息。',

      /* ── Bundles page ── */
      bundles_page_eyebrow:    '水晶 / 套装礼盒',
      bundles_h1:              '🎁 套装礼盒',
      bundles_sub:             '精心设计的多手链套装，可叠戴多重心意、馈赠礼物，或建立完整的水晶修炼体系。',
      bundles_collection_eyebrow: '系列',
      bundles_collection_title: '精选套装',
      bundles_gifting_eyebrow: '赠礼',
      bundles_gifting_title:   '送出一份有心意的礼物',
      bundles_gift_box_title:  '精美礼盒',
      bundles_gift_box_desc:   '所有套装均附赠品牌礼盒，随时可送。',
      bundles_card_title:      '个性化贺卡',
      bundles_card_desc:       '可添加手写祝福语，适合生日、乔迁或庆典场合。',
      bundles_dispatch_title:  '当日发货',
      bundles_dispatch_desc:   '下午 2 点前下单，全新加坡当日发货。',
      bundles_cta_eyebrow:     '立即下单',
      bundles_cta_title:       '准备好定制你的套装了吗？',
      bundles_cta_sub:         '联系我们，我们将为你或你的礼物收件人搭配完美套装。',

      /* ── Product page (static) ── */
      pdp_home:                '首页',
      pdp_crystals:            '水晶',
      pdp_crystal_props:       '水晶属性',
      pdp_things_to_know:      '注意事项',
      pdp_crystal_care:        '水晶护理',
      pdp_shipping:            '物流与退换',
      pdp_promise:             '我们的承诺',
      pdp_care1:               '每月在流水或月光下净化一次',
      pdp_care2:               '避免长时间直接暴露在阳光下（可能导致某些水晶褪色）',
      pdp_care3:               '勿浸泡盐水 — 会损坏弹力绳',
      pdp_ship1:               '新加坡境内免费配送（1-3 个工作日）',
      pdp_ship2:               '下午 2 点前下单当天发货',
      pdp_ship3:               '未佩戴且原包装完好的商品支持 7 天退货',
      pdp_promise1:            '所有水晶均为天然、道德来源',
      pdp_promise2:            '发货前在月光下注入心意',
      pdp_promise3:            '可按需提供真品证书',
      pdp_per_bracelet:        '/ 条',
      pdp_free_delivery:       '新加坡境内免费配送',
      pdp_note:                '确认库存后，我们将通过 WhatsApp 联系您，届时才会收取费用。',
      pdp_added_to_cart:       '已加入购物车！',

      /* ── Service page (static) ── */
      svc_home:                '首页',
      svc_services:            '服务',
      svc_enquire_wa:          'WhatsApp 询价',
      svc_consultation:        '预约咨询',
      svc_about:               '关于本服务',
    }
  }

  function getLang() {
    return localStorage.getItem('reiky-lang') || 'en'
  }

  function applyI18n(root) {
    var lang = getLang()
    var scope = root || document

    /* Replace textContent for data-i18n elements */
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n')
      var val = DICT[lang] && DICT[lang][key]
      if (val != null) el.textContent = val
    })

    /* Replace placeholder for data-i18n-ph elements */
    scope.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph')
      var val = DICT[lang] && DICT[lang][key]
      if (val != null) el.placeholder = val
    })

    /* Sync html lang attribute */
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'

    /* Update toggle buttons */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文'
    })
  }

  window.toggleLang = function () {
    var next = getLang() === 'en' ? 'zh' : 'en'
    localStorage.setItem('reiky-lang', next)
    applyI18n()
  }

  window.applyI18n = applyI18n

  document.addEventListener('DOMContentLoaded', function () {
    applyI18n()
  })

})()
