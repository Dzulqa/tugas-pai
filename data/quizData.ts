export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-based index
  category: "Sejarah Masuk" | "Peninggalan Penguasa" | "Pusat Peradaban" | "Islam Kontemporer";
  difficulty: "Mudah" | "Sedang" | "Tantangan";
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Siapakah panglima Muslim yang memimpin penyeberangan Selat Gibraltar pada tahun 711 M dan membuka era peradaban Islam di Semenanjung Iberia (Andalusia/Spanyol)?",
    options: [
      "Shalahuddin Al-Ayyubi",
      "Thariq bin Ziyad",
      "Muhammad bin Qasim",
      "Amr bin Ash"
    ],
    correctAnswer: 1,
    category: "Sejarah Masuk",
    difficulty: "Mudah",
    explanation: "Thariq bin Ziyad adalah panglima muda di bawah pimpinan Musa bin Nushair yang menyeberang ke Semenanjung Iberia pada 711 M. Nama bukit tempatnya mendarat diabadikan menjadi 'Jabal Thariq' (Gibraltar)."
  },
  {
    id: 2,
    question: "Masjid bersejarah di Jawa yang memiliki menara bata merah menyerupai bentuk candi Hindu Jawa Timur sebagai bentuk akulturasi toleransi dakwah dibangun oleh...",
    options: [
      "Sunan Kalijaga",
      "Sunan Kudus (Ja'far Shadiq)",
      "Sunan Gunung Jati",
      "Raden Patah"
    ],
    correctAnswer: 1,
    category: "Peninggalan Penguasa",
    difficulty: "Mudah",
    explanation: "Sunan Kudus membangun Menara Kudus pada 1549 M dengan corak candi dan melarang menyembelih sapi demi menghormati masyarakat Hindu lokal pada masa itu sebagai metode dakwah bil-hikmah."
  },
  {
    id: 3,
    question: "Sultan dari Kesultanan Utsmaniyah yang berhasil menaklukkan benteng Konstantinopel pada hari Selasa, 29 Mei 1453 M dalam usia 21 tahun adalah...",
    options: [
      "Sultan Mehmed II (Muhammad Al-Fatih)",
      "Sultan Suleiman Al-Qanuni",
      "Sultan Selim I",
      "Osman Ghazi"
    ],
    correctAnswer: 0,
    category: "Sejarah Masuk",
    difficulty: "Mudah",
    explanation: "Sultan Mehmed II berhasil menaklukkan Konstantinopel pada usia 21 tahun, menggenapi nubuat Rasulullah SAW yang menyebut pemimpin dan pasukan tersebut sebagai 'sebaik-baik pemimpin dan sebaik-baik pasukan'."
  },
  {
    id: 4,
    question: "Istana megah di Granada, Spanyol yang menjadi saksi puncak keindahan seni arsitektur Dinasti Nashriyah dengan semboyan 'Wa La Ghaliba Illallah' adalah...",
    options: [
      "Istana Topkapi",
      "Istana Maimun",
      "Istana Alhambra (Qal'at Al-Hamra)",
      "Benteng Merah (Lal Qila)"
    ],
    correctAnswer: 2,
    category: "Peninggalan Penguasa",
    difficulty: "Sedang",
    explanation: "Istana Alhambra di Granada merupakan karya agung Bani Ahmar (Nashriyah). Di dinding-dindingnya diukir semboyan tauhid legendaris 'Wa La Ghaliba Illallah' (Tiada Pemenang Selain Allah)."
  },
  {
    id: 5,
    question: "Pada masa pemerintahan Khalifah siapakah utusan resmi Islam pertama kali tiba di istana Dinasti Tang di Chang'an (Tiongkok) pada tahun 651 M?",
    options: [
      "Khalifah Abu Bakar Ash-Shiddiq",
      "Khalifah Umar bin Khattab",
      "Khalifah Utsman bin Affan",
      "Khalifah Ali bin Abi Thalib"
    ],
    correctAnswer: 2,
    category: "Sejarah Masuk",
    difficulty: "Tantangan",
    explanation: "Khalifah Utsman bin Affan mengutus sahabat Sa'ad bin Abi Waqqas pada tahun 651 M ke istana Kaisar Gaozong dari Dinasti Tang, yang kemudian menyambut ramah dan mengizinkan pembangunan masjid di Guangzhou."
  },
  {
    id: 6,
    question: "Mahakarya arsitektur makam marmer putih di Agra, India yang dibangun oleh Sultan Shah Jahan dari Dinasti Mughal untuk mengenang istrinya adalah...",
    options: [
      "Qutub Minar",
      "Taj Mahal",
      "Hagia Sophia",
      "Benteng Shalahuddin"
    ],
    correctAnswer: 1,
    category: "Peninggalan Penguasa",
    difficulty: "Mudah",
    explanation: "Taj Mahal dibangun oleh Sultan Mughal Shah Jahan antara tahun 1632 hingga 1653 M untuk istrinya Mumtaz Mahal. Bangunan ini memadukan estetika arsitektur Persia, Turki, dan India Islam."
  },
  {
    id: 7,
    question: "Universitas dan masjid bersejarah di Kairo, Mesir yang didirikan oleh Dinasti Fatimiyah pada tahun 970 M dan menjadi kiblat keilmuan Ahlussunnah wal Jama'ah hingga kini adalah...",
    options: [
      "Universitas Al-Azhar",
      "Universitas Al-Qarawiyyin",
      "Nidzamiyah Baghdad",
      "Universitas Sankore"
    ],
    correctAnswer: 0,
    category: "Pusat Peradaban",
    difficulty: "Mudah",
    explanation: "Universitas & Masjid Al-Azhar di Kairo didirikan oleh panglima Dinasti Fatimiyah, Jauhar As-Siqilli, pada 970 M dan kini menjadi benteng utama fatwa serta kajian Islam internasional."
  },
  {
    id: 8,
    question: "Panglima yang diutus oleh Khalifah Umar bin Khattab untuk membebaskan Mesir dari hegemoni Romawi Bizantium pada 641 M adalah...",
    options: [
      "Khalid bin Walid",
      "Amr bin Ash",
      "Abu Ubaidah bin Al-Jarrah",
      "Tariq bin Ziyad"
    ],
    correctAnswer: 1,
    category: "Sejarah Masuk",
    difficulty: "Sedang",
    explanation: "Panglima Amr bin Ash membebaskan Mesir secara damai pada tahun 641 M dan mendirikan kota Fustat serta Masjid Amr bin Ash yang menjadi masjid pertama di seantero benua Afrika."
  },
  {
    id: 9,
    question: "Bangunan oktagonal berkubah emas peninggalan Khalifah Abdul Malik bin Marwan (Dinasti Umayyah) yang menaungi batu pijakan Isra' Mi'raj di Al-Quds adalah...",
    options: [
      "Kubah As-Sakhrah (Dome of the Rock)",
      "Masjid Nabawi",
      "Masjid Biru",
      "Masjid Menara Kudus"
    ],
    correctAnswer: 0,
    category: "Peninggalan Penguasa",
    difficulty: "Sedang",
    explanation: "Kubah As-Sakhrah dibangun antara 688-691 M oleh Khalifah Umayyah Abdul Malik bin Marwan menaungi batu karang suci (As-Sakhrah Al-Musyarrafah) dalam kawasan kompleks Masjid Al-Aqsa."
  },
  {
    id: 10,
    question: "Negara berpenduduk Muslim terbesar di dunia pada era kontemporer saat ini dengan populasi Muslim melebihi 240 juta jiwa adalah...",
    options: [
      "Arab Saudi",
      "Pakistan",
      "Indonesia",
      "Turki"
    ],
    correctAnswer: 2,
    category: "Islam Kontemporer",
    difficulty: "Mudah",
    explanation: "Indonesia merupakan negara dengan populasi Muslim terbesar di dunia (sekitar 241+ juta jiwa atau 86,7% dari populasi), menjadi pelopor moderasi beragama dan ekonomi syariah dunia."
  },
  {
    id: 11,
    question: "Dokumen perdamaian bersejarah yang dikeluarkan Khalifah Umar bin Khattab ketika menerima penyerahan kota suci Al-Quds (Yerusalem) pada 637 M dinamakan...",
    options: [
      "Piagam Madinah",
      "Perjanjian Hudaibiyah",
      "Al-Uhda Al-Umariyyah (Pakta Umar)",
      "Perjanjian Aqabah"
    ],
    correctAnswer: 2,
    category: "Sejarah Masuk",
    difficulty: "Tantangan",
    explanation: "Al-Uhda Al-Umariyyah adalah maklumat toleransi dan perlindungan hak asasi yang menjamin keselamatan jiwa, gereja, salib, dan kebebasan peribadatan umat Nasrani di Baitul Maqdis."
  },
  {
    id: 12,
    question: "Pelaut tangguh dan diplomat Muslim asal Tiongkok pada era Dinasti Ming yang memimpin tujuh ekspedisi maritim raksasa ke Nusantara, India, hingga Afrika adalah...",
    options: [
      "Laksamana Cheng Ho (Zheng He)",
      "Sunan Gresik",
      "Ibnu Batutah",
      "Ma Huan"
    ],
    correctAnswer: 0,
    category: "Pusat Peradaban",
    difficulty: "Mudah",
    explanation: "Laksamana Haji Zheng He (Cheng Ho) adalah laksamana Muslim kepercayaan Kaisar Yongle yang memimpin armada ratusan kapal melintasi Samudera Hindia dan singgah di berbagai pelabuhan Nusantara."
  }
];
