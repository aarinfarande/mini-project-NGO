'use client';

import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function ProjectPulse({ projects, onUpdateProgress }) {
  const handleBarClick = (project, event) => {
    if (!onUpdateProgress) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    let newPercent = Math.round((clickX / width) * 100);
    newPercent = Math.max(10, Math.min(100, newPercent));
    onUpdateProgress(project.id, newPercent);
  };

  const handleStepProgress = (project, e) => {
    e.stopPropagation();
    if (!onUpdateProgress) return;
    const nextVal = project.progress >= 100 ? 25 : Math.min(100, project.progress + 15);
    onUpdateProgress(project.id, nextVal);
  };

  return (
    <section className="bg-[#FFF9F2]/70 rounded-2xl p-6 sm:p-8 border border-[#E5DDD3]" aria-labelledby="pulseHeading">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h2 id="pulseHeading" className="text-2xl font-heading font-semibold text-[#292524]">
            Project Pulse
          </h2>
          <p className="text-sm text-[#6B625A]">
            Current delivery metric & milestone fulfillment rates. Click any progress bar to adjust delivery live!
          </p>
        </div>
        <span className="text-xs text-[#6B625A] flex items-center gap-1.5 self-start sm:self-center">
          <span className="w-2 h-2 rounded-full bg-[#F47B20] animate-pulse"></span>
          Interactive progress & live sync
        </span>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-5 rounded-xl border border-[#E5DDD3] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold font-heading text-[#292524]">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                    project.progress === 100
                      ? 'bg-[#292524] text-white'
                      : 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/30'
                  }`}>
                    {project.category}
                  </span>
                  {project.progress === 100 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F47B20] text-white flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      100% Completed
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#6B625A] mt-0.5 flex items-center gap-2">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                  <span>•</span>
                  <span>Lead: {project.lead}</span>
                </p>
              </div>
              <div className="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleStepProgress(project, e)}
                    className="px-2 py-0.5 text-[11px] font-semibold rounded bg-[#FFF9F2] hover:bg-[#F47B20] hover:text-white text-[#F47B20] border border-[#F47B20]/40 transition-colors cursor-pointer"
                    title="Click to advance delivery progress by +15%"
                  >
                    + Advance
                  </button>
                  <span className={`text-sm font-bold ${project.progress === 100 ? 'text-[#F47B20]' : 'text-[#292524]'}`}>
                    {project.progress}%
                  </span>
                </div>
                <span className="text-xs text-[#6B625A]">
                  Spent: {project.spent} / {project.budget}
                </span>
              </div>
            </div>

            {/* Clickable Progress Bar: Click anywhere on track to adjust live */}
            <div 
              onClick={(e) => handleBarClick(project, e)}
              className="w-full bg-[#FFF9F2] h-4 rounded-full overflow-hidden border border-[#E5DDD3]/80 p-0.5 cursor-pointer relative group"
              title="Click anywhere to set project progress percentage"
            >
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${project.progress}%`,
                  backgroundColor: project.progressColor || '#F47B20'
                }}
                role="progressbar"
                aria-valuenow={project.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-[#292524]/60 pointer-events-none">
                Click to update progress
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-xs text-[#6B625A]">
              <span>Next Milestone: {project.nextMilestone}</span>
              <span className="text-[#292524] font-medium">{project.beneficiaries}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
