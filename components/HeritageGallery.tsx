"use client";

import React, { useState } from "react";
import { COUNTRIES_DATA, HeritageItem } from "@/data/islamicData";
import {
  IconLandmark,
  IconSearch,
  IconMapPin
} from "./Icons";

interface HeritageGalleryProps {
  onOpenDetailModal: (item: HeritageItem) => void;
}

export default function HeritageGallery({ onOpenDetailModal }: HeritageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allHeritageItems: (HeritageItem & { countryName: string; countryFlag: string })[] = [];
  COUNTRIES_DATA.forEach((country) => {
    country.pastHeritage.forEach((heritage) => {
      allHeritageItems.push({
        ...heritage,
        countryName: country.name,
        countryFlag: country.flag,
      });
    });
  });

  const categories = [
    "Semua",
    "Masjid Bersejarah",
    "Istana & Benteng",
    "Manuskrip & Intelektual",
    "Makam & Situs Kuno",
  ];

  const filteredHeritage = allHeritageItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rulerOrDynasty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.countryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="peninggalan" className="py-12 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-xs font-medium mb-2">
              <IconLandmark className="w-3.5 h-3.5" />
              <span>Arsip Warisan &amp; Arsitektur</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Galeri Peninggalan Islam pada Penguasa Sebelumnya
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Daftar peninggalan arsitektur masjid, istana kedaulatan, benteng, dan situs bersejarah yang dibangun para khalifah dan sultan di seluruh dunia.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-auto sm:min-w-[240px]">
            <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari peninggalan atau kota..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-amber-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHeritage.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenDetailModal(item)}
              className="group bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 overflow-hidden cursor-pointer transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950/90 text-slate-200 border border-slate-800">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="text-xl" title={item.countryName}>{item.countryFlag}</span>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.rulerOrDynasty} • <span className="text-slate-300">{item.yearBuilt.split(" ")[0]} M</span>
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <IconMapPin className="w-3 h-3 text-slate-500" />
                    <span>{item.location}</span>
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button className="w-full py-1.5 rounded-lg bg-slate-900 text-xs text-slate-300 group-hover:bg-slate-800 group-hover:text-white transition-colors font-medium border border-slate-800">
                  Lihat Lembar Fakta Lengkap
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredHeritage.length === 0 && (
          <div className="text-center py-8 bg-slate-900/40 rounded-xl border border-slate-800 text-xs text-slate-400">
            Tidak ditemukan peninggalan dengan kata kunci &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
