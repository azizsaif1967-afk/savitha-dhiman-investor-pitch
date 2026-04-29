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
});
