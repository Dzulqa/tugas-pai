"use client";

import React from "react";
import { HeritageItem } from "@/data/islamicData";
import {
  IconX,
  IconMapPin
} from "./Icons";

interface DetailModalProps {
  item: HeritageItem | null;
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden z-10 max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-40 sm:h-52 w-full bg-slate-950 shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          >
            <IconX className="w-4 h-4" />
          </button>
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950/90 text-slate-200 border border-slate-800">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">
          <div>
            <h3 className="text-lg font-bold text-white">
              {item.name}
            </h3>
            <p className="text-amber-400 font-medium mt-0.5 flex items-center gap-1.5">
              <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{item.location} • Didirikan: {item.yearBuilt}</span>
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Penguasa / Dinasti Pembina:</span>
            <span className="text-sm font-semibold text-white block mt-0.5">
              {item.rulerOrDynasty}
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-slate-300 uppercase text-[11px] tracking-wider">
              Uraian Sejarah
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <h4 className="font-semibold text-amber-300 text-[11px]">
              Ciri Khas &amp; Keunikan Arsitektur:
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {item.architecturalFeatures}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <h4 className="font-semibold text-emerald-400 text-[11px]">
              Signifikansi bagi Peradaban:
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {item.significance}
            </p>
          </div>
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
