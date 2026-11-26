"use client";

import React, { useState } from "react";
import {
  TEAM_MEMBERS,
  MEETING_LOGS,
  ACTIVITY_PHOTOS,
  PROJECT_METADATA,
  PROJECT_MILESTONES,
  GROUP_REFLECTIONS,
  MeetingLog
} from "@/data/projectData";
import {
  IconUsers,
  IconCheckCircle,
  IconCalendar,
  IconClock,
  IconTrendingUp,
  IconBook
} from "./Icons";

export default function GroupDocSection() {
  const [activeTab, setActiveTab] = useState<"proyek" | "anggota" | "notulensi" | "galeri" | "refleksi">("proyek");
  const [logs, setLogs] = useState<MeetingLog[]>(MEETING_LOGS);

  // Form state
  const [newAgenda, setNewAgenda] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newResults, setNewResults] = useState("");
  const [isAddingLog, setIsAddingLog] = useState(false);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgenda.trim()) return;

    const newLogItem: MeetingLog = {
      id: `log-${Date.now()}`,
      meetingNumber: logs.length + 1,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      time: "15:00 - 17:00 WIB",
      location: newLocation.trim() || "Perpustakaan Sekolah",
      agenda: newAgenda.trim(),
      results: newResults.trim()
        ? newResults.split("\n").filter(Boolean)
        : ["Tugas tambahan berhasil diselesaikan dan dicatat."],
      attendees: ["Semua Anggota Hadir"],
      status: "Selesai"
    };

    setLogs([newLogItem, ...logs]);
    setNewAgenda("");
    setNewLocation("");
    setNewResults("");
    setIsAddingLog(false);
  };

  return (
    <section id="proyek-tim" className="py-12 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium mb-2">
              <IconUsers className="w-3.5 h-3.5" />
              <span>Manajemen Proyek &amp; Dokumentasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Dokumentasi Kelompok &amp; Perkembangan Proyek
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Portofolio pengerjaan tugas besar Pendidikan Agama Islam: alur kerja tahapan, profil anggota, notulensi berkala, dan refleksi nilai.
            </p>
          </div>
        </div>

        {/* School Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Mata Pelajaran:</span>
            <span className="font-semibold text-white block mt-0.5">{PROJECT_METADATA.subject}</span>
            <span className="text-[10px] text-slate-500">{PROJECT_METADATA.grade}</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Kelompok Belajar:</span>
            <span className="font-semibold text-emerald-400 block mt-0.5">{PROJECT_METADATA.groupName}</span>
            <span className="text-[10px] text-slate-500">{PROJECT_METADATA.academicYear}</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Guru Pembimbing:</span>
            <span className="font-semibold text-white block mt-0.5">{PROJECT_METADATA.teacherName}</span>
            <span className="text-[10px] text-slate-500">Guru PAI-BP</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Status Perkembangan:</span>
            <span className="font-semibold text-emerald-400 block mt-0.5">100% Selesai</span>
            <span className="text-[10px] text-slate-500">Siap Evaluasi &amp; Presentasi</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("proyek")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === "proyek"
                ? "bg-slate-800 text-white border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <IconTrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>1. Alur Perkembangan Proyek</span>
          </button>

          <button
            onClick={() => setActiveTab("anggota")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === "anggota"
                ? "bg-slate-800 text-white border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <IconUsers className="w-3.5 h-3.5 text-teal-400" />
            <span>2. Profil 4 Anggota Tim</span>
          </button>

          <button
            onClick={() => setActiveTab("notulensi")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === "notulensi"
                ? "bg-slate-800 text-white border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <IconClock className="w-3.5 h-3.5 text-amber-400" />
            <span>3. Notulensi Kerja ({logs.length} Rapat)</span>
          </button>

          <button
            onClick={() => setActiveTab("galeri")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === "galeri"
                ? "bg-slate-800 text-white border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <IconCalendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>4. Galeri Aktivitas Belajar</span>
          </button>

          <button
            onClick={() => setActiveTab("refleksi")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === "refleksi"
                ? "bg-slate-800 text-white border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <IconBook className="w-3.5 h-3.5 text-rose-400" />
            <span>5. Refleksi &amp; Nilai PAI</span>
          </button>
        </div>

        {/* Tab 1: Perkembangan Project (Timeline 6 Tahap) */}
        {activeTab === "proyek" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROJECT_MILESTONES.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400">{m.phase}</span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <IconCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {m.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white">{m.phaseName}</h4>
                  <p className="text-[11px] text-slate-400">{m.timeline}</p>

                  <ul className="space-y-1 text-xs text-slate-300 pt-1">
                    {m.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span className="line-clamp-1">{t.taskName}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                    <span className="font-medium text-slate-300">Luaran: </span>{m.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Profil Anggota Tim */}
        {activeTab === "anggota" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto bg-slate-800 border border-slate-700">
                  <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                </div>

                <div className="text-center space-y-0.5">
                  <h4 className="text-sm font-bold text-white">{m.name}</h4>
                  <p className="text-xs font-semibold text-emerald-400">{m.role}</p>
                  <p className="text-[11px] text-slate-500 font-mono">{m.studentId}</p>
                </div>

                <p className="text-xs text-slate-300 text-center leading-relaxed">
                  {m.bio}
                </p>

                <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="font-semibold text-slate-400 block mb-1">Tugas Utama:</span>
                  <ul className="space-y-0.5 text-slate-300">
                    {m.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-emerald-400">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Notulensi Kerja */}
        {activeTab === "notulensi" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Total {logs.length} catatan musyawarah kelompok</span>
              <button
                onClick={() => setIsAddingLog(!isAddingLog)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium"
              >
                {isAddingLog ? "Tutup Form" : "+ Tambah Notulensi"}
              </button>
            </div>

            {isAddingLog && (
              <form onSubmit={handleAddLog} className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Agenda Pertemuan:</label>
                    <input
                      type="text"
                      required
                      value={newAgenda}
                      onChange={(e) => setNewAgenda(e.target.value)}
                      placeholder="Contoh: Evaluasi kesiapan kuis PAI"
                      className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Lokasi:</label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="Contoh: Lab Komputer"
                      className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Hasil Rapat:</label>
                  <textarea
                    rows={2}
                    value={newResults}
                    onChange={(e) => setNewResults(e.target.value)}
                    placeholder="Tuliskan keputusan rapat..."
                    className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded bg-emerald-600 text-white font-medium"
                  >
                    Simpan Catatan
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {logs.map((log) => (
                <div key={log.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-900 pb-2">
                    <span className="font-bold text-white text-sm">
                      #{log.meetingNumber} • {log.agenda}
                    </span>
                    <span className="text-slate-400 text-[11px]">{log.date} ({log.time}) • {log.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block mb-1">Keputusan &amp; Hasil:</span>
                    <ul className="space-y-0.5 text-slate-300">
                      {log.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-emerald-400">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Galeri Aktivitas */}
        {activeTab === "galeri" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            {ACTIVITY_PHOTOS.map((p) => (
              <div key={p.id} className="rounded-xl bg-slate-900/50 border border-slate-800 overflow-hidden text-xs">
                <div className="h-40 w-full bg-slate-900 overflow-hidden">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-3 space-y-1">
                  <span className="text-[10px] text-emerald-400 font-medium block">{p.category} • {p.date}</span>
                  <h4 className="font-bold text-white">{p.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Refleksi & Nilai PAI */}
        {activeTab === "refleksi" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs animate-in fade-in duration-200">
            {GROUP_REFLECTIONS.map((ref, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">{ref.title}</h4>
                <p className="text-slate-300 leading-relaxed">{ref.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
