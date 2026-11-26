"use client";

import React from "react";
import {
  IconGlobe,
  IconAward,
  IconChevronRight,
  IconLandmark,
  IconBook
} from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-14 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Subtle Category Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px] sm:text-xs font-medium max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Tugas Pendidikan Agama Islam & Budi Pekerti</span>
            <span className="text-slate-500 hidden xs:inline">•</span>
            <span className="text-emerald-400">Kelompok 3 (Al-Farabi)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Khazanah Sejarah &amp; Warisan{" "}
            <span className="text-emerald-400">Peradaban Islam Dunia</span>
          </h1>

          {/* Clean Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Media pembelajaran interaktif untuk menelaah sejarah masuknya Islam ke 8 negara, peninggalan monumental para penguasa terdahulu, kondisi umat kontemporer, dan pusat-pusat peradaban.
          </p>

          {/* Tasteful Quranic Quote */}
          <div className="py-3 px-5 rounded-xl bg-slate-900/60 border border-slate-800/80 max-w-xl mx-auto">
            <p className="font-serif text-base sm:text-lg text-amber-200/90 font-normal">
              قَدْ خَلَتْ مِنْ قَبْلِكُمْ سُنَنٌ فَسِيرُوا فِي الْأَرْضِ فَانْظُرُوا
            </p>
            <p className="text-xs text-slate-400 mt-1 italic">
              &ldquo;Sesungguhnya telah berlalu sebelum kamu sunnah-sunnah (Allah); karena itu berjalanlah kamu di bumi dan perhatikanlah...&rdquo; (QS. Ali &lsquo;Imran: 137)
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#fase-3d"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
            >
              <span>✦ Jelajahi Fase 3D (Three.js)</span>
              <IconChevronRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#peta-negara"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <IconGlobe className="w-4 h-4 text-emerald-400" />
              <span>Globe &amp; Peta Sejarah</span>
            </a>

            <a
              href="#peninggalan"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <IconLandmark className="w-4 h-4 text-amber-400" />
              <span>Galeri Peninggalan</span>
            </a>

            <a
              href="#kuis"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <IconAward className="w-4 h-4 text-cyan-400" />
              <span>Kuis Interaktif</span>
            </a>
          </div>

          {/* Clean Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto">
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">8</span>
              <span className="text-[11px] text-slate-400 mt-0.5 block">Negara Kajian</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">18+</span>
              <span className="text-[11px] text-slate-400 mt-0.5 block">Peninggalan Penguasa</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">16</span>
              <span className="text-[11px] text-slate-400 mt-0.5 block">Pusat Peradaban</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-center">
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 block">100%</span>
              <span className="text-[11px] text-slate-400 mt-0.5 block">Proyek Selesai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
