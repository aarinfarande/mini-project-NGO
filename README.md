# NGO Project Management Platform

A responsive, accessible, and high-performance front-end web application built for grassroots NGO operations, regional project managers, and executive portfolio governance.

---

## 🎨 Strict Color Palette Tokens

- **Saffron Primary**: `#F47B20` (Buttons, active navigation states, primary highlights)
- **Golden Accent**: `#F9B233` (Split background banners, secondary accents, badges, outer framing)
- **Deep Charcoal**: `#292524` (Primary text, dark UI container borders, headers, admin badge)
- **Cream Background**: `#FFF9F2` (Main application page background, canvas contrast)
- **White**: `#FFFFFF` (Card backgrounds, form inputs, split white panels)
- **Muted Text**: `#6B625A` (Subtitles, labels, secondary content, help text)

---

## 🔤 Typography

- **Headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)**: `Gelasio`, serif
- **Body Text & Form Inputs**: `Inter`, sans-serif

---

## 🚫 Exclusion Rule

- **Zero brand logo images or logo SVGs** on any screen or navigation header. Clean, modern, text-driven layout.

---

## 📱 Screen Blueprints

### 1. Login Page (`/login`)
- 60% Left White Panel / 40% Right Golden Accent Panel (stacks on mobile)
- Heading `"Namaste"` in `Gelasio` font (`#292524`, font-weight 600, 36px)
- `Login:` and `Password:` inputs with rounded borders and light grey background
- Links for `"Help?"` (bottom-left) and `"Forgot Password?"` (bottom-right)
- Saffron `#F47B20` submit button with hover transition
- Discrete `"Back"` link in the golden accent right panel

### 2. Workspace / Role Selection (`/select-role`)
- 60% Left White / 40% Right Golden split view
- `"WELCOME BACK"` uppercase sub-label (12px tracking-wide)
- `"Choose your workspace"` heading in `Gelasio`
- Interactive vertically stacked role buttons:
  - **`Admin`**: Full overview of portfolio budget (`₹1080k`), all pulse indicators, global metrics & governance
  - **`Project Manager`**: Assigned projects (`₹420k`), task creation, team delegations
  - **`Coordinator`**: Focused task checklist, field updates submission, milestone tracking
- Feature Quote Block in golden panel:
  - `"Make every effort count."` (`Gelasio`, 32px)
  - `"A clear, shared workspace for the people turning good intentions into measurable change."`

### 3. Dashboard Layout (`/dashboard`)
- **Outer Golden Frame & Inner White Viewport**: Cream background (`#FFF9F2`) with rounded white card viewport (`#FFFFFF`) framed nicely inside an outer golden layout margin (`#F9B233`).
- **Top Navigation Bar**: Tabs (`Dashboard`, `Projects`, `Tasks`, `Analytics`, `Reports`), active tab highlighted with `Saffron #F47B20`, responsive hamburger menu, and active role tag.
- **Floating Left Vertical Toolbar (Pill Sidebar)**: Saffron pill with Lucide icons (`LayoutGrid`, `FolderKanban`, `ListTodo`, `TrendingUp`, `FileText`).
- **KPI Metric Stat Cards Grid**:
  1. Active Projects (`3`) + Folder icon
  2. Tasks Completed (`6/18`) + ListChecks icon (live recalculated on task toggle)
  3. Portfolio Budget (`₹1080k`) + IndianRupee icon
  4. People Reached (`18.4k`) + Users icon
- **Project Pulse Section**:
  1. Clean Water Initiative: 65% Progress bar in Saffron (`#F47B20`)
  2. Schools for all: 40% Progress bar in Golden (`#F9B233`)
  3. Mobile Health Clinic: 100% Completed Progress bar in Saffron (`#F47B20`)
- **Interactive Checklists & Modals**:
  - Check / uncheck tasks to update live KPI metrics
  - Filter tasks by status (`All`, `In Progress`, `Review`, `Completed`)
  - Submit Field Update modal with geo-tag and observation logs

---

## 🚀 How to Run Locally

### Option A: Instant Live Web App (Zero dependencies required)
A live Python HTTP server is currently serving the app at:
```bash
python -m http.server 3000 --directory "C:\Users\Aarin\.gemini\antigravity-ide\scratch\ngo-project-manager"
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser (Opera GX, Chrome, Edge, etc.).

### Option B: Vite + React Development (When Node.js is installed)
```bash
cd "C:\Users\Aarin\.gemini\antigravity-ide\scratch\ngo-project-manager"
npm install
npm run dev
```
