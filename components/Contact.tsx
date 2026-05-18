"use client";

import { Mail, MapPin, ExternalLink } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">
            Let&apos;s build something{" "}
            <span style={{ color: "#00d4ff" }}>together</span>
          </h2>
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: "#64748b" }}>
            Open to interesting conversations about data engineering, platform
            architecture, or just connecting with people who care about building
            things right.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="card-glass p-8 space-y-4">
            <a
              href="mailto:howard.martinez.meza@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,212,255,0.1)" }}
              >
                <Mail size={18} style={{ color: "#00d4ff" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#64748b" }}>
                  Email
                </p>
                <p className="text-sm font-medium truncate" style={{ color: "#e2e8f0" }}>
                  howard.martinez.meza@gmail.com
                </p>
              </div>
              <ExternalLink size={14} style={{ color: "#475569" }} className="group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/howard-martinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(10,102,194,0.15)" }}
              >
                <LinkedInIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#64748b" }}>
                  LinkedIn
                </p>
                <p className="text-sm font-medium" style={{ color: "#e2e8f0" }}>
                  linkedin.com/in/howard-martinez
                </p>
              </div>
              <ExternalLink size={14} style={{ color: "#475569" }} className="group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124,58,237,0.1)" }}
              >
                <MapPin size={18} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: "#64748b" }}>
                  Location
                </p>
                <p className="text-sm font-medium" style={{ color: "#e2e8f0" }}>
                  Canóvanas, Puerto Rico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
