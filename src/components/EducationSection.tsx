'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Award, BookOpen, Layers } from 'lucide-react';
import { EDUCATION_DATA } from '../types';

export default function EducationSection() {
  const logisticsCompetencies = [
    { title: "Supply Chain Dynamics", desc: "Understanding the end-to-end flow of raw materials to finished customer products." },
    { title: "Inventory & Warehousing", desc: "Principles of stock management, layout planning, and fulfillment speed." },
    { title: "Transportation & Freight", desc: "Multi-modal logistics, route optimization, and distribution channel logistics." },
    { title: "Business Information Systems", desc: "Leveraging enterprise tools, databases, and AI automation in daily business." },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Education & <span className="text-gold-gradient">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Building a strong academic bedrock in management, business logistics, and modern digital tools.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 sm:p-8 relative border transition-all duration-300 ${
                index === 0
                  ? 'border-gold-500/50 shadow-xl shadow-gold-500/5 bg-gradient-to-br from-slate-900/90 via-navy-900/90 to-slate-900/90'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {item.degree}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        index === 0
                          ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-gold-400 font-medium text-base">
                    {item.institution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Learnings & Milestones:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Logistics Academic Pillars */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Logistics & Supply Chain Curriculum Focus
              </h3>
              <p className="text-xs text-slate-400">
                Core subjects and analytical domains covered at Dr. MPS Memorial Group of Institutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {logisticsCompetencies.map((comp, cIdx) => (
              <div key={cIdx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 hover:border-gold-500/40 transition-colors">
                <h4 className="text-sm font-bold text-gold-300">{comp.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
