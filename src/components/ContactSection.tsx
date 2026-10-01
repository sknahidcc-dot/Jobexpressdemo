import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/siteData';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  lang: 'bn' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    // Open WhatsApp prefilled with message or simulate inquiry
    const text = encodeURIComponent(
      `হ্যালো JOB Xpress, আমি ${formData.name} (ফোন: ${formData.phone})। আমার প্রশ্ন: ${formData.message || 'ভর্তি সংক্রান্ত তথ্য জানতে চাই।'}`
    );
    window.open(`https://wa.me/8801351835060?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#090a0f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2 font-mono">
            {lang === 'bn' ? 'যোগাযোগ ও সরাসরি সাক্ষাৎ' : 'Location & Enquiries'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'আমাদের ক্যাম্পাসে আপনাকে স্বাগতম' : 'Connect with Job Xpress Academy'}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {lang === 'bn'
              ? 'ভর্তি, রুটিন বা রিডিং রুমের আসন বুকিং সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি কল করুন বা আমাদের ক্যাম্পাসে চলে আসুন।'
              : 'Reach out directly for admissions, routine queries, or reading carrel reservations.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Map Card (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Campus Location Box */}
            <div className="p-6 rounded-2xl bg-[#131726] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {lang === 'bn' ? 'ক্যাম্পাসের ঠিকানা' : 'Campus Location'}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'bn' ? CONTACT_INFO.addressBn : CONTACT_INFO.addressEn}
                  </p>
                  <div className="mt-2 text-xs text-amber-400 font-medium">
                    {lang === 'bn' ? 'গণগ্রন্থাগার সংলগ্ন পুকুর পাড় · জিমাম টাওয়ার (৩য় তলা)' : 'Beside Public Library Pond · Jimam Tower (3rd Floor)'}
                  </div>
                </div>
              </div>

              {/* Map Direction Action */}
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>{lang === 'bn' ? 'গুগল ম্যাপে লোকেশন দেখুন' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hotlines Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Primary Hotline */}
              <a
                href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
                className="p-5 rounded-2xl bg-[#131726] border border-white/10 hover:border-emerald-500/40 transition-colors group block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{lang === 'bn' ? 'অফিসিয়াল হেল্পলাইন' : 'Official Hotline'}</span>
                  <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="mt-2 text-lg font-bold text-white font-mono-numbers">
                  {CONTACT_INFO.phonePrimary}
                </div>
                <div className="mt-1 text-xs text-emerald-400 font-medium">
                  {lang === 'bn' ? 'সরাসরি কল করতে ট্যাপ করুন' : 'Tap to call hotline'}
                </div>
              </a>

              {/* Mentor Hotline */}
              <a
                href={`tel:${CONTACT_INFO.phoneSecondaryRaw}`}
                className="p-5 rounded-2xl bg-[#131726] border border-white/10 hover:border-red-500/40 transition-colors group block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{lang === 'bn' ? 'মেন্টর মো: গোহর রিজভী' : 'Mentor Hotline'}</span>
                  <Phone className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="mt-2 text-lg font-bold text-white font-mono-numbers">
                  {CONTACT_INFO.phoneSecondary}
                </div>
                <div className="mt-1 text-xs text-slate-400 font-medium">
                  {lang === 'bn' ? '৩৫তম বিসিএস ক্যাডার' : '35th BCS Cadre'}
                </div>
              </a>
            </div>

            {/* Facebook Connect Card */}
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-r from-[#1877f2]/10 to-transparent border border-[#1877f2]/30 flex items-center justify-between hover:bg-[#1877f2]/15 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1877f2] flex items-center justify-center text-white font-bold text-lg">
                  f
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {lang === 'bn' ? 'অফিসিয়াল ফেসবুক পেজ' : 'Official Facebook Page'}
                  </div>
                  <div className="text-xs text-slate-400">facebook.com/jobxpresscareer</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#1877f2] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Message / WhatsApp Inquiry Form (Right Column) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131726] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'bn' ? 'তাত্ক্ষণিক মেসেজ পাঠান' : 'Direct Instant Inquiry'}</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {lang === 'bn' ? 'কিছু জানার থাকলে লিখে পাঠান' : 'Send a Fast Message'}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {lang === 'bn'
                  ? 'আপনার প্রশ্ন সাবমিট করলে সরাসরি আমাদের হোয়াটসঅ্যাপ অ্যাকাউন্টে যুক্ত হবে।'
                  : 'Submit below to connect directly with our admissions coordinator on WhatsApp.'}
              </p>

              {submitted ? (
                <div className="mt-6 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">
                    {lang === 'bn' ? 'ধন্যবাদ! আপনার মেসেজ প্রস্তুত হয়েছে' : 'Thank you! Your message was sent'}
                  </div>
                  <p className="text-xs text-slate-300">
                    {lang === 'bn'
                      ? 'আমরা দ্রুত আপনার প্রশ্নের উত্তর দেব। প্রয়োজনে ০১৩৫১ ৮৩৫০৬০ নম্বরে সরাসরি যোগাযোগ করতে পারেন।'
                      : 'Our coordinator will respond shortly. You may also call us at 01351 835060.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    {lang === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'bn' ? 'আপনার নাম' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'bn' ? 'যেমন: মো: নাজমুল হাসান' : 'e.g. Nazmul Hasan'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'bn' ? 'যেমন: 017xxxxxxxx' : 'e.g. 017xxxxxxxx'}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors font-mono-numbers"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'bn' ? 'আপনার প্রশ্ন বা বার্তা' : 'Your Query or Target Exam'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={lang === 'bn' ? 'কোন ব্যাচ বা রিডিং রুম সম্পর্কে জানতে চান?' : 'Which batch or reading slot are you interested in?'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-950/40 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'মেসেজ পাঠিয়ে হোয়াটসঅ্যাপে যুক্ত হন' : 'Send Message via WhatsApp'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
