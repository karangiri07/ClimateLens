import { useState } from 'react';
// ==========================================
// SVG ICONS (Self-contained)
// ==========================================
const LeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.83 12 1.54 12 3 17.8 3 20c0 .55.45 1 1 1h.12c1.78-.29 3.52-.92 5.12-1.87 3.52-2.1 6.13-5.28 7.39-9.13H17c.55 0 1-.45 1-1s-.45-1-1-1z" />
    <path d="M20.25 3.75C16.5 3.75 11.5 6 9 10c3 0 7 2 9 6 3.5-3.5 3.75-9.25 2.25-12.25z" />
  </svg>
);

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ==========================================
// DATASETS
// ==========================================
const CITIES_DATA: Record<string, { temp: number; condition: string; humidity: number; wind: number; aqi: number; uv: number; forecast: { day: string; date: string; max: number; min: number; cond: string }[] }> = {
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
      { day: 'Sun', date: '21 Sep', max: 29, min: 24, cond: 'Partly Cloudy' },
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
      { day: 'Sun', date: '21 Sep', max: 31, min: 26, cond: 'Sunny' },
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
      { day: 'Sun', date: '21 Sep', max: 28, min: 20, cond: 'Sunny' },
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
      { day: 'Sun', date: '21 Sep', max: 33, min: 24, cond: 'Sunny' },
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
      { day: 'Sun', date: '21 Sep', max: 30, min: 22, cond: 'Clear' },
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
      { day: 'Sun', date: '21 Sep', max: 35, min: 25, cond: 'Hot' },
    ]
  }
};

const ARTICLES_DATA = [
  {
    id: 1,
    category: 'Climate Basics',
    title: 'Why Maharashtra is Getting Hotter',
    desc: 'Exploring the causes of rising temperatures, urban heat islands, and what it means for agriculture.',
    content: 'Over the past two decades, average temperatures across Maharashtra have risen by 1.2°C. Rapid urbanization, deforestation in the Western Ghats, and high carbon emissions have contributed significantly to heat islands in major metropolitan regions like Mumbai and Pune. Climate resilience strategies, such as rooftop solar and urban forestry, are vital to mitigating these severe heatwaves.',
    date: 'Sep 10, 2026',
    author: 'Dr. Aarav Sharma',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Monsoon & Rain',
    title: 'Understanding Changing Monsoon Patterns',
    desc: 'Analysis of unpredictable rainfall distributions and cloudburst frequency across western India.',
    content: 'Monsoon precipitation patterns in Maharashtra are exhibiting erratic swings. While total seasonal rainfall remains somewhat consistent, shorter bursts of high-intensity rain cause frequent urban flooding, followed by extended dry spells that damage crops in Vidarbha and Marathwada regions. Decentralized rainwater harvesting and AI weather modeling are helping farmers adapt.',
    date: 'Sep 05, 2026',
    author: 'Priya Kulkarni',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Renewable Energy',
    title: 'Simple Ways to Reduce Your Carbon Footprint',
    desc: 'Actionable steps for households and students to transition to sustainable, green practices.',
    content: 'Reducing individual carbon emissions starts at home. Swapping energy-intensive appliances for 5-star rated equipment, opting for public electric transport, composting organic kitchen waste, and supporting local solar initiatives can cut personal carbon output by up to 35% annually.',
    date: 'Aug 28, 2026',
    author: 'Rohan Mehta',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Policy & Cities',
    title: 'Solar Energy Grid Expansion in Western India',
    desc: 'How regional solar parks are accelerating Maharashtra target for 50% clean power by 2030.',
    content: 'With rooftop solar incentives and mega-solar parks in Solapur and Dhule, Maharashtra is on track to increase green power capacity. Public-private partnerships are driving rural microgrids, allowing off-grid communities access to continuous clean electricity.',
    date: 'Aug 14, 2026',
    author: 'Sunita Joshi',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop'
  }
];

const DISTRICT_CLIMATE_DATA = [
  { district: 'Pune', tempAvg: '27.4°C', rainAvg: '722 mm', forestCover: '18.2%', riskScore: 'Moderate' },
  { district: 'Mumbai Suburban', tempAvg: '29.1°C', rainAvg: '2,410 mm', forestCover: '11.5%', riskScore: 'High (Sea Level)' },
  { district: 'Nashik', tempAvg: '25.8°C', rainAvg: '810 mm', forestCover: '22.4%', riskScore: 'Low-Moderate' },
  { district: 'Nagpur', tempAvg: '31.2°C', rainAvg: '1,050 mm', forestCover: '19.8%', riskScore: 'High (Heat)' },
  { district: 'Aurangabad (Chhatrapati Sambhajinagar)', tempAvg: '28.3°C', rainAvg: '640 mm', forestCover: '9.6%', riskScore: 'High (Drought)' },
  { district: 'Solapur', tempAvg: '32.0°C', rainAvg: '540 mm', forestCover: '4.2%', riskScore: 'Critical (Drought)' },
  { district: 'Satara', tempAvg: '24.9°C', rainAvg: '1,420 mm', forestCover: '28.6%', riskScore: 'Low' },
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function ClimateLensApp() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCity, setSelectedCity] = useState('Pune');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // Modal / Interactive state
  const [activeArticle, setActiveArticle] = useState<typeof ARTICLES_DATA[0] | null>(null);
  const [pledges, setPledges] = useState<number[]>([]);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  
  const [mapLayer, setMapLayer] = useState<'Temperature' | 'Rainfall' | 'AQI'>('Temperature');
  const [selectedDistrictMap, setSelectedDistrictMap] = useState('Pune');


  const [contactSubmitted, setContactSubmitted] = useState(false);

  const cityData = CITIES_DATA[selectedCity] || CITIES_DATA['Pune'];

  
  const togglePledge = (id: number) => {
    if (pledges.includes(id)) {
      setPledges(pledges.filter(p => p !== id));
    } else {
      setPledges([...pledges, id]);
    }
  };

  const filteredArticles = ARTICLES_DATA.filter(a =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* ========================================== */}
      {/* 1. HEADER / NAVBAR (FULL WIDTH FLUID)     */}
      {/* ========================================== */}
      <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors ${
        isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div 
            onClick={() => { setActiveTab('Home'); setSearchQuery(''); }}
            className="flex items-center gap-3 shrink-0 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <LeafIcon className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-xl font-black tracking-tight leading-none block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Climate<span className="text-emerald-500">Lens</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mt-0.5">
                Data for a Greener Tomorrow
              </span>
            </div>
          </div>

          {/* Navigation Links (Fully functional) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {['Home', 'Weather', 'Climate Data', 'Explore Map', 'Learn', 'Take Action', 'About'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-1.5 px-1 transition-colors ${
                  activeTab === tab
                    ? 'text-emerald-600 font-bold'
                    : isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Header Controls (Wide Search & Theme Toggle) */}
          <div className="flex items-center gap-4 flex-1 max-w-xl justify-end">
            
            {/* Contextual Search Input */}
            <div className="relative flex-1 max-w-md hidden md:flex items-center">
              <input
                type="text"
                placeholder={
                  activeTab === 'Learn' ? "Search articles & guides..." :
                  activeTab === 'Explore Map' ? "Search districts..." :
                  "Search city, district or topic..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full text-xs py-2.5 pl-4 pr-10 rounded-full border outline-none transition-all ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-emerald-500' 
                    : 'bg-slate-100 hover:bg-slate-200/60 focus:bg-white border-slate-200 text-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
              />
              <SearchIcon className="absolute right-3.5 text-slate-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Dark/Light Theme Toggle */}
            <div className={`flex items-center p-1 rounded-full border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
              <button
                onClick={() => setIsDarkMode(false)}
                className={`p-1.5 rounded-full transition ${!isDarkMode ? 'bg-white text-amber-500 shadow-sm' : 'text-slate-400'}`}
                title="Light Mode"
              >
                <SunIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`p-1.5 rounded-full transition ${isDarkMode ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400'}`}
                title="Dark Mode"
              >
                <MoonIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => setActiveTab('Take Action')}
              className="px-5 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-900/20 transition active:scale-95 shrink-0"
            >
              Take Action
            </button>
          </div>

        </div>

        {/* Mobile Navbar Row */}
        <div className="lg:hidden flex items-center justify-around border-t py-2 px-2 overflow-x-auto text-xs font-semibold scrollbar-none border-slate-200 dark:border-slate-800">
          {['Home', 'Weather', 'Climate Data', 'Explore Map', 'Learn', 'Take Action', 'About'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full shrink-0 ${
                activeTab === tab ? 'bg-emerald-600 text-white' : 'text-slate-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* ========================================== */}
      {/* Dynamic View Rendering                    */}
      {/* ========================================== */}

      {/* VIEW 1: HOME PAGE */}
      {activeTab === 'Home' && (
        <>
          {/* HERO SECTION */}
          
          <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white py-14 lg:py-20 px-4 sm:px-8 lg:px-12">
            <div 
             className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')`,
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/60 to-emerald-950/20 pointer-events-none" />
            <div className="w-full max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-extrabold uppercase tracking-widest">
                  A CLEANER MAHARASHTRA. A BRIGHTER TOMORROW.
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  See the Change. <br />
                  Understand the Impact. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400">
                    Build a Better Tomorrow.
                  </span>
                </h1>

                <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Explore real-world weather, climate trends and environmental insights to create a healthier, more sustainable Maharashtra.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => setActiveTab('Weather')}
                    className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/40 transition"
                  >
                    Explore Weather <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('Climate Data')}
                    className="px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-900 font-bold text-xs uppercase tracking-wider transition shadow-md"
                  >
                    View Climate Data
                  </button>
                </div>
              </div>

              {/* Hero Interactive Weather Widget */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white/90 backdrop-blur-2xl text-slate-800 rounded-[28px] p-6 sm:p-7 shadow-2xl border border-white/60 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-700">
                        <MapPinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <select 
                          value={selectedCity} 
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="font-extrabold text-slate-900 text-lg bg-transparent border-none outline-none cursor-pointer hover:text-emerald-600"
                        >
                          {Object.keys(CITIES_DATA).map(c => (
                            <option key={c} value={c}>{c}, Maharashtra</option>
                          ))}
                        </select>
                        <p className="text-xs font-semibold text-slate-400">Live Conditions</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      <CloudSunIcon className="w-16 h-16" />
                      <div>
                        <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                          {cityData.temp}°C
                        </span>
                        <p className="text-xs font-bold text-slate-600 mt-0.5">{cityData.condition}</p>
                        <p className="text-[11px] text-slate-400">Feels like {cityData.temp + 2}°C</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-right text-xs">
                      <div className="flex items-center justify-end gap-2 text-slate-500">
                        <span>Humidity</span>
                        <span className="font-bold text-slate-800">{cityData.humidity}%</span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-slate-500">
                        <span>Wind</span>
                        <span className="font-bold text-slate-800">{cityData.wind} km/h</span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-slate-500">
                        <span>Air Quality</span>
                        <span className="font-bold text-emerald-600">AQI {cityData.aqi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-9 right-2 transform rotate-[-3deg] text-emerald-200 font-serif italic text-sm tracking-wide hidden sm:block">
                  "Greener Maharashtra, Stronger Tomorrows"
                </div>
              </div>
            </div>
          </section>

          {/* 4 PILLARS BAR */}
          <section className={`border-b py-4 px-4 sm:px-8 lg:px-12 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-semibold">
              {[
                { icon: LeafIcon, title: 'Clean Air', desc: 'Healthier communities' },
                { icon: UsersIcon, title: 'Sustainable Living', desc: 'For future generations' },
                { icon: TreeIcon, title: 'Resilient Ecosystems', desc: 'Nature in balance' },
                { icon: EarthIcon, title: 'Data-Driven Action', desc: 'Turning insights into impact' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3.5 p-2 rounded-xl">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* DASHBOARD CONTENT */}
          <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-10">
            
            {/* 7-DAY FORECAST SECTION */}
            <section className={`rounded-2xl p-6 border shadow-sm space-y-5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>7-Day Weather Forecast ({selectedCity})</h2>
                  <p className="text-xs text-slate-400">Plan ahead with accurate weather predictions</p>
                </div>
                <button 
                  onClick={() => setActiveTab('Weather')}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 border border-emerald-500/30 px-3.5 py-1.5 rounded-full hover:bg-emerald-50 transition"
                >
                  View Full Forecast <ArrowRightIcon className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
                {cityData.forecast.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`p-4 rounded-xl border text-center transition cursor-pointer ${
                      selectedDayIndex === idx
                        ? 'bg-emerald-500/10 border-emerald-500 shadow-sm'
                        : isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{item.day}</p>
                    <p className="text-[10px] text-slate-400 mb-2">{item.date}</p>
                    <div className="w-8 h-8 mx-auto my-1 flex items-center justify-center">
                      <SunIcon className="w-7 h-7 text-amber-500" />
                    </div>
                    <p className="text-[10px] text-emerald-600 font-semibold truncate my-1">{item.cond}</p>
                    <div className="text-xs font-extrabold text-slate-800 space-x-1 mt-2">
                      <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{item.max}°</span>
                      <span className="text-slate-400 font-normal">{item.min}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 STAT METRIC CARDS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className={`rounded-2xl p-5 border shadow-sm flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="space-y-1">
                  <span className="text-3xl font-black text-rose-500">+1.2°C</span>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Temperature Rise</p>
                  <p className="text-[10px] text-slate-400">(since 2000)</p>
                </div>
              </div>

              <div className={`rounded-2xl p-5 border shadow-sm flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="space-y-1">
                  <span className="text-3xl font-black text-sky-500">-12.4%</span>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Annual Monsoon Rain</p>
                  <p className="text-[10px] text-slate-400">(10-yr deficit)</p>
                </div>
              </div>

              <div className={`rounded-2xl p-5 border shadow-sm flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="space-y-1">
                  <span className="text-3xl font-black text-emerald-500">{cityData.aqi}</span>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Air Quality Index</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">({selectedCity})</p>
                </div>
              </div>

              <div className={`rounded-2xl p-5 border shadow-sm flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="space-y-1">
                  <span className="text-3xl font-black text-teal-500">38.2%</span>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Clean Energy Share</p>
                  <p className="text-[10px] text-slate-400">(Maharashtra Grid)</p>
                </div>
              </div>
            </section>

            {/* 3 COLUMNS ANALYTICS SUMMARY */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Temp Trend Chart */}
              <div className={`lg:col-span-5 rounded-2xl p-6 border shadow-sm space-y-4 ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-extrabold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>25-Year Temp Trend</h3>
                  <button onClick={() => setActiveTab('Climate Data')} className="text-xs text-emerald-600 font-bold hover:underline">Deep Analytics</button>
                </div>
                <div className="relative h-52 w-full pt-2">
                  <svg className="w-full h-full" viewBox="0 0 400 160">
                    <path d="M 35 130 Q 100 110, 175 105 T 315 75 T 385 30" fill="none" stroke="#059669" strokeWidth="3" />
                    {[
                      { x: 35, y: 130, val: '26.8°' },
                      { x: 175, y: 105, val: '27.4°' },
                      { x: 315, y: 75, val: '27.8°' },
                      { x: 385, y: 30, val: '28.2°' }
                    ].map((p, i) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="4" fill="#059669" />
                        <text x={p.x} y={p.y - 10} fill="#059669" fontSize="10" fontWeight="bold" textAnchor="middle">{p.val}</text>
                      </g>
                    ))}
                  </svg>
                </div>
                <p className="text-xs text-slate-400">Average ambient temperatures have consistently trended upward since 2000 across urban corridors.</p>
              </div>

              {/* Map Teaser */}
              <div className={`lg:col-span-4 rounded-2xl p-6 border shadow-sm space-y-4 ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-extrabold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Interactive Map</h3>
                  <button onClick={() => setActiveTab('Explore Map')} className="text-xs text-emerald-600 font-bold hover:underline">Open Map</button>
                </div>
                <div className="h-52 bg-emerald-950/20 rounded-xl border border-emerald-500/20 flex flex-col items-center justify-center p-4 text-center space-y-3">
                  <MapPinIcon className="w-8 h-8 text-emerald-500" />
                  <p className="text-xs font-semibold text-slate-300">Click to explore risk indices, rainfall patterns, and climate scores for 36 Maharashtra districts.</p>
                  <button onClick={() => setActiveTab('Explore Map')} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full">Explore Map</button>
                </div>
              </div>

              {/* Insights Column */}
              <div className={`lg:col-span-3 rounded-2xl p-6 border shadow-sm space-y-4 ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-extrabold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Articles</h3>
                  <button onClick={() => setActiveTab('Learn')} className="text-xs text-emerald-600 font-bold hover:underline">All</button>
                </div>
                <div className="space-y-3">
                  {ARTICLES_DATA.slice(0, 2).map((a) => (
                    <div key={a.id} onClick={() => setActiveArticle(a)} className="cursor-pointer group space-y-1 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-[9px] font-bold text-emerald-600 uppercase">{a.category}</span>
                      <h4 className="text-xs font-bold group-hover:text-emerald-500 transition line-clamp-1">{a.title}</h4>
                      <p className="text-[10px] text-slate-400">{a.date}</p>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </main>
        </>
      )}

      {/* VIEW 2: WEATHER TAB */}
      {activeTab === 'Weather' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-3xl font-black">Detailed Weather Dashboard</h1>
              <p className="text-xs text-slate-400 mt-1">Real-time weather parameters and multi-day forecasts for Maharashtra cities.</p>
            </div>
            
            {/* City Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {Object.keys(CITIES_DATA).map(cityName => (
                <button
                  key={cityName}
                  onClick={() => setSelectedCity(cityName)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                    selectedCity === cityName
                      ? 'bg-emerald-600 text-white shadow-md'
                      : isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {cityName}
                </button>
              ))}
            </div>
          </div>

          {/* Active City Overview */}
          <div className={`p-8 rounded-3xl border grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">Current Location</span>
              <h2 className="text-4xl font-black">{selectedCity}</h2>
              <p className="text-sm text-slate-400">{cityData.condition} · Updated Live</p>
              <div className="text-6xl font-black text-emerald-500 pt-2">{cityData.temp}°C</div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y md:border-y-0 md:border-x border-slate-200 dark:border-slate-800 py-4 md:py-0 md:px-6">
              <div>
                <p className="text-xs text-slate-400">Humidity</p>
                <p className="text-xl font-extrabold">{cityData.humidity}%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Wind Speed</p>
                <p className="text-xl font-extrabold">{cityData.wind} km/h</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">UV Index</p>
                <p className="text-xl font-extrabold">{cityData.uv} / 10</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Air Quality Index</p>
                <p className="text-xl font-extrabold text-emerald-500">AQI {cityData.aqi}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Today's Hourly Timeline</h4>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {['06:00', '12:00', '18:00', '00:00'].map((time, idx) => (
                  <div key={time} className={`p-2 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <p className="text-[10px] text-slate-400">{time}</p>
                    <p className="font-bold my-1">{cityData.temp + (idx % 2 === 0 ? -2 : 1)}°C</p>
                    <SunIcon className="w-4 h-4 mx-auto text-amber-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extended Forecast Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Extended 7-Day Outlook</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {cityData.forecast.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border text-center ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <p className="font-bold text-sm">{item.day}</p>
                  <p className="text-xs text-slate-400">{item.date}</p>
                  <CloudSunIcon className="w-8 h-8 mx-auto my-3" />
                  <p className="text-xs font-semibold text-emerald-600 mb-2">{item.cond}</p>
                  <p className="text-sm font-black">{item.max}° / <span className="text-slate-400 font-normal">{item.min}°</span></p>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* VIEW 3: CLIMATE DATA TAB */}
      {activeTab === 'Climate Data' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">
          <div>
            <h1 className="text-3xl font-black">Maharashtra Climate Data Explorer</h1>
            <p className="text-xs text-slate-400 mt-1">Historical temperature changes, rainfall deficits, and regional environmental risk scores.</p>
          </div>

          {/* Data Table */}
          <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h3 className="text-lg font-bold mb-4">District Environmental Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Avg Annual Temp</th>
                    <th className="py-3 px-4">Avg Annual Rainfall</th>
                    <th className="py-3 px-4">Forest Cover %</th>
                    <th className="py-3 px-4">Climate Vulnerability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {DISTRICT_CLIMATE_DATA.map((d, i) => (
                    <tr key={i} className={isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}>
                      <td className="py-3 px-4 font-bold">{d.district}</td>
                      <td className="py-3 px-4">{d.tempAvg}</td>
                      <td className="py-3 px-4">{d.rainAvg}</td>
                      <td className="py-3 px-4">{d.forestCover}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
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

      {/* VIEW 4: EXPLORE MAP TAB */}
     {/* VIEW 4: EXPLORE MAP TAB */}
{activeTab === 'Explore Map' && (
  <main className="w-full px-4 sm:px-8 lg:px-12 py-10 space-y-8">

    {/* Header */}
    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
            Maharashtra Climate Explorer
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Explore Climate Across Maharashtra
        </h1>

        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
          Explore district-level climate indicators, compare regional conditions,
          and understand how climate patterns vary across Maharashtra.
        </p>
      </div>

      {/* Layer Controls */}
      <div
        className={`p-1.5 rounded-2xl border flex items-center gap-1 ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        {(['Temperature', 'Rainfall', 'AQI'] as const).map(layer => (
          <button
            key={layer}
            onClick={() => setMapLayer(layer)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              mapLayer === layer
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                : isDarkMode
                  ? 'text-slate-400 hover:bg-slate-800'
                  : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {layer}
          </button>
        ))}
      </div>
    </div>

    {/* Main Map Layout */}
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

      {/* MAP */}
      <div
        className={`xl:col-span-8 min-h-[560px] rounded-[2rem] border overflow-hidden relative ${
          isDarkMode
            ? 'bg-[#071412] border-slate-800'
            : 'bg-[#eef8f3] border-emerald-100'
        }`}
      >

        {/* Map Background */}
        <div className="absolute inset-0">

          {/* Grid */}
          <div
            className={`absolute inset-0 opacity-30 ${
              isDarkMode
                ? 'bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)]'
                : 'bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)]'
            } [background-size:40px_40px]`}
          />

          {/* Soft terrain circles */}
          <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl -top-32 -left-32" />
          <div className="absolute w-80 h-80 rounded-full bg-teal-400/10 blur-3xl bottom-0 right-0" />

          {/* Stylized Maharashtra silhouette */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[75%] sm:w-[65%] h-[72%] ${
                isDarkMode ? 'bg-emerald-900/40' : 'bg-emerald-200/60'
              }`}
            style={{
              clipPath:
                'polygon(8% 35%, 18% 23%, 29% 18%, 40% 9%, 53% 14%, 67% 8%, 79% 18%, 90% 28%, 94% 43%, 88% 55%, 91% 68%, 78% 75%, 68% 88%, 53% 82%, 42% 91%, 29% 80%, 17% 77%, 12% 64%, 5% 54%)'
            }}
          />

          {/* Inner district-style lines */}
          <div className="absolute left-[22%] top-[30%] w-[55%] h-[45%] opacity-20">
            <div className="absolute left-[20%] top-0 h-full border-l border-emerald-700 rotate-[15deg]" />
            <div className="absolute left-[45%] top-0 h-full border-l border-emerald-700 rotate-[-12deg]" />
            <div className="absolute left-[68%] top-0 h-full border-l border-emerald-700 rotate-[20deg]" />
            <div className="absolute top-[30%] left-0 w-full border-t border-emerald-700 rotate-[5deg]" />
            <div className="absolute top-[65%] left-0 w-full border-t border-emerald-700 rotate-[-7deg]" />
          </div>
        </div>

        {/* Map Header */}
        <div className="relative z-20 p-6 flex items-start justify-between">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                isDarkMode
                  ? 'bg-slate-900/90 text-emerald-400 border border-slate-700'
                  : 'bg-white/90 text-emerald-700 border border-emerald-100'
              }`}
            >
              <MapPinIcon className="w-3.5 h-3.5" />
              Maharashtra
            </div>

            <p
              className={`text-xs mt-3 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Select a location to inspect climate conditions
            </p>
          </div>

          {/* Map Legend */}
          <div
            className={`hidden sm:block p-3 rounded-2xl backdrop-blur-md border ${
              isDarkMode
                ? 'bg-slate-950/70 border-slate-700'
                : 'bg-white/80 border-white'
            }`}
          >
            <p className="text-[9px] uppercase tracking-widest font-black text-slate-400 mb-2">
              {mapLayer} intensity
            </p>

            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-300" />
              <span className="w-3 h-3 rounded bg-emerald-500" />
              <span className="w-3 h-3 rounded bg-emerald-700" />
              <span className="w-3 h-3 rounded bg-amber-500" />
              <span className="text-[9px] text-slate-400 ml-1">Higher</span>
            </div>
          </div>
        </div>

        {/* Location Pins */}
        {[
          { name: 'Virar', top: '56%', left: '22%', value: '29°C' },
          { name: 'Mumbai', top: '61%', left: '28%', value: '30°C' },
          { name: 'Pune', top: '67%', left: '41%', value: '28°C' },
          { name: 'Nashik', top: '39%', left: '37%', value: '27°C' },
          { name: 'Aurangabad', top: '45%', left: '56%', value: '29°C' },
          { name: 'Solapur', top: '73%', left: '55%', value: '31°C' },
          { name: 'Nagpur', top: '35%', left: '79%', value: '32°C' },
        ].map(pin => (
          <button
            key={pin.name}
            style={{ top: pin.top, left: pin.left }}
            onClick={() => setSelectedDistrictMap(pin.name)}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group"
          >
            {/* Pulse */}
            <span
              className={`absolute inset-0 rounded-full animate-ping ${
                selectedDistrictMap === pin.name
                  ? 'bg-amber-400/40'
                  : 'bg-emerald-400/30'
              }`}
            />

            {/* Pin */}
            <span
              className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-black shadow-xl border transition-all group-hover:scale-110 ${
                selectedDistrictMap === pin.name
                  ? 'bg-amber-400 text-slate-950 border-amber-300'
                  : isDarkMode
                    ? 'bg-slate-900 text-white border-slate-700'
                    : 'bg-white text-slate-800 border-white'
              }`}
            >
              <MapPinIcon className="w-3.5 h-3.5" />
              {pin.name}
            </span>

            {/* Value */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[8px] font-bold ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {mapLayer === 'Temperature'
                ? pin.value
                : mapLayer === 'Rainfall'
                  ? '850 mm'
                  : 'AQI 68'}
            </span>
          </button>
        ))}

        {/* Bottom Map Info */}
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <div
            className={`rounded-2xl p-4 backdrop-blur-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDarkMode
                ? 'bg-slate-950/80 border-slate-800'
                : 'bg-white/90 border-white shadow-lg'
            }`}
          >
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600">
                Active Layer
              </p>
              <p className="font-black text-sm mt-0.5">{mapLayer}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[9px] text-slate-400">Locations</p>
                <p className="font-black text-sm">7 monitored</p>
              </div>

              <div className="w-px h-8 bg-slate-200/20" />

              <div className="text-right">
                <p className="text-[9px] text-slate-400">Selected</p>
                <p className="font-black text-sm text-emerald-600">
                  {selectedDistrictMap}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`xl:col-span-4 rounded-[2rem] border p-6 sm:p-7 ${
          isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200 shadow-sm'
        }`}
      >

        {/* Selected Location */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600">
              Selected Location
            </span>

            <h2 className="text-3xl font-black mt-2">
              {selectedDistrictMap}
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Maharashtra, India
            </p>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
            <MapPinIcon className="w-5 h-5 text-emerald-600" />
          </div>
        </div>

        {/* Climate Score */}
        <div
          className={`mt-7 p-5 rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Climate Vulnerability
            </span>

            <span className="text-xs font-black text-amber-500">
              Medium
            </span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div className="h-full w-[58%] bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full" />
          </div>

          <p className="text-[10px] text-slate-400 mt-2">
            Based on the selected climate indicator.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-5 space-y-3">

          <div
            className={`p-4 rounded-2xl border ${
              isDarkMode
                ? 'bg-slate-800/60 border-slate-700'
                : 'bg-white border-slate-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Temperature
              </span>
              <span className="text-sm font-black text-emerald-600">
                28.4°C
              </span>
            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              isDarkMode
                ? 'bg-slate-800/60 border-slate-700'
                : 'bg-white border-slate-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Annual Rainfall
              </span>
              <span className="text-sm font-black text-blue-500">
                850 mm
              </span>
            </div>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              isDarkMode
                ? 'bg-slate-800/60 border-slate-700'
                : 'bg-white border-slate-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Air Quality
              </span>
              <span className="text-sm font-black text-amber-500">
                AQI 68
              </span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={() => {
            setSelectedCity(selectedDistrictMap);
            setActiveTab('Weather');
          }}
          className="w-full mt-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition-all shadow-lg shadow-emerald-600/20"
        >
          View {selectedDistrictMap} Weather →
        </button>

        <p className="text-[9px] text-center text-slate-400 mt-3">
          Explore detailed weather conditions and forecasts.
        </p>
      </div>
    </div>
  </main>
)}
      {/* VIEW 5: LEARN TAB */}
      {activeTab === 'Learn' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-8">
          <div>
            <h1 className="text-3xl font-black">Climate Education Hub</h1>
            <p className="text-xs text-slate-400 mt-1">Read research-backed articles, guides, and practical climate knowledge.</p>
          </div>

          {/* Filtered Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className={`rounded-2xl border overflow-hidden cursor-pointer group transition hover:shadow-xl ${
                  isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-emerald-400 text-[10px] font-bold backdrop-blur-md">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <p className="text-[10px] text-slate-400 font-semibold">{article.date} · {article.author}</p>
                  <h3 className="font-bold text-base group-hover:text-emerald-500 transition line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{article.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 pt-2">
                    Read Article <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW 6: TAKE ACTION TAB */}
{activeTab === 'Take Action' && (
  <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
    {/* Hero Banner */}
    <div
      className={`p-8 sm:p-12 rounded-3xl transition-colors duration-200 ${
        isDarkMode ? 'bg-[#062017] text-white' : 'bg-[#062017] text-white'
      }`}
    >
      <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
        Take Action
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white">
        Small actions. Visible progress.
      </h1>
      <p className="text-sm sm:text-base text-emerald-100/70 mt-3 max-w-xl">
        Choose practical actions and build a personal climate-action checklist.
      </p>
    </div>

    {/* Main Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column: Progress Card */}
      <div
        className={`lg:col-span-4 p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-6 ${
          isDarkMode
            ? 'bg-[#062017] text-white border border-emerald-900/40'
            : 'bg-[#062017] text-white'
        }`}
      >
        <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
          Your Progress
        </span>

        {/* Dynamic Circular Progress Gauge */}
        <div className="relative w-44 h-44 flex items-center justify-center my-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="5"
              className="text-emerald-950"
              fill="transparent"
            />
            {/* Progress Arc */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#34d399"
              strokeWidth="5"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={
                2 * Math.PI * 40 * (1 - (pledges?.length || 0) / 6)
              }
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold text-white">
              {pledges?.length || 0}/6
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-extrabold text-white">
            {pledges?.length === 6
              ? 'Completed!'
              : pledges?.length > 0
              ? 'Keep it up!'
              : 'Keep going.'}
          </h3>
          <p className="text-xs text-emerald-100/70 max-w-xs mx-auto">
            Every completed action turns awareness into a habit.
          </p>
        </div>
      </div>

      {/* Right Column: Action Cards Checklist Grid */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            id: 1,
            title: 'Save electricity',
            category: 'Energy • High impact',
            description: 'Switch off unused lights, fans and devices.',
          },
          {
            id: 2,
            title: 'Travel smarter',
            category: 'Transport • High impact',
            description: 'Use public transport, walking or carpooling when possible.',
          },
          {
            id: 3,
            title: 'Reduce waste',
            category: 'Waste • Medium impact',
            description: 'Separate waste and reuse materials before recycling.',
          },
          {
            id: 4,
            title: 'Save water',
            category: 'Water • Medium impact',
            description: 'Fix leaks and avoid unnecessary water use.',
          },
          {
            id: 5,
            title: 'Protect trees',
            category: 'Nature • High impact',
            description: 'Plant or protect native trees and green spaces.',
          },
          {
            id: 6,
            title: 'Reduce food waste',
            category: 'Food • Medium impact',
            description: 'Plan meals and use leftovers instead of throwing food away.',
          },
        ].map((item) => {
          const isChecked = pledges?.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => togglePledge(item.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start space-x-4 ${
                isChecked
                  ? isDarkMode
                    ? 'bg-emerald-950/40 border-emerald-500'
                    : 'bg-emerald-50/50 border-emerald-500'
                  : isDarkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Rounded Checkbox */}
              <div
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
                  isChecked
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : isDarkMode
                    ? 'border-slate-600 bg-slate-800'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Action Text Details */}
              <div className="space-y-1">
                <h4
                  className={`text-sm font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-[11px] font-medium ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-400'
                  }`}
                >
                  {item.category}
                </p>
                <p
                  className={`text-xs ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </main>
)}

      {/* VIEW 7: ABOUT TAB */}
      {activeTab === 'About' && (
        <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">About ClimateLens</span>
            <h1 className="text-4xl font-black">Empowering Citizens with Open Environmental Data</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              ClimateLens is an open platform dedicated to making atmospheric science, monsoon metrics, and regional climate trends accessible to students, policy advisors, and everyday citizens in Maharashtra.
            </p>
          </div>

          {/* Contact / Feedback Form */}
          <div className={`p-8 rounded-3xl border max-w-2xl space-y-6 ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className="text-xl font-bold">Send Feedback or Contribute Data</h3>
            
            {contactSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold text-center">
                Thank you! Your message has been received by the ClimateLens research team.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="text-xs font-bold block mb-1">Your Name</label>
                  <input required type="text" placeholder="Karan Giri" className={`w-full p-3 rounded-xl border text-xs outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`} />
                </div>
                <div>
                  <label className="text-xs font-bold block mb-1">Email Address</label>
                  <input required type="email" placeholder="karanworkd123@gmail.com" className={`w-full p-3 rounded-xl border text-xs outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`} />
                </div>
                <div>
                  <label className="text-xs font-bold block mb-1">Message</label>
                  <textarea required rows={4} placeholder="Inquire about dataset APIs or regional suggestions..." className={`w-full p-3 rounded-xl border text-xs outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {/* ========================================== */}
      {/* ARTICLE MODAL DRAWER                      */}
      {/* ========================================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6 border ${
            isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                {activeArticle.category}
              </span>
              <button onClick={() => setActiveArticle(null)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-black">{activeArticle.title}</h2>
            <p className="text-xs text-slate-400">{activeArticle.date} · By {activeArticle.author}</p>

            <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-56 object-cover rounded-2xl" />

            <p className="text-sm leading-relaxed text-slate-300">{activeArticle.content}</p>

            <button onClick={() => setActiveArticle(null)} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl">
              Close Article
            </button>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* VOLUNTEER MODAL                            */}
      {/* ========================================== */}
      {showVolunteerModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl p-6 space-y-5 border ${
            isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-lg">Join Local Drive</h3>
              <button onClick={() => setShowVolunteerModal(false)} className="p-1 rounded-full hover:bg-slate-800">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {volunteerSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckIcon className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg">You are signed up!</h4>
                <p className="text-xs text-slate-400">Our local community leads will contact you regarding upcoming drives in Maharashtra.</p>
                <button onClick={() => { setShowVolunteerModal(false); setVolunteerSubmitted(false); }} className="mt-4 px-6 py-2 bg-emerald-600 text-white font-bold text-xs rounded-full">Done</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setVolunteerSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="text-xs font-bold block mb-1">City / District</label>
                  <input required type="text" defaultValue={selectedCity} className={`w-full p-2.5 rounded-xl border text-xs ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`} />
                </div>
                <div>
                  <label className="text-xs font-bold block mb-1">Phone or Email</label>
                  <input required type="text" placeholder="Contact info" className={`w-full p-2.5 rounded-xl border text-xs ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`} />
                </div>
                <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl">Register Volunteer</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* 5. FOOTER COMMUNITY BANNER                 */}
      {/* ========================================== */}
      <footer className="bg-emerald-950 text-white border-t border-emerald-900/80 py-8 px-4 sm:px-8 lg:px-12 mt-12">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl font-black tracking-tight">Together for a Greener Tomorrow.</h3>
            <p className="text-xs text-emerald-300">Small steps make a big difference. Explore, learn, and act.</p>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <span className="block font-black text-lg">100K+</span>
              <span className="text-[10px] text-emerald-300">Impact Readers</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-lg">500+</span>
              <span className="text-[10px] text-emerald-300">Trees Planted</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-lg">36</span>
              <span className="text-[10px] text-emerald-300">Districts Covered</span>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('Take Action')}
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shrink-0"
          >
            Join the Movement
          </button>
        </div>
      </footer>

    </div>
  );
}
