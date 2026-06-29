"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import countries from "@/data/globe.json";

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export type ArcData = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

// Convert lat/lng to a 3D point on the globe surface (radius 100 = three-globe default)
function latLngToVec3(lat: number, lng: number, r = 101): THREE.Vector3 {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

// Key hub cities that should pulse
const PULSE_POINTS: [number, number][] = [
  [12.97,  77.59],  // Bangalore
  [19.08,  72.88],  // Mumbai
  [28.61,  77.21],  // Delhi
  [25.20,  55.27],  // Dubai
  [51.51,  -0.13],  // London
  [40.71, -74.01],  // New York
  [ 1.35, 103.82],  // Singapore
  [ 6.52,   3.38],  // Lagos
  [35.68, 139.69],  // Tokyo
  [-33.87, 151.21], // Sydney
  [34.05,-118.24],  // Los Angeles
  [-23.55, -46.63], // São Paulo
];

export function World({ globeConfig, data }: { globeConfig: GlobeConfig; data: ArcData[] }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const cfg = {
      pointSize: 2,
      globeColor: "#062056",
      showAtmosphere: true,
      atmosphereColor: "#ffffff",
      atmosphereAltitude: 0.1,
      emissive: "#000000",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      polygonColor: "rgba(255,255,255,0.9)",
      ambientLight: "#222222",
      directionalLeftLight: "#444444",
      directionalTopLight: "#333333",
      arcTime: 1400,
      arcLength: 0.85,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    };

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 1, 1000);
    camera.position.z = 320;

    // ── Lights ────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(cfg.ambientLight, 1.5));
    const d1 = new THREE.DirectionalLight(cfg.directionalLeftLight, 1);
    d1.position.set(-4, 1, 4);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(cfg.directionalTopLight, 1);
    d2.position.set(-2, 5, 2);
    scene.add(d2);
    const pt = new THREE.PointLight("#ffffff", 0.8);
    pt.position.set(-2, 5, 2);
    scene.add(pt);

    // ── Globe ─────────────────────────────────────────────────
    const globe = new ThreeGlobe()
      .hexPolygonsData((countries as { features: object[] }).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.4)
      .showAtmosphere(cfg.showAtmosphere ?? true)
      .atmosphereColor(cfg.atmosphereColor!)
      .atmosphereAltitude(cfg.atmosphereAltitude!)
      .hexPolygonColor(() => cfg.polygonColor!);

    const mat = globe.globeMaterial() as unknown as {
      color: THREE.Color; emissive: THREE.Color; emissiveIntensity: number; shininess: number;
    };
    mat.color = new THREE.Color(cfg.globeColor);
    mat.emissive = new THREE.Color(cfg.emissive);
    mat.emissiveIntensity = cfg.emissiveIntensity!;
    mat.shininess = cfg.shininess!;

    // Arcs & points
    const points: { size: number; order: number; color: string; lat: number; lng: number }[] = [];
    for (const arc of data) {
      points.push({ size: cfg.pointSize!, order: arc.order, color: arc.color, lat: arc.startLat, lng: arc.startLng });
      points.push({ size: cfg.pointSize!, order: arc.order, color: arc.color, lat: arc.endLat,   lng: arc.endLng });
    }
    const uniquePoints = points.filter(
      (v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i,
    );

    globe
      .arcsData(data)
      .arcStartLat((d) => (d as ArcData).startLat)
      .arcStartLng((d) => (d as ArcData).startLng)
      .arcEndLat((d) => (d as ArcData).endLat)
      .arcEndLng((d) => (d as ArcData).endLng)
      .arcColor((d: unknown) => (d as ArcData).color)
      .arcAltitude((d) => (d as ArcData).arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(cfg.arcLength!)
      .arcDashInitialGap((d) => (d as ArcData).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => cfg.arcTime!);

    globe
      .pointsData(uniquePoints)
      .pointColor(() => "rgba(255,255,255,0.25)")
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    scene.add(globe);

    // ── Custom pulse rings (expand + contract smoothly) ───────
    const pulseRings: { inner: THREE.Mesh; outer: THREE.Mesh; phase: number }[] = [];
    const ringMat = () => new THREE.MeshBasicMaterial({
      color: 0xff4d00,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });

    PULSE_POINTS.forEach(([lat, lng], i) => {
      const pos = latLngToVec3(lat, lng);
      const normal = pos.clone().normalize();

      // Two concentric rings per city for a richer pulse
      const inner = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.8, 32), ringMat());
      const outer = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.8, 32), ringMat());

      for (const ring of [inner, outer]) {
        ring.position.copy(pos);
        // Orient ring face to point outward along the sphere normal
        ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        globe.add(ring); // added to globe group so it rotates with it
      }

      pulseRings.push({ inner, outer, phase: (i / PULSE_POINTS.length) * Math.PI * 2 });
    });

    // ── Mouse drag ────────────────────────────────────────────
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      globe.rotation.y += (e.clientX - prevX) * 0.005;
      globe.rotation.x += (e.clientY - prevY) * 0.003;
      globe.rotation.x = Math.max(-0.5, Math.min(0.5, globe.rotation.x));
      prevX = e.clientX; prevY = e.clientY;
    };
    const onMouseUp = () => { isDragging = false; };
    mount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // ── Animation loop ────────────────────────────────────────
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isDragging) globe.rotation.y += 0.003;

      // Smooth sine-wave pulse: each city has a staggered phase
      const t = Date.now() * 0.0008;
      for (const { inner, outer, phase } of pulseRings) {
        const s = Math.sin(t + phase);           // -1 → +1
        const innerScale = 0.7 + s * 0.4;       // 0.3 → 1.1
        const outerScale = 1.0 + s * 0.5;       // 0.5 → 1.5
        const innerOpacity = 0.5 + s * 0.25;    // 0.25 → 0.75
        const outerOpacity = 0.3 + s * 0.2;     // 0.1 → 0.5

        inner.scale.setScalar(innerScale);
        outer.scale.setScalar(outerScale);
        (inner.material as THREE.MeshBasicMaterial).opacity = innerOpacity;
        (outer.material as THREE.MeshBasicMaterial).opacity = outerOpacity;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      mount.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [globeConfig, data]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab", overflow: "hidden" }} />;
}
