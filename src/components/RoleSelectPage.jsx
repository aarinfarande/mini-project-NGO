'use client';

import React from 'react';
import { ArrowLeft, ChevronRight, Shield, FolderKanban, ListTodo } from 'lucide-react';

export default function RoleSelectPage({ activeRole, onSelectRole, onBackToLogin }) {
  const handleSelect = (role) => {
    if (onSelectRole) {
      onSelectRole(role);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#F9B233]/40 overflow-hidden flex flex-col md:flex-row min-h-[640px]">
        
        {/* Left Panel (White 60%) */}
        <section className="w-full md:w-[60%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
          <div>
            {/* Sub-label: WELCOME BACK (Muted Text #6B625A, uppercase, 12px tracking-wide) */}
            <span className="text-xs uppercase tracking-widest text-[#6B625A] font-semibold block mb-2">
              WELCOME BACK
            </span>

            {/* Main Heading: Choose your workspace (Gelasio, Deep Charcoal #292524, 32px) */}
            <h1 className="text-3xl sm:text-4xl font-semibold font-heading text-[#292524] mb-1">
              Choose your workspace
            </h1>

            {/* Caption: Select your profile (Muted Text #6B625A) */}
            <p className="text-sm text-[#6B625A] mb-8 font-body">
              Select your profile to customize dashboard tools, permissions, and pulse metrics.
            </p>

            {/* Interactive Role Selection Buttons */}
            <div className="space-y-4">
              
              {/* 1. Admin */}
              <button
                type="button"
                id="selectAdminRoleBtn"
                onClick={() => handleSelect('admin')}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all group relative cursor-pointer ${
                  activeRole === 'admin'
                    ? 'border-[#F47B20] bg-[#FFF9F2]'
                    : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[#292524] text-white flex items-center justify-center group-hover:bg-[#F47B20] transition-colors">
                      <Shield size={20} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Admin
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#292524] text-white">
                          Full Access
                        </span>
                      </div>
                      <p className="text-xs text-[#6B625A] mt-0.5">
                        Portfolio budget overview (₹1080k), all pulse indicators, global metrics & governance.
                      </p>
                    </div>
                  </div>
                  <span className="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    <ChevronRight size={20} />
                  </span>
                </div>
              </button>

              {/* 2. Project Manager */}
              <button
                type="button"
                id="selectPMRoleBtn"
                onClick={() => handleSelect('pm')}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all group relative cursor-pointer ${
                  activeRole === 'pm'
                    ? 'border-[#F47B20] bg-[#FFF9F2]'
                    : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[#F47B20] text-white flex items-center justify-center group-hover:bg-[#DE6C15] transition-colors">
                      <FolderKanban size={20} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Project Manager
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#F47B20] text-white">
                          Project Scope
                        </span>
                      </div>
                      <p className="text-xs text-[#6B625A] mt-0.5">
                        Manage assigned projects, budget tracking (₹420k), task creation & team assignments.
                      </p>
                    </div>
                  </div>
                  <span className="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    <ChevronRight size={20} />
                  </span>
                </div>
              </button>

              {/* 3. Coordinator */}
              <button
                type="button"
                id="selectCoordRoleBtn"
                onClick={() => handleSelect('coordinator')}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all group relative cursor-pointer ${
                  activeRole === 'coordinator'
                    ? 'border-[#F47B20] bg-[#FFF9F2]'
                    : 'border-[#E5DDD3] hover:border-[#F47B20] hover:bg-[#FFF9F2]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-[#F9B233] text-[#292524] flex items-center justify-center group-hover:bg-[#F47B20] group-hover:text-white transition-colors">
                      <ListTodo size={20} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-[#292524] font-heading group-hover:text-[#F47B20] transition-colors">
                          Coordinator
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#F9B233] text-[#292524]">
                          Field Operations
                        </span>
                      </div>
                      <p className="text-xs text-[#6B625A] mt-0.5">
                        Focused task checklist, field updates submission, milestone completion & ground tracking.
                      </p>
                    </div>
                  </div>
                  <span className="text-[#6B625A] group-hover:text-[#F47B20] group-hover:translate-x-1 transition-all">
                    <ChevronRight size={20} />
                  </span>
                </div>
              </button>

            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5DDD3]/70 flex items-center justify-between text-xs text-[#6B625A]">
            <span>Need an access invite? Contact system administrator</span>
            <button
              type="button"
              onClick={onBackToLogin ? onBackToLogin : () => {}}
              className="font-medium hover:text-[#292524] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Login
            </button>
          </div>
        </section>

        {/* Right Panel (Golden 40% Accent #F9B233) */}
        <section className="w-full md:w-[40%] bg-[#F9B233] p-8 sm:p-12 flex flex-col justify-between text-white relative">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase text-white mb-6">
              Our Shared Mission
            </span>

            {/* Feature Quote Block (White text #FFFFFF) */}
            <h2 className="text-3xl sm:text-4xl font-heading text-white font-semibold leading-tight mb-4">
              "Make every effort count."
            </h2>

            <p className="text-base text-white/95 leading-relaxed font-body">
              A clear, shared workspace for the people turning good intentions into measurable change.
            </p>
          </div>

          <div className="pt-8 border-t border-white/25 flex items-center justify-between">
            <span className="text-xs text-white/80">Empowering 18,400+ Lives</span>
            <button
              type="button"
              onClick={onBackToLogin ? onBackToLogin : () => {}}
              className="text-sm font-medium text-white hover:text-[#292524] transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
            >
              <span>Back</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
