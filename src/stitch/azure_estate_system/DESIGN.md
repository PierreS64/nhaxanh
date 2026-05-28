---
name: Azure Estate System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434751'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737782'
  outline-variant: '#c3c6d2'
  surface-tint: '#345da6'
  primary: '#002c66'
  on-primary: '#ffffff'
  primary-container: '#10428a'
  on-primary-container: '#8cb1ff'
  inverse-primary: '#adc6ff'
  secondary: '#b71421'
  on-secondary: '#ffffff'
  secondary-container: '#db3336'
  on-secondary-container: '#fffbff'
  tertiary: '#002c65'
  on-tertiary: '#ffffff'
  tertiary-container: '#004190'
  on-tertiary-container: '#8cb1ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#14448c'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-page: 2rem
  gutter: 1.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  container-max: 1200px
---

## Brand & Style

The design system is built on a foundation of **Modern Corporate** aesthetics with a touch of **Soft Minimalism**. It aims to evoke a sense of reliability, premium quality, and effortless clarity, essential for high-stakes real estate transactions.

The visual language is characterized by:
- **Depth through layering:** Using subtle background shifts and soft shadows to organize information without visual clutter.
- **Approachable Professionalism:** A balance of sharp editorial layouts with rounded, friendly corners.
- **Clarity of Action:** High-contrast primary actions set against a calm, neutral backdrop to guide the user toward conversion points like registration and search.

## Colors

The palette is anchored by a deep, authoritative primary blue, supported by a functional secondary palette for high-urgency actions and accents.

- **Primary (#10428A):** Used for navigation bars, primary buttons, and significant brand moments.
- **Secondary (#F24444):** Reserved strictly for high-visibility contact actions (e.g., "Call Now") and error states.
- **Tertiary (#3B82F6):** A lighter blue used for secondary digital actions (e.g., social chat buttons) and informative badges.
- **Neutrals:** The background system relies on a very soft gray (#F8FAFC) to differentiate from pure white surfaces (#FFFFFF), creating a sense of premium depth.
- **Success/Status:** Use a soft emerald green for positive status indicators like "Available" or "Verified."

## Typography

This design system utilizes **Plus Jakarta Sans** across all levels to maintain a contemporary, welcoming, and highly legible interface. 

- **Hierarchy:** Use bold weights for headlines to create a strong vertical rhythm. 
- **Readability:** Body text should maintain a 1.5x to 1.6x line height to ensure comfortable reading of property descriptions and terms.
- **Data Display:** For tabular data or price listings, use semi-bold weights to ensure the information stands out against labels.

## Layout & Spacing

The system uses a **Fluid Grid** approach for internal components and a **Max-Width Fixed Container** for page-level layouts to ensure readability on wide displays.

- **Grid:** A 12-column grid is used for desktop layouts, collapsing to 4 columns on mobile.
- **Padding:** Content cards and containers use generous internal padding (typically 24px) to emphasize the "Premium" feel.
- **Login/Registration Layout:** For authentication screens, use a centered fixed-width card (400px - 450px) or a split-screen layout (Image left / Form right) to maintain focus and brand immersion.

## Elevation & Depth

Hierarchy is achieved primarily through **Tonal Layers** and **Ambient Shadows**.

- **Surface Levels:** 
  - Level 0: Background (#F8FAFC).
  - Level 1: Primary Cards/Containers (#FFFFFF).
- **Shadows:** Use extremely soft, high-diffusion shadows (e.g., `0px 4px 20px rgba(0, 0, 0, 0.05)`) for interactive elements like input cards and search bars. 
- **Outlines:** Use low-contrast 1px borders (#E2E8F0) for form fields and table rows to provide structure without the weight of heavy shadows.

## Shapes

The shape language is consistently **Rounded**, reinforcing the approachable brand personality.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main search containers and feature cards use a 1rem (16px) or 1.5rem (24px) radius to create a soft, modern silhouette.
- **Icons:** Icons should be contained within circular or highly rounded soft-square backgrounds when used as category indicators.

## Components

### Buttons
- **Primary:** Solid Primary Blue with white text. High-contrast, rounded (8px).
- **Secondary/Ghost:** Primary Blue border with transparent background or light gray background.
- **Special Action:** Solid Red for urgent contact triggers.

### Input Fields (Login/Reg)
- **Style:** White background with a soft gray 1px border. 
- **Focus State:** Border changes to Primary Blue with a subtle outer glow.
- **Labels:** Positioned above the field in `label-md` semi-bold.

### Cards
- White background, 16px corner radius, and a subtle ambient shadow.
- Content should be padded by at least 24px.

### Chips & Badges
- Used for property status (e.g., "Available"). 
- Light tinted backgrounds (e.g., light green) with dark text for high legibility.

### Authentication Specifics
- **Social Login:** Use outlined buttons with brand-specific icons (Google, Facebook) to distinguish from the primary email registration path.