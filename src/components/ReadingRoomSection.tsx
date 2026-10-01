import React, { useState } from 'react';
import { READING_ROOM_FEATURES, CONTACT_INFO } from '../data/siteData';
import { BookOpen, Wifi, Wind, ShieldCheck, Check, Sparkles, MapPin, PhoneCall } from 'lucide-react';
import readingRoomImg from '../assets/images/premium_reading_room_1790856040956.jpg';

interface ReadingRoomSectionProps {
  lang: 'bn' | 'en';
  onBookSeat: () => void;
}

export const ReadingRoomSection: React.FC<ReadingRoomSectionProps> = ({
  lang,
  onBookSeat,
}) => {
  const [selectedShift, setSelectedShift] = useState<'full' | 'day' | 'evening'>('full');

  return (
    <section id="reading-room" className="py-20 bg-[#090a0f] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient subtle circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (Left Column on Desktop) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src={readingRoomImg}
                alt="JOB Xpress Private Reading Room & Study Library"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e111a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-red-400">
                    {lang === 'bn' ? 'ব্যক্তিগত রিডিং কেবিন' : 'Private Study Carrels'}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {lang === 'bn' ? 'জিমাম টাওয়ার ৩য় তলা' : 'Jimam Tower, 3rd Floor'}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === 'bn' ? 'আসন বুকিং সক্রিয়' : 'Active Seats'}</span>
                </div>
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 flex items-center gap-2.5 text-slate-300">
                <Wind className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{lang === 'bn' ? 'শীতাতপ নিয়ন্ত্রিত (AC)' : 'Full Climate Control'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121622] border border-white/5 flex items-center gap-2.5 text-slate-300">
                <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'bn' ? 'হাই স্পিড ওয়াইফাই' : 'High-Speed Wi-Fi'}</span>
              </div>
            </div>
          </div>

          {/* Text and Features (Right Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
                {lang === 'bn' ? 'লাইব্রেরি ও রিডিং রুম' : 'Library & Reading Sanctuary'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                {lang === 'bn'
                  ? 'কোলাহলমুক্ত নিরিবিলি পরিবেশে পড়ার জন্য ব্যক্তিগত রিডিং স্পেস'
                  : 'Distraction-Free Dedicated Study Space for High Achievers'}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {lang === 'bn'
                  ? 'বাসার নানা বিভ্রান্তি এড়িয়ে ঘণ্টার পর ঘণ্টা গভীর মনোযোগ বজায় রাখার সেরা স্থান। ঝিনাইদহের গণগ্রন্থাগারের শান্ত পুকুর পাড়ে সুপরিকল্পিত এই রিডিং রুমটি চাকরিপ্রার্থীদের প্রথম পছন্দ।'
                  : 'An acoustic sanctuary designed to eliminate domestic distractions and cultivate deep study endurance. Nestled beside the scenic Jhenaidah Public Library pond.'}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {READING_ROOM_FEATURES.map((feat) => (
                <div
                  key={feat.id}
                  className="p-4 rounded-xl bg-[#131724] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{lang === 'bn' ? feat.titleBn : feat.titleEn}</span>
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-normal">
                    {lang === 'bn' ? feat.descBn : feat.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Booking CTA Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onBookSeat}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-950/40 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bn' ? 'রিডিং রুমে সিট বুক করতে ক্লিক করুন' : 'Reserve a Study Desk'}</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-[#161a29] hover:bg-[#1e2337] border border-white/10 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span className="font-mono-numbers">{CONTACT_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
