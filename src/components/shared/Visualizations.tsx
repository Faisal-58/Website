"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { id: "cuzec", label: "CUZEC", x: 50, y: 50, size: 40, color: "#6366f1" },
  { id: "openai", label: "OpenAI", x: 20, y: 20, size: 28, color: "#10b981" },
  { id: "claude", label: "Claude", x: 80, y: 15, size: 28, color: "#f59e0b" },
  { id: "n8n", label: "n8n", x: 15, y: 55, size: 24, color: "#ef4444" },
  { id: "make", label: "Make", x: 85, y: 45, size: 24, color: "#8b5cf6" },
  { id: "zapier", label: "Zapier", x: 75, y: 75, size: 24, color: "#f97316" },
  { id: "shopify", label: "Shopify", x: 30, y: 80, size: 24, color: "#22c55e" },
  { id: "hubspot", label: "HubSpot", x: 55, y: 85, size: 24, color: "#f97316" },
  { id: "slack", label: "Slack", x: 90, y: 70, size: 22, color: "#a855f7" },
  { id: "stripe", label: "Stripe", x: 10, y: 35, size: 22, color: "#6366f1" },
  { id: "whatsapp", label: "WhatsApp", x: 40, y: 10, size: 22, color: "#22c55e" },
  { id: "google", label: "Google", x: 65, y: 25, size: 22, color: "#3b82f6" },
  { id: "microsoft", label: "Microsoft", x: 25, y: 70, size: 22, color: "#0ea5e9" },
];

const connections = [
  ["cuzec", "openai"], ["cuzec", "claude"], ["cuzec", "n8n"], ["cuzec", "make"],
  ["cuzec", "zapier"], ["cuzec", "shopify"], ["cuzec", "hubspot"], ["cuzec", "slack"],
  ["cuzec", "stripe"], ["cuzec", "whatsapp"], ["cuzec", "google"], ["cuzec", "microsoft"],
  ["n8n", "openai"], ["make", "shopify"], ["zapier", "hubspot"],
];

export function TechNetworkVisualization({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const nodePositions = nodes.map((node) => ({
        ...node,
        px: (node.x / 100) * w + Math.sin(time + node.x) * 3,
        py: (node.y / 100) * h + Math.cos(time + node.y) * 3,
      }));

      connections.forEach(([from, to]) => {
        const a = nodePositions.find((n) => n.id === from);
        const b = nodePositions.find((n) => n.id === to);
        if (!a || !b) return;

        const gradient = ctx.createLinearGradient(a.px, a.py, b.px, b.py);
        gradient.addColorStop(0, `${a.color}40`);
        gradient.addColorStop(1, `${b.color}40`);

        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        const pulsePos = (Math.sin(time * 2 + from.charCodeAt(0)) + 1) / 2;
        const px = a.px + (b.px - a.px) * pulsePos;
        const py = a.py + (b.py - a.py) * pulsePos;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#6366f1";
        ctx.fill();
      });

      nodePositions.forEach((node) => {
        const glow = ctx.createRadialGradient(node.px, node.py, 0, node.px, node.py, node.size);
        glow.addColorStop(0, `${node.color}30`);
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(node.px, node.py, node.size, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.px, node.py, node.size * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        ctx.fillStyle = "#f9fafb";
        ctx.font = `${Math.max(9, node.size * 0.35)}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.px, node.py + node.size * 0.7);
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: "400px" }}
    />
  );
}

export function EcosystemVisualization3D() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl border border-border bg-card overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl max-h-96">
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center animate-float glow">
              <span className="text-accent-light font-bold text-lg">CUZEC</span>
            </div>
          </div>

          {/* Orbiting nodes */}
          {[
            { label: "AI Agents", angle: 0, color: "#10b981" },
            { label: "Workflows", angle: 60, color: "#6366f1" },
            { label: "CRM", angle: 120, color: "#f59e0b" },
            { label: "E-commerce", angle: 180, color: "#22c55e" },
            { label: "Analytics", angle: 240, color: "#8b5cf6" },
            { label: "Operations", angle: 300, color: "#ef4444" },
          ].map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 38;
            const y = 50 + Math.sin(rad) * 38;
            return (
              <div
                key={node.label}
                className="absolute z-10"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap animate-pulse-glow"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}40`,
                    color: node.color,
                  }}
                >
                  {node.label}
                </div>
              </div>
            );
          })}

          {/* Connection lines via SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x2 = 50 + Math.cos(rad) * 38;
              const y2 = 50 + Math.sin(rad) * 38;
              return (
                <line
                  key={angle}
                  x1="50"
                  y1="50"
                  x2={x2}
                  y2={y2}
                  stroke="#6366f1"
                  strokeOpacity="0.2"
                  strokeWidth="0.3"
                  strokeDasharray="2 1"
                />
              );
            })}
          </svg>

          {/* Outer ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] rounded-full border border-accent/10 animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
}
