'use client';

import React from 'react';
import { ArrowUp, Heart, Phone, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../types';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-700 flex items-center justify-center text-navy-950 font-serif font-bold text-lg shadow-md shadow-gold-500/30">
                TD
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Tanvi Dubey
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              BBA Logistics Student at <strong className="text-slate-300">Dr. MPS Memorial Group of Institutions</strong>. 
              Enthusiastic about AI tools, modern business workflows, dance, and athletics.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Agra, Uttar Pradesh</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>+91 9412632249</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Tanvi</a></li>
              <li><a href="#education" className="hover:text-gold-400 transition-colors">Education & Institute</a></li>
              <li><a href="#skills" className="hover:text-gold-400 transition-colors">Skills & AI Tools</a></li>
              <li><a href="#hobbies" className="hover:text-gold-400 transition-colors">Hobbies & Sports</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Values / Location */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Institutional Home</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dr. MPS Memorial Group of Institutions<br />
              Agra, Uttar Pradesh, India
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Residence: C Block 807, Ram Raghu Ananda Phase-2, Sikandra, Agra (Near Yatharth Hospital)
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            <span>Designed with elegance for</span>
            <span className="text-gold-400 font-semibold">Tanvi Dubey</span>
            <span>• &copy; {new Date().getFullYear()} All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-gold-500/50 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
