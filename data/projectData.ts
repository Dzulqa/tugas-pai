export interface TeamMember {
  id: string;
  name: string;
  studentId: string;
  role: string;
  division: string;
  avatar: string;
  bio: string;
  contributions: string[];
  quote: string;
}

export interface MeetingLog {
  id: string;
  meetingNumber: number;
  date: string;
  time: string;
  location: string;
  agenda: string;
  results: string[];
  attendees: string[];
  status: "Selesai" | "Dalam Proses" | "Terjadwal";
}

export interface ActivityPhoto {
  id: string;
  title: string;
  date: string;
  category: "Riset Perpustakaan" | "Diskusi Konsep" | "Coding & Desain" | "Uji Coba Kuis" | "Simulasi Presentasi";
  description: string;
  imageUrl: string;
}

export interface ProjectMilestone {
  id: string;
  phase: string;
  phaseName: string;
  timeline: string;
  progressPercent: number;
  status: "Selesai" | "Sedang Berjalan" | "Siap Evaluasi";
  tasks: { taskName: string; completed: boolean }[];
  deliverables: string;
  notes: string;
}

export const PROJECT_METADATA = {
  schoolName: "SMA / MA Negeri Unggulan",
  subject: "Pendidikan Agama Islam dan Budi Pekerti (PAI-BP)",
  grade: "Kelas 12 RPL 2 / Kurikulum Merdeka",
  academicYear: "Tahun Ajaran 2026/2027",
  teacherName: "Pak Rofiq",
  groupName: "Ahmad Hilbram Dzulqa (12 RPL 2)",
  projectTitle: "Portal Ensiklopedia Digital Sejarah & Warisan Peradaban Islam Dunia",
  summaryDescription: "Aplikasi pembelajaran berbasis web interaktif yang menyajikan kompilasi komprehensif sejarah masuknya Islam ke berbagai belahan dunia, katalog peninggalan penguasa terdahulu, peta sebaran dinasti, pusat-pusat peradaban, modul kuis gamifikasi, dan portofolio karya mandiri."
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Ahmad Hilbram Dzulqa",
    studentId: "Kelas 12 RPL 2",
    role: "Pengembang Web & Peneliti Mandiri",
    division: "Fullstack Next.js, Three.js 3D & UI/UX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Mengembangkan portal ensiklopedia digital PAI secara mandiri mencakup visualisasi Globe 3D Three.js, kurasi data sejarah 8 negara, katalog 24 peninggalan bersejarah, dan modul kuis interaktif.",
    contributions: [
      "Arsitektur Fullstack Next.js & Pemrograman 3D Three.js (Globe & Objek Sejarah)",
      "Riset komprehensif sejarah masuknya Islam & kurasi 24 peninggalan bersejarah",
      "Perancangan modul kuis PAI, piagam interaktif, dan optimasi responsif mobile/tablet"
    ],
    quote: "Belajar sejarah peradaban Islam membuka cakrawala dan memperkuat fondasi keimanan serta akhlak mulia."
  }
];

export const MEETING_LOGS: MeetingLog[] = [
  {
    id: "log-1",
    meetingNumber: 1,
    date: "10 Oktober 2026",
    time: "14:00 - 16:30 WIB",
    location: "Ruang Diskusi Perpustakaan Sekolah",
    agenda: "Brainstorming Tema Proyek Mandiri PAI, Konsultasi Guru, dan Penentuan 8 Negara Kajian",
    results: [
      "Menyepakati judul proyek: 'Ensiklopedia Digital Peradaban Islam Dunia & Nusantara'.",
      "Memilih 8 negara representatif: Indonesia, Arab Saudi, Turki, Spanyol, Mesir, India, China, dan Palestina.",
      "Konsultasi awal dengan Pak Rofiq mengenai format penyajian digital dan kurasi literatur sejarah."
    ],
    attendees: ["Ahmad Hilbram Dzulqa"],
    status: "Selesai"
  },
  {
    id: "log-2",
    meetingNumber: 2,
    date: "17 Oktober 2026",
    time: "15:00 - 17:00 WIB",
    location: "Lab Komputer Sekolah",
    agenda: "Pemeriksaan Validitas Literatur Buku Sumber dan Inventarisasi Peninggalan Sejarah",
    results: [
      "Mengumpulkan 8 buku babon sejarah Islam (Dr. Badri Yatim, Carl Brockelmann, dll).",
      "Menyusun tabel 24 peninggalan penguasa terdahulu (Masjid Demak, Alhambra, Topkapi, Taj Mahal, Al-Azhar).",
      "Mengumpulkan data statistik perkembangan umat Islam kontemporer dari lembaga resmi."
    ],
    attendees: ["Ahmad Hilbram Dzulqa"],
    status: "Selesai"
  },
  {
    id: "log-3",
    meetingNumber: 3,
    date: "24 Oktober 2026",
    time: "13:30 - 16:00 WIB",
    location: "Lab Komputer & Ruang Belajar Mandiri",
    agenda: "Pembangunan Struktur Kode Next.js, Styling Tailwind CSS, dan Pemrograman Three.js",
    results: [
      "Membuat layout responsif dengan tema deep emerald dan aksen emas klasik.",
      "Mengembangkan visualisasi Globe 3D Three.js dan model 3D Ka'bah interaktif.",
      "Menyusun data JSON terstruktur untuk negara, peninggalan, dan pusat peradaban."
    ],
    attendees: ["Ahmad Hilbram Dzulqa"],
    status: "Selesai"
  },
  {
    id: "log-4",
    meetingNumber: 4,
    date: "31 Oktober 2026",
    time: "14:00 - 16:30 WIB",
    location: "Lab Komputer Sekolah",
    agenda: "Pembuatan Modul Kuis Gamifikasi, Pembahasan Soal, dan Fitur Sertifikat",
    results: [
      "Menulis 12 butir soal kuis dengan 3 tingkatan kesulitan dan 4 kategori materi PAI.",
      "Membuat sistem kalkulasi skor instan, review jawaban, dan visualisasi penjelasan.",
      "Merancang fitur cetak sertifikat piagam kelulusan kuis untuk pengguna."
    ],
    attendees: ["Ahmad Hilbram Dzulqa"],
    status: "Selesai"
  },
  {
    id: "log-5",
    meetingNumber: 5,
    date: "07 November 2026",
    time: "15:00 - 17:00 WIB",
    location: "Ruang Kelas 12 RPL 2 & Lab Komputer",
    agenda: "Finalisasi Dokumentasi Proyek, Uji Coba Responsif Lintas Perangkat, & Konsultasi Akhir",
    results: [
      "Uji coba tampilan di layar smartphone, tablet, dan laptop tanpa glitch.",
      "Pemeriksaan akhir daftar pustaka dan sitasi karya tulis ilmiah PAI.",
      "Pengecekan final bersama Pak Rofiq untuk kesiapan penilaian proyek."
    ],
    attendees: ["Ahmad Hilbram Dzulqa"],
    status: "Selesai"
  }
];

export const ACTIVITY_PHOTOS: ActivityPhoto[] = [
  {
    id: "act-1",
    title: "Riset Literatur Buku Sejarah di Perpustakaan",
    date: "10 Okt 2026",
    category: "Riset Perpustakaan",
    description: "Menelaah buku Sejarah Peradaban Islam karangan Dr. Badri Yatim dan Atlas Sejarah Islam.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-2",
    title: "Konsultasi & Perumusan Konsep Materi",
    date: "17 Okt 2026",
    category: "Diskusi Konsep",
    description: "Konsultasi materi sejarah peradaban Islam dan kurasi peninggalan para khalifah dan sultan terdahulu.",
    imageUrl: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-3",
    title: "Sesi Koding Next.js & Pemrograman 3D Three.js",
    date: "24 Okt 2026",
    category: "Coding & Desain",
    description: "Implementasi antarmuka modern dengan Tailwind CSS, visualisasi Globe 3D interaktif, dan animasi 3D.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-4",
    title: "Uji Coba & Kalibrasi Soal Kuis PAI",
    date: "31 Okt 2026",
    category: "Uji Coba Kuis",
    description: "Melakukan playtest kuis interaktif bersama rekan siswa kelas 12 untuk menguji ketepatan timer dan skor.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  }
];

export const PROJECT_MILESTONES: ProjectMilestone[] = [
  {
    id: "m-1",
    phase: "Tahap 1",
    phaseName: "Perencanaan Proyek & Pemilihan Topik",
    timeline: "Minggu 1 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Perumusan rencana proyek mandiri PAI", completed: true },
      { taskName: "Penentuan judul dan ruang lingkup materi", completed: true },
      { taskName: "Konsultasi awal dengan Pak Rofiq (Guru PAI)", completed: true }
    ],
    deliverables: "Proposal Singkat Rencana Proyek PAI",
    notes: "Topik disetujui penuh oleh Pak Rofiq dengan arahan menambahkan visualisasi interaktif dan peninggalan sejarah."
  },
  {
    id: "m-2",
    phase: "Tahap 2",
    phaseName: "Riset Literatur & Verifikasi Fakta Sejarah",
    timeline: "Minggu 2 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Pengumpulan buku babon sejarah Islam", completed: true },
      { taskName: "Verifikasi tahun peristiwa dan nama tokoh", completed: true },
      { taskName: "Inventarisasi 8 negara representatif", completed: true }
    ],
    deliverables: "Draft Dokumen Narasi Sejarah & Pustaka",
    notes: "Data diverifikasi menggunakan sumber ensiklopedia Kemenag dan literatur sejarawan terpercaya."
  },
  {
    id: "m-3",
    phase: "Tahap 3",
    phaseName: "Perancangan UI/UX & Pemrograman 3D",
    timeline: "Minggu 3 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Wireframing struktur web responsif", completed: true },
      { taskName: "Penyusunan palet warna emerald gold Islami", completed: true },
      { taskName: "Pengembangan modul Globe 3D Three.js interaktif", completed: true }
    ],
    deliverables: "Komponen Frontend 3D & Navigasi",
    notes: "Globe 3D mendukung interaksi rotasi, zoom, dan penyorotan negara dengan tekstur realistis."
  },
  {
    id: "m-4",
    phase: "Tahap 4",
    phaseName: "Pengembangan Modul Kuis & Gamifikasi",
    timeline: "Minggu 4 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Perumusan 12 soal berbobot kurikulum PAI", completed: true },
      { taskName: "Penambahan logika evaluasi dan penjelasan", completed: true },
      { taskName: "Perancangan sertifikat piagam kelulusan", completed: true }
    ],
    deliverables: "Modul Kuis Interaktif Siap Main",
    notes: "Kuis berhasil diuji dengan feedback langsung pada setiap jawaban benar/salah."
  },
  {
    id: "m-5",
    phase: "Tahap 5",
    phaseName: "Dokumentasi Lengkap, Pengujian, & QA",
    timeline: "Minggu 5 (Nov 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Penyusunan log catatan kerja & dokumentasi", completed: true },
      { taskName: "Penyusunan daftar referensi & sitasi ilmiah", completed: true },
      { taskName: "Pengujian responsif mobile, tablet, laptop", completed: true }
    ],
    deliverables: "Dokumentasi Portofolio Mandiri & Web Live",
    notes: "Aplikasi 100% responsif dan teruji tanpa error kompilasi Next.js."
  },
  {
    id: "m-6",
    phase: "Tahap 6",
    phaseName: "Presentasi Kelas & Evaluasi Guru",
    timeline: "Minggu 6 (Nov 2026)",
    progressPercent: 100,
    status: "Siap Evaluasi",
    tasks: [
      { taskName: "Penyusunan paparan presentasi ringkas", completed: true },
      { taskName: "Gladi bersih alur demonstrasi aplikasi", completed: true },
      { taskName: "Siap presentasi dan demo langsung di kelas", completed: true }
    ],
    deliverables: "Paparan Presentasi & Demonstrasi Web",
    notes: "Ahmad Hilbram Dzulqa siap memaparkan karya di depan kelas dan Pak Rofiq sebagai guru penilai."
  }
];

export const GROUP_REFLECTIONS = [
  {
    title: "Pentingnya Meneladani Adab & Keilmuan",
    content: "Melalui proses perancangan proyek mandiri ini, saya belajar bahwa keberhasilan peradaban Islam masa lampau dibangun di atas keteguhan iman, persaudaraan yang kokoh (ukhuwah), dan adab terhadap ilmu serta bimbingan guru. Sikap pantang menyerah dan ketelitian sangat dibutuhkan dalam menyusun karya edukatif ini."
  },
  {
    title: "Menatap Masa Depan dengan Spirit Risalah",
    content: "Mempelajari bagaimana Islam menyebar secara damai ke Nusantara melalui pendekatan kultural mengajarkan kita bahwa dakwah terbaik adalah keteladanan akhlak (uswatun hasanah), kejujuran, dan keterbukaan terhadap kemajuan sains teknologi modern tanpa kehilangan jati diri tauhid."
  }
];
