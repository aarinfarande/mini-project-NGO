'use client';

import React from 'react';
import { Check, Clock, Plus } from 'lucide-react';

export default function TasksView({ tasks, filter, onSetFilter, onToggleTask, onNewTask, onSubmitUpdate }) {
  const filteredTasks = tasks.filter((t) => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  const completedCount = tasks.filter((t) => t.status === 'completed').length;
  const inProgressCount = tasks.filter((t) => t.status === 'in-progress').length;
  const reviewCount = tasks.filter((t) => t.status === 'review').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DDD3]/70">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-[#292524]">
            Tasks Checklist
          </h1>
          <p className="text-sm text-[#6B625A] mt-0.5">
            Interactive task management. Checking a task updates the live KPI completion metric immediately.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSubmitUpdate}
            className="px-3.5 py-2 rounded-xl bg-[#FFF9F2] hover:bg-white text-[#292524] border border-[#E5DDD3] font-medium text-xs shadow-sm transition-all"
          >
            Submit Field Update
          </button>
          <button
            onClick={onNewTask}
            className="px-4 py-2 rounded-xl bg-[#F47B20] hover:bg-[#DE6C15] text-white font-medium text-xs shadow-sm transition-all flex items-center gap-1.5"
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Task Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => onSetFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-[#292524] text-white'
              : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#292524]'
          }`}
        >
          All Tasks ({tasks.length})
        </button>
        <button
          onClick={() => onSetFilter('in-progress')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'in-progress'
              ? 'bg-[#F47B20] text-white'
              : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#F47B20]'
          }`}
        >
          In Progress ({inProgressCount})
        </button>
        <button
          onClick={() => onSetFilter('review')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'review'
              ? 'bg-[#F9B233] text-[#292524]'
              : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#F9B233]'
          }`}
        >
          Needs Review ({reviewCount})
        </button>
        <button
          onClick={() => onSetFilter('completed')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            filter === 'completed'
              ? 'bg-[#292524] text-[#FFF9F2]'
              : 'bg-white text-[#6B625A] border border-[#E5DDD3] hover:border-[#292524]'
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>

      {/* Task Items List */}
      <div className="bg-white rounded-2xl border border-[#E5DDD3] divide-y divide-[#E5DDD3]/60 shadow-sm overflow-hidden">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className={`p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-[#FFF9F2]/50 transition-colors ${
              t.status === 'completed' ? 'bg-[#FFF9F2]/30' : ''
            }`}
          >
            <div className="flex items-start gap-3.5 flex-1">
              <button
                type="button"
                onClick={() => onToggleTask(t.id)}
                className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  t.status === 'completed'
                    ? 'bg-[#F47B20] border-[#F47B20] text-white'
                    : 'border-[#E5DDD3] hover:border-[#F47B20] bg-white'
                }`}
                aria-label={`Toggle task ${t.title}`}
              >
                {t.status === 'completed' && <Check size={14} strokeWidth={3} />}
              </button>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className={`text-sm font-semibold text-[#292524] ${t.status === 'completed' ? 'line-through text-[#6B625A]' : ''}`}>
                    {t.title}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    t.priority === 'High'
                      ? 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40'
                      : t.priority === 'Medium'
                      ? 'bg-[#FFF9F2] text-[#F9B233] border border-[#F9B233]/40'
                      : 'bg-[#F8F6F2] text-[#6B625A]'
                  }`}>
                    {t.priority}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B625A]">
                  <span className="font-medium text-[#292524]">{t.project}</span>
                  <span>•</span>
                  <span>Assignee: {t.assignee} ({t.role})</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> Due {t.dueDate}</span>
                </div>
              </div>
            </div>

            <div className="self-center sm:self-auto">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase ${
                t.status === 'completed'
                  ? 'bg-[#292524] text-white'
                  : t.status === 'review'
                  ? 'bg-[#F9B233] text-[#292524]'
                  : 'bg-[#FFF9F2] text-[#F47B20] border border-[#F47B20]/40'
              }`}>
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
