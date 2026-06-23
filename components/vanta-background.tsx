"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;

    const initializeVanta = async () => {
      // 1. Inject Three.js into the browser window safely
      if (!(window as any).THREE) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
          script.async = true;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // 2. Inject Vanta Topology effect script
      if (!(window as any).VANTA) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js";
          script.async = true;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // 3. Fire up the 3D WebGL Canvas
      if (vantaRef.current && (window as any).VANTA?.TOPOLOGY) {
        effect = (window as any).VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x222222, // Dark charcoal luxury waves
          backgroundColor: 0x0a0a0a, // Pure pitch-black depth
        });
      }
    };

    initializeVanta();

    // Clean up the 3D canvas context if the user leaves the page
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 w-full h-full -z-10" 
      style={{ backgroundColor: "#0A0A0A" }} 
    />
  );
}
