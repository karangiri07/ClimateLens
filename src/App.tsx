import { useState } from 'react';

const LeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.83 12 1.54 12 3 17.8 3 20c0 .55.45 1 1 1h.12c1.78-.29 3.52-.92 5.12-1.87 3.52-2.1 6.13-5.28 7.39-9.13H17c.55 0 1-.45 1-1s-.45-1-1-1z" />
    <path d="M20.25 3.75C16.5 3.75 11.5 6 9 10c3 0 7 2 9 6 3.5-3.5 3.75-9.25 2.25-12.25z" />
  </svg>
);

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);

const MenuIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CloudSunIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
    <circle cx="12" cy="9" r="3" fill="#FBBF24" stroke="#F59E0B" />
    <path d="M7 18a4.5 4.5 0 01-.5-8.97 6 6 0 0111.83 1.3A3.5 3.5 0 0118 17.5H7z" fill="#E2E8F0" stroke="#94A3B8" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TreeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m0-3l-4-4m4 4l4-4M12 3L4 12h5v4h6v-4h5L12 3z" />
  </svg>
);

const EarthIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

type City = {
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
  aqi: number;
  uv: number;
  forecast: {
    day: string;
    date: string;
    max: number;
    min: number;
    cond: string;
  }[];
};

const CITIES_DATA: Record<string, City> = {
  Virar: {
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 76,
    wind: 14,
    aqi: 64,
    uv: 6,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 28, min: 24, cond: 'Partly Cloudy' },
      { day: 'Tue', date: '16 Sep', max: 29, min: 24, cond: 'Sunny' },
      { day: 'Wed', date: '17 Sep', max: 28, min: 23, cond: 'Light Rain' },
      { day: 'Thu', date: '18 Sep', max: 27, min: 23, cond: 'Cloudy' },
      { day: 'Fri', date: '19 Sep', max: 29, min: 24, cond: 'Sunny' },
      { day: 'Sat', date: '20 Sep', max: 28, min: 23, cond: 'Showers' },
      { day: 'Sun', date: '21 Sep', max: 29, min: 24, cond: 'Partly Cloudy' }
    ]
  },
  Pune: {
    temp: 27,
    condition: 'Partly Cloudy',
    humidity: 68,
    wind: 12,
    aqi: 62,
    uv: 5,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 27, min: 20, cond: 'Partly Cloudy' },
      { day: 'Tue', date: '16 Sep', max: 29, min: 21, cond: 'Sunny' },
      { day: 'Wed', date: '17 Sep', max: 28, min: 22, cond: 'Light Rain' },
      { day: 'Thu', date: '18 Sep', max: 26, min: 20, cond: 'Cloudy' },
      { day: 'Fri', date: '19 Sep', max: 30, min: 23, cond: 'Sunny' },
      { day: 'Sat', date: '20 Sep', max: 28, min: 22, cond: 'Scattered Showers' },
      { day: 'Sun', date: '21 Sep', max: 29, min: 24, cond: 'Partly Cloudy' }
    ]
  },
  Mumbai: {
    temp: 29,
    condition: 'Humid & Sunny',
    humidity: 82,
    wind: 18,
    aqi: 78,
    uv: 7,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 29, min: 24, cond: 'Humid & Sunny' },
      { day: 'Tue', date: '16 Sep', max: 30, min: 25, cond: 'Partly Cloudy' },
      { day: 'Wed', date: '17 Sep', max: 31, min: 25, cond: 'Sunny' },
      { day: 'Thu', date: '18 Sep', max: 28, min: 23, cond: 'Heavy Rain' },
      { day: 'Fri', date: '19 Sep', max: 29, min: 24, cond: 'Showers' },
      { day: 'Sat', date: '20 Sep', max: 30, min: 25, cond: 'Clear' },
      { day: 'Sun', date: '21 Sep', max: 31, min: 26, cond: 'Sunny' }
    ]
  },
  Nashik: {
    temp: 26,
    condition: 'Pleasant & Breezy',
    humidity: 60,
    wind: 10,
    aqi: 45,
    uv: 6,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 26, min: 18, cond: 'Pleasant & Breezy' },
      { day: 'Tue', date: '16 Sep', max: 27, min: 19, cond: 'Sunny' },
      { day: 'Wed', date: '17 Sep', max: 25, min: 17, cond: 'Drizzle' },
      { day: 'Thu', date: '18 Sep', max: 26, min: 18, cond: 'Partly Cloudy' },
      { day: 'Fri', date: '19 Sep', max: 28, min: 20, cond: 'Sunny' },
      { day: 'Sat', date: '20 Sep', max: 27, min: 19, cond: 'Clear' },
      { day: 'Sun', date: '21 Sep', max: 28, min: 20, cond: 'Sunny' }
    ]
  },
  Nagpur: {
    temp: 31,
    condition: 'Warm & Dry',
    humidity: 52,
    wind: 14,
    aqi: 95,
    uv: 8,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 31, min: 22, cond: 'Warm & Dry' },
      { day: 'Tue', date: '16 Sep', max: 33, min: 23, cond: 'Hot' },
      { day: 'Wed', date: '17 Sep', max: 32, min: 22, cond: 'Partly Cloudy' },
      { day: 'Thu', date: '18 Sep', max: 30, min: 21, cond: 'Thunderstorm' },
      { day: 'Fri', date: '19 Sep', max: 31, min: 22, cond: 'Sunny' },
      { day: 'Sat', date: '20 Sep', max: 32, min: 23, cond: 'Warm' },
      { day: 'Sun', date: '21 Sep', max: 33, min: 24, cond: 'Sunny' }
    ]
  },
  Aurangabad: {
    temp: 28,
    condition: 'Mostly Sunny',
    humidity: 58,
    wind: 11,
    aqi: 55,
    uv: 6,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 28, min: 20, cond: 'Mostly Sunny' },
      { day: 'Tue', date: '16 Sep', max: 29, min: 21, cond: 'Sunny' },
      { day: 'Wed', date: '17 Sep', max: 30, min: 22, cond: 'Clear' },
      { day: 'Thu', date: '18 Sep', max: 27, min: 19, cond: 'Rain' },
      { day: 'Fri', date: '19 Sep', max: 28, min: 20, cond: 'Partly Cloudy' },
      { day: 'Sat', date: '20 Sep', max: 29, min: 21, cond: 'Sunny' },
      { day: 'Sun', date: '21 Sep', max: 30, min: 22, cond: 'Clear' }
    ]
  },
  Solapur: {
    temp: 32,
    condition: 'Hot & Sunny',
    humidity: 48,
    wind: 15,
    aqi: 88,
    uv: 9,
    forecast: [
      { day: 'Mon', date: '15 Sep', max: 32, min: 23, cond: 'Hot & Sunny' },
      { day: 'Tue', date: '16 Sep', max: 34, min: 24, cond: 'Hot' },
      { day: 'Wed', date: '17 Sep', max: 33, min: 23, cond: 'Sunny' },
      { day: 'Thu', date: '18 Sep', max: 31, min: 22, cond: 'Clouds' },
      { day: 'Fri', date: '19 Sep', max: 33, min: 23, cond: 'Hot' },
      { day: 'Sat', date: '20 Sep', max: 34, min: 24, cond: 'Sunny' },
      { day: 'Sun', date: '21 Sep', max: 35, min: 25, cond: 'Hot' }
    ]
  }
};

const ARTICLES_DATA = [
  {
    id: 1,
    category: 'Climate Basics',
    title: 'Why Maharashtra is Getting Hotter',
    desc: 'Exploring the causes of rising temperatures, urban heat islands, and what it means for agriculture.',
    content: 'Over the past two decades, average temperatures across Maharashtra have risen by 1.2°C. Rapid urbanization, deforestation in the Western Ghats, and high carbon emissions have contributed significantly to heat islands in major metropolitan regions like Mumbai and Pune.',
    date: 'Sep 10, 2026',
    author: 'Dr. Aarav Sharma',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Monsoon & Rain',
    title: 'Understanding Changing Monsoon Patterns',
    desc: 'Analysis of unpredictable rainfall distributions and cloudburst frequency across western India.',
    content: 'Monsoon precipitation patterns in Maharashtra are exhibiting erratic swings. Shorter bursts of high-intensity rain can cause urban flooding, followed by extended dry spells affecting agriculture.',
    date: 'Sep 05, 2026',
    author: 'Priya Kulkarni',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Renewable Energy',
    title: 'Simple Ways to Reduce Your Carbon Footprint',
    desc: 'Actionable steps for households and students to transition to sustainable practices.',
    content: 'Reducing individual carbon emissions starts at home. Energy efficiency, public transport, composting and supporting renewable energy can all contribute to lower emissions.',
    date: 'Aug 28, 2026',
    author: 'Rohan Mehta',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Policy & Cities',
    title: 'Solar Energy Grid Expansion in Western India',
    desc: 'How regional solar parks are accelerating Maharashtra target for 50% clean power by 2030.',
    content: 'With rooftop solar incentives and solar parks in regions such as Solapur and Dhule, Maharashtra is increasing renewable energy capacity. Public-private partnerships are also supporting rural clean-energy access.',
    date: 'Aug 14, 2026',
    author: 'Sunita Joshi',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop'
  }
];

const DISTRICT_CLIMATE_DATA = [
  { district: 'Pune', tempAvg: '27.4°C', rainAvg: '722 mm', forestCover: '18.2%', riskScore: 'Moderate' },
  { district: 'Virar', tempAvg: '28.2°C', rainAvg: '2,150 mm', forestCover: '14.1%', riskScore: 'Moderate' },
  { district: 'Mumbai Suburban', tempAvg: '29.1°C', rainAvg: '2,410 mm', forestCover: '11.5%', riskScore: 'High (Sea Level)' },
  { district: 'Nashik', tempAvg: '25.8°C', rainAvg: '810 mm', forestCover: '22.4%', riskScore: 'Low-Moderate' },
  { district: 'Nagpur', tempAvg: '31.2°C', rainAvg: '1,050 mm', forestCover: '19.8%', riskScore: 'High (Heat)' },
  { district: 'Aurangabad', tempAvg: '28.3°C', rainAvg: '640 mm', forestCover: '9.6%', riskScore: 'High (Drought)' },
  { district: 'Solapur', tempAvg: '32.0°C', rainAvg: '540 mm', forestCover: '4.2%', riskScore: 'Critical (Drought)' }
];

export default function ClimateLensApp() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCity, setSelectedCity] = useState('Pune');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [activeArticle, setActiveArticle] = useState<typeof ARTICLES_DATA[0] | null>(null);
  const [pledges, setPledges] = useState<number[]>([]);
  const [mapLayer, setMapLayer] = useState<'Temperature' | 'Rainfall' | 'AQI'>('Temperature');
  const [selectedDistrictMap, setSelectedDistrictMap] = useState('Pune');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const cityData = CITIES_DATA[selectedCity] || CITIES_DATA.Pune;

  const navigate = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery('');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePledge = (id: number) => {
    setPledges(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filteredArticles = ARTICLES_DATA.filter(a =>
    `${a.title} ${a.desc} ${a.category}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const navItems = [
    'Home',
    'Weather',
    'Climate Data',
    'Explore Map',
    'Learn',
    'Take Action',
    'About'
  ];

  const mapPins = [
    { name: 'Virar', top: '58%', left: '17%', value: '28°C' },
    { name: 'Mumbai', top: '67%', left: '22%', value: '29°C' },
    { name: 'Nashik', top: '36%', left: '31%', value: '26°C' },
    { name: 'Pune', top: '66%', left: '39%', value: '27°C' },
    { name: 'Aurangabad', top: '45%', left: '54%', value: '28°C' },
    { name: 'Solapur', top: '76%', left: '53%', value: '32°C' },
    { name: 'Nagpur', top: '37%', left: '79%', value: '31°C' }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>

      <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${
        isDarkMode
          ? 'bg-slate-950/95 border-slate-800'
          : 'bg-white/95 border-slate-200'
      }`}>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="min-h-[72px] flex items-center justify-between gap-4">

            <button
              onClick={() => navigate('Home')}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="relative w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/25 group-hover:scale-105 transition-all">
                <LeafIcon className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-300 ring-2 ring-white dark:ring-slate-950" />
              </div>

              <div className="text-left">
                <span className={`text-[20px] sm:text-[21px] font-black tracking-tight leading-none block ${
                  isDarkMode ? 'text-white' : 'text-slate-950'
                }`}>
                  Climate<span className="text-emerald-500">Lens</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.13em] block mt-1 whitespace-nowrap">
                  Data for a Greener Tomorrow
                </span>
              </div>
            </button>

            <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
              {navItems.map(tab => (
                <button
                  key={tab}
                  onClick={() => navigate(tab)}
                  className={`relative px-3 py-2.5 rounded-xl text-[12px] font-bold whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? isDarkMode
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-emerald-50 text-emerald-700'
                      : isDarkMode
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-emerald-500" />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">

              <div className="relative hidden 2xl:flex items-center w-[230px]">
                <input
                  type="text"
                  placeholder="Search city, district or topic..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`w-full h-10 text-[11px] pl-4 pr-10 rounded-full border outline-none ${
                    isDarkMode
                      ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                      : 'bg-slate-100 border-slate-200 text-slate-800 focus:bg-white focus:border-emerald-500'
                  }`}
                />
                <SearchIcon className="absolute right-3.5 w-4 h-4 text-slate-400" />
              </div>

              <div className={`hidden sm:flex items-center p-1 rounded-full border ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700'
                  : 'bg-slate-100 border-slate-200'
              }`}>
                <button
                  onClick={() => setIsDarkMode(false)}
                  className={`p-2 rounded-full ${
                    !isDarkMode ? 'bg-white text-amber-500 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  <SunIcon className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsDarkMode(true)}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
                >
                  <MoonIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => navigate('Take Action')}
                className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-black shadow-lg transition"
              >
                Take Action
                <ArrowRightIcon className="w-3 h-3" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`xl:hidden w-10 h-10 rounded-xl border flex items-center justify-center ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`xl:hidden border-t ${
            isDarkMode
              ? 'bg-slate-950 border-slate-800'
              : 'bg-white border-slate-200'
          }`}>
            <div className="px-4 sm:px-6 py-4">

              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search city, district or topic..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`w-full h-11 text-xs pl-4 pr-10 rounded-xl border outline-none ${
                    isDarkMode
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                />
                <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {navItems.map(tab => (
                  <button
                    key={tab}
                    onClick={() => navigate(tab)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold ${
                      activeTab === tab
                        ? 'bg-emerald-600 text-white'
                        : isDarkMode
                          ? 'bg-slate-900 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <CheckIcon className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate('Take Action')}
                className="w-full mt-3 py-3.5 rounded-xl bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-2"
              >
                Take Action
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {activeTab === 'Home' && (
        <>
          <section className="relative overflow-hidden bg-emerald-950 text-white py-14 lg:py-20 px-4 sm:px-8 lg:px-12">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/70 to-emerald-950/20" />

            <div className="w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-extrabold uppercase tracking-widest">
                  A CLEANER MAHARASHTRA. A BRIGHTER TOMORROW.
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  See the Change.
                  <br />
                  Understand the Impact.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">
                    Build a Better Tomorrow.
                  </span>
                </h1>

                <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Explore real-world weather, climate trends and environmental insights to create a healthier, more sustainable Maharashtra.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('Weather')}
                    className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
                  >
                    Explore Weather
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => navigate('Climate Data')}
                    className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider"
                  >
                    View Climate Data
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white/90 backdrop-blur-2xl text-slate-800 rounded-[28px] p-6 sm:p-7 shadow-2xl border border-white/60">

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-700">
                      <MapPinIcon />
                    </div>

                    <div>
                      <select
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)}
                        className="font-extrabold text-slate-900 text-lg bg-transparent outline-none"
                      >
                        {Object.keys(CITIES_DATA).map(city => (
                          <option key={city}>{city}, Maharashtra</option>
                        ))}
                      </select>
                      <p className="text-xs font-semibold text-slate-400">Current Conditions</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      <CloudSunIcon className="w-16 h-16" />
                      <div>
                        <span className="text-4xl sm:text-5xl font-black">
                          {cityData.temp}°C
                        </span>
                        <p className="text-xs font-bold">{cityData.condition}</p>
                        <p className="text-[11px] text-slate-400">
                          Feels like {cityData.temp + 2}°C
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-right text-xs">
                      <p className="text-slate-500">Humidity <b>{cityData.humidity}%</b></p>
                      <p className="text-slate-500">Wind <b>{cityData.wind} km/h</b></p>
                      <p className="text-slate-500">AQI <b className="text-emerald-600">{cityData.aqi}</b></p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-5 text-center">
                    <div className="bg-slate-50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-400">Humidity</p>
                      <b className="text-sm">{cityData.humidity}%</b>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-400">Wind</p>
                      <b className="text-sm">{cityData.wind} km/h</b>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3">
                      <p className="text-[10px] text-slate-400">AQI</p>
                      <b className="text-sm text-emerald-600">{cityData.aqi}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`border-b py-4 px-4 sm:px-8 lg:px-12 ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: LeafIcon, title: 'Clean Air', desc: 'Healthier communities' },
                { icon: UsersIcon, title: 'Sustainable Living', desc: 'For future generations' },
                { icon: TreeIcon, title: 'Resilient Ecosystems', desc: 'Nature in balance' },
                { icon: EarthIcon, title: 'Data-Driven Action', desc: 'Turning insights into impact' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs">{item.title}</h4>
                      <p className="text-[10px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">

            <section className={`rounded-2xl p-6 border ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-extrabold">
                    7-Day Weather Forecast ({selectedCity})
                  </h2>
                  <p className="text-xs text-slate-400">Plan ahead with weather predictions</p>
                </div>
                <button
                  onClick={() => navigate('Weather')}
                  className="text-xs font-bold text-emerald-600"
                >
                  Full Forecast →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                {cityData.forecast.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`p-4 rounded-xl border text-center ${
                      selectedDayIndex === idx
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : isDarkMode
                          ? 'bg-slate-800 border-slate-700'
                          : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <p className="text-xs font-bold">{item.day}</p>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                    <SunIcon className="w-7 h-7 mx-auto my-2 text-amber-500" />
                    <p className="text-[10px] text-emerald-600 font-semibold truncate">
                      {item.cond}
                    </p>
                    <p className="text-xs font-black mt-2">
                      {item.max}° <span className="text-slate-400">{item.min}°</span>
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['+1.2°C', 'Temperature Rise', 'since 2000', 'text-rose-500'],
                ['-12.4%', 'Annual Monsoon Rain', '10-yr deficit', 'text-sky-500'],
                [cityData.aqi, 'Air Quality Index', selectedCity, 'text-emerald-500'],
                ['38.2%', 'Clean Energy Share', 'Maharashtra Grid', 'text-teal-500']
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-5 border ${
                    isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className={`text-3xl font-black ${item[3]}`}>{item[0]}</span>
                  <p className="text-xs font-bold mt-1">{item[1]}</p>
                  <p className="text-[10px] text-slate-400">{item[2]}</p>
                </div>
              ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              <div className={`lg:col-span-5 rounded-2xl p-6 border ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex justify-between">
                  <h3 className="font-extrabold">25-Year Temp Trend</h3>
                  <button onClick={() => navigate('Climate Data')} className="text-xs text-emerald-600 font-bold">
                    Deep Analytics
                  </button>
                </div>

                <div className="h-52 mt-5">
                  <svg className="w-full h-full" viewBox="0 0 400 160">
                    <path
                      d="M35 130 Q100 110 175 105 T315 75 T385 30"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3"
                    />
                    {[
                      { x: 35, y: 130, val: '26.8°' },
                      { x: 175, y: 105, val: '27.4°' },
                      { x: 315, y: 75, val: '27.8°' },
                      { x: 385, y: 30, val: '28.2°' }
                    ].map((p, i) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="4" fill="#059669" />
                        <text x={p.x} y={p.y - 10} fill="#059669" fontSize="10" fontWeight="bold" textAnchor="middle">
                          {p.val}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <p className="text-xs text-slate-400">
                  Average ambient temperatures have trended upward since 2000.
                </p>
              </div>

              <div className={`lg:col-span-4 rounded-2xl p-6 border ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex justify-between">
                  <h3 className="font-extrabold">Interactive Map</h3>
                  <button onClick={() => navigate('Explore Map')} className="text-xs text-emerald-600 font-bold">
                    Open Map
                  </button>
                </div>

                <div className="h-52 mt-4 rounded-xl bg-emerald-950 flex flex-col items-center justify-center text-center p-5">
                  <MapPinIcon className="w-9 h-9 text-emerald-400" />
                  <p className="text-xs text-slate-300 mt-3">
                    Explore climate indicators across Maharashtra.
                  </p>
                  <button
                    onClick={() => navigate('Explore Map')}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold"
                  >
                    Explore Map
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-3 rounded-2xl p-6 border ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex justify-between mb-4">
                  <h3 className="font-extrabold">Articles</h3>
                  <button onClick={() => navigate('Learn')} className="text-xs text-emerald-600 font-bold">
                    All
                  </button>
                </div>

                {ARTICLES_DATA.slice(0, 3).map(article => (
                  <button
                    key={article.id}
                    onClick={() => setActiveArticle(article)}
                    className="text-left w-full border-b border-slate-200 dark:border-slate-800 pb-3 mb-3"
                  >
                    <span className="text-[9px] font-bold text-emerald-600 uppercase">
                      {article.category}
                    </span>
                    <h4 className="text-xs font-bold mt-1">{article.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-1">{article.date}</p>
                  </button>
                ))}
              </div>

            </section>
          </main>
        </>
      )}

      {activeTab === 'Weather' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                Weather Intelligence
              </span>
              <h1 className="text-3xl sm:text-4xl font-black mt-2">
                Detailed Weather Dashboard
              </h1>
              <p className="text-xs text-slate-400 mt-2">
                Weather conditions and forecasts for Maharashtra cities.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(CITIES_DATA).map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold ${
                    selectedCity === city
                      ? 'bg-emerald-600 text-white'
                      : isDarkMode
                        ? 'bg-slate-800 text-slate-300'
                        : 'bg-white border border-slate-200 text-slate-600'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className={`rounded-3xl border p-6 sm:p-8 ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

              <div>
                <span className="text-xs text-emerald-600 font-bold">
                  CURRENT CONDITIONS
                </span>
                <h2 className="text-4xl font-black mt-2">{selectedCity}</h2>
                <p className="text-sm text-slate-400 mt-1">{cityData.condition}</p>

                <div className="flex items-center gap-4 mt-5">
                  <CloudSunIcon className="w-20 h-20" />
                  <span className="text-6xl font-black text-emerald-500">
                    {cityData.temp}°
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y lg:border-y-0 lg:border-x border-slate-200 dark:border-slate-800 py-6 lg:px-8">
                <div>
                  <p className="text-xs text-slate-400">Humidity</p>
                  <p className="text-xl font-black">{cityData.humidity}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Wind</p>
                  <p className="text-xl font-black">{cityData.wind} km/h</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">UV Index</p>
                  <p className="text-xl font-black">{cityData.uv}/10</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Air Quality</p>
                  <p className="text-xl font-black text-emerald-500">{cityData.aqi}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                  Today's Timeline
                </h4>

                <div className="grid grid-cols-4 gap-2">
                  {['06:00', '12:00', '18:00', '00:00'].map((time, i) => (
                    <div
                      key={time}
                      className={`p-3 rounded-xl text-center ${
                        isDarkMode ? 'bg-slate-800' : 'bg-slate-100'
                      }`}
                    >
                      <p className="text-[9px] text-slate-400">{time}</p>
                      <p className="font-bold mt-1">
                        {cityData.temp + (i % 2 ? 1 : -2)}°
                      </p>
                      <SunIcon className="w-4 h-4 mx-auto mt-2 text-amber-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-black">7-Day Outlook</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {cityData.forecast.map((item, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border text-center ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <p className="font-bold">{item.day}</p>
                <p className="text-[10px] text-slate-400">{item.date}</p>
                <CloudSunIcon className="w-9 h-9 mx-auto my-4" />
                <p className="text-[10px] text-emerald-600 font-bold">
                  {item.cond}
                </p>
                <p className="text-sm font-black mt-2">
                  {item.max}° <span className="text-slate-400">{item.min}°</span>
                </p>
              </div>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'Climate Data' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">
              Data Explorer
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mt-2">
              Maharashtra Climate Data
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Explore environmental indicators across selected regions.
            </p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${
            isDarkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}>
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-black">District Environmental Comparison</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                    <th className="p-4">District</th>
                    <th className="p-4">Avg Temperature</th>
                    <th className="p-4">Rainfall</th>
                    <th className="p-4">Forest Cover</th>
                    <th className="p-4">Vulnerability</th>
                  </tr>
                </thead>

                <tbody>
                  {DISTRICT_CLIMATE_DATA.map((d, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      <td className="p-4 font-bold">{d.district}</td>
                      <td className="p-4">{d.tempAvg}</td>
                      <td className="p-4">{d.rainAvg}</td>
                      <td className="p-4">{d.forestCover}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          d.riskScore.includes('High') || d.riskScore.includes('Critical')
                            ? 'bg-rose-500/10 text-rose-500'
                            : 'bg-emerald-500/10 text-emerald-600'
                        }`}>
                          {d.riskScore}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}

      {activeTab === 'Explore Map' && (
        <main className="w-full px-4 sm:px-8 lg:px-12 py-10 space-y-8">

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-black">
                Maharashtra Climate Explorer
              </span>
              <h1 className="text-3xl sm:text-4xl font-black mt-2">
                Explore Climate Across Maharashtra
              </h1>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                Explore regional climate indicators and compare conditions across Maharashtra.
              </p>
            </div>

            <div className={`p-1.5 rounded-2xl border flex gap-1 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}>
              {(['Temperature', 'Rainfall', 'AQI'] as const).map(layer => (
                <button
                  key={layer}
                  onClick={() => setMapLayer(layer)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold ${
                    mapLayer === layer
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-500'
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <div className={`xl:col-span-8 min-h-[600px] rounded-[2rem] border relative overflow-hidden ${
              isDarkMode
                ? 'bg-[#071412] border-slate-800'
                : 'bg-[#eaf7f1] border-emerald-100'
            }`}>

              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />

              <div className="absolute w-[70%] h-[78%] left-[15%] top-[12%] bg-emerald-500/15"
                style={{
                  clipPath: 'polygon(8% 35%,18% 23%,29% 18%,40% 9%,53% 14%,67% 8%,79% 18%,90% 28%,94% 43%,88% 55%,91% 68%,78% 75%,68% 88%,53% 82%,42% 91%,29% 80%,17% 77%,12% 64%,5% 54%)'
                }}
              />

              <div className="relative z-20 p-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-emerald-700 text-[10px] font-black">
                  <MapPinIcon />
                  MAHARASHTRA
                </span>
              </div>

              {mapPins.map(pin => (
                <button
                  key={pin.name}
                  style={{ top: pin.top, left: pin.left }}
                  onClick={() => setSelectedDistrictMap(pin.name)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group"
                >
                  <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black shadow-lg border transition group-hover:scale-110 ${
                    selectedDistrictMap === pin.name
                      ? 'bg-amber-400 text-slate-950 border-amber-300'
                      : isDarkMode
                        ? 'bg-slate-900 text-white border-slate-700'
                        : 'bg-white text-slate-800 border-white'
                  }`}>
                    <MapPinIcon className="w-3 h-3" />
                    {pin.name}
                  </span>

                  <span className="block text-[8px] font-bold text-slate-500 mt-1">
                    {mapLayer === 'Temperature'
                      ? pin.value
                      : mapLayer === 'Rainfall'
                        ? '850 mm'
                        : 'AQI 68'}
                  </span>
                </button>
              ))}

              <div className="absolute bottom-5 left-5 right-5">
                <div className={`p-4 rounded-2xl backdrop-blur-xl border flex justify-between items-center ${
                  isDarkMode
                    ? 'bg-slate-950/80 border-slate-800'
                    : 'bg-white/90 border-white'
                }`}>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-emerald-600 font-black">
                      Active Layer
                    </p>
                    <p className="font-black text-sm">{mapLayer}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[9px] text-slate-400">Selected</p>
                    <p className="font-black text-sm text-emerald-600">
                      {selectedDistrictMap}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`xl:col-span-4 rounded-[2rem] border p-6 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
            }`}>

              <span className="text-[9px] uppercase tracking-widest text-emerald-600 font-black">
                Selected Location
              </span>

              <div className="flex justify-between items-start mt-2">
                <div>
                  <h2 className="text-3xl font-black">{selectedDistrictMap}</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Maharashtra, India
                  </p>
                </div>

                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <MapPinIcon className="text-emerald-600" />
                </div>
              </div>

              <div className={`mt-7 p-5 rounded-2xl ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-50'
              }`}>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Climate Vulnerability</span>
                  <b className="text-amber-500">Medium</b>
                </div>

                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-3 overflow-hidden">
                  <div className="h-full w-[58%] bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-3 mt-5">
                {[
                  ['Temperature', '28.4°C', 'text-emerald-600'],
                  ['Annual Rainfall', '850 mm', 'text-blue-500'],
                  ['Air Quality', 'AQI 68', 'text-amber-500']
                ].map((m, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border flex justify-between ${
                      isDarkMode
                        ? 'bg-slate-800/60 border-slate-700'
                        : 'border-slate-100'
                    }`}
                  >
                    <span className="text-xs text-slate-400">{m[0]}</span>
                    <b className={`text-sm ${m[2]}`}>{m[1]}</b>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const city = selectedDistrictMap === 'Aurangabad'
                    ? 'Aurangabad'
                    : selectedDistrictMap;
                  setSelectedCity(CITIES_DATA[city] ? city : 'Pune');
                  navigate('Weather');
                }}
                className="w-full mt-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs"
              >
                View {selectedDistrictMap} Weather →
              </button>
            </div>
          </div>
        </main>
      )}

      {activeTab === 'Learn' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">
              Learn
            </span>
            <h1 className="text-3xl sm:text-4xl font-black mt-2">
              Climate Education Hub
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Research-backed climate knowledge, guides and practical information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <button
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className={`text-left rounded-2xl border overflow-hidden group ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-emerald-400 text-[10px] font-bold">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] text-slate-400">
                    {article.date} · {article.author}
                  </p>

                  <h3 className="font-black text-base mt-2 group-hover:text-emerald-500">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {article.desc}
                  </p>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 mt-4">
                    Read Article
                    <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'Take Action' && (
        <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">

          <div className="p-8 sm:p-12 rounded-3xl bg-[#062017] text-white">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Take Action
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-3">
              Small actions. Visible progress.
            </h1>
            <p className="text-sm text-emerald-100/70 mt-3 max-w-xl">
              Choose practical actions and turn climate awareness into everyday habits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#062017] text-white text-center flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Your Progress
              </span>

              <div className="relative w-44 h-44 my-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#063323"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#34d399"
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - pledges.length / 6)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-black">{pledges.length}/6</span>
                </div>
              </div>

              <h3 className="text-2xl font-black">
                {pledges.length === 6 ? 'Completed!' : pledges.length ? 'Keep it up!' : 'Keep going.'}
              </h3>

              <p className="text-xs text-emerald-100/70 mt-2">
                Every completed action turns awareness into a habit.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['Save electricity', 'Energy • High impact', 'Switch off unused lights, fans and devices.'],
                ['Travel smarter', 'Transport • High impact', 'Use public transport, walking or carpooling.'],
                ['Reduce waste', 'Waste • Medium impact', 'Separate waste and reuse materials.'],
                ['Save water', 'Water • Medium impact', 'Fix leaks and avoid unnecessary water use.'],
                ['Protect trees', 'Nature • High impact', 'Plant or protect native trees and green spaces.'],
                ['Reduce food waste', 'Food • Medium impact', 'Plan meals and use leftovers.']
              ].map((item, i) => {
                const id = i + 1;
                const checked = pledges.includes(id);

                return (
                  <button
                    key={id}
                    onClick={() => togglePledge(id)}
                    className={`text-left p-5 rounded-2xl border flex gap-4 ${
                      checked
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : isDarkMode
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 ${
                      checked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300'
                    }`}>
                      {checked && <CheckIcon />}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold">{item[0]}</h4>
                      <p className="text-[11px] text-emerald-600 font-medium mt-1">{item[1]}</p>
                      <p className="text-xs text-slate-400 mt-1">{item[2]}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      )}

      {activeTab === 'About' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
              About ClimateLens
            </span>

            <h1 className="text-4xl sm:text-5xl font-black mt-4">
              Making Climate Information Easier to Understand
            </h1>

            <p className="text-sm text-slate-400 leading-relaxed mt-5">
              ClimateLens is an educational climate-awareness platform designed to make weather, climate trends and environmental information accessible through interactive dashboards.
            </p>
          </div>

          <div className={`mt-10 p-8 rounded-3xl border max-w-2xl ${
            isDarkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}>
            <h3 className="text-xl font-black">Send Feedback</h3>

            {contactSubmitted ? (
              <div className="mt-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-sm font-bold text-center">
                Thank you! Your message has been received.
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4 mt-6"
              >
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-xl border text-xs outline-none ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-slate-100 border-slate-200'
                  }`}
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className={`w-full p-3 rounded-xl border text-xs outline-none ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-slate-100 border-slate-200'
                  }`}
                />

                <textarea
                  required
                  rows={5}
                  placeholder="Your message"
                  className={`w-full p-3 rounded-xl border text-xs outline-none ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-slate-100 border-slate-200'
                  }`}
                />

                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {activeArticle && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 ${
            isDarkMode
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-900'
          }`}>

            <div className="flex justify-between items-center">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                {activeArticle.category}
              </span>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <XIcon />
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black mt-5">
              {activeArticle.title}
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              {activeArticle.date} · By {activeArticle.author}
            </p>

            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-64 object-cover rounded-2xl mt-6"
            />

            <p className="text-sm leading-relaxed text-slate-400 mt-6">
              {activeArticle.content}
            </p>

            <button
              onClick={() => setActiveArticle(null)}
              className="w-full mt-6 py-3 rounded-xl bg-slate-800 text-white text-xs font-bold"
            >
              Close Article
            </button>
          </div>
        </div>
      )}

      <footer className="bg-emerald-950 text-white border-t border-emerald-900 py-10 px-4 sm:px-8 lg:px-12 mt-12">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-7">

          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <LeafIcon />
              </div>
              <span className="text-xl font-black">
                Climate<span className="text-emerald-400">Lens</span>
              </span>
            </div>

            <p className="text-xs text-emerald-300 mt-3">
              See the change. Understand the impact. Build a better tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <b className="block text-lg">100K+</b>
              <span className="text-[10px] text-emerald-300">Impact Readers</span>
            </div>

            <div className="text-center">
              <b className="block text-lg">500+</b>
              <span className="text-[10px] text-emerald-300">Trees Planted</span>
            </div>

            <div className="text-center">
              <b className="block text-lg">36</b>
              <span className="text-[10px] text-emerald-300">Districts Covered</span>
            </div>
          </div>

          <button
            onClick={() => navigate('Take Action')}
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
          >
            Join the Movement
          </button>
        </div>
      </footer>
    </div>
  );
}