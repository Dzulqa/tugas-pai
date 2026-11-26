"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { COUNTRIES_DATA, CountryIslamicProfile } from "@/data/islamicData";

interface ThreeGlobeProps {
  selectedCountryId: string;
  onSelectCountry: (countryId: string) => void;
}

// 1. EXACT REAL-WORLD COORDINATES (LATITUDE / LONGITUDE) FOR THE 8 COUNTRIES
const COUNTRY_COORDINATES: Record<
  string,
  {
    lat: number;
    lng: number;
    name: string;
    city: string;
    year: string;
    flag: string;
  }
> = {
  indonesia: {
    lat: -6.21,
    lng: 106.85,
    name: "Indonesia",
    city: "Demak / Samudera Pasai",
    year: "Abad 7 - 13 M",
    flag: "🇮🇩",
  },
  "arab-saudi": {
    lat: 21.42,
    lng: 39.83,
    name: "Arab Saudi",
    city: "Makkah & Madinah (Pusat Awal)",
    year: "610 M (1 H)",
    flag: "🇸🇦",
  },
  turki: {
    lat: 41.01,
    lng: 28.97,
    name: "Turki",
    city: "Istanbul (Utsmaniyah)",
    year: "1453 M",
    flag: "🇹🇷",
  },
  spanyol: {
    lat: 37.88,
    lng: -4.78,
    name: "Spanyol",
    city: "Cordoba & Granada",
    year: "711 M",
    flag: "🇪🇸",
  },
  mesir: {
    lat: 30.04,
    lng: 31.24,
    name: "Mesir",
    city: "Kairo (Al-Azhar)",
    year: "641 M",
    flag: "🇪🇬",
  },
  india: {
    lat: 28.61,
    lng: 77.21,
    name: "India",
    city: "Delhi & Agra (Mughal)",
    year: "711 - 1526 M",
    flag: "🇮🇳",
  },
  china: {
    lat: 34.34,
    lng: 108.94,
    name: "Tiongkok",
    city: "Xi'an (Jalur Sutra)",
    year: "651 M",
    flag: "🇨🇳",
  },
  palestina: {
    lat: 31.77,
    lng: 35.23,
    name: "Palestina",
    city: "Al-Quds (Baitul Maqdis)",
    year: "637 M",
    flag: "🇵🇸",
  },
};

// 2. 3D BILLBOARD SPRITE BADGE FOR REAL LABELS (HIGH-RESOLUTION & LARGE LEGIBLE TEXT)
function createCountrySprite(
  flag: string,
  countryName: string,
  cityName: string,
  year: string,
  isMakkah: boolean
): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 560;
  canvas.height = 190;
  const ctx = canvas.getContext("2d")!;

  // Clean, high-contrast dark card with bold gold/emerald border
  ctx.fillStyle = isMakkah
    ? "rgba(12, 18, 34, 0.96)"
    : "rgba(4, 10, 20, 0.94)";
  ctx.strokeStyle = isMakkah ? "#f59e0b" : "#10b981";
  ctx.lineWidth = isMakkah ? 5 : 4;

  ctx.beginPath();
  ctx.roundRect(10, 10, 540, 170, 26);
  ctx.fill();
  ctx.stroke();

  // Flag & Country Title (Large, bold, highly legible)
  ctx.font = "bold 46px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillStyle = isMakkah ? "#fde047" : "#ffffff";
  ctx.fillText(`${flag}  ${countryName}`, 32, 68);

  // Subtext: Historic City (Large & Colored)
  ctx.font = "bold 30px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillStyle = isMakkah ? "#facc15" : "#34d399";
  ctx.fillText(cityName, 32, 115);

  // Subtext: Year of Entry (Clean & Clear)
  ctx.font = "bold 24px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText(`Masuk: ${year}`, 32, 153);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(spriteMat);
  // Enlarged 3D scale so it is boldly visible from default camera view
  sprite.scale.set(27, 9.2, 1);
  return sprite;
}

export default function ThreeGlobe({
  selectedCountryId,
  onSelectCountry,
}: ThreeGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredCountry, setHoveredCountry] =
    useState<CountryIslamicProfile | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const isAutoRotatingRef = useRef(true);
  const onSelectCountryRef = useRef(onSelectCountry);
  onSelectCountryRef.current = onSelectCountry;

  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);

  // Convert lat/lng to exact 3D sphere coordinate
  const latLngToVec3 = (
    lat: number,
    lng: number,
    radius: number
  ): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Adjust initial camera distance for narrow mobile portrait viewports
    const initialZ = width < 480 ? 270 : width < 768 ? 240 : 220;
    camera.position.set(0, 10, initialZ);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const mainGlobeGroup = new THREE.Group();
    scene.add(mainGlobeGroup);
    globeGroupRef.current = mainGlobeGroup;

    const globeRadius = 75;

    // 2. Load 100% Real NASA Satellite Blue Marble Earth Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth.jpg");
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      specular: 0x335577,
      shininess: 32, // Real sunlight specular reflection on oceans
      emissive: 0x050e1c,
      emissiveIntensity: 0.35,
    });
    const earthMesh = new THREE.Mesh(sphereGeo, sphereMat);
    mainGlobeGroup.add(earthMesh);

    // 3. 100% Real Earth Volumetric Cloud Layer
    const cloudTexture = textureLoader.load("/earth_clouds.png");
    const cloudGeo = new THREE.SphereGeometry(globeRadius * 1.008, 48, 48);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudGeo, cloudMat);
    mainGlobeGroup.add(cloudsMesh);
    cloudsRef.current = cloudsMesh;

    // 4. Realistic Atmospheric Rayleigh Scattering Glow (Blue Edge)
    const atmosGeo = new THREE.SphereGeometry(globeRadius * 1.035, 36, 36);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    mainGlobeGroup.add(atmosphere);

    // 5. Authentic Geographic Lines (Equator, Tropic of Cancer, Tropic of Capricorn)
    const lineGroup = new THREE.Group();
    const equatorMat = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.3,
    });
    const tropicMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.22,
    });

    const createParallel = (lat: number, mat: THREE.Material) => {
      const pts: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 4) {
        pts.push(latLngToVec3(lat, lng, globeRadius * 1.002));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(geo, mat);
    };

    lineGroup.add(createParallel(0, equatorMat)); // Khatulistiwa (Equator)
    lineGroup.add(createParallel(23.5, tropicMat)); // Garis Balik Utara (Tropic of Cancer)
    lineGroup.add(createParallel(-23.5, tropicMat)); // Garis Balik Selatan (Tropic of Capricorn)

    // Historical Silk Road (Overland) & Spice Route (Maritime) Lines on 3D Globe
    const silkRoadCoords = [
      { lat: 34.34, lng: 108.94 }, // Xi'an
      { lat: 40.14, lng: 94.66 }, // Dunhuang
      { lat: 39.65, lng: 66.97 }, // Samarkand
      { lat: 33.31, lng: 44.36 }, // Baghdad
      { lat: 31.77, lng: 35.23 }, // Al-Quds
      { lat: 41.01, lng: 28.97 }, // Istanbul
    ];
    const silkPts: THREE.Vector3[] = [];
    silkRoadCoords.forEach((pt) => {
      silkPts.push(latLngToVec3(pt.lat, pt.lng, globeRadius * 1.004));
    });
    const silkCurve = new THREE.CatmullRomCurve3(silkPts);
    const silkGeo = new THREE.BufferGeometry().setFromPoints(silkCurve.getPoints(60));
    const silkMat = new THREE.LineDashedMaterial({
      color: 0xfacc15,
      dashSize: 2.5,
      gapSize: 1.8,
      transparent: true,
      opacity: 0.7,
    });
    const silkLine = new THREE.Line(silkGeo, silkMat);
    silkLine.computeLineDistances();
    lineGroup.add(silkLine);

    const spiceRouteCoords = [
      { lat: -6.21, lng: 106.85 }, // Demak / Nusantara
      { lat: 5.55, lng: 95.32 }, // Samudera Pasai / Aceh
      { lat: 9.93, lng: 76.26 }, // Malabar / Cochin
      { lat: 14.53, lng: 49.12 }, // Hadramaut
      { lat: 21.42, lng: 39.83 }, // Jeddah / Makkah
      { lat: 30.04, lng: 31.24 }, // Kairo / Alexandria
      { lat: 37.88, lng: -4.78 }, // Cordoba
    ];
    const spicePts: THREE.Vector3[] = [];
    spiceRouteCoords.forEach((pt) => {
      spicePts.push(latLngToVec3(pt.lat, pt.lng, globeRadius * 1.004));
    });
    const spiceCurve = new THREE.CatmullRomCurve3(spicePts);
    const spiceGeo = new THREE.BufferGeometry().setFromPoints(spiceCurve.getPoints(70));
    const spiceMat = new THREE.LineDashedMaterial({
      color: 0x10b981,
      dashSize: 2.5,
      gapSize: 1.8,
      transparent: true,
      opacity: 0.7,
    });
    const spiceLine = new THREE.Line(spiceGeo, spiceMat);
    spiceLine.computeLineDistances();
    lineGroup.add(spiceLine);

    mainGlobeGroup.add(lineGroup);

    // 6. Gilded Bronze Markers & 3D Text Badges for 8 Countries
    const clickableHitboxes: THREE.Mesh[] = [];
    const markerGroup = new THREE.Group();
    const pulseRings: THREE.Mesh[] = [];
    const countryLabels: {
      sprite: THREE.Sprite;
      normal: THREE.Vector3;
    }[] = [];

    COUNTRIES_DATA.forEach((country) => {
      const coord = COUNTRY_COORDINATES[country.id];
      if (!coord) return;

      const pos = latLngToVec3(coord.lat, coord.lng, globeRadius * 1.01);
      const normal = pos.clone().normalize();
      const isMakkah = country.id === "arab-saudi";

      // Pin Head (Polished Gilded Brass for Makkah, Emerald-Bronze for others)
      const pinGeo = new THREE.SphereGeometry(2.5, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: isMakkah ? 0xf59e0b : 0x10b981,
        emissive: isMakkah ? 0xd97706 : 0x059669,
        emissiveIntensity: 0.8,
        metalness: 0.85,
        roughness: 0.15,
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);

      // Pin Stem
      const stemGeo = new THREE.CylinderGeometry(0.35, 0.35, 5, 8);
      const stemMat = new THREE.MeshStandardMaterial({
        color: isMakkah ? 0xfacc15 : 0x34d399,
        metalness: 0.9,
      });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.copy(pos.clone().add(normal.clone().multiplyScalar(2.5)));
      stem.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      markerGroup.add(stem);

      // Ground Aura Ring
      const ringGeo = new THREE.RingGeometry(2.5, 4.2, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isMakkah ? 0xfde047 : 0x34d399,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos.clone().add(normal.clone().multiplyScalar(0.4)));
      ring.lookAt(pos.clone().add(normal));
      pulseRings.push(ring);
      markerGroup.add(ring);
      markerGroup.add(pin);

      // 3D Billboard Label
      const labelSprite = createCountrySprite(
        coord.flag,
        coord.name,
        coord.city,
        coord.year,
        isMakkah
      );
      labelSprite.position.copy(
        pos.clone().add(normal.clone().multiplyScalar(9.8))
      );
      markerGroup.add(labelSprite);
      countryLabels.push({ sprite: labelSprite, normal });

      // Clickable Hitbox
      const hitboxGeo = new THREE.SphereGeometry(7.5, 8, 8);
      const hitboxMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitbox = new THREE.Mesh(hitboxGeo, hitboxMat);
      hitbox.position.copy(pos);
      hitbox.userData = { countryId: country.id, countryData: country };
      markerGroup.add(hitbox);
      clickableHitboxes.push(hitbox);
    });

    mainGlobeGroup.add(markerGroup);

    // 7. Parabolic Arcs of Historical Islamic Expansion with Traveling Light Photons
    const makkahCoord = COUNTRY_COORDINATES["arab-saudi"];
    const makkahVec = latLngToVec3(
      makkahCoord.lat,
      makkahCoord.lng,
      globeRadius
    );

    const arcGroup = new THREE.Group();
    const movingPulses: {
      mesh: THREE.Mesh;
      curve: THREE.QuadraticBezierCurve3;
      progress: number;
      speed: number;
    }[] = [];

    Object.entries(COUNTRY_COORDINATES).forEach(([cId, coord]) => {
      if (cId === "arab-saudi") return;
      const destVec = latLngToVec3(coord.lat, coord.lng, globeRadius);

      const mid = new THREE.Vector3()
        .addVectors(makkahVec, destVec)
        .multiplyScalar(0.5);
      const dist = makkahVec.distanceTo(destVec);
      mid.normalize().multiplyScalar(globeRadius + dist * 0.32);

      const curve = new THREE.QuadraticBezierCurve3(makkahVec, mid, destVec);
      const pts = curve.getPoints(36);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(pts);

      const arcMat = new THREE.LineDashedMaterial({
        color: 0xf59e0b,
        dashSize: 3,
        gapSize: 2,
        transparent: true,
        opacity: 0.55,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcLine.computeLineDistances();
      arcGroup.add(arcLine);

      const pulseGeo = new THREE.SphereGeometry(1.2, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      const pulse = new THREE.Mesh(pulseGeo, pulseMat);
      arcGroup.add(pulse);
      movingPulses.push({
        mesh: pulse,
        curve,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.004,
      });
    });

    mainGlobeGroup.add(arcGroup);

    // 8. Natural Sunlight Illumination (Sun Angle on Afro-Eurasia)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 2.0);
    sunLight.position.set(120, 80, 100);
    scene.add(sunLight);

    mainGlobeGroup.rotation.y = 1.2;
    mainGlobeGroup.rotation.x = 0.25;

    // 9. Free-Orbit Momentum Physics & Auto-Spin (NO MOUSE WHEEL HIJACKING!)
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let dragDistance = 0;
    let velocity = { x: 0, y: 0.0018 };
    const defaultAutoSpeed = 0.0018;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      targetRotationRef.current = null;
      prevPointer = { x: e.clientX, y: e.clientY };
      dragDistance = 0;
      velocity = { x: 0, y: 0 };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevPointer.x;
        const dy = e.clientY - prevPointer.y;
        dragDistance += Math.abs(dx) + Math.abs(dy);

        velocity.y = dx * 0.005;
        velocity.x = dy * 0.005;

        mainGlobeGroup.rotation.y += velocity.y;
        mainGlobeGroup.rotation.x += velocity.x;

        mainGlobeGroup.rotation.x = Math.max(
          -1.48,
          Math.min(1.48, mainGlobeGroup.rotation.x)
        );

        prevPointer = { x: e.clientX, y: e.clientY };
      }

      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(clickableHitboxes);

      if (hits.length > 0) {
        container.style.cursor = "pointer";
        const cData = hits[0].object.userData.countryData;
        if (cData) setHoveredCountry(cData);
      } else {
        container.style.cursor = isDragging ? "grabbing" : "grab";
        setHoveredCountry(null);
      }
    };

    const onPointerUp = () => {
      if (isDragging) {
        isDragging = false;
        if (dragDistance < 6) {
          const rect = renderer.domElement.getBoundingClientRect();
          const mouse = new THREE.Vector2(
            ((prevPointer.x - rect.left) / rect.width) * 2 - 1,
            -((prevPointer.y - rect.top) / rect.height) * 2 + 1
          );
          const raycaster = new THREE.Raycaster();
          raycaster.setFromCamera(mouse, camera);
          const hits = raycaster.intersectObjects(clickableHitboxes);

          if (hits.length > 0) {
            const cId = hits[0].object.userData.countryId;
            if (cId && onSelectCountryRef.current) {
              onSelectCountryRef.current(cId);
            }
          }
        }
      }
    };

    const dom = renderer.domElement;
    dom.style.touchAction = "pan-y";
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // 10. Animation Render Loop with Horizon Culling & Clouds Drift
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Cloud micro-drift (clouds rotate slightly faster for natural satellite depth!)
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += 0.0006;
      }

      // Smooth target interpolation to country
      if (targetRotationRef.current) {
        const diffY = targetRotationRef.current.y - mainGlobeGroup.rotation.y;
        const diffX = targetRotationRef.current.x - mainGlobeGroup.rotation.x;
        mainGlobeGroup.rotation.y += diffY * 0.05;
        mainGlobeGroup.rotation.x += diffX * 0.05;

        if (Math.abs(diffY) < 0.002 && Math.abs(diffX) < 0.002) {
          targetRotationRef.current = null;
          velocity = { x: 0, y: defaultAutoSpeed };
        }
      } else if (!isDragging) {
        if (Math.abs(velocity.x) > 0.0001) {
          velocity.x *= 0.94;
          mainGlobeGroup.rotation.x += velocity.x;
          mainGlobeGroup.rotation.x = Math.max(
            -1.48,
            Math.min(1.48, mainGlobeGroup.rotation.x)
          );
        }

        if (isAutoRotatingRef.current) {
          if (Math.abs(velocity.y) > defaultAutoSpeed) {
            velocity.y *= 0.95;
          } else {
            velocity.y += (defaultAutoSpeed - velocity.y) * 0.05;
          }
          mainGlobeGroup.rotation.y += velocity.y;
        } else {
          if (Math.abs(velocity.y) > 0.0001) {
            velocity.y *= 0.94;
            mainGlobeGroup.rotation.y += velocity.y;
          }
        }
      }

      // Horizon Culling: Fade out labels facing away
      countryLabels.forEach(({ sprite, normal }) => {
        const worldNormal = normal
          .clone()
          .applyEuler(mainGlobeGroup.rotation);
        if (worldNormal.z > 0.15) {
          sprite.visible = true;
          sprite.material.opacity = Math.min(1, (worldNormal.z - 0.15) * 3);
        } else {
          sprite.visible = false;
        }
      });

      // Animate moving light pulses along arcs
      movingPulses.forEach((item) => {
        item.progress += item.speed;
        if (item.progress > 1) item.progress = 0;
        const pos = item.curve.getPoint(item.progress);
        item.mesh.position.copy(pos);
      });

      // Pulse beacon rings
      pulseRings.forEach((ring, idx) => {
        const s = 1 + Math.sin(elapsedTime * 3 + idx) * 0.25;
        ring.scale.set(s, s, s);
      });

      // Atmospheric Rayleigh glow pulsation
      atmosphere.scale.setScalar(1.035 + Math.sin(elapsedTime * 1.5) * 0.006);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      cloudGeo.dispose();
      cloudMat.dispose();
      atmosGeo.dispose();
      atmosMat.dispose();
      earthTexture.dispose();
      cloudTexture.dispose();
    };
  }, []);

  useEffect(() => {
    const coord = COUNTRY_COORDINATES[selectedCountryId];
    if (coord && globeGroupRef.current) {
      const targetY =
        -((coord.lng + 180) * (Math.PI / 180)) + Math.PI / 2;
      const targetX = (coord.lat * (Math.PI / 180)) * 0.45;

      let currentY = globeGroupRef.current.rotation.y;
      let diff = (targetY - currentY) % (Math.PI * 2);
      if (diff > Math.PI) diff -= Math.PI * 2;
      if (diff < -Math.PI) diff += Math.PI * 2;

      targetRotationRef.current = {
        x: targetX,
        y: currentY + diff,
      };
    }
  }, [selectedCountryId]);

  const handleToggleAutoRotate = () => {
    setIsAutoRotating((prev) => {
      isAutoRotatingRef.current = !prev;
      return !prev;
    });
  };

  const handleZoom = (delta: number) => {
    if (!cameraRef.current) return;
    const currentZ = cameraRef.current.position.z;
    const nextZ = Math.max(125, Math.min(295, currentZ + delta));
    cameraRef.current.position.z = nextZ;
  };

  const handleResetToMakkah = () => {
    onSelectCountry("arab-saudi");
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 10, 220);
    }
  };

  return (
    <div className="relative w-full h-[380px] xs:h-[430px] sm:h-[500px] md:h-[560px] rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-none"
      />

      {/* Floating HUD: Top Left Badge */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none max-w-[50%] sm:max-w-none space-y-1">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-medium backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="sm:hidden">Globe 3D Riil</span>
          <span className="hidden sm:inline">Globe 3D Bumi Riil 100% (NASA Satellite + Garis Sejarah)</span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-300 drop-shadow hidden md:block">
          Tekstur satelit asli • Garis Jalur Sutra &amp; Rempah • Putar bebas 360° • Tombol + / − zoom
        </p>
      </div>

      {/* Floating HUD: Top Right Toolbar */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => handleZoom(-30)}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-900 flex items-center justify-center text-xs sm:text-sm font-bold backdrop-blur-md transition-colors"
          title="Perbesar (Zoom In)"
        >
          +
        </button>
        <button
          onClick={() => handleZoom(30)}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-900 flex items-center justify-center text-xs sm:text-sm font-bold backdrop-blur-md transition-colors"
          title="Perkecil (Zoom Out)"
        >
          −
        </button>
        <button
          onClick={handleResetToMakkah}
          className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 text-[11px] sm:text-xs font-medium backdrop-blur-md transition-colors hidden sm:inline-flex items-center gap-1"
          title="Fokus ke pusat Makkah"
        >
          🕋 <span>Makkah</span>
        </button>
        <button
          onClick={handleToggleAutoRotate}
          className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium border transition-colors backdrop-blur-md ${
            isAutoRotating
              ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
              : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
          }`}
        >
          {isAutoRotating ? "⏸ Jeda" : "▶ Putar"}
        </button>
      </div>

      {/* Floating Hover Card (Enlarged and Clear) */}
      {hoveredCountry && (
        <div className="absolute bottom-16 sm:bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          <div className="px-5 py-3 rounded-2xl bg-slate-950/95 border-2 border-emerald-500/70 shadow-2xl backdrop-blur-md text-center min-w-[280px]">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-2xl sm:text-3xl">{hoveredCountry.flag}</span>
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                {hoveredCountry.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1">
              Masuknya Islam: {hoveredCountry.historyOfEntry.century}
            </p>
            <p className="text-[11px] text-slate-300 italic mt-0.5">
              Klik untuk membuka seluruh kajian sejarah &amp; peninggalan
            </p>
          </div>
        </div>
      )}

      {/* Bottom Country Quick Switcher Pills */}
      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {COUNTRIES_DATA.map((c) => {
          const isSelected = c.id === selectedCountryId;
          return (
            <button
              key={c.id}
              onClick={() => onSelectCountry(c.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border backdrop-blur-md ${
                isSelected
                  ? "bg-emerald-600 text-white border-emerald-400 shadow-md scale-105"
                  : "bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border-slate-800"
              }`}
            >
              <span>{c.flag}</span>
              <span className="hidden sm:inline">{c.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
