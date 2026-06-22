# CK CAD Solutions - Portfolio Website

A high-end, responsive, and modern portfolio website for **CK CAD Solutions**, an independent freelance CAD design consultancy founded by Chandrasekar Kumar. 

This website is designed with a premium dark theme, bright red accents, and smooth glassmorphic elements inspired by Autodesk, Tesla, and SpaceX. It is built entirely on vanilla web technologies for lightning-fast performance and clean deployment.

## 🚀 Key Features
- **3D Wireframe Loader:** A custom, purely CSS-animated rotating wireframe cube with a technical initializing sequence.
- **Sequential Entrance Animations:** Staggered fade-and-slide transitions that trigger sequentially upon initial viewport load and scroll events.
- **Fluid & Responsive Typography:** Leverages CSS `clamp()` functions to scale headings and text smoothly from desktop displays down to mobile viewports.
- **Services Grid Section:** 6 interactive glassmorphic service cards outlining design offerings (3D CAD, Marine, Piping/AutoCAD Plant 3D, Drafting, 3D printing optimization, and Industrial support).
- **Interactive Masonry Gallery:** A grayscale-to-color masonry grid showcasing portfolio projects, complete with an interactive click-to-preview Lightbox modal.
- **Scroll Spy Navigation:** Dynamically highlights the current active section in the header menu as the user scrolls.
- **Quote Request Form & Modal:** Connects directly to Formspree for email submission with a real-time loader spinner, success/error feedback boxes, and a built-in WhatsApp click-to-chat fallback button.

## 🛠️ Technology Stack
- **Structure:** Semantic HTML5
- **Style:** Custom Vanilla CSS3 (Custom Variables, Grid/Flexbox, Glassmorphism, Animations)
- **Logic:** Vanilla JavaScript (Intersection Observer, custom `requestAnimationFrame` animated counters, dynamic modals)
- **Icons:** Phosphor Icon Pack
- **Deployment:** Optimized for Cloudflare Pages

## 📦 Project Structure
- `index.html` — Main website markup and structure.
- `styles.css` — Custom design system styles, colors, layouts, and responsiveness.
- `script.js` — All interactive scripts, loaders, counters, modals, and scrolling logic.
- `images/` — Portfolio renders and project images.
- `CLOUDFLARE.md` — Cloudflare Pages deployment configuration guide.

## 🌐 Live Deployment
The project is configured to deploy instantly on **Cloudflare Pages**:
- **Build Command:** `echo "No build required"`
- **Build Output Directory:** `/` (Root directory)

---
*Created for CK CAD Solutions*
