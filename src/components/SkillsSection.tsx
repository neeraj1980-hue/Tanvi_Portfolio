'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Laptop, 
  Truck, 
  Award, 
  Cpu, 
  FileSpreadsheet, 
  Presentation, 
  BrainCircuit, 
  Check, 
  BarChart3 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../types';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const toolBadges = [
    { name: 'ChatGPT & Gemini', category: 'AI Tools', icon: '🤖' },
    { name: 'Claude AI', category: 'AI Research', icon: '✨' },
    { name: 'Canva AI', category: 'Graphic Design', icon: '🎨' },
    { name: 'MS Excel', category: 'Spreadsheets', icon: '📊' },
    { name: 'MS Word', category: 'Documentation', icon: '📝' },
    { name: 'MS PowerPoint', category: 'Presentations', icon: '📽️' },
    { name: 'Google Workspace', category: 'Cloud Collab', icon: '☁️' },
    { name: 'Prompt Engineering', category: 'Smart Search', icon: '⚡' },
    { name: 'Supply Chain Basics', category: 'Logistics', icon: '📦' },
    { name: 'Inventory Concepts', category: 'Operations', icon: '🏢' },
  ];

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Sparkles;
      case 1: return Laptop;
      case 2: return Truck;
      case 3: return Award;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Capabilities & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Skills & <span className="text-gold-gradient">Tool Mastery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Combining core computer literacy and modern artificial intelligence tools with logistics acumen.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = getCategoryIcon(index);
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'btn-gold shadow-lg shadow-gold-500/25 scale-[1.02]'
                    : 'glass-card text-slate-300 hover:text-white hover:border-gold-500/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-navy-950' : 'text-gold-400'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Active Category Skills Detail */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1 pb-4 border-b border-slate-800">
              <h3 className="text-xl font-serif font-bold text-white">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>

            <div className="space-y-6">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="font-semibold text-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-400">{skill.level}%</span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-200 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-400 pl-4 italic">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Summary / Highlights Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-gold-500/25">
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold">
                <BrainCircuit className="w-5 h-5" />
                <h4>The AI Advantage</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tanvi focuses heavily on harnessing Generative AI to boost productivity, accelerate research, create visually compelling presentations, and streamline logistics studies.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Prompt crafting for business research</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>AI design automation with Canva</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Smart spreadsheet and data workflows</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-white font-serif font-bold">
                <BarChart3 className="w-5 h-5 text-gold-400" />
                <h4>Core Computer Toolkit</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Foundational proficiency across office suites, essential business software, document formatting, and digital collaboration platforms.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">MS Excel</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">MS Word</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">PowerPoint</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Cloud Storage</span>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Windows OS</span>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Badge Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Toolbox & Technical Ecosystem
            </h4>
            <p className="text-xs text-slate-400">Software, platforms, and techniques in daily rotation</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {toolBadges.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-gold-500/40 hover:bg-slate-900 transition-all flex flex-col items-center text-center group"
              >
                <span className="text-2xl mb-1.5 group-hover:scale-125 transition-transform">{tool.icon}</span>
                <span className="text-xs font-bold text-white group-hover:text-gold-300">{tool.name}</span>
                <span className="text-[10px] text-slate-400">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
