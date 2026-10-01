import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/siteData';
import { ArrowUp, MapPin, Phone, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'bn' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080d] border-t border-white/5 pt-16 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {lang === 'bn'
                ? 'ঝিনাইদহে ২০১৮ সাল থেকে হাজারো বিসিএস ও সরকারি চাকরিপ্রার্থীর নির্ভরযোগ্য প্রস্তুতি প্রতিষ্ঠান। সুশৃঙ্খল রুটিন, ওএমআর পরীক্ষা ও নিবিড় ব্যক্তিগত মেন্টরশিপ।'
                : 'Premier civil service & competitive examination academy in Jhenaidah since 2018. Rigorous syllabus coverage, OMR evaluations, and direct BCS cadre mentorship.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-red-400">
              <span className="font-semibold">সেরা প্রস্তুতি, সেরা সাফল্য।</span>
            </div>
          </div>

          {/* Quick Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              {lang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#batches" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'চলমান ব্যাচসমূহ' : 'Current Batches'}
                </a>
              </li>
              <li>
                <a href="#reading-room" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'লাইব্রেরি ও রিডিং রুম' : 'Silent Reading Room'}
                </a>
              </li>
              <li>
                <a href="#syllabus" className="hover:text-white transition-colors">
                  {lang === 'bn' ? '২০০ মার্কস সিলেবাস' : '200-Mark BCS Syllabus'}
                </a>
              </li>
              <li>
                <a href="#mentor" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'প্রধান মেন্টর পরিচিতি' : 'Cadre Mentorship'}
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'বুক লিস্ট ডাউনলোড' : 'Curated Booklist PDF'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info Column */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              {lang === 'bn' ? 'ক্যাম্পাস তথ্য' : 'Campus Office'}
            </h4>
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{lang === 'bn' ? CONTACT_INFO.addressBn : CONTACT_INFO.addressEn}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-mono-numbers">{CONTACT_INFO.phonePrimary} · {CONTACT_INFO.phoneSecondary}</span>
            </div>
            <div className="pt-2">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-400 hover:text-sky-300 underline"
              >
                facebook.com/jobxpresscareer
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} JOB Xpress. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>{lang === 'bn' ? 'উপরে যান' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
