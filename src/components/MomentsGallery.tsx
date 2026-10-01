import React, { useState } from 'react';
import { X, ZoomIn, Camera } from 'lucide-react';

import seminarImg from '../assets/images/seminar_mentorship_1790856071266.jpg';
import examDeskImg from '../assets/images/exam_batch_prep_1790856058635.jpg';
import libraryImg from '../assets/images/premium_reading_room_1790856040956.jpg';
import founderImg from '../assets/images/founder.jpg';

interface MomentsGalleryProps {
  lang: 'bn' | 'en';
}

interface GalleryItem {
  id: string;
  image: string;
  titleBn: string;
  titleEn: string;
  categoryBn: string;
  categoryEn: string;
  captionBn: string;
  captionEn: string;
}

export const MomentsGallery: React.FC<MomentsGalleryProps> = ({ lang }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'seminar',
      image: seminarImg,
      titleBn: 'বিসিএস প্রিলিমিনারি মানবণ্টন মাস্টারক্লাস',
      titleEn: 'BCS Preliminary Syllabus Masterclass',
      categoryBn: 'সেমিনার ও গাইডলাইন',
      categoryEn: 'Masterclasses & Seminars',
      captionBn: 'ঝিনাইদহের কেন্দ্রীয় অডিটোরিয়ামে পরীক্ষার্থীদের জন্য বিশেষ প্রিলিমিনারি সিলেবাস ও প্রস্তুতি কৌশল বিশ্লেষণ।',
      captionEn: 'Stage lecture deconstructing preliminary exam strategies in the central auditorium.',
    },
    {
      id: 'exam_prep',
      image: examDeskImg,
      titleBn: 'নিবিড় এক্সাম টেস্ট ও ওএমআর বিশ্লেষণ',
      titleEn: 'Intensive Mock Exam Sessions',
      categoryBn: 'সাপ্তাহিক মূল্যায়ন',
      categoryEn: 'Weekly Evaluations',
      captionBn: 'প্রতি শনিবার ও বুধবারে অনুষ্ঠিত পূর্ণাঙ্গ ২০০ নম্বরের প্রিলি ও লিখিত পরীক্ষার প্রস্তুতি পরিবেশ।',
      captionEn: 'Real timed mock exam environment mirroring authentic Public Service Commission test halls.',
    },
    {
      id: 'reading_carrel',
      image: libraryImg,
      titleBn: 'একাগ্র পড়াশোনার নীরব রিডিং রুম',
      titleEn: 'Focused Silent Reading Haven',
      categoryBn: 'লাইব্রেরি জোন',
      categoryEn: 'Library Zone',
      captionBn: 'গণগ্রন্থাগারের শান্ত পুকুর পাড়ে জিমাম টাওয়ারের শীতাতপ নিয়ন্ত্রিত আধুনিক স্টাডি কেবিন।',
      captionEn: 'Acoustically peaceful study carrels beside the public library pond for sustained intellectual focus.',
    },
    {
      id: 'mentorship_desk',
      image: founderImg,
      titleBn: 'ব্যক্তিগত মেন্টরশিপ ও দুর্বলতা নিরসন',
      titleEn: 'Direct One-on-One Mentorship',
      categoryBn: 'ক্যাডার গাইডেন্স',
      categoryEn: 'Cadre Guidance',
      captionBn: '৩৫তম বিসিএস ক্যাডার মো: গোহর রিজভীর প্রত্যক্ষ তত্ত্বাবধানে প্রতিটি শিক্ষার্থীর পড়ার পরিকল্পনা তৈরি।',
      captionEn: 'Custom study schedule formulation under 35th BCS Cadre Md. Gohar Rizvi.',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#090a0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
            {lang === 'bn' ? 'স্মরণীয় কিছু মুহূর্ত' : 'Documented Moments'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'আমাদের অসাধারণ পথচলার চিত্র' : 'Snapshots from an Inspiring Journey'}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {lang === 'bn'
              ? '২০১৮ সাল থেকে হাজারো শিক্ষার্থীর সাথে আয়োজিত সেমিনার, সাপ্তাহিক পরীক্ষা ও লাইব্রেরি পড়াশোনার কিছু মুহূর্ত।'
              : 'Memorable milestones from our seminars, rigorous exam batches, and study community since 2018.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#131624] border border-white/10 hover:border-red-500/50 cursor-pointer transition-all duration-300 shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0d0f17]">
                <img
                  src={item.image}
                  alt={lang === 'bn' ? item.titleBn : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4">
                <div className="text-xs font-mono text-red-400 font-semibold mb-1">
                  {lang === 'bn' ? item.categoryBn : item.categoryEn}
                </div>
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {lang === 'bn' ? item.titleBn : item.titleEn}
                </h4>

                <div className="mt-2 flex items-center justify-between text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{lang === 'bn' ? 'বড় করে দেখুন' : 'Click to expand'}</span>
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121624] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={lang === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#121624] border-t border-white/10">
              <div className="text-xs font-mono text-red-400 font-semibold">
                {lang === 'bn' ? selectedPhoto.categoryBn : selectedPhoto.categoryEn}
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {lang === 'bn' ? selectedPhoto.titleBn : selectedPhoto.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                {lang === 'bn' ? selectedPhoto.captionBn : selectedPhoto.captionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
