import React from 'react';
import { MENTOR_DATA, CONTACT_INFO } from '../data/siteData';
import { Award, Phone, CheckCircle2, GraduationCap, Quote } from 'lucide-react';
import founderImg from '../assets/images/founder.jpg';

interface MentorSectionProps {
  lang: 'bn' | 'en';
  onOpenBooking: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <section id="mentor" className="py-20 bg-[#0d0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#131726] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background subtle light accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 blur-[80px] pointer-events-none rounded-full" />

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Mentor Photo */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl group">
                <img
                  src={founderImg}
                  alt={lang === 'bn' ? MENTOR_DATA.nameBn : MENTOR_DATA.nameEn}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-60" />
              </div>

              {/* Direct phone badge */}
              <a
                href={`tel:${MENTOR_DATA.phone}`}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'bn' ? 'সরাসরি পরামর্শ:' : 'Mentor Hotline:'}</span>
                <span className="font-mono-numbers text-white">{MENTOR_DATA.phone}</span>
              </a>
            </div>

            {/* Mentor Details and Guidance */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-widest font-mono">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'bn' ? 'প্রধান উপদেষ্টা ও মেন্টর' : 'Chief Mentor & Architect'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {lang === 'bn' ? MENTOR_DATA.nameBn : MENTOR_DATA.nameEn}
                </h3>

                <div className="mt-1.5 space-y-0.5">
                  <div className="text-sm font-semibold text-red-400">
                    {lang === 'bn' ? MENTOR_DATA.cadreBn : MENTOR_DATA.cadreEn}
                  </div>
                  <div className="text-xs text-slate-300">
                    {lang === 'bn' ? MENTOR_DATA.designationBn : MENTOR_DATA.designationEn}
                  </div>
                </div>
              </div>

              {/* Guidance Quote */}
              <div className="relative p-4 rounded-xl bg-[#0a0c14] border border-white/5 italic text-xs sm:text-sm text-slate-300 leading-relaxed">
                <Quote className="w-5 h-5 text-red-500/30 absolute -top-2.5 left-3 bg-[#0a0c14] px-0.5" />
                <p className="pt-1">
                  "{lang === 'bn' ? MENTOR_DATA.bioBn : MENTOR_DATA.bioEn}"
                </p>
              </div>

              {/* Achievements Checklist */}
              <div className="space-y-2 pt-1">
                {(lang === 'bn' ? MENTOR_DATA.achievementsBn : MENTOR_DATA.achievementsEn).map((ach, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Direct Admission Button */}
              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'মেন্টরের অধীনে প্রস্তুতি নিতে সিট বুক করুন' : 'Book a Seat under Mentorship'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
