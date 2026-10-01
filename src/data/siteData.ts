export interface BatchInfo {
  id: string;
  nameBn: string;
  nameEn: string;
  category: 'foundation' | 'bcs' | 'morning' | 'afternoon' | 'exam';
  daysBn: string;
  daysEn: string;
  timeBn: string;
  timeEn: string;
  descriptionBn: string;
  descriptionEn: string;
  featuresBn: string[];
  featuresEn: string[];
  badgeBn?: string;
  badgeEn?: string;
  status: 'active' | 'filling_fast';
}

export interface SyllabusSubject {
  id: string;
  nameBn: string;
  nameEn: string;
  marks: number;
  percentage: number;
  topicsBn: string[];
  topicsEn: string[];
  strategyBn: string;
  strategyEn: string;
}

export const CONTACT_INFO = {
  phonePrimary: '01351 835060',
  phonePrimaryRaw: '+8801351835060',
  phoneSecondary: '01985 812628',
  phoneSecondaryRaw: '+8801985812628',
  email: 'jobxpresscareer@gmail.com',
  addressBn: 'গণগ্রন্থাগার সংলগ্ন পুকুর পাড়, জিমাম টাওয়ার (৩য় তলা), ঝিনাইদহ সদর, ঝিনাইদহ',
  addressEn: 'Beside Public Library Pond, Jimam Tower (3rd Floor), Jhenaidah Sadar, Jhenaidah',
  facebookUrl: 'https://www.facebook.com/jobxpresscareer/',
  bookDriveUrl: 'https://drive.google.com/file/d/1urfLGBSzFWB0U1KIMbpTmEttrS2AvlFw/view?usp=sharing',
  googleMapsUrl: 'https://maps.google.com/?q=Jimam+Tower+Jhenaidah+Bangladesh',
};

export const MENTOR_DATA = {
  nameBn: 'মো: গোহর রিজভী',
  nameEn: 'Md. Gohar Rizvi',
  cadreBn: '৩৫তম বিসিএস (সাধারণ শিক্ষা)',
  cadreEn: '35th BCS (General Education Cadre)',
  designationBn: 'প্রভাষক (হিসাববিজ্ঞান), সরকারি নুরুন্নাহার মহিলা কলেজ, ঝিনাইদহ',
  designationEn: 'Lecturer in Accounting, Govt. Nurunnahar Women\'s College, Jhenaidah',
  phone: '01985 812628',
  bioBn: 'বিসিএস ও অন্যান্য সরকারি প্রতিযোগিতামূলক পরীক্ষায় সাফল্যের মূল চাবিকাঠি হলো লক্ষ্যভিত্তিক সুনির্দিষ্ট পরিকল্পনা, নির্ভুল প্রশ্নব্যাংক বিশ্লেষণ এবং নিয়মিত পরীক্ষার মাধ্যমে আত্মবিশ্বাস বৃদ্ধি। JOB Xpress-এ আমরা প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে দিকনির্দেশনা প্রদান করি।',
  bioEn: 'The true key to conquering BCS and prestigious career exams lies in structured discipline, systematic question bank deconstruction, and relentless exam practice. At JOB Xpress, our mission is to personally mentor every aspirant toward their career zenith.',
  achievementsBn: [
    '৩৫তম বিসিএস পরীক্ষায় সরাসরি সাধারণ শিক্ষা ক্যাডারে উত্তীর্ণ',
    'হিসাববিজ্ঞান ও বাণিজ্য অনুষদের দীর্ঘদিনের অভিজ্ঞ শিক্ষক',
    '২০১৮ সাল থেকে ঝিনাইদহের শত শত চাকরিপ্রার্থীর সফল পথপ্রদর্শক',
    'সিলেবাস-ভিত্তিক প্রশ্ন বিশ্লেষণ ও লিখিত পরীক্ষার বিশেষ মেন্টর'
  ],
  achievementsEn: [
    'Directly qualified in 35th BCS General Education Cadre',
    'Senior Lecturer in Accounting with comprehensive pedagogy experience',
    'Mentored thousands of competitive exam aspirants since 2018',
    'Specialist in exam psychological stamina and written exam techniques'
  ]
};

export const BATCHES_LIST: BatchInfo[] = [
  {
    id: 'foundation-26',
    nameBn: 'Foundation - 26',
    nameEn: 'Foundation Batch 26',
    category: 'foundation',
    daysBn: 'শনি, সোম, বুধ, শুক্র',
    daysEn: 'Sat, Mon, Wed, Fri',
    timeBn: 'সকাল ৭:৩০ মিনিট — ৯:৩০ মিনিট',
    timeEn: '07:30 AM — 09:30 AM',
    descriptionBn: 'সকল চাকরির ভিত্তি মজবুত করার জন্য পূর্ণাঙ্গ বেসিক থেকে অ্যাডভান্সড কোর্স। বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের খুঁটিনাটি শুরু থেকে শেখানো হয়।',
    descriptionEn: 'Comprehensive foundation covering English grammar, quantitative math, Bangla, and science from ground zero.',
    featuresBn: ['বেসিক থেকে শুরু', 'টপিকভিত্তিক ক্লাস নোট', 'সাপ্তাহিক মূল্যায়ন পরীক্ষা', 'ব্যক্তিগত দুর্বলতা সমাধান'],
    featuresEn: ['Foundational concepts', 'Topic-wise class handouts', 'Weekly progress test', 'Doubt clearing sessions'],
    badgeBn: 'ভর্তি চলছে',
    badgeEn: 'Admissions Open',
    status: 'filling_fast',
  },
  {
    id: 'bcs-51-52',
    nameBn: '51st BCS (*বর্তমানে ৫২তম)',
    nameEn: '51st & 52nd BCS Regular',
    category: 'bcs',
    daysBn: 'শনি, সোম, বুধ, শুক্র',
    daysEn: 'Sat, Mon, Wed, Fri',
    timeBn: 'বিকাল ৩:০০ টা — ৫:০০ টা',
    timeEn: '03:00 PM — 05:00 PM',
    descriptionBn: 'বিসিএস প্রিলিমিনারি ২০০ নম্বরের পুঙ্খানুপুঙ্খ সিলেবাস কভারেজ, বিগত ১০-৪৫তম বিসিএস প্রশ্ন সমাধান এবং লিখিত পরীক্ষার দিকনির্দেশনা।',
    descriptionEn: 'Rigorous 200-mark BCS syllabus coverage, past year question mastery, and strategic preparation by BCS cadre mentors.',
    featuresBn: ['বিসিএস ক্যাডারদের নিয়মিত ক্লাস', 'লিখিত পরীক্ষার ব্যাকগ্রাউন্ড প্রস্তুতি', 'ওএমআর শিটে প্র্যাকটিস', 'কারেন্ট অ্যাফেয়ার্স আপডেট'],
    featuresEn: ['Classes by BCS Cadres', 'Early Written prep foundation', 'Real OMR sheet simulation', 'Monthly Current Affairs dossiers'],
    badgeBn: 'ফ্ল্যাগশিপ প্রোগ্রাম',
    badgeEn: 'Flagship Program',
    status: 'filling_fast',
  },
  {
    id: 'new-morning',
    nameBn: 'New Morning Batch',
    nameEn: 'New Morning Batch',
    category: 'morning',
    daysBn: 'রবি, মঙ্গল, বৃহস্পতি, শুক্র',
    daysEn: 'Sun, Tue, Thu, Fri',
    timeBn: 'সকাল ৭:৩০ মিনিট — ৯:৩০ মিনিট',
    timeEn: '07:30 AM — 09:30 AM',
    descriptionBn: 'সকালের শান্ত ও নির্মল পরিবেশে পড়াশোনার আদর্শ সুযোগ। যারা দিনের শুরুতেই সেরা পাঠদান সম্পন্ন করতে চান তাদের জন্য নির্ধারিত।',
    descriptionEn: 'Early morning session tailored for fresh-mind learning, conceptual clarity, and disciplined daily study rhythms.',
    featuresBn: ['সকালের ফ্রেশ মেমোরি ফোকাস', 'অধ্যায়ভিত্তিক রিভিশন', 'মক কুইজ টেস্ট', 'স্টাডি মেটেরিয়াল সরবরাহ'],
    featuresEn: ['Morning optimal focus', 'Chapter revisions', 'Daily rapid-fire quiz', 'Printed study material included'],
    badgeBn: 'নতুন সেশন',
    badgeEn: 'New Session',
    status: 'active',
  },
  {
    id: 'new-afternoon',
    nameBn: 'New Afternoon Batch',
    nameEn: 'New Afternoon Batch',
    category: 'afternoon',
    daysBn: 'রবি, মঙ্গল, বৃহস্পতি, শুক্র',
    daysEn: 'Sun, Tue, Thu, Fri',
    timeBn: 'বিকাল ৩:০০ টা — ৫:০০ টা',
    timeEn: '03:00 PM — 05:00 PM',
    descriptionBn: 'কলেজ বা অনার্সের ক্লাস শেষে চাকরির প্রস্তুতির সুবর্ণ সুযোগ। ব্যাংক, শিক্ষক নিবন্ধন ও সরকারি নিয়োগ পরীক্ষার জন্য উপযোগী।',
    descriptionEn: 'Ideal for college graduates and job seekers balancing daytime schedules with focused evening exam prep.',
    featuresBn: ['কলেজ-পরবর্তী সুবিধাজনক সময়', 'ব্যাংক ও বিসিএস ডুয়াল ট্র‍্যাক', 'ম্যাথ ও ইংলিশ স্পেশাল কেয়ার', 'মান্থলি এক্সাম র‍্যাংক'],
    featuresEn: ['Post-university hours', 'Bank & BCS dual track', 'Special English & Math clinic', 'Monthly merit ranking'],
    badgeBn: 'নতুন সেশন',
    badgeEn: 'New Session',
    status: 'active',
  },
  {
    id: 'exam-batch',
    nameBn: 'সাপ্তাহিক ইনটেনসিভ এক্সাম ব্যাচ',
    nameEn: 'Intensive Weekly Exam Batch',
    category: 'exam',
    daysBn: 'প্রতি শনিবার ও বুধবার',
    daysEn: 'Every Saturday & Wednesday',
    timeBn: 'সুনির্দিষ্ট শিডিউল অনুযায়ী',
    timeEn: 'Flexible Scheduled Shifts',
    descriptionBn: 'সুপরিকল্পিত সিলেবাসের ভিত্তিতে প্রতি সপ্তাহের শনিবার ও বুধবারে প্রিলিমিনারি ও লিখিত পরীক্ষা অনুষ্ঠিত হয়। নেগেটিভ মার্কিং বিশ্লেষণ ও সমাধান শিট।',
    descriptionEn: 'Rigorous exam-focused program with bi-weekly mock tests, OMR evaluation, percentile scoring, and live question solve classes.',
    featuresBn: ['২০০ নম্বরের পূর্ণাঙ্গ প্রিলি টেস্ট', 'বিষয়ভিত্তিক লিখিত পরীক্ষা', 'ডিজিটাল মেরিট লিস্ট প্রকাশ', 'প্রশ্ন বিশ্লেষণ ও সমাধান ক্লাস'],
    featuresEn: ['200-mark full prelim mock', 'Subjective written tests', 'Instant rank publication', 'Detailed solve sheet & lecture'],
    badgeBn: 'সর্বাধিক জনপ্রিয়',
    badgeEn: 'Most Popular',
    status: 'filling_fast',
  },
];

export const BCS_SYLLABUS: SyllabusSubject[] = [
  {
    id: 'bangla',
    nameBn: 'বাংলা ভাষা ও সাহিত্য',
    nameEn: 'Bangla Language & Literature',
    marks: 35,
    percentage: 17.5,
    topicsBn: ['ব্যাকরণ (শব্দ, পদ, বাক্য, সন্ধি, সমাস, প্রত্যয়, উপসর্গ)', 'প্রাচীন ও মধ্যযুগ (চর্যাপদ, মঙ্গলকাব্য, শ্রীকৃষ্ণকীর্তন)', 'আধুনিক যুগ (রবীন্দ্রনাথ, নজরুল, মাইকেল, জীবনানন্দ ও অন্যান্য)'],
    topicsEn: ['Grammar (Phonetics, Morphology, Syntax, Prefixes)', 'Ancient & Medieval Era (Charyapada, Mangalkavya)', 'Modern Era (Tagore, Nazrul, Jibanananda, Post-war literature)'],
    strategyBn: 'ব্যাকরণে ১৫ নম্বরের জন্য নিয়মতান্ত্রিক চর্চা এবং সাহিত্যে ২০ নম্বরের জন্য প্রধান কবি ও লেখকদের যুগভিত্তিক বিশ্লেষণ অত্যন্ত কার্যকর।',
    strategyEn: 'Focus on 15 grammar marks with rule clarity; target 20 literature marks via thematic chronologies of master poets.',
  },
  {
    id: 'english',
    nameBn: 'ইংরেজি ভাষা ও সাহিত্য',
    nameEn: 'English Language & Literature',
    marks: 35,
    percentage: 17.5,
    topicsBn: ['Parts of Speech, Clauses, Subject-Verb Agreement', 'Vocabulary, Idioms, Prepositions, Analogy', 'English Literature (Elizabethan to Modern & Post-modern periods)'],
    topicsEn: ['Grammar & Applied Syntax (Parts of speech, clauses)', 'Lexical Precision (Idioms, phrasal verbs, roots, analogy)', 'Literary Eras (Shakespeare, Romantic poets, Victorian, Modernists)'],
    strategyBn: 'প্রতিদিন ৩০টি ভোকাবুলারি রিভিশন এবং সাহিত্য অংশে শেক্সপিয়র, রোমান্টিক ও ভিক্টোরিয়ান যুগের বিখ্যাত কোটেশন ও রচয়িতা মনে রাখা জরুরি।',
    strategyEn: 'Daily lexical drills plus focused study of Shakespeare, Romantic era titans, and Victorian masterpieces yield maximum output.',
  },
  {
    id: 'bangladesh',
    nameBn: 'বাংলাদেশ বিষয়াবলী',
    nameEn: 'Bangladesh Affairs',
    marks: 30,
    percentage: 15,
    topicsBn: ['প্রাচীনকাল থেকে ১৯৭১ মুক্তিযুদ্ধ ও স্বাধীনতা', 'সংবিধান ও বিচার ব্যবস্থা', 'বাংলাদেশের অর্থনীতি, জাতীয় বাজেট ও মেগা প্রকল্প', 'ভূগোল, কৃষি ও জনসংখ্যা'],
    topicsEn: ['History & 1971 Liberation War', 'Constitution & State Architecture', 'National Economy, Mega Projects & SDGs', 'Demography, Agriculture & Geography'],
    strategyBn: 'সংবিধানের মৌলিক ধারা এবং মুক্তিযুদ্ধের কালানুক্রমিক ইতিহাস নির্ভুলভাবে আত্মস্থ করতে হবে।',
    strategyEn: 'Master fundamental constitutional articles and chronological milestones of the 1971 Liberation War.',
  },
  {
    id: 'international',
    nameBn: 'আন্তর্জাতিক বিষয়াবলী',
    nameEn: 'International Affairs',
    marks: 20,
    percentage: 10,
    topicsBn: ['বৈশ্বিক ইতিহাস, আঞ্চলিক ও আন্তর্জাতিক ব্যবস্থা', 'আন্তর্জাতিক নিরাপত্তা ও ভূরাজনীতি', 'আন্তর্জাতিক সংগঠন ও চুক্তি', 'সাম্প্রতিক বিশ্ব ঘটনাপ্রবাহ'],
    topicsEn: ['Global History & Regional Alignments', 'Security, Treaties & Geopolitics', 'Multilateral Organizations (UN, WB, IMF)', 'Contemporary Global Events & Summits'],
    strategyBn: 'আন্তর্জাতিক চুক্তি, সদর দফতর এবং বর্তমান ভূরাজনৈতিক উত্তেজনার প্রেক্ষাপট নিয়মিত মানচিত্র দেখে পড়া উচিত।',
    strategyEn: 'Utilize geopolitical maps to memorize key straits, treaties, summit outcomes, and UN agency mandates.',
  },
  {
    id: 'math',
    nameBn: 'গাণিতিক যুক্তি',
    nameEn: 'Mathematical Reasoning',
    marks: 15,
    percentage: 7.5,
    topicsBn: ['বাস্তব সংখ্যা, লসাগু-গসাগু, শতকরা, লাভ-ক্ষতি', 'বীজগণিতীয় সূত্রাবলি, সূচক ও লগারিদম', 'জ্যামিতি, পরিমিতি ও স্থানাংক জ্যামিতি', 'বিন্যাস-সমাবেশ ও সম্ভাব্যতা'],
    topicsEn: ['Real numbers, percentages, profit-loss, ratios', 'Algebraic formulae, exponents, logarithms', 'Euclidean geometry, trigonometry, coordinates', 'Permutation, combination & probability'],
    strategyBn: 'প্রতিদিন অন্তত ২০টি গণিত নিজে হাতে সমাধান করতে হবে। শর্টকাট সূত্রের চেয়ে মৌলিক নিয়ম ভালো করে বোঝা নিরাপদ।',
    strategyEn: 'Solve quantitative problems step-by-step; core fundamental clarity beats fragile shortcuts during high-stakes exams.',
  },
  {
    id: 'mental_ability',
    nameBn: 'মানসিক দক্ষতা',
    nameEn: 'Mental Ability',
    marks: 15,
    percentage: 7.5,
    topicsBn: ['ভাষাগত যৌক্তিক বিচার ও রক্তের সম্পর্ক', 'সংখ্যা ও বর্ণমালার ধারা', 'দিক নির্ণয়, ঘড়ি ও ক্যালেন্ডার', 'স্থানিক সম্পর্ক ও যান্ত্রিক দক্ষতা'],
    topicsEn: ['Verbal reasoning & blood relations', 'Numerical & alphabetical sequences', 'Spatial orientation, clocks, calendars', 'Mirror images & mechanical problem solving'],
    strategyBn: 'বিগত বিসিএস প্রিলি ও লিখিত পরীক্ষার মানসিক দক্ষতার প্রশ্ন সমাধান করলেই অধিকাংশ কমন পাওয়া যায়।',
    strategyEn: 'Practicing all previous BCS written and prelim mental ability questions guarantees high percentile returns.',
  },
  {
    id: 'general_science',
    nameBn: 'সাধারণ বিজ্ঞান',
    nameEn: 'General Science',
    marks: 15,
    percentage: 7.5,
    topicsBn: ['ভৌত বিজ্ঞান (আলো, শব্দ, চুম্বক, বিদ্যুৎ)', 'জীববিজ্ঞান (কোষ, বংশগতি, রোগ ও স্বাস্থ্য)', 'আধুনিক বিজ্ঞান ও মহাকাশ গবেষণা'],
    topicsEn: ['Physical Sciences (Optics, acoustics, electricity)', 'Biological Sciences (Genetics, human physiology, nutrition)', 'Modern Science (Biotechnology, space exploration)'],
    strategyBn: '৯ম-১০ম শ্রেণির সাধারণ বিজ্ঞান ও পদার্থ-রসায়ন বইয়ের কনসেপ্ট স্পষ্ট রাখা এবং বিগত প্রশ্নের সমাধান করা।',
    strategyEn: 'Consolidate 9th-10th grade textbook fundamentals with special attention to human anatomy, vitamins, and energy laws.',
  },
  {
    id: 'computer_it',
    nameBn: 'কম্পিউটার ও তথ্যপ্রযুক্তি',
    nameEn: 'Computer & Information Tech',
    marks: 15,
    percentage: 7.5,
    topicsBn: ['কম্পিউটার হার্ডওয়্যার, মেমোরি ও প্রসেসর', 'অপারেটিং সিস্টেম ও নেটওয়ার্কিং (LAN, WAN, 5G)', 'সাইবার নিরাপত্তা, ইন্টারনেট ও ক্লাউড কম্পিউটিং', 'সংখ্যা পদ্ধতি ও লজিক গেইট'],
    topicsEn: ['Hardware, ALU, cache & storage hierarchies', 'Networks, protocols (TCP/IP), OSI model, 5G', 'Cybersecurity, cryptography & cloud', 'Binary, octal, hex conversion & logic gates'],
    strategyBn: 'সংখ্যা পদ্ধতি রূপান্তর ও নেটওয়ার্কিং প্রটোকল থেকে প্রতি বছর নিশ্চিত প্রশ্ন থাকে; এগুলো নিয়মিত প্র্যাকটিস করুন।',
    strategyEn: 'Number base conversions and networking protocols are guaranteed scorers; master them through visual diagrams.',
  },
  {
    id: 'geography',
    nameBn: 'ভূগোল ও দুর্যোগ ব্যবস্থাপনা',
    nameEn: 'Geography & Disaster Mgmt',
    marks: 10,
    percentage: 5,
    topicsBn: ['বাংলাদেশ ও বৈশ্বিক ভূপ্রকৃতি ও জলবায়ু', 'ভূমিকম্প, ঘূর্ণিঝড় ও বন্যা ব্যবস্থাপনা', 'প্রাকৃতিক সম্পদ ও পরিবেশের ভারসাম্য'],
    topicsEn: ['Physiography of Bangladesh & World climate', 'Natural hazards: cyclones, earthquakes, floods', 'Resource conservation, carbon cycle & green tech'],
    strategyBn: 'বাংলাদেশের সীমানা, নদী ব্যবস্থা এবং দুর্যোগ প্রশমন নীতিমালা সম্পর্কে স্পষ্ট ধারণা থাকা জরুরি।',
    strategyEn: 'Study geographic maps of Bangladesh rivers, border enclaves, and standard disaster management operational codes.',
  },
  {
    id: 'ethics',
    nameBn: 'নৈতিকতা, মূল্যবোধ ও সুশাসন',
    nameEn: 'Ethics, Values & Governance',
    marks: 10,
    percentage: 5,
    topicsBn: ['নৈতিকতার দার্শনিক ধারণা ও মূল্যবোধ', 'সুশাসনের মূল স্তম্ভ ও প্রাতিষ্ঠানিক জবাবদিহিতা', 'জাতীয় শুদ্ধাচার কৌশল ও দুর্নীতি দমন'],
    topicsEn: ['Philosophical theories of ethics & civic values', 'Good governance pillars & administrative transparency', 'National Integrity Strategy & anti-corruption protocols'],
    strategyBn: 'দার্শনিকদের উক্তি ও সুশাসনের আন্তর্জাতিক সূচকগুলো মনে রাখতে হবে এবং বাস্তব প্রেক্ষাপটে চিন্তা করার অভ্যাস করতে হবে।',
    strategyEn: 'Learn seminal quotes of political philosophers and core governance indicators defined by the World Bank.',
  },
];

export const READING_ROOM_FEATURES = [
  {
    id: 'silent_zone',
    titleBn: 'পিনপতন নীরবতা ও শীতাতপ নিয়ন্ত্রিত পরিবেশ',
    titleEn: 'Pin-drop Silence & Climate Control',
    descBn: 'পড়াশোনায় সর্বোচ্চ একাগ্রতা নিশ্চিত করার জন্য সম্পূর্ণ কোলাহলমুক্ত, আরামদায়ক ও শান্ত পরিবেশ।',
    descEn: 'Acoustically insulated sanctuary with consistent temperature control for long distraction-free study blocks.',
  },
  {
    id: 'ergonomic_desks',
    titleBn: 'ব্যক্তিগত রিডিং কেবিন ও আরামদায়ক আসন',
    titleEn: 'Individual Study Carrels & Ergonomics',
    descBn: 'প্রতিটি শিক্ষার্থীর জন্য স্বতন্ত্র স্টাডি ডেস্ক, বুকশেলফ, ব্যক্তিগত চার্জিং পয়েন্ট ও ব্রাস টাস্ক ল্যাম্প।',
    descEn: 'Private study cubicles with book dividers, dedicated power sockets, and glare-free warm reading lights.',
  },
  {
    id: 'book_archive',
    titleBn: 'বিসিএস ও জব সলিউশন বইয়ের সমৃদ্ধ লাইব্রেরি',
    titleEn: 'Curated Civil Service & Exam Library',
    descBn: 'অধ্যাপক জব সলিউশন, ওরাকল, এমপিথ্রি, বাংলা একাডেমি ও আন্তর্জাতিক বিষয়ক সর্বশেষ সংস্করণের বই।',
    descEn: 'Instant on-shelf access to latest job solutions, encyclopedias, grammar references, and previous question sets.',
  },
  {
    id: 'wifi_resources',
    titleBn: 'হাই-স্পিড ইন্টারনেট ও দৈনিক পত্রিকা কর্নার',
    titleEn: 'High-Speed Wi-Fi & Daily Press Corner',
    descBn: 'জাতীয় ও আন্তর্জাতিক দৈনিক পত্রিকা, মাসিক কারেন্ট অ্যাফেয়ার্স এবং অনলাইন রিসার্চের জন্য নির্ভরযোগ্য ইন্টারনেট।',
    descEn: 'Daily leading national dailies, monthly affairs archives, and seamless connectivity for digital mock research.',
  },
];
