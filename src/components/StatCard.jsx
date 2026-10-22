'use client';

import React from 'react';

export default function StatCard({ title, value, tag, subtext, icon: Icon, iconColor = 'text-[#F47B20]', onAction, actionLabel }) {
  return (
    <article className="bg-white p-6 rounded-2xl border border-[#E5DDD3] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-heading font-medium text-[#6B625A]">
          {title}
        </h3>
        <span className={`w-10 h-10 rounded-xl bg-[#FFF9F2] ${iconColor} flex items-center justify-center group-hover:scale-105 transition-transform`}>
          <Icon size={20} />
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-bold font-body text-[#292524]">
          {value}
        </span>
        {tag && (
          <span className="text-xs font-semibold text-[#F47B20] uppercase tracking-wider">
            {tag}
          </span>
        )}
      </div>
      <div className="mt-3 pt-3 border-t border-[#E5DDD3]/50 flex items-center justify-between text-xs text-[#6B625A]">
        <span>{subtext}</span>
        {actionLabel && (
          <button onClick={onAction} className="hover:text-[#F47B20] font-medium transition-colors">
            {actionLabel} &rarr;
          </button>
        )}
      </div>
    </article>
  );
}
