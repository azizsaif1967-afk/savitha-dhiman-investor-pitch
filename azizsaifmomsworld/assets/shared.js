// azizsaifmomsworld — shared data, cart, AED formatter
// Source pricing in IDR (Awan & Co catalogue) → display in AED.
// Rate: 1 AED ≈ 4,200 IDR. USD rate kept for future brands: 1 USD = 3.68 AED.
const FX_IDR_PER_AED = 4200;
const FX_USD_TO_AED = 3.68;

function aed(n) { return 'AED ' + Number(n).toLocaleString('en-AE', { maximumFractionDigits: 0 }); }
function fromIDR(idr) { return Math.round(idr / FX_IDR_PER_AED / 5) * 5; } // round to nearest 5
function fromUSD(usd) { return Math.round(usd * FX_USD_TO_AED); }

const BRANDS = [
  { id: 'awan-co', name: 'Awan & Co', tagline: 'Joy in the Air · Organic kids & family' },
  // Future partner brands plug in here
];

const COLLECTIONS = [
  { id: 'joy-in-the-air',     brand: 'awan-co', name: 'Joy in the Air',     tag: 'Signature kids & baby',   img: 'assets/images/sig-01.jpg' },
  { id: 'whimsical-garden',   brand: 'awan-co', name: 'Whimsical Garden',   tag: 'Pastel pyjama & bunny prints', img: 'assets/images/wg-25.jpg' },
  { id: 'classic-redefined',  brand: 'awan-co', name: 'Classic Redefined',  tag: 'Wardrobe staples · sets & tops', img: 'assets/images/sig-15.jpg' },
  { id: 'mama-and-me',        brand: 'awan-co', name: 'Mama & Me',          tag: 'Adult tees + matching little ones', img: 'assets/images/wg-40.jpg' },
];

// PRODUCTS — names, sizes and IDR prices sampled from the catalogues
const PRODUCTS = [
  // -------- Joy in the Air (signature) --------
  { id: 'aw-001', brand:'awan-co', collection:'joy-in-the-air',    name:'Tiffany Girl Set',                idr:249000, img:'assets/images/sig-08.jpg', tag:'Bestseller', cat:'kids', sizes:['2-3Y','3-4Y','5-6Y'], colors:['White','Yellow'] },
  { id: 'aw-002', brand:'awan-co', collection:'joy-in-the-air',    name:'2pc Unisex Short Sleeves Top',    idr:249000, img:'assets/images/sig-15.jpg', tag:'New',       cat:'kids', sizes:['12-18M','18-24M','2-3Y','3-4Y','5-6Y','7-8Y','9-10Y'], colors:['Blue','Pink'] },
  { id: 'aw-003', brand:'awan-co', collection:'joy-in-the-air',    name:'Soft Rib Bonnet',                 idr:79000,  img:'assets/images/sig-05.jpg', tag:'Baby',      cat:'baby', sizes:['0-6M','6-12M'], colors:['Pink','White','Sage'] },
  { id: 'aw-004', brand:'awan-co', collection:'joy-in-the-air',    name:'Cloud Cotton Tee',                idr:179000, img:'assets/images/sig-20.jpg',                  cat:'kids', sizes:['12-18M','18-24M','2-3Y','3-4Y','5-6Y','7-8Y','9-10Y'], colors:['Black','Cream'] },
  { id: 'aw-005', brand:'awan-co', collection:'joy-in-the-air',    name:'Ruffle Bodysuit',                 idr:189000, img:'assets/images/sig-12.jpg',                  cat:'baby', sizes:['0-6M','6-12M','12-18M'], colors:['Sage','Ivory'] },
  { id: 'aw-006', brand:'awan-co', collection:'joy-in-the-air',    name:'Linen Day Shorts',                idr:199000, img:'assets/images/sig-25.jpg',                  cat:'kids', sizes:['2-3Y','3-4Y','5-6Y','7-8Y','9-10Y'], colors:['Cream'] },

  // -------- Whimsical Garden --------
  { id: 'aw-101', brand:'awan-co', collection:'whimsical-garden',  name:'Whimsical Garden S/S Pyjamas',    idr:279000, img:'assets/images/wg-10.jpg', tag:'New',       cat:'pyjamas', sizes:['2-3Y','3-4Y','4-6Y','7-8Y','9-10Y'], colors:['Sage','Blush'] },
  { id: 'aw-102', brand:'awan-co', collection:'whimsical-garden',  name:'Bunny Collar Baby Dress',         idr:259000, img:'assets/images/wg-15.jpg',                  cat:'baby', sizes:['0-6M','6-12M','12-18M','18-24M'], colors:['Blush','Sage'] },
  { id: 'aw-103', brand:'awan-co', collection:'whimsical-garden',  name:'Loella Bunny TENCEL Adult Tee',   idr:229000, img:'assets/images/wg-25.jpg', tag:'Adult',     cat:'adult', sizes:['XS','S','M','L','XL','XXL'], colors:['Blush','Sage','Cream'] },
  { id: 'aw-104', brand:'awan-co', collection:'whimsical-garden',  name:'Wisteria Long Pyjama Set',        idr:289000, img:'assets/images/wg-30.jpg',                  cat:'pyjamas', sizes:['2-3Y','3-4Y','4-6Y','7-8Y','9-10Y'], colors:['Sage','Cream'] },
  { id: 'aw-105', brand:'awan-co', collection:'whimsical-garden',  name:'Garden Rabbit Bib Set',           idr:159000, img:'assets/images/wg-08.jpg', tag:'Baby',      cat:'baby', sizes:['One Size'], colors:['Sage','Ivory'] },
  { id: 'aw-106', brand:'awan-co', collection:'whimsical-garden',  name:'Bloom Print Romper',              idr:269000, img:'assets/images/wg-20.jpg',                  cat:'baby', sizes:['0-6M','6-12M','12-18M'], colors:['Blush'] },

  // -------- Classic Redefined --------
  { id: 'aw-201', brand:'awan-co', collection:'classic-redefined', name:'Tencel Boy Day Set Nautical',     idr:249000, img:'assets/images/sig-30.jpg', tag:'Tencel',    cat:'kids', sizes:['2-3Y','3-4Y','5-6Y','7-8Y','9-10Y','11-12Y'], colors:['Sky'] },
  { id: 'aw-202', brand:'awan-co', collection:'classic-redefined', name:'Everyday Cotton Romper',          idr:219000, img:'assets/images/sig-22.jpg',                  cat:'baby', sizes:['0-6M','6-12M','12-18M','18-24M'], colors:['Cream','Sage'] },
  { id: 'aw-203', brand:'awan-co', collection:'classic-redefined', name:'Classic Polo Tee',                idr:229000, img:'assets/images/sig-35.jpg',                  cat:'kids', sizes:['2-3Y','3-4Y','5-6Y','7-8Y','9-10Y'], colors:['White','Sage'] },
  { id: 'aw-204', brand:'awan-co', collection:'classic-redefined', name:'Heritage Linen Pant',             idr:259000, img:'assets/images/sig-40.jpg',                  cat:'kids', sizes:['2-3Y','3-4Y','5-6Y','7-8Y','9-10Y'], colors:['Cream'] },

  // -------- Mama & Me --------
  { id: 'aw-301', brand:'awan-co', collection:'mama-and-me',       name:'Mama TENCEL Lounge Tee',          idr:249000, img:'assets/images/wg-40.jpg', tag:'Adult',     cat:'adult', sizes:['XS','S','M','L','XL','XXL'], colors:['Sage','Blush','Cream'] },
  { id: 'aw-302', brand:'awan-co', collection:'mama-and-me',       name:'Mama & Mini Sage Set (matching)', idr:419000, img:'assets/images/wg-45.jpg', tag:'Matching',  cat:'matching', sizes:['Mama S/M/L · Mini 2-6Y'], colors:['Sage'] },
  { id: 'aw-303', brand:'awan-co', collection:'mama-and-me',       name:'Postpartum Soft Robe',            idr:329000, img:'assets/images/wg-48.jpg',                  cat:'adult', sizes:['One Size'], colors:['Cream'] },
];

// derived
PRODUCTS.forEach(p => { p.price = fromIDR(p.idr); });

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function brandName(id) { return (BRANDS.find(b => b.id === id) || {}).name || id; }
function collName(id) { return (COLLECTIONS.find(c => c.id === id) || {}).name || ''; }

// ---------- Cart (localStorage) ----------
const CART_KEY = 'azsmw_cart_v1';
function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function writeCart(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); updateCartCount(); document.dispatchEvent(new CustomEvent('cart:change')); }
function cartCount() { return readCart().reduce((n, i) => n + i.qty, 0); }
function cartTotal() { return readCart().reduce((s, i) => { const p = getProduct(i.id); return p ? s + p.price * i.qty : s; }, 0); }
function addToCart(id, qty = 1, variant = '') {
  const cart = readCart();
  const ex = cart.find(i => i.id === id && i.variant === variant);
  if (ex) ex.qty += qty; else cart.push({ id, qty, variant });
  writeCart(cart);
  toast('Added to bag');
}
function removeFromCart(id, variant = '') { writeCart(readCart().filter(i => !(i.id === id && i.variant === variant))); }
function setQty(id, qty, variant = '') {
  const cart = readCart();
  const ex = cart.find(i => i.id === id && i.variant === variant);
  if (!ex) return;
  ex.qty = Math.max(1, qty);
  writeCart(cart);
}
function updateCartCount() { document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = cartCount(); }); }

function toast(msg) {
  let t = document.getElementById('azsmw-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'azsmw-toast';
    t.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(20px);background:#2c2620;color:#fffdf7;padding:14px 28px;font-size:13px;font-weight:500;z-index:1000;opacity:0;transition:all .3s;border-radius:100px;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
  clearTimeout(t._h);
  t._h = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(20px)'; }, 1800);
}

function productCardHTML(p) {
  return `
  <a href="product.html?id=${p.id}" class="prod-card">
    <div class="prod-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      ${p.tag ? `<span class="prod-tag ${p.tag==='New'?'sage':p.tag==='Adult'||p.tag==='Matching'?'blush':''}">${p.tag}</span>` : ''}
      <div class="quick">Quick view</div>
    </div>
    <div class="brandline">${brandName(p.brand)} · ${collName(p.collection)}</div>
    <div class="name">${p.name}</div>
    <div class="price">${aed(p.price)}</div>
    ${p.sizes ? `<div class="sizes">${p.sizes.length>3?p.sizes[0]+' – '+p.sizes[p.sizes.length-1]:p.sizes.join(' · ')}</div>` : ''}
  </a>`;
}

// ---------- Account / Auth ----------
// Drop in your Google OAuth Client ID from console.cloud.google.com to enable
// real Gmail sign-in. Until then, "Continue with Google" simulates the flow.
const GOOGLE_CLIENT_ID = ''; // e.g. '1234567890-abc.apps.googleusercontent.com'
const ACCT_KEY = 'azsmw_account_v1';

function getAccount() { try { return JSON.parse(localStorage.getItem(ACCT_KEY)); } catch { return null; } }
function setAccount(a) { localStorage.setItem(ACCT_KEY, JSON.stringify(a)); paintAccount(); }
function clearAccount() { localStorage.removeItem(ACCT_KEY); paintAccount(); }

function paintAccount() {
  const a = getAccount();
  document.querySelectorAll('[data-account-label]').forEach(el => {
    el.textContent = a ? (a.name?.split(' ')[0] || 'Account') : 'Account';
  });
}

function openAuth() {
  if (getAccount()) { openProfile(); return; }
  let m = document.getElementById('azsmw-auth');
  if (!m) {
    m = document.createElement('div');
    m.id = 'azsmw-auth';
    m.innerHTML = `
      <div class="auth-backdrop" onclick="closeAuth()"></div>
      <div class="auth-card" role="dialog" aria-modal="true">
        <button class="auth-x" onclick="closeAuth()" aria-label="Close">×</button>
        <div class="auth-head">
          <span class="eyebrow">— Welcome</span>
          <h2 id="auth-title">Sign in to <em>your account</em></h2>
          <p class="muted" style="margin-top:8px;font-size:13px">Track orders, save favourites, and check out faster.</p>
        </div>

        <button type="button" class="auth-google" onclick="signInWithGoogle()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.4 4 9.8 8.4 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8L6.1 33C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.2 5.2C40.9 35.6 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
          Continue with Google
        </button>

        <div class="auth-divider"><span>or</span></div>

        <form class="auth-form" id="auth-form" onsubmit="signInEmail(event)">
          <label>Full name <input id="auth-name" type="text" autocomplete="name" required/></label>
          <label>Email <input id="auth-email" type="email" autocomplete="email" required/></label>
          <label id="auth-pw-wrap">Password <input id="auth-pw" type="password" autocomplete="current-password" minlength="6" required/></label>
          <button type="submit" class="btn btn-block" style="border-radius:100px">Sign in</button>
        </form>

        <p class="auth-toggle muted">
          <span id="auth-mode-text">New here?</span>
          <a href="#" onclick="event.preventDefault(); toggleAuthMode()" id="auth-mode-link">Create an account</a>
        </p>
      </div>`;
    document.body.appendChild(m);
  }
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAuth() {
  const m = document.getElementById('azsmw-auth');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}
let _authMode = 'signin';
function toggleAuthMode() {
  _authMode = _authMode === 'signin' ? 'signup' : 'signin';
  const isSignup = _authMode === 'signup';
  document.getElementById('auth-title').innerHTML = isSignup ? 'Create your <em>account</em>' : 'Sign in to <em>your account</em>';
  document.querySelector('#auth-form button[type=submit]').textContent = isSignup ? 'Create account' : 'Sign in';
  document.getElementById('auth-mode-text').textContent = isSignup ? 'Already have an account?' : 'New here?';
  document.getElementById('auth-mode-link').textContent = isSignup ? 'Sign in' : 'Create an account';
}
function signInEmail(e) {
  e.preventDefault();
  const name = document.getElementById('auth-name').value.trim();
  const email = document.getElementById('auth-email').value.trim();
  setAccount({ name, email, provider: 'email', signedInAt: Date.now() });
  closeAuth();
  toast('Welcome, ' + (name.split(' ')[0] || 'friend'));
}
function signInWithGoogle() {
  if (!GOOGLE_CLIENT_ID) {
    // Demo flow — open a window simulating Google sign-in
    const email = prompt('Continue with Google\n\nEnter your Gmail address (Google OAuth Client ID not configured yet — drop one in shared.js to enable real sign-in):');
    if (!email) return;
    const name = email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g, c=>c.toUpperCase());
    setAccount({ name, email, provider: 'google', signedInAt: Date.now() });
    closeAuth();
    toast('Welcome, ' + name.split(' ')[0]);
    return;
  }
  // Real Google Identity Services flow
  if (!window.google?.accounts?.id) {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.onload = () => signInWithGoogle();
    document.head.appendChild(s);
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: ({credential}) => {
      const payload = JSON.parse(atob(credential.split('.')[1]));
      setAccount({ name: payload.name, email: payload.email, picture: payload.picture, provider: 'google', signedInAt: Date.now() });
      closeAuth();
      toast('Welcome, ' + payload.given_name);
    }
  });
  google.accounts.id.prompt();
}
function openProfile() {
  const a = getAccount();
  if (confirm(`Signed in as ${a.name} (${a.email})\n\nSign out?`)) { clearAccount(); toast('Signed out'); }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderHeader === 'function') {
    const h = document.getElementById('site-header');
    if (h) h.innerHTML = renderHeader(document.body.dataset.page || '');
  }
  if (typeof renderFooter === 'function') {
    const f = document.getElementById('site-footer');
    if (f) f.innerHTML = renderFooter();
  }
  updateCartCount();
  paintAccount();
});
