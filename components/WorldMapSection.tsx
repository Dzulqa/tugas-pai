"use client";

import React, { useState } from "react";
import { COUNTRIES_DATA, CountryIslamicProfile } from "@/data/islamicData";
import {
  IconGlobe,
  IconMapPin,
  IconSparkles,
  IconChevronRight,
  IconLandmark,
  IconUsers,
  IconBuilding
} from "./Icons";

interface WorldMapSectionProps {
  onSelectCountry: (countryId: string) => void;
}

export default function WorldMapSection({ onSelectCountry }: WorldMapSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryIslamicProfile>(COUNTRIES_DATA[0]);
  const [activeRegion, setActiveRegion] = useState<string>("Semua");
  const [showRoutes, setShowRoutes] = useState<boolean>(true);

  const regions = [
    "Semua",
    "Asia Tenggara",
    "Timur Tengah",
    "Eropa",
    "Afrika Utara",
    "Asia Selatan",
    "Asia Timur"
  ];

  const filteredCountries = activeRegion === "Semua"
    ? COUNTRIES_DATA
    : COUNTRIES_DATA.filter((c) => c.region === activeRegion);

  const handleCountryPinClick = (country: CountryIslamicProfile) => {
    setSelectedCountry(country);
  };

  const handleDeepExplore = (countryId: string) => {
    onSelectCountry(countryId);
    const element = document.getElementById("negara");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="peta" className="py-16 bg-slate-900/60 border-t border-b border-emerald-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-2">
              <IconGlobe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kartografi & Peta Sebaran Islam Dunia</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Peta Interaktif Sejarah Masuknya Islam
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Klik pada titik koordinat negara di peta atau pilih kawasan untuk melihat jejak sejarah masuknya Islam, peninggalan dinasti berkuasa, dan pusat-pusat Islam bersejarah.
            </p>
          </div>

          {/* Region Filters and Trade Route Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowRoutes(!showRoutes)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                showRoutes
                  ? "bg-amber-950/80 text-amber-300 border-amber-600/50"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${showRoutes ? "bg-amber-400 animate-ping" : "bg-slate-500"}`}></span>
              <span>{showRoutes ? "Sembunyikan Rute Dagang" : "Tampilkan Rute Sutra & Rempah"}</span>
            </button>
          </div>
        </div>

        {/* Region Pills bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeRegion === reg
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-700/40"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Map Canvas and Selected Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* SVG World Map Viewport */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden relative shadow-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-400 border-b border-slate-800/60 pb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                <span>Titik Negara Kajian PAI (8 Negara Representatif)</span>
              </span>
              <span className="italic text-[11px] text-slate-500">
                Pilih pin untuk melihat ikhtisar
              </span>
            </div>

            {/* Custom Interactive Stylized Vector World Map */}
            <div className="relative aspect-[16/9] w-full bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
              {/* Subtle map coordinate grid background */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Simplified stylized continents silhouette paths */}
              <svg viewBox="0 0 1000 500" className="w-full h-full select-none" preserveAspectRatio="none">
                {/* Europe & Asia Mainland */}
                <path
                  d="M 380,80 Q 450,70 560,90 T 720,120 T 820,160 T 880,240 T 780,290 T 720,240 T 630,220 T 560,250 T 480,210 T 410,180 T 360,140 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-80"
                />
                {/* Iberian Peninsula (Spain) */}
                <path
                  d="M 420,180 Q 450,170 470,195 T 450,225 T 415,210 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-90"
                />
                {/* Africa Continent */}
                <path
                  d="M 430,220 Q 520,210 570,250 T 580,330 T 550,420 T 480,450 T 420,360 T 400,280 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-70"
                />
                {/* Arabian Peninsula */}
                <path
                  d="M 540,240 Q 580,230 610,265 T 590,320 T 545,290 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-90"
                />
                {/* Indian Subcontinent */}
                <path
                  d="M 670,220 Q 720,225 730,270 T 700,340 T 665,270 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.5"
                  className="opacity-85"
                />
                {/* Southeast Asia Archipelago (Nusantara / Indonesia) */}
                <path
                  d="M 750,290 Q 780,295 810,310 T 850,330 M 740,320 Q 780,330 830,350 T 890,360 M 770,350 Q 820,365 850,370"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="16"
                  strokeLinecap="round"
                  className="opacity-90"
                />

                {/* Animated Islamic Trade Routes */}
                {showRoutes && (
                  <g className="transition-opacity duration-500">
                    {/* Maritime Spice Route: Hijaz -> India -> Nusantara */}
                    <path
                      d="M 570,275 Q 640,310 690,290 T 770,340"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeDasharray="6,4"
                      className="animate-pulse"
                    />
                    {/* Overland Silk Road: Arabia / Persia -> Xi'an (China) */}
                    <path
                      d="M 570,230 Q 640,180 720,180 T 810,200"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeDasharray="6,4"
                    />
                    {/* Mediterranean Route: Levant -> Egypt -> North Africa -> Andalusia */}
                    <path
                      d="M 550,225 Q 510,215 470,205 T 445,195"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                    />
                  </g>
                )}
              </svg>

              {/* Interactive Country Pins */}
              {filteredCountries.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryPinClick(country)}
                    style={{
                      left: `${country.mapCoordinates.x}%`,
                      top: `${country.mapCoordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    title={`${country.flag} ${country.name}`}
                  >
                    {/* Pulsing ring indicator */}
                    <span
                      className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? "bg-amber-400/40 animate-ping"
                          : "bg-emerald-500/20 group-hover:bg-emerald-500/40"
                      }`}
                    />

                    {/* Pin Head */}
                    <div
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-200 shadow-lg ${
                        isSelected
                          ? "bg-amber-500 border-white text-slate-950 scale-125 z-30 shadow-amber-500/50"
                          : "bg-emerald-700 border-emerald-300 text-white group-hover:scale-115 group-hover:bg-emerald-500"
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{country.flag}</span>
                    </div>

                    {/* Country label pill */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap shadow-md pointer-events-none transition-all ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 opacity-100 scale-100 font-bold"
                          : "bg-slate-950/90 text-slate-200 border border-slate-700 opacity-80 group-hover:opacity-100"
                      }`}
                    >
                      {country.name.split(" ")[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-amber-400 inline-block"></span>
                  <span>Jalur Rempah Maritim</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-emerald-400 inline-block"></span>
                  <span>Jalur Sutra Darat</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-sky-400 inline-block"></span>
                  <span>Jalur Mediterania</span>
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                Data Koordinat Diadaptasi dari Atlas Sejarah Islam
              </span>
            </div>
          </div>

          {/* Selected Country Quick Spotlight Card */}
          <div className="lg:col-span-4 bg-slate-950 rounded-2xl border border-emerald-900/50 p-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

            {/* Country Card Header */}
            <div className="flex items-start justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div>
                <span className="text-3xl mr-2">{selectedCountry.flag}</span>
                <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 inline-block mt-1">
                  {selectedCountry.region}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedCountry.name}
                </h3>
                <p className="text-xs text-slate-400 font-serif italic">
                  {selectedCountry.nativeName}
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {selectedCountry.summary}
            </p>

            {/* Sejarah Masuk Highlights */}
            <div className="space-y-3 mb-4">
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 block mb-1 flex items-center gap-1">
                  <IconSparkles className="w-3 h-3 text-amber-400" />
                  Masuknya Islam: {selectedCountry.historyOfEntry.century}
                </span>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {selectedCountry.historyOfEntry.detailedNarrative}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {selectedCountry.historyOfEntry.primaryRoutes.slice(0, 2).map((route, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      • {route}
                    </span>
                  ))}
                </div>
              </div>

              {/* Peninggalan Utama Pill */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 block mb-1 flex items-center gap-1">
                  <IconLandmark className="w-3 h-3 text-emerald-400" />
                  Peninggalan Penguasa Terdahulu
                </span>
                <ul className="text-xs text-slate-300 space-y-1">
                  {selectedCountry.pastHeritage.slice(0, 2).map((h) => (
                    <li key={h.id} className="flex items-center justify-between">
                      <span className="font-medium text-slate-200">{h.name}</span>
                      <span className="text-[10px] text-slate-400">{h.yearBuilt.split(" ")[0]} M</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modern Highlight */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-medium block">
                    Populasi Muslim Terkini
                  </span>
                  <span className="text-sm font-bold text-teal-300">
                    {selectedCountry.contemporaryDevelopment.muslimPopulation}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-medium block">
                    Persentase
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {selectedCountry.contemporaryDevelopment.percentageOfTotal}
                  </span>
                </div>
              </div>
            </div>

            {/* Deep dive action button */}
            <button
              onClick={() => handleDeepExplore(selectedCountry.id)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold text-xs shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all group"
            >
              <span>Pelajari Detail Sejarah Lengkap</span>
              <IconChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
