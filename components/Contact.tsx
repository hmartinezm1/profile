"use client";

import { ExternalLink } from "lucide-react";

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

        <div className="max-w-sm mx-auto">
          <div className="card-glass p-6">
            <a
              href="https://www.linkedin.com/in/howard-martinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(10,102,194,0.15)", color: "#0a66c2" }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
