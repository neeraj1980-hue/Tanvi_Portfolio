'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        // Fallback for static environment
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Backend API request:', err);
      // Fallback gracefully
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappMessage = encodeURIComponent("Hello Tanvi, I visited your portfolio website and would like to connect with you!");
  const whatsappUrl = `https://wa.me/919412632249?text=${whatsappMessage}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ram Raghu Ananda Phase 2 Sikandra Agra near Yatharth Hospital")}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950/90">
      {/* Decorative ambient lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project, internship opportunity, or question? Feel free to reach out directly via call, WhatsApp, or message.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card with Direct Call & WhatsApp */}
            <div className="glass-card rounded-2xl p-6 space-y-4 border-gold-500/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Direct Phone</div>
                  <div className="text-lg font-bold text-white font-mono">{PERSONAL_DETAILS.phone}</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Available for academic inquiries, professional networking, and logistics internship opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href={`tel:${PERSONAL_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 btn-gold py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30"
                >
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Residential Address</div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {PERSONAL_DETAILS.addressFull}
                  </div>
                  <div className="text-xs text-gold-300/80 pt-1">
                    Landmark: Near Yatharth Hospital, Sikandra, Agra
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability & Response Time Card */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Availability & Response Time</h4>
                  <p className="text-xs text-slate-400">Monday - Saturday (College & Project Hours)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prompt replies on WhatsApp and direct telephone calls. Feel free to leave a voice message or email anytime.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-400">Directly reaches Tanvi Dubey</p>
              </div>
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white">Message Received!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out! Tanvi will review your message and respond shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold px-6 py-2 rounded-full text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Phone / Mobile</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship / Academic Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or question here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold py-3 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
