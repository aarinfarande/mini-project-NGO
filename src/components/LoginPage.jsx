'use client';

import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';

export default function LoginPage({ onLogin, onSelectRoleDirect, onOpenHelp, onOpenForgotPw }) {
  const [username, setUsername] = useState('sevavardhiniemp.ngo');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#F9B233]/40 overflow-hidden flex flex-col md:flex-row min-h-[640px]">
        
        {/* Left Panel (White 60%) */}
        <section className="w-full md:w-[60%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#6B625A] font-semibold">
                Nirikshak
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-[#292524] mt-2 mb-2">
                Namaste
              </h1>
              <p className="text-sm text-[#6B625A]">
                Sign in with your organizational credentials to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="loginField" className="block text-sm font-medium text-[#6B625A] mb-1.5">
                  Login:
                </label>
                <input
                  id="loginField"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="name@organization.ngo or username"
                  className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524] placeholder-[#6B625A]/60 focus:bg-white focus:border-[#F47B20] focus:ring-1 focus:ring-[#F47B20] transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="passwordField" className="block text-sm font-medium text-[#6B625A] mb-1.5">
                  Password:
                </label>
                <div className="relative">
                  <input
                    id="passwordField"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your security passkey"
                    className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#E5DDD3] rounded-xl text-[#292524] placeholder-[#6B625A]/60 focus:bg-white focus:border-[#F47B20] focus:ring-1 focus:ring-[#F47B20] transition-colors text-sm pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B625A] hover:text-[#292524] p-1 text-xs font-medium cursor-pointer"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-sm">
                <button
                  type="button"
                  onClick={onOpenHelp ? onOpenHelp : () => alert('Support Helpline: 1800-419-8800')}
                  className="text-[#6B625A] hover:text-[#292524] hover:underline transition-colors font-medium cursor-pointer"
                >
                  Help?
                </button>
                <button
                  type="button"
                  onClick={onOpenForgotPw ? onOpenForgotPw : () => alert('Password recovery link dispatched to registered email.')}
                  className="text-[#6B625A] hover:text-[#292524] hover:underline transition-colors font-medium cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  id="loginSubmitBtn"
                  onClick={handleSubmit}
                  className="w-full py-3.5 px-6 bg-[#F47B20] hover:bg-[#DE6C15] active:scale-[0.99] text-white font-medium rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Sign In</span>
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

        </section>

        {/* Right Panel (Golden 40% Accent #F9B233) */}
        <section className="w-full md:w-[40%] bg-[#F9B233] p-8 sm:p-12 flex flex-col justify-between text-white relative">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase text-white">
              SevaVardhini Exclusive
            </span>
            <h2 className="text-3xl font-heading text-white font-semibold leading-tight">
              Make every effort count
            </h2>
            <p className="text-sm text-white/90 leading-relaxed font-body">
              A clear, shared workspace for the people turning good intentions into measurable change.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <span className="text-xs text-white/80">Version 1</span>
            <button
              type="button"
              onClick={handleSubmit}
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
