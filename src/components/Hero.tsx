import React from 'react';
import { ArrowRight, BookOpen, MapPin, Calendar, CheckCircle2, Download } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

// Generated high-fidelity asset
import heroImage from '../assets/images/hero_career_coaching_1790856028078.jpg';

interface HeroProps {
  lang: 'bn' | 'en';
  onExploreBatches: () => void;
  onOpenBooking: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreBatches,
  onOpenBooking,
  onOpenSyllabus,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Media with High-Contrast Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="JOB Xpress Academy Lecture & Career Coaching"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Deep Dark Obsidian Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/90 to-[#090a0f]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-[#090a0f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(239,68,68,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Clean Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-red-400 tracking-wide">
              <span>{lang === 'bn' ? 'প্রতিষ্ঠিত ২০১৮' : 'Established 2018'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{lang === 'bn' ? 'ঝিনাইদহ সদর' : 'Jhenaidah Sadar'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400 font-semibold">{lang === 'bn' ? '৩৫তম বিসিএস ক্যাডার মেন্টরশিপ' : '35th BCS Cadre Mentorship'}</span>
            </div>

            {/* High-Contrast Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {lang === 'bn' ? (
                <>
                  সেরা প্রস্তুতি,{' '}
                  <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                    সেরা সাফল্য।
                  </span>
                </>
              ) : (
                <>
                  Precision Coaching for{' '}
                  <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                    Elite Careers.
                  </span>
                </>
              )}
            </h1>

            {/* Proposition Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {lang === 'bn' ? (
                'বিসিএস, বাংলাদেশ ব্যাংক, প্রাথমিক শিক্ষক ও ৯ম-২০তম গ্রেড পরীক্ষার জন্য আধুনিক ও সময়োপযোগী পাঠ্যক্রম। অভিজ্ঞ ক্যাডার শিক্ষকদের পাঠদান, সাপ্তাহিক ওএমআর পরীক্ষা এবং শীতাতপ নিয়ন্ত্রিত নিরিবিলি রিডিং রুম।'
              ) : (
                'Comprehensive civil service, central bank, and primary teacher examination prep in Jhenaidah. Rigorous syllabus mastery, weekly mock exams, and quiet acoustic study carrels.'
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreBatches}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-950/40 transition-all hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
              >
                <span>{lang === 'bn' ? 'চলমান ব্যাচ রুটিন' : 'View Batch Schedules'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-100 bg-[#141826] hover:bg-[#1a2033] border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <span>{lang === 'bn' ? 'আসন সংরক্ষণ করুন' : 'Reserve Seat'}</span>
              </button>

              <a
                href={CONTACT_INFO.bookDriveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-transparent hover:bg-white/5 transition-colors"
                title="Google Drive Book Recommendations PDF"
              >
                <Download className="w-4 h-4 text-red-400" />
                <span>{lang === 'bn' ? 'বুক লিস্ট ডাউনলোড' : 'Booklist PDF'}</span>
              </a>
            </div>

            {/* Adjacency Trust Metric Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono-numbers tracking-tight">
                  ২০১৮+
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'bn' ? 'প্রতিষ্ঠার বছর' : 'Year Founded'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono-numbers tracking-tight">
                  ২০০০+
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'bn' ? 'সফল শিক্ষার্থী' : 'Enrolled Candidates'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono-numbers tracking-tight">
                  ১০০%
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {lang === 'bn' ? 'সিলেবাস কভারেজ' : 'Syllabus Precision'}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Interactive Info Card Column */}
          <div className="lg:col-span-4">
            <div className="bg-[#121624]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
              {/* Subtle top red glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {lang === 'bn' ? 'নতুন ভর্তি চলমান' : 'Admissions Open'}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono-numbers">2026 Season</span>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-snug">
                    <strong className="text-white block font-semibold">
                      {lang === 'bn' ? '৫১তম ও ৫২তম বিসিএস ব্যাচ' : '51st & 52nd BCS Batch'}
                    </strong>
                    {lang === 'bn' ? 'শনি, সোম, বুধ, শুক্র বিকাল ৩ টা — ৫ টা' : 'Sat, Mon, Wed, Fri 3:00 PM — 5:00 PM'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-snug">
                    <strong className="text-white block font-semibold">
                      {lang === 'bn' ? 'ফাউন্ডেশন ব্যাচ - ২৬' : 'Foundation Batch 26'}
                    </strong>
                    {lang === 'bn' ? 'শনি, সোম, বুধ, শুক্র সকাল ৭:৩০ — ৯:৩০' : 'Sat, Mon, Wed, Fri 7:30 AM — 9:30 AM'}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-snug">
                    <strong className="text-white block font-semibold">
                      {lang === 'bn' ? 'ব্যক্তিগত রিডিং কেবিন' : 'Private Reading Carrels'}
                    </strong>
                    {lang === 'bn' ? 'শান্ত, সুশীতল ও ওয়াইফাই সমৃদ্ধ স্টাডি জোন' : 'Silent AC library with Wi-Fi & book archives'}
                  </p>
                </div>
              </div>

              {/* Location pin micro-banner */}
              <div className="pt-4 border-t border-white/10 flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'bn'
                    ? 'জিমাম টাওয়ার (৩য় তলা), গণগ্রন্থাগার সংলগ্ন পুকুর পাড়, ঝিনাইদহ।'
                    : 'Jimam Tower (3rd Fl), Beside Public Library Pond, Jhenaidah.'}
                </span>
              </div>

              {/* Interactive Syllabus Trigger */}
              <div className="pt-4">
                <button
                  onClick={onOpenSyllabus}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'bn' ? 'বিসিএস ২০০ মার্কস সিলেবাস ব্রেকডাউন' : 'Explore 200-Mark BCS Syllabus'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
