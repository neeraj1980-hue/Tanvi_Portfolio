'use client';

import React from 'react';
import { Heart, Music, Activity, Trophy, Sparkles, Disc, Flame, ShieldCheck } from 'lucide-react';
import { HOBBIES_DATA } from '../types';

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Decorative Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Passions & Sports</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Interests & <span className="text-gold-gradient">Hobbies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Cultivating agility, focus, artistic expression, and unyielding team spirit beyond textbooks.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* 1. Dance */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group border-gold-500/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">Creative Arts</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Dance & Expression</h3>
                </div>
              </div>
              <span className="text-2xl">💃</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Dancing is my ultimate medium of joy, rhythm, and self-discipline. It builds poise, graceful coordination, 
              and the stage presence essential for public speaking and confident professional presentations.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Rhythm & Flow', 'Stage Poise', 'Creative Choreography', 'Vibrant Energy'].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-pink-500/20 text-xs italic text-slate-300">
              “Dance is the hidden language of the soul — expressing joy and boundless energy through movement.”
            </div>
          </div>

          {/* 2. Music & Listening to Songs */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group border-gold-500/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Sound & Soul</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Listening to Music</h3>
                </div>
              </div>
              
              {/* Simulated Audio Equalizer */}
              <div className="flex items-end gap-1 h-6 px-2 py-1 bg-slate-900/80 rounded-lg border border-slate-700">
                <span className="w-1 bg-gold-400 rounded-full h-3 animate-pulse" />
                <span className="w-1 bg-gold-400 rounded-full h-5 animate-pulse delay-75" />
                <span className="w-1 bg-gold-400 rounded-full h-2 animate-pulse delay-150" />
                <span className="w-1 bg-gold-400 rounded-full h-4 animate-pulse delay-100" />
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Listening to songs keeps my mind centered and stimulated. From soothing melodies that sharpen concentration 
              during study hours to energetic beats that elevate productivity, music is a constant companion.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Deep Focus', 'Lyrical Depth', 'Mood Elevation', 'Mindfulness'].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-blue-500/20 text-xs italic text-slate-300">
              “Where words fail, music speaks. It brings calm to mind and inspiration to work.”
            </div>
          </div>

          {/* 3. Badminton */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group border-gold-500/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">Competitive Sport</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Badminton</h3>
                </div>
              </div>
              <span className="text-2xl">🏸</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Badminton demands lightning-fast reflexes and split-second tactical adjustments. On the court, 
              I develop sharp spatial awareness, endurance, and the determination to rally back from any score deficit.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Fast Reflexes', 'Agility & Footwork', 'Mental Focus', 'Strategic Smashes'].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/20 text-xs italic text-slate-300">
              “Every shot requires precision, anticipation, and lightning recovery — lessons carried into life.”
            </div>
          </div>

          {/* 4. Basketball */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group border-gold-500/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-orange-400 uppercase tracking-widest font-bold">Team Athletics</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Basketball</h3>
                </div>
              </div>
              <span className="text-2xl">🏀</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Basketball has been fundamental in cementing my belief in selfless teamwork, communication under pressure, 
              and court leadership. Every pass and rebound is built on trust and collective synchrony.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Team Synergy', 'Court Vision', 'Endurance & Stamina', 'Defensive Grit'].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-orange-500/20 text-xs italic text-slate-300">
              “Basketball teaches that individual glory means nothing without the cohesiveness of the entire unit.”
            </div>
          </div>

        </div>

        {/* Athletic & Cultural Philosophy Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-navy-900/90 to-slate-900/90 border border-gold-500/30 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Holistic Student Athlete Perspective</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            “Discipline on the court translates directly to precision in logistics & leadership.”
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            The balance of sports and creative arts sharpens time management, resilience in the face of setbacks, 
            and the capacity to work harmoniously within diverse groups.
          </p>
        </div>

      </div>
    </section>
  );
}
