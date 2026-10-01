import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BatchesSection } from './components/BatchesSection';
import { SyllabusSection } from './components/SyllabusSection';
import { ReadingRoomSection } from './components/ReadingRoomSection';
import { MentorSection } from './components/MentorSection';
import { MomentsGallery } from './components/MomentsGallery';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBatchId, setSelectedBatchId] = useState<string | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenBooking = (batchId?: string) => {
    setSelectedBatchId(batchId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBatchId(undefined);
  };

  const scrollToBatches = () => {
    const el = document.getElementById('batches');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSyllabus = () => {
    const el = document.getElementById('syllabus');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onExploreBatches={scrollToBatches}
          onOpenBooking={() => handleOpenBooking('bcs-51-52')}
          onOpenSyllabus={scrollToSyllabus}
        />

        <BatchesSection
          lang={lang}
          onSelectBatchForBooking={(batchId) => handleOpenBooking(batchId)}
        />

        <SyllabusSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking('bcs-51-52')}
        />

        <ReadingRoomSection
          lang={lang}
          onBookSeat={() => handleOpenBooking('reading-room-carrel')}
        />

        <MentorSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking('bcs-51-52')}
        />

        <MomentsGallery lang={lang} />

        <ResourcesSection lang={lang} />

        <ContactSection lang={lang} />
      </main>

      {/* Quiet Footer */}
      <Footer lang={lang} />

      {/* Mobile Sticky Navigation Thumb Bar */}
      <MobileBottomBar
        lang={lang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Admission / Booking Modal */}
      <AdmissionModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        lang={lang}
        defaultBatchId={selectedBatchId}
      />
    </div>
  );
}
