'use client';

import React, { useState, useEffect } from 'react';
import { 
  Database, 
  MessageSquare, 
  Mail, 
  Phone, 
  Calendar, 
  RefreshCw, 
  CheckCircle, 
  ArrowLeft,
  Eye,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
}

interface Stats {
  page_views: number;
  inquiries: number;
  updated_at?: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stats, setStats] = useState<Stats>({ page_views: 0, inquiries: 0 });
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState<'connected' | 'error' | 'loading'>('loading');

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.messages || []);
        if (data.stats) setStats(data.stats);
        setDbStatus('connected');
      } else {
        setDbStatus('error');
      }
    } catch (err) {
      console.error('Fetch messages error:', err);
      setDbStatus('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link 
                href="/" 
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white flex items-center gap-3">
              <span>Admin Dashboard</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 font-sans font-normal">
                PostgreSQL Storage
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Live inquiries & contact submissions saved in your PostgreSQL database (Prisma / db.prisma.io)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchMessages}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold btn-outline-gold"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Database Status Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total Inquiries</span>
              <MessageSquare className="w-4 h-4 text-gold-400" />
            </div>
            <div className="text-2xl font-bold font-serif text-white">{messages.length}</div>
            <p className="text-[11px] text-slate-400">Stored in <code className="text-gold-300">contact_messages</code> table</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Estimated Views</span>
              <Eye className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold font-serif text-white">{stats.page_views || 1}</div>
            <p className="text-[11px] text-slate-400">Logged in <code className="text-blue-300">site_analytics</code> table</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Database Engine</span>
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PostgreSQL (Prisma)</span>
            </div>
            <p className="text-[11px] text-slate-400 truncate">Host: db.prisma.io:5432</p>
          </div>

        </div>

        {/* Messages List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span>Received Messages</span>
            </h2>
            <span className="text-xs text-slate-400">
              Showing {messages.length} {messages.length === 1 ? 'record' : 'records'}
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm glass-card rounded-2xl">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-gold-400" />
              Connecting to PostgreSQL database...
            </div>
          ) : messages.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm glass-card rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-base text-white font-serif">No messages in database yet</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                When visitors submit the contact form on your portfolio, their inquiries will appear here in real time.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="glass-card rounded-2xl p-6 border-slate-800 hover:border-gold-500/40 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{msg.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30">
                          {msg.status || 'UNREAD'}
                        </span>
                      </div>
                      <div className="text-xs text-gold-400 font-mono">{msg.subject || 'No Subject Specified'}</div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      <span>{new Date(msg.created_at).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 text-sm text-slate-200 leading-relaxed">
                    {msg.message}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
                    <div className="flex flex-wrap gap-4 text-slate-300">
                      <a 
                        href={`mailto:${msg.email}`}
                        className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-gold-400" />
                        <span>{msg.email}</span>
                      </a>

                      {msg.phone && (
                        <a 
                          href={`tel:${msg.phone.replace(/[^0-9+]/g, '')}`}
                          className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-gold-400" />
                          <span>{msg.phone}</span>
                        </a>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {msg.phone && (
                        <a
                          href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-1 transition-colors"
                        >
                          <span>WhatsApp</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <a
                        href={`mailto:${msg.email}`}
                        className="px-3 py-1.5 rounded-lg btn-outline-gold font-medium flex items-center gap-1"
                      >
                        <span>Reply Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
