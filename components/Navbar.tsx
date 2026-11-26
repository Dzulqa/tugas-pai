"use client";

import React, { useState } from "react";
import {
  IconMosque,
  IconMenu,
  IconX,
  IconSearch
} from "./Icons";

interface NavbarProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenSearch, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#fase-3d", label: "Fase 3D" },
    { href: "#peta-negara", label: "Peta & Sejarah" },
    { href: "#peninggalan", label: "Peninggalan" },
    { href: "#pusat", label: "Pusat Peradaban" },
    { href: "#kuis", label: "Kuis PAI" },
    { href: "#proyek-tim", label: "Proyek & Tim" },
    { href: "#sumber", label: "Daftar Pustaka" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Subject Tag */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600/30 transition-colors">
              <IconMosque className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-100 tracking-tight">
                  Tunas Peradaban Islam
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Ensiklopedia Digital & Media Pembelajaran
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "text-emerald-400 bg-emerald-950/50 border border-emerald-800/40"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-2 transition-colors"
              title="Cari materi"
            >
              <IconSearch className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline text-slate-400">Cari materi...</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
