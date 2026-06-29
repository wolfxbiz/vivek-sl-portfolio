"use client";

import dynamic from "next/dynamic";
import type { ArcData, GlobeConfig } from "./ui/globe";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

const globeConfig: GlobeConfig = {
  pointSize: 2,
  globeColor: "#000000",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.08,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.3,
  polygonColor: "rgba(255,255,255,0.9)",
  ambientLight: "#222222",
  directionalLeftLight: "#444444",
  directionalTopLight: "#333333",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.85,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.4,
};

function arc(o: number, sLat: number, sLng: number, eLat: number, eLng: number, color = "#FF4D00"): ArcData {
  const dist = Math.sqrt((sLat - eLat) ** 2 + (sLng - eLng) ** 2);
  return { order: o, startLat: sLat, startLng: sLng, endLat: eLat, endLng: eLng, arcAlt: Math.max(0.15, Math.min(0.7, dist / 250)), color };
}

const arcs: ArcData[] = [
  // ── India → everywhere ───────────────────────────────────────
  arc(1,  12.97,  77.59,  51.51,  -0.13),  // Bangalore → London
  arc(2,  12.97,  77.59,  40.71, -74.01),  // Bangalore → New York
  arc(3,  12.97,  77.59,  25.20,  55.27),  // Bangalore → Dubai
  arc(4,  12.97,  77.59,   1.35, 103.82),  // Bangalore → Singapore
  arc(5,  12.97,  77.59,  35.68, 139.69),  // Bangalore → Tokyo
  arc(6,  12.97,  77.59,  -1.29,  36.82),  // Bangalore → Nairobi
  arc(7,  12.97,  77.59,  -33.87, 151.21), // Bangalore → Sydney
  arc(8,  12.97,  77.59,  34.05,-118.24),  // Bangalore → LA
  arc(9,  19.08,  72.88,  48.86,   2.35),  // Mumbai → Paris
  arc(10, 19.08,  72.88,  52.52,  13.41),  // Mumbai → Berlin
  arc(11, 19.08,  72.88,  24.69,  46.72),  // Mumbai → Riyadh
  arc(12, 19.08,  72.88,   6.52,   3.38),  // Mumbai → Lagos
  arc(13, 19.08,  72.88,  -8.84,  13.23),  // Mumbai → Luanda
  arc(14, 19.08,  72.88,  22.32, 114.17),  // Mumbai → Hong Kong
  arc(15, 19.08,  72.88, -23.55, -46.63),  // Mumbai → São Paulo
  arc(16, 28.61,  77.21,  55.75,  37.62),  // Delhi → Moscow
  arc(17, 28.61,  77.21,  37.57, 126.98),  // Delhi → Seoul
  arc(18, 28.61,  77.21,  52.37,   4.90),  // Delhi → Amsterdam
  arc(19, 28.61,  77.21,  43.65, -79.38),  // Delhi → Toronto
  arc(20, 28.61,  77.21, -26.20,  28.04),  // Delhi → Johannesburg
  arc(21, 17.39,  78.49,  30.04,  31.24),  // Hyderabad → Cairo
  arc(22, 17.39,  78.49,  41.01,  28.98),  // Hyderabad → Istanbul
  arc(23, 13.08,  80.27,  59.91,  10.75),  // Chennai → Oslo
  arc(24, 13.08,  80.27,  -33.87, 151.21), // Chennai → Sydney

  // ── Europe hub ───────────────────────────────────────────────
  arc(25, 51.51,  -0.13,  40.71, -74.01),  // London → New York
  arc(26, 51.51,  -0.13, -23.55, -46.63),  // London → São Paulo
  arc(27, 51.51,  -0.13,  -33.87, 151.21), // London → Sydney
  arc(28, 51.51,  -0.13,   6.52,   3.38),  // London → Lagos
  arc(29, 48.86,   2.35,  30.04,  31.24),  // Paris → Cairo
  arc(30, 48.86,   2.35,  43.65, -79.38),  // Paris → Toronto
  arc(31, 52.52,  13.41,  35.68, 139.69),  // Berlin → Tokyo
  arc(32, 52.52,  13.41, -26.20,  28.04),  // Berlin → Johannesburg
  arc(33, 52.37,   4.90,  22.32, 114.17),  // Amsterdam → Hong Kong
  arc(34, 41.01,  28.98,  25.20,  55.27),  // Istanbul → Dubai
  arc(35, 55.75,  37.62,  39.91, 116.39),  // Moscow → Beijing

  // ── Americas hub ─────────────────────────────────────────────
  arc(36, 40.71, -74.01,  34.05,-118.24),  // New York → LA
  arc(37, 40.71, -74.01, -23.55, -46.63),  // New York → São Paulo
  arc(38, 40.71, -74.01,  25.20,  55.27),  // New York → Dubai
  arc(39, 34.05,-118.24,  35.68, 139.69),  // LA → Tokyo
  arc(40, 34.05,-118.24,  37.57, 126.98),  // LA → Seoul
  arc(41, 34.05,-118.24, -33.87, 151.21),  // LA → Sydney
  arc(42, 34.05,-118.24, -23.55, -46.63),  // LA → São Paulo
  arc(43, 43.65, -79.38,  48.86,   2.35),  // Toronto → Paris
  arc(44,-23.55, -46.63, -34.61, -58.38),  // São Paulo → Buenos Aires
  arc(45,-23.55, -46.63,   6.52,   3.38),  // São Paulo → Lagos

  // ── Asia-Pacific hub ─────────────────────────────────────────
  arc(46,  1.35, 103.82,  35.68, 139.69),  // Singapore → Tokyo
  arc(47,  1.35, 103.82, -33.87, 151.21),  // Singapore → Sydney
  arc(48,  1.35, 103.82,  25.20,  55.27),  // Singapore → Dubai
  arc(49, 22.32, 114.17,  35.68, 139.69),  // Hong Kong → Tokyo
  arc(50, 22.32, 114.17,  34.05,-118.24),  // Hong Kong → LA
  arc(51, 35.68, 139.69, -33.87, 151.21),  // Tokyo → Sydney
  arc(52, 37.57, 126.98,  51.51,  -0.13),  // Seoul → London
  arc(53, 39.91, 116.39,  34.05,-118.24),  // Beijing → LA
  arc(54,-33.87, 151.21,  48.86,   2.35),  // Sydney → Paris

  // ── Africa & Middle East ─────────────────────────────────────
  arc(55, 25.20,  55.27,  -1.29,  36.82),  // Dubai → Nairobi
  arc(56, 25.20,  55.27,  -8.84,  13.23),  // Dubai → Luanda
  arc(57, 24.69,  46.72,  30.04,  31.24),  // Riyadh → Cairo
  arc(58,  6.52,   3.38, -26.20,  28.04),  // Lagos → Johannesburg
  arc(59, -1.29,  36.82, -33.87, 151.21),  // Nairobi → Sydney
  arc(60, 30.04,  31.24,  51.51,  -0.13),  // Cairo → London
];

export default function GlobeSection() {
  return (
    <div className="relative w-full h-[520px] md:h-[680px] flex items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full z-0">
        <World data={arcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
