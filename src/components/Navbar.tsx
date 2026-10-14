'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../types';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Hobbies & Sports', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 flex items-center justify-center text-navy-950 font-serif font-bold text-lg shadow-md shadow-gold-500/30 group-hover:scale-105 transition-transform duration-300">
            TD
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
              Tanvi Dubey
            </span>
            <span className="block text-[10px] tracking-widest text-gold-400/80 font-sans uppercase">
              BBA Logistics • AI & Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-gold-400 rounded-lg transition-colors hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold btn-outline-gold"
          >
            <span>Login</span>
          </a>
          <a
            href={`tel:${PERSONAL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold btn-gold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/20 px-6 pt-2 pb-6 space-y-3 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-gold-400 border-b border-slate-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="/login"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold btn-outline-gold"
            >
              <span>🔐 Login</span>
            </a>
            <a
              href={`tel:${PERSONAL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold btn-gold"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {PERSONAL_DETAILS.phone}</span>
            </a>
            <a
              href={`https://wa.me/919412632249`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold btn-outline-gold"
            >
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
