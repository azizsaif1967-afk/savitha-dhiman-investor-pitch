# Elegance Limit — Asset Drop

Drop real shop photos/videos here and update `index.html` to swap placeholder Unsplash URLs.

## Folders
- `photos/` — interior, barbers, work samples (jpg/webp, ~1600–2000 px wide)
- `videos/` — hero loop / gallery clips (mp4, ≤ 8 MB for hero, H.264)

## Swap targets in `index.html`
| Location | Current placeholder | Replace with |
|---|---|---|
| Hero background | `photo-1503951914875-...` | `assets/photos/hero.jpg` |
| About photo | `photo-1622287162716-...` | `assets/photos/about.jpg` |
| CTA band | `photo-1599351431202-...` | `assets/photos/cta.jpg` |
| Gallery (9 tiles) | `photo-*` Unsplash IDs | `assets/photos/gallery-01.jpg` … `gallery-09.jpg` |

## Pricing
Real prices live inline in `index.html` under `#services`. Replace the `From AED X` values with the quotation PDF numbers when available.
