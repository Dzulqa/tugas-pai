export interface WebSource {
  id: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  category: "Buku Akademik" | "Ensiklopedia Sejarah" | "Dokumen Resmi & Kemenag" | "Jurnal Ilmiah";
  isbnOrId: string;
  description: string;
  relevancyToProject: string;
  apaCitation: string;
}

export const ACADEMIC_SOURCES: WebSource[] = [
  {
    id: "source-1",
    title: "Sejarah Peradaban Islam: Dirasah Islamiyah II",
    author: "Dr. Badri Yatim, M.A.",
    year: "2018",
    publisher: "PT RajaGrafindo Persada, Jakarta",
    category: "Buku Akademik",
    isbnOrId: "ISBN: 978-979-421-337-7",
    description: "Buku rujukan primer kurikulum Pendidikan Agama Islam di perguruan tinggi dan madrasah aliyah di Indonesia. Membahas secara kronologis fase klasik, pertengahan, dan modern peradaban Islam.",
    relevancyToProject: "Menjadi rujukan utama bab Dinasti Umayyah di Andalusia, Kekhalifahan Abbasiyah, dan Dinasti Utsmaniyah di Turki.",
    apaCitation: "Yatim, B. (2018). Sejarah Peradaban Islam: Dirasah Islamiyah II. Jakarta: PT RajaGrafindo Persada."
  },
  {
    id: "source-2",
    title: "History of the Islamic Peoples",
    author: "Carl Brockelmann (Diterjemahkan oleh Joel Carmichael & Moshe Perlmann)",
    year: "1947 / Cetak Ulang 2012",
    publisher: "Routledge & Kegan Paul, London",
    category: "Buku Akademik",
    isbnOrId: "ISBN: 978-0415847490",
    description: "Karya agung orientalis dan sejarawan Jerman terkemuka mengenai narasi komprehensif bangsa-bangsa Muslim dari era pra-Islam hingga keruntuhan Kesultanan Utsmaniyah.",
    relevancyToProject: "Digunakan untuk memvalidasi tanggal sejarah, ekspansi ke Spanyol, dan dinamika politik Kesultanan Mughal India.",
    apaCitation: "Brockelmann, C. (2012). History of the Islamic Peoples. London: Routledge."
  },
  {
    id: "source-3",
    title: "Api Sejarah: Mahakarya Perjuangan Ulama dan Santri dalam Menegakkan NKRI",
    author: "Prof. Ahmad Mansur Suryanegara",
    year: "2017",
    publisher: "Surya Dinasti, Bandung",
    category: "Buku Akademik",
    isbnOrId: "ISBN: 978-602-71267-1-8",
    description: "Karya sejarawan Universitas Padjadjaran yang mengupas dekonstruksi sejarah masuknya Islam ke Nusantara sejak abad ke-7 M dan peran vital ulama serta kesultanan Islam.",
    relevancyToProject: "Rujukan kunci untuk bagian sejarah masuknya Islam ke Nusantara (Teori Mekkah) dan peranan Wali Songo.",
    apaCitation: "Suryanegara, A. M. (2017). Api Sejarah (Jilid 1 & 2). Bandung: Surya Dinasti."
  },
  {
    id: "source-4",
    title: "Atlas Sejarah Islam (Tārikh al-Islām al-Musawwar)",
    author: "Prof. Dr. Husayn Ahmad Amin",
    year: "2014",
    publisher: "Darul Fikr & Al-Huda, Kairo - Jakarta",
    category: "Ensiklopedia Sejarah",
    isbnOrId: "ISBN: 978-979-1153-65-2",
    description: "Kompilasi peta kartografi sejarah ekspansi Islam, rute perdagangan laut Samudera Hindia, dan lokasi peninggalan monumental para khalifah dan sultan.",
    relevancyToProject: "Fondasi data penentuan titik koordinat peta dunia interaktif dan visualisasi rute penyebaran Islam.",
    apaCitation: "Amin, H. A. (2014). Atlas Sejarah Islam Bergambar. Jakarta: Al-Huda."
  },
  {
    id: "source-5",
    title: "Ensiklopedia Islam Indonesia",
    author: "Tim Redaksi Harun Nasution dkk.",
    year: "2002 / Pembaruan 2021",
    publisher: "Badan Litbang dan Diklat Kementerian Agama RI, Jakarta",
    category: "Dokumen Resmi & Kemenag",
    isbnOrId: "Kemenag RI No. Reg: 2021-AG-88",
    description: "Dokumen komprehensif resmi negara mengenai khazanah keislaman di tanah air, tradisi pesantren, arsitektur masjid kuno, dan biografi ulama Nusantara.",
    relevancyToProject: "Rujukan validasi peninggalan Masjid Agung Demak, Menara Kudus, dan organisasi Islam Indonesia kontemporer.",
    apaCitation: "Kementerian Agama RI. (2021). Ensiklopedia Islam Indonesia. Jakarta: Badan Litbang dan Diklat Kemenag."
  },
  {
    id: "source-6",
    title: "The Architecture of the Islamic World: Its History and Social Meaning",
    author: "George Michell (Editor)",
    year: "1995 / Digital Archive 2020",
    publisher: "Thames & Hudson, London",
    category: "Ensiklopedia Sejarah",
    isbnOrId: "ISBN: 978-0500278475",
    description: "Analisis komparatif arsitektur masjid, istana, dan madrasah di seluruh dunia Islam mulai dari Cordoba, Kairo, Istanbul, hingga Delhi dan Samarkand.",
    relevancyToProject: "Dasar analisis fitur arsitektur Taj Mahal, Alhambra, Hagia Sophia, dan Kubah As-Sakhrah.",
    apaCitation: "Michell, G. (Ed.). (1995). The Architecture of the Islamic World. London: Thames & Hudson."
  },
  {
    id: "source-7",
    title: "Buku Siswa Pendidikan Agama Islam dan Budi Pekerti Kelas XII (Fase F)",
    author: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI",
    year: "2023",
    publisher: "Pusat Kurikulum dan Perbukuan Kemendikbudristek, Jakarta",
    category: "Dokumen Resmi & Kemenag",
    isbnOrId: "ISBN: 978-602-244-686-6",
    description: "Buku pegangan resmi kurikulum sekolah nasional Bab: 'Menganalisis dan Mengevaluasi Sejarah Perkembangan Islam di Dunia dan Peran Tokoh-tokohnya'.",
    relevancyToProject: "Standar kesesuaian kurikulum PAI, capaian pembelajaran (CP), dan kisi-kisi perumusan butir soal kuis.",
    apaCitation: "Kemendikbudristek RI. (2023). Pendidikan Agama Islam dan Budi Pekerti untuk SMA/SMK Kelas XII. Jakarta: Kemendikbudristek."
  },
  {
    id: "source-8",
    title: "Jurnal Ilmiah Kebudayaan Islam: 'Jalur Sutra Maritim dan Masuknya Islam ke Asia Timur dan Tenggara'",
    author: "Dr. Hamdan Daulay, M.Si.",
    year: "2022",
    publisher: "Jurnal Studi Keislaman UIN Sunan Kalijaga",
    category: "Jurnal Ilmiah",
    isbnOrId: "ISSN: 2548-432X",
    description: "Artikel riset ilmiah yang membedah korelasi hubungan niaga Dinasti Tang & Ming di Tiongkok dengan kesultanan-kesultanan pesisir Nusantara.",
    relevancyToProject: "Sumber rujukan sejarah diplomasi Laksamana Cheng Ho dan komunitas Muslim etnis Hui di Tiongkok.",
    apaCitation: "Daulay, H. (2022). Jalur Sutra Maritim dan Masuknya Islam ke Asia Timur dan Tenggara. Jurnal Studi Keislaman, 18(2), 145-162."
  }
];
