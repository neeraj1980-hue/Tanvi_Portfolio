'use client';

import React from 'react';
import { 
  User, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Compass, 
  Heart, 
  Phone, 
  Sparkles, 
  Award, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../types';

export default function AboutSection() {
  const personalHighlights = [
    { label: 'Full Name', value: PERSONAL_DETAILS.name, icon: User },
    { label: 'Date of Birth', value: PERSONAL_DETAILS.dob, icon: Calendar },
    { label: 'Current Studies', value: 'BBA in Logistics', icon: GraduationCap },
    { label: 'Institution', value: 'Dr. MPS Memorial Group of Institutions', icon: Award },
    { label: 'Contact Phone', value: PERSONAL_DETAILS.phone, icon: Phone },
    { label: 'Current Residence', value: PERSONAL_DETAILS.addressFull, icon: MapPin },
  ];

  const pillarCards = [
    {
      title: 'Academic Focus: BBA Logistics',
      description: 'Specializing in contemporary logistics, inventory strategies, and supply chain network coordination, aiming to streamline business operations with modern efficiency.',
      icon: GraduationCap,
      badge: 'Core Major'
    },
    {
      title: 'Tech Fluency & AI Tools',
      description: 'Actively integrating artificial intelligence (ChatGPT, Claude, Gemini, Canva AI) and computer productivity systems into academic research and professional work.',
      icon: Cpu,
      badge: 'Digital Advantage'
    },
    {
      title: 'Athletic Character & Leadership',
      description: 'Competitive participation in badminton and basketball cultivates swift tactical reflexes, resilience, and an unwavering spirit of team collaboration.',
      icon: Award,
      badge: 'Sports Spirit'
    },
    {
      title: 'Creative Passion & Harmony',
      description: 'Dancing and music enrich personal creativity, rhythm, and self-expression, fostering a balanced and energized mindset.',
      icon: Heart,
      badge: 'Creative Balance'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            About <span className="text-gold-gradient">Tanvi Dubey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A driven student balancing business management, technological adoption, and active athletic pursuits.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Top Split: Detailed Bio & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Biography Text Block */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white">Professional Biography</h3>
                <p className="text-xs text-slate-400">Ambition, Education & Technological Vision</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-gold-300">Tanvi Dubey</strong>, an energetic student from historic 
                Agra, currently enrolled in the <strong className="text-white">BBA Logistics program at Dr. MPS Memorial Group of Institutions</strong>. 
                My academic journey is anchored in understanding the complex global movement of goods, warehouse optimization, 
                and supply chain dynamics.
              </p>
              <p>
                In today's fast-evolving landscape, traditional business practices alone are not enough. I actively leverage 
                <strong className="text-white"> modern AI productivity tools</strong> (including generative models, prompt engineering, and intelligent graphic design suites) 
                along with fundamental computer applications to automate repetitive tasks and produce higher-quality output.
              </p>
              <p>
                Outside the lecture hall, my lifestyle is fueled by agility and rhythm. As a player of both 
                <strong className="text-gold-300"> badminton and basketball</strong>, I have cultivated rapid reflexes, endurance, and an instinct for teamwork. 
                Simultaneously, dance and music keep me creatively vibrant and grounded.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-gold-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gold-300">My Mission:</strong> To bridge contemporary logistics practices with emerging AI technologies, 
                  delivering strategic value through disciplined teamwork, agility, and continuous personal learning.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Details Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-serif font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
              <User className="w-5 h-5 text-gold-400" />
              <span>Personal Profile</span>
            </h3>

            <div className="space-y-4">
              {personalHighlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{item.label}</div>
                      <div className="text-sm font-medium text-slate-200 break-words">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <a 
                href={`tel:${PERSONAL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold btn-gold"
              >
                Direct Call: {PERSONAL_DETAILS.phone}
              </a>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars of Tanvi's Profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarCards.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-gold-400 border border-gold-500/20">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
