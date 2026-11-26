"use client";

import React, { useState, useEffect } from "react";
import { COUNTRIES_DATA } from "@/data/islamicData";
import {
  IconSearch,
  IconX,
  IconChevronRight
} from "./Icons";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (countryId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectCountry
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const searchResults: {
    type: "Negara" | "Peninggalan" | "Pusat Islam";
    title: string;
    subtitle: string;
    countryId: string;
    sectionId: string;
  }[] = [];

  const lowerQuery = query.toLowerCase().trim();

  if (lowerQuery.length > 0) {
    COUNTRIES_DATA.forEach((country) => {
      if (
        country.name.toLowerCase().includes(lowerQuery) ||
        country.region.toLowerCase().includes(lowerQuery) ||
        country.summary.toLowerCase().includes(lowerQuery)
      ) {
        searchResults.push({
          type: "Negara",
          title: `${country.flag} ${country.name}`,
          subtitle: `Sejarah masuk & perkembangan di kawasan ${country.region}`,
          countryId: country.id,
          sectionId: "peta-negara"
        });
      }

      country.pastHeritage.forEach((heritage) => {
        if (
          heritage.name.toLowerCase().includes(lowerQuery) ||
          heritage.rulerOrDynasty.toLowerCase().includes(lowerQuery) ||
          heritage.location.toLowerCase().includes(lowerQuery)
        ) {
          searchResults.push({
            type: "Peninggalan",
            title: heritage.name,
            subtitle: `Dibangun oleh ${heritage.rulerOrDynasty} (${heritage.location})`,
            countryId: country.id,
            sectionId: "peninggalan"
          });
        }
      });

      country.islamicCenters.forEach((center) => {
        if (
          center.name.toLowerCase().includes(lowerQuery) ||
          center.city.toLowerCase().includes(lowerQuery)
        ) {
          searchResults.push({
            type: "Pusat Islam",
            title: center.name,
            subtitle: `${center.type} di ${center.city}, ${country.name.split(" ")[0]}`,
            countryId: country.id,
            sectionId: "pusat"
          });
        }
      });
    });
  }

  const handleSelectResult = (item: typeof searchResults[0]) => {
    onSelectCountry(item.countryId);
    onClose();
    const elem = document.getElementById(item.sectionId);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-6 sm:pt-16 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col">
        <div className="flex items-center px-4 border-b border-slate-800">
          <IconSearch className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari negara, tokoh, peninggalan..."
            className="w-full px-3 py-3 bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
            <IconX className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {query.trim().length === 0 ? (
            <div className="p-5 text-center text-xs text-slate-400">
              Ketikkan pencarian, misalnya: &ldquo;Indonesia&rdquo;, &ldquo;Alhambra&rdquo;, &ldquo;Demak&rdquo;, atau &ldquo;Al-Azhar&rdquo;.
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-5 text-center text-xs text-slate-400">
              Tidak ada hasil yang cocok dengan &ldquo;{query}&rdquo;.
            </div>
          ) : (
            searchResults.slice(0, 7).map((res, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectResult(res)}
                className="w-full p-2.5 rounded-lg hover:bg-slate-800 text-left transition-colors flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                      {res.type}
                    </span>
                    <span className="font-semibold text-white">{res.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 pl-1">{res.subtitle}</p>
                </div>
                <IconChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            ))
          )}
        </div>

        <div className="px-3.5 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tekan ESC untuk keluar</span>
          <span>PAI Kelas XII • Kelompok 3</span>
        </div>
      </div>
    </div>
  );
}
