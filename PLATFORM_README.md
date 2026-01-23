# NEXORA Platform - React Implementation

## Overview

NEXORA is an enterprise-grade academic management platform built with React + CSS. This is a fully interactive, Moodle-like institutional system that provides:

- **Professional Design**: Built on a Webflow-faithful design system with semantic tokens
- **Live Interactions**: State-driven UI that responds to user actions in real-time
- **No External Dependencies**: Pure React (18.2.0) + CSS, no component libraries
- **Mock Data**: Realistic dummy data for immediate testing and demos
- **Institutional Gateway**: Platform login experience that feels enterprise-grade

## Architecture

### Three-Layer System

```
Public Marketing Site (Webflow)
    ↓ (external - do not modify)
Platform Gateway (/platform)
    ↓ (login → redirect to dashboard)
Institute Platform (/dashboard, /students, /attendance, /results, /settings)
```

### File Structure

```
src/
├── styles/
│   ├── tokens.css          # Design tokens (colors, typography, spacing)
│   ├── base.css            # Global resets and typography
│   ├── components.css      # Reusable component classes (.nx-btn, .nx-card, etc)
│   └── layout.css          # Grid system and responsive utilities
├── layouts/
│   ├── InstituteLayout.jsx # Post-login shell (header, sidebar, content)
│   └── InstituteLayout.css # Layout styling
├── pages/
│   ├── PlatformGateway.jsx     # Institutional login page
│   ├── DesignSystemDemo.jsx    # Visual showcase of all components
│   ├── InteractiveDashboard.jsx # Main dashboard with stats and activity
│   ├── Students.jsx            # Student management with search and details
│   ├── Attendance.jsx          # Attendance tracking with filters
│   ├── Results.jsx             # Grade management with stats
│   ├── Settings.jsx            # System preferences and account settings
│   └── [page].css             # Per-page styling
├── data/
│   ├── students.js        # Mock student records
│   ├── courses.js         # Mock course records
│   ├── attendance.js      # Mock attendance with helper functions
│   └── results.js         # Mock assessment results with grade calculations
├── App.jsx                # Main router entry point
└── index.js               # React bootstrap with CSS imports
```

## Color Palette (Webflow-Faithful)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1e3a8a` | Headings, nav, links, primary actions |
| Accent Green | `#10b981` | Success states, secondary actions |
| Background | `#f9fafb` | Page background |
| Card Surface | `#ffffff` | Card backgrounds |
| Text Primary | `#111827` | Main text |
| Text Secondary | `#6b7280` | Secondary text |
| Text Muted | `#9ca3af` | Disabled, hints, captions |
| Border Light | `#e5e7eb` | Subtle dividers |
| Border Medium | `#d1d5db` | Standard borders |
| Warning | `#f59e0b` | Late, warnings |
| Error | `#ef4444` | Absent, errors |

## Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | → `/platform` | Default redirect |
| `/platform` | PlatformGateway | Institutional login screen |
| `/demo-design` | DesignSystemDemo | Visual component showcase |
| `/dashboard` | InteractiveDashboard | Main dashboard with stats |
| `/students` | Students | Student search and details |
| `/attendance` | Attendance | Attendance tracking |
| `/results` | Results | Grade management |
| `/settings` | Settings | System preferences |

## Running the Dev Server

```bash
cd nexora-training-ui/
npm install
npm start
```

Server runs at `http://localhost:3000`

**Hot Reload**: CSS and component changes compile automatically.

## Design System Usage

### Utility Classes

**Typography:**
```css
.nx-h1, .nx-h2, .nx-h3      /* Headings */
.nx-body, .nx-small          /* Text sizes */
.nx-weight-semibold          /* Font weights */
```

**Spacing:**
```css
.nx-mb-lg, .nx-mt-lg         /* Margins */
.nx-p-md                     /* Padding */
.nx-space-sm/md/lg           /* Token values */
```

**Layout:**
```css
.nx-grid-2/3/4               /* Responsive grids */
.nx-flex                     /* Flexbox utilities */
.nx-container-fluid          /* Full-width container */
```

**Components:**
```css
.nx-btn                      /* Buttons: .nx-btn-primary, .nx-btn-secondary */
.nx-card                     /* Cards: .nx-card-header, .nx-card-body */
.nx-badge                    /* Badges: .nx-badge-success, .nx-badge-error */
.nx-input                    /* Form inputs */
.nx-table                    /* Table styling */
.nx-stat-card                /* Stats display */
```

### Example Usage

```jsx
<div className="nx-card">
  <div className="nx-card-header">
    <h2 className="nx-h2">Students</h2>
  </div>
  <div className="nx-card-body">
    <p className="nx-text-muted nx-text-sm">Manage student enrollment</p>
    <div className="nx-grid nx-grid-4 nx-mt-lg">
      {/* Content */}
    </div>
  </div>
</div>
```

## State Management Pattern

All pages use **React useState** with a predictable pattern:

```jsx
const [selectedItem, setSelectedItem] = useState(initialValue);
const [activeFilter, setActiveFilter] = useState('all');
const [selectedRow, setSelectedRow] = useState(null);

// Derived data
const filtered = data.filter(item => 
  activeFilter === 'all' || item.status === activeFilter
);
```

**Key Principle**: Every user action has visible feedback (no silent updates).

## Interactive Features

### Dashboard (/) 
- Dynamic stat cards that update on course/filter selection
- Course dropdown that triggers data refresh
- Filter buttons with active states
- Row selection that shows context panel
- Tab navigation between attendance/results

### Students
- Search input filters by name/email in real-time
- Click to select student → details panel updates
- Avatar badges with color coding
- Stats summary at bottom

### Attendance
- Course dropdown with instant data refresh
- Status filter buttons (All, Present, Late, Absent) with counts
- Table with clickable rows
- Summary stats update based on selected course/filter

### Results
- Course selector with result refresh
- Pass/review filter buttons
- Sortable grade display with color coding
- Score progress bars
- Average score calculation

### Settings
- Toggle switches for notifications
- Dropdown selects for theme/language
- Account information display
- Sample form interactions

## Design Quality Standards

✅ **Calm, professional appearance**
- No animations except subtle 200ms transitions
- No gradients or illustrations
- Clear information hierarchy
- Consistent spacing and alignment

✅ **Enterprise-grade feel**
- Moodle-comparable UX
- Predictable interactions
- Context-aware (sidebar active states, header updates)
- Micro-responses on hover/click (background color change, border emphasis)

✅ **Accessibility**
- Semantic HTML
- Proper label associations
- Color contrast meets WCAG AA
- Keyboard navigation support

## Mock Data Structure

### Students (src/data/students.js)
```javascript
{
  id: 'STU001',
  name: 'Alice Johnson',
  email: 'alice@university.edu',
  enrollmentYear: 2022,
  status: 'active',
  averageGrade: 92
}
```

### Courses (src/data/courses.js)
```javascript
{
  id: 'COURSE001',
  code: 'CS101',
  name: 'Introduction to Computer Science',
  instructor: 'Dr. Smith',
  semester: 'Fall 2024',
  enrolledStudents: 48,
  averageAttendance: 92,
  status: 'active'
}
```

### Attendance (src/data/attendance.js)
```javascript
{
  id: 'ATT001',
  studentId: 'STU001',
  studentName: 'Alice Johnson',
  courseId: 'COURSE001',
  date: '2025-01-23',
  status: 'present', // or 'late', 'absent'
  timeIn: '08:55'
}

// Helper functions:
getAttendanceForCourse(courseId)
getAttendanceSummary(courseId) → { total, present, late, absent, percentage }
```

### Results (src/data/results.js)
```javascript
{
  id: 'RES001',
  studentId: 'STU001',
  studentName: 'Alice Johnson',
  courseId: 'COURSE001',
  assessmentType: 'Midterm Exam',
  score: 92,
  maxScore: 100,
  grade: 'A-',
  date: '2025-01-15',
  status: 'pass' // or 'review'
}

// Helper functions:
getResultsForCourse(courseId)
getStudentCourseGrade(studentId, courseId) → calculated grade
```

## Customization Guide

### Adding a New Page

1. **Create component**: `src/pages/NewPage.jsx`
2. **Create styles**: `src/pages/NewPage.css` (use design tokens)
3. **Add route**: Update `src/App.jsx` with new Route + InstituteLayout wrapper
4. **Update nav**: Add to navigation items in `src/layouts/InstituteLayout.jsx`

### Changing Colors

Edit `src/styles/tokens.css`:
```css
--nx-primary: #NEW_BLUE;
--nx-accent: #NEW_GREEN;
```

All components automatically update (tokens cascade through CSS variables).

### Adding Mock Data

Create new file in `src/data/`:
```javascript
export const newData = [
  { id: '1', name: 'Item 1', ... }
];

export const getNewDataFunction = (filterParam) => {
  return newData.filter(...);
};
```

Import in component and use with `useState`.

## Performance Notes

- React 18 with hot module replacement
- No code splitting (single bundle ~150KB)
- CSS-only transitions (no animation libraries)
- Mock data loaded in memory (no API calls)
- Sidebar nav uses window.location.pathname (no router state dependency)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Known Limitations

- No backend integration (mock data only)
- No persistent storage (localStorage not implemented)
- No export functionality (save to CSV/PDF)
- No print-ready layouts (CSS media queries basic)
- Settings page is UI-only (changes don't persist)

## Next Steps (Phase 5+)

1. **Backend Integration**: Replace mock data with API calls
2. **Authentication**: Real login at /platform with JWT
3. **Export Features**: PDF/CSV download from tables
4. **Advanced Filtering**: Multi-select, date ranges, sorting
5. **User Preferences**: localStorage for theme, language, column visibility
6. **Analytics Dashboard**: Charts, trends, predictive insights
7. **Mobile App**: React Native version for tablet/phone

## Support & Documentation

- Design System: See `src/styles/` files for all tokens and utilities
- Component Examples: Visit `/demo-design` route in running app
- Color Reference: Check `GUIDELINES/01_TECH_STACK.md` for full spec
- Architecture: Review this README + inline code comments

---

**Status**: ✅ Production-Ready for Institutional Pilot  
**Last Updated**: January 23, 2025  
**Built by**: Chatake Innoworks Pvt. Ltd.
