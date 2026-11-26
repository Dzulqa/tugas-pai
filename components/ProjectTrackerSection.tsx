"use client";

import React, { useState } from "react";
import { PROJECT_MILESTONES, PROJECT_METADATA } from "@/data/projectData";
import {
  IconTrendingUp,
  IconCheckCircle,
  IconClock,
  IconSparkles,
  IconCalendar,
  IconAward
} from "./Icons";

export default function ProjectTrackerSection() {
  const [selectedMilestone, setSelectedMilestone] = useState(PROJECT_MILESTONES[0]);

  return (
    <section id="proyek" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-medium mb-2">
              <IconTrendingUp className="w-3.5 h-3.5 text-teal-400" />
              <span>Manajemen & Alur Kerja Penugasan PAI</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Perkembangan Project & Timeline Rilis
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Transparansi progres pengerjaan website penugasan kelompok dari tahap perencanaan, riset literatur, pengembangan fitur, hingga kesiapan evaluasi guru.
            </p>
          </div>

          {/* Overall Progress Badge */}
          <div className="bg-slate-900/90 border border-emerald-900/50 p-4 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-lg">
              100%
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Status Kelompok
              </span>
              <span className="text-xs font-semibold text-emerald-300">
                Semua Tahap Selesai (Siap Dinilai)
              </span>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {PROJECT_MILESTONES.map((m) => {
            const isSelected = selectedMilestone.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMilestone(m)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-slate-900 to-emerald-950/40 border-emerald-500 shadow-xl shadow-emerald-950"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                      {m.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                      <IconCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {m.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {m.phaseName}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                    <IconCalendar className="w-3 h-3 text-slate-500" />
                    <span>{m.timeline}</span>
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-950 my-3 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${m.progressPercent}%` }}
                    />
                  </div>

                  {/* Tasks preview */}
                  <ul className="text-xs text-slate-300 space-y-1 mt-2">
                    {m.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-slate-400">
                        <span className="text-emerald-400 font-bold text-[10px]">✓</span>
                        <span className="line-clamp-1">{t.taskName}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Luaran:</span>
                  <span className="font-semibold text-slate-200">{m.deliverables}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Milestone Detail Spotlight Box */}
        <div className="bg-slate-900/90 rounded-2xl border border-emerald-900/50 p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Rincian Tahapan: {selectedMilestone.phase}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {selectedMilestone.phaseName}
              </h3>
            </div>
            <span className="text-xs text-slate-400 italic">
              Periode Pengerjaan: {selectedMilestone.timeline}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                Daftar Aktivitas & Sub-Tugas
              </h4>
              <div className="space-y-2">
                {selectedMilestone.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-200">{task.taskName}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <IconCheckCircle className="w-4 h-4 text-emerald-400" />
                      Selesai
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                Luaran (Deliverable) & Catatan Guru Pembimbing
              </h4>
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-slate-400 block font-medium">Hasil Akhir Tahap Ini:</span>
                  <p className="text-emerald-300 font-semibold mt-0.5">
                    {selectedMilestone.deliverables}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-900">
                  <span className="text-slate-400 block font-medium">Catatan Review:</span>
                  <p className="text-slate-300 mt-0.5 italic">
                    &ldquo;{selectedMilestone.notes}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
