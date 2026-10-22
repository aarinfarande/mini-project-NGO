import React from 'react';
import { LayoutGrid, FolderKanban, ListTodo, TrendingUp, LogOut } from 'lucide-react';

export default function FloatingToolbar({ currentTab, onSelectTab, onSignOut }) {
  const tools = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutGrid },
    { id: 'projects', label: 'Projects Directory', icon: FolderKanban },
    { id: 'tasks', label: 'Task Checklist', icon: ListTodo },
    { id: 'analytics', label: 'Impact Analytics', icon: TrendingUp },
  ];

  return (
    <aside className="hidden md:flex flex-col items-center mr-6 self-start sticky top-24 z-20">
      <nav 
        className="floating-pill-toolbar !bg-[#080EE0]" 
        style={{ backgroundColor: '#080EE0' }} 
        aria-label="Quick Toolbar"
      >
        {tools.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={isActive ? 'active' : ''}
              aria-label={item.label}
            >
              <Icon size={20} />
              <span className="tooltip">{item.label}</span>
            </button>
          );
        })}

        {/* Divider / Flex Spacer */}
        <div className="w-5 h-[1px] bg-white/30 my-1 mx-auto" />

        {/* Dedicated Sign-Out Button */}
        <button
          type="button"
          id="sidebarSignOutBtn"
          onClick={onSignOut}
          className="hover:!bg-white hover:!text-[#080EE0] text-white transition-all cursor-pointer group"
          aria-label="Sign Out"
        >
          <LogOut size={20} className="transition-transform group-hover:scale-105" />
          <span className="tooltip">Sign Out</span>
        </button>
      </nav>
    </aside>
  );
}