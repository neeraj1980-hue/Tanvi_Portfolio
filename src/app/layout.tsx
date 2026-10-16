import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060a14',
};

export const metadata: Metadata = {
  title: 'Tanvi Dubey | Professional Portfolio | BBA Logistics & AI',
  description: 'Official portfolio website of Tanvi Dubey. BBA in Logistics student at Dr. MPS Memorial Group of Institutions, Agra. Proficient in AI tools, computer applications, athletic leadership, and modern business administration.',
  keywords: [
    'Tanvi Dubey',
    'Tanvi Dubey Portfolio',
    'BBA Logistics Agra',
    'Dr MPS Memorial Group of Institutions',
    'Tanvi Dubey Agra',
    'Logistics and AI Portfolio'
  ],
  authors: [{ name: 'Tanvi Dubey' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950 min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
