"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#00d4ff", letterSpacing: "0.2em" }}
            >
              Senior Data Engineer
            </p>

            {/* Name */}
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "#e2e8f0",
              }}
            >
              Howard{" "}
              <span
                style={{
                  color: "#00d4ff",
                  textShadow: "0 0 30px rgba(0,212,255,0.4)",
                }}
              >
                Martínez
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="leading-relaxed mb-10 max-w-xl"
              style={{ color: "#94a3b8", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
            >
              Building the pipelines that make data products possible.{" "}
              <span style={{ color: "#cbd5e1" }}>
                7+ years engineering healthcare data infrastructure at scale —
                orchestrating with{" "}
                <span style={{ color: "#00d4ff" }}>Airflow</span>, transforming with{" "}
                <span style={{ color: "#a78bfa" }}>dbt</span>, and deploying on{" "}
                <span style={{ color: "#34d399" }}>Kubernetes</span>.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-14">
              <a
                href="https://www.linkedin.com/in/howard-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8"
              style={{ borderTop: "1px solid rgba(0,212,255,0.1)", paddingTop: "1.75rem" }}
            >
              {[
                { value: "7+", label: "Years of experience" },
                { value: "40+", label: "Production DAGs migrated" },
                { value: "1M+", label: "Records per daily cycle" },
                { value: "40%", label: "Query time reduction" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: "#00d4ff" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#64748b" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: avatar photo ── */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.4), rgba(124,58,237,0.3), transparent)",
                  padding: "2px",
                  borderRadius: "50%",
                  filter: "blur(8px)",
                  transform: "scale(1.08)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
              />

              {/* Gradient border ring */}
              <div
                style={{
                  padding: "3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 60%, rgba(0,212,255,0.2) 100%)",
                  position: "relative",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    background: "#0d1526",
                  }}
                >
                  <Image
                    src="/avatar.jpg"
                    alt="Howard Martínez"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>

              {/* Floating badge — location */}
              <div
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5"
                style={{
                  background: "rgba(10,15,30,0.9)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  backdropFilter: "blur(8px)",
                  color: "#94a3b8",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#34d399",
                    display: "inline-block",
                    boxShadow: "0 0 6px #34d399",
                  }}
                />
                Puerto Rico
              </div>

              {/* Floating badge — role */}
              <div
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  backdropFilter: "blur(8px)",
                  color: "#00d4ff",
                  whiteSpace: "nowrap",
                }}
              >
                PCAP-31-03
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
        style={{ color: "#64748b" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>
          scroll
        </span>
        <ArrowDown size={14} style={{ animation: "float 2s ease-in-out infinite" }} />
      </a>
    </section>
  );
}
