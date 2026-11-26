"use client";

import React, { useState, useEffect } from "react";
import { QUIZ_QUESTIONS, QuizQuestion } from "@/data/quizData";
import {
  IconAward,
  IconCheckCircle,
  IconXCircle,
  IconClock,
  IconRefreshCw,
  IconPrinter
} from "./Icons";

export default function QuizSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Kategori");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("");
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(30);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(false);

  const categories = [
    "Semua Kategori",
    "Sejarah Masuk",
    "Peninggalan Penguasa",
    "Pusat Peradaban",
    "Islam Kontemporer",
  ];

  const filteredQuestions = selectedCategory === "Semua Kategori"
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentQuestionIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerEnabled && !isAnswerSubmitted && !quizFinished && currentQ) {
      if (timerSeconds > 0) {
        interval = setInterval(() => {
          setTimerSeconds((prev) => prev - 1);
        }, 1000);
      } else {
        handleOptionSelect(-1);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerEnabled, timerSeconds, isAnswerSubmitted, quizFinished, currentQ]);

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted || !currentQ) return;

    setSelectedAnswer(index);
    setIsAnswerSubmitted(true);

    const isCorrect = index === currentQ.correctAnswer;
    if (isCorrect) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setTimerSeconds(30);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
    setShowCertificate(false);
    setTimerSeconds(30);
  };

  const percentageScore = filteredQuestions.length > 0
    ? Math.round((score / filteredQuestions.length) * 100)
    : 0;

  const getGradeTier = (pct: number) => {
    if (pct >= 85) return { title: "Mumtaz (Istimewa)", desc: "Maa Syaa Allah! Penguasaan materi sejarah dan peradaban Islam Anda sangat baik." };
    if (pct >= 70) return { title: "Jayyid Jiddan (Sangat Baik)", desc: "Alhamdulillah! Anda memahami materi pokok dengan baik." };
    if (pct >= 55) return { title: "Jayyid (Cukup)", desc: "Bagus! Masih ada beberapa materi yang dapat diperdalam kembali." };
    return { title: "Perlu Muraja'ah", desc: "Silakan telaah kembali rangkuman sejarah dan coba kuis lagi." };
  };

  const grade = getGradeTier(percentageScore);

  return (
    <section id="kuis" className="py-12 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-xs font-medium">
            <IconAward className="w-3.5 h-3.5" />
            <span>Evaluasi Pembelajaran Mandiri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Perancangan Kuis Interaktif PAI
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Uji pemahaman materi sejarah masuknya Islam, dinasti penguasa, peninggalan bersejarah, dan perkembangan kontemporer.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-5 sm:p-6 space-y-5">
          {!quizFinished && (
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Kategori:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentQuestionIndex(0);
                    setSelectedAnswer(null);
                    setIsAnswerSubmitted(false);
                    setScore(0);
                  }}
                  className="bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-slate-200 focus:outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTimerEnabled(!timerEnabled)}
                  className={`px-2.5 py-1 rounded border transition-colors flex items-center gap-1 text-[11px] font-medium ${
                    timerEnabled
                      ? "bg-amber-950/60 text-amber-300 border-amber-800"
                      : "bg-slate-950 text-slate-400 border-slate-800"
                  }`}
                >
                  <IconClock className="w-3 h-3" />
                  <span>{timerEnabled ? `Timer: ${timerSeconds}s` : "Mode Santai"}</span>
                </button>

                <div className="text-slate-300">
                  Skor: <strong className="text-white">{score}</strong>
                  {streak > 1 && (
                    <span className="ml-2 text-emerald-400 font-bold">({streak}x Benar)</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Active Question */}
          {!quizFinished && currentQ && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Soal {currentQuestionIndex + 1} dari {filteredQuestions.length}</span>
                <span className="text-[11px] text-slate-500">{currentQ.category} • {currentQ.difficulty}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed pt-1">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2 pt-2">
                {currentQ.options.map((opt, idx) => {
                  let style = "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white";
                  const isCorrect = idx === currentQ.correctAnswer;
                  const isSelected = selectedAnswer === idx;

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      style = "bg-emerald-950/70 border-emerald-600 text-emerald-200 font-medium";
                    } else if (isSelected && !isCorrect) {
                      style = "bg-rose-950/70 border-rose-600 text-rose-200 font-medium";
                    } else {
                      style = "bg-slate-950/40 text-slate-500 border-slate-900";
                    }
                  }

                  const alphabet = ["A", "B", "C", "D"][idx];

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleOptionSelect(idx)}
                      className={`w-full p-3 rounded-lg border text-left text-xs transition-colors flex items-center gap-2.5 ${style}`}
                    >
                      <span className="w-5 h-5 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {alphabet}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswerSubmitted && (
                <div
                  className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-1 ${
                    selectedAnswer === currentQ.correctAnswer
                      ? "bg-emerald-950/30 border-emerald-800 text-emerald-300"
                      : "bg-slate-950 border-slate-800 text-slate-300"
                  }`}
                >
                  <p className="font-semibold text-white">
                    {selectedAnswer === currentQ.correctAnswer ? "✓ Jawaban Tepat!" : "✕ Jawaban Kurang Tepat"}
                  </p>
                  <p className="text-slate-300">
                    <strong>Penjelasan: </strong>{currentQ.explanation}
                  </p>
                </div>
              )}

              {isAnswerSubmitted && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                  >
                    {currentQuestionIndex + 1 < filteredQuestions.length ? "Soal Selanjutnya →" : "Lihat Nilai Akhir"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Result Screen */}
          {quizFinished && !showCertificate && (
            <div className="text-center space-y-4 py-4">
              <span className="text-xs text-slate-400 uppercase font-medium">Hasil Kuis</span>
              <h3 className="text-2xl font-bold text-white">Evaluasi Pembelajaran Selesai</h3>
              <p className="text-sm font-semibold text-emerald-400">{grade.title}</p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">{grade.desc}</p>

              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto py-3">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Nilai</span>
                  <span className="text-lg font-bold text-white">{percentageScore}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Benar</span>
                  <span className="text-lg font-bold text-emerald-400">{score}/{filteredQuestions.length}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Streak</span>
                  <span className="text-lg font-bold text-amber-400">{maxStreak}x</span>
                </div>
              </div>

              <div className="max-w-xs mx-auto text-left space-y-1">
                <label className="text-[11px] text-slate-400 block">Nama Lengkap (untuk sertifikat):</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ketik nama Anda..."
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setShowCertificate(true)}
                  disabled={!studentName.trim()}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    studentName.trim()
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Lihat Piagam Sertifikat
                </button>
                <button
                  onClick={handleRestartQuiz}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Ulangi Kuis
                </button>
              </div>
            </div>
          )}

          {/* Certificate */}
          {quizFinished && showCertificate && (
            <div className="space-y-4 py-2">
              <div className="bg-slate-950 p-4 sm:p-8 rounded-xl border border-slate-700 text-center space-y-3">
                <p className="text-xs text-slate-400 tracking-wider uppercase font-medium">
                  SEKOLAH MENENGAH ATAS / MADRASAH ALIYAH
                </p>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide">
                  PIAGAM HASIL BELAJAR PAI-BP
                </h4>
                <p className="text-xs text-slate-500">Materi: Sejarah &amp; Peradaban Islam Dunia</p>

                <div className="py-4 border-y border-slate-800 max-w-md mx-auto">
                  <p className="text-xs text-slate-400">Diberikan kepada:</p>
                  <p className="text-lg font-bold text-emerald-400 font-serif mt-1">{studentName}</p>
                  <p className="text-xs text-slate-300 mt-2">
                    Telah menyelesaikan evaluasi pembelajaran mandiri dengan capaian nilai:
                  </p>
                  <p className="text-base font-bold text-white mt-1">
                    {percentageScore}/100 • Predikat: {grade.title}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 max-w-md mx-auto">
                  <div className="text-left">
                    <p>Guru Pembimbing:</p>
                    <p className="font-semibold text-slate-200 mt-3">Ust. Drs. H. Ahmad Fauzi, M.Pd.I</p>
                  </div>
                  <div className="text-right">
                    <p>Kelompok 3 (Al-Farabi):</p>
                    <p className="font-semibold text-slate-200 mt-3">M. Rayhan Pratama</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <IconPrinter className="w-3.5 h-3.5" />
                  <span>Cetak Piagam (PDF)</span>
                </button>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Kembali
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
