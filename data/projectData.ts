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
  grade: "Kelas XII (Fase F) / Kurikulum Merdeka",
  academicYear: "Tahun Ajaran 2026/2027",
  teacherName: "Ust. Drs. H. Ahmad Fauzi, M.Pd.I",
  groupName: "Kelompok 3 - Al-Farabi",
  projectTitle: "Portal Ensiklopedia Digital Sejarah & Warisan Peradaban Islam Dunia",
  summaryDescription: "Aplikasi pembelajaran berbasis web interaktif yang menyajikan kompilasi komprehensif sejarah masuknya Islam ke berbagai belahan dunia, katalog peninggalan penguasa terdahulu, peta sebaran dinasti, pusat-pusat peradaban, modul kuis gamifikasi, dan portofolio kerja kelompok."
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Muhammad Rayhan Pratama",
    studentId: "NISN: 0068192341",
    role: "Ketua Kelompok & Lead Architect",
    division: "Manajemen Proyek & Fullstack Next.js",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    bio: "Bertanggung jawab atas koordinasi alur kerja kelompok, arsitektur Next.js 16, integrasi sistem peta, dan finalisasi rilis aplikasi.",
    contributions: [
      "Inisialisasi repo & konfigurasi Turbopack Next.js",
      "Perancangan modul peta interaktif & alur navigasi",
      "Penyusunan laporan bab dokumentasi & kesimpulan"
    ],
    quote: "Menuntut ilmu adalah jalan menuju surga; teknologi adalah sarana menyebarkan kebaikannya."
  },
  {
    id: "member-2",
    name: "Aisyah Nur Salsabila",
    studentId: "NISN: 0069384720",
    role: "Koordinator Riset Konten Sejarah",
    division: "Kurasi Data & Verifikasi Literatur",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    bio: "Fokus pada studi literatur sejarah masuknya Islam di 8 negara, validasi peninggalan para penguasa terdahulu, dan kompilasi sumber rujukan terpercaya.",
    contributions: [
      "Riset mendalam sejarah masuknya Islam & Dinasti Utsmaniyah/Andalusia",
      "Kurasi data arsitektur peninggalan kuno & pusat peradaban",
      "Penyusunan daftar pustaka berstandar akademik"
    ],
    quote: "Mengenal sejarah peradaban Islam membangkitkan kebanggaan iman dan semangat toleransi."
  },
  {
    id: "member-3",
    name: "Faris Zaidan Al-Ghifari",
    studentId: "NISN: 0064928173",
    role: "UI/UX & Desain Grafis",
    division: "Front-end Styling & Aset Visual",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "Merancang identitas visual, ornamen Islami, tata letak responsif, kartu peninggalan sejarah, dan sertifikat kelulusan kuis.",
    contributions: [
      "Perancangan palet warna Zamrud & Emas Islami",
      "Desain kartu peninggalan & layout modul responsif",
      "Pembuatan template sertifikat piagam kuis PAI"
    ],
    quote: "Keindahan seni rupa Islam mencerminkan kesempurnaan ciptaan Ilahi."
  },
  {
    id: "member-4",
    name: "Nabila Zahra Syahrani",
    studentId: "NISN: 0067419825",
    role: "Penyusun Modul Kuis & Notulensi",
    division: "Gamifikasi Edukasi & Dokumentasi",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    bio: "Merumuskan bank soal kuis edukatif berbasis capaian pembelajaran PAI, kunci jawaban dan pembahasan, serta mencatat log notulensi setiap rapat kerja.",
    contributions: [
      "Penyusunan 12 soal kuis beserta penjelasan historis",
      "Pencatatan log pertemuan kelompok dan agenda mingguan",
      "Penyusunan lembar refleksi ukhuwah & adab kelompok"
    ],
    quote: "Evaluasi terbaik adalah saat kita memahami hikmah di balik peristiwa masa lampau."
  }
];

export const MEETING_LOGS: MeetingLog[] = [
  {
    id: "log-1",
    meetingNumber: 1,
    date: "10 Oktober 2026",
    time: "14:00 - 16:30 WIB",
    location: "Ruang Diskusi Perpustakaan Sekolah",
    agenda: "Brainstorming Tema Proyek PAI, Pembagian Peran, dan Penentuan Negara Kajian",
    results: [
      "Menyepakati judul proyek: 'Ensiklopedia Digital Peradaban Islam Dunia & Nusantara'.",
      "Memilih 8 negara representatif: Indonesia, Arab Saudi, Turki, Spanyol, Mesir, India, China, dan Palestina.",
      "Membagi penugasan 4 anggota (Ketua, Peneliti Konten, Desainer UI, Dokumentator Kuis)."
    ],
    attendees: ["Rayhan", "Aisyah", "Faris", "Nabila"],
    status: "Selesai"
  },
  {
    id: "log-2",
    meetingNumber: 2,
    date: "17 Oktober 2026",
    time: "15:00 - 17:00 WIB",
    location: "Lab Komputer & Daring Google Meet",
    agenda: "Pemeriksaan Validitas Literatur Buku Sumber dan Inventarisasi Peninggalan Sejarah",
    results: [
      "Mengumpulkan 8 buku babon sejarah Islam (Dr. Badri Yatim, Carl Brockelmann, dll).",
      "Menyusun tabel peninggalan penguasa terdahulu (Masjid Demak, Alhambra, Topkapi, Taj Mahal, Al-Azhar).",
      "Mengumpulkan data statistik perkembangan umat Islam kontemporer dari lembaga resmi."
    ],
    attendees: ["Rayhan", "Aisyah", "Faris", "Nabila"],
    status: "Selesai"
  },
  {
    id: "log-3",
    meetingNumber: 3,
    date: "24 Oktober 2026",
    time: "13:30 - 16:00 WIB",
    location: "Rumah Rayhan (Worksession Kelompok)",
    agenda: "Pembangunan Struktur Kode Next.js, Styling Tailwind CSS, dan Implementasi Peta",
    results: [
      "Membuat layout responsif dengan tema deep emerald dan aksen emas klasik.",
      "Mengembangkan komponen peta dunia interaktif dengan titik koordinat negara terpilih.",
      "Menyusun data JSON terstruktur untuk negara, peninggalan, dan pusat peradaban."
    ],
    attendees: ["Rayhan", "Aisyah", "Faris", "Nabila"],
    status: "Selesai"
  },
  {
    id: "log-4",
    meetingNumber: 4,
    date: "31 Oktober 2026",
    time: "14:00 - 16:30 WIB",
    location: "Kantin Kejujuran & Perpustakaan Sekolah",
    agenda: "Pembuatan Modul Kuis Gamifikasi, Pembahasan Soal, dan Fitur Sertifikat",
    results: [
      "Menulis 12 butir soal kuis dengan 3 tingkatan kesulitan dan 4 kategori materi PAI.",
      "Membuat sistem kalkulasi skor instan, review jawaban, dan visualisasi penjelasan.",
      "Merancang fitur cetak sertifikat piagam kelulusan kuis untuk pengguna."
    ],
    attendees: ["Rayhan", "Aisyah", "Faris", "Nabila"],
    status: "Selesai"
  },
  {
    id: "log-5",
    meetingNumber: 5,
    date: "07 November 2026",
    time: "15:00 - 17:00 WIB",
    location: "Ruang Kelas XII & Lab Komputer",
    agenda: "Finalisasi Dokumentasi Proyek, Uji Coba Responsif Lintas Perangkat, & Gladi Bersih Presentasi",
    results: [
      "Uji coba tampilan di layar smartphone, tablet, dan proyektor kelas tanpa glitch.",
      "Pemeriksaan akhir daftar pustaka dan sitasi karya tulis ilmiah PAI.",
      "Simulasi presentasi kelompok di hadapan rekan kelas dengan durasi 20 menit."
    ],
    attendees: ["Rayhan", "Aisyah", "Faris", "Nabila"],
    status: "Selesai"
  }
];

export const ACTIVITY_PHOTOS: ActivityPhoto[] = [
  {
    id: "act-1",
    title: "Riset Literatur Buku Sejarah di Perpustakaan",
    date: "10 Okt 2026",
    category: "Riset Perpustakaan",
    description: "Seluruh anggota kelompok menelaah buku Sejarah Peradaban Islam karangan Dr. Badri Yatim dan Atlas Sejarah Islam.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-2",
    title: "Diskusi & Pembagian Modul Konten",
    date: "17 Okt 2026",
    category: "Diskusi Konsep",
    description: "Musyawarah pembagian topik sejarah negara dan kurasi peninggalan para khalifah dan sultan terdahulu.",
    imageUrl: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-3",
    title: "Sesi Koding & Desain Antarmuka Next.js",
    date: "24 Okt 2026",
    category: "Coding & Desain",
    description: "Implementasi antarmuka modern dengan Tailwind CSS, sistem tab, dan visualisasi peta interaktif.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "act-4",
    title: "Uji Coba & Kalibrasi Soal Kuis PAI",
    date: "31 Okt 2026",
    category: "Uji Coba Kuis",
    description: "Melakukan playtest kuis interaktif bersama 5 perwakilan siswa kelas lain untuk menguji ketepatan timer dan skor.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  }
];

export const PROJECT_MILESTONES: ProjectMilestone[] = [
  {
    id: "m-1",
    phase: "Tahap 1",
    phaseName: "Pembentukan Tim & Pemilihan Topik",
    timeline: "Minggu 1 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Pembagian tim beranggotakan 4 siswa", completed: true },
      { taskName: "Penentuan judul dan ruang lingkup materi", completed: true },
      { taskName: "Konsultasi awal dengan Guru PAI", completed: true }
    ],
    deliverables: "Proposal Singkat Rencana Proyek PAI",
    notes: "Topik disetujui penuh oleh guru pembimbing dengan arahan menambahkan aspek komparasi kontemporer."
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
    phaseName: "Perancangan UI/UX & Peta Interaktif",
    timeline: "Minggu 3 (Okt 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Wireframing struktur web responsif", completed: true },
      { taskName: "Penyusunan palet warna emerald gold Islami", completed: true },
      { taskName: "Pengembangan modul peta SVG interaktif", completed: true }
    ],
    deliverables: "Komponen Frontend Peta & Navigasi",
    notes: "Peta mendukung interaksi klik pada tiap negara dengan animasi penyorotan dinamis."
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
    phaseName: "Dokumentasi Lengkap, Notulensi, & QA",
    timeline: "Minggu 5 (Nov 2026)",
    progressPercent: 100,
    status: "Selesai",
    tasks: [
      { taskName: "Penyusunan log notulensi 5 pertemuan rapat", completed: true },
      { taskName: "Penyusunan daftar referensi & sitasi ilmiah", completed: true },
      { taskName: "Pengujian responsif mobile, tablet, laptop", completed: true }
    ],
    deliverables: "Dokumentasi Kelompok Terpadu & Web Live",
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
      { taskName: "Penyusunan slide presentasi ringkas", completed: true },
      { taskName: "Gladi bersih pembagian segmen bicara", completed: true },
      { taskName: "Siap presentasi dan demo langsung di kelas", completed: true }
    ],
    deliverables: "Paparan Presentasi & Demonstrasi Web",
    notes: "Seluruh anggota kelompok siap memaparkan karya di depan kelas dan guru penilai."
  }
];

export const GROUP_REFLECTIONS = [
  {
    title: "Pentingnya Meneladani Adab & Ukhuwah",
    content: "Melalui proses kerja kelompok ini, kami belajar bahwa keberhasilan peradaban Islam masa lampau dibangun di atas persaudaraan yang kokoh (ukhuwah Islamiyah) dan adab terhadap ilmu serta guru. Nilai musyawarah selalu kami kedepankan dalam menyelesaikan setiap perbedaan pendapat teknis."
  },
  {
    title: "Menatap Masa Depan dengan Spirit Risalah",
    content: "Mempelajari bagaimana Islam menyebar secara damai ke Nusantara melalui pendekatan kultural mengajarkan kami bahwa dakwah terbaik adalah keteladanan akhlak (uswatun hasanah), kejujuran, dan keterbukaan terhadap kemajuan sains teknologi modern tanpa kehilangan jati diri tauhid."
  }
];
