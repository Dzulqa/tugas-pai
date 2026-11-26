"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 95);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // 2. Main Astrolabe / Celestial Armillary Group
    const celestialGroup = new THREE.Group();
    scene.add(celestialGroup);
    celestialGroup.position.set(20, 0, -5);

    // Outer Meridian Ring (Emerald)
    const ring1Geo = new THREE.TorusGeometry(36, 0.45, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    celestialGroup.add(ring1);

    // Equatorial Ring (Gold / Amber)
    const ring2Geo = new THREE.TorusGeometry(30, 0.38, 16, 96);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3.5;
    celestialGroup.add(ring2);

    // Ecliptic Tilted Ring (Cyan/Teal)
    const ring3Geo = new THREE.TorusGeometry(24, 0.32, 16, 80);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    celestialGroup.add(ring3);

    // Inner Concentric Coordinate Ring (Golden Glow)
    const ring4Geo = new THREE.TorusGeometry(17, 0.28, 12, 64);
    const ring4Mat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const ring4 = new THREE.Mesh(ring4Geo, ring4Mat);
    ring4.rotation.x = -Math.PI / 5;
    ring4.rotation.z = Math.PI / 6;
    celestialGroup.add(ring4);

    // 3. Central Islamic 8-Pointed Star Polyhedron (Khatam Sulayman / Rub el Hizb)
    const starPolyhedronGroup = new THREE.Group();
    const oct1Geo = new THREE.OctahedronGeometry(9.5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const oct1 = new THREE.Mesh(oct1Geo, octMat);
    starPolyhedronGroup.add(oct1);

    const oct2 = new THREE.Mesh(oct1Geo, octMat);
    oct2.rotation.y = Math.PI / 4;
    oct2.rotation.z = Math.PI / 4;
    starPolyhedronGroup.add(oct2);

    // Glowing core crystal
    const coreGeo = new THREE.IcosahedronGeometry(4.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    starPolyhedronGroup.add(coreMesh);

    celestialGroup.add(starPolyhedronGroup);

    // 4. Starlight Particle Field
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const emeraldColor = new THREE.Color(0x34d399);
    const goldColor = new THREE.Color(0xfbbf24);
    const blueColor = new THREE.Color(0x60a5fa);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 380;
      const y = (Math.random() - 0.5) * 320;
      const z = (Math.random() - 0.5) * 220;

      particlePositions[idx] = x;
      particlePositions[idx + 1] = y;
      particlePositions[idx + 2] = z;

      originalPositions[idx] = x;
      originalPositions[idx + 1] = y;
      originalPositions[idx + 2] = z;

      const rand = Math.random();
      const col = rand > 0.6 ? emeraldColor : rand > 0.3 ? goldColor : blueColor;
      particleColors[idx] = col.r;
      particleColors[idx + 1] = col.g;
      particleColors[idx + 2] = col.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Glowing Circular Radial Starlight Texture (Eliminate square particle artifacts)
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d")!;
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
    pGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.7)");
    pGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);
    const starCircleTex = new THREE.CanvasTexture(pCanvas);

    const starMaterial = new THREE.PointsMaterial({
      map: starCircleTex,
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 5. Scroll State Tracking & Smooth Parallax Physics
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollY = window.scrollY;
      targetScrollProgress = scrollY / maxScroll;

      const diff = scrollY - lastScrollY;
      scrollVelocity = diff * 0.04;
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 16;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 16;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 6. Animation Render Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      currentScrollProgress +=
        (targetScrollProgress - currentScrollProgress) * 0.075;

      scrollVelocity *= 0.92;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 3D Astrolabe dynamic transforms driven by page scroll
      celestialGroup.rotation.y =
        currentScrollProgress * Math.PI * 4.5 +
        elapsedTime * 0.12 +
        mouseX * 0.02;

      celestialGroup.rotation.x =
        currentScrollProgress * Math.PI * 2 +
        Math.sin(elapsedTime * 0.35) * 0.2 -
        mouseY * 0.02;

      celestialGroup.rotation.z =
        Math.cos(elapsedTime * 0.25) * 0.15 + scrollVelocity * 0.1;

      ring1.rotation.z = elapsedTime * 0.05;
      ring2.rotation.z = -elapsedTime * 0.07;
      ring3.rotation.x = elapsedTime * 0.08;
      ring4.rotation.y = -elapsedTime * 0.09;

      starPolyhedronGroup.rotation.y -= 0.007;
      starPolyhedronGroup.rotation.x += 0.005;
      starPolyhedronGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.2;

      const lateralShift = Math.sin(currentScrollProgress * Math.PI * 3) * 22;
      celestialGroup.position.x = 20 + lateralShift + mouseX * 0.5;
      celestialGroup.position.y =
        -15 + (currentScrollProgress - 0.5) * 60 - mouseY * 0.5;
      celestialGroup.position.z =
        -5 + Math.sin(currentScrollProgress * Math.PI * 2) * 15;

      const posAttr = starGeometry.attributes.position;
      const positions = posAttr.array as Float32Array;

      starField.rotation.y =
        elapsedTime * 0.015 + currentScrollProgress * 1.2;
      starField.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const wave = Math.sin(elapsedTime * 0.8 + i) * 0.3;
        positions[idx + 1] =
          originalPositions[idx + 1] +
          wave -
          (currentScrollProgress * 40) % 200 +
          100;
      }
      posAttr.needsUpdate = true;

      camera.position.z = 95 - Math.min(Math.abs(scrollVelocity) * 2, 12);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ring4Geo.dispose();
      oct1Geo.dispose();
      coreGeo.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      starCircleTex.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75 sm:opacity-85 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
