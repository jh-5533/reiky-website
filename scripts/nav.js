/* ═══════════════════════════════════════════════════════
   NAV — Reiky SG
   Edit this file to update the navbar on ALL pages.
   ═══════════════════════════════════════════════════════ */

var NAV_HTML = `
<header class="nav" id="site-nav">
  <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false" id="nav-hamburger">
    <span></span><span></span><span></span>
  </button>

  <a href="/" class="nav-logo">Reiky <span>SG</span></a>

  <nav class="nav-links" aria-label="Primary">

    <!-- CRYSTALS DROPDOWN -->
    <div class="nav-item" id="crystals-nav-item">
      <button class="nav-dropdown-btn" id="crystals-btn" aria-expanded="false" aria-haspopup="true">
        Crystals
        <svg class="nav-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown" id="crystals-dropdown" role="menu">

        <div class="dropdown-section-head">Shop by Intent</div>
        <a href="/crystals/wealth.html" class="dropdown-link">
          <span class="dropdown-link-title">✨ Wealth &amp; Abundance</span>
          <span class="dropdown-link-sub">Citrine, Pyrite, Green Jade</span>
        </a>
        <a href="/crystals/love.html" class="dropdown-link">
          <span class="dropdown-link-title">🌸 Love &amp; Relationships</span>
          <span class="dropdown-link-sub">Rose Quartz, Rhodonite</span>
        </a>
        <a href="/crystals/protection.html" class="dropdown-link">
          <span class="dropdown-link-title">🛡️ Protection &amp; Grounding</span>
          <span class="dropdown-link-sub">Black Tourmaline, Obsidian</span>
        </a>
        <a href="/crystals/health.html" class="dropdown-link">
          <span class="dropdown-link-title">💚 Health &amp; Healing</span>
          <span class="dropdown-link-sub">Amethyst, Clear Quartz</span>
        </a>

        <div class="dropdown-divider"></div>

        <div class="dropdown-section-head">Collections</div>
        <a href="/crystals/bundles.html" class="dropdown-link">
          <span class="dropdown-link-title">🎁 Bundles &amp; Sets</span>
          <span class="dropdown-link-sub">Curated multi-bracelet packs</span>
        </a>
        <a href="/crystals/" class="dropdown-link">
          <span class="dropdown-link-title">View all crystals →</span>
        </a>

      </div>
    </div>

    <!-- BAZI ANALYSIS -->
    <a href="/bazi-analysis.html">Bazi Analysis</a>

    <!-- WEALTH PRAYERS -->
    <a href="/wealth-prayers.html">Wealth Prayers</a>

  </nav>

  <div class="nav-actions">
    <a href="/#contact" class="btn btn-primary" style="font-size:13px;padding:7px 16px;">Contact Us</a>
  </div>
</header>

<!-- Mobile drawer -->
<div class="nav-mobile-overlay" id="nav-overlay"></div>
<div class="nav-mobile-drawer" id="nav-drawer">
  <a href="/">Home</a>

  <button class="nav-mobile-section-btn" id="mob-crystals-btn" style="border:none;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;">
    Crystals
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="nav-mobile-sub" id="mob-crystals-sub">
    <a href="/crystals/wealth.html">✨ Wealth &amp; Abundance</a>
    <a href="/crystals/love.html">🌸 Love &amp; Relationships</a>
    <a href="/crystals/protection.html">🛡️ Protection &amp; Grounding</a>
    <a href="/crystals/health.html">💚 Health &amp; Healing</a>
    <a href="/crystals/bundles.html">🎁 Bundles &amp; Sets</a>
    <a href="/crystals/">View all →</a>
  </div>

  <a href="/bazi-analysis.html">Bazi Analysis</a>
  <a href="/wealth-prayers.html">Wealth Prayers</a>
  <a href="/#contact" style="margin-top:20px;display:inline-block;background:var(--accent);color:#fff;padding:12px 20px;border-radius:8px;font-weight:600;">Contact Us</a>
</div>
`

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('nav-root')
  if (root) root.innerHTML = NAV_HTML

  /* ── Scroll effect ── */
  var nav = document.getElementById('site-nav')
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })

  /* ── Crystals dropdown ── */
  var crystalsItem = document.getElementById('crystals-nav-item')
  var crystalsBtn  = document.getElementById('crystals-btn')
  if (crystalsBtn && crystalsItem) {
    crystalsBtn.addEventListener('click', function (e) {
      e.stopPropagation()
      var open = crystalsItem.getAttribute('data-open') === 'true'
      crystalsItem.setAttribute('data-open', open ? 'false' : 'true')
      crystalsBtn.setAttribute('aria-expanded', open ? 'false' : 'true')
    })
    document.addEventListener('click', function () {
      crystalsItem.setAttribute('data-open', 'false')
      crystalsBtn.setAttribute('aria-expanded', 'false')
    })
  }

  /* ── Mobile hamburger ── */
  var hamburger = document.getElementById('nav-hamburger')
  var drawer    = document.getElementById('nav-drawer')
  var overlay   = document.getElementById('nav-overlay')

  function openDrawer() {
    drawer.classList.add('open')
    overlay.style.display = 'block'
    hamburger.setAttribute('aria-expanded', 'true')
  }
  function closeDrawer() {
    drawer.classList.remove('open')
    overlay.style.display = 'none'
    hamburger.setAttribute('aria-expanded', 'false')
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer)
  if (overlay)   overlay.addEventListener('click', closeDrawer)

  /* ── Mobile sub-menu ── */
  var mobCrystalsBtn = document.getElementById('mob-crystals-btn')
  var mobCrystalsSub = document.getElementById('mob-crystals-sub')
  if (mobCrystalsBtn && mobCrystalsSub) {
    mobCrystalsBtn.addEventListener('click', function () {
      mobCrystalsSub.classList.toggle('open')
    })
  }

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    revealEls.forEach(function (el) { io.observe(el) })
  } else {
    revealEls.forEach(function (el) { el.classList.add('reveal--visible') })
  }
})
