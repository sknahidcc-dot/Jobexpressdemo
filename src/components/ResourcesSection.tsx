import React from 'react';
import { Download, FileText, ExternalLink, BookMarked, CheckSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface ResourcesSectionProps {
  lang: 'bn' | 'en';
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ lang }) => {
  return (
    <section id="resources" className="py-20 bg-[#0d0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
            {lang === 'bn' ? 'স্টাডি ম্যাটেরিয়াল ও বুক লিস্ট' : 'Study Assets & Curated Literature'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'প্রয়োজনীয় রিসোর্স ও নির্দেশিকা ডাউনলোড করুন' : 'Essential Preparation Guides & Downloads'}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {lang === 'bn'
              ? 'আমাদের মেন্টরদের বাছাইকৃত বইয়ের তালিকা ও রুটিন গাইডলাইন সরাসরি ডাউনলোড করে আপনার পড়ার টেবিলে সাজিয়ে নিন।'
              : 'Directly download our recommended booklists, syllabus checklists, and weekly test formats.'}
          </p>
        </div>

        {/* Featured Resource Card (Book Recommendations) */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Book Recommendations Box */}
          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-[#151928] via-[#121624] to-[#0f121d] border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookMarked className="w-36 h-36 text-red-500" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 mb-2 font-mono">
                <FileText className="w-4 h-4" />
                <span>{lang === 'bn' ? 'অফিসিয়াল বুক লিস্ট গাইড' : 'Official Recommended Books'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {lang === 'bn' ? 'বিসিএস ও চাকরির সেরা বইয়ের পূর্ণাঙ্গ তালিকা' : 'Complete BCS & Competitive Exam Booklist'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {lang === 'bn'
                  ? 'কোন বিষয়ের জন্য কোন লেখকের বই পড়বেন? অপ্রয়োজনীয় বই কিনে সময় নষ্ট না করে ৩৫তম বিসিএস ক্যাডার মো: গোহর রিজভীর তৈরি করা অনুমোদিত বুক রিকমেন্ডেশনস শিট ডাউনলোড করুন।'
                  : 'Avoid wasted hours on low-yield textbooks. Download the definitive subject-wise reading list curated by 35th BCS Cadre Md. Gohar Rizvi.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">বাংলা সাহিত্য ও ব্যাকরণ</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">English Grammar & Roots</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">ম্যাথ ও মেন্টাল অ্যাবিলিটি</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">বাংলাদেশ ও আন্তর্জাতিক</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">PDF Format · Google Drive Hosted</span>

              <a
                href={CONTACT_INFO.bookDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-950/40 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'bn' ? 'গুগল ড্রাইভ থেকে ডাউনলোড' : 'Download via Google Drive'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Secondary Card: Study Strategy Checklist */}
          <div className="rounded-2xl bg-[#121622] border border-white/10 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono text-amber-400 font-semibold mb-2">
                {lang === 'bn' ? 'দৈনিক পড়াশোনার নিয়ম' : 'Daily Routine Blueprint'}
              </div>
              <h4 className="text-lg font-bold text-white">
                {lang === 'bn' ? 'সাপ্তাহিক রুটিন ও রিভিশন পদ্ধতি' : 'Weekly Study Rhythm'}
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? 'প্রতিদিন নতুন পড়ার পাশাপাশি আগের পড়া রিভিশনের জন্য বৈজ্ঞানিক স্পেসড রিপিটেশন পদ্ধতি মেনে চলুন।'
                  : 'Structured spaced repetition strategies ensuring retention across high-yield subjects.'}
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? 'প্রতিদিন ৩০টি নতুন ইংরেজি শব্দ' : '30 Daily Vocabulary Drills'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? '১৫টি গণিত সমাধান হাতে-কলমে' : '15 Handwritten Math Problems'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? 'প্রতি সপ্তাহে শনিবার ও বুধবার মক টেস্ট' : 'Bi-weekly Mock Test Assessment'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>{lang === 'bn' ? 'ফেসবুক পেজে সাম্প্রতিক নোটিশ' : 'View Facebook Updates'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
