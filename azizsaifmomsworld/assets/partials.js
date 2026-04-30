// azizsaifmomsworld — header / footer partials

function renderHeader(active = '') {
  return `
  <div class="announce">Free GCC shipping on orders over <span>AED 200</span> · Organic cotton &amp; TENCEL · Sized 0–6M to adult XXL</div>
  <header class="nav">
    <div class="nav-inner">
      <nav class="nav-links">
        <a href="shop.html" class="${active==='shop'?'active':''}">Shop</a>
        <a href="collections.html" class="${active==='collections'?'active':''}">Collections</a>
        <a href="brands.html" class="${active==='brands'?'active':''}">Brands</a>
        <a href="about.html" class="${active==='about'?'active':''}">Our World</a>
      </nav>
      <a href="index.html" class="brand">azizsaifmomsworld<small>Organic Family Essentials</small></a>
      <div class="nav-actions">
        <a href="contact.html" class="${active==='contact'?'active':''}">Help</a>
        <a href="#" data-account onclick="event.preventDefault(); openAuth();"><span data-account-label>Account</span></a>
        <a class="cart-pill" href="cart.html">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Bag · <span data-cart-count>0</span>
        </a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <section class="news">
    <div class="container">
      <span class="eyebrow">— The Family Letter</span>
      <h2>New drops &amp; <em>little stories</em></h2>
      <p>Soft launches, mama-and-mini styling notes, and gentle reads on growing a family — once a fortnight, never more.</p>
      <form onsubmit="event.preventDefault(); this.querySelector('input').value=''; toast('Welcome to the family');">
        <input type="email" placeholder="your@email.com" required/>
        <button type="submit">Join →</button>
      </form>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">azizsaifmomsworld<small>Organic Family Essentials</small></div>
          <p class="footer-tag">A curated home for organic, hand-finished kids and family clothing — gentle on little skin, kind to the planet, dressed with love in the GCC.</p>
          <div class="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://wa.me/971500000000" target="_blank" rel="noopener" aria-label="WhatsApp"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 1.704.736 2.371.799 3.226.672.522-.078 1.605-.657 1.832-1.291.226-.635.226-1.18.158-1.291-.067-.111-.244-.178-.51-.327"/></svg></a>
            <a href="mailto:hello@azizsaifmomsworld.com" aria-label="Email"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Our World</h4>
          <ul>
            <li><a href="about.html">Our Story</a></li>
            <li><a href="brands.html">Brand Family</a></li>
            <li><a href="collections.html">Collections</a></li>
            <li><a href="contact.html">Help &amp; Care</a></li>
          </ul>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html?cat=baby">Baby (0–24M)</a></li>
            <li><a href="shop.html?cat=kids">Kids (2–10Y)</a></li>
            <li><a href="shop.html?cat=adult">Mama (XS–XXL)</a></li>
            <li><a href="shop.html?cat=matching">Mama &amp; Mini</a></li>
            <li><a href="shop.html?cat=pyjamas">Pyjamas</a></li>
          </ul>
        </div>
        <div>
          <h4>Care</h4>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns &amp; Exchange</a></li>
            <li><a href="#">Garment Care</a></li>
            <li><a href="#">Sizing Guide</a></li>
          </ul>
        </div>
        <div>
          <h4>Hello</h4>
          <ul>
            <li>Dubai, UAE</li>
            <li>+971 50 000 0000</li>
            <li>hello@azizsaifmomsworld.com</li>
            <li>Sun – Thu · 9–6 GST</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="yr"></span> azizsaifmomsworld · All rights reserved</span>
        <span>Prices in AED · IDR rate 4,200 · Payment gateway: integration pending</span>
      </div>
    </div>
  </footer>
  <script>document.getElementById('yr').textContent = new Date().getFullYear();</script>`;
}
