import React, { useState } from 'react';
import { BATCHES_LIST, BatchInfo } from '../data/siteData';
import { Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface BatchesSectionProps {
  lang: 'bn' | 'en';
  onSelectBatchForBooking: (batchId: string) => void;
}

export const BatchesSection: React.FC<BatchesSectionProps> = ({
  lang,
  onSelectBatchForBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bcs' | 'foundation' | 'exam' | 'shifts'>('all');

  const filterBatches = () => {
    if (activeFilter === 'all') return BATCHES_LIST;
    if (activeFilter === 'bcs') return BATCHES_LIST.filter(b => b.category === 'bcs');
    if (activeFilter === 'foundation') return BATCHES_LIST.filter(b => b.category === 'foundation');
    if (activeFilter === 'exam') return BATCHES_LIST.filter(b => b.category === 'exam');
    if (activeFilter === 'shifts') return BATCHES_LIST.filter(b => b.category === 'morning' || b.category === 'afternoon');
    return BATCHES_LIST;
  };

  const batches = filterBatches();

  return (
    <section id="batches" className="py-20 relative bg-[#090a0f] border-t border-white/5">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          {/* Unboxed natural editorial subtitle */}
          <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
            {lang === 'bn' ? 'চলমান ব্যাচসমূহ' : 'Current Academic Schedules'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {lang === 'bn' ? 'আপনার লক্ষ্য অনুযায়ী সেরা ব্যাচ বেছে নিন' : 'Tailored Batches for Every Career Aspirant'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal">
            {lang === 'bn'
              ? 'নিয়মিত মূল্যায়ন, বিসিএস ক্যাডারদের প্রত্যক্ষ দিকনির্দেশনা ও সুশৃঙ্খল পাঠ্যক্রমের মাধ্যমে প্রতিটি বিষয়ে আত্মবিশ্বাস অর্জন করুন।'
              : 'Structured routines, BCS cadre mentorship, and bi-weekly rigorous exam testing to build unshakeable confidence.'}
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#121622] rounded-xl border border-white/10 w-fit mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang === 'bn' ? 'সকল ব্যাচ' : 'All Batches'}
          </button>
          <button
            onClick={() => setActiveFilter('bcs')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'bcs'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang === 'bn' ? 'বিসিএস ব্যাচ' : 'BCS Regular'}
          </button>
          <button
            onClick={() => setActiveFilter('foundation')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'foundation'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang === 'bn' ? 'ফাউন্ডেশন - ২৬' : 'Foundation 26'}
          </button>
          <button
            onClick={() => setActiveFilter('shifts')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'shifts'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang === 'bn' ? 'মর্নিং ও আফটারনুন' : 'Morning & Afternoon'}
          </button>
          <button
            onClick={() => setActiveFilter('exam')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'exam'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang === 'bn' ? 'ইনটেনসিভ এক্সাম ব্যাচ' : 'Exam Batch'}
          </button>
        </div>

        {/* Batches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => {
            const isFlagship = batch.category === 'bcs' || batch.category === 'exam';

            return (
              <div
                key={batch.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] ${
                  isFlagship
                    ? 'bg-[#141826] border border-red-500/30 hover:border-red-500/60 shadow-xl shadow-red-950/20'
                    : 'bg-[#10141f] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Subtle top indicator for flagship programs */}
                {batch.badgeBn && (
                  <div className="flex items-center justify-between mb-3 text-xs font-medium text-slate-400">
                    <span className="text-red-400 font-semibold font-mono">
                      {lang === 'bn' ? batch.badgeBn : batch.badgeEn}
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {lang === 'bn' ? 'আসন সংখ্যা সীমিত' : 'Few Seats Left'}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {lang === 'bn' ? batch.nameBn : batch.nameEn}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'bn' ? batch.descriptionBn : batch.descriptionEn}
                  </p>

                  {/* Schedule Details Container */}
                  <div className="mt-5 p-3.5 rounded-xl bg-[#090b12] border border-white/5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="font-medium">{lang === 'bn' ? batch.daysBn : batch.daysEn}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-mono-numbers font-semibold">
                        {lang === 'bn' ? batch.timeBn : batch.timeEn}
                      </span>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <ul className="mt-5 space-y-2 text-xs text-slate-300">
                    {(lang === 'bn' ? batch.featuresBn : batch.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectBatchForBooking(batch.id)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 transition-all group cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'এই ব্যাচে ভর্তি হতে ক্লিক করুন' : 'Enroll in this Batch'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exam Batch Highlight Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#141826] via-[#1a172c] to-[#141826] border border-red-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === 'bn' ? 'সাপ্তাহিক ওএমআর এক্সাম সিস্টেম' : 'Weekly OMR Examination System'}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'bn'
                ? 'প্রতি সপ্তাহে শনিবার ও বুধবার প্রিলি ও লিখিত পরীক্ষা'
                : 'Bi-Weekly Saturday & Wednesday Prelim + Written Tests'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === 'bn'
                ? 'বাস্তব পরীক্ষার আবহে ওএমআর শিটে পরীক্ষা, সাথে সাথে সঠিক উত্তরের নির্ভুল সমাধান শিট ও নেগেটিভ মার্কিং ট্র্যাকিং।'
                : 'Experience authentic BCS exam hall pressures with standard OMR evaluation, percentile ranking, and targeted negative marking mitigation.'}
            </p>
          </div>

          <button
            onClick={() => onSelectBatchForBooking('exam-batch')}
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-950/40 transition-colors whitespace-nowrap cursor-pointer"
          >
            {lang === 'bn' ? 'এক্সাম ব্যাচে যোগ দিন' : 'Join Exam Batch'}
          </button>
        </div>
      </div>
    </section>
  );
};
