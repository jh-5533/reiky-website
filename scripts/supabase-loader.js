/* ═══════════════════════════════════════════════════════════════
   Reiky SG — Supabase Product Loader
   Loads product data from Supabase when configured.
   Falls back silently to the static PRODUCTS object if Supabase
   is not configured or returns no data.

   SETUP:
   1. Run the migration in reiky-dashboard/supabase/schema.sql
   2. Paste your Supabase anon key below (safe to expose publicly)
      → Supabase Dashboard → Settings → API → "anon / public" key
   3. Set products to status='published' in the dashboard
   ═══════════════════════════════════════════════════════════════ */

var SUPABASE_URL      = 'https://ygnuwizykwebcbzeomgk.supabase.co'
var SUPABASE_ANON_KEY = '' /* ← paste your anon key here */

/* ── Category display map ─────────────────────────────────────── */
var CATEGORY_MAP = {
  wealth:     { label: 'Wealth & Abundance',    emoji: '✨' },
  love:       { label: 'Love & Relationships',  emoji: '🌸' },
  protection: { label: 'Protection & Grounding', emoji: '🛡️' },
}

/* ── Property display config (object → array conversion) ─────── */
var PROP_ORDER = ['chakra','element','origin','hardness','colour','zodiac','intention','bead_size']
var PROP_ICONS  = { chakra:'🌀', element:'🔥', origin:'🌍', hardness:'💎', colour:'🎨', zodiac:'♈', intention:'✨', bead_size:'📿' }
var PROP_LABELS = { chakra:'Chakra', element:'Element', origin:'Origin', hardness:'Hardness', colour:'Colour', zodiac:'Zodiac', intention:'Intention', bead_size:'Bead Size' }

/* ── Convert DB crystal row → PRODUCTS-compatible object ─────── */
function normalizeFromDB(crystal) {
  var cat = CATEGORY_MAP[crystal.category] || { label: crystal.category || '', emoji: '' }

  // properties: DB stores {chakra, element, …} object; website expects [{icon, label, value}]
  var propsObj = crystal.properties || {}
  var properties = PROP_ORDER
    .filter(function(k) { return propsObj[k] })
    .map(function(k) { return { icon: PROP_ICONS[k] || '•', label: PROP_LABELS[k] || k, value: propsObj[k] } })

  // highlights: DB uses 'description' key; website template uses 'desc'
  var highlights = (crystal.highlights || []).map(function(h) {
    return { icon: h.icon || '', title: h.title || '', desc: h.description || h.desc || '' }
  })

  // images sorted by sort_order → array of URLs
  var images = (crystal.crystal_images || [])
    .sort(function(a, b) { return (a.sort_order || 0) - (b.sort_order || 0) })
    .map(function(img) { return img.url })

  var priceNum = crystal.display_price_sgd
  var price = priceNum
    ? '$' + Number(priceNum).toFixed(2) + ' SGD'
    : null  // caller falls back to static PRODUCTS price if null

  return {
    _fromDB:      true,
    name:         crystal.name,
    stone:        crystal.stone_type  || '',
    category:     cat.label,
    categorySlug: crystal.category   || '',
    categoryEmoji:cat.emoji,
    price:        price,
    rating:       typeof crystal.rating       === 'number' ? crystal.rating       : 5.0,
    reviewCount:  typeof crystal.review_count === 'number' ? crystal.review_count : 0,
    badge:        crystal.badge || null,
    imgClass:     'ccard-img--' + crystal.slug,  // CSS gradient fallback
    images:       images,
    highlights:   highlights,
    description:  crystal.description || '',
    properties:   properties,
    reviews:          [],
    ratingBreakdown:  [],
  }
}

/* ── Build Supabase client (only when configured) ─────────────── */
function _getClient() {
  if (!SUPABASE_ANON_KEY) return null
  if (typeof window.supabase === 'undefined') return null
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}

/* ── Public API ───────────────────────────────────────────────── */

/**
 * Load a single published product by slug.
 * Falls back to PRODUCTS[slug] if Supabase is unavailable or returns nothing.
 */
window.loadProduct = function(slug, callback) {
  var client = _getClient()
  if (!client) { callback(window.PRODUCTS ? window.PRODUCTS[slug] : null); return }

  client
    .from('crystals')
    .select('*, crystal_variants(*), crystal_images(*)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
    .then(function(res) {
      if (res.error || !res.data) { callback(window.PRODUCTS ? window.PRODUCTS[slug] : null); return }
      var p = normalizeFromDB(res.data)
      // Backfill price from static if DB product has no display_price_sgd yet
      if (!p.price && window.PRODUCTS && window.PRODUCTS[slug]) p.price = window.PRODUCTS[slug].price
      callback(p)
    })
    .catch(function() { callback(window.PRODUCTS ? window.PRODUCTS[slug] : null) })
}

/**
 * Load a single published service by slug.
 */
window.loadService = function(slug, callback) {
  var client = _getClient()
  if (!client) { callback(null); return }

  client
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
    .then(function(res) {
      if (res.error || !res.data) { callback(null); return }
      callback(res.data)
    })
    .catch(function() { callback(null) })
}

/**
 * Load a service via a secret link token.
 */
window.loadServiceBySecret = function(token, callback) {
  var client = _getClient()
  if (!client) { callback(null); return }

  client
    .from('secret_links')
    .select('*, services(*)')
    .eq('token', token)
    .eq('is_active', true)
    .single()
    .then(function(res) {
      if (res.error || !res.data || !res.data.services) { callback(null); return }
      var s = res.data.services
      if (res.data.custom_price) s = Object.assign({}, s, { _customPrice: res.data.custom_price })
      callback(s)
    })
    .catch(function() { callback(null) })
}

/**
 * Load a product via a secret link token (status='secret' allowed).
 * Falls back to null (secret products have no static fallback).
 */
window.loadProductBySecret = function(token, callback) {
  var client = _getClient()
  if (!client) { callback(null); return }

  client
    .from('secret_links')
    .select('*, crystals(*, crystal_variants(*), crystal_images(*))')
    .eq('token', token)
    .eq('is_active', true)
    .single()
    .then(function(res) {
      if (res.error || !res.data || !res.data.crystals) { callback(null); return }
      var p = normalizeFromDB(res.data.crystals)
      // Apply custom price from secret link if set
      if (res.data.custom_price) {
        p.price = '$' + Number(res.data.custom_price).toFixed(2) + ' SGD'
        p._secretCustomPrice = true
      }
      callback(p)
    })
    .catch(function() { callback(null) })
}
