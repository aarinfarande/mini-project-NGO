'use client';

import React, { useState } from 'react';
import { Menu, Plus, Folder, ListChecks, IndianRupee, Users, Check, MapPin, LogOut } from 'lucide-react';
import FloatingToolbar from './FloatingToolbar';
import StatCard from './StatCard';
import ProjectPulse from './ProjectPulse';
import ProjectsView from './ProjectsView';
import TasksView from './TasksView';

export default function DashboardLayout({
  role,
  roleConfig,
  currentTab,
  onSelectTab,
  onSignOut,
  projects,
  tasks,
  fieldUpdates,
  onToggleTask,
  onUpdateProjectProgress,
  taskFilter,
  onSetFilter,
  onOpenModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic KPI Metric Calculations
  const completedTasksCount = tasks.filter((t) => t.status === 'completed').length;
  
  // Active Projects dynamically computed from projects state
  const activeProjectsCount = projects.filter((p) => p.status === 'Active' || p.progress < 100).length;
  const pmProjectsCount = projects.filter((p) => p.id !== 'p3' && (p.status === 'Active' || p.progress < 100)).length;

  const roleActiveProjects = role === 'admin' 
    ? activeProjectsCount 
    : role === 'pm' 
    ? pmProjectsCount 
    : 1;

  // Real-time task count for specific roles
  const roleTasksDisplay = role === 'admin'
    ? `${completedTasksCount}/${tasks.length}`
    : role === 'pm'
    ? `${tasks.filter(t => t.project !== 'Mobile Health Clinic' && t.status === 'completed').length}/${tasks.filter(t => t.project !== 'Mobile Health Clinic').length}`
    : `${tasks.filter(t => t.role === 'Coordinator' && t.status === 'completed').length}/${tasks.filter(t => t.role === 'Coordinator').length}`;

  const budgetDisplay = role === 'admin' ? '₹1080k' : role === 'pm' ? '₹420k' : '₹85k';
  const reachDisplay = role === 'admin' ? '18.4k' : role === 'pm' ? '8.2k' : '3.4k';

  return (
    <div className="outer-golden-frame animate-fade-in">
      <div className="inner-white-viewport">
        
        {/* Top Navigation Bar: Clean header with ONLY Dashboard, Projects, Tasks */}
        <header className="w-full border-b border-[#E5DDD3]/70 bg-white sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          {/* Left: Text Title (Strict: NO brand logo image or logo SVG icon) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#292524] hover:bg-[#FFF9F2] focus:outline-none cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>

            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#6B625A] font-semibold block">
                NGO Platform
              </span>
              <h2 className="text-lg sm:text-xl font-heading font-semibold text-[#292524] leading-tight">
                Project Workspace
              </h2>
            </div>
          </div>

          {/* Center Tabs: ONLY Dashboard, Projects, Tasks */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFF9F2] p-1 rounded-xl border border-[#E5DDD3]/60" aria-label="Main Navigation">
            {['dashboard', 'projects', 'tasks'].map((tab) => (
              <button
                key={tab}
                type="button"
                id={`navTab-${tab}`}
                onClick={() => onSelectTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-lg capitalize transition-all cursor-pointer ${
                  currentTab === tab
                    ? 'bg-[#F47B20] text-white shadow-sm font-semibold'
                    : 'text-[#6B625A] hover:text-[#292524] hover:bg-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Right: Empty spacer for balanced flex distribution */}
          <div className="w-24 hidden md:block"></div>
        </header>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5DDD3] p-4 space-y-3 z-40 animate-fade-in">
            <div className="space-y-1">
              {['dashboard', 'projects', 'tasks'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => { onSelectTab(tab); setMobileMenuOpen(false); }}
                  className={`w-full p-2.5 rounded-lg text-left text-sm font-medium capitalize cursor-pointer ${
                    currentTab === tab ? 'bg-[#F47B20] text-white font-semibold' : 'bg-[#FFF9F2] text-[#292524] hover:bg-[#F8F6F2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-[#E5DDD3]/70">
              <button
                type="button"
                onClick={() => { onSignOut(); setMobileMenuOpen(false); }}
                className="w-full p-2.5 rounded-lg text-left text-sm font-medium text-[#F47B20] bg-[#FFF9F2] hover:bg-[#F47B20] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}

        {/* Body with Floating Left Toolbar */}
        <div className="flex-1 flex relative p-4 sm:p-6 lg:p-8">
          <FloatingToolbar 
            currentTab={currentTab} 
            onSelectTab={onSelectTab} 
            onSignOut={onSignOut} 
          />

          <main className="flex-1 overflow-x-hidden">
            {currentTab === 'projects' && (
              <ProjectsView projects={projects} onNewProject={() => onOpenModal('new-task')} />
            )}

            {currentTab === 'tasks' && (
              <TasksView
                tasks={tasks}
                filter={taskFilter}
                onSetFilter={onSetFilter}
                onToggleTask={onToggleTask}
                onNewTask={() => onOpenModal('new-task')}
                onSubmitUpdate={() => onOpenModal('field-update')}
              />
            )}

            {currentTab === 'dashboard' && (
              <div className="space-y-8 animate-fade-in">
                {/* Header Context */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
                      {roleConfig.fullName} Overview
                    </h1>
                    <p className="text-sm text-[#6B625A] mt-0.5">
                      {roleConfig.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenModal(roleConfig.quickActionModal)}
                    className="px-4 py-2.5 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-sm shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
                  >
                    <Plus size={18} />
                    <span>{roleConfig.quickActionText}</span>
                  </button>
                </div>

                {/* KPI METRIC STAT CARDS GRID */}
                <section aria-label="Key Performance Indicators" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <StatCard
                    title="Active Projects"
                    value={roleActiveProjects}
                    tag="Under Delivery"
                    subtext="Updated in real time"
                    icon={Folder}
                    iconColor="text-[#F47B20]"
                    actionLabel="View all"
                    onAction={() => onSelectTab('projects')}
                  />
                  <StatCard
                    title="Tasks Completed"
                    value={roleTasksDisplay}
                    tag="Milestones Met"
                    subtext="Click checklist to toggle"
                    icon={ListChecks}
                    iconColor="text-[#F9B233]"
                    actionLabel="Open board"
                    onAction={() => onSelectTab('tasks')}
                  />
                  <StatCard
                    title={role === 'admin' ? 'Portfolio Budget' : role === 'pm' ? 'Allocated Budget' : 'Field Disbursal'}
                    value={budgetDisplay}
                    tag="INR Allocated"
                    subtext="61.6% fund utilization"
                    icon={IndianRupee}
                    iconColor="text-[#292524]"
                    actionLabel="Breakdown"
                    onAction={() => onSelectTab('analytics')}
                  />
                  <StatCard
                    title="People Reached"
                    value={reachDisplay}
                    tag="Direct Beneficiaries"
                    subtext="Verified field headcounts"
                    icon={Users}
                    iconColor="text-[#F47B20]"
                    actionLabel="Audit logs"
                    onAction={() => onSelectTab('reports')}
                  />
                </section>

                {/* PROJECT PULSE SECTION */}
                <ProjectPulse 
                  projects={projects} 
                  onUpdateProgress={onUpdateProjectProgress}
                />

                {/* Bottom Split: Recent Field Updates & Session Governance */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-[#292524]">
                          Recent Field Updates
                        </h3>
                        <p className="text-xs text-[#6B625A]">Real-time field coordinator submissions & photo logs</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenModal('field-update')}
                        className="text-xs font-semibold text-[#F47B20] hover:underline cursor-pointer"
                      >
                        + Log Field Note
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      {fieldUpdates.map((u) => (
                        <div key={u.id} className="p-3.5 rounded-xl bg-[#FFF9F2]/70 border border-[#E5DDD3]/70 hover:border-[#F9B233] transition-all">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[#292524]">{u.author}</span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-white border border-[#E5DDD3] text-[#6B625A]">{u.role}</span>
                            </div>
                            <span className="text-[#6B625A]">{u.timestamp}</span>
                          </div>
                          <p className="text-xs text-[#292524] leading-relaxed mb-2">{u.text}</p>
                          <div className="flex items-center justify-between text-[11px] text-[#6B625A]">
                            <span className="flex items-center gap-1"><MapPin size={12} /> {u.location}</span>
                            <span className="px-2 py-0.5 rounded-full bg-white text-[#292524] font-medium border border-[#E5DDD3]">{u.badge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Locked Session Governance & Audit Card */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-[#292524] mb-1">
                        Session Governance
                      </h3>
                      <p className="text-xs text-[#6B625A] mb-4">Active session compliance & audit integrity</p>
                      
                      <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#F9B233]/40 mb-4">
                        <span className="text-[10px] uppercase font-bold text-[#F47B20] block mb-1">Session Scope</span>
                        <p className="text-base font-heading font-semibold text-[#292524]">{roleConfig.fullName}</p>
                        <p className="text-xs text-[#6B625A] mt-1 leading-relaxed">{roleConfig.description}</p>
                      </div>

                      <ul className="text-xs space-y-2 text-[#6B625A]">
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#F47B20]" />
                          <span>100% Audit logging active</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#F47B20]" />
                          <span>Strict WCAG 2.1 AA color contrast compliance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-[#F47B20]" />
                          <span>Zero brand logo policy strictly enforced</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#E5DDD3]/70 mt-4 text-xs text-[#6B625A] flex items-center justify-between">
                      <span>To switch workspace:</span>
                      <button
                        type="button"
                        onClick={onSignOut}
                        className="text-[#F47B20] hover:underline font-semibold cursor-pointer"
                      >
                        Sign Out &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(currentTab === 'analytics' || currentTab === 'reports') && (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#E5DDD3] animate-fade-in">
                <h3 className="text-xl font-heading font-semibold text-[#292524] mb-2">
                  {currentTab === 'analytics' ? 'Portfolio Impact Analytics' : 'Governance & Statutory Reports'}
                </h3>
                <p className="text-xs text-[#6B625A] mb-4">
                  Full dataset audited and verified for external stakeholders and CSR committees.
                </p>
                <button
                  type="button"
                  onClick={() => onSelectTab('dashboard')}
                  className="px-4 py-2 bg-[#F47B20] text-white text-xs font-medium rounded-xl cursor-pointer"
                >
                  Return to Dashboard Overview
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Minimal Bottom Footer with Non-Intrusive Role Display */}
        <footer className="w-full px-6 sm:px-8 py-3 border-t border-[#E5DDD3]/60 bg-white flex items-center justify-between text-xs text-[#6B625A]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-wider text-[#6B625A] uppercase">
              {role === 'admin' ? 'ADMIN' : role === 'pm' ? 'PROJECT MANAGER' : 'COORDINATOR'}
            </span>
          </div>
          <span className="text-[11px] text-[#6B625A]/60">
            NGO Project Management Platform • Field & Portfolio
          </span>
        </footer>

      </div>
    </div>
  );
}

