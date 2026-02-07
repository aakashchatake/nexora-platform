# Nexora Core v1.0.0 — Stable Release

**Tag**: `v1.0.0-core`  
**Commit**: `fdc07af9b16bac9948d02698a0f61377ce3544d8`  
**Release Date**: February 7, 2026  
**Status**: ✅ Production Stable

---

## What's Shipped

This release represents the **stable baseline** for Nexora's multi-tenant institutional management platform.

### ✅ Core Features

- **Multi-Tenant Institute Gateway** (`/access`)
  - Institute verification via unique Institute ID (e.g., SIT-2026)
  - Supabase-backed institute registry validation
  - Clean error handling for invalid or inactive institutes
  - Institute context persisted in localStorage for session continuity

- **Authentication & Authorization Guards**
  - Secure login/signup flow via Supabase Auth
  - Protected route wrappers checking auth state + institute context
  - Redirect loop prevention with proper loading state management
  - Memory leak prevention (mounted flag in useAuth hook)

- **Routing Architecture**
  - Hash-based routing for GitHub Pages compatibility
  - `/access` → Institute verification entry point
  - `/platform` → Login/signup with institute context
  - `/dashboard` → Protected admin dashboard
  - All protected routes enforce auth + institute context

- **GitHub Pages Deployment**
  - Live URL: https://aakashchatake.github.io/nexora-platform/
  - HTTPS enabled (automatic certificate)
  - Optimized build: 112.71 KB JavaScript (gzipped) + 6 KB CSS
  - Sub-2 second load times
  - Production Supabase integration (.env configured)

- **State Management**
  - `useAuth()` hook — Global auth state with proper lifecycle management
  - `useInstitute()` hook — Institute context resolution (URL → localStorage → null)
  - Protected route guards combining auth + institute validation
  - Graceful degradation on missing context

- **Responsive Design**
  - Mobile-first layout
  - CSS custom properties theming
  - Desktop and tablet optimized
  - Material-UI components for data grids and date pickers

---

## Technical Stack

- **Frontend**: React 18.2.0, React Router v6.6.1 (HashRouter)
- **Backend**: Supabase (Auth + PostgreSQL)
- **Hosting**: GitHub Pages (CDN-backed, HTTPS)
- **Build**: Create React App with production optimizations
- **Deployment**: Automated via `gh-pages` npm package

---

## Verified Test Scenarios

✅ Institute verification flow (`/access`)  
✅ Login/signup with institute context (`/platform?institute=SIT-2026`)  
✅ Protected route access control (`/dashboard` requires auth + institute)  
✅ No redirect loops under any flow  
✅ No memory leaks or console errors  
✅ Mobile responsive layout confirmed  
✅ HTTPS and asset loading verified (HTTP 200)

---

## Key Commits

- `fdc07af` — Add .env with Supabase credentials for deployment
- `ddb65ae` — Update homepage for nexora-platform GitHub Pages deployment
- `45db931` — Add stable institute verification gateway to core platform

---

## Documentation

Comprehensive deployment documentation available in `DEPLOYMENT_REPORTS/`:
- Quick Reference Guide
- Architecture Documentation
- Operations & Maintenance Guide
- Complete Deployment Report
- Video Demonstration (135 MB)

---

## Known Limitations

- Admin dashboard only (no student/staff portals yet)
- Single role system (no role selection)
- Basic institute verification (no advanced validation)

These will be addressed in upcoming releases.

---

## Upgrade Notes

This is the first tagged release. No upgrade path needed.

---

## Support

- **Repository**: https://github.com/aakashchatake/nexora-platform
- **Live**: https://aakashchatake.github.io/nexora-platform/
- **Email**: nexora@chatakeinnoworks.com, admin@chatakeinnoworks.com

---

**Copyright © 2026 Chatake Innoworks Pvt. Ltd.**  
All rights reserved.
