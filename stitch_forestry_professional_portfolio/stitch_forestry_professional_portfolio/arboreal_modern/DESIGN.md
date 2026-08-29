---
name: Arboreal Modern
colors:
  surface: '#f9faf6'
  surface-dim: '#dadad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f1'
  surface-container: '#eeeeeb'
  surface-container-high: '#e8e8e5'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f0f1ee'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#7f5539'
  on-secondary: '#ffffff'
  secondary-container: '#fec6a3'
  on-secondary-container: '#795035'
  tertiary: '#401b1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a302f'
  on-tertiary-container: '#d29895'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#ffdcc7'
  secondary-fixed-dim: '#f2bb98'
  on-secondary-fixed: '#301401'
  on-secondary-fixed-variant: '#643e24'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#f5b7b4'
  on-tertiary-fixed: '#331111'
  on-tertiary-fixed-variant: '#673a39'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3e0'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is engineered for a premium, professional portfolio that bridges the gap between field technology and academic research. The brand personality is authoritative, ecological, and sophisticated—evoking the feeling of a modern scientific journal or a high-end environmental publication.

The visual style utilizes **Modern Minimalism** fused with **Glassmorphism**. It prioritizes high whitespace to allow high-resolution nature photography to breathe, while using translucent UI layers to create a sense of depth without clutter. The emotional response should be one of trust, environmental stewardship, and technical precision.

## Colors
The palette is deeply rooted in the natural world. **Deep Forest Green** serves as the primary anchor for text and high-importance UI elements, ensuring a strong, professional presence. **Earth Brown** is used for structural accents and secondary actions. 

The **Off-white** background provides a crisp, paper-like canvas. Accents are used sparingly: **Sage Green** for success states and background washes, **Terracotta** for subtle warnings or "organic" highlights, and **Gold** exclusively for achievements, high-level credentials, or premium interactive states. Nature-inspired gradients should transition from Primary Green to Sage Green at 15-degree angles.

## Typography
The typography system balances the architectural strength of **Manrope** with the utilitarian clarity of **Inter**. 

Headlines use tight tracking and bold weights to convey authority in research and technology. Body text is set with generous line height to ensure maximum readability for long-form case studies or research abstracts. Use `label-caps` for metadata, categories (e.g., "GIS MAPPING", "SILVICULTURE"), and overlines to provide a disciplined, editorial structure.

## Layout & Spacing
This design system employs a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. The desktop layout is centered within a 1200px container using a 12-column structure. 

Spacing follows a strict 8px base unit. Section gaps are intentionally large (120px+) to maintain a "National Geographic" editorial feel, ensuring that each project or research summary feels like a distinct chapter. Content should be staggered—some elements spanning 6 columns for text, others spanning 10 or 12 for immersive forest imagery or data visualizations.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Ambient Shadows**. Instead of solid cards, use semi-transparent surfaces with a `backdrop-filter: blur(12px)`.

- **Surface Level:** The Off-white background.
- **Card Level:** 60% opacity white fill with a 1px stroke of 10% Primary Green.
- **Shadows:** Use extremely soft, long-range shadows (Blur: 40px, Spread: -10px, Color: rgba(27, 67, 50, 0.08)) to make cards appear as if they are floating gently above the terrain.
- **Botanical Layers:** Subtle, low-opacity SVG botanical patterns (ferns, pine needles) should be placed *behind* glass cards to create a parallax sense of looking through a canopy.

## Shapes
The shape language is organic yet controlled. Standard UI elements like buttons and input fields use an 8px radius (`rounded-md`). Main feature cards, image containers, and "Glass" modules utilize a more pronounced 16px to 24px radius (`rounded-xl` to `rounded-2xl`) to mimic the softness of natural forms. 

Interactive elements should never be sharp; even progress bars and tags should maintain a minimum 4px radius to align with the approachable nature of the brand.

## Components
- **Buttons:** Primary buttons are solid Deep Forest Green with white text and a 12px corner radius. Secondary buttons use an Earth Brown "Ghost" style with a 1.5px border.
- **Glass Cards:** Used for research highlights. Features a subtle white-to-transparent gradient, blur effect, and a 1px inner highlight on the top edge to simulate light hitting glass.
- **Status Chips:** For "Sustainability" or "GIS" tags, use a Sage Green background at 15% opacity with Deep Forest Green text.
- **Inputs:** Fields should have a light cream fill and a bottom-border-only focus state in Earth Brown to maintain a clean, "notebook" aesthetic.
- **Data Visualizations:** Charts and graphs should utilize the Earth Brown and Sage Green palette, avoiding standard "digital" blues or reds.
- **Icons:** Use Lucide icons with a 1.5px stroke width. Icons related to Forestry (Tree, Leaf, Map, Satellite, Scale) should be encased in a soft circular background wash of Sage Green.