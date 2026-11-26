"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CountryExplorer from "@/components/CountryExplorer";
import HeritageGallery from "@/components/HeritageGallery";
import IslamicCentersShowcase from "@/components/IslamicCentersShowcase";
import QuizSection from "@/components/QuizSection";
import GroupDocSection from "@/components/GroupDocSection";
import SourcesSection from "@/components/SourcesSection";
import Footer from "@/components/Footer";
import DetailModal from "@/components/DetailModal";
import SearchModal from "@/components/SearchModal";
import ThreeScrollCanvas from "@/components/ThreeScrollCanvas";
import ThreeScrollExperience from "@/components/ThreeScrollExperience";
import { HeritageItem } from "@/data/islamicData";

export default function Home() {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("indonesia");
  const [detailModalItem, setDetailModalItem] = useState<HeritageItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("peta-negara");

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "fase-3d",
        "peta-negara",
        "peninggalan",
        "pusat",
        "kuis",
        "proyek-tim",
        "sumber",
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      {/* 3D Celestial Astrolabe & Constellation Scroll Canvas (Three.js) */}
      <ThreeScrollCanvas />

      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Editorial Hero */}
        <Hero />

        {/* Interactive 3D Scroll Journey: Text moves and 3D artifacts emerge! */}
        <div id="fase-3d">
          <ThreeScrollExperience />
        </div>

        {/* Unified Map & 8-Country Deep Exploration */}
        <CountryExplorer
          selectedCountryId={selectedCountryId}
          onSelectCountryId={(id) => setSelectedCountryId(id)}
          onOpenHeritageModal={(item) => setDetailModalItem(item)}
        />

        {/* Global Relics & Heritage Gallery */}
        <HeritageGallery
          onOpenDetailModal={(item) => setDetailModalItem(item)}
        />

        {/* Grand Islamic Centers & Universities */}
        <IslamicCentersShowcase />

        {/* Gamified PAI Educational Quiz */}
        <QuizSection />

        {/* Unified Project Tracker & Group Documentation */}
        <GroupDocSection />

        {/* Academic References & Citations */}
        <SourcesSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Detailed Modal for Historical Relics */}
      <DetailModal
        item={detailModalItem}
        onClose={() => setDetailModalItem(null)}
      />

      {/* Quick Search Dialog (Ctrl + K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCountry={(id) => setSelectedCountryId(id)}
      />
    </div>
  );
}
