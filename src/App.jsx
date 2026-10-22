/**
 * NGO Project Management Platform - Interactive Front-End Application
 * Strict Palette:
 * - Saffron: #F47B20
 * - Golden:  #F9B233
 * - Charcoal:#292524
 * - Cream:   #FFF9F2
 * - White:   #FFFFFF
 * - Muted:   #6B625A
 *
 * Strict Exclusion: NO brand logo image or logo SVG anywhere. Text-driven, clean UI.
 */

// Application State
const state = {
  currentScreen: 'login', // 'login' | 'select-role' | 'dashboard'
  currentRole: 'admin',   // 'admin' | 'pm' | 'coordinator'
  currentTab: 'dashboard',// 'dashboard' | 'projects' | 'tasks' | 'analytics' | 'reports'
  taskFilter: 'all',      // 'all' | 'in-progress' | 'review' | 'completed'
  mobileMenuOpen: false,
  activeModal: null,      // 'help' | 'forgot-pw' | 'field-update' | 'new-task' | null
  toastMessage: null,

  // Projects Data
  projects: [
  ],

  // Tasks Checklist Data
  tasks: [
    {
      id: 't1',
      title: 'Commission solar filtration pump at Hamlet 4',
      project: 'Clean Water Initiative',
      assignee: 'Suresh Kumar',
      role: 'Coordinator',
      status: 'completed',
      priority: 'High',
      dueDate: 'Oct 14, 2026'
    },
    {
      id: 't2',
      title: 'Deliver 15 STEM learning kits to Model Upper Primary School',
      project: 'Schools for all',
      assignee: 'Meena Solanki',
      role: 'Coordinator',
      status: 'completed',
      priority: 'Medium',
      dueDate: 'Oct 15, 2026'
    },
    {
      id: 't3',
      title: 'Collect water quality test samples post-monsoon',
      project: 'Clean Water Initiative',
      assignee: 'Anita Roy',
      role: 'Project Manager',
      status: 'completed',
      priority: 'High',
      dueDate: 'Oct 15, 2026'
    },
    {
      id: 't4',
      title: 'Publish Phase 1 telemedicine diagnostic report',
      project: 'Mobile Health Clinic',
      assignee: 'Dr. Kavita Rao',
      role: 'Project Manager',
      status: 'completed',
      priority: 'Medium',
      dueDate: 'Oct 16, 2026'
    },
    {
      id: 't5',
      title: 'Distribute sanitary napkin hygiene kits in Zone 2',
      project: 'Mobile Health Clinic',
      assignee: 'Pooja Patil',
      role: 'Coordinator',
      status: 'completed',
      priority: 'Normal',
      dueDate: 'Oct 16, 2026'
    },
    {
      id: 't6',
      title: 'Conduct community water management audit',
      project: 'Clean Water Initiative',
      assignee: 'Suresh Kumar',
      role: 'Coordinator',
      status: 'completed',
      priority: 'Normal',
      dueDate: 'Oct 16, 2026'
    },
    {
      id: 't7',
      title: 'Inspect pipeline laying in Jaisalmer cluster 3',
      project: 'Clean Water Initiative',
      assignee: 'Anita Roy',
      role: 'Project Manager',
      status: 'in-progress',
      priority: 'High',
      dueDate: 'Oct 18, 2026'
    },
    {
      id: 't8',
      title: 'Conduct parent-teacher digital awareness session',
      project: 'Schools for all',
      assignee: 'Rahul Verma',
      role: 'Project Manager',
      status: 'in-progress',
      priority: 'Medium',
      dueDate: 'Oct 19, 2026'
    },
    {
      id: 't9',
      title: 'Upload geo-tagged photographs of borewell construction',
      project: 'Clean Water Initiative',
      assignee: 'Suresh Kumar',
      role: 'Coordinator',
      status: 'in-progress',
      priority: 'High',
      dueDate: 'Oct 20, 2026'
    },
    {
      id: 't10',
      title: 'Verify vendor invoice for smartboard hardware',
      project: 'Schools for all',
      assignee: 'Rahul Verma',
      role: 'Project Manager',
      status: 'review',
      priority: 'Medium',
      dueDate: 'Oct 21, 2026'
    },
    {
      id: 't11',
      title: 'Submit monthly field fuel vouchers & muster roll',
      project: 'Mobile Health Clinic',
      assignee: 'Pooja Patil',
      role: 'Coordinator',
      status: 'review',
      priority: 'Normal',
      dueDate: 'Oct 22, 2026'
    },
    {
      id: 't12',
      title: 'Schedule Q4 portfolio budget audit with external advisory',
      project: 'Clean Water Initiative',
      assignee: 'Anita Roy',
      role: 'Admin',
      status: 'in-progress',
      priority: 'High',
      dueDate: 'Oct 24, 2026'
    },
    {
      id: 't13',
      title: 'Field survey of 120 households for water purification uptake',
      project: 'Clean Water Initiative',
      assignee: 'Suresh Kumar',
      role: 'Coordinator',
      status: 'in-progress',
      priority: 'Normal',
      dueDate: 'Oct 25, 2026'
    },
    {
      id: 't14',
      title: 'Evaluate teacher training attendance and test scores',
      project: 'Schools for all',
      assignee: 'Meena Solanki',
      role: 'Coordinator',
      status: 'in-progress',
      priority: 'Medium',
      dueDate: 'Oct 26, 2026'
    },
    {
      id: 't15',
      title: 'Setup telemedicine link with district civil hospital',
      project: 'Mobile Health Clinic',
      assignee: 'Dr. Kavita Rao',
      role: 'Project Manager',
      status: 'review',
      priority: 'High',
      dueDate: 'Oct 27, 2026'
    },
    {
      id: 't16',
      title: 'Prepare mid-term donor impact report for CSR board',
      project: 'Clean Water Initiative',
      assignee: 'Anita Roy',
      role: 'Admin',
      status: 'in-progress',
      priority: 'High',
      dueDate: 'Oct 28, 2026'
    },
    {
      id: 't17',
      title: 'Procure spare filters for Jaisalmer RO plants',
      project: 'Clean Water Initiative',
      assignee: 'Suresh Kumar',
      role: 'Coordinator',
      status: 'in-progress',
      priority: 'Medium',
      dueDate: 'Oct 29, 2026'
    },
    {
      id: 't18',
      title: 'Community baseline survey validation with Gram Panchayat',
      project: 'Schools for all',
      assignee: 'Meena Solanki',
      role: 'Coordinator',
      status: 'review',
      priority: 'Normal',
      dueDate: 'Oct 30, 2026'
    }
  ],

  // Field Updates stream
  fieldUpdates: [
    {
      id: 'fu1',
      author: 'Suresh Kumar',
      role: 'Coordinator',
      location: 'Barmer Block 2',
      timestamp: 'Today, 04:30 PM',
      text: 'Borewell yield verified at 42 LPM. Clean water sample stored in sterile container for lab TDS testing.',
      badge: 'Water Lab Verified'
    },
    {
      id: 'fu2',
      author: 'Meena Solanki',
      role: 'Coordinator',
      location: 'Dhar Primary School',
      timestamp: 'Today, 02:15 PM',
      text: 'Class 4 & 5 students completed first interactive science module on solar energy using new smart kits.',
      badge: '48 Beneficiaries'
    },
    {
      id: 'fu3',
      author: 'Dr. Kavita Rao',
      role: 'Project Manager',
      location: 'Gadchiroli Tribal Camp',
      timestamp: 'Yesterday, 06:10 PM',
      text: 'Telemedicine link established via satellite transceiver. 112 villagers screened for early hypertension.',
      badge: 'Health Outreach'
    }
  ]
};

// SVG Icon Helper (Exact Lucide icon paths for 100% offline & instant display)
const icons = {
  layoutGrid: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  folderKanban: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>`,
  listTodo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  listChecks: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>`,
  indianRupee: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  filter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
};

// Role Configuration Data
const roleConfigs = {
  admin: {
    label: 'ADMIN',
    fullName: 'Administrator',
    subtitle: 'Executive Portfolio Oversight & Governance',
    badgeClass: 'bg-[#292524] text-[#FFF9F2] border border-[#F9B233]/40',
    metrics: {
      activeProjects: '3',
      completedTasks: () => {
        const completed = state.tasks.filter(t => t.status === 'completed').length;
        return `${completed}/${state.tasks.length}`;
      },
      portfolioBudget: '₹1080k',
      peopleReached: '18.4k'
    },
    quickActionText: '+ New Project',
    quickActionModal: 'new-task',
    description: 'Full overview of portfolio budget, all project pulse indicators, total team/people reach metrics, system settings, and user management.'
  },
  pm: {
    label: 'PROJECT MANAGER',
    fullName: 'Project Manager',
    subtitle: 'Assigned Project Execution & Resource Allocation',
    badgeClass: 'bg-[#F47B20] text-white',
    metrics: {
      activeProjects: '2',
      completedTasks: () => {
        const pmTasks = state.tasks.filter(t => t.project !== 'Mobile Health Clinic');
        const completed = pmTasks.filter(t => t.status === 'completed').length;
        return `${completed}/${pmTasks.length}`;
      },
      portfolioBudget: '₹420k',
      peopleReached: '8.2k'
    },
    quickActionText: '+ Assign Task',
    quickActionModal: 'new-task',
    description: 'Access to manage assigned projects, budget tracking for specific projects, task creation/assignment, and team progress updates.'
  },
  coordinator: {
    label: 'COORDINATOR',
    fullName: 'Project Coordinator',
    subtitle: 'Field Activity Tracking & Milestone Validation',
    badgeClass: 'bg-[#F9B233] text-[#292524]',
    metrics: {
      activeProjects: '1',
      completedTasks: () => {
        const coordTasks = state.tasks.filter(t => t.role === 'Coordinator');
        const completed = coordTasks.filter(t => t.status === 'completed').length;
        return `${completed}/${coordTasks.length}`;
      },
      portfolioBudget: '₹85k',
      peopleReached: '3.4k'
    },
    quickActionText: 'Submit Field Update',
    quickActionModal: 'field-update',
    description: 'Focused task management view, field updates submission, task completion status, and direct project activity tracking.'
  }
};

// Render Orchestrator
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  let screenHTML = '';
  if (state.currentScreen === 'login') {
    screenHTML = renderLoginScreen();
  } else if (state.currentScreen === 'select-role') {
    screenHTML = renderRoleSelectScreen();
  } else {
    screenHTML = renderDashboardScreen();
  }

  root.innerHTML = `
    ${screenHTML}
    ${renderModals()}
    ${renderToast()}
    ${renderScreenSwitcherBar()}
  `;

  attachEventListeners();
}

// ==========================================
// SCREEN 1: LOGIN PAGE (/login)
// Desktop: 60% Left White / 40% Right Golden
// Mobile: Stacked vertically
// ==========================================
function renderLoginScreen() {
  return `
    <div class="min-h-screen bg-[#FFF9F2] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div class="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#F9B233]/40 overflow-hidden flex flex-col md:flex-row min-h-[640px]">
        
        <!-- Left Panel (White 60%) -->
        <section class="w-full md:w-[60%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
          <div>
            <!-- Header Text - Strict: No logo icon/image -->
            <div class="mb-8">
              <span class="text-xs uppercase tracking-widest text-[#6B625A] font-semibold">NGO Management Workspace</span>
              <h1 class="text-4xl sm:text-5xl font-semibold font-heading text-[#292524] mt-2 mb-2">Namaste</h1>
              <p class="text-sm text-[#6B625A]">Sign in with your organizational credentials to continue.</p>
            </div>

            <!-- Login Form -->
            <form id="loginForm" class="space-y-5" onsubmit="event.preventDefault(); handleLoginSubmit();">
              <div>
                <label for="loginInput" class="block text-sm font-medium text-[#6B625A] mb-1.5">Login:</label>
                <input 
                  type="text" 
                  id="loginInput" 
                  name="username"
                  required 
                  value="admin@grassroots.ngo"
                  placeholder="name@organization.ngo or username" 
                  class="w-full px-4 py-3 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524] placeholder-[#6B625A]/60 focus:bg-white focus:border-[#F47B20] focus:ring-1 focus:ring-[#F47B20] transition-colors text-sm"
                />
              </div>

              <div>
                <label for="passwordInput" class="block text-sm font-medium text-[#6B625A] mb-1.5">Password:</label>
                <div class="relative">
                  <input 
                    type="password" 
                    id="passwordInput" 
                    name="password"
                    required 
                    value="••••••••••••"
                    placeholder="Enter your security passkey" 
                    class="w-full px-4 py-3 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524] placeholder-[#6B625A]/60 focus:bg-white focus:border-[#F47B20] focus:ring-1 focus:ring-[#F47B20] transition-colors text-sm pr-11"
                  />
                  <button 
                    type="button" 
                    id="togglePasswordBtn"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B625A] hover:text-[#292524] p-1 text-xs"
                    aria-label="Toggle password visibility"
                  >
                    Show
                  </button>
                </div>
              </div>

              <!-- Sub-row with "Help?" and "Forgot Password?" -->
              <div class="flex items-center justify-between pt-1 text-sm">
                <button 
                  type="button" 
                  id="openHelpBtn"
                  class="text-[#6B625A] hover:text-[#292524] hover:underline transition-colors font-medium flex items-center gap-1.5"
                >
                  Help?
                </button>
                <button 
                  type="button" 
                  id="openForgotPwBtn"
                  class="text-[#6B625A] hover:text-[#292524] hover:underline transition-colors font-medium"
                >
                  Forgot Password?
                </button>
              </div>

              <!-- Submit Button Styled with Saffron #F47B20 -->
              <div class="pt-3">
                <button 
                  type="submit" 
                  id="loginSubmitBtn"
                  class="w-full py-3.5 px-6 bg-[#F47B20] hover:bg-[#DE6C15] active:scale-[0.99] text-white font-medium rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Sign In</span>
                  <span class="transition-transform group-hover:translate-x-1">${icons.chevronRight}</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Quick Role Demo Selector on Login -->
          <div class="mt-8 pt-6 border-t border-[#E5DDD3]/70">
            <p class="text-xs text-[#6B625A] uppercase tracking-wider mb-2 font-semibold">One-Click Demonstration Sign In:</p>
            <div class="grid grid-cols-3 gap-2">
              <button 
                onclick="quickLogin('admin')" 
                class="px-2.5 py-1.5 text-xs rounded-lg border border-[#292524]/20 hover:border-[#292524] text-[#292524] font-medium bg-[#FFF9F2] hover:bg-white transition-all text-center"
              >
                Admin
              </button>
              <button 
                onclick="quickLogin('pm')" 
                class="px-2.5 py-1.5 text-xs rounded-lg border border-[#F47B20]/40 hover:border-[#F47B20] text-[#F47B20] font-medium bg-[#FFF9F2] hover:bg-white transition-all text-center"
              >
                Project Manager
              </button>
              <button 
                onclick="quickLogin('coordinator')" 
                class="px-2.5 py-1.5 text-xs rounded-lg border border-[#F9B233]/70 hover:border-[#F9B233] text-[#292524] font-medium bg-[#FFF9F2] hover:bg-white transition-all text-center"
              >
                Coordinator
              </button>
            </div>
          </div>
        </section>

        <!-- Right Panel (Golden 40% Accent #F9B233) -->
        <section class="w-full md:w-[40%] bg-[#F9B233] p-8 sm:p-12 flex flex-col justify-between text-white relative">
          <!-- Top subtle tag -->
          <div class="space-y-3">
            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase text-white">
              Field & Portfolio Engine
            </span>
            <h2 class="text-3xl font-heading text-white font-semibold leading-tight">
              Turn grassroot effort into measurable change.
            </h2>
            <p class="text-sm text-white/90 leading-relaxed font-body">
              A unified system linking village field workers, regional project leads, and executive oversight without administrative friction.
            </p>
          </div>

          <!-- Feature Bullets (Clean & Text-driven) -->
          <div class="my-8 space-y-4 text-xs font-medium text-white/90">
            <div class="flex items-start gap-3">
              <span class="p-1 rounded-full bg-white/25 mt-0.5">${icons.check}</span>
              <span>100% Audit-ready tracking for village water, school, and mobile clinics</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="p-1 rounded-full bg-white/25 mt-0.5">${icons.check}</span>
              <span>Instant role switching between Administrator, PM, and Field Coordinator</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="p-1 rounded-full bg-white/25 mt-0.5">${icons.check}</span>
              <span>Offline-ready field update submission and live checklist metrics</span>
            </div>
          </div>

          <!-- Discrete "Back" link at bottom-right corner -->
          <div class="flex items-center justify-between pt-4 border-t border-white/20">
            <span class="text-xs text-white/80">NGO Suite v2.4</span>
            <button 
              type="button" 
              id="loginBackBtn"
              class="text-sm font-medium text-white hover:text-[#292524] transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Back</span>
              ${icons.arrowLeft}
            </button>
          </div>
        </section>

      </div>
    </div>
  `;
}

// ==========================================
// SCREEN 2: WORKSPACE / ROLE SELECTION (/select-role)
// Desktop: 60% Left White / 40% Right Golden
// Left: WELCOME BACK / Choose your workspace / Select your profile
// Stacked buttons: Admin / Project Manager / Coordinator
// Right: Feature Quote Block "Make every effort count."
// ==========================================
function renderRoleSelectScreen() {
  return `
    <div class="min-h-screen bg-[#FFF9F2] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div class="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#F9B233]/40 overflow-hidden flex flex-col md:flex-row min-h-[640px]">
        
        <!-- Left Panel (White 60%) -->
        <section class="w-full md:w-[60%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
          <div>
            <!-- Sub-label: WELCOME BACK (Muted Text #6B625A, uppercase, 12px tracking-wide) -->
            <span class="text-xs uppercase tracking-widest text-[#6B625A] font-semibold block mb-2">
              WELCOME BACK
            </span>

            <!-- Main Heading: Choose your workspace (Gelasio, Deep Charcoal #292524, 32px) -->
            <h1 class="text-3xl sm:text-4xl font-semibold font-heading text-[#292524] mb-1">
              Choose your workspace
            </h1>

            <!-- Caption: Select your profile (Muted Text #6B625A) -->
            <p class="text-sm text-[#6B625A] mb-8 font-body">
              Select your profile to customize dashboard tools, permissions, and pulse metrics.
            </p>

            <!-- Interactive Role Selection Buttons (Stacked vertically with smooth hover & focus states) -->
            <div class="space-y-4">
              
              <!-- 1. Admin -->
              <button 
                type="button" 
                onclick="selectRoleAndProceed('admin')" 
                class="w-full text-left p-5 rounded-2xl border-2 transition-all group relative ${state.currentRole === 'admin' ? 'border-[#F47B20] bg-[#FFF9F2]' : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'}"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3.5">
                    <span class="w-10 h-10 rounded-xl bg-[#292524] text-white flex items-center justify-center group-hover:bg-[#F47B20] transition-colors">
                      ${icons.shield}
                    </span>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Admin
                        </h3>
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#292524] text-white">Full Access</span>
                      </div>
                      <p class="text-xs text-[#6B625A] mt-0.5">
                        Portfolio budget overview (₹1080k), all pulse indicators, global metrics & governance.
                      </p>
                    </div>
                  </div>
                  <span class="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    ${icons.chevronRight}
                  </span>
                </div>
              </button>

              <!-- 2. Project Manager -->
              <button 
                type="button" 
                onclick="selectRoleAndProceed('pm')" 
                class="w-full text-left p-5 rounded-2xl border-2 transition-all group relative ${state.currentRole === 'pm' ? 'border-[#F47B20] bg-[#FFF9F2]' : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'}"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3.5">
                    <span class="w-10 h-10 rounded-xl bg-[#F47B20] text-white flex items-center justify-center group-hover:bg-[#DE6C15] transition-colors">
                      ${icons.folderKanban}
                    </span>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Project Manager
                        </h3>
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#F47B20] text-white">Project Scope</span>
                      </div>
                      <p class="text-xs text-[#6B625A] mt-0.5">
                        Manage assigned projects, budget tracking (₹420k), task creation & team assignments.
                      </p>
                    </div>
                  </div>
                  <span class="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    ${icons.chevronRight}
                  </span>
                </div>
              </button>

              <!-- 3. Coordinator -->
              <button 
                type="button" 
                onclick="selectRoleAndProceed('coordinator')" 
                class="w-full text-left p-5 rounded-2xl border-2 transition-all group relative ${state.currentRole === 'coordinator' ? 'border-[#F47B20] bg-[#FFF9F2]' : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'}"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3.5">
                    <span class="w-10 h-10 rounded-xl bg-[#F9B233] text-[#292524] flex items-center justify-center group-hover:bg-[#F47B20] group-hover:text-white transition-colors">
                      ${icons.listTodo}
                    </span>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Coordinator
                        </h3>
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#F9B233] text-[#292524]">Field Operations</span>
                      </div>
                      <p class="text-xs text-[#6B625A] mt-0.5">
                        Focused task checklist, field updates submission, milestone completion & ground tracking.
                      </p>
                    </div>
                  </div>
                  <span class="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    ${icons.chevronRight}
                  </span>
                </div>
              </button>

            </div>
          </div>

          <!-- Bottom Return Link -->
          <div class="mt-8 pt-6 border-t border-[#E5DDD3]/70 flex items-center justify-between text-xs text-[#6B625A]">
            <span>Need an access invite? Contact system administrator</span>
            <button 
              type="button" 
              onclick="navigateTo('login')" 
              class="font-medium hover:text-[#292524] hover:underline flex items-center gap-1"
            >
              ${icons.arrowLeft} Back to Login
            </button>
          </div>
        </section>

        <!-- Right Panel (Golden 40% Accent #F9B233) Feature Quote Block -->
        <section class="w-full md:w-[40%] bg-[#F9B233] p-8 sm:p-12 flex flex-col justify-between text-white relative">
          <div>
            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase text-white mb-6">
              Our Shared Mission
            </span>

            <!-- Feature Quote Block (White text #FFFFFF) -->
            <!-- Heading: "Make every effort count." (Gelasio, 32px) -->
            <h2 class="text-3xl sm:text-4xl font-heading text-white font-semibold leading-tight mb-4">
              "Make every effort count."
            </h2>

            <!-- Paragraph: "A clear, shared workspace for the people turning good intentions into measurable change." (Inter, 16px, line-height relaxed) -->
            <p class="text-base text-white/95 leading-relaxed font-body">
              A clear, shared workspace for the people turning good intentions into measurable change.
            </p>
          </div>

          <!-- Bottom Discrete Back Link -->
          <div class="pt-8 border-t border-white/25 flex items-center justify-between">
            <span class="text-xs text-white/80">Empowering 18,400+ Lives</span>
            <button 
              type="button" 
              onclick="navigateTo('login')" 
              class="text-sm font-medium text-white hover:text-[#292524] transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Back</span>
              ${icons.arrowLeft}
            </button>
          </div>
        </section>

      </div>
    </div>
  `;
}

// ==========================================
// SCREEN 3: DASHBOARD LAYOUT (/dashboard)
// Container: Cream background (#FFF9F2)
// Inner rounded white card viewport (#FFFFFF)
// Outer golden layout margin (#F9B233) - exact Figma wireframe match
// Top Nav Bar: Tabs (Dashboard, Projects, Tasks), Hamburger icon, Active Role Indicator
// Floating Left Vertical Toolbar: Saffron Pill with Lucide Icons
// KPI Metric Stat Cards Grid (4 Cards: Active Projects, Tasks Completed, Portfolio Budget, People Reached)
// Project Pulse Section: Clean Water (65%), Schools for all (40%), Mobile Health Clinic (100%)
// ==========================================
function renderDashboardScreen() {
  const roleConfig = roleConfigs[state.currentRole];
  const metrics = roleConfig.metrics;

  return `
    <div class="outer-golden-frame animate-fade-in">
      <div class="inner-white-viewport">
        
        <!-- Top Navigation Bar -->
        <header class="w-full border-b border-[#E5DDD3]/70 bg-white sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          <!-- Left: Text Title (Strict: NO brand logo image or logo SVG icon!) -->
          <div class="flex items-center gap-4">
            <button 
              type="button" 
              onclick="toggleMobileMenu()" 
              class="md:hidden p-2 rounded-lg text-[#292524] hover:bg-[#FFF9F2] focus:outline-none"
              aria-label="Open navigation menu"
            >
              ${icons.menu}
            </button>

            <div>
              <span class="text-[10px] tracking-widest uppercase text-[#6B625A] font-semibold block">NGO Platform</span>
              <h2 class="text-lg sm:text-xl font-heading font-semibold text-[#292524] leading-tight">
                Project Workspace
              </h2>
            </div>
          </div>

          <!-- Center: Tabs (Dashboard, Projects, Tasks) - Desktop -->
          <nav class="hidden md:flex items-center gap-1 bg-[#FFF9F2] p-1 rounded-xl border border-[#E5DDD3]/60" aria-label="Main Navigation">
            <button 
              onclick="switchTab('dashboard')" 
              class="px-5 py-2 text-sm font-medium rounded-lg transition-all ${state.currentTab === 'dashboard' ? 'bg-[#F47B20] text-white shadow-sm font-semibold' : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'}"
            >
              Dashboard
            </button>
            <button 
              onclick="switchTab('projects')" 
              class="px-5 py-2 text-sm font-medium rounded-lg transition-all ${state.currentTab === 'projects' ? 'bg-[#F47B20] text-white shadow-sm font-semibold' : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'}"
            >
              Projects
            </button>
            <button 
              onclick="switchTab('tasks')" 
              class="px-5 py-2 text-sm font-medium rounded-lg transition-all ${state.currentTab === 'tasks' ? 'bg-[#F47B20] text-white shadow-sm font-semibold' : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'}"
            >
              Tasks
            </button>
            <button 
              onclick="switchTab('analytics')" 
              class="px-4 py-2 text-sm font-medium rounded-lg transition-all ${state.currentTab === 'analytics' ? 'bg-[#F47B20] text-white shadow-sm font-semibold' : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'}"
            >
              Analytics
            </button>
            <button 
              onclick="switchTab('reports')" 
              class="px-4 py-2 text-sm font-medium rounded-lg transition-all ${state.currentTab === 'reports' ? 'bg-[#F47B20] text-white shadow-sm font-semibold' : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'}"
            >
              Reports
            </button>
          </nav>

          <!-- Right: Active Role Tag + Quick Switcher + Action Button -->
          <div class="flex items-center gap-3">
            
            <!-- Quick Role Switch Dropdown / Pill -->
            <div class="hidden lg:flex items-center gap-1 bg-[#FFF9F2] p-0.5 rounded-lg border border-[#E5DDD3] text-xs">
              <span class="px-2 py-1 text-[#6B625A] font-medium">Role:</span>
              <button 
                onclick="changeRoleDirectly('admin')" 
                class="px-2 py-1 rounded ${state.currentRole === 'admin' ? 'bg-[#292524] text-white font-semibold' : 'text-[#292524] hover:bg-white'}"
                title="Switch to Admin Role"
              >
                Admin
              </button>
              <button 
                onclick="changeRoleDirectly('pm')" 
                class="px-2 py-1 rounded ${state.currentRole === 'pm' ? 'bg-[#F47B20] text-white font-semibold' : 'text-[#292524] hover:bg-white'}"
                title="Switch to Project Manager Role"
              >
                PM
              </button>
              <button 
                onclick="changeRoleDirectly('coordinator')" 
                class="px-2 py-1 rounded ${state.currentRole === 'coordinator' ? 'bg-[#F9B233] text-[#292524] font-semibold' : 'text-[#292524] hover:bg-white'}"
                title="Switch to Coordinator Role"
              >
                Coord
              </button>
            </div>

            <!-- Current Active Role Indicator tag (e.g. "ADMIN" badge in Deep Charcoal #292524) -->
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${roleConfig.badgeClass} shadow-sm">
                ${roleConfig.label}
              </span>

              <!-- Switch Workspace Link -->
              <button 
                onclick="navigateTo('select-role')" 
                class="p-2 rounded-lg text-[#6B625A] hover:text-[#292524] hover:bg-[#FFF9F2] text-xs font-medium flex items-center gap-1"
                title="Switch Workspace Profile"
              >
                <span class="hidden sm:inline">Workspace</span>
                ${icons.chevronRight}
              </button>
            </div>

          </div>
        </header>

        <!-- Mobile Drawer Navigation -->
        ${state.mobileMenuOpen ? `
          <div class="md:hidden bg-white border-b border-[#E5DDD3] p-4 space-y-3 z-40 animate-fade-in">
            <div class="flex items-center justify-between pb-2 border-b border-[#E5DDD3]">
              <span class="text-xs uppercase font-semibold text-[#6B625A]">Navigation Tabs</span>
              <button onclick="toggleMobileMenu()" class="p-1 text-[#292524]">${icons.close}</button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="switchTab('dashboard'); toggleMobileMenu();" class="p-2.5 rounded-lg text-left text-sm font-medium ${state.currentTab === 'dashboard' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Dashboard</button>
              <button onclick="switchTab('projects'); toggleMobileMenu();" class="p-2.5 rounded-lg text-left text-sm font-medium ${state.currentTab === 'projects' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Projects</button>
              <button onclick="switchTab('tasks'); toggleMobileMenu();" class="p-2.5 rounded-lg text-left text-sm font-medium ${state.currentTab === 'tasks' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Tasks</button>
              <button onclick="switchTab('analytics'); toggleMobileMenu();" class="p-2.5 rounded-lg text-left text-sm font-medium ${state.currentTab === 'analytics' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Analytics</button>
              <button onclick="switchTab('reports'); toggleMobileMenu();" class="p-2.5 rounded-lg text-left text-sm font-medium ${state.currentTab === 'reports' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Reports</button>
            </div>
            <div class="pt-2">
              <span class="text-xs uppercase font-semibold text-[#6B625A] block mb-1">Active Role</span>
              <div class="grid grid-cols-3 gap-2 text-xs">
                <button onclick="changeRoleDirectly('admin')" class="p-2 rounded font-medium ${state.currentRole === 'admin' ? 'bg-[#292524] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">Admin</button>
                <button onclick="changeRoleDirectly('pm')" class="p-2 rounded font-medium ${state.currentRole === 'pm' ? 'bg-[#F47B20] text-white' : 'bg-[#FFF9F2] text-[#292524]'}">PM</button>
                <button onclick="changeRoleDirectly('coordinator')" class="p-2 rounded font-medium ${state.currentRole === 'coordinator' ? 'bg-[#F9B233] text-[#292524]'}">Coordinator</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Main Body Area with Floating Left Pill Toolbar -->
        <div class="flex-1 flex relative p-4 sm:p-6 lg:p-8">
          
          <!-- Floating Left Vertical Toolbar (Pill Sidebar) -->
          <!-- Styled with Saffron #F47B20 -->
          <aside class="hidden md:flex flex-col items-center mr-6 self-start sticky top-24 z-20">
            <nav class="floating-pill-toolbar" aria-label="Quick Toolbar">
              
              <!-- Grid / Dashboard (LayoutGrid) -->
              <button 
                type="button" 
                onclick="switchTab('dashboard')"
                class="${state.currentTab === 'dashboard' ? 'active' : ''}"
                aria-label="Dashboard Overview"
              >
                ${icons.layoutGrid}
                <span class="tooltip">Dashboard Overview</span>
              </button>

              <!-- Projects list (FolderKanban) -->
              <button 
                type="button" 
                onclick="switchTab('projects')"
                class="${state.currentTab === 'projects' ? 'active' : ''}"
                aria-label="Projects Directory"
              >
                ${icons.folderKanban}
                <span class="tooltip">Projects Directory</span>
              </button>

              <!-- Tasks checklist (ListTodo) -->
              <button 
                type="button" 
                onclick="switchTab('tasks')"
                class="${state.currentTab === 'tasks' ? 'active' : ''}"
                aria-label="Task Checklist"
              >
                ${icons.listTodo}
                <span class="tooltip">Task Checklist</span>
              </button>

              <!-- Analytics (TrendingUp) -->
              <button 
                type="button" 
                onclick="switchTab('analytics')"
                class="${state.currentTab === 'analytics' ? 'active' : ''}"
                aria-label="Impact Analytics"
              >
                ${icons.trendingUp}
                <span class="tooltip">Impact Analytics</span>
              </button>

              <!-- Reports (FileText) -->
              <button 
                type="button" 
                onclick="switchTab('reports')"
                class="${state.currentTab === 'reports' ? 'active' : ''}"
                aria-label="Compliance Reports"
              >
                ${icons.fileText}
                <span class="tooltip">Compliance Reports</span>
              </button>

            </nav>
          </aside>

          <!-- Main Viewport Content -->
          <main class="flex-1 overflow-x-hidden">
            ${renderTabContent()}
          </main>

        </div>

      </div>
    </div>
  `;
}

// ==========================================
// TAB VIEWS
// ==========================================
function renderTabContent() {
  if (state.currentTab === 'projects') {
    return renderProjectsTabView();
  } else if (state.currentTab === 'tasks') {
    return renderTasksTabView();
  } else if (state.currentTab === 'analytics') {
    return renderAnalyticsTabView();
  } else if (state.currentTab === 'reports') {
    return renderReportsTabView();
  }
  return renderDashboardOverviewTabView();
}

// ==========================================
// 1. DASHBOARD OVERVIEW TAB
// KPI Metric Stat Cards + Project Pulse Section + Live Field Activity
// ==========================================
function renderDashboardOverviewTabView() {
  const roleConfig = roleConfigs[state.currentRole];
  const metrics = roleConfig.metrics;

  return `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Top Context Banner & Primary Role Action -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 class="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            ${roleConfig.fullName} Overview
          </h1>
          <p class="text-sm text-[#6B625A] mt-0.5">
            ${roleConfig.subtitle}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button 
            type="button" 
            onclick="openModal('${roleConfig.quickActionModal}')" 
            class="px-4 py-2.5 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-sm shadow-sm transition-all flex items-center gap-2"
          >
            ${icons.plus}
            <span>${roleConfig.quickActionText}</span>
          </button>
        </div>
      </div>

      <!-- KPI METRIC STAT CARDS GRID (4 Cards in a responsive row) -->
      <!-- 1. Active Projects: Value "3" + Icon (Folder) -->
      <!-- 2. Tasks Completed: Value "6/18" + Icon (ListChecks) -->
      <!-- 3. Portfolio Budget: Value "₹1080k" + Icon (IndianRupee) -->
      <!-- 4. People Reached: Value "18.4k" + Icon (Users) -->
      <!-- Card styling: Soft white/grey background (#FFFFFF), subtle shadow, rounded corners, headings in Gelasio and metrics in bold Inter (#292524) -->
      <section aria-label="Key Performance Indicators" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
  
      </section>

      <!-- PROJECT PULSE SECTION -->
      <!-- Title: "Project Pulse" (Gelasio, Deep Charcoal #292524) -->
      <!-- Subtitle: "Current delivery metric" (Muted Text #6B625A) -->
      <!-- Progress Bars List: -->
      <!-- 1. Clean Water Initiative: ~65% Progress bar (Saffron #F47B20) -->
      <!-- 2. Schools for all: ~40% Progress bar (Golden #F9B233) -->
      <!-- 3. Mobile Health Clinic: 100% Completed Progress bar (Accent Green or #F47B20 with 100% badge) -->
      <section class="bg-[#FFF9F2]/70 rounded-2xl p-6 sm:p-8 border border-[#E5DDD3]" aria-labelledby="projectPulseTitle">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 id="projectPulseTitle" class="text-2xl font-heading font-semibold text-[#292524]">
              Project Pulse
            </h2>
            <p class="text-sm text-[#6B625A]">
              Current delivery metric & milestone fulfillment rates
            </p>
          </div>
          <span class="text-xs text-[#6B625A] flex items-center gap-1.5 self-start sm:self-center">
            <span class="w-2 h-2 rounded-full bg-[#F47B20] animate-pulse-glow"></span>
            Live synced from field updates
          </span>
        </div>

        <div class="space-y-6">
          
          <!-- 1. Clean Water Initiative (~65%) -->
          <div class="bg-white p-5 rounded-xl border border-[#E5DDD3] shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-semibold font-heading text-[#292524]">
                    Clean Water Initiative
                  </h3>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/30">
                    Water & Sanitation
                  </span>
                </div>
                <p class="text-xs text-[#6B625A] mt-0.5 flex items-center gap-2">
                  <span>${icons.mapPin} Barmer & Jaisalmer, Rajasthan</span>
                  <span>•</span>
                  <span>Lead: Anita Roy</span>
                </p>
              </div>
              <div class="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                <span class="text-sm font-bold text-[#292524]">65%</span>
                <span class="text-xs text-[#6B625A]">Budget Spent: ₹234k / ₹360k</span>
              </div>
            </div>

            <!-- Progress Bar (Saffron #F47B20) -->
            <div class="w-full bg-[#FFF9F2] h-3.5 rounded-full overflow-hidden border border-[#E5DDD3]/80 p-0.5">
              <div 
                class="bg-[#F47B20] h-full rounded-full transition-all duration-700 ease-out" 
                style="width: 65%;" 
                role="progressbar" 
                aria-valuenow="65" 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            
            <div class="mt-2.5 flex items-center justify-between text-xs text-[#6B625A]">
              <span>Next Milestone: Commission solar filtration pump in Hamlet 4</span>
              <span class="text-[#292524] font-medium">Target: 6,200 villagers</span>
            </div>
          </div>

          <!-- 2. Schools for all (~40%) -->
          <div class="bg-white p-5 rounded-xl border border-[#E5DDD3] shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-semibold font-heading text-[#292524]">
                    Schools for all
                  </h3>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FFF9F2] text-[#F9B233] border border-[#F9B233]/40">
                    Primary Education
                  </span>
                </div>
                <p class="text-xs text-[#6B625A] mt-0.5 flex items-center gap-2">
                  <span>${icons.mapPin} Dhar & Jhabua, MP</span>
                  <span>•</span>
                  <span>Lead: Rahul Verma</span>
                </p>
              </div>
              <div class="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                <span class="text-sm font-bold text-[#292524]">40%</span>
                <span class="text-xs text-[#6B625A]">Budget Spent: ₹192k / ₹480k</span>
              </div>
            </div>

            <!-- Progress Bar (Golden #F9B233) -->
            <div class="w-full bg-[#FFF9F2] h-3.5 rounded-full overflow-hidden border border-[#E5DDD3]/80 p-0.5">
              <div 
                class="bg-[#F9B233] h-full rounded-full transition-all duration-700 ease-out" 
                style="width: 40%;" 
                role="progressbar" 
                aria-valuenow="40" 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            
            <div class="mt-2.5 flex items-center justify-between text-xs text-[#6B625A]">
              <span>Next Milestone: Deliver smartboard kits to Model Upper Primary School</span>
              <span class="text-[#292524] font-medium">Target: 4,800 students</span>
            </div>
          </div>

          <!-- 3. Mobile Health Clinic (100% Completed) -->
          <div class="bg-white p-5 rounded-xl border border-[#E5DDD3] shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-base font-semibold font-heading text-[#292524]">
                    Mobile Health Clinic
                  </h3>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#292524] text-[#FFF9F2]">
                    Healthcare Access
                  </span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F47B20] text-white">
                    100% Completed
                  </span>
                </div>
                <p class="text-xs text-[#6B625A] mt-0.5 flex items-center gap-2">
                  <span>${icons.mapPin} Gadchiroli, Maharashtra</span>
                  <span>•</span>
                  <span>Lead: Dr. Kavita Rao</span>
                </p>
              </div>
              <div class="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                <span class="text-sm font-bold text-[#F47B20]">100%</span>
                <span class="text-xs text-[#6B625A]">Budget Fully Disbursed: ₹240k</span>
              </div>
            </div>

            <!-- Completed Progress Bar (Accent Saffron #F47B20 with 100% badge) -->
            <div class="w-full bg-[#FFF9F2] h-3.5 rounded-full overflow-hidden border border-[#E5DDD3]/80 p-0.5">
              <div 
                class="bg-[#F47B20] h-full rounded-full transition-all duration-700 ease-out" 
                style="width: 100%;" 
                role="progressbar" 
                aria-valuenow="100" 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            
            <div class="mt-2.5 flex items-center justify-between text-xs text-[#6B625A]">
              <span>Phase 1 Completed • Transitioning to regular health department handover</span>
              <span class="text-[#292524] font-medium">Reached: 7,400 patients</span>
            </div>
          </div>

        </div>

      </section>

      <!-- Bottom Split: Live Field Activity Feed & Role Permission Info -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Live Field Updates (2 Columns) -->
        <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-lg font-heading font-semibold text-[#292524]">
                Recent Field Updates
              </h3>
              <p class="text-xs text-[#6B625A]">Real-time field coordinator submissions & photo logs</p>
            </div>
            <button 
              onclick="openModal('field-update')" 
              class="text-xs font-semibold text-[#F47B20] hover:underline flex items-center gap-1"
            >
              + Log Field Note
            </button>
          </div>

          <div class="space-y-3.5">
            ${state.fieldUpdates.map(u => `
              <div class="p-3.5 rounded-xl bg-[#FFF9F2]/70 border border-[#E5DDD3]/70 hover:border-[#F9B233] transition-all">
                <div class="flex items-center justify-between text-xs mb-1">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold text-[#292524]">${u.author}</span>
                    <span class="px-1.5 py-0.5 rounded text-[10px] bg-white border border-[#E5DDD3] text-[#6B625A]">${u.role}</span>
                  </div>
                  <span class="text-[#6B625A]">${u.timestamp}</span>
                </div>
                <p class="text-xs text-[#292524] leading-relaxed mb-2">${u.text}</p>
                <div class="flex items-center justify-between text-[11px] text-[#6B625A]">
                  <span class="flex items-center gap-1">${icons.mapPin} ${u.location}</span>
                  <span class="px-2 py-0.5 rounded-full bg-white text-[#292524] font-medium border border-[#E5DDD3]">${u.badge}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Role Workspace Status (1 Column) -->
        <div class="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-heading font-semibold text-[#292524] mb-1">
              Role Authority
            </h3>
            <p class="text-xs text-[#6B625A] mb-4">Current session permissions</p>
            
            <div class="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#F9B233]/40 mb-4">
              <span class="text-[10px] uppercase font-bold text-[#F47B20] block mb-1">Active User Role</span>
              <p class="text-base font-heading font-semibold text-[#292524]">${roleConfig.fullName}</p>
              <p class="text-xs text-[#6B625A] mt-1 leading-relaxed">${roleConfig.description}</p>
            </div>

            <ul class="text-xs space-y-2 text-[#6B625A]">
              <li class="flex items-center gap-2">
                <span class="text-[#F47B20]">${icons.check}</span>
                <span>Audit logging enabled</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-[#F47B20]">${icons.check}</span>
                <span>Strict WCAG 2.1 AA color contrast compliance</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-[#F47B20]">${icons.check}</span>
                <span>Zero brand logo policy strictly enforced</span>
              </li>
            </ul>
          </div>

          <div class="pt-6 border-t border-[#E5DDD3]/70 mt-4">
            <button 
              onclick="navigateTo('select-role')" 
              class="w-full py-2.5 px-4 bg-[#FFF9F2] hover:bg-[#292524] hover:text-white text-[#292524] text-xs font-semibold rounded-xl border border-[#292524]/20 transition-all text-center block"
            >
              Switch Workspace / Profile
            </button>
          </div>
        </div>

      </div>

    </div>
  `;
}

// ==========================================
// 2. PROJECTS TAB VIEW
// ==========================================
function renderProjectsTabView() {
  return `
    <div class="space-y-6 animate-fade-in">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 class="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            Projects Directory
          </h1>
          <p class="text-sm text-[#6B625A] mt-0.5">
            Explore ongoing grassroots interventions, budget allocations, and delivery schedules.
          </p>
        </div>
        <button 
          onclick="openModal('new-task')" 
          class="px-4 py-2.5 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-sm shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          ${icons.plus}
          <span>Add New Initiative</span>
        </button>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${state.projects.map(p => `
          <div class="bg-white rounded-2xl border border-[#E5DDD3] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2 mb-3">
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${p.status === 'Completed' ? 'bg-[#292524] text-white' : 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40'}">
                  ${p.category}
                </span>
                <span class="text-xs font-bold ${p.status === 'Completed' ? 'text-[#F47B20]' : 'text-[#6B625A]'}">
                  ${p.status}
                </span>
              </div>

              <h3 class="text-xl font-heading font-semibold text-[#292524] mb-2">
                ${p.title}
              </h3>
              
              <p class="text-xs text-[#6B625A] leading-relaxed mb-4">
                ${p.description}
              </p>

              <div class="space-y-2 text-xs text-[#6B625A] mb-4">
                <div class="flex items-center gap-1.5">
                  <span class="text-[#F47B20]">${icons.mapPin}</span>
                  <span>${p.location}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[#F47B20]">${icons.users}</span>
                  <span>${p.beneficiaries}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[#F47B20]">${icons.shield}</span>
                  <span>Lead: <strong class="text-[#292524]">${p.lead}</strong> (${p.leadRole})</span>
                </div>
              </div>
            </div>

            <!-- Progress & Budget Footer -->
            <div class="pt-4 border-t border-[#E5DDD3]/70">
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-semibold text-[#292524]">${p.progress}% Delivery</span>
                <span class="text-[#6B625A]">${p.spent} / ${p.budget}</span>
              </div>
              <div class="w-full bg-[#FFF9F2] h-2.5 rounded-full overflow-hidden border border-[#E5DDD3]">
                <div class="h-full rounded-full" style="width: ${p.progress}%; background-color: ${p.progressColor};"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 3. TASKS TAB VIEW (Interactive Checklist)
// Checking a task immediately updates state and KPI metrics!
// ==========================================
function renderTasksTabView() {
  const filteredTasks = state.tasks.filter(t => {
    if (state.taskFilter === 'all') return true;
    return t.status === state.taskFilter;
  });

  const completedCount = state.tasks.filter(t => t.status === 'completed').length;
  const inProgressCount = state.tasks.filter(t => t.status === 'in-progress').length;
  const reviewCount = state.tasks.filter(t => t.status === 'review').length;

  return `
    <div class="space-y-6 animate-fade-in">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 class="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            Tasks Checklist
          </h1>
          <p class="text-sm text-[#6B625A] mt-0.5">
            Interactive task management. Checking a task updates the live KPI completion metric immediately.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button 
            onclick="openModal('field-update')" 
            class="px-3.5 py-2 rounded-xl bg-[#FFF9F2] hover:bg-white text-[#292524] border border-[#E5DDD3] font-medium text-xs shadow-sm transition-all"
          >
            Submit Field Update
          </button>
          <button 
            onclick="openModal('new-task')" 
            class="px-4 py-2 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-xs shadow-sm transition-all flex items-center gap-1.5"
          >
            ${icons.plus}
            <span>Add Task</span>
          </button>
        </div>
      </div>

      <!-- Task Filter Pills -->
      <div class="flex flex-wrap items-center gap-2">
        <button 
          onclick="setTaskFilter('all')" 
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${state.taskFilter === 'all' ? 'bg-[#292524] text-white' : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#292524]'}"
        >
          All Tasks (${state.tasks.length})
        </button>
        <button 
          onclick="setTaskFilter('in-progress')" 
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${state.taskFilter === 'in-progress' ? 'bg-[#F47B20] text-white' : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#F47B20]'}"
        >
          In Progress (${inProgressCount})
        </button>
        <button 
          onclick="setTaskFilter('review')" 
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${state.taskFilter === 'review' ? 'bg-[#F9B233] text-[#292524]' : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#F9B233]'}"
        >
          Needs Review (${reviewCount})
        </button>
        <button 
          onclick="setTaskFilter('completed')" 
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${state.taskFilter === 'completed' ? 'bg-[#292524] text-[#FFF9F2]' : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#292524]'}"
        >
          Completed (${completedCount})
        </button>
      </div>

      <!-- Task Items List -->
      <div class="bg-white rounded-2xl border border-[#E5DDD3] divide-y divide-[#E5DDD3]/60 shadow-sm overflow-hidden">
        ${filteredTasks.map(t => `
          <div class="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-[#FFF9F2]/50 transition-colors ${t.status === 'completed' ? 'bg-[#FFF9F2]/30' : ''}">
            
            <div class="flex items-start gap-3.5 flex-1">
              <!-- Custom Checkbox -->
              <button 
                type="button" 
                onclick="toggleTaskStatus('${t.id}')"
                class="mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${t.status === 'completed' ? 'bg-[#F47B20] border-[#F47B20] text-white' : 'border-[#E5DDD3] hover:border-[#F47B20] bg-white'}"
                aria-label="Toggle task ${t.title}"
              >
                ${t.status === 'completed' ? icons.check : ''}
              </button>

              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <h4 class="text-sm font-semibold text-[#292524] ${t.status === 'completed' ? 'line-through text-[#6B625A]' : ''}">
                    ${t.title}
                  </h4>
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${t.priority === 'High' ? 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40' : t.priority === 'Medium' ? 'bg-[#FFF9F2] text-[#F9B233] border border-[#F9B233]/40' : 'bg-[#F8F6F2] text-[#6B625A]'}">
                    ${t.priority}
                  </span>
                </div>
                
                <div class="flex flex-wrap items-center gap-3 text-xs text-[#6B625A]">
                  <span class="font-medium text-[#292524]">${t.project}</span>
                  <span>•</span>
                  <span>Assignee: ${t.assignee} (${t.role})</span>
                  <span>•</span>
                  <span class="flex items-center gap-1">${icons.clock} Due ${t.dueDate}</span>
                </div>
              </div>
            </div>

            <!-- Status Tag -->
            <div class="self-center sm:self-auto">
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${t.status === 'completed' ? 'bg-[#292524] text-white' : t.status === 'review' ? 'bg-[#F9B233] text-[#292524]' : 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40'}">
                ${t.status}
              </span>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

// ==========================================
// 4. ANALYTICS TAB VIEW
// ==========================================
function renderAnalyticsTabView() {
  return `
    <div class="space-y-6 animate-fade-in">
      <div class="pb-4 border-b border-[#E5DDD3]/70">
        <h1 class="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
          Portfolio Impact Analytics
        </h1>
        <p class="text-sm text-[#6B625A] mt-0.5">
          Audited metrics on beneficiary reach, geographic distribution, and resource effectiveness.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm">
          <h3 class="text-base font-heading font-semibold text-[#292524] mb-2">Fund Allocation by Sector</h3>
          <p class="text-xs text-[#6B625A] mb-4">Total Portfolio: ₹1,080k</p>
          <div class="space-y-3 text-xs">
            <div>
              <div class="flex justify-between mb-1">
                <span>Education (Schools for All)</span>
                <span class="font-bold text-[#292524]">₹480k (44.4%)</span>
              </div>
              <div class="w-full bg-[#FFF9F2] h-2 rounded-full overflow-hidden">
                <div class="h-full bg-[#F47B20]" style="width: 44.4%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Water & Sanitation (Clean Water)</span>
                <span class="font-bold text-[#292524]">₹360k (33.3%)</span>
              </div>
              <div class="w-full bg-[#FFF9F2] h-2 rounded-full overflow-hidden">
                <div class="h-full bg-[#F9B233]" style="width: 33.3%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Health Outreach (Mobile Clinic)</span>
                <span class="font-bold text-[#292524]">₹240k (22.2%)</span>
              </div>
              <div class="w-full bg-[#FFF9F2] h-2 rounded-full overflow-hidden">
                <div class="h-full bg-[#292524]" style="width: 22.2%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm">
          <h3 class="text-base font-heading font-semibold text-[#292524] mb-2">Beneficiary Demographics</h3>
          <p class="text-xs text-[#6B625A] mb-4">18,400 Verified Individuals</p>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between py-1.5 border-b border-[#E5DDD3]/60">
              <span class="text-[#6B625A]">Rural Women & Mothers</span>
              <span class="font-bold text-[#292524]">7,820 (42.5%)</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-[#E5DDD3]/60">
              <span class="text-[#6B625A]">Primary School Students</span>
              <span class="font-bold text-[#292524]">4,800 (26.1%)</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-[#E5DDD3]/60">
              <span class="text-[#6B625A]">Smallholder Farming Families</span>
              <span class="font-bold text-[#292524]">4,180 (22.7%)</span>
            </div>
            <div class="flex justify-between py-1.5">
              <span class="text-[#6B625A]">Elderly & Differently-Abled</span>
              <span class="font-bold text-[#292524]">1,600 (8.7%)</span>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm">
          <h3 class="text-base font-heading font-semibold text-[#292524] mb-2">Delivery Efficiency</h3>
          <p class="text-xs text-[#6B625A] mb-4">Milestone Adherence Metric</p>
          <div class="p-4 rounded-xl bg-[#FFF9F2] border border-[#F9B233]/40 text-center">
            <span class="text-3xl font-bold font-body text-[#F47B20]">94.2%</span>
            <p class="text-xs font-semibold text-[#292524] mt-1">On-Time Milestone Velocity</p>
            <p class="text-[11px] text-[#6B625A] mt-1">Average resolution time: 3.2 days per field block.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 5. REPORTS TAB VIEW
// ==========================================
function renderReportsTabView() {
  return `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 class="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            Governance & Donor Reports
          </h1>
          <p class="text-sm text-[#6B625A] mt-0.5">
            Download verified utilization certificates and compliance summaries.
          </p>
        </div>
        <button 
          onclick="triggerToast('Generated Q3 Audit Package (PDF Ready)')" 
          class="px-4 py-2.5 rounded-xl bg-[#292524] hover:bg-black text-[#FFF9F2] text-xs font-semibold transition-all flex items-center gap-2"
        >
          ${icons.fileText} Export All Reports
        </button>
      </div>

      <div class="bg-white rounded-2xl border border-[#E5DDD3] divide-y divide-[#E5DDD3]/60 shadow-sm">
        <div class="p-5 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-semibold text-[#292524]">Q3 2026 Statutory Compliance & Fund Audit</h4>
            <p class="text-xs text-[#6B625A]">Audited by Singhania & Associates • Certified on Oct 05, 2026</p>
          </div>
          <button onclick="triggerToast('Downloading Statutory Compliance Report')" class="px-3 py-1.5 rounded-lg border border-[#E5DDD3] hover:border-[#292524] text-xs font-semibold text-[#292524]">Download</button>
        </div>
        <div class="p-5 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-semibold text-[#292524]">Rajasthan Clean Water Initiative: Mid-Term Evaluation</h4>
            <p class="text-xs text-[#6B625A]">Solar pump yield tests & water purity TDS certification</p>
          </div>
          <button onclick="triggerToast('Downloading Clean Water Mid-term Report')" class="px-3 py-1.5 rounded-lg border border-[#E5DDD3] hover:border-[#292524] text-xs font-semibold text-[#292524]">Download</button>
        </div>
        <div class="p-5 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-semibold text-[#292524]">Mobile Health Van Phase 1 Handover Dossier</h4>
            <p class="text-xs text-[#6B625A]">Clinical records, patient counts (7,400) & district health office sign-off</p>
          </div>
          <button onclick="triggerToast('Downloading Health Handover Dossier')" class="px-3 py-1.5 rounded-lg border border-[#E5DDD3] hover:border-[#292524] text-xs font-semibold text-[#292524]">Download</button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// MODALS
// ==========================================
function renderModals() {
  if (!state.activeModal) return '';

  if (state.activeModal === 'help') {
    return `
      <div class="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onclick="closeModal(event)">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#F9B233]/40" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5DDD3]">
            <h3 class="text-lg font-heading font-semibold text-[#292524]">NGO Platform Help & Support</h3>
            <button onclick="closeModal()" class="text-[#6B625A] hover:text-[#292524] p-1">${icons.close}</button>
          </div>
          <div class="py-4 space-y-3 text-xs text-[#6B625A] leading-relaxed">
            <p><strong class="text-[#292524]">Sign-in Troubleshooting:</strong> Use your registered NGO email (e.g., admin@grassroots.ngo) or click one of the instant demonstration buttons.</p>
            <p><strong class="text-[#292524]">Field Support Hotline:</strong> +91 1800-419-8800 (Mon–Sat, 8:00 AM – 7:00 PM IST)</p>
            <p><strong class="text-[#292524]">Offline SMS Bridge:</strong> Field coordinators in low-network regions can submit water borehole logs by SMSing to 56161.</p>
          </div>
          <button onclick="closeModal()" class="w-full py-2.5 bg-[#F47B20] text-white font-medium text-xs rounded-xl hover:bg-[#DE6C15] transition-colors">
            Got it, thanks
          </button>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'forgot-pw') {
    return `
      <div class="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onclick="closeModal(event)">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#F9B233]/40" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5DDD3]">
            <h3 class="text-lg font-heading font-semibold text-[#292524]">Password Recovery</h3>
            <button onclick="closeModal()" class="text-[#6B625A] hover:text-[#292524] p-1">${icons.close}</button>
          </div>
          <form onsubmit="event.preventDefault(); handleForgotPwSubmit();" class="py-4 space-y-4">
            <p class="text-xs text-[#6B625A]">Enter your organizational email to receive an instant verification reset link.</p>
            <input 
              type="email" 
              required 
              placeholder="e.g. coordinator@grassroots.ngo"
              class="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-xs text-[#292524] focus:bg-white focus:border-[#F47B20] focus:ring-1 focus:ring-[#F47B20]"
            />
            <button type="submit" class="w-full py-2.5 bg-[#F47B20] text-white font-medium text-xs rounded-xl hover:bg-[#DE6C15] transition-colors">
              Send Recovery Link
            </button>
          </form>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'field-update') {
    return `
      <div class="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onclick="closeModal(event)">
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#F9B233]/40" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5DDD3]">
            <h3 class="text-lg font-heading font-semibold text-[#292524]">Submit Field Update</h3>
            <button onclick="closeModal()" class="text-[#6B625A] hover:text-[#292524] p-1">${icons.close}</button>
          </div>
          <form onsubmit="event.preventDefault(); handleFieldUpdateSubmit(this);" class="py-4 space-y-4 text-xs">
            <div>
              <label class="block font-medium text-[#6B625A] mb-1">Intervention Project:</label>
              <select name="project" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]">
                <option>Clean Water Initiative (Barmer / Jaisalmer)</option>
                <option>Schools for all (Dhar / Jhabua)</option>
                <option>Mobile Health Clinic (Gadchiroli)</option>
              </select>
            </div>
            <div>
              <label class="block font-medium text-[#6B625A] mb-1">Field Block / Village Location:</label>
              <input type="text" name="location" required placeholder="e.g. Hamlet 4, Pokhran Cluster" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]" />
            </div>
            <div>
              <label class="block font-medium text-[#6B625A] mb-1">Activity Observations & Progress Notes:</label>
              <textarea name="notes" required rows="3" placeholder="Describe progress, borehole flow rate, student attendance, or supplies received..." class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]"></textarea>
            </div>
            <div>
              <label class="block font-medium text-[#6B625A] mb-1">Beneficiary Headcount / Tag:</label>
              <input type="text" name="badge" placeholder="e.g. 85 Villagers or Water Sample TDS 210" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]" />
            </div>
            <div class="pt-2 flex justify-end gap-2">
              <button type="button" onclick="closeModal()" class="px-4 py-2 border border-[#E5DDD3] rounded-xl text-[#6B625A]">Cancel</button>
              <button type="submit" class="px-4 py-2 bg-[#F47B20] text-white font-medium rounded-xl hover:bg-[#DE6C15]">Publish Field Log</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'new-task') {
    return `
      <div class="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onclick="closeModal(event)">
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#F9B233]/40" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5DDD3]">
            <h3 class="text-lg font-heading font-semibold text-[#292524]">Create New Project Task</h3>
            <button onclick="closeModal()" class="text-[#6B625A] hover:text-[#292524] p-1">${icons.close}</button>
          </div>
          <form onsubmit="event.preventDefault(); handleNewTaskSubmit(this);" class="py-4 space-y-4 text-xs">
            <div>
              <label class="block font-medium text-[#6B625A] mb-1">Task Title:</label>
              <input type="text" name="title" required placeholder="e.g. Conduct second water tank sanitization" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-medium text-[#6B625A] mb-1">Project:</label>
                <select name="project" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]">
                  <option>Clean Water Initiative</option>
                  <option>Schools for all</option>
                  <option>Mobile Health Clinic</option>
                </select>
              </div>
              <div>
                <label class="block font-medium text-[#6B625A] mb-1">Priority:</label>
                <select name="priority" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Normal</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-medium text-[#6B625A] mb-1">Assignee:</label>
                <input type="text" name="assignee" required value="Suresh Kumar" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]" />
              </div>
              <div>
                <label class="block font-medium text-[#6B625A] mb-1">Target Due Date:</label>
                <input type="text" name="dueDate" required value="Nov 05, 2026" class="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]" />
              </div>
            </div>
            <div class="pt-2 flex justify-end gap-2">
              <button type="button" onclick="closeModal()" class="px-4 py-2 border border-[#E5DDD3] rounded-xl text-[#6B625A]">Cancel</button>
              <button type="submit" class="px-4 py-2 bg-[#F47B20] text-white font-medium rounded-xl hover:bg-[#DE6C15]">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  return '';
}

// Toast Notification
function renderToast() {
  if (!state.toastMessage) return '';
  return `
    <div class="fixed bottom-6 right-6 z-50 bg-[#292524] text-[#FFF9F2] px-4 py-3 rounded-xl shadow-xl border border-[#F9B233] text-xs flex items-center gap-2 animate-fade-in">
      <span class="text-[#F47B20]">${icons.check}</span>
      <span>${state.toastMessage}</span>
    </div>
  `;
}

// Quick Screen Switcher Bar (Bottom Bar for effortless pair-programming review)
function renderScreenSwitcherBar() {
  return `
    <nav aria-label="Development Navigator" class="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5DDD3] shadow-lg flex items-center gap-2 text-xs">
      <span class="text-[#6B625A] font-semibold text-[11px] hidden sm:inline">Screen:</span>
      <button 
        onclick="navigateTo('login')" 
        class="px-2.5 py-1 rounded-full font-medium transition-colors ${state.currentScreen === 'login' ? 'bg-[#F47B20] text-white' : 'text-[#6B625A] hover:text-[#292524]'}"
      >
        1. Login
      </button>
      <button 
        onclick="navigateTo('select-role')" 
        class="px-2.5 py-1 rounded-full font-medium transition-colors ${state.currentScreen === 'select-role' ? 'bg-[#F47B20] text-white' : 'text-[#6B625A] hover:text-[#292524]'}"
      >
        2. Select Role
      </button>
      <button 
        onclick="navigateTo('dashboard')" 
        class="px-2.5 py-1 rounded-full font-medium transition-colors ${state.currentScreen === 'dashboard' ? 'bg-[#F47B20] text-white' : 'text-[#6B625A] hover:text-[#292524]'}"
      >
        3. Dashboard
      </button>
    </nav>
  `;
}

// ==========================================
// ACTION HANDLERS & EVENT LOGIC
// ==========================================
function navigateTo(screen) {
  state.currentScreen = screen;
  state.mobileMenuOpen = false;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectRoleAndProceed(role) {
  state.currentRole = role;
  state.currentScreen = 'dashboard';
  triggerToast(`Workspace active: ${roleConfigs[role].fullName}`);
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeRoleDirectly(role) {
  state.currentRole = role;
  triggerToast(`Switched view to ${roleConfigs[role].fullName}`);
  renderApp();
}

function quickLogin(role) {
  state.currentRole = role;
  state.currentScreen = 'dashboard';
  triggerToast(`Signed in as ${roleConfigs[role].fullName}`);
  renderApp();
}

function handleLoginSubmit() {
  state.currentScreen = 'select-role';
  renderApp();
}

function switchTab(tab) {
  state.currentTab = tab;
  renderApp();
}

function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  renderApp();
}

function toggleTaskStatus(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (task) {
    task.status = task.status === 'completed' ? 'in-progress' : 'completed';
    triggerToast(task.status === 'completed' ? `Task completed: "${task.title.slice(0, 30)}..."` : 'Task reopened');
    renderApp();
  }
}

function setTaskFilter(filter) {
  state.taskFilter = filter;
  renderApp();
}

function openModal(modalType) {
  state.activeModal = modalType;
  renderApp();
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  state.activeModal = null;
  renderApp();
}

function triggerToast(message) {
  state.toastMessage = message;
  renderApp();
  setTimeout(() => {
    state.toastMessage = null;
    const toastEl = document.querySelector('.fixed.bottom-6.right-6');
    if (toastEl) toastEl.remove();
  }, 3200);
}

function handleForgotPwSubmit() {
  closeModal();
  triggerToast('Password reset link dispatched to email.');
}

function handleFieldUpdateSubmit(form) {
  const formData = new FormData(form);
  const newUpdate = {
    id: 'fu' + Date.now(),
    author: state.currentRole === 'coordinator' ? 'Suresh Kumar' : 'Anita Roy',
    role: state.currentRole === 'coordinator' ? 'Coordinator' : 'Project Manager',
    location: formData.get('location') || 'Field Site',
    timestamp: 'Just now',
    text: formData.get('notes'),
    badge: formData.get('badge') || 'Field Verified'
  };
  state.fieldUpdates.unshift(newUpdate);
  closeModal();
  triggerToast('Field report published and logged into live pulse.');
}

function handleNewTaskSubmit(form) {
  const formData = new FormData(form);
  const newTask = {
    id: 't' + Date.now(),
    title: formData.get('title'),
    project: formData.get('project'),
    assignee: formData.get('assignee'),
    role: 'Coordinator',
    status: 'in-progress',
    priority: formData.get('priority'),
    dueDate: formData.get('dueDate')
  };
  state.tasks.unshift(newTask);
  closeModal();
  triggerToast('New task registered and assigned.');
}

function attachEventListeners() {
  // Password toggle
  const toggleBtn = document.getElementById('togglePasswordBtn');
  const passwordInput = document.getElementById('passwordInput');
  if (toggleBtn && passwordInput) {
    toggleBtn.onclick = () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
    };
  }

  // Modals
  const helpBtn = document.getElementById('openHelpBtn');
  if (helpBtn) helpBtn.onclick = () => openModal('help');

  const forgotPwBtn = document.getElementById('openForgotPwBtn');
  if (forgotPwBtn) forgotPwBtn.onclick = () => openModal('forgot-pw');

  const loginBackBtn = document.getElementById('loginBackBtn');
  if (loginBackBtn) loginBackBtn.onclick = () => triggerToast('Already on primary login portal.');
}

// Global exposure for inline events
window.navigateTo = navigateTo;
window.selectRoleAndProceed = selectRoleAndProceed;
window.changeRoleDirectly = changeRoleDirectly;
window.quickLogin = quickLogin;
window.handleLoginSubmit = handleLoginSubmit;
window.switchTab = switchTab;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleTaskStatus = toggleTaskStatus;
window.setTaskFilter = setTaskFilter;
window.openModal = openModal;
window.closeModal = closeModal;
window.triggerToast = triggerToast;
window.handleForgotPwSubmit = handleForgotPwSubmit;
window.handleFieldUpdateSubmit = handleFieldUpdateSubmit;
window.handleNewTaskSubmit = handleNewTaskSubmit;

// Boot - Check readyState and invoke immediately so blank screen is impossible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
// Immediate call
try {
  renderApp();
} catch (e) {
  console.error("NGO App initialization error:", e);
}
