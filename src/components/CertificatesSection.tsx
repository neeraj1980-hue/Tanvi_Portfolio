'use client';

import React, { useState } from 'react';
import { Award, ExternalLink, Star, Trophy, BookOpen, Cpu, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Tech' | 'Business' | 'Sports & Leadership' | 'Academic';
  icon: string;
  description: string;
  credential?: string;
  badge: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Generative AI Fundamentals',
    issuer: 'Google Digital Garage',
    date: '2024',
    category: 'AI & Tech',
    icon: '🤖',
    description: 'Comprehensive understanding of generative AI concepts, prompt engineering, and practical applications in modern business workflows.',
    credential: '#GDA-2024',
    badge: 'Verified',
  },
  {
    id: 2,
    title: 'Microsoft Office Specialist',
    issuer: 'Microsoft Learn',
    date: '2024',
    category: 'Business',
    icon: '📊',
    description: 'Proficiency certification in Microsoft Excel, Word, and PowerPoint for business documentation, data analysis, and presentations.',
    credential: '#MOS-2024',
    badge: 'Certified',
  },
  {
    id: 3,
    title: 'Supply Chain Management Essentials',
    issuer: 'Dr. MPS Memorial Group of Institutions',
    date: '2025',
    category: 'Business',
    icon: '📦',
    description: 'Academic recognition for excellence in supply chain fundamentals, logistics operations, and inventory management principles.',
    badge: 'Academic',
  },
  {
    id: 4,
    title: 'Inter-College Badminton Championship',
    issuer: 'University Sports Board',
    date: '2024',
    category: 'Sports & Leadership',
    icon: '🏸',
    description: 'Awarded for outstanding athletic performance in the inter-college badminton tournament, demonstrating agility, precision, and competitive spirit.',
    badge: 'Achievement',
  },
  {
    id: 5,
    title: 'Canva Design Pro Certification',
    issuer: 'Canva Design School',
    date: '2024',
    category: 'AI & Tech',
    icon: '🎨',
    description: 'Advanced visual design certification covering brand identity, AI-powered design tools, presentation aesthetics, and digital media creation.',
    credential: '#CANVA-2024',
    badge: 'Verified',
  },
  {
    id: 6,
    title: 'Business Communication Excellence',
    issuer: 'Dr. MPS Memorial Group of Institutions',
    date: '2025',
    category: 'Academic',
    icon: '💼',
    description: 'Recognition for superior performance in professional communication, business correspondence, and corporate presentation skills.',
    badge: 'Academic',
  },
];

const CATEGORY_FILTERS = ['All', 'AI & Tech', 'Business', 'Sports & Leadership', 'Academic'] as const;

const categoryColors: Record<string, string> = {
  'AI & Tech': 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  'Business': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'Sports & Leadership': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  'Academic': 'text-gold-400 bg-gold-500/10 border-gold-500/30',
};

const badgeStyles: Record<string, string> = {
  'Verified': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
  'Certified': 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
  'Academic': 'bg-gold-500/20 text-amber-300 border border-gold-500/40',
  'Achievement': 'bg-violet-500/20 text-violet-300 border border-violet-500/40',
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI & Tech': return Cpu;
    case 'Business': return BookOpen;
    case 'Sports & Leadership': return Trophy;
    case 'Academic': return Star;
    default: return Award;
  }
};

export default function CertificatesSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = activeFilter === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.category === activeFilter);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Achievements & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Certificates &amp; <span className="text-gold-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A collection of verified credentials, academic recognitions, and achievements that reflect Tanvi&apos;s commitment to continuous learning and excellence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            const Icon = filter === 'All' ? Shield : getCategoryIcon(filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'btn-gold shadow-lg shadow-gold-500/25 scale-[1.02]'
                    : 'glass-card text-slate-300 hover:text-white hover:border-gold-500/30'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-navy-950' : 'text-gold-400'}`} />
                <span>{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Certificates', value: CERTIFICATES.length, icon: '🏅' },
            { label: 'Tech & AI', value: CERTIFICATES.filter(c => c.category === 'AI & Tech').length, icon: '🤖' },
            { label: 'Business', value: CERTIFICATES.filter(c => c.category === 'Business').length, icon: '💼' },
            { label: 'Achievements', value: CERTIFICATES.filter(c => c.category === 'Sports & Leadership' || c.category === 'Academic').length, icon: '⭐' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card rounded-xl p-4 text-center">
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-2xl font-serif font-bold text-gold-400 mt-1">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => {
            const CategoryIcon = getCategoryIcon(cert.category);
            const isHovered = hoveredCard === cert.id;
            return (
              <div
                key={cert.id}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 cursor-default relative overflow-hidden transition-all duration-350 ${
                  isHovered ? 'border-gold-500/45' : ''
                }`}
              >
                {/* Subtle shimmer on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-2xl flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${badgeStyles[cert.badge]}`}>
                      {cert.badge}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${categoryColors[cert.category]}`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-base font-serif font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gold-400">
                    <CategoryIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed relative z-10 flex-1">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between relative z-10 pt-3 border-t border-slate-800/70">
                  <span className="text-xs text-slate-500 font-mono">📅 {cert.date}</span>
                  {cert.credential && (
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2 py-1 rounded-md border border-slate-800">
                      {cert.credential}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <Award className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No certificates in this category yet.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-card rounded-2xl p-8 max-w-2xl mx-auto border border-gold-500/20">
          <div className="text-3xl mb-3">🎓</div>
          <h4 className="text-lg font-serif font-bold text-white mb-2">
            Always Learning, Always Growing
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Tanvi is committed to continuous professional development through certifications, workshops, and hands-on industry experience.
          </p>
        </div>

      </div>
    </section>
  );
}
