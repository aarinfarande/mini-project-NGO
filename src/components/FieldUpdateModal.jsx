'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FieldUpdateModal({ onClose, onSubmit }) {
  const [project, setProject] = useState('Clean Water Initiative');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [badge, setBadge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: 'fu' + Date.now(),
      author: 'Suresh Kumar',
      role: 'Coordinator',
      location: location || 'Field Block',
      timestamp: 'Just now',
      text: notes,
      badge: badge || 'Field Verified'
    });
  };

  return (
    <div className="fixed inset-0 bg-[#292524]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#F9B233]/40" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-3 border-b border-[#E5DDD3]">
          <h3 className="text-lg font-heading font-semibold text-[#292524]">Submit Field Update</h3>
          <button onClick={onClose} className="text-[#6B625A] hover:text-[#292524] p-1">
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="py-4 space-y-4 text-xs">
          <div>
            <label className="block font-medium text-[#6B625A] mb-1">Intervention Project:</label>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]"
            >
              <option>Clean Water Initiative</option>
              <option>Schools for all</option>
              <option>Mobile Health Clinic</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-[#6B625A] mb-1">Field Block / Village Location:</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Hamlet 4, Pokhran Cluster"
              className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]"
            />
          </div>
          <div>
            <label className="block font-medium text-[#6B625A] mb-1">Activity Observations & Progress Notes:</label>
            <textarea
              required
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe progress, borehole flow rate, student attendance, or supplies received..."
              className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]"
            />
          </div>
          <div>
            <label className="block font-medium text-[#6B625A] mb-1">Beneficiary Headcount / Tag:</label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="e.g. 85 Villagers or Water Sample TDS 210"
              className="w-full px-3 py-2 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524]"
            />
          </div>
          <div className="pt-2 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-[#E5DDD3] rounded-xl text-[#6B625A]">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#F47B20] text-white font-medium rounded-xl hover:bg-[#DE6C15]">
              Publish Field Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
