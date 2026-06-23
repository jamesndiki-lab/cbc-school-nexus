# Implementation Plan: Inspire Analytics - Smart CBC School Management System

Build a comprehensive school management system tailored for the Kenyan CBC framework. The application will be a highly responsive, mobile-optimized web app with a modern dark theme and green accents.

## Scope Summary
- **App Identity:** "Inspire Analytics", dark theme, green accents (#22C55E).
- **Navigation:** Sidebar with 13+ modules, Header with hamburger and profile info.
- **Core Modules:**
  - Admin (Multi-school management)
  - Dashboard (Metric cards & shortcuts)
  - Grades & Streams (CBC categories, dynamic stream tags)
  - Subjects (Pre-seeded CBC learning areas by level)
  - Students (SIS with directory, filtering, bulk add)
  - Exams (Configuration, filtering, schedule table)
  - Marks Entry (Excel-like sync triggers, filter matrix)
  - Results Analysis (Score computation interface)
  - Report Cards (One-page CBC report generation)
  - Fees (Payment management, fee records)
  - Settings & Security (School code, admin reset with password safeguard)
- **Universal Feature:** "← Back Home" button in every inner view.

## Non-Goals
- Real backend/database implementation (all data will be mock/client-side state).
- Real Excel file parsing (UI triggers only).
- Multi-user authentication (mock admin session only).

## Assumptions & Open Questions
- **Data Persistence:** Using `localStorage` for basic persistence across refreshes.
- **Mobile First:** UI components must be optimized for mobile (e.g., stacked filters).
- **CBC Specifics:** Learning areas provided in the prompt will be hardcoded as defaults.

## Affected Areas
- **Frontend:**
  - `src/components/layout`: Sidebar, Header, PageWrapper.
  - `src/components/dashboard`: Metric cards, shortcut buttons.
  - `src/components/modules`: Specific views for Students, Exams, Fees, etc.
  - `src/hooks`: State management for mock data (students, grades, exams).
  - `src/styles`: Theme configuration (Tailwind/CSS variables).

## Ordered Phases

### Phase 1: Foundation & Theming
- Update `index.css` with the specified dark theme and green accents (#22C55E).
- Setup layout components: `Sidebar`, `Header`, and a `PageLayout` container.
- Implement routing using `react-router-dom` for all navigation links.
- **Owner:** `frontend_engineer`

### Phase 2: Navigation & Dashboard
- Build the Sidebar with all 13 required links.
- Implement the Header with hamburger toggle and "Exit view-as" badge.
- Create the Main Dashboard with metric cards and shortcut footers ("Enter Marks", "Report Cards").
- **Owner:** `frontend_engineer`

### Phase 3: Academic & Student Management (SIS)
- **Grades & Streams:** Category grouping + dynamic tag management for streams.
- **Subjects:** Editable list of CBC learning areas (ECD, Primary, Junior School) with pill badges.
- **Student Directory:** List view, filters (vertical stack), search, and "+ Add Student" modal.
- **Owner:** `frontend_engineer`

### Phase 4: Exam & Marks Module
- **Add Exams:** Filter controls, schedule table with mock data.
- **Marks Entry:** Filter matrix (Exam, Grade, Stream, Subject) and sync triggers (Upload/Download).
- **Owner:** `frontend_engineer`

### Phase 5: Analysis, Reports & Fees
- **Results Analysis:** Filter-based setup page.
- **Report Cards:** One-page CBC report interface with comment editing.
- **Fees:** Payment overview, action triggers, and student search.
- **Owner:** `frontend_engineer`

### Phase 6: Settings & Security
- **Settings:** School code panel and account profile badge.
- **Reset Safeguard:** Implement the red "Reset" link and the password-protected confirmation modal.
- Final Polish: Ensure "← Back Home" button is in all inner views.
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire UI and navigation flow as requested, using local state/mock data.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1-6
- **Scope:** Create a complete, multi-page React application with the specified dark theme and green accents. Use `lucide-react` for icons. Implement all views (Dashboard, Admin, SIS, Exams, Marks, Fees, Settings) with the required fields and layouts.
- **Files:**
  - `src/App.tsx`: Main routing.
  - `src/components/Layout.tsx`: Sidebar and Header.
  - `src/pages/*`: One file per module.
  - `src/index.css`: Theme variables.
- **Depends on:** none
- **Acceptance criteria:**
  - All navigation links in the sidebar work.
  - The "← Back Home" button exists in every sub-view.
  - The Admin Reset modal requires a password to proceed.
  - All tables and filter blocks match the user's specific descriptions.
  - UI is responsive and mobile-optimized.
