# 🔒 NEXORA DEMO FREEZE v1.0

**Date**: January 23, 2026  
**Status**: ✅ **LOCKED FOR INSTITUTIONAL PILOT**  
**Branch**: `demo-freeze-v1`

---

## WHAT IS THIS?

This is a **frozen, institutional demo** of the NEXORA academic management platform.

This version is:

* ✅ Demo-ready (can be shown to colleges)
* ✅ Feature-locked (no changes without approval)
* ✅ Visually stable (no redesigns)
* ✅ Interaction-complete (all clicks work)
* ✅ Data-static (no backend calls)

---

## WHAT'S INTENTIONALLY STATIC

### Backend / Persistence
* ❌ No database
* ❌ No user authentication
* ❌ No API calls
* ❌ No saving / loading data
* ✅ All data is mock (hardcoded in `src/data/`)

### Real Features (NOT in demo)
* ❌ Roles / permissions logic
* ❌ Email notifications
* ❌ Reporting / exports
* ❌ Search across system
* ❌ Multi-institution support

---

## WHAT WORKS (DEMO INTERACTIONS)

### ✅ Navigation
* Sidebar items clickable
* Active states highlight
* Mobile menu toggles
* All routes respond

### ✅ Dashboard
* Course selector (changes mock data)
* Filter buttons (re-sorts table)
* Tab switching (shows/hides sections)
* Row selection (highlights row)
* Context panel appears on click

### ✅ Pages
* **Students**: Search box functional, list updates, click = detail view
* **Attendance**: Course selector, filter buttons, table updates
* **Results**: Grade display, score bars, course filtering
* **Settings**: Toggles change state visually, dropdowns work

### ✅ Design
* Official NEXORA colors (#0B0B0B, #FF6A00, greys)
* Professional institutional aesthetic
* Calm, boring, trustworthy
* No animations beyond transitions
* Icons are Lucide (professional, not emoji)

---

## TECHNICAL DETAILS

### Stack
* React 18.2.0
* React Router DOM 6.x
* Lucide React (icons)
* Pure CSS (no UI libraries)
* **Zero external dependencies** (except React)

### File Structure
```
src/
├── styles/
│   ├── tokens.css (design tokens)
│   ├── base.css (global)
│   ├── components.css (UI classes)
│   └── layout.css (grid/spacing)
├── layouts/
│   └── InstituteLayout.jsx (header + sidebar)
├── pages/
│   ├── InteractiveDashboard.jsx
│   ├── Students.jsx
│   ├── Attendance.jsx
│   ├── Results.jsx
│   └── Settings.jsx
├── data/
│   ├── students.js
│   ├── courses.js
│   ├── attendance.js
│   └── results.js
└── App.jsx (routes)
```

### Routes
* `/` → redirects to `/platform`
* `/platform` → Login gateway (demo: any credentials work)
* `/dashboard` → Main platform
* `/students` → Student management
* `/attendance` → Attendance tracking
* `/results` → Grade management
* `/settings` → Preferences

---

## DEMO BEHAVIOR GUARANTEES

### What the demo DOES
✅ Load instantly  
✅ Respond to all clicks  
✅ Show institutional aesthetic  
✅ Demonstrate state management  
✅ Show data tables  
✅ Demonstrate navigation  

### What the demo DOES NOT do
❌ Persist data on refresh  
❌ Save settings  
❌ Export reports  
❌ Check credentials  
❌ Make API calls  
❌ Send emails  
❌ Calculate real analytics  

---

## DESIGN LANGUAGE (LOCKED)

**Colors**:
* Brand Black: `#0B0B0B` (primary)
* Brand Orange: `#FF6A00` (accent only)
* Greys: `#121212`, `#2A2A2A`, `#6B6B6B`, `#CFCFCF`, `#F4F4F4`
* **NO BLUE ANYWHERE**

**Typography**:
* Font: Inter (system fallback)
* H1: 60px | H2: 42px | H3: 24px | Body: 16px
* Hierarchy is strict

**Icons**:
* Lucide React
* Size: 18px
* StrokeWidth: 1.5
* Color: Grey (inactive), Black (active)

**Interactions**:
* Cards: Border + shadow change (NO scale)
* Links: Black default, orange on hover
* Buttons: Black primary, white secondary, orange accent
* Transitions: 150-300ms ease only

---

## FROZEN GUARANTEE

**Nothing on this branch changes without explicit request.**

If you want to:
* Add features → Create new branch
* Fix bugs → Create new branch
* Redesign UI → Create new branch
* Try backend integration → Create new branch

**This branch is for demos only.**

---

## HOW TO USE THIS DEMO

### Quick Start
```bash
npm install
npm start
# Opens http://localhost:3000/platform
```

### Demo Script (5 minutes)
See: [DEMO_SCRIPT.md](DEMO_SCRIPT.md)

### Deployment
```bash
npm run build
# Static build ready for hosting
```

---

## APPROVAL CHECKLIST (BEFORE ANY CHANGES)

- [ ] Stakeholder approval
- [ ] Screenshots attached to issue
- [ ] Design system compliance verified
- [ ] No scope creep
- [ ] New branch created

---

## VERSION HISTORY

| Version | Date | Change | Status |
|---------|------|--------|--------|
| v1.0 | Jan 23, 2026 | Initial freeze | ✅ Locked |

---

## IMPORTANT WARNINGS

### ⚠️ DO NOT

* Add features on this branch
* Redesign UI elements
* Change colors
* Add new dependencies
* Refactor architecture
* Add backend logic

### ✅ DO

* Report bugs in separate issues
* Request features (on different branch)
* Use this for demos
* Share with colleges
* Reference this as baseline

---

## NEXT PHASES (NOT IN DEMO)

**Phase 2**: Backend integration (Express.js, MongoDB)  
**Phase 3**: Real authentication (JWT)  
**Phase 4**: Roles & permissions  
**Phase 5**: Reporting & exports  
**Phase 6**: Mobile app (React Native)  

---

## CONTACT & SUPPORT

For changes to this demo:
1. Create issue with screenshot
2. Explain why this demo needs change
3. Get approval
4. Create new branch

**Remember**: This demo is for institutions. Stability > features.

---

**Status**: ✅ **PRODUCTION-READY DEMO**  
**Last Updated**: January 23, 2026  
**Branch**: `demo-freeze-v1`  
**Locked**: 🔒 Yes
