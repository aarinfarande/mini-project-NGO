'use client';

import React from 'react';
import { MapPin, Users, Shield, Plus } from 'lucide-react';

export default function ProjectsView({ projects, onNewProject }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            Projects Directory
          </h1>
          <p className="text-sm text-[#6B625A] mt-0.5">
            Explore ongoing grassroots interventions, budget allocations, and delivery schedules.
          </p>
        </div>
        <button
          onClick={onNewProject}
          className="px-4 py-2.5 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-sm shadow-sm transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus size={18} />
          <span>Add New Initiative</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-[#E5DDD3] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  p.status === 'Completed'
                    ? 'bg-[#292524] text-white'
                    : 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40'
                }`}>
                  {p.category}
                </span>
                <span className={`text-xs font-bold ${p.status === 'Completed' ? 'text-[#F47B20]' : 'text-[#6B625A]'}`}>
                  {p.status}
                </span>
              </div>

              <h3 className="text-xl font-heading font-semibold text-[#292524] mb-2">
                {p.title}
              </h3>

              <p className="text-xs text-[#6B625A] leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="space-y-2 text-xs text-[#6B625A] mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#F47B20]" />
                  <span>{p.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#F47B20]" />
                  <span>{p.beneficiaries}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield size={14} className="text-[#F47B20]" />
                  <span>Lead: <strong className="text-[#292524]">{p.lead}</strong> ({p.leadRole})</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5DDD3]/70">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#292524]">{p.progress}% Delivery</span>
                <span className="text-[#6B625A]">{p.spent} / {p.budget}</span>
              </div>
              <div className="w-full bg-[#FFF9F2] h-2.5 rounded-full overflow-hidden border border-[#E5DDD3]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${p.progress}%`, backgroundColor: p.progressColor }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
