import React from 'react';
import { PhoneCall, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface MobileBottomBarProps {
  lang: 'bn' | 'en';
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  lang,
  onOpenBooking,
}) => {
  return (
    <aside
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090b12]/95 backdrop-blur-lg border-t border-white/10 px-2 py-1.5 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
          className="flex flex-col items-center justify-center py-1 rounded-lg text-slate-300 hover:text-white active:bg-white/5 transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-medium mt-0.5">{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
        </a>

        {/* Batches Link */}
        <a
          href="#batches"
          className="flex flex-col items-center justify-center py-1 rounded-lg text-slate-300 hover:text-white active:bg-white/5 transition-colors"
        >
          <Calendar className="w-4 h-4 text-red-400" />
          <span className="text-[10px] font-medium mt-0.5">{lang === 'bn' ? 'ব্যাচসমূহ' : 'Batches'}</span>
        </a>

        {/* Reading Room Link */}
        <a
          href="#reading-room"
          className="flex flex-col items-center justify-center py-1 rounded-lg text-slate-300 hover:text-white active:bg-white/5 transition-colors"
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-medium mt-0.5">{lang === 'bn' ? 'রিডিং রুম' : 'Library'}</span>
        </a>

        {/* Primary Action Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1 rounded-lg bg-red-600 active:bg-red-700 text-white transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">{lang === 'bn' ? 'আসন বুক' : 'Book'}</span>
        </button>
      </div>
    </aside>
  );
};
