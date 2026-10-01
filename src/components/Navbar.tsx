import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface NavbarProps {
  lang: 'bn' | 'en';
  onToggleLang: () => void;
  onOpenBooking: (batchId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBooking,
}) => {
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
    { href: '#batches', labelBn: 'ব্যাচসমূহ', labelEn: 'Batches' },
    { href: '#reading-room', labelBn: 'রিডিং রুম', labelEn: 'Reading Room' },
    { href: '#syllabus', labelBn: 'সিলেবাস', labelEn: 'Syllabus' },
    { href: '#mentor', labelBn: 'মেন্টর', labelEn: 'Mentorship' },
    { href: '#resources', labelBn: 'রিসোর্স', labelEn: 'Resources' },
    { href: '#contact', labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center group transition-transform active:scale-95"
            aria-label="JOB Xpress Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-red-400" />
              <span className="font-mono-numbers">{lang === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Direct Call Quick Action on desktop */}
            <a
              href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono-numbers">{CONTACT_INFO.phonePrimary}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-lg shadow-sm hover:shadow-red-900/30 transition-all active:scale-95 whitespace-nowrap"
            >
              {lang === 'bn' ? 'আসন সংরক্ষণ' : 'Book Seat'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d101a] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'bn' ? 'সরাসরি কল: ' : 'Direct Call: '}{CONTACT_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
