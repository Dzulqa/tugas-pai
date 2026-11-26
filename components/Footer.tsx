"use client";

import React from "react";
import {
  IconMosque,
  IconChevronRight
} from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <IconMosque className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-white">
                Tunas Peradaban Islam
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Portal ensiklopedia sejarah dan media pembelajaran interaktif tugas Pendidikan Agama Islam dan Budi Pekerti (PAI-BP) Kelas XII (Fase F Kurikulum Merdeka).
            </p>
            <p className="text-[11px] text-slate-500">
              Dibangun dengan Next.js 16 &amp; Tailwind CSS.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-1.5">
            <span className="font-semibold text-white block text-xs uppercase tracking-wider">
              Navigasi Halaman
            </span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#peta-negara" className="hover:text-white transition-colors">Peta &amp; Sejarah Negara</a></li>
              <li><a href="#peninggalan" className="hover:text-white transition-colors">Galeri Peninggalan</a></li>
              <li><a href="#pusat" className="hover:text-white transition-colors">Pusat-Pusat Peradaban</a></li>
              <li><a href="#kuis" className="hover:text-white transition-colors">Kuis Interaktif PAI</a></li>
              <li><a href="#proyek-tim" className="hover:text-white transition-colors">Proyek &amp; Tim</a></li>
              <li><a href="#sumber" className="hover:text-white transition-colors">Daftar Pustaka</a></li>
            </ul>
          </div>

          {/* Team Info */}
          <div className="space-y-1.5">
            <span className="font-semibold text-white block text-xs uppercase tracking-wider">
              Identitas Pengembang
            </span>
            <p className="text-slate-300">
              <strong>Pembuat:</strong> Ahmad Hilbram Dzulqa (Kelas 12 RPL 2)
            </p>
            <p className="text-[11px] text-slate-500 pt-1">
              Guru Pembimbing: Pak Rofiq
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs transition-colors border border-slate-800"
            >
              Kembali ke Atas ↑
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Tunas Peradaban Islam • Tugas Besar Pendidikan Agama Islam dan Budi Pekerti.</p>
          <p>Kajian Sejarah Masuknya Islam, Peninggalan Dinasti &amp; Perkembangan Modern</p>
        </div>
      </div>
    </footer>
  );
}
