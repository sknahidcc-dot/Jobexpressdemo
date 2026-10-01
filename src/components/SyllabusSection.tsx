import React, { useState } from 'react';
import { BCS_SYLLABUS, SyllabusSubject } from '../data/siteData';
import { BookOpen, CheckCircle, ChevronRight, Award, Lightbulb, Target } from 'lucide-react';

interface SyllabusSectionProps {
  lang: 'bn' | 'en';
  onOpenBooking: () => void;
}

export const SyllabusSection: React.FC<SyllabusSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SyllabusSubject>(BCS_SYLLABUS[0]);

  return (
    <section id="syllabus" className="py-20 bg-[#0d0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
              {lang === 'bn' ? 'বিসিএস প্রিলিমিনারি মানবণ্টন' : 'BCS Preliminary 200 Marks Blueprint'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? '২০০ নম্বরের বিষয়ভিত্তিক পূর্ণাঙ্গ সিলেবাস গাইড' : '200-Mark Subject-Wise Strategic Breakdown'}
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              {lang === 'bn'
                ? 'সেমিনার স্লাইড অনুযায়ী বিসিএস প্রিলিমিনারির ১০টি বিষয়ের সঠিক নম্বর বণ্টন, গুরুত্বপূর্ণ টপিক ও JOB Xpress এর বিশেষ প্রস্তুতি কৌশল।'
                : 'Interactive blueprint mirroring our official stage masterclass: detailed marks, weighted topics, and targeted preparation strategies.'}
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#141826] border border-white/10 w-fit shrink-0">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs text-slate-400">{lang === 'bn' ? 'সর্বমোট পরীক্ষার পূর্ণমান' : 'Total Exam Marks'}</div>
              <div className="text-lg font-bold text-white font-mono-numbers">২০০ নম্বর (২ ঘন্টা)</div>
            </div>
          </div>
        </div>

        {/* Interactive 2-Column Syllabus Explorer */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Subject List / Selector (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-3">
              {lang === 'bn' ? 'বিষয় তালিকা (ক্লিক করে বিস্তারিত দেখুন)' : 'Subjects (Click to inspect)'}
            </div>

            <div className="space-y-1.5 max-h-[580px] overflow-y-auto pr-1">
              {BCS_SYLLABUS.map((item) => {
                const isSelected = selectedSubject.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSubject(item)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-red-600/15 border border-red-500/50 text-white'
                        : 'bg-[#121622] hover:bg-[#181d2e] border border-white/5 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-red-500' : 'bg-slate-600'}`} />
                      <span className="text-xs sm:text-sm font-semibold tracking-tight">
                        {lang === 'bn' ? item.nameBn : item.nameEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono-numbers px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300">
                        {item.marks} {lang === 'bn' ? 'নম্বর' : 'marks'}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isSelected ? 'rotate-90 text-red-400' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Deep Dive Details (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-[#141826] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-red-400 font-semibold tracking-wider">
                    {lang === 'bn' ? 'নির্বাচিত বিষয়' : 'Selected Domain'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {lang === 'bn' ? selectedSubject.nameBn : selectedSubject.nameEn}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-extrabold text-amber-400 font-mono-numbers">
                    {selectedSubject.marks} <span className="text-sm font-normal text-slate-400">/ ২০০</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono-numbers">
                    {selectedSubject.percentage}% {lang === 'bn' ? 'মোট নম্বরের' : 'of Total'}
                  </div>
                </div>
              </div>

              {/* Progress Bar of Weightage */}
              <div className="mt-4">
                <div className="w-full bg-[#0a0c12] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-500 to-amber-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(selectedSubject.marks / 35) * 100}%` }}
                  />
                </div>
              </div>

              {/* Core Topics Checklist */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                  <Target className="w-4 h-4 text-red-400" />
                  <span>{lang === 'bn' ? 'প্রধান গুরুত্বপূর্ণ অধ্যায়সমূহ' : 'Key Syllabus Pillars'}</span>
                </div>
                <div className="space-y-2.5">
                  {(lang === 'bn' ? selectedSubject.topicsBn : selectedSubject.topicsEn).map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#0e111a] border border-white/5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Advice Callout */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-red-950/20 via-[#181d2e] to-[#121624] border border-red-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'bn' ? 'JOB Xpress এর প্রস্তুতি কৌশল' : 'Job Xpress Strategy Formula'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {lang === 'bn' ? selectedSubject.strategyBn : selectedSubject.strategyEn}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  {lang === 'bn'
                    ? 'এই বিষয়ের বিশেষ ক্লাস নোট ও বিগত প্রশ্নের সমাধান শিট পেতে ব্যাচে জয়েন করুন।'
                    : 'Class handouts and solve sheets for this subject are provided in our regular batches.'}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {lang === 'bn' ? 'ব্যাচে ভর্তি হতে আবেদন' : 'Apply for Batch'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
