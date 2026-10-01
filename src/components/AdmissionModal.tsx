import React, { useState } from 'react';
import { X, CheckCircle2, Send, PhoneCall, Sparkles } from 'lucide-react';
import { BATCHES_LIST, CONTACT_INFO } from '../data/siteData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
  defaultBatchId?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  lang,
  defaultBatchId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    batchId: defaultBatchId || 'bcs-51-52',
    targetExam: 'bcs',
    institution: '',
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate random friendly reference ID
    const refCode = 'JX-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(refCode);

    // Selected batch details
    const selectedBatch = BATCHES_LIST.find(b => b.id === formData.batchId);
    const batchName = selectedBatch ? (lang === 'bn' ? selectedBatch.nameBn : selectedBatch.nameEn) : formData.batchId;

    // Create WhatsApp URL
    const message = encodeURIComponent(
      `[JOB Xpress আসন সংরক্ষণ কোড: ${refCode}]\nনাম: ${formData.name}\nফোন: ${formData.phone}\nনির্বাচিত ব্যাচ: ${batchName}\nশিক্ষা প্রতিষ্ঠান: ${formData.institution || 'N/A'}`
    );
    window.open(`https://wa.me/8801351835060?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#121624] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                {lang === 'bn' ? 'আসন সংরক্ষণের আবেদন সফল হয়েছে!' : 'Seat Reservation Submitted!'}
              </h3>
              <p className="text-xs text-slate-300">
                {lang === 'bn'
                  ? 'আপনার আসন সংরক্ষণ কোড নিচে দেওয়া হলো। আমাদের অফিস থেকে দ্রুত আপনার সাথে যোগাযোগ করা হবে।'
                  : 'Your unique booking reference is generated below. Our coordinator will contact you.'}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#090b12] border border-white/10 text-center">
              <span className="text-xs text-slate-400 block font-mono">Reference Code</span>
              <span className="text-2xl font-bold text-amber-400 font-mono tracking-wider">{submittedRef}</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${CONTACT_INFO.phonePrimaryRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'bn' ? 'জরুরি প্রয়োজনে সরাসরি কল করুন' : 'Need urgent confirmation? Call hotline'}</span>
              </a>

              <button
                onClick={() => {
                  setSubmittedRef(null);
                  onClose();
                }}
                className="py-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                {lang === 'bn' ? 'উইন্ডো বন্ধ করুন' : 'Close window'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ভর্তি ও আসন বুকিং' : 'Admission & Seat Booking'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {lang === 'bn' ? 'JOB Xpress এ আসন সংরক্ষণ করুন' : 'Reserve Your Academy Seat'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'bn'
                  ? 'ঝিনাইদহ সদর ক্যাম্পাসে সীমিত আসন। ফর্মটি পূরণ করে আসন নিশ্চিত করুন।'
                  : 'Limited seats per batch at Jhenaidah campus. Secure yours below.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'bn' ? 'আপনার পূর্ণ নাম' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'bn' ? 'যেমন: সাইদুর রহমান' : 'e.g. Saidur Rahman'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'bn' ? 'সচল মোবাইল নম্বর' : 'Active Phone Number'} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="017xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-mono-numbers"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'bn' ? 'কাঙ্ক্ষিত ব্যাচ বা সেবা নির্বাচন করুন' : 'Select Batch or Service'} *
                </label>
                <select
                  value={formData.batchId}
                  onChange={(e) => setFormData({ ...formData, batchId: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                >
                  {BATCHES_LIST.map((b) => (
                    <option key={b.id} value={b.id} className="bg-[#121624] text-white">
                      {lang === 'bn' ? b.nameBn : b.nameEn} ({lang === 'bn' ? b.timeBn : b.timeEn})
                    </option>
                  ))}
                  <option value="reading-room-carrel" className="bg-[#121624] text-white">
                    {lang === 'bn' ? 'শুধুমাত্র রিডিং রুম কেবিন বুকিং' : 'Dedicated Reading Room Desk Only'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'bn' ? 'কলেজ / বিশ্ববিদ্যালয় বা বর্তমান পেশা' : 'Institution / Profession'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'bn' ? 'যেমন: ঝিনাইদহ কেসি কলেজ' : 'e.g. KC College, Jhenaidah'}
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090b12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-950/40 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'আসন নিশ্চিত করতে পাঠান' : 'Submit & Connect via WhatsApp'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
