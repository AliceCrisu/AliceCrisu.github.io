# Website Vibe & Visual Description

## Overall Aesthetic

This is a **bold, editorial-style portfolio website** for Alice, a UI/UX designer. The design language is minimalist yet impactful, drawing heavy inspiration from magazine layouts and high-contrast typography.

## Color Palette

- **Primary**: Pure black (#000000) and pure white (#FFFFFF)
- **Accent**: Soft grays for hover states and secondary text (#d4d4d4, #b8b8b8)
- The site operates on a strict **monochrome palette**, creating a timeless, professional feel

## Typography

The typography is the soul of this design:

- **Inter**: Used for body text and general UI - clean, modern sans-serif
- **Anton**: Display font for navigation and headings - bold, condensed, magazine-style
- **Montserrat**: Used for longer-form content and descriptions

Extremely generous **letter-spacing** (tracking) is used throughout, especially on subtitles where spacing can reach up to 93px. This creates a luxury editorial feel reminiscent of high-fashion magazines.

## Layout Philosophy

- **Full-bleed black content blocks** against white backgrounds create strong visual rhythm
- Content is framed with **thick white borders** (8px) giving elements a structured, almost photographic feel
- **Vertical navigation** on the right side (desktop) rotates text 90 degrees - a distinctive design choice
- Generous padding and spacing throughout - the design breathes

## Hero Section - The Signature Element

The hero is the most distinctive feature:

- Features an **interactive lightbulb** that toggles between dark and light modes
- **Dark mode**: Black background with the tagline "Let's Turn Sparks Into Solutions"
- **Light mode**: Reveals a warmer gray background with "Now let's make your idea shine" and an input field for visitors to share their ideas
- When the light turns on, multiple radial gradient layers create a **realistic lightbulb glow effect** that fills the viewport
- This interaction embodies the designer's philosophy - bringing ideas to light

## Content Sections

### Projects
- 2x2 grid layout plus a full-width feature project
- Cards have **image backgrounds with dark overlays** and bottom text panels
- Hover effects scale cards subtly (1.02x)
- Projects span diverse domains: fitness apps, strategic platforms, pet apps, gaming

### About
- Split layout: Photo on left, bio text on right
- Skills displayed as a 2x2 grid of cards with icons
- Personal story emphasizes **discipline (karate background)** and **thoughtfulness (philosophy studies)**

### Gallery
- **Bento-grid layout** with varying cell sizes (spanning 1-2 columns/rows)
- Creates visual interest through asymmetry
- Images are framed with thick white borders against black

### Contact
- Centered contact links with pipe separators
- Clean form with **black-bordered inputs** on white
- Button inverts on hover (black to white)

## Interactive Elements

- **Smooth scrolling** between sections
- **Active section highlighting** in navigation
- **Project detail overlay** - full-screen modal for project deep-dives
- CSS animations for lightbulb including pulse, flicker, and scale effects

## Responsive Behavior

- Navigation moves from vertical (desktop) to horizontal bottom bar (mobile)
- Grid layouts collapse to single column
- Typography scales fluidly using `clamp()` functions
- Borders thin on mobile for better proportions

## The Vibe in One Sentence

**A confident, editorial portfolio that treats design work like art in a gallery - bold black frames against white walls, with an unexpected spark of interactivity that invites visitors to turn on the light and share their ideas.**