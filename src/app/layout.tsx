import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
});

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
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#060a14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950 min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
