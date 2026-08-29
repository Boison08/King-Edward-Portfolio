---
name: Arboreal Midnight
colors:
  surface: '#061611'
  surface-dim: '#061611'
  surface-bright: '#2c3d36'
  surface-container-lowest: '#03110c'
  surface-container-low: '#0e1f19'
  surface-container: '#13231d'
  surface-container-high: '#1d2d27'
  surface-container-highest: '#283832'
  on-surface: '#d4e7de'
  on-surface-variant: '#bfc9c1'
  inverse-surface: '#d4e7de'
  inverse-on-surface: '#23342e'
  outline: '#8a938c'
  outline-variant: '#404943'
  surface-tint: '#95d4b3'
  primary: '#95d4b3'
  on-primary: '#003824'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#2c694e'
  secondary: '#e1c298'
  on-secondary: '#402d0f'
  secondary-container: '#594323'
  on-secondary-container: '#cfb088'
  tertiary: '#a5d0b9'
  on-tertiary: '#0e3727'
  tertiary-container: '#3f6754'
  on-tertiary-container: '#b8e3cb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#e1c298'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#594323'
  tertiary-fixed: '#c1ecd4'
  tertiary-fixed-dim: '#a5d0b9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#274e3d'
  background: '#061611'
  on-background: '#d4e7de'
  surface-variant: '#283832'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: manrope
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system evolves into a premium, immersive dark-themed experience that evokes the stillness of an ancient forest at night. It is tailored for high-end sustainable luxury, environmental technology, or premium botanical brands. 

The style is **Modern Glassmorphism** layered over a deep, organic foundation. The UI should feel quiet, sophisticated, and deep, utilizing light and transparency rather than heavy shadows to define hierarchy. The emotional response is one of calm, reliability, and mystery, moving away from the brightness of day into a more focused, cinematic digital environment.

## Colors
The palette is rooted in a very deep forest green (`#061611`), serving as the primary canvas. 
- **Primary Green:** Shifted to a more luminous emerald-forest tone to ensure it "glows" against the dark background.
- **Earth Brown:** Desaturated and lightened to a warm sand/taupe to serve as a high-contrast accent for interactive elements.
- **Tonal Tiers:** Depth is achieved by stepping up from the base (`#061611`) to a container level (`#0B221B`) and a highlight level (`#132E25`).
- **Glass Tint:** Semi-transparent surfaces use a subtle green-tinted blur to maintain the organic theme while providing separation.

## Typography
Typography balances modern precision with a friendly, organic touch. 
- **Headlines:** Use **Manrope** for a refined, balanced look. In this dark mode, headlines should use the Primary Text color (`#F0F5F3`) for maximum legibility.
- **Body:** **Be Vietnam Pro** provides a warm and contemporary feel, ensuring long-form content remains approachable. 
- **Labels:** **JetBrains Mono** is introduced for metadata and small labels to provide a "technical-botanical" aesthetic, reminiscent of field notes or specimen tags.
- **Hierarchy:** Use weight and slight color shifts (Secondary Text) rather than drastic size changes to maintain a premium feel.

## Layout & Spacing
This design system utilizes a **Fluid Grid** model with a soft 8px rhythm. 
- **Desktop:** 12-column grid with 24px gutters and 48px outer margins.
- **Tablet:** 8-column grid with 20px gutters and 32px outer margins.
- **Mobile:** 4-column grid with 16px gutters and 16px outer margins.
Layouts should favor ample whitespace (negative space) to allow the deep background and glass effects to breathe. Content containers should be logically grouped using the vertical spacing scale to define clear content sections.

## Elevation & Depth
Elevation is communicated through **translucency and tonal shifts** rather than traditional black shadows.
- **Level 1 (Base):** Deep Forest (`#061611`).
- **Level 2 (Containers):** Surface Green (`#0B221B`) with a subtle 1px border (`#1A362E`).
- **Level 3 (Floating/Glass):** Glassmorphism effect using a backdrop blur (12px to 20px) and a semi-transparent fill.
- **Highlighting:** Use "inner glows" (a subtle, 1px top border of `#2D6A4F` at 30% opacity) to give glass cards a polished, premium edge that catches the "light" from above.

## Shapes
Shapes are intentionally soft to contrast the technical precision of the dark theme. 
- **Standard Radius:** 0.5rem for buttons and small inputs.
- **Container Radius:** 1.5rem (`rounded-xl`) for cards and main UI shells to create a modern, organic silhouette.
- **Interactive States:** Maintain consistent corner radii during hover or active states to ensure the UI feels stable and well-constructed.

## Components
- **Buttons:** Primary buttons use the Earth Brown accent (`#A68A64`) with dark text for high visibility. Secondary buttons should be glass-styled with a subtle light-green border.
- **Glass Cards:** Use a 1px border of `rgba(255, 255, 255, 0.1)` and a `backdrop-filter: blur(16px)`. This ensures they remain distinct over the dark base.
- **Inputs:** Fields should use the Surface Container color (`#0B221B`) with a focus state that illuminates the border in Primary Green (`#2D6A4F`).
- **Chips/Labels:** Use the JetBrains Mono font. For status indicators, use low-saturation versions of the accent colors to avoid "neon" vibration against the dark background.
- **Progress Indicators:** Use thin, elegant lines. A glowing effect (small box-shadow with color) is permitted for active progress to simulate light within the forest.