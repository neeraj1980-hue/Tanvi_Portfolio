'use client';

import React from 'react';
import { ArrowRight, Award, BookOpen, Sparkles, MapPin, Calendar, Phone, Activity } from 'lucide-react';
import { PERSONAL_DETAILS } from '../types';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Professional Portfolio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-medium text-slate-300 tracking-wide uppercase">
                Welcome to my world
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
                I am <span className="text-gold-gradient font-bold">{PERSONAL_DETAILS.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 pt-1 font-serif italic text-gold-300/90">
                {PERSONAL_DETAILS.tagline}
              </p>
            </div>

            {/* Brief description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pursuing <span className="text-white font-semibold">BBA in Logistics</span> at{' '}
              <span className="text-gold-300 font-semibold">{PERSONAL_DETAILS.institution}</span>, Agra. 
              Passionate about the synergy of modern <span className="text-white font-semibold">AI tools</span>, core computer proficiency, 
              and the competitive leadership mindset gained from sports.
            </p>

            {/* Quick Highlight Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                <span>BBA Logistics Scholar</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Agra, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>DOB: 10 Nov 2007</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300">
                <Activity className="w-3.5 h-3.5 text-gold-400" />
                <span>Badminton & Basketball Athlete</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#about"
                className="btn-gold px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <span>Discover My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-outline-gold px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <span>Contact & Connect</span>
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl font-bold font-serif text-gold-400">Dr. MPS</div>
                <div className="text-[11px] text-slate-400 font-medium">Memorial Group</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl font-bold font-serif text-white">BBA</div>
                <div className="text-[11px] text-slate-400 font-medium">Logistics Specialization</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl font-bold font-serif text-gold-400">AI & Tech</div>
                <div className="text-[11px] text-slate-400 font-medium">Modern Tools Fluent</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-xl font-bold font-serif text-white">2 Sports</div>
                <div className="text-[11px] text-slate-400 font-medium">Badminton & Basketball</div>
              </div>
            </div>

          </div>

          {/* Right Column: Photo with Classic Luxury Framing */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] group">
              
              {/* Gold Ornamental Outer Ring Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-600 via-amber-400 to-yellow-200 opacity-40 blur-xl group-hover:opacity-70 transition duration-700 animate-pulse-glow" />
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-gold-400/80 via-amber-600/40 to-slate-900/90 shadow-2xl shadow-black/80 border border-gold-500/40">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-navy-950">
                  <img
                    src="tanvi.jpg"
                    alt="Tanvi Dubey"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Automatic fallback cascade
                      const target = e.currentTarget;
                      if (!target.dataset.triedBackup) {
                        target.dataset.triedBackup = 'true';
                        target.src = 'media_1790336858828.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-navy-950/90 backdrop-blur-md border border-gold-500/40 py-2 px-3.5 rounded-2xl shadow-xl shadow-black/50 flex items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Institute</div>
                  <div className="text-xs font-bold text-white">Dr. MPS Memorial</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-navy-950/90 backdrop-blur-md border border-gold-500/40 py-2.5 px-4 rounded-2xl shadow-xl shadow-black/50 flex items-center gap-3 animate-float-delayed">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Skills Highlight</div>
                  <div className="text-xs font-bold text-slate-100">AI Tools & Modern Tech</div>
                </div>
              </div>

              {/* Floating Badge 3 - Middle Right */}
              <div className="absolute top-1/2 -right-6 hidden sm:flex bg-navy-950/90 backdrop-blur-md border border-slate-700/80 py-1.5 px-3 rounded-xl shadow-lg items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-medium text-slate-200">Open to Internships</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
