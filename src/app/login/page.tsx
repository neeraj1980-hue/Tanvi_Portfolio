'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

const VALID_USERNAME = 'tanvi';
const VALID_PASSWORD = 'tanvidubey00';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise((r) => setTimeout(r, 900));

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 1400);
    } else {
      setError('Invalid username or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center relative overflow-hidden px-4">

      {/* Animated background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[180px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="w-full max-w-md relative z-10">

        {/* Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-gold-500/20 shadow-2xl shadow-black/60">

          {/* Logo & Brand */}
          <div className="text-center mb-8">
            <a href="/" className="inline-flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 flex items-center justify-center text-navy-950 font-serif font-bold text-2xl shadow-lg shadow-gold-500/30 group-hover:scale-105 transition-transform duration-300">
                TD
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
                  Tanvi Dubey
                </span>
                <span className="block text-[11px] tracking-widest text-gold-400/80 font-sans uppercase mt-0.5">
                  Portfolio Access
                </span>
              </div>
            </a>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>Secure Login</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-white">Welcome Back</h1>
            <p className="text-sm text-slate-400 mt-1">Sign in to access the portfolio dashboard</p>
          </div>

          {/* Success state */}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
              <Sparkles className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              <div>
                <p className="font-semibold">Login successful!</p>
                <p className="text-xs text-emerald-400/80 mt-0.5">Redirecting to portfolio…</p>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Username */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gold-400 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm btn-gold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading || success ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span>{success ? 'Redirecting…' : 'Signing in…'}</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Back to portfolio */}
          <div className="text-center mt-6 pt-6 border-t border-slate-800">
            <a
              href="/"
              className="text-xs text-slate-400 hover:text-gold-400 transition-colors inline-flex items-center gap-1"
            >
              ← Back to portfolio
            </a>
          </div>

        </div>

        {/* Decorative bottom text */}
        <p className="text-center text-[11px] text-slate-600 mt-6">
          © 2025 Tanvi Dubey • All rights reserved
        </p>

      </div>
    </div>
  );
}
