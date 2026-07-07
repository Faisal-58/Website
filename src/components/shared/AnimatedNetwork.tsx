"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  label: string;
  pulse: number;
  color: string;
}

const NODE_LABELS = [
  "Trigger",
  "AI Agent",
  "CRM",
  "Shopify",
  "WhatsApp",
  "Slack",
  "HubSpot",
  "Stripe",
  "n8n",
  "Output",
  "OpenAI",
  "Webhook",
];

export function AnimatedNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      nodesRef.current = [];
      const count = Math.min(12, Math.floor(W / 60));
      for (let i = 0; i < count; i++) {
        nodesRef.current.push({
          x: 60 + Math.random() * (W - 120),
          y: 30 + Math.random() * (H - 60),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 4 + Math.random() * 3,
          label: NODE_LABELS[i % NODE_LABELS.length],
          pulse: Math.random() * Math.PI * 2,
          color:
            i % 3 === 0 ? "#0F766E" : i % 3 === 1 ? "#14B8A6" : "#0891B2",
        });
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() / 1000;

      const nodes = nodesRef.current;

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 40 || n.x > W - 40) n.vx *= -1;
        if (n.y < 20 || n.y > H - 20) n.vy *= -1;
        n.pulse += 0.02;
      });

      // Draw connections
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (j <= i) return;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(15,118,110,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Animated data packet
            const progress = ((t * 0.4 + i * 0.3 + j * 0.2) % 1);
            const px = a.x + dx * progress;
            const py = a.y + dy * progress;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(20,184,166,${alpha * 2})`;
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach((n) => {
        const pulseR = n.r + Math.sin(n.pulse) * 1.5;
        // Pulse ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR + 8, 0, Math.PI * 2);
        ctx.strokeStyle = n.color + "22";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Node
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        // Label
        ctx.font = "11px Inter,sans-serif";
        ctx.fillStyle = "#475569";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y - pulseR - 7);
      });

      animFrameRef.current = requestAnimationFrame(drawNetwork);
    };

    window.addEventListener("resize", () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resize();
      drawNetwork();
    });

    resize();
    drawNetwork();

    return () => {
      window.removeEventListener("resize", () => {});
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: "280px", display: "block" }}
    />
  );
}
