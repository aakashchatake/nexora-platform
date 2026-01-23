# NEXORA DESIGN SYSTEM - OFFICIAL SPECS

**Source**: NEXORA.pdf - Definitive Design Language  
**Status**: ✅ Production Ready  
**Updated**: January 23, 2026

---

## OFFICIAL COLORS

### Primary
- **Brand Black**: `#0B0B0B` (primary backgrounds, text, filled buttons)
- **Brand Orange**: `#FF6A00` (THE ONLY accent - links, active states, notifications)
- **Surface White**: `#FFFFFF` (main backgrounds)

### Grey Scale (Warm Neutral)
- **Grey 900**: `#121212` (dropdown backgrounds - inverse theme)
- **Grey 700**: `#2A2A2A` (footer backgrounds)
- **Grey 500**: `#6B6B6B` (body text, descriptions, metadata)
- **Grey 300**: `#CFCFCF` (borders, dividers, inactive strokes)
- **Grey 100**: `#F4F4F4` (secondary backgrounds, input fields)

### Semantic Colors (Fallback)
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`
- **Info**: `#3b82f6`

---

## OFFICIAL TYPOGRAPHY

### Font Family
- **Inter** (primary)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Font Sizes (Desktop)
| Role | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **H1** | 60px / 3.75rem | 700 Bold | 1.1 | Hero titles |
| **H2** | 42px / 2.625rem | 600 Semi | 1.2 | Section headers |
| **H3** | 24px / 1.5rem | 600 Semi | 1.4 | Card titles |
| **Body Large** | 18px / 1.125rem | 400 Regular | 1.6 | Feature text |
| **Body Base** | 16px / 1rem | 400 Regular | 1.5 | Main content |
| **Nav/Button** | 15px / 0.9375rem | 500 Medium | 1 | UI elements |

---

## DESIGN PRINCIPLES (STRICT)

✅ **Monochrome + Orange**: Black text/backgrounds with orange accents only  
✅ **No Scale Effects**: Cards stay same size on hover - only border/shadow change  
✅ **Dark Dropdowns**: Menus use #121212 (grey-900) background with white text  
✅ **Professional Look**: Academic, serious tone - for administrators/directors  
✅ **Minimal Animation**: 150-350ms ease transitions only  
✅ **Links**: Black by default, orange on hover  
✅ **No Blue**: Zero #0000FF or blue-ish colors  

---

## CSS DESIGN TOKENS

```css
/* Brand Colors */
--brand-black: #0B0B0B;
--brand-orange: #FF6A00;
--surface-white: #FFFFFF;

/* Grey Scale */
--grey-900: #121212;
--grey-700: #2A2A2A;
--grey-500: #6B6B6B;
--grey-300: #CFCFCF;
--grey-100: #F4F4F4;

/* Typography */
--font-family: 'Inter', sans-serif;
--h1: 3.75rem;
--h2: 2.625rem;
--h3: 1.5rem;
--body-base: 1rem;
--nav-btn: 0.9375rem;

/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;

/* Border & Radius */
--radius-card: 12px;
--radius-btn: 6px;
--grey-300: #CFCFCF;  /* borders */
```

---

## KEY COMPONENTS

### Buttons
```css
/* Black Button (Primary) */
.nx-btn-primary {
  background: #0B0B0B;
  color: #FFFFFF;
}
.nx-btn-primary:hover {
  background: #121212;
}

/* White Button (Secondary) */
.nx-btn-secondary {
  background: #FFFFFF;
  color: #0B0B0B;
  border: 1px solid #CFCFCF;
}
.nx-btn-secondary:hover {
  border-color: #0B0B0B;
}

/* Orange Button (Accent) */
.nx-btn-accent {
  background: #FF6A00;
  color: #FFFFFF;
}
```

### Cards
```css
.nx-card {
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  border-radius: 12px;
  /* NO SCALE ON HOVER */
  transition: border-color 150ms, box-shadow 150ms;
}

.nx-card:hover {
  border-color: #0B0B0B;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
```

### Navigation Links
```css
a {
  color: #0B0B0B;  /* Black by default */
}

a:hover {
  color: #FF6A00;  /* Orange on hover */
}

.nx-nav-link-active {
  color: #0B0B0B;
  background: #F4F4F4;
}
```

### Dark Dropdown Menus
```css
.nx-dropdown-menu {
  background: #121212;  /* Dark inverse */
}

.nx-dropdown-item {
  color: #FFFFFF;  /* White text */
}

.nx-dropdown-item:hover {
  background: #2A2A2A;
  color: #FF6A00;  /* Orange highlight */
}
```

---

## HEADLESS/NO SCALE CARD PATTERN

Cards should NOT grow on hover. Only change border and shadow:

```css
/* ❌ WRONG */
.card:hover {
  transform: scale(1.05);  /* NO SCALE */
}

/* ✅ CORRECT */
.card {
  border: 1px solid #CFCFCF;
  transition: border-color 150ms, box-shadow 150ms;
}

.card:hover {
  border-color: #0B0B0B;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
```

---

## CHECKLIST BEFORE SHIP

- [ ] Are all links black? (Not blue)
- [ ] Do links turn orange on hover?
- [ ] Are dropdowns dark (#121212)?
- [ ] Are cards staying same size on hover?
- [ ] Is only #FF6A00 used as accent?
- [ ] Are all headings using Inter font?
- [ ] H1 = 60px? H2 = 42px? H3 = 24px?
- [ ] Are borders #CFCFCF (grey-300)?
- [ ] Is text body #6B6B6B (grey-500)?
- [ ] No blue colors anywhere?
- [ ] No Tailwind default colors?
- [ ] Animations under 350ms?

---

## FILE LOCATIONS

```
src/styles/
├── tokens.css          ← Official NEXORA tokens
├── base.css            ← Global typography (Inter font, black links)
├── components.css      ← Component classes (buttons, cards, navs, dropdowns)
└── layout.css          ← Grid, spacing, responsive

src/pages/
├── InteractiveDashboard.jsx/css
├── Students.jsx/css
├── Attendance.jsx/css
├── Results.jsx/css
└── Settings.jsx/css

src/layouts/
├── InstituteLayout.jsx/css (Dark sidebar + header)
└── PlatformGateway.jsx/css (Login screen)
```

---

## RUNNING THE APP

```bash
npm start
# Opens http://localhost:3000/platform

# Routes:
/platform       → Login page
/dashboard      → Main dashboard (official colors)
/students       → Student management
/attendance     → Attendance tracking
/results        → Grades and results
/settings       → User preferences
/demo-design    → Component showcase
```

---

## COMPLIANCE MATRIX

| Requirement | Specification | Status |
|-------------|---------------|--------|
| Primary Color | #0B0B0B (Brand Black) | ✅ |
| Accent Color | #FF6A00 (Brand Orange Only) | ✅ |
| Grey Scale | #121212, #2A2A2A, #6B6B6B, #CFCFCF, #F4F4F4 | ✅ |
| Typography | Inter, 60/42/24/16px hierarchy | ✅ |
| Links | Black default, orange hover | ✅ |
| Cards | No scale, border/shadow change | ✅ |
| Dropdowns | Dark #121212 background | ✅ |
| Style | Professional, serious, academic | ✅ |
| Audience | Administrators, directors, academic heads | ✅ |
| **OFFICIAL COMPLIANCE** | **NEXORA.pdf SPEC** | **✅ 100%** |

---

**Status**: ✅ **PRODUCTION READY FOR INSTITUTIONAL PILOT**

Last validated: January 23, 2026

