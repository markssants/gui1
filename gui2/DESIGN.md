```markdown
# Design System Document: Techno-Futurism Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Sonic Architect"**

This design system is engineered to capture the high-octane, visceral energy of the underground techno scene. It moves away from the sterile "SaaS" aesthetic toward a **Techno-futurism** identity that feels expensive, cinematic, and authoritative. 

The system breaks the traditional digital template by utilizing aggressive typography scales, intentional asymmetry, and a depth model based on light and glass rather than shadows. We are not just building a website; we are building a digital stage for **PACHECCO**. The interface should feel like a high-end DJ deck: precise, responsive, and glowing in the dark.

---

## 2. Colors
Our palette is rooted in the "Deep Black" of a club environment, punctuated by the high-frequency vibrations of neon and chrome.

*   **Primary (`#72dcff`):** Electric Blue. Use for high-action triggers and focal light bars.
*   **Secondary (`#e46aff`):** Neon Purple. Use for rhythmic accents and secondary information clusters.
*   **Tertiary (`#84a2ff`):** Deep Blue/Chrome. Use for subtle state changes and decorative elements.
*   **Surface Hierarchy:**
    *   `background`: `#0e0e10` (The void)
    *   `surface-container-low`: `#131316` (Base sections)
    *   `surface-container-highest`: `#262529` (Active cards/Glass layers)

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Designers must define boundaries through background shifts or light leaks. A section should sit on `surface` while its content containers use `surface-container-low`. The only "lines" permitted are functional neon light bars (2px+ with glow) or "Ghost Borders" (see Elevation).

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, sticky players) must use **Glassmorphism**. 
*   **Background:** `surface-variant` at 40% opacity.
*   **Backdrop-blur:** 20px - 40px.
*   **Gradients:** Use a linear gradient from `primary` to `primary-container` at a 135-degree angle for CTA buttons to simulate the "soul" of a neon tube.

---

## 3. Typography
The typography system relies on a high-contrast pairing of a technical, wide-set sans-serif and a clean, utilitarian body face.

*   **Display & Headlines (Space Grotesk):** This is our "Cyberpunk" voice. It’s bold and modern. Use `display-lg` (3.5rem) for hero statements with tight letter spacing (-0.02em).
*   **Body & Titles (Manrope):** Our "Readable" voice. Manrope provides a clean, geometric balance to the aggressive headings. Use `body-lg` (1rem) for bios and press quotes to ensure maximum legibility against dark backgrounds.
*   **Labels:** Use `label-md` in uppercase with increased letter spacing (+0.1em) to create a "technical readout" feel, reminiscent of hardware equipment.

---

## 4. Elevation & Depth
In this design system, depth is a product of **Tonal Layering** and light emission.

*   **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. A tracklist should be `surface-container-lowest` nested within a `surface-container-low` section.
*   **Ambient Shadows:** Traditional black shadows are forbidden. If an element must float, use a diffuse glow of the brand colors. Shadow color: `primary` or `secondary` at 10% opacity with a 40px blur.
*   **The "Ghost Border" Fallback:** If a container requires definition, use `outline-variant` at **15% opacity**. This creates a "barely-there" structural hint that feels like polished chrome.
*   **Neon Light Bars:** Inspired by the reference photography, use vertical or horizontal bars (2px width) using `primary` or `secondary` with a CSS `drop-shadow` to simulate light emission.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), black text (`on-primary-fixed`), 0px border-radius. Add a subtle glitch hover effect (0.5s transform shift).
*   **Secondary:** Ghost Border style. `outline-variant` at 20% with `on-surface` text. 
*   **Rounding:** All components must use **0px (Sharp edges)**. This reinforces the brutalist, futuristic aesthetic.

### Input Fields
*   **Style:** `surface-container-highest` background, no border. Bottom-only 2px line in `primary` when focused.
*   **Error State:** Use `error` (`#ff716c`) for text and a 2px bottom border. Avoid red boxes; use red light.

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Execution:** Use `surface-container-low` for the card background and `surface-container-high` for the hover state. Use `body-sm` for metadata and `headline-sm` for titles.
*   **Asymmetry:** Encourage cards of varying widths (e.g., 60% / 40% split) to break the "standard grid" and feel like a curated editorial spread.

### Media Player (Signature Component)
*   **Glassmorphism:** Use a semi-transparent `surface-container-highest` with a 30px backdrop blur.
*   **Visualizer:** Integrate a `primary` color frequency visualizer that mirrors the neon bars in the photography.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme scale. A title can be 120px while the body is 16px.
*   **Do** use "Glitch" transitions for page loads or image hovers.
*   **Do** allow photos of PACHECCO to bleed off the edge of the screen or overlap typography to create depth.
*   **Do** use high-contrast imagery with deep blacks and vibrant neon highlights.

### Don't:
*   **Don't** use rounded corners. Everything is sharp, precise, and architectural (0px).
*   **Don't** use standard 1px borders. If you can't see the container without a border, your background contrast isn't strong enough.
*   **Don't** use generic icons. Use thin-stroke, technical icons that look like blueprint symbols.
*   **Don't** crowd the space. Despite the "high-energy" vibe, whitespace (or "blackspace") is what makes the neon elements pop.