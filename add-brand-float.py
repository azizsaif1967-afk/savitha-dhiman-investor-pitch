#!/usr/bin/env python3
"""Add floating brand name hero section to all website HTML files. v2 - fixed CSS braces."""
import os
import re

BASE = "/Users/azizsaif/Library/Mobile Documents/com~apple~CloudDocs/Claude websites 2026"


def make_css(accent):
    return f"""
/* ===== FLOATING BRAND HERO ===== */
.hero-brand-section {{
    position: relative;
    background: linear-gradient(135deg, #0a0a0a 0%, #111827 40%, #1a1a2e 60%, #0a0a0a 100%);
    padding: 60px 20px 35px;
    text-align: center;
    overflow: hidden;
    border-bottom: 3px solid {accent};
}}
.hero-brand-section::before {{
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 600px 400px at 50% 50%, {accent}11 0%, transparent 70%);
    pointer-events: none;
}}
.hero-brand-glow {{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(4rem, 15vw, 10rem);
    font-weight: 900;
    color: rgba(255,255,255,0.025);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 0.05em;
    user-select: none;
    text-transform: uppercase;
}}
.hero-brand-float {{
    position: relative;
    z-index: 1;
    font-size: clamp(2.2rem, 7vw, 4.5rem);
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #ffffff 0%, {accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: brandFloat 4s ease-in-out infinite;
}}
.hero-brand-section h1 {{
    position: relative;
    z-index: 1;
}}
.hero-brand-section .subtitle,
.hero-brand-section .sub {{
    position: relative;
    z-index: 1;
}}
@keyframes brandFloat {{
    0%, 100% {{ transform: translateY(0); }}
    50% {{ transform: translateY(-8px); }}
}}
"""


# Files config
FILES = {
    "dubai-personal-trainers-instagram.html": {"brand": "UAE Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "toronto-personal-trainers-instagram.html": {"brand": "Toronto Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "vancouver-personal-trainers-instagram.html": {"brand": "Vancouver Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "montreal-personal-trainers-instagram.html": {"brand": "Montreal Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "calgary-personal-trainers-instagram.html": {"brand": "Calgary Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "edmonton-personal-trainers-instagram.html": {"brand": "Edmonton Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "ottawa-personal-trainers-instagram.html": {"brand": "Ottawa Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "winnipeg-personal-trainers-instagram.html": {"brand": "Winnipeg Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "halifax-personal-trainers-instagram.html": {"brand": "Halifax Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "victoria-personal-trainers-instagram.html": {"brand": "Victoria Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "kelowna-personal-trainers-instagram.html": {"brand": "Kelowna Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "saskatoon-personal-trainers-instagram.html": {"brand": "Saskatoon Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "regina-personal-trainers-instagram.html": {"brand": "Regina Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "quebec-city-personal-trainers-instagram.html": {"brand": "Quebec City Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "london-on-personal-trainers-instagram.html": {"brand": "London ON Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "windsor-on-personal-trainers-instagram.html": {"brand": "Windsor ON Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "stjohns-personal-trainers-instagram.html": {"brand": "St. John's Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "canada-gyms-directory.html": {"brand": "Canada Gyms", "accent": "#e1306c", "type": "simple_h1"},
    "canada-yoga-instructors-instagram.html": {"brand": "Canada Yoga", "accent": "#e1306c", "type": "simple_h1"},
    "canada-martial-arts-instagram.html": {"brand": "Canada Martial Arts", "accent": "#e1306c", "type": "simple_h1"},
    "canada-hiit-coaches-instagram.html": {"brand": "Canada HIIT", "accent": "#e1306c", "type": "simple_h1"},
    "canada-spin-cycling-instagram.html": {"brand": "Canada Cycling", "accent": "#e1306c", "type": "simple_h1"},
    "canada-sports-coaches-instagram.html": {"brand": "Canada Sports", "accent": "#e1306c", "type": "simple_h1"},
    "canada-kids-sports-instagram.html": {"brand": "Canada Kids Sports", "accent": "#e1306c", "type": "simple_h1"},
    "canada-corporate-wellness-instagram.html": {"brand": "Canada Wellness", "accent": "#e1306c", "type": "simple_h1"},
    "canada-group-fitness-instagram.html": {"brand": "Canada Group Fitness", "accent": "#e1306c", "type": "simple_h1"},
    "canada-pilates-instructors-instagram.html": {"brand": "Canada Pilates", "accent": "#e1306c", "type": "simple_h1"},
    "canada-dance-fitness-instagram.html": {"brand": "Canada Dance", "accent": "#e1306c", "type": "simple_h1"},
    "canada-strength-coaches-instagram.html": {"brand": "Canada Strength", "accent": "#e1306c", "type": "simple_h1"},
    "middle-east-chefs-directory.html": {"brand": "Chefs Directory", "accent": "#ff6b35", "type": "simple_h1_sub"},
    "michelin-5star-chefs-directory.html": {"brand": "Elite Chefs", "accent": "#d4af37", "type": "simple_h1"},
    "uae-chefs-instagram.html": {"brand": "UAE Chefs", "accent": "#ff6b35", "type": "header_div"},
    "chef-directory-uae.html": {"brand": "Chef Directory UAE", "accent": "#e94560", "type": "header_div_full"},
    "uae-food-bloggers-partnership.html": {"brand": "UAE Food Bloggers", "accent": "#ff6b35", "type": "simple_h1_sub"},
    "ramadan-majlis-faith-morals-islam.html": {"brand": "The Ramadan Majlis", "accent": "#C9A44A", "type": "skip_hero_exists"},
}


def strip_old_brand(content):
    """Remove previously injected brand CSS and HTML to start fresh."""
    # Remove old broken CSS block
    content = re.sub(r'\n/\* ===== FLOATING BRAND HERO ===== \*/.*?(?=\n</style>)', '', content, flags=re.DOTALL)
    # Remove hero-brand-section wrapper (unwrap it)
    content = re.sub(r'<div class="hero-brand-section">\s*<div class="hero-brand-glow">.*?</div>\s*<div class="hero-brand-float">.*?</div>\s*', '', content)
    # Remove closing div of hero-brand-section (the one right after subtitle)
    # This is tricky - find the pattern: </p>\n</div>\n\n<div class="stats (or filter)
    content = re.sub(r'(</p>)\s*\n</div>\s*\n(\s*<div class="stats)', r'\1\n\2', content)
    content = re.sub(r'(</p>)\s*\n</div>\s*\n(\s*<div class="cta)', r'\1\n\2', content)
    content = re.sub(r'(</p>)\s*\n</div>\s*\n(\s*\n<div class="stats)', r'\1\n\2', content)
    content = re.sub(r'(</p>)\s*\n</div>\s*\n(\s*\n<div class="filter)', r'\1\n\2', content)
    # For header_div types - remove the added classes and brand elements
    content = re.sub(r'<div class="header hero-brand-section"[^>]*>\s*<div class="hero-brand-glow">.*?</div>\s*<div class="hero-brand-float">.*?</div>', '<div class="header">', content, flags=re.DOTALL)
    # For ramadan - remove inline glow
    content = re.sub(r'\s*<div class="hero-brand-glow" style="[^"]*">.*?</div>\s*', '\n        ', content)
    return content


def process_file(content, brand, accent, ftype):
    """Process a single file based on its type."""
    # First strip any old injection
    content = strip_old_brand(content)

    if 'hero-brand-section' in content and ftype != 'header_div' and ftype != 'header_div_full':
        return content  # Already has it and we couldn't strip

    css = make_css(accent)

    if ftype in ("simple_h1", "simple_h1_sub"):
        # Add CSS
        content = content.replace('</style>', css + '</style>')

        # Determine subtitle class
        sub_class = "subtitle" if ftype == "simple_h1" else "sub"

        # Find h1 + subtitle after <body>
        pattern = rf'(<body[^>]*>\s*\n?\s*)\n?(<h1>.*?</h1>)\s*\n(\s*<p class="{sub_class}">.*?</p>)'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            body_tag = match.group(1)
            h1 = match.group(2)
            subtitle = match.group(3)
            hero_html = f'''{body_tag}
<div class="hero-brand-section">
    <div class="hero-brand-glow">{brand}</div>
    <div class="hero-brand-float">{brand}</div>
    {h1.strip()}
    {subtitle.strip()}
</div>'''
            content = content[:match.start()] + hero_html + content[match.end():]

    elif ftype == "header_div":
        content = content.replace('</style>', css + '</style>')
        old = '<div class="header">'
        new = f'''<div class="header hero-brand-section" style="background:linear-gradient(135deg,#0a0a0a 0%,#111827 40%,#1a1a2e 60%,#0a0a0a 100%);">
    <div class="hero-brand-glow">{brand}</div>
    <div class="hero-brand-float">{brand}</div>'''
        content = content.replace(old, new, 1)

    elif ftype == "header_div_full":
        content = content.replace('</style>', css + '</style>')
        old = '<div class="header">'
        new = f'''<div class="header hero-brand-section">
<div class="hero-brand-glow">{brand}</div>
<div class="hero-brand-float">{brand}</div>'''
        content = content.replace(old, new, 1)

    elif ftype == "skip_hero_exists":
        # Ramadan - just add the glow text
        old = '<div class="hero-content">\n        <div class="badge-row">'
        new = f'''<div class="hero-content">
        <div class="hero-brand-glow" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:clamp(4rem,15vw,10rem);font-weight:900;color:rgba(255,255,255,0.025);white-space:nowrap;pointer-events:none;letter-spacing:0.05em;user-select:none;text-transform:uppercase;">{brand}</div>
        <div class="badge-row">'''
        content = content.replace(old, new)

    return content


def main():
    processed = 0
    skipped = 0
    errors = []

    for filename, config in FILES.items():
        filepath = os.path.join(BASE, filename)
        if not os.path.exists(filepath):
            errors.append(f"NOT FOUND: {filename}")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()

        new_content = process_file(original, config["brand"], config["accent"], config["type"])

        if new_content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            processed += 1
            print(f"  OK: {filename}")
        else:
            skipped += 1
            print(f"SKIP: {filename}")

    print(f"\nDone! Processed: {processed}, Skipped: {skipped}")
    if errors:
        print("Errors:", errors)


if __name__ == "__main__":
    main()
