"use client";

import React, { useState } from "react";
import { ACADEMIC_SOURCES, WebSource } from "@/data/sourcesData";
import {
  IconBook,
  IconCheckCircle,
  IconSearch
} from "./Icons";

export default function SourcesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Semua",
    "Buku Akademik",
    "Ensiklopedia Sejarah",
    "Dokumen Resmi & Kemenag",
    "Jurnal Ilmiah",
  ];

  const handleCopyCitation = (source: WebSource) => {
    navigator.clipboard.writeText(source.apaCitation);
    setCopiedId(source.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredSources = ACADEMIC_SOURCES.filter((s) => {
    const matchesCat =
      selectedCategory === "Semua" || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="sumber" className="py-12 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-xs font-medium mb-2">
              <IconBook className="w-3.5 h-3.5" />
              <span>Daftar Pustaka &amp; Rujukan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Sumber-Sumber Rujukan Ilmiah
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Daftar literatur sejarawan, ensiklopedia resmi Kementerian Agama RI, buku teks kurikulum nasional, dan jurnal ilmiah yang digunakan dalam penulisan konten.
            </p>
          </div>

          <div className="relative w-full sm:w-auto sm:min-w-[240px]">
            <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari buku atau penulis..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === c
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSources.map((source) => {
            const isCopied = copiedId === source.id;
            return (
              <div
                key={source.id}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {source.category}
                    </span>
                    <span className="font-mono text-slate-500">{source.isbnOrId}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white pt-1">
                    {source.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    Penulis: <strong className="text-slate-200">{source.author}</strong> ({source.year}) • {source.publisher}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {source.description}
                  </p>

                  <p className="text-[11px] text-emerald-400 pt-1">
                    <strong>Relevansi: </strong>{source.relevancyToProject}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-500 font-mono italic truncate max-w-[70%]">
                    {source.apaCitation}
                  </span>
                  <button
                    onClick={() => handleCopyCitation(source)}
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium shrink-0 transition-colors"
                  >
                    {isCopied ? "✓ Tersalin" : "Salin APA"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
