export interface HeritageItem {
  id: string;
  name: string;
  yearBuilt: string;
  rulerOrDynasty: string;
  location: string;
  category: "Masjid Bersejarah" | "Istana & Benteng" | "Manuskrip & Intelektual" | "Makam & Situs Kuno";
  description: string;
  architecturalFeatures: string;
  significance: string;
  imageUrl: string;
}

export interface IslamicCenter {
  id: string;
  name: string;
  city: string;
  type: "Masjid Agung" | "Universitas Islam" | "Pusat Kebudayaan & Riset" | "Masjid Bersejarah";
  capacity: string;
  foundedYear: string;
  description: string;
  significance: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CountryIslamicProfile {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  region: "Asia Tenggara" | "Timur Tengah" | "Eropa" | "Afrika Utara" | "Asia Selatan" | "Asia Timur";
  mapCoordinates: {
    x: number; // percentage in SVG world map (0 - 100)
    y: number; // percentage in SVG world map (0 - 100)
  };
  summary: string;
  // 1. Sejarah Masuknya Islam
  historyOfEntry: {
    century: string;
    primaryRoutes: string[];
    keyPioneers: string[];
    detailedNarrative: string;
    timeline: TimelineMilestone[];
    theoriesOrMethods: string;
  };
  // 2. Peninggalan Islam Pada Penguasa Sebelumnya
  pastHeritage: HeritageItem[];
  // 3. Perkembangan Saat Ini
  contemporaryDevelopment: {
    muslimPopulation: string;
    percentageOfTotal: string;
    leadingOrganizations: string[];
    socialAndEconomicRole: string;
    modernHighlights: string[];
  };
  // 5. Pusat-Pusat Islam di Negara Tersebut
  islamicCenters: IslamicCenter[];
}

export const COUNTRIES_DATA: CountryIslamicProfile[] = [
  {
    id: "indonesia",
    name: "Indonesia (Nusantara)",
    nativeName: "Republik Indonesia",
    flag: "🇮🇩",
    region: "Asia Tenggara",
    mapCoordinates: { x: 78, y: 58 },
    summary: "Negara berpenduduk Muslim terbesar di dunia dengan sejarah islamisasi yang damai melalui jalur maritim perdagangan, perkawinan, dan dakwah kultural para wali.",
    historyOfEntry: {
      century: "Abad ke-7 M (Awal) hingga Abad ke-13 M (Meluas)",
      primaryRoutes: ["Jalur Perdagangan Rempah Maritim", "Perkawinan Campur Saudagar Asing", "Dakwah Kultural Wali Songo & Ulama Tasawuf"],
      keyPioneers: ["Sultan Malik As-Saleh (Samudera Pasai)", "Wali Songo (Sunan Gresik, Ampel, Bonang, Giri, Drajat, Kalijaga, Kudus, Muria, Gunung Jati)", "Syekh Yusuf Al-Makassari"],
      detailedNarrative: "Islam masuk ke Nusantara secara damai tanpa invasi militer. Terdapat tiga teori utama: Teori Gujarat (dibawa pedagang India abad ke-13), Teori Mekkah/Arab (dibawa pedagang Arab abad ke-7), dan Teori Persia. Dakwah di tanah Jawa dipelopori oleh Wali Songo yang mengakulturasikan ajaran tauhid dengan seni lokal seperti wayang kulit, tembang ilir-ilir, dan arsitektur gapura candi yang bernafaskan Islam.",
      timeline: [
        { year: "674 M", title: "Pemukiman Pedagang Arab di Barus (Sumatera)", description: "Ditemukannya catatan Dinasti Tang tentang komunitas saudagar Ta-Shih (Arab Muslim) di pantai barat Sumatera." },
        { year: "1267 M", title: "Berdirinya Kesultanan Samudera Pasai", description: "Sultan Malik As-Saleh mendirikan kesultanan Islam pertama yang menjadi pusat studi keislaman Asia Tenggara." },
        { year: "1478 M", title: "Era Keemasan Kesultanan Demak & Wali Songo", description: "Raden Patah mendirikan Kesultanan Demak Bintoro sebagai pilar awal penyebaran Islam terorganisir di Pulau Jawa." },
        { year: "1600-an M", title: "Jaringan Ulama Nusantara & Haramain", description: "Sinergi ulama besar seperti Syekh Abdur Rauf As-Singkili dan Syekh Muhammad Arsyad Al-Banjari menyebarkan literatur fiqih dan tasawuf." }
      ],
      theoriesOrMethods: "Pendekatan kultural-akomodatif (Toleransi tradisi lokal, perniagaan jujur, tasawuf akhlak, dan sastra pegon)."
    },
    pastHeritage: [
      {
        id: "masjid-demak",
        name: "Masjid Agung Demak",
        yearBuilt: "1479 M",
        rulerOrDynasty: "Raden Patah / Kesultanan Demak",
        location: "Demak, Jawa Tengah",
        category: "Masjid Bersejarah",
        description: "Masjid tertua di Jawa yang menjadi markas perkumpulan Wali Songo. Memiliki ciri khas atap tumpang tiga yang melambangkan Iman, Islam, dan Ihsan.",
        architecturalFeatures: "Atap tumpang kayu jati, empat Saka Guru utama, salah satunya Saka Tatal buatan Sunan Kalijaga dari serpihan kayu yang direkatkan.",
        significance: "Tonggak awal kepemimpinan Islam formal di tanah Jawa menggantikan pengaruh Majapahit.",
        imageUrl: "/heritage/masjid-demak.jpg"
      },
      {
        id: "masjid-kudus",
        name: "Masjid Menara Kudus",
        yearBuilt: "1549 M (956 H)",
        rulerOrDynasty: "Sunan Kudus (Ja'far Shadiq)",
        location: "Kudus, Jawa Tengah",
        category: "Masjid Bersejarah",
        description: "Simbol akulturasi paling harmonis antara Islam dan kebudayaan Hindu-Buddha. Sunan Kudus juga melarang penyembelihan sapi untuk menghormati pemeluk Hindu setempat.",
        architecturalFeatures: "Menara bata merah bercorak candi Jawa Timur, piring-piring porselen Dinasti Ming pada dinding, dan gapura paduraksa.",
        significance: "Karya agung dakwah toleransi dan pendekatan psikososial dakwah Islam Nusantara.",
        imageUrl: "/heritage/masjid-kudus.jpg"
      },
      {
        id: "istana-maimun",
        name: "Istana Maimun",
        yearBuilt: "1888 M",
        rulerOrDynasty: "Sultan Ma'mun Al Rasyid Perkasa Alamsyah (Kesultanan Deli)",
        location: "Medan, Sumatera Utara",
        category: "Istana & Benteng",
        description: "Pusat kejayaan Kesultanan Melayu Deli yang memadukan keanggunan arsitektur Islam Timur Tengah, Melayu, Spanyol, dan Italia.",
        architecturalFeatures: "Kubah berbentuk kurva Persia, warna kuning khas kebesaran Melayu, interior berhias lampu kristal Belanda dan marmer Italia.",
        significance: "Bukti kemakmuran dan kedaulatan monarki Islam pesisir timur Sumatera dalam perdagangan internasional.",
        imageUrl: "/heritage/istana-maimun.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "241,7 Juta Jiwa",
      percentageOfTotal: "86,7% dari total penduduk",
      leadingOrganizations: ["Nahdlatul Ulama (NU)", "Muhammadiyah", "Majelis Ulama Indonesia (MUI)", "Dewan Dakwah Islamiyah Indonesia"],
      socialAndEconomicRole: "Indonesia memposisikan diri sebagai episentrum ekonomi syariah dan ekosistem industri halal global, pionir sukuk hijau (Green Sukuk), serta teladan konsep 'Wasathiyah' (moderasi beragama) bagi dunia internasional.",
      modernHighlights: [
        "Negara penerbit Sukuk Syariah kedaulatan terbesar di dunia.",
        "Ribuan pondok pesantren modern dan perguruan tinggi keagamaan Islam negeri (UIN) yang memadukan sains kontemporer dan khazanah kitab kuning.",
        "Pusat tren modest fashion muslim dan wisata ramah muslim (halal tourism) terdepan di Asia."
      ]
    },
    islamicCenters: [
      {
        id: "istiqlal-jkt",
        name: "Masjid Istiqlal",
        city: "Jakarta Pusat",
        type: "Masjid Agung",
        capacity: "200.000 Jamaah",
        foundedYear: "1978 M (Dirancang oleh F. Silaban)",
        description: "Masjid negara terbesar di Asia Tenggara yang melambangkan rasa syukur atas kemerdekaan Republik Indonesia. Dilengkapi terowongan silaturahmi yang menghubungkannya dengan Gereja Katedral.",
        significance: "Monumen kemerdekaan nasional dan episentrum dialog lintas iman serta kajian Islam tingkat dunia."
      },
      {
        id: "baiturrahman-aceh",
        name: "Masjid Raya Baiturrahman",
        city: "Banda Aceh",
        type: "Masjid Agung",
        capacity: "30.000 Jamaah",
        foundedYear: "1614 M (Renovasi 1879 M)",
        description: "Landmark sakral Kesultanan Aceh Darussalam yang berdiri teguh selamat dari hantaman bencana tsunami dahsyat 2004.",
        significance: "Simbol ketangguhan iman umat, pusat penerapan syariat Islam di Serambi Mekkah, dan mahakarya arsitektur Kesultanan Aceh."
      }
    ]
  },
  {
    id: "arab-saudi",
    name: "Arab Saudi (Hijaz)",
    nativeName: "Al-Mamlakah Al-Arabiyyah As-Sa'udiyyah",
    flag: "🇸🇦",
    region: "Timur Tengah",
    mapCoordinates: { x: 56, y: 44 },
    summary: "Negara tempat lahirnya agama Islam, tanah diturunkannya Al-Qur'an melalui Nabi Muhammad SAW, serta rumah bagi dua kota paling suci di dunia: Makkah Al-Mukarramah dan Madinah Al-Munawwarah.",
    historyOfEntry: {
      century: "Abad ke-7 M (610 M - Masa Kenabian)",
      primaryRoutes: ["Wahyu Ilahi kepada Rasulullah SAW", "Hijrah dari Makkah ke Madinah (622 M)", "Piagam Madinah & Penyatuan Kabilah Arab"],
      keyPioneers: ["Nabi Muhammad SAW", "Khulafaur Rasyidin (Abu Bakar, Umar bin Khattab, Utsman bin Affan, Ali bin Abi Thalib)"],
      detailedNarrative: "Islam bermula di Makkah ketika Nabi Muhammad SAW menerima wahyu pertama di Gua Hira pada tahun 610 M. Mengalami penentangan keras dari kaum Quraisy, Rasulullah SAW dan para sahabat berhijrah ke Yatsrib (Madinah) pada 622 M. Di Madinah dibentuk konstitusi tertulis pertama dunia, 'Piagam Madinah', yang menyatukan masyarakat majemuk. Peristiwa Fathu Makkah (630 M) mengakhiri kekafiran berhala di sekeliling Ka'bah secara damai dan mengokohkan tauhid di Jazirah Arab.",
      timeline: [
        { year: "610 M", title: "Bi'tsah & Turunnya Wahyu Pertama", description: "Nabi Muhammad SAW menerima Surah Al-'Alaq 1-5 di Gua Hira melalui Malaikat Jibril AS." },
        { year: "622 M", title: "Peristiwa Akbar Hijrah ke Madinah", description: "Titik awal penanggalan Kalender Hijriyah dan peletakan dasar masyarakat madani Islam." },
        { year: "630 M", title: "Fathu Makkah (Pembebasan Makkah)", description: "Pembersihan 360 berhala di sekitar Ka'bah dan pengampunan massal terhadap penduduk Makkah." },
        { year: "632 M", title: "Haji Wada' & Khutbah Terakhir", description: "Deklarasi kesetaraan ras, penghapusan riba, dan penegasan hak asasi manusia dalam Islam." }
      ],
      theoriesOrMethods: "Wahyu Ilahi, dakwah risalah tauhid bil-lisan wa bil-hal, serta keteladanan moral uswatun hasanah."
    },
    pastHeritage: [
      {
        id: "masjidil-haram",
        name: "Masjidil Haram & Ka'bah Musyarrafah",
        yearBuilt: "Zaman Nabi Ibrahim AS & Renovasi Khalifah Umayyah/Abbasiyah/Utsmani",
        rulerOrDynasty: "Nabi Ibrahim AS hingga Dinasti Islam",
        location: "Makkah Al-Mukarramah",
        category: "Masjid Bersejarah",
        description: "Masjid tertua dan paling suci di muka bumi, tempat kiblat sholat bagi miliaran umat Islam di seluruh penjuru dunia. Di dalamnya terdapat Ka'bah, Maqam Ibrahim, dan Sumur Zamzam.",
        architecturalFeatures: "Pilar marmer putih anti-panas, Maqam Ibrahim berlapir emas, Hajar Aswad berbingkai perak murni, serta Kiswah sutra hitam bertinta emas.",
        significance: "Pusat gravitasi spiritual seluruh umat Islam dan kewajiban rukun Islam kelima (Ibadah Haji).",
        imageUrl: "/heritage/masjidil-haram.jpg"
      },
      {
        id: "masjid-nabawi",
        name: "Masjid Nabawi & Raudhah Asy-Syarifah",
        yearBuilt: "622 M (Perluasan Berkelanjutan)",
        rulerOrDynasty: "Nabi Muhammad SAW & Penguasa Khulafaur Rasyidin s.d. Modern",
        location: "Madinah Al-Munawwarah",
        category: "Masjid Bersejarah",
        description: "Masjid yang dibangun sendiri oleh Rasulullah SAW bersama para sahabat. Di dalamnya terdapat makam Rasulullah SAW, Sayyidina Abu Bakar, dan Umar bin Khattab serta Raudhah (taman surga).",
        architecturalFeatures: "Kubah Hijau (Green Dome) ikonik, payung kanopi hidrolik raksasa berarsitektur modern dengan ornamen kaligrafi klasik.",
        significance: "Tanah haram kedua dan pusat pemerintahan pertama peradaban Islam dunia.",
        imageUrl: "/heritage/masjid-nabawi.jpg"
      },
      {
        id: "benteng-ajyad",
        name: "Situs Sejarah Hijaz & Percetakan Al-Qur'an Raja Fahd",
        yearBuilt: "1780 M / 1984 M",
        rulerOrDynasty: "Kesultanan Utsmaniyah & Kerajaan Arab Saudi",
        location: "Madinah & Makkah",
        category: "Manuskrip & Intelektual",
        description: "Percetakan Mushaf Al-Qur'an terbesar di dunia (Mujamma' Al-Malik Fahd) yang mendistribusikan ratusan juta mushaf berkualitas tinggi ke seluruh dunia.",
        architecturalFeatures: "Teknologi percetakan presisi tinggi dengan verifikasi tahsin oleh puluhan ulama qira'at sab'ah terkemuka.",
        significance: "Penjaga keaslian bacaan dan distribusi kitab suci Al-Qur'an bagi peradaban global.",
        imageUrl: "/heritage/percetakan-quran.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "32,2 Juta Jiwa",
      percentageOfTotal: "93% dari total populasi",
      leadingOrganizations: ["Kementerian Urusan Islam, Dakwah, dan Bimbingan", "Lembaga Ulama Senior (Haiah Kibaril Ulama)", "Rabithah Al-Alam Al-Islami (Liga Muslim Dunia)"],
      socialAndEconomicRole: "Melalui Visi 2030, Arab Saudi mengintegrasikan kecerdasan buatan (AI) dan smart city dalam melayani lebih dari 15 juta jamaah umrah dan haji setiap tahunnya.",
      modernHighlights: [
        "Digitalisasi layanan haji via platform Nusuk dan perluasan Masjidil Haram tahap ketiga.",
        "Pusat beasiswa studi syariah dunia di Universitas Islam Madinah dan Umm Al-Qura.",
        "Penyelenggara Konferensi Tingkat Tinggi Islam dan bantuan kemanusiaan KSrelief ke puluhan negara."
      ]
    },
    islamicCenters: [
      {
        id: "univ-islam-madinah",
        name: "Universitas Islam Madinah (UIM)",
        city: "Madinah",
        type: "Universitas Islam",
        capacity: "35.000 Mahasiswa",
        foundedYear: "1961 M",
        description: "Kampus rujukan ilmu-ilmu syariah, hadits, dan dakwah internasional yang menampung mahasiswa dari lebih 160 negara tanpa memungut biaya.",
        significance: "Kawah candradimuka pencetak ulama, da'i, dan cendekiawan Islam global."
      },
      {
        id: "masjid-quba",
        name: "Masjid Quba",
        city: "Madinah",
        type: "Masjid Agung",
        capacity: "25.000 Jamaah (Rencana Perluasan 66.000)",
        foundedYear: "622 M",
        description: "Masjid pertama yang dibangun dalam sejarah Islam. Sholat dua rakaat di Masjid Quba bernilai pahala setara dengan satu kali umrah.",
        significance: "Tonggak pertama peletakan batu fondasi peribadatan umat Islam pasca-hijrah."
      }
    ]
  },
  {
    id: "turki",
    name: "Turki (Utsmaniyah)",
    nativeName: "Türkiye Cumhuriyeti",
    flag: "🇹🇷",
    region: "Timur Tengah",
    mapCoordinates: { x: 54, y: 34 },
    summary: "Negara lintas benua pewaris Kesultanan Utsmaniyah (Ottoman) yang selama lebih dari 600 tahun memimpin kekhalifahan Islam dan menjadi benteng peradaban dunia Islam di pintu Eropa.",
    historyOfEntry: {
      century: "Abad ke-11 M (Pertempuran Manzikert 1071 M) hingga Puncaknya 1453 M",
      primaryRoutes: ["Migrasi Kabilah Seljuk dari Asia Tengah", "Ekspansi Militer & Fathu Konstantinopel", "Persaudaraan Tarekat Sufi Futuwwah"],
      keyPioneers: ["Sultan Alp Arslan (Seljuk)", "Osman I (Pendiri Dinasti Utsmani)", "Sultan Mehmed II (Muhammad Al-Fatih)", "Suleiman Al-Qanuni"],
      detailedNarrative: "Masuknya Islam ke wilayah Anatolia dipicu kemenangan Sultan Alp Arslan atas Kekaisaran Bizantium dalam Pertempuran Manzikert (1071 M). Dinasti Utsmaniyah didirikan oleh Osman Ghazi pada 1299 M. Peristiwa paling fenomenal terjadi pada hari Selasa, 29 Mei 1453 M, ketika Sultan Mehmed II (Muhammad Al-Fatih) yang berusia 21 tahun berhasil menaklukkan benteng tak terkalahkan Konstantinopel, menggenapi nubuat sabda Rasulullah SAW tentang 'sebaik-baik pemimpin dan sebaik-baik pasukan'.",
      timeline: [
        { year: "1071 M", title: "Pertempuran Manzikert", description: "Terbukanya gerbang Anatolia bagi masuk dan berkembangnya suku-suku Muslim Turkmen." },
        { year: "1299 M", title: "Deklarasi Kesultanan Utsmaniyah", description: "Osman I memproklamasikan keamiran merdeka yang kelak menjadi imperium adidaya." },
        { year: "1453 M", title: "Fathu Konstantinopel oleh Al-Fatih", description: "Penaklukan benteng legendaris Bizantium dan transformasi Hagia Sophia menjadi masjid." },
        { year: "1517 M", title: "Pengalihan Kekhalifahan Islam ke Istanbul", description: "Sultan Selim I menerima mandat Khilafah dari Dinasti Mamluk Mesir beserta relikui suci." }
      ],
      theoriesOrMethods: "Kombinasi kepemimpinan militer strategis, administrasi kenegaraan modern, keadilan peradilan qadhi, dan perlindungan atas kaum minoritas dhimmi."
    },
    pastHeritage: [
      {
        id: "hagia-sophia",
        name: "Hagia Sophia (Ayasofya-i Kebir Cami-i Şerifi)",
        yearBuilt: "537 M (Dikonversi Menjadi Masjid 1453 M)",
        rulerOrDynasty: "Sultan Mehmed II / Dinasti Utsmaniyah",
        location: "Istanbul",
        category: "Masjid Bersejarah",
        description: "Mahakarya arsitektur kubah gantung terbesar dunia yang diwakafkan oleh Sultan Muhammad Al-Fatih sebagai masjid raya kekhalifahan. Kembali difungsikan sebagai masjid aktif pada tahun 2020.",
        architecturalFeatures: "Kubah raksasa berdiameter 31 meter, kaligrafi bundar raksasa lafadz Allah, Muhammad, dan 4 Khalifah karya hattat Kazasker Mustafa Izzet Efendi.",
        significance: "Simbol kemenangan peradaban Islam dan kemegahan penaklukan Konstantinopel.",
        imageUrl: "/heritage/hagia-sophia.jpg"
      },
      {
        id: "masjid-biru",
        name: "Masjid Sultan Ahmed (Blue Mosque)",
        yearBuilt: "1616 M",
        rulerOrDynasty: "Sultan Ahmed I / Arsitek Sedefkar Mehmed Agha",
        location: "Istanbul",
        category: "Masjid Bersejarah",
        description: "Masjid megah dengan 6 menara ramping yang interiornya dilapisi lebih dari 20.000 keramik porselen buatan tangan bermotif bunga tulip dan anggur dari Iznik.",
        architecturalFeatures: "Keramik Iznik biru keemasan, 260 jendela kaca patri venesia, serta proporsi simetri piramida bertingkat.",
        significance: "Puncak keindahan seni arsitektur klasik kekaisaran Utsmaniyah.",
        imageUrl: "/heritage/masjid-biru.jpg"
      },
      {
        id: "istana-topkapi",
        name: "Istana Topkapi & Ruang Relikui Suci",
        yearBuilt: "1478 M",
        rulerOrDynasty: "Sultan Mehmed II hingga Sultan Mahmud II",
        location: "Sultanahmet, Istanbul",
        category: "Istana & Benteng",
        description: "Pusat administrasi kekhalifahan Utsmani selama hampir 400 tahun. Menyimpan 'Amanat Suci' (Mukaddes Emanetler) peninggalan Nabi Muhammad SAW dan para sahabat.",
        architecturalFeatures: "Kawasan paviliun istana seluas 70 hektar, pintu gerbang Babussalam, dan ruang tilawah Al-Qur'an 24 jam nonstop sejak 1517 M.",
        significance: "Pusat kendali geopolitik kekhalifahan Islam terbesar yang membentang di tiga benua.",
        imageUrl: "/heritage/istana-topkapi.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "82,5 Juta Jiwa",
      percentageOfTotal: "98% dari total populasi",
      leadingOrganizations: ["Diyanet İşleri Başkanlığı (Direktorat Urusan Agama)", "TIKA (Badan Kerjasama & Koordinasi Turki)", "Bulan Sabit Merah Turki (Kızılay)"],
      socialAndEconomicRole: "Turki berperan sebagai jembatan diplomatik dan kemanusiaan antara dunia Islam dan Barat, pelindung pengungsi terbesar di dunia, serta pusat kebangkitan riset sejarah Islam dan industri pertahanan canggih.",
      modernHighlights: [
        "Pembangunan Masjid Camlica di Istanbul (masjid modern terbesar di Asia Minor kapasitas 63.000 jamaah).",
        "Pemulihan ribuan wakaf bersejarah era Utsmaniyah di Balkan, Timur Tengah, dan Afrika.",
        "Penyelenggaraan festival teknologi TEKNOFEST dan kemajuan pesat perbankan partisipasi syariah."
      ]
    },
    islamicCenters: [
      {
        id: "masjid-suleymaniye",
        name: "Masjid Suleymaniye",
        city: "Istanbul",
        type: "Masjid Agung",
        capacity: "10.000 Jamaah",
        foundedYear: "1557 M (Karya Maestro Mimar Sinan)",
        description: "Kompleks masjid kekaisaran yang dibangun untuk Sultan Suleiman Al-Qanuni. Terdiri atas madrasah, rumah sakit (darussifa), perpustakaan naskah, dan dapur umum (imaret).",
        significance: "Karya puncak arsitek legendaris Mimar Sinan yang mendefinisikan akustik dan sirkulasi udara sempurna."
      },
      {
        id: "masjid-camlica",
        name: "Büyük Çamlıca Camii",
        city: "Üsküdar, Istanbul",
        type: "Masjid Agung",
        capacity: "63.000 Jamaah",
        foundedYear: "2019 M",
        description: "Masjid megah modern di puncak bukit tertinggi Istanbul dengan 6 menara yang merepresentasikan rukun iman, museum peradaban Islam, dan galeri seni.",
        significance: "Ikon arsitektur neo-Ottoman abad ke-21 yang memadukan warisan klasik dengan fasilitas ramah disabilitas."
      }
    ]
  },
  {
    id: "spanyol",
    name: "Spanyol (Andalusia)",
    nativeName: "Reino de España (Al-Andalus)",
    flag: "🇪🇸",
    region: "Eropa",
    mapCoordinates: { x: 45, y: 38 },
    summary: "Episentrum 'Zaman Keemasan Islam' (The Golden Age) di Eropa selama 781 tahun (711-1492 M), menjadi mercusuar ilmu pengetahuan, sains, filsafat, kedokteran, dan toleransi lintas agama.",
    historyOfEntry: {
      century: "Abad ke-8 M (711 M - Ekspedisi Thariq bin Ziyad)",
      primaryRoutes: ["Penyeberangan Selat Gibraltar dari Maroko", "Perjanjian Damai Kota-kota Visigoth", "Gelombang Cendekiawan & Seniman Muslim"],
      keyPioneers: ["Thariq bin Ziyad", "Musa bin Nushair", "Abdurrahman Ad-Dakhil (Pendiri Imarah Cordoba)", "Abdurrahman III (Khalifah Pertama Cordoba)", "Ibn Rusyd (Averroes)"],
      detailedNarrative: "Pada musim semi tahun 711 M, jenderal muda Thariq bin Ziyad mendarat di kaki bukit batu karang yang kemudian dinamai Jabal Thariq (Gibraltar). Dengan pidato terkenalnya yang membakar semangat iman, pasukannya mengalahkan Raja Roderic dari Visigoth. Umat Islam mendirikan peradaban Al-Andalus yang gemilang, mentransformasi Cordoba menjadi kota paling terang benderang di Eropa dengan 70 perpustakaan, penerangan jalan umum, pemandian umum, dan universitas ketika sebagian besar benua Eropa masih tenggelam dalam Abad Kegelapan (Dark Ages).",
      timeline: [
        { year: "711 M", title: "Pendaratan di Gibraltar", description: "Awal pembebasan Semenanjung Iberia oleh Thariq bin Ziyad dan terbukanya era Al-Andalus." },
        { year: "756 M", title: "Pendirian Keamiran Cordoba oleh Ad-Dakhil", description: "Abdurrahman I lolos dari kejaran Abbasiyah dan membangun dinasti Umayyah di Spanyol." },
        { year: "929 M", title: "Deklarasi Kekhalifahan Cordoba", description: "Abdurrahman An-Nashir memproklamirkan Cordoba sebagai tandingan adidaya Baghdad dan Kairo." },
        { year: "1492 M", title: "Jatuhnya Granada & Berakhirnya Al-Andalus", description: "Sultan Muhammad XII (Boabdil) menyerahkan kunci Alhambra kepada Ferdinand dan Isabella." }
      ],
      theoriesOrMethods: "Sintesis ilmu pengetahuan (penerjemahan filsafat Yunani ke bahasa Arab lalu Latin), kebebasan akademik 'Convivencia' (hidup berdampingan Muslim, Yahudi, dan Kristen)."
    },
    pastHeritage: [
      {
        id: "alhambra",
        name: "Istana Alhambra (Qal'at Al-Hamra)",
        yearBuilt: "1238 - 1358 M",
        rulerOrDynasty: "Dinasti Nashriyah (Bani Ahmar) / Muhammad I",
        location: "Granada, Andalusia",
        category: "Istana & Benteng",
        description: "Kompleks istana dan benteng megah yang menjadi benteng pertahanan terakhir Islam di Eropa. Di dindingnya terpahat ribuan kaligrafi semboyan: 'Wa La Ghaliba Illallah' (Tiada Pemenang Selain Allah).",
        architecturalFeatures: "Halaman Singa (Patio de los Leones) dengan 124 tiang marmer pualam, ukiran muqarnas stalaktit pada langit-langit, dan sistem air mancur hidrolik tanpa pompa.",
        significance: "Situs Warisan Dunia UNESCO dan monumen arsitektur istana Islam terindah di benua Eropa.",
        imageUrl: "/heritage/alhambra.jpg"
      },
      {
        id: "mezquita-cordoba",
        name: "Masjid Raya Cordoba (Mezquita)",
        yearBuilt: "785 M",
        rulerOrDynasty: "Abdurrahman I, II, III, dan Al-Hakam II (Bani Umayyah)",
        location: "Cordoba, Andalusia",
        category: "Masjid Bersejarah",
        description: "Karya arsitektur legendaris dengan hutan pilar busur tapal kuda dwilapis berwarna merah-putih. Dahulu mampu menampung hingga 40.000 jamaah sekaligus.",
        architecturalFeatures: "856 kolom pilar marmer, onyx, dan granit, mihrab bertatahkan mosaik emas kiriman Kaisar Bizantium, serta akustik suara gema yang presisi.",
        significance: "Monumen puncak kejayaan peradaban intelektual dan arsitektur Kekhalifahan Cordoba.",
        imageUrl: "/heritage/mezquita-cordoba.jpg"
      },
      {
        id: "menara-giralda",
        name: "Menara Giralda (Bekas Minaret Masjid Raya Seville)",
        yearBuilt: "1198 M",
        rulerOrDynasty: "Dinasti Muwahhidun (Almohad)",
        location: "Seville, Andalusia",
        category: "Istana & Benteng",
        description: "Menara masjid agung setinggi 104 meter yang dahulu dinaiki muadzin dengan menunggang kuda berkat jalur lereng tanjakan (ramp) di bagian dalamnya.",
        architecturalFeatures: "Pola anyaman bata ornamen sebka khas Berber-Moorish dan fasad jendela tapal kuda bertingkat.",
        significance: "Prototipe menara mercusuar peradaban Islam Afrika Utara dan Semenanjung Iberia.",
        imageUrl: "/heritage/menara-giralda.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "2,2 Juta Jiwa",
      percentageOfTotal: "4,5% dari total populasi",
      leadingOrganizations: ["Comisión Islámica de España (CIE)", "Centro Cultural Islámico de Madrid", "Fundación Mezquita de Sevilla"],
      socialAndEconomicRole: "Setelah sempat redup ratusan tahun pasca-inkuisisi, komunitas Muslim di Spanyol kini bangkit pesat dengan pengakuan resmi hukum negara sejak 1992, mendorong diplomasi warisan Al-Andalus dan pariwisata halal.",
      modernHighlights: [
        "Pendidikan agama Islam diakui dalam kurikulum sekolah publik di wilayah Andalusia dan Catalonia.",
        "Maraknya festival kebudayaan dan seminar internasional tentang sumbangsih sains Ibnu Sina, Ibnu Rusyd, dan Al-Zahrawi.",
        "Pendirian masjid raya baru di berbagai kota besar seperti Madrid, Granada, Valencia, dan Barcelona."
      ]
    },
    islamicCenters: [
      {
        id: "masjid-m30-madrid",
        name: "Centro Cultural Islámico de Madrid (Masjid M-30)",
        city: "Madrid",
        type: "Pusat Kebudayaan & Riset",
        capacity: "3.500 Jamaah",
        foundedYear: "1992 M",
        description: "Pusat kebudayaan Islam dan masjid terbesar di Spanyol modern yang dilengkapi madrasah, perpustakaan riset naskah berbahasa Arab-Spanyol, dan auditorium publik.",
        significance: "Jantung peribadatan dan representasi diplomatik umat Islam di ibu kota Spanyol."
      },
      {
        id: "masjid-mayor-granada",
        name: "Mezquita Mayor de Granada",
        city: "Granada (Albaicín)",
        type: "Masjid Agung",
        capacity: "1.000 Jamaah",
        foundedYear: "2003 M",
        description: "Masjid pertama yang berhasil dibangun kembali di kota Granada setelah penantian lebih dari 500 tahun sejak jatuhnya Dinasti Nashriyah pada 1492 M.",
        significance: "Simbol kebangkitan kembali lantunan adzan di hadapan lembah perbukitan Istana Alhambra."
      }
    ]
  },
  {
    id: "mesir",
    name: "Mesir (Afrika Utara)",
    nativeName: "Jumhuriyat Misr Al-Arabiyyah",
    flag: "🇪🇬",
    region: "Afrika Utara",
    mapCoordinates: { x: 52, y: 40 },
    summary: "Negara seribu menara di tepi Sungai Nil yang menjadi pusat kajian fatwa dan keilmuan Islam tertua dunia melalui institusi legendaris Al-Azhar Asy-Syarif serta benteng penahan invasi Mongol.",
    historyOfEntry: {
      century: "Abad ke-7 M (641 M - Era Khulafaur Rasyidin)",
      primaryRoutes: ["Ekspedisi Panglima Amr bin Ash", "Pembebasan Rakyat Koptik dari Tirani Bizantium", "Pembangunan Kota Fustat"],
      keyPioneers: ["Amr bin Ash", "Khalifah Umar bin Khattab", "Shalahuddin Al-Ayyubi", "Imam Asy-Syafi'i (Wafat di Kairo 820 M)", "Sultan Qutuz (Mamluk)"],
      detailedNarrative: "Panglima Amr bin Ash diutus oleh Khalifah Umar bin Khattab untuk membebaskan Mesir dari penindasan Kekaisaran Romawi Bizantium pada 641 M. Umat Islam mendirikan kota Fustat dan Masjid Amr bin Ash sebagai masjid pertama di benua Afrika. Mesir kemudian berkembang menjadi episentrum kekhalifahan Fatimiyah, Ayyubiyah (era Shalahuddin Al-Ayyubi sang pembebas Al-Aqsa), dan Kesultanan Mamluk yang berhasil memukul mundur serbuan bangsa Mongol dalam Pertempuran Ain Jalut (1260 M).",
      timeline: [
        { year: "641 M", title: "Pembebasan Mesir & Pendirian Fustat", description: "Amr bin Ash membangun Masjid Amr bin Ash dan menjamin perlindungan kebebasan beragama bagi umat Kristen Koptik." },
        { year: "820 M", title: "Kiprah Imam Syafi'i di Kairo", description: "Perumusan Kaul Qadim (pendapat lama di Baghdad) menjadi Kaul Jadid (pendapat baru di Mesir) dalam Mazhab Syafi'i." },
        { year: "970 M", title: "Pendirian Kota Kairo & Masjid Al-Azhar", description: "Panglima Jauhar As-Siqilli mendirikan Al-Azhar di bawah kepemimpinan Khalifah Al-Mu'izz Lidinillah." },
        { year: "1260 M", title: "Kemenangan Akbar Ain Jalut", description: "Sultan Saifuddin Qutuz dan Panglima Baibars menghentikan ekspansi penghancuran bangsa Mongol terhadap peradaban Islam." }
      ],
      theoriesOrMethods: "Futuh syariah dengan perlindungan hak kaum minoritas (Koptik), pendirian lembaga wakaf pendidikan berkesinambungan, dan integrasi mazhab fiqih mayoritas."
    },
    pastHeritage: [
      {
        id: "masjid-al-azhar",
        name: "Masjid & Universitas Al-Azhar",
        yearBuilt: "970 - 972 M",
        rulerOrDynasty: "Dinasti Fatimiyah / Dilanjutkan Dinasti Ayyubiyah & Mamluk",
        location: "Kairo Tua (Al-Qahirah)",
        category: "Masjid Bersejarah",
        description: "Institusi pendidikan tinggi tertua kedua di dunia yang masih beroperasi secara berkesinambungan hingga saat ini. Menjadi kiblat utama ortodoksi Ahlussunnah wal Jama'ah.",
        architecturalFeatures: "Perpaduan 5 gaya menara dari era Fatimiyah, Mamluk, hingga Utsmani, serambi terbuka tiang marmer kuno, dan ruang halaqah keilmuan.",
        significance: "Pusat transmisi sanad keilmuan Islam, fiqih empat mazhab, dan bahasa Arab sedunia.",
        imageUrl: "/heritage/masjid-al-azhar.jpg"
      },
      {
        id: "benteng-saladin",
        name: "Benteng Shalahuddin Al-Ayyubi (Citadel of Cairo)",
        yearBuilt: "1176 M",
        rulerOrDynasty: "Sultan Shalahuddin Al-Ayyubi (Ayyubiyah)",
        location: "Bukit Muqattam, Kairo",
        category: "Istana & Benteng",
        description: "Benteng pertahanan kokoh yang dibangun untuk menahan serangan Pasukan Salib. Di dalamnya berdiri Masjid Muhammad Ali Pasya berdinding batu pualam pualam putih (Alabaster Mosque).",
        architecturalFeatures: "Tembok tebal batu kapur, Sumur Yusuf sedalam 85 meter yang dipahat di batu cadas, dan menara kembar menjulang.",
        significance: "Pusat komando militer dan pemerintahan Mesir selama lebih dari 700 tahun.",
        imageUrl: "/heritage/benteng-saladin.jpg"
      },
      {
        id: "masjid-sultan-hassan",
        name: "Masjid & Madrasah Sultan Hassan",
        yearBuilt: "1356 - 1363 M",
        rulerOrDynasty: "Sultan An-Nashir Hassan (Kesultanan Mamluk)",
        location: "Kairo",
        category: "Masjid Bersejarah",
        description: "Salah satu karya arsitektur Islam monumental terbesar di dunia. Didesain memiliki 4 iwan raksasa yang masing-masing difungsikan untuk mengajarkan satu mazhab dari empat mazhab fiqih Ahlussunnah.",
        architecturalFeatures: "Ketinggian fasad dinding mencapai 38 meter, pintu gerbang portal raksasa, dan mihrab marmer bertatahkan emas.",
        significance: "Monumen puncak kejayaan seni bangunan zaman Kesultanan Mamluk di Timur Tengah.",
        imageUrl: "/heritage/masjid-sultan-hassan.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "95,8 Juta Jiwa",
      percentageOfTotal: "90% dari total populasi",
      leadingOrganizations: ["Masyikhatul Azhar Asy-Syarif", "Dar al-Ifta al-Mishriyyah (Lembaga Fatwa)", "Kementerian Wakaf Mesir (Wizārat al-Awqāf)"],
      socialAndEconomicRole: "Mesir menjadi produsen ulama, mufti, dan qari' internasional terkemuka, penjaga literatur klasik (turats), serta pionir penerbitan kitab-kitab induk Islam yang dikirim ke seluruh penjuru dunia.",
      modernHighlights: [
        "Lebih dari 300.000 mahasiswa asing (termasuk ribuan pelajar Indonesia) menimba ilmu di Al-Azhar setiap tahun.",
        "Dar al-Ifta Mesir memproses lebih dari 1 juta permohonan fatwa digital per tahun dalam 12 bahasa.",
        "Pelestarian seni tilawah Al-Qur'an qari legendaris seperti Syekh Abdul Basith Abdul Shamad dan Al-Minshawi."
      ]
    },
    islamicCenters: [
      {
        id: "masjid-al-fattah-al-aleem",
        name: "Masjid Al-Fattah Al-Aleem",
        city: "Ibu Kota Administratif Baru (NAC), Kairo",
        type: "Masjid Agung",
        capacity: "17.000 Jamaah",
        foundedYear: "2019 M",
        description: "Salah satu mega-masjid modern terbesar di Timur Tengah dengan 4 menara setinggi 95 meter dan kubah utama raksasa berdiameter 33 meter.",
        significance: "Simbol kemajuan arsitektur Islam kontemporer Mesir modern."
      },
      {
        id: "masjid-amr-bin-ash",
        name: "Masjid Amr bin Ash (Taj Al-Jawami')",
        city: "Fustat, Kairo Tua",
        type: "Masjid Agung",
        capacity: "40.000 Jamaah",
        foundedYear: "641 M",
        description: "Masjid pertama yang didirikan di seantero benua Afrika dan dijuluki 'Mahkota Segala Masjid'. Telah dipugar megah menjadi kompleks ruang publik spiritual.",
        significance: "Pilar pertama masuknya syiar Islam ke daratan benua Afrika."
      }
    ]
  },
  {
    id: "india",
    name: "India (Mughal & Kesultanan Delhi)",
    nativeName: "Bhārat Gaṇarājya",
    flag: "🇮🇳",
    region: "Asia Selatan",
    mapCoordinates: { x: 70, y: 46 },
    summary: "Negara dengan populasi Muslim terbesar kedua di dunia yang pernah dipimpin oleh imperium Islam adidaya Kesultanan Delhi dan Dinasti Mughal, melahirkan mahakarya marmer Taj Mahal dan kekayaan sastra Urdu.",
    historyOfEntry: {
      century: "Abad ke-8 M (711 M di Sindh) hingga Abad ke-16 M (Mughal)",
      primaryRoutes: ["Ekspedisi Muhammad bin Qasim ke Lembah Indus", "Jalur Perdagangan Samudera Hindia di Malabar", "Dakwah Sufi Chishti & Suhrawardi"],
      keyPioneers: ["Muhammad bin Qasim", "Sultan Mahmud Ghaznavi", "Qutbuddin Aibak (Kesultanan Delhi)", "Zahiruddin Babur (Pendiri Mughal)", "Shah Jahan", "Khwaja Moinuddin Chishti (Ajmer)"],
      detailedNarrative: "Islam tiba di anak benua India pada 711 M saat jenderal Bani Umayyah, Muhammad bin Qasim, mengamankan jalur laut Sindh dari bajak laut. Pada abad ke-12 didirikan Kesultanan Delhi yang memerintah ratusan tahun, sebelum dilanjutkan oleh Dinasti Mughal (1526-1857 M). Era Mughal menjadi masa kemakmuran ekonomi dunia yang spektakuler, menyumbang hampir 25% PDB dunia saat itu, serta melahirkan sinergi seni arsitektur Indo-Persia-Islam yang tiada tandingannya.",
      timeline: [
        { year: "711 M", title: "Ekspedisi Sindh oleh Muhammad bin Qasim", description: "Peletakan batu pertama Islam di lembah Sungai Indus dengan jaminan toleransi beragama." },
        { year: "1206 M", title: "Berdirinya Kesultanan Delhi", description: "Qutbuddin Aibak mendirikan Dinasti Mamluk Delhi dan memulai pembangunan menara Qutub Minar." },
        { year: "1526 M", title: "Kemenangan Panipat & Pendirian Dinasti Mughal", description: "Babur mendirikan Kesultanan Mughal yang mempersatukan hampir seluruh anak benua India." },
        { year: "1653 M", title: "Penyelesaian Pembangunan Taj Mahal", description: "Shah Jahan meresmikan mahakarya marmer putih di tepi Sungai Yamuna untuk mengenang Mumtaz Mahal." }
      ],
      theoriesOrMethods: "Dakwah sufistik cinta kasih tanpa memandang sistem kasta (khususnya tarekat Chishti di Ajmer), perlindungan perdagangan maritim di Gujarat dan Malabar, serta asimilasi bahasa melahirkan bahasa Urdu."
    },
    pastHeritage: [
      {
        id: "taj-mahal",
        name: "Taj Mahal",
        yearBuilt: "1632 - 1653 M",
        rulerOrDynasty: "Sultan Shah Jahan / Dinasti Mughal",
        location: "Agra, Uttar Pradesh",
        category: "Istana & Benteng",
        description: "Salah satu dari 7 Keajaiban Dunia modern. Kompleks makam marmer pualam putih bersih berpahatkan ayat-ayat Al-Qur'an dan motif flora batu mulia pietra dura.",
        architecturalFeatures: "Kubah bawang setinggi 73 meter, simetri sempurna 4 menara miring ke luar (pencegah roboh ke kubah jika gempa), taman chahar-bagh melambangkan surga.",
        significance: "Mahakarya arsitektur cinta dan kemegahan peradaban Islam Mughal yang diakui dunia.",
        imageUrl: "/heritage/taj-mahal.jpg"
      },
      {
        id: "benteng-merah-delhi",
        name: "Benteng Merah Delhi (Lal Qila)",
        yearBuilt: "1638 - 1648 M",
        rulerOrDynasty: "Shah Jahan / Dinasti Mughal",
        location: "Old Delhi",
        category: "Istana & Benteng",
        description: "Benteng istana kekaisaran berdinding batu pasir merah sepanjang 2,5 kilometer yang menjadi pusat kekuasaan Mughal selama dua abad.",
        architecturalFeatures: "Gerbang Lahore yang megah, balai pertemuan umum Diwan-i-Aam, dan paviliun Diwan-i-Khas bertuliskan: 'Jika ada surga di bumi, di sinilah tempatnya'.",
        significance: "Simbol kedaulatan politik dan kemegahan seremonial kenegaraan India hingga kini.",
        imageUrl: "/heritage/benteng-merah.jpg"
      },
      {
        id: "qutub-minar",
        name: "Kompleks Qutub Minar & Masjid Quwwat-ul-Islam",
        yearBuilt: "1199 M",
        rulerOrDynasty: "Qutbuddin Aibak & Shamsuddin Iltutmish (Kesultanan Delhi)",
        location: "Mehrauli, New Delhi",
        category: "Masjid Bersejarah",
        description: "Menara bata tertinggi di dunia (72,5 meter) berhiaskan kaligrafi ukir Surah Al-Fath dan ornamen bunga sulur yang menjulang kokoh.",
        architecturalFeatures: "Konstruksi 5 tingkat dari batu pasir merah dan marmer dengan balkon berukir muqarnas rumit.",
        significance: "Monumen penanda awal berdirinya kekuasaan Islam yang berdaulat di India utara.",
        imageUrl: "/heritage/qutub-minar.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "204 Juta Jiwa",
      percentageOfTotal: "14,9% dari total populasi India",
      leadingOrganizations: ["All India Muslim Personal Law Board", "Jamiat Ulema-e-Hind", "Darul Uloom Deoband", "Aligarh Muslim University Alumni"],
      socialAndEconomicRole: "Umat Islam India memberikan kontribusi masif dalam industri perfilman (Bollywood), sastra, teknologi informasi, kuliner khas, dan melahirkan gerakan pembaharuan hadits terdepan.",
      modernHighlights: [
        "Pusat pencetakan ulama hadits internasional di pesantren Darul Uloom Deoband dan Nadwatul Ulama.",
        "Kontribusi tokoh muslim dalam sains kedokteran dan program antariksa nasional (seperti Dr. APJ Abdul Kalam, Presiden India ke-11).",
        "Kekayaan tradisi kaligrafi huruf Nastaliq dan festival perayaan Maulid serta Idul Fitri yang semarak."
      ]
    },
    islamicCenters: [
      {
        id: "masjid-jama-delhi",
        name: "Masjid Jama Delhi (Masjid-i-Jahan-Numa)",
        city: "Old Delhi",
        type: "Masjid Agung",
        capacity: "25.000 Jamaah",
        foundedYear: "1656 M (Dibangun oleh Shah Jahan)",
        description: "Masjid paling agung di India yang berdiri di atas bukit batu karang tinggi. Memiliki halaman luas berbatu merah dan tiga kubah marmer bergaris hitam-putih.",
        significance: "Pusat peribadatan utama umat Islam di ibu kota India dan cagar budaya dunia."
      },
      {
        id: "darul-uloom-deoband",
        name: "Darul Uloom Deoband",
        city: "Deoband, Uttar Pradesh",
        type: "Universitas Islam",
        capacity: "10.000 Santri/Mahasiswa",
        foundedYear: "1866 M",
        description: "Pesantren madrasah tradisional terbesar di Asia Selatan yang memimpin perlawanan anti-kolonialisme Inggris dan mencetak jutaan penghafal hadits Kutubus Sittah.",
        significance: "Kiblat gerakan keilmuan Islam Deobandi yang tersebar di Pakistan, India, Bangladesh, hingga Inggris."
      }
    ]
  },
  {
    id: "china",
    name: "Tiongkok (China)",
    nativeName: "Zhōnghuá Rénmín Gònghéguó",
    flag: "🇨🇳",
    region: "Asia Timur",
    mapCoordinates: { x: 80, y: 38 },
    summary: "Negara peradaban kuno tempat syiar Islam telah bersemi sejak masa Khalifah Utsman bin Affan (651 M) melalui Jalur Sutra darat dan Jalur Maritim, melahirkan akulturasi arsitektur Pagoda-Islam dan Laksamana Cheng Ho.",
    historyOfEntry: {
      century: "Abad ke-7 M (651 M - Era Dinasti Tang)",
      primaryRoutes: ["Jalur Sutra Darat (Silk Road via Chang'an/Xi'an)", "Jalur Sutra Maritim (Guangzhou & Quanzhou)", "Pelayaran Diplomatik Laksamana Cheng Ho"],
      keyPioneers: ["Sa'ad bin Abi Waqqas (Utusan Khalifah Utsman)", "Kaisar Gaozong (Dinasti Tang)", "Laksamana Cheng Ho (Zheng He, Dinasti Ming)", "Syekh Wang Daiyu (Filsuf Muslim Han)"],
      detailedNarrative: "Islam masuk ke Tiongkok secara resmi pada tahun 651 M ketika Khalifah Utsman bin Affan mengirimkan delegasi diplomatik yang dipimpin oleh sahabat Nabi, Sa'ad bin Abi Waqqas, kepada Kaisar Gaozong dari Dinasti Tang. Kaisar menyambut utusan tersebut dengan penuh penghormatan dan memerintahkan pembangunan Masjid Huaisheng di Guangzhou. Pada era Dinasti Yuan dan Ming, kaum Muslim (terutama etnis Hui) memegang posisi strategis dalam astronomi, militer, dan diplomasi maritim di bawah kepemimpinan Laksamana Haji Cheng Ho.",
      timeline: [
        { year: "651 M", title: "Kedutaan Pertama Islam di Istana Chang'an", description: "Sa'ad bin Abi Waqqas bertemu Kaisar Gaozong, mencatat tanggal resmi kehadiran Islam di Tiongkok." },
        { year: "742 M", title: "Pembangunan Masjid Agung Xi'an", description: "Masjid tertua dan terbesar yang memadukan estetika paviliun kayu Tiongkok kuno dengan arah kiblat." },
        { year: "1279 M", title: "Zaman Dinasti Yuan & Ilmuwan Muslim", description: "Kaum Muslim memimpin Biro Astronomi Kerajaan dan pembangunan saluran air ibu kota Dadu (Beijing)." },
        { year: "1405-1433 M", title: "Tujuh Pelayaran Samudera Laksamana Cheng Ho", description: "Armada 300 kapal raksasa menjelajahi Asia Tenggara, India, hingga pesisir Afrika sambil menyebarkan syiar Islam." }
      ],
      theoriesOrMethods: "Akulturasi 'Konfusianisme-Islam' (Han Kitab), penghormatan terhadap tata krama lokal, penguasaan rute dagang Jalur Sutra, dan kecakapan ilmu falak matematika."
    },
    pastHeritage: [
      {
        id: "masjid-xian",
        name: "Masjid Agung Xi'an (Xī'ān Dàqīngzhēnsì)",
        yearBuilt: "742 M (Dinasti Tang & Direnovasi Dinasti Ming)",
        rulerOrDynasty: "Kaisar Xuanzong / Kaisar Hongwu",
        location: "Xi'an, Shaanxi (Ujung Jalur Sutra)",
        category: "Masjid Bersejarah",
        description: "Masjid tertua dan terluas di Tiongkok. Sepintas tampak seperti kuil istana tradisional dengan atap pagoda melengkung, namun seluruh interiornya dihiasi ukiran kaligrafi Al-Qur'an 30 juz beraksara Khat Sini.",
        architecturalFeatures: "Gapura kayu tradisional (paifang), paviliun menara adzan berbentuk pagoda segi delapan, dan dinding kayu jati berukir seluruh ayat Al-Qur'an.",
        significance: "Karya puncak akulturasi harmonis antara kebudayaan Tionghoa klasik dan ajaran Islam.",
        imageUrl: "/heritage/masjid-agung-xian.jpg"
      },
      {
        id: "masjid-huaisheng",
        name: "Masjid Huaisheng & Menara Cahaya (Guangta)",
        yearBuilt: "627 - 651 M",
        rulerOrDynasty: "Sa'ad bin Abi Waqqas / Dinasti Tang",
        location: "Guangzhou, Guangdong",
        category: "Masjid Bersejarah",
        description: "Dikenal sebagai 'Masjid Pengingat Nabi'. Memiliki menara silinder polos setinggi 36 meter yang dahulu berfungsi ganda sebagai menara adzan sekaligus mercusuar bagi kapal pedagang di Sungai Mutiara.",
        architecturalFeatures: "Menara Guangta tanpa ornamen gaya bata kuno, serambi beratap genteng hijau kekaisaran, dan nisan para sahabat nabi.",
        significance: "Situs bersejarah tertua hubungan maritim dunia Arab-Islam dengan peradaban Tiongkok.",
        imageUrl: "/heritage/masjid-huaisheng.jpg"
      },
      {
        id: "makam-cheng-ho",
        name: "Situs & Memorial Laksamana Cheng Ho",
        yearBuilt: "1433 M",
        rulerOrDynasty: "Kaisar Yongle / Dinasti Ming",
        location: "Nanjing, Jiangsu",
        category: "Makam & Situs Kuno",
        description: "Monumen penghormatan bagi pelaut dan diplomat Muslim terbesar Tiongkok, Ma Sanbao (Laksamana Haji Zheng He), yang membawa misi perdamaian ke lebih dari 30 negara maritim.",
        architecturalFeatures: "Undakan batu bertuliskan kalimat 'Allahu Akbar' beraksara Arab di bagian kepala makam dan museum kapal harta karun.",
        significance: "Bukti kontribusi kaum Muslim Tiongkok dalam sejarah maritim dunia.",
        imageUrl: "/heritage/makam-laksamana-ceng-ho.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "28,5 Juta Jiwa",
      percentageOfTotal: "2,0% dari total populasi (Terdiri atas 10 etnis: Hui, Uighur, Kazakh, Dongxiang, dll)",
      leadingOrganizations: ["Asosiasi Islam Tiongkok (China Islamic Association)", "Institut Teologi Islam Beijing", "Komite Restorasi Warisan Jalur Sutra"],
      socialAndEconomicRole: "Komunitas Muslim Tiongkok (terutama etnis Hui) unggul dalam jaringan kuliner halal (Qingzhen), seni kaligrafi khas Tionghoa-Arab (Khat Sini), serta menjadi duta jembatan inisiatif 'Belt and Road' (Jalur Sutra Modern) dengan negara-negara Timur Tengah.",
      modernHighlights: [
        "Lebih dari 39.000 masjid aktif tersebar di seluruh provinsi Tiongkok.",
        "Pelestarian manuskrip Al-Qur'an tulisan tangan tertua di Tiongkok di Masjid Dongguan dan Masjid Niujie.",
        "Industri makanan halal bersertifikat yang berkembang pesat melayani jutaan masyarakat urban."
      ]
    },
    islamicCenters: [
      {
        id: "masjid-niujie",
        name: "Masjid Niujie Beijing",
        city: "Distrik Xicheng, Beijing",
        type: "Masjid Agung",
        capacity: "1.500 Jamaah",
        foundedYear: "996 M (Era Dinasti Liao)",
        description: "Masjid tertua dan paling bersejarah di ibu kota Beijing. Eksteriornya mengadopsi arsitektur istana kayu Dinasti Ming dan Qing bercat merah tua, sementara interiornya kental dengan kaligrafi Arab bersepuh emas.",
        significance: "Jantung komunitas Muslim ibu kota Tiongkok dan destinasi utama kunjungan para pemimpin negara dunia."
      },
      {
        id: "masjid-id-kah",
        name: "Masjid Id Kah (Kashgar)",
        city: "Kashgar, Xinjiang",
        type: "Masjid Agung",
        capacity: "20.000 Jamaah",
        foundedYear: "1442 M",
        description: "Masjid terbesar di Tiongkok barat yang terletak di kota oasis Jalur Sutra Kuno. Menampilkan fasad bata kuning khas Asia Tengah dengan gerbang berkubah iwan raksasa.",
        significance: "Ikon peradaban dan pusat perayaan Idul Fitri akbar di wilayah Asia Tengah."
      }
    ]
  },
  {
    id: "palestina",
    name: "Palestina (Al-Quds / Syam)",
    nativeName: "Daulat Filasṭīn (Al-Quds)",
    flag: "🇵🇸",
    region: "Timur Tengah",
    mapCoordinates: { x: 55, y: 41 },
    summary: "Bumi para nabi, negeri Isra' Mi'raj Nabi Muhammad SAW, tempat berdirinya kiblat pertama umat Islam (Masjid Al-Aqsa), dan tanah wakaf suci yang diperjuangkan keadilan dan kemerdekaannya oleh seluruh umat manusia.",
    historyOfEntry: {
      century: "Abad ke-7 M (637 M - Era Khalifah Umar bin Khattab)",
      primaryRoutes: ["Perjanjian Damai Al-Uhda Al-Umariyyah", "Pembebasan Damai Kota Yerusalem (Al-Quds)", "Pembebasan Kembali oleh Shalahuddin Al-Ayyubi (1187 M)"],
      keyPioneers: ["Khalifah Umar bin Khattab", "Abu Ubaidah bin Al-Jarrah", "Sultan Shalahuddin Al-Ayyubi", "Khalifah Abdul Malik bin Marwan (Umayyah)"],
      detailedNarrative: "Kota suci Al-Quds (Yerusalem) diserahkan secara damai kepada Khalifah Umar bin Khattab pada tahun 637 M oleh Patriark Sophronius. Sayyidina Umar datang dengan pakaian sederhana menuntun untanya bergantian dengan pelayannya, lalu menulis dokumen 'Al-Uhda Al-Umariyyah' (Pakta Umar) yang menjamin keselamatan jiwa, harta, dan kebebasan ibadah umat Kristen tanpa paksaan. Sayyidina Umar membersihkan sendiri area Al-Aqsa dari timbunan sampah Romawi. Pada era Dinasti Umayyah dibangun Kubah As-Sakhrah (Dome of the Rock), dan pada 1187 M Shalahuddin Al-Ayyubi membebaskan kembali kota suci ini dari cengkeraman Pasukan Salib dengan kemuliaan akhlak.",
      timeline: [
        { year: "621 M", title: "Peristiwa Isra' Mi'raj", description: "Rasulullah SAW diperjalankan dari Masjidil Haram ke Masjid Al-Aqsa lalu naik ke Sidratul Muntaha." },
        { year: "637 M", title: "Fathu Baitul Maqdis & Pakta Umar", description: "Khalifah Umar menerima kunci kota dan menjamin toleransi beragama paling bersejarah." },
        { year: "691 M", title: "Pembangunan Kubah As-Sakhrah", description: "Khalifah Abdul Malik bin Marwan mendirikan mahakarya kubah emas di atas batu pijakan Mi'raj." },
        { year: "1187 M", title: "Kemenangan Hattin & Shalahuddin", description: "Pembebasan damai Al-Quds oleh Shalahuddin Al-Ayyubi tanpa pertumpahan darah warga sipil." }
      ],
      theoriesOrMethods: "Futuh perdamaian bermartabat, perlindungan situs suci lintas agama, penetapan sistem tanah wakaf abadi (Awqaf Islamiyyah), dan keteguhan ribath menjaga kesucian masjid."
    },
    pastHeritage: [
      {
        id: "masjid-al-aqsa",
        name: "Kompleks Al-Haram Asy-Syarif & Masjid Al-Qibli",
        yearBuilt: "Zaman Nabi Sulaiman / Dibangun Kembali Khalifah Al-Walid bin Abdul Malik (705 M)",
        rulerOrDynasty: "Bani Umayyah & Dinasti Ayyubiyah/Mamluk",
        location: "Kota Tua Al-Quds (Yerusalem Timur)",
        category: "Masjid Bersejarah",
        description: "Kiblat pertama umat Islam dan masjid paling suci ketiga di dunia. Kawasan suci seluas 144.000 meter persegi mencakup Masjid Al-Qibli berkubah perak, Mushalla Marwani, dan puluhan madrasah kuno.",
        architecturalFeatures: "Kubah perak timbal, mimbar kayu cedar Shalahuddin Al-Ayyubi bertatahkan gading tanpa paku, dan lorong pilar marmer klasik.",
        significance: "Tempat sholat para nabi yang diimami oleh Rasulullah SAW saat malam Isra' Mi'raj.",
        imageUrl: "/heritage/masjid-al-aqsha.jpg"
      },
      {
        id: "dome-of-the-rock",
        name: "Kubah As-Sakhrah (Dome of the Rock)",
        yearBuilt: "688 - 691 M",
        rulerOrDynasty: "Khalifah Abdul Malik bin Marwan / Dinasti Umayyah",
        location: "Al-Haram Asy-Syarif, Al-Quds",
        category: "Masjid Bersejarah",
        description: "Monumen arsitektur Islam tertua yang masih utuh berdiri di dunia. Dibangun menaungi As-Sakhrah (batu karang suci) tempat pijakan Rasulullah SAW saat Mi'raj ke langit ketujuh.",
        architecturalFeatures: "Struktur oktagonal (segi delapan) dilapisi marmer dan keramik Persia porselen biru, serta kubah berlapis emas 24 karat yang ikonik.",
        significance: "Mahakarya seni arsitektur awal Islam dan simbol visual identitas spiritual Palestina.",
        imageUrl: "/heritage/kubah-as-sakhrah.jpg"
      },
      {
        id: "masjid-ibrahimi",
        name: "Masjid Ibrahimi (Haram Al-Khalil)",
        yearBuilt: "Zaman Kuno & Dipugar Era Kesultanan Mamluk/Ayyubiyah",
        rulerOrDynasty: "Shalahuddin Al-Ayyubi / Sultan Baibars",
        location: "Hebron (Al-Khalil)",
        category: "Makam & Situs Kuno",
        description: "Kompleks suci tertua keempat yang menaungi makam Nabi Ibrahim AS, Siti Sarah, Nabi Ishaq AS, Nabi Ya'qub AS, dan para istrinya.",
        architecturalFeatures: "Dinding batu megalit herodian, mimbar kayu berukir peninggalan Dinasti Fatimiyah dan Mamluk, serta menara persegi kokoh.",
        significance: "Situs ziarah sakral yang menjadi tonggak silsilah para nabi utusan Allah SWT.",
        imageUrl: "/heritage/masjid-ibrahimi.jpg"
      }
    ],
    contemporaryDevelopment: {
      muslimPopulation: "4,9 Juta Jiwa",
      percentageOfTotal: "93% dari populasi Palestina",
      leadingOrganizations: ["Departemen Wakaf Islam Al-Quds (Jordan Awqaf)", "Darul Ifta Palestina", "Komite Pelindung Al-Aqsa (Murabithun)"],
      socialAndEconomicRole: "Umat Islam Palestina memegang peran sentral sebagai penjaga garis terdepan (Murabithun) kesucian Masjid Al-Aqsa, melestarikan manuskrip perpustakaan Al-Aqsa, dan menjadi simbol keteguhan serta perjuangan kemanusiaan dunia.",
      modernHighlights: [
        "Ribuan warga setia menghadiri sholat subuh akbar dan sholat Jumat berjamaah menjaga marwah Al-Aqsa.",
        "Dukungan solidaritas kemanusiaan tanpa henti dari Indonesia dan seluruh bangsa merdeka di dunia.",
        "Pelestarian tradisi musik shalawat, kaligrafi zaitun, dan pendidikan tahfiz Al-Qur'an anak-anak Yerusalem."
      ]
    },
    islamicCenters: [
      {
        id: "perpustakaan-al-aqsa",
        name: "Perpustakaan & Museum Islam Al-Aqsa",
        city: "Al-Haram Asy-Syarif, Al-Quds",
        type: "Pusat Kebudayaan & Riset",
        capacity: "Ribuan Manuskrip Langka",
        foundedYear: "1922 M",
        description: "Lembaga riset dan pelestarian yang menyimpan lebih dari 4.000 naskah kuno Al-Qur'an bertinta emas sejak era Bani Umayyah, Abbasiyah, Mamluk, hingga Utsmaniyah.",
        significance: "Benteng penjaga bukti autentik sejarah peradaban Islam di tanah Syam."
      },
      {
        id: "masjid-omar-jerusalem",
        name: "Masjid Umar bin Khattab (Al-Quds)",
        city: "Kota Tua Al-Quds (Depan Makam Suci)",
        type: "Masjid Bersejarah",
        capacity: "1.000 Jamaah",
        foundedYear: "935 M (Masa Khalifah Al-Qahir)",
        description: "Didirikan persis di tempat Sayyidina Umar menolak sholat di dalam Gereja Makam Suci agar orang Islam kelak tidak mengubah gereja tersebut menjadi masjid.",
        significance: "Monumen abadi keteladanan toleransi dan penghormatan hak antar-umat beragama."
      }
    ]
  }
];
