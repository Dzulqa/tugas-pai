"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  IconSparkles,
  IconChevronRight,
  IconGlobe,
  IconLandmark,
  IconBook,
  IconCheckCircle,
} from "./Icons";

interface StoryChapter {
  id: number;
  badge: string;
  century: string;
  title: string;
  arabicPhrase: string;
  arabicMeaning: string;
  description: string;
  relicName: string;
  relicDetail: string;
  archiveLocation: string;
  provenance: string;
  imageSrc: string;
  aspectRatio: number; // Width / Height of the authentic raw photograph
  highlights: string[];
  colorHex: number;
  textColor: string;
  borderColor: string;
}

const CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    badge: "Fase 1: Fondasi Risalah",
    century: "Abad ke-7 M (610 - 632 M)",
    title: "Makkah & Madinah: Fajar Tauhid & Ka'bah Suci",
    arabicPhrase: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
    arabicMeaning:
      "“Sesungguhnya aku diutus hanyalah untuk menyempurnakan kemuliaan akhlak.” (HR. Al-Bukhari)",
    description:
      "Peradaban Islam bermula dari wahyu Al-Qur'an di Gua Hira. Ka'bah disucikan kembali sebagai kiblat tauhid sedunia. Di Madinah dibangun masyarakat madani berkeadilan dengan Piagam Madinah yang menjamin hak asasi dan pluralisme masyarakat.",
    relicName: "Ka'bah Al-Musyarrafah & Pelataran Suci",
    relicDetail:
      "Foto dokumentasi fisik asli Ka'bah di Masjidil Haram dengan selubung Kiswah sutra hitam bersulam benang emas, Pintu Emas Bab al-Ka'bah, dan Hajar Aswad.",
    archiveLocation: "Makkah Al-Mukarramah, Arab Saudi",
    provenance: "Arsip Dokumentasi Resmi Masjidil Haram & Wikimedia Commons",
    imageSrc: "/relics/kaabah.jpg",
    aspectRatio: 1.0, // 1500 x 1500 (Presisi 1:1 persegi asli tanpa gepeng)
    highlights: [
      "Wahyu pertama Surah Al-'Alaq 1-5 di Jabal Nur",
      "Pembersihan 360 berhala di sekeliling Ka'bah saat Fathu Makkah (630 M)",
      "Piagam Madinah sebagai konstitusi tertulis pertama dunia",
    ],
    colorHex: 0xf59e0b,
    textColor: "text-amber-400",
    borderColor: "border-amber-500/40",
  },
  {
    id: 2,
    badge: "Fase 2: Zaman Keemasan",
    century: "Abad ke-8 - 13 M (750 - 1258 M)",
    title: "Baitul Hikmah & Andalusia: Episentrum Sains & Falak",
    arabicPhrase: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    arabicMeaning:
      "“Menuntut ilmu itu wajib bagi setiap muslim.” (HR. Ibnu Majah)",
    description:
      "Umat Islam memimpin peradaban dunia dalam astronomi, matematika, kedokteran, dan filsafat. Di Baghdad berdiri lembaga riset Baitul Hikmah yang dipimpin Al-Khawarizmi, sementara Cordoba menerangi Eropa dengan perpustakaan raksasa dan sains mutakhir.",
    relicName: "Astrolabe Falak Logam Kuningan Asli",
    relicDetail:
      "Foto artefak fisik asli instrumen astronomi dan falak berbahan kuningan berukir dengan piringan koordinat langit, lingkaran zodiak, dan penentu arah kiblat.",
    archiveLocation: "Museum Sains Islam & Koleksi Bersejarah",
    provenance: "Arsip Koleksi Artefak Bersejarah Dunia & Wikimedia Commons",
    imageSrc: "/relics/astrolabe.jpg",
    aspectRatio: 0.75, // 2448 x 3264 (Presisi 3:4 portrait vertikal asli tanpa gepeng)
    highlights: [
      "Penemuan angka nol (0), sistem desimal, dan Aljabar oleh Al-Khawarizmi",
      "Kitab kedokteran dunia 'Al-Qanun fi at-Tibb' karya Ibnu Sina",
      "Ratusan ribu manuskrip ilmiah di perpustakaan Cordoba",
    ],
    colorHex: 0x10b981,
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/40",
  },
  {
    id: 3,
    badge: "Fase 3: Kejayaan Imperium",
    century: "Abad ke-14 - 17 M (1453 - 1650 M)",
    title: "Utsmaniyah & Mughal: Puncak Arsitektur Kubah Agung",
    arabicPhrase: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    arabicMeaning:
      "“Sesungguhnya Allah itu Maha Indah dan mencintai keindahan.” (HR. Muslim)",
    description:
      "Penaklukan bersejarah Konstantinopel (1453 M) oleh Sultan Muhammad Al-Fatih melahirkan era kejayaan kekhalifahan Utsmaniyah. Maestro arsitektur Mimar Sinan menciptakan mahakarya kubah gantung monumental yang memadukan akustik sempurna dan keindahan spiritual.",
    relicName: "Kubah Monumental & Minaret Kesultanan Utsmaniyah",
    relicDetail:
      "Foto asli kemegahan arsitektur kubah bertingkat bergaya Kesultanan Utsmaniyah dan menara minaret menjulang tinggi di Masjid Sultan Ahmed (Blue Mosque), Istanbul.",
    archiveLocation: "Istanbul, Republik Turki (Kekhalifahan Utsmaniyah)",
    provenance: "Arsip Warisan Arsitektur Islam UNESCO & Wikimedia Commons",
    imageSrc: "/relics/dome.jpg",
    aspectRatio: 1.333, // 2560 x 1920 (Presisi 4:3 landscape horisontal asli tanpa gepeng)
    highlights: [
      "Fathu Konstantinopel oleh Sultan Mehmed II pada usia 21 tahun",
      "Karya arsitek legendaris Mimar Sinan di tiga benua",
      "Keagungan arsitektur marmer putih Taj Mahal di India",
    ],
    colorHex: 0x06b6d4,
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
  },
  {
    id: 4,
    badge: "Fase 4: Dakwah Nusantara",
    century: "Abad ke-13 - 16 M (1267 - 1550 M)",
    title: "Nusantara: Samudera Rempah & Akulturasi Wali Songo",
    arabicPhrase:
      "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ",
    arabicMeaning:
      "“Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pengajaran yang baik...” (QS. An-Nahl: 125)",
    description:
      "Islam masuk ke Nusantara secara damai melalui jaringan perdagangan maritim rempah. Para wali tasawuf (Wali Songo) mengakulturasikan ajaran tauhid dengan kearifan lokal seperti wayang, tembang, dan arsitektur gapura candi yang berjiwa Islam.",
    relicName: "Kompas Maritim Binnacle Pelaut Bersejarah",
    relicDetail:
      "Foto asli instrumen kompas navigasi kuningan maritim dalam wadah kayu jati/mahoni yang menjadi pedoman arah kiblat bagi para saudagar dan musafir Muslim di Samudera Hindia.",
    archiveLocation: "Jalur Pelayaran Rempah Nusantara - Samudera Hindia",
    provenance: "Arsip Navigasi Bahari Kuno & Wikimedia Commons",
    imageSrc: "/relics/compass.jpg",
    aspectRatio: 1.561, // 2203 x 1411 (Presisi 16:10 landscape lebar asli tanpa gepeng)
    highlights: [
      "Dakwah kultural Wali Songo yang menghormati tradisi lokal",
      "Kesultanan Samudera Pasai & Demak sebagai pilar kepemimpinan Islam",
      "Indonesia menjadi negeri berpenduduk muslim terbesar di dunia",
    ],
    colorHex: 0xa855f7,
    textColor: "text-purple-400",
    borderColor: "border-purple-500/40",
  },
];

// Helper to generate circular glowing particle texture
function createParticleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255, 255, 255, 1)");
  grad.addColorStop(0.3, "rgba(254, 240, 138, 0.8)");
  grad.addColorStop(0.7, "rgba(245, 158, 11, 0.2)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

// Helper to generate authentic Islamic seal backplate texture for the 3D museum plaque
function createBackplateTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d")!;

  // Deep obsidian slate background
  ctx.fillStyle = "#090d16";
  ctx.fillRect(0, 0, 1024, 1024);

  // Concentric golden borders
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 8;
  ctx.strokeRect(30, 30, 964, 964);

  ctx.strokeStyle = "#fef08a";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 924, 924);

  // Geometric 8-pointed star in center
  ctx.save();
  ctx.translate(512, 512);

  ctx.strokeStyle = "rgba(245, 158, 11, 0.6)";
  ctx.lineWidth = 4;
  for (let r = 0; r < 2; r++) {
    ctx.rotate((Math.PI / 4) * r);
    ctx.strokeRect(-220, -220, 440, 440);
  }

  // Central Seal Arabic Calligraphy
  ctx.fillStyle = "#fef08a";
  ctx.font = "bold 44px 'Amiri', 'Traditional Arabic', serif";
  ctx.textAlign = "center";
  ctx.fillText("تُرَاثُ الْحَضَارَةِ الْإِسْلَامِيَّةِ", 0, 15);

  ctx.font = "bold 24px sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("HISTORICAL ARTIFACT ARCHIVE", 0, 75);
  ctx.fillText("TUNAS PERADABAN ISLAM • PAI-BP XII", 0, -60);

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export default function ThreeScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"3d" | "photo">("3d");
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  const activeChapterRef = useRef(0);
  activeChapterRef.current = activeChapterIndex;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 450;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 2, 52);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Enable high-anisotropy filtering for razor-sharp textures
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // 2. Museum Studio Lighting (Warm & Crisp)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keySun = new THREE.DirectionalLight(0xfff7ed, 2.6);
    keySun.position.set(20, 35, 45);
    scene.add(keySun);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    fillLight.position.set(-25, -15, -25);
    scene.add(fillLight);

    const spotLight = new THREE.PointLight(0xf59e0b, 2.2, 70);
    spotLight.position.set(0, 18, 25);
    scene.add(spotLight);

    // 3. Main Exhibition Group
    const exhibitionGroup = new THREE.Group();
    scene.add(exhibitionGroup);

    // 4. Stately 3D Dark Basalt Marble Pedestal with Gold Rim
    const pedestalGroup = new THREE.Group();
    const pedestalBaseGeo = new THREE.CylinderGeometry(16, 18, 2.2, 48);
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.15,
    });
    const pedestalBase = new THREE.Mesh(pedestalBaseGeo, marbleMat);
    pedestalBase.position.y = -14.6;
    pedestalGroup.add(pedestalBase);

    // Gold Pedestal Accent Ring
    const goldRingGeo = new THREE.TorusGeometry(16.2, 0.35, 16, 48);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.15,
    });
    const goldRing = new THREE.Mesh(goldRingGeo, goldMat);
    goldRing.rotation.x = Math.PI / 2;
    goldRing.position.y = -13.5;
    pedestalGroup.add(goldRing);
    exhibitionGroup.add(pedestalGroup);

    // 5. Load Real Authentic Photographs onto 3D Museum Artifact Plaques
    // IMPORTANT: EACH PLAQUE CALCULATES ITS WIDTH & HEIGHT ACCORDING TO THE EXACT
    // NATURAL ASPECT RATIO OF THE REAL IMAGE SO IT NEVER GETS GEPENG / SQUISHED!
    const textureLoader = new THREE.TextureLoader();
    const backplateTex = createBackplateTexture();

    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      metalness: 0.88,
      roughness: 0.2,
    });
    const backMat = new THREE.MeshStandardMaterial({
      map: backplateTex,
      metalness: 0.3,
      roughness: 0.35,
    });
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.96,
      roughness: 0.12,
    });

    const plaqueDepth = 1.3;
    const plaqueGroups: THREE.Group[] = [];

    CHAPTERS.forEach((ch, idx) => {
      const pGroup = new THREE.Group();

      // Calculate exact non-distorted dimensions from aspect ratio
      const baseDim = 25;
      let pWidth: number;
      let pHeight: number;
      if (ch.aspectRatio >= 1) {
        // Landscape or Square: lock width to baseDim, scale height
        pWidth = baseDim;
        pHeight = baseDim / ch.aspectRatio;
      } else {
        // Portrait: lock height to baseDim, scale width
        pHeight = baseDim;
        pWidth = baseDim * ch.aspectRatio;
      }

      // Load Real Image Texture with Max Sharpness Settings
      const photoTex = textureLoader.load(ch.imageSrc);
      photoTex.colorSpace = THREE.SRGBColorSpace;
      photoTex.generateMipmaps = true;
      photoTex.minFilter = THREE.LinearMipmapLinearFilter;
      photoTex.magFilter = THREE.LinearFilter;
      photoTex.anisotropy = maxAnisotropy;

      const frontMat = new THREE.MeshStandardMaterial({
        map: photoTex,
        roughness: 0.22,
        metalness: 0.06,
      });

      // Box with exact aspect ratio
      // Material order: [px, nx, py, ny, pz (front), nz (back)]
      const plaqueGeo = new THREE.BoxGeometry(pWidth, pHeight, plaqueDepth);
      const materials = [
        edgeMat,
        edgeMat,
        edgeMat,
        edgeMat,
        frontMat, // Front Face = 100% REAL HISTORICAL PHOTOGRAPH (NON-GEPENG)
        backMat, // Back Face = Islamic Seal Archive Backplate
      ];
      const plaqueMesh = new THREE.Mesh(plaqueGeo, materials);
      pGroup.add(plaqueMesh);

      // Chamfered Gilded Frame Borders matching exact plaque dimensions
      const topBarGeo = new THREE.BoxGeometry(pWidth + 1.0, 0.75, 1.6);
      const topBar = new THREE.Mesh(topBarGeo, frameMat);
      topBar.position.set(0, pHeight / 2 + 0.375, 0);
      pGroup.add(topBar);

      const bottomBar = new THREE.Mesh(topBarGeo, frameMat);
      bottomBar.position.set(0, -pHeight / 2 - 0.375, 0);
      pGroup.add(bottomBar);

      const sideBarGeo = new THREE.BoxGeometry(0.75, pHeight + 1.0, 1.6);
      const leftBar = new THREE.Mesh(sideBarGeo, frameMat);
      leftBar.position.set(-pWidth / 2 - 0.375, 0, 0);
      pGroup.add(leftBar);

      const rightBar = new THREE.Mesh(sideBarGeo, frameMat);
      rightBar.position.set(pWidth / 2 + 0.375, 0, 0);
      pGroup.add(rightBar);

      // 4 Gilded Ornamental Corner Medallions
      const cornerGeo = new THREE.SphereGeometry(1.0, 16, 16);
      const corners = [
        [-pWidth / 2 - 0.375, pHeight / 2 + 0.375],
        [pWidth / 2 + 0.375, pHeight / 2 + 0.375],
        [-pWidth / 2 - 0.375, -pHeight / 2 - 0.375],
        [pWidth / 2 + 0.375, -pHeight / 2 - 0.375],
      ];
      corners.forEach(([cx, cy]) => {
        const cMesh = new THREE.Mesh(cornerGeo, frameMat);
        cMesh.position.set(cx, cy, 0.25);
        pGroup.add(cMesh);
      });

      // Protective Museum Glass Layer on Front with subtle specular sheen
      const glassGeo = new THREE.PlaneGeometry(pWidth - 0.2, pHeight - 0.2);
      const glassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.16,
        roughness: 0.04,
        metalness: 0.95,
      });
      const glassMesh = new THREE.Mesh(glassGeo, glassMat);
      glassMesh.position.z = plaqueDepth / 2 + 0.07;
      pGroup.add(glassMesh);

      // Center plaque vertically relative to pedestal
      pGroup.position.set(0, 1.2, 0);
      pGroup.scale.set(
        idx === 0 ? 1 : 0.0001,
        idx === 0 ? 1 : 0.0001,
        idx === 0 ? 1 : 0.0001
      );

      exhibitionGroup.add(pGroup);
      plaqueGroups.push(pGroup);
    });

    // 6. Glowing Circular Starlight Photons (Floating Atmosphere)
    const photonCount = 65;
    const photonGeo = new THREE.BufferGeometry();
    const photonPos = new Float32Array(photonCount * 3);
    for (let i = 0; i < photonCount * 3; i += 3) {
      photonPos[i] = (Math.random() - 0.5) * 50;
      photonPos[i + 1] = (Math.random() - 0.5) * 50;
      photonPos[i + 2] = (Math.random() - 0.5) * 35;
    }
    photonGeo.setAttribute("position", new THREE.BufferAttribute(photonPos, 3));
    const photonTex = createParticleTexture();
    const photonMat = new THREE.PointsMaterial({
      map: photonTex,
      color: 0xfef08a,
      size: 2.2,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const photonPoints = new THREE.Points(photonGeo, photonMat);
    scene.add(photonPoints);

    // 7. Interactive Pointer Drag Orbit Interaction (Free 360° Rotation)
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0.003 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        dragVelocity.y = dx * 0.0055;
        dragVelocity.x = dy * 0.0055;
        exhibitionGroup.rotation.y += dragVelocity.y;
        exhibitionGroup.rotation.x += dragVelocity.x;

        // Clamp vertical tilt to prevent unnatural upside-down flipping
        exhibitionGroup.rotation.x = Math.max(
          -0.65,
          Math.min(0.65, exhibitionGroup.rotation.x)
        );

        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // 8. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentIdx = activeChapterRef.current;

      // Inertia Momentum Physics & Gentle Continuous Spin
      if (!isDragging) {
        dragVelocity.x *= 0.95;
        if (Math.abs(dragVelocity.y) > 0.0018) {
          dragVelocity.y *= 0.95;
        } else {
          dragVelocity.y = 0.0022; // Smooth auto-revolve
        }
        exhibitionGroup.rotation.y += dragVelocity.y;
        exhibitionGroup.rotation.x += dragVelocity.x;
      }

      // Smooth Scale Lerp for Active Plaque
      plaqueGroups.forEach((pGroup, idx) => {
        const targetScale = idx === currentIdx ? 1 : 0.0001;
        pGroup.scale.lerp(
          new THREE.Vector3(targetScale, targetScale, targetScale),
          0.12
        );
      });

      // Starlight particles orbital sway
      photonPoints.rotation.y = elapsedTime * 0.06;
      photonPoints.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || 400;
      const h = canvas.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      renderer.dispose();
      backplateTex.dispose();
      photonTex.dispose();
      pedestalBaseGeo.dispose();
      marbleMat.dispose();
      goldRingGeo.dispose();
      goldMat.dispose();
      edgeMat.dispose();
      backMat.dispose();
      frameMat.dispose();
    };
  }, []);

  const currentChapter = CHAPTERS[activeChapterIndex];

  return (
    <section
      ref={containerRef}
      className="relative py-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-950/90 backdrop-blur-md overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <IconSparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>Arsip Foto Asli Bersejarah & Showcase 3D (Three.js)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan 4 Fase Emas Peradaban Islam
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Menelaah tiap kurun keemasan dengan{" "}
            <strong className="text-emerald-400 font-bold">
              100% foto dokumentasi fisik asli
            </strong>{" "}
            dari arsip museum dan situs bersejarah dunia. Dipresentasikan dalam proporsi visual alami tanpa distorsi/gepeng, dapat diputar bebas 360° dalam ruang 3D.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-none touch-pan-x">
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 border shrink-0 ${
                  isActive
                    ? "bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-500/25 scale-102"
                    : "bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-900 border-slate-800"
                }`}
              >
                <span>{ch.badge.split(":")[0]}</span>
                <span className="hidden md:inline font-normal opacity-85">
                  ({ch.century.split(" ")[0]} {ch.century.split(" ")[1]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Split Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-slate-950/75 rounded-2xl sm:rounded-3xl border border-slate-800/80 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative">
          {/* LEFT COLUMN: Animated Sliding Narrative (Teks yang berganti secara anggun) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Phase Badge & Era */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold bg-slate-900 border border-slate-700 ${currentChapter.textColor}`}
              >
                {currentChapter.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Kurun: {currentChapter.century}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-semibold flex items-center gap-1">
                <IconCheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Foto Fisik Asli (Tajam & Proporsional)</span>
              </span>
            </div>

            {/* Title with smooth key animation */}
            <div
              key={`title-${currentChapter.id}`}
              className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {currentChapter.title}
              </h3>

              {/* Calligraphic Quote Box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-1.5">
                <p className="font-serif text-base sm:text-lg text-amber-200 text-right leading-relaxed font-medium">
                  {currentChapter.arabicPhrase}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {currentChapter.arabicMeaning}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {currentChapter.description}
              </p>
            </div>

            {/* 3 Key Historical Highlights */}
            <div
              key={`hl-${currentChapter.id}`}
              className="space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Pilar Peristiwa Utama:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {currentChapter.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/70 text-xs text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                      {i + 1}
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Provenance & Archive Attribution */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 space-y-1 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <IconLandmark className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-slate-300">
                  Lokasi Asli:
                </span>
                <span>{currentChapter.archiveLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <IconBook className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-slate-300">
                  Sumber Arsip:
                </span>
                <span className="italic">{currentChapter.provenance}</span>
              </div>
            </div>

            {/* Navigation buttons to step through */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <button
                disabled={activeChapterIndex === 0}
                onClick={() =>
                  setActiveChapterIndex((p) => Math.max(0, p - 1))
                }
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                ← Fase Sebelumnya
              </button>

              <span className="text-xs text-slate-500 font-mono">
                {activeChapterIndex + 1} / {CHAPTERS.length}
              </span>

              <button
                disabled={activeChapterIndex === CHAPTERS.length - 1}
                onClick={() =>
                  setActiveChapterIndex((p) =>
                    Math.min(CHAPTERS.length - 1, p + 1)
                  )
                }
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
              >
                <span>Fase Berikutnya</span>
                <IconChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Dedicated 3D Realistic WebGL Viewport + Real Photo Toggle */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-3">
            {/* View Mode Switcher Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-center">
              <button
                onClick={() => setViewMode("3d")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "3d"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <IconGlobe className="w-3.5 h-3.5" />
                <span>Showcase 3D Orbit (Three.js)</span>
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "photo"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <IconLandmark className="w-3.5 h-3.5" />
                <span>Foto Asli HD</span>
              </button>
            </div>

            <div className="relative w-full h-[320px] xs:h-[370px] sm:h-[430px] md:h-[480px] rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center group">
              {/* VIEW 1: Three.js Interactive 3D Museum Showcase */}
              <canvas
                ref={canvasRef}
                className={`w-full h-full cursor-grab active:cursor-grabbing select-none touch-none transition-opacity duration-300 ${
                  viewMode === "3d"
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              />

              {/* VIEW 2: Real Photographic HD Inspection View (Zero Distortion) */}
              {viewMode === "photo" && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-slate-950/95 animate-in fade-in duration-300">
                  <div
                    onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
                    className="relative w-full h-full max-h-[360px] rounded-xl overflow-hidden border border-slate-800 shadow-inner flex items-center justify-center cursor-zoom-in group/img bg-black/60"
                  >
                    <img
                      src={currentChapter.imageSrc}
                      alt={currentChapter.relicName}
                      className={`object-contain max-h-full max-w-full transition-transform duration-300 ${
                        isPhotoZoomed
                          ? "scale-140 cursor-zoom-out"
                          : "group-hover/img:scale-105"
                      }`}
                      style={{
                        aspectRatio: `${currentChapter.aspectRatio}`,
                      }}
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-950/80 text-[10px] text-slate-300 border border-slate-700 pointer-events-none">
                      {isPhotoZoomed
                        ? "Klik untuk perkecil"
                        : "Klik untuk zoom 1.4x"}
                    </div>
                  </div>
                </div>
              )}

              {/* Floating 3D HUD Badge */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-950/85 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>
                    {viewMode === "3d"
                      ? "Foto Asli dalam Plakat 3D (Non-Gepeng)"
                      : "Foto Dokumentasi Asli HD"}
                  </span>
                </span>
              </div>

              {/* Interaction Hint */}
              <div className="absolute top-3 right-3 z-20 pointer-events-none">
                <span className="px-2 py-1 rounded-md text-[10px] text-slate-400 bg-slate-950/70 border border-slate-800 backdrop-blur-md">
                  {viewMode === "3d" ? "Putar bebas 360°" : "Foto Asli Proporsional"}
                </span>
              </div>

              {/* Bottom Relic Info Caption */}
              <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none animate-in fade-in duration-200">
                <div className="p-3.5 rounded-xl bg-slate-950/95 border border-slate-800 backdrop-blur-md space-y-1 text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                    <span className="text-amber-400">✦</span>
                    <span>{currentChapter.relicName}</span>
                  </p>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    {currentChapter.relicDetail}
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
