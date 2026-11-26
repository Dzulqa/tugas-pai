"use client";

import React, { useState } from "react";
import { COUNTRIES_DATA, IslamicCenter } from "@/data/islamicData";
import {
  IconBuilding,
  IconMapPin
} from "./Icons";

export default function IslamicCentersShowcase() {
  const [filterType, setFilterType] = useState<string>("Semua");

  const allCenters: (IslamicCenter & { countryName: string; countryFlag: string })[] = [];
  COUNTRIES_DATA.forEach((country) => {
    country.islamicCenters.forEach((center) => {
      allCenters.push({
        ...center,
        countryName: country.name,
        countryFlag: country.flag,
      });
    });
  });

  const types = ["Semua", "Masjid Agung", "Universitas Islam", "Pusat Kebudayaan & Riset", "Masjid Bersejarah"];

  const filteredCenters = filterType === "Semua"
    ? allCenters
    : allCenters.filter((c) => c.type === filterType);

  return (
    <section id="pusat" className="py-12 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium mb-2">
              <IconBuilding className="w-3.5 h-3.5" />
              <span>Pusat Peradaban &amp; Keilmuan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pusat-Pusat Islam di Setiap Negara
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Masjid agung, universitas Islam tertua di dunia, dan lembaga fatwa internasional yang menjadi episentrum ibadah dan transmisi ilmu pengetahuan.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                filterType === t
                  ? "bg-teal-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    {center.type}
                  </span>
                  <span className="text-xl" title={center.countryName}>
                    {center.countryFlag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {center.name}
                </h3>

                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <IconMapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{center.city}, {center.countryName.split(" ")[0]} • Berdiri: {center.foundedYear}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {center.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Daya Tampung:</span>
                  <span className="font-semibold text-white">{center.capacity}</span>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  &ldquo;{center.significance}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
