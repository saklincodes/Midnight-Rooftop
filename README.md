# Midnight Rooftop

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5 & SVG](https://img.shields.io/badge/SVG-LineArt-FF5722?logo=html5&logoColor=white)](https://www.w3.org/Graphics/SVG/)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-success)](#)
[![Viewport](https://img.shields.io/badge/Viewport-9%3A16%20%7C%2016%3A9-purple)](#)

A high-performance, minimalist 2-Phase SVG line-drawing sketch animation crafted for short-form video platforms (Instagram Reels, YouTube Shorts, TikTok) and creative web showcases. 

Built with pure Vanilla JavaScript, SVG, and HTML5 Canvas with **zero external dependencies**.

---

## Motivation & Aesthetic Vision

Most online sketch animations suffer from blurry canvas downscaling, heavy external libraries (like GSAP or Vivus), or unoptimized stroke sequences that jump erratically across the screen. 

**Midnight Rooftop** was built with three core design philosophies:
1. **Pristine Contrast**: Deep OLED black (`#000000`) paired with sharp `#ffffff` vector lines. Absolutely zero artificial neon glows, drop shadows, or post-render pulses.
2. **Realistic Drafting Order**: Replicates how a human manga artist illustrates a piece—first locking in the full silhouette contour, then meticulously sketching interior drapery, hair locks, and hands before sweeping through celestial elements.
3. **Platform Ready**: Engineered to render cleanly in both desktop widescreen (`16:9`) and mobile vertical format (`9:16`) without container letterboxing.

---

## Technical Highlights

### 1. Two-Phase Animation Pipeline
- **Phase 1 — Continuous Silhouette Loop (`~7.5s`)**: Traces a single closed mathematical path (`1.4px` stroke width, `1.0` opacity) starting at the highest hair peak `[688, 290]`, following the figure's outer contour down, sweeping along the rooftop base, and ascending the resting arm to seal the loop.
- **Phase 2 — Authentic Internal Detailing (`~4.2s`)**: Draws over 200 authentic manga strokes (`0.85px` stroke width, `0.85` opacity), including hoodie folds, sleeve creases, hand knuckle anatomy, layered hair cascades, ribbon ties, crescent moon, and rooftop structure.

### 2. Nearest-Neighbor Stroke Chaining
To eliminate unnatural cursor jumps between distinct vector paths, interior strokes are sequenced using a **greedy spatial proximity traversal** (nearest-neighbor heuristic). The pen tip glides smoothly to the nearest stroke start or end, creating a continuous, organic hand-drawn cadence.

### 3. Synchronized Stylus & Micro-Particle Trail
- Tracks active drawing points in real-time via SVG parametric length resolution (`path.getPointAtLength`).
- Emits high-DPI micro-sparkles (`Canvas2D`) transformed directly into screen space via `svg.getScreenCTM()`.
- Micro-particles exhibit gentle upward draft and rapid decay (`~250-400ms`), fading away cleanly without cluttering the screen.
- The stylus automatically fades to zero opacity upon sequence completion.

### 4. Zero-Dependency & Pure Offline Execution
No bundlers, no transpilers, no Node modules required at runtime. Works natively directly from the local file system.

---

## Project Structure

```text
Midnight Rooftop/
├── index.html     # Minimal semantic markup with SVG layer stack
├── style.css      # Pure OLED black baseline & typography styles
├── script.js      # Vector path dataset, particle physics & animation controller
└── README.md      # Repository documentation
```

---

## Getting Started

### Local Setup
No build step or server is needed. Simply clone the repository and open `index.html`:

```bash
# Clone the repository
git clone https://github.com/saklincodes/midnight-rooftop.git

# Navigate to folder
cd midnight-rooftop

# Open in default browser (Windows)
start index.html

# Open on macOS
open index.html

# Open on Linux
xdg-open index.html
```

---

## Controls & Interactivity

| Trigger | Action |
|---|---|
| **Click / Tap anywhere** | Replay or restart animation from the beginning |
| **`Spacebar`** | Toggle Pause / Resume |
| **`R` / `r` Key** | Instant restart |
| **Window Resize** | Dynamic re-projection of aspect ratio and viewport bounds |

---

## Responsive Viewport Logic

The project computes view bounds on the fly:
- **Portrait Viewports (`ratio < 1.0`)**: Automatically recalibrates the SVG `viewBox` around `X: 775, Y: 825`, elevating the moon and stars into the upper sky while grounding the rooftop in the lower third—ideal for mobile screens and 9:16 video captures.
- **Landscape Viewports (`ratio >= 1.0`)**: Displays the full cinematic widescreen panoramic composition.

---

## Performance

- **Target Framerate**: 60fps / 120fps (vsync synchronized via `requestAnimationFrame`).
- **Memory Footprint**: `< 15MB` heap overhead.
- **Render Engine**: Hardware-accelerated SVG vectors and `Canvas2D` particles with high-DPI retina display scaling (`window.devicePixelRatio`).

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Author

Crafted with care by **[@saklincodes](https://github.com/saklincodes)** (@saklin_01).  
Feedback, stars, and pull requests are always welcome!
