"use client";

import React, { useState } from "react";
import { COUNTRIES_DATA, CountryIslamicProfile, HeritageItem } from "@/data/islamicData";
import ThreeGlobe from "./ThreeGlobe";
import {
  IconGlobe,
  IconMapPin,
  IconLandmark,
  IconClock,
  IconBook,
  IconTrendingUp,
  IconBuilding,
  IconCheckCircle,
  IconSparkles
} from "./Icons";

interface CountryExplorerProps {
  selectedCountryId: string;
  onSelectCountryId: (id: string) => void;
  onOpenHeritageModal: (item: HeritageItem) => void;
}

export default function CountryExplorer({
  selectedCountryId,
  onSelectCountryId,
  onOpenHeritageModal,
}: CountryExplorerProps) {
  const [viewMode, setViewMode] = useState<"3d" | "2d">("3d");
  const [activeTab, setActiveTab] = useState<"sejarah" | "peninggalan" | "modern" | "pusat">("sejarah");
  const [activeRegion, setActiveRegion] = useState<string>("Semua");
  const [showRoutes, setShowRoutes] = useState<boolean>(true);

  const currentCountry =
    COUNTRIES_DATA.find((c) => c.id === selectedCountryId) || COUNTRIES_DATA[0];

  const regions = [
    "Semua",
    "Asia Tenggara",
    "Timur Tengah",
    "Eropa",
    "Afrika Utara",
    "Asia Selatan",
    "Asia Timur",
  ];

  const filteredCountries = activeRegion === "Semua"
    ? COUNTRIES_DATA
    : COUNTRIES_DATA.filter((c) => c.region === activeRegion);

  return (
    <section id="peta-negara" className="py-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-2">
              <IconGlobe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Visualisasi Geospasial &amp; Sejarah Peradaban</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Eksplorasi Sejarah Islam di 8 Kawasan Dunia
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
              Jelajahi bumi peradaban Islam secara interaktif menggunakan <strong>Globe 3D Three.js</strong> atau Peta Atlas 2D untuk menelaah jalur kedatangan, peninggalan para khalifah dan sultan, serta pusat keilmuan.
            </p>
          </div>

          {/* View Switcher: 3D Three.js Globe vs 2D Vector Map */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode("3d")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === "3d"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconSparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Globe 3D (Three.js)</span>
            </button>

            <button
              onClick={() => setViewMode("2d")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === "2d"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconMapPin className="w-3.5 h-3.5" />
              <span>Peta Atlas 2D</span>
            </button>
          </div>
        </div>

        {/* 3D Globe Mode (Three.js) */}
        {viewMode === "3d" && (
          <div className="animate-in fade-in duration-300">
            <ThreeGlobe
              selectedCountryId={selectedCountryId}
              onSelectCountry={(id) => onSelectCountryId(id)}
            />
          </div>
        )}

        {/* 2D Vector Map Mode */}
        {viewMode === "2d" && (
          <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-4 animate-in fade-in duration-300">
            {/* Region Filter Pills & Route Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                      activeRegion === reg
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowRoutes(!showRoutes)}
                className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
                  showRoutes
                    ? "bg-slate-950 text-amber-300 border-amber-500/40"
                    : "bg-slate-950 text-slate-400 border-slate-800"
                }`}
              >
                {showRoutes ? "✓ Rute Sutra & Rempah Aktif" : "+ Tampilkan Rute"}
              </button>
            </div>

            {/* SVG Map Canvas */}
            <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-full select-none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gridGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.6"/>
                  </filter>
                  <filter id="glowEmerald" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10b981" floodOpacity="0.6"/>
                  </filter>
                </defs>

                {/* Ocean Ambient Tone */}
                <rect width="1000" height="500" fill="url(#gridGrad)" />

                {/* Subtle Cartographic Coordinate Grid */}
                <g stroke="#334155" strokeWidth="0.6" strokeDasharray="4,6" className="opacity-30">
                  {/* Meridians */}
                  <line x1="200" y1="0" x2="200" y2="500" />
                  <line x1="380" y1="0" x2="380" y2="500" />
                  <line x1="560" y1="0" x2="560" y2="500" />
                  <line x1="740" y1="0" x2="740" y2="500" />
                  <line x1="900" y1="0" x2="900" y2="500" />
                  {/* Parallels */}
                  <line x1="0" y1="125" x2="1000" y2="125" />
                  <line x1="0" y1="250" x2="1000" y2="250" strokeWidth="1.2" stroke="#10b981" strokeOpacity="0.25" /> {/* Khatulistiwa / Equator */}
                  <line x1="0" y1="375" x2="1000" y2="375" />
                </g>

                <text x="16" y="246" fill="#10b981" fontSize="9" opacity="0.4" fontFamily="monospace">0° KHATULISTIWA (EQUATOR)</text>
                <text x="16" y="120" fill="#64748b" fontSize="9" opacity="0.4" fontFamily="monospace">30° N (LINTANG UTARA)</text>
                <text x="16" y="370" fill="#64748b" fontSize="9" opacity="0.4" fontFamily="monospace">30° S (LINTANG SELATAN)</text>

                {/* Americas (Western Hemisphere) */}
                <path
                  d="M 120,60 Q 180,50 200,90 T 170,160 T 210,210 T 180,240 T 150,220 T 120,160 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  className="opacity-45"
                />
                <path
                  d="M 190,250 Q 240,280 250,330 T 210,430 T 180,450 T 170,360 T 180,280 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  className="opacity-45"
                />

                {/* Europe & Iberian Peninsula (Spanyol: 450, 190) */}
                <path
                  d="M 430,170 Q 460,165 470,185 T 455,205 T 435,200 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="opacity-80"
                />
                <path
                  d="M 460,140 Q 510,130 550,150 T 560,175 T 510,180 T 470,160 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  className="opacity-60"
                />

                {/* Anatolia / Turki (540, 170) */}
                <path
                  d="M 525,160 Q 560,155 575,170 T 555,185 T 525,175 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="opacity-85"
                />

                {/* North & Central Africa (Mesir: 520, 200) */}
                <path
                  d="M 420,210 Q 520,200 550,220 T 560,260 T 580,310 T 550,420 T 480,450 T 410,350 T 390,250 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  className="opacity-65"
                />

                {/* Arabian Peninsula (Arab Saudi: 560, 220; Palestina: 550, 205) */}
                <path
                  d="M 545,200 Q 580,205 605,225 T 595,275 T 555,270 T 545,220 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="opacity-90"
                />

                {/* Central Asia & Indian Subcontinent (India: 700, 230) */}
                <path
                  d="M 610,170 Q 690,160 740,190 T 730,240 T 710,290 T 675,250 T 620,210 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="opacity-80"
                />

                {/* East Asia / China (China: 800, 190) */}
                <path
                  d="M 740,150 Q 820,140 880,180 T 890,240 T 820,270 T 770,240 T 735,200 Z"
                  fill="#1e293b"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  className="opacity-75"
                />

                {/* Southeast Asia & Nusantara Archipelago (Indonesia: 780, 290) */}
                {/* Malaya */}
                <path d="M 760,265 Q 775,280 778,300" stroke="#334155" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
                {/* Sumatra */}
                <path d="M 755,295 Q 775,320 800,345" stroke="#10b981" strokeWidth="8" strokeLinecap="round" className="opacity-90" />
                {/* Java */}
                <path d="M 795,355 Q 830,362 860,366" stroke="#10b981" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                {/* Borneo */}
                <path d="M 810,295 Q 835,290 840,325 T 815,335 Z" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" className="opacity-85" />
                {/* Sulawesi */}
                <path d="M 855,305 Q 868,300 870,325 T 855,340" stroke="#10b981" strokeWidth="5" strokeLinecap="round" className="opacity-80" />

                {/* Australia */}
                <path
                  d="M 840,390 Q 910,380 940,410 T 930,460 T 860,470 T 830,420 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  className="opacity-40"
                />

                {/* Historical Trade & Preaching Routes */}
                {showRoutes && (
                  <g className="animate-in fade-in duration-500">
                    {/* 1. Jalur Sutra Darat (Silk Road overland) - Gold */}
                    <path
                      d="M 800,190 Q 730,165 670,175 T 575,170 T 540,170"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeDasharray="6,4"
                      filter="url(#glowGold)"
                    />
                    {/* Branch into Hijaz & Levant */}
                    <path
                      d="M 670,175 Q 600,190 560,220"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* 2. Jalur Rempah Maritim (Spice Route ocean) - Emerald */}
                    <path
                      d="M 780,290 Q 740,270 700,230 T 605,245 T 560,225 T 520,200"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.8"
                      strokeDasharray="6,4"
                      filter="url(#glowEmerald)"
                    />
                    {/* Extension to Andalusia */}
                    <path
                      d="M 520,200 Q 480,210 450,190"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="5,4"
                    />

                    {/* Route Label badges in SVG */}
                    <g className="text-[10px] font-sans">
                      <rect x="670" y="148" width="110" height="18" rx="4" fill="#020617" stroke="#f59e0b" strokeWidth="0.8" opacity="0.85" />
                      <text x="676" y="161" fill="#fef08a" fontSize="9" fontWeight="bold">Jalur Sutra Darat</text>

                      <rect x="630" y="275" width="130" height="18" rx="4" fill="#020617" stroke="#10b981" strokeWidth="0.8" opacity="0.85" />
                      <text x="636" y="288" fill="#a7f3d0" fontSize="9" fontWeight="bold">Jalur Rempah Maritim</text>
                    </g>
                  </g>
                )}
              </svg>

              {/* Clickable 2D Pins */}
              {filteredCountries.map((c) => {
                const isSelected = c.id === currentCountry.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectCountryId(c.id)}
                    style={{
                      left: `${c.mapCoordinates.x}%`,
                      top: `${c.mapCoordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    title={`${c.flag} ${c.name}`}
                  >
                    <div
                      className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-transform ${
                        isSelected
                          ? "bg-emerald-600 border-white text-white scale-125 shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400"
                          : "bg-slate-900/90 border-slate-700 text-slate-200 group-hover:scale-110 group-hover:border-emerald-500"
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{c.flag}</span>
                    </div>

                    <span
                      className={`block mt-1 text-[10px] font-medium px-1.5 py-0.5 rounded shadow whitespace-nowrap transition-colors ${
                        isSelected
                          ? "bg-slate-900 text-emerald-300 border border-emerald-600 font-bold shadow-md"
                          : "bg-slate-950/85 text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {c.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}

              {/* Bottom Left Legend for 2D View */}
              <div className="absolute bottom-2 left-2 z-20 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[10px] text-slate-300 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-amber-400 inline-block"></span>
                  <span>Jalur Sutra (Darat)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-emerald-400 inline-block"></span>
                  <span>Jalur Rempah (Maritim)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  <span>8 Pusat Kajian</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8-Country Selection Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Pilih Negara Kajian:</span>
            <span className="text-[11px] text-emerald-400 font-medium">
              Aktif: {currentCountry.name}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 px-0.5 scrollbar-none touch-pan-x">
            {COUNTRIES_DATA.map((c) => {
              const isSelected = c.id === currentCountry.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelectCountryId(c.id)}
                  className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 sm:gap-2 border shrink-0 ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-400 shadow-md scale-102"
                      : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800"
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Country Exhibition Card */}
        <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-4 sm:p-8 space-y-6 shadow-xl">
          {/* Country Heroic Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl sm:text-5xl shrink-0">{currentCountry.flag}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentCountry.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                    {currentCountry.region}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-300/90 font-serif italic mt-0.5">
                  {currentCountry.nativeName}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right bg-slate-950/70 p-3 rounded-xl border border-slate-800 shrink-0">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Populasi Muslim Terkini</span>
              <span className="text-sm sm:text-lg font-bold text-white">
                {currentCountry.contemporaryDevelopment.muslimPopulation}
              </span>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-semibold block">
                ({currentCountry.contemporaryDevelopment.percentageOfTotal})
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            {currentCountry.summary}
          </p>

          {/* 4 Clean Museum Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 border-b border-slate-800 pb-3 overflow-x-auto scrollbar-none touch-pan-x">
            <button
              onClick={() => setActiveTab("sejarah")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "sejarah"
                  ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconBook className="w-4 h-4 text-emerald-400" />
              <span>1. Sejarah Masuknya Islam</span>
            </button>

            <button
              onClick={() => setActiveTab("peninggalan")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "peninggalan"
                  ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconLandmark className="w-4 h-4 text-amber-400" />
              <span>2. Peninggalan Penguasa ({currentCountry.pastHeritage.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("modern")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "modern"
                  ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconTrendingUp className="w-4 h-4 text-teal-400" />
              <span>3. Perkembangan Saat Ini</span>
            </button>

            <button
              onClick={() => setActiveTab("pusat")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "pusat"
                  ? "bg-slate-800 text-white border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <IconBuilding className="w-4 h-4 text-cyan-400" />
              <span>4. Pusat-Pusat Islam ({currentCountry.islamicCenters.length})</span>
            </button>
          </div>

          {/* TAB 1: SEJARAH MASUK */}
          {activeTab === "sejarah" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-amber-400 font-bold uppercase tracking-wider block">
                    Kurun Waktu Kedatangan
                  </span>
                  <p className="text-slate-100 font-semibold text-sm">
                    {currentCountry.historyOfEntry.century}
                  </p>
                  <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                    Pendekatan: {currentCountry.historyOfEntry.theoriesOrMethods}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider block">
                    Jalur Utama Masuknya Islam
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {currentCountry.historyOfEntry.primaryRoutes.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-teal-400 font-bold uppercase tracking-wider block">
                    Tokoh &amp; Da&rsquo;i Kunci
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {currentCountry.historyOfEntry.keyPioneers.map((k, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">✓</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Kisah &amp; Analisis Sejarah Masuknya Islam
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentCountry.historyOfEntry.detailedNarrative}
                </p>
              </div>

              {/* Chronological Milestone Timeline */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Kronologi Peristiwa Bersejarah
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCountry.historyOfEntry.timeline.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                      <span className="font-bold text-emerald-400 text-sm">{item.year}</span>
                      <h5 className="font-bold text-slate-100 text-xs sm:text-sm">{item.title}</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed pt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PENINGGALAN PENGUASA */}
          {activeTab === "peninggalan" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentCountry.pastHeritage.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenHeritageModal(item)}
                    className="group bg-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden cursor-pointer transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-950/90 text-slate-200 border border-slate-800 backdrop-blur-md">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 space-y-2">
                        <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-amber-300 font-medium">
                          Pembangun: {item.rulerOrDynasty} ({item.yearBuilt.split(" ")[0]} M)
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <IconMapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </p>
                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed pt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button className="w-full py-2 rounded-xl bg-slate-900 text-xs text-slate-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors text-center font-semibold border border-slate-800">
                        Buka Fakta Arsitektur Lengkap
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PERKEMBANGAN KONTEMPORER */}
          {activeTab === "modern" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <span className="font-bold text-slate-200 uppercase tracking-wider text-xs block">
                  Peran Sosial, Ekonomi &amp; Dakwah Kontemporer
                </span>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {currentCountry.contemporaryDevelopment.socialAndEconomicRole}
                </p>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 font-semibold block mb-2">
                    Lembaga / Organisasi Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCountry.contemporaryDevelopment.leadingOrganizations.map((org, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-medium">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-xs block">
                  3 Sorotan Kemajuan Era Modern
                </span>
                <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
                  {currentCountry.contemporaryDevelopment.modernHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PUSAT-PUSAT ISLAM */}
          {activeTab === "pusat" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in duration-200">
              {currentCountry.islamicCenters.map((center) => (
                <div key={center.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-teal-300 border border-slate-800">
                        {center.type}
                      </span>
                      <span className="text-xs font-semibold text-amber-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                        Kapasitas: {center.capacity}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mt-1">{center.name}</h4>
                    <p className="text-xs text-slate-400">{center.city} • Didirikan: {center.foundedYear}</p>
                    <p className="text-slate-300 leading-relaxed pt-1">{center.description}</p>
                  </div>
                  <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800">
                    &ldquo;{center.significance}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
