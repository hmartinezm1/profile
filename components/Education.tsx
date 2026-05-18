"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";

const degrees = [
  {
    degree: "Master of Business Intelligence",
    institution: "Online Business School & Universitat de Barcelona",
    location: "Spain",
    year: "2023",
    icon: GraduationCap,
    color: "#a78bfa",
  },
  {
    degree: "Master of Engineering in Computer Engineering",
    institution: "University of Puerto Rico, Mayagüez",
    location: "Puerto Rico, PR",
    year: "2018",
    gpa: "4.00 / 4.00",
    icon: GraduationCap,
    color: "#00d4ff",
  },
  {
    degree: "Systems Engineer",
    institution: "University of Cartagena",
    location: "Cartagena, COL",
    year: "2014",
    icon: GraduationCap,
    color: "#34d399",
  },
];

const certifications = [
  {
    name: "PCAP-31-03 · Certified Associate in Python Programming",
    issuer: "Python Institute",
    year: "December 2025",
    icon: Award,
    color: "#fb923c",
  },
];

const publications = [
  {
    title: "Cloud-based and Big Data-enabled Brokerage System for Smart Grids",
    venue: "IEEE BigData Congress 2017 · 6th International Congress on Big Data",
    icon: BookOpen,
    color: "#94a3b8",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6"
      style={{ background: "rgba(13,21,38,0.5)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Education &{" "}
            <span style={{ color: "#00d4ff" }}>Credentials</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degrees */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#64748b" }}>
              Degrees
            </h3>
            <div className="space-y-4">
              {degrees.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.degree} className="card-glass p-5 flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${d.color}15` }}
                    >
                      <Icon size={18} style={{ color: d.color }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
                        {d.degree}
                      </h4>
                      <p className="text-sm mt-0.5" style={{ color: "#94a3b8" }}>
                        {d.institution}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs" style={{ color: "#475569" }}>
                          {d.location} · {d.year}
                        </span>
                        {d.gpa && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(0,212,255,0.08)",
                              color: "#00d4ff",
                              border: "1px solid rgba(0,212,255,0.2)",
                            }}
                          >
                            GPA {d.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications + Publications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#64748b" }}>
                Certifications
              </h3>
              {certifications.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.name} className="card-glass p-5 flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}15` }}
                    >
                      <Icon size={18} style={{ color: c.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm leading-snug" style={{ color: "#e2e8f0" }}>
                        {c.name}
                      </h4>
                      <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                        {c.issuer}
                      </p>
                      <p className="text-xs mt-1 font-mono" style={{ color: "#475569" }}>
                        {c.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#64748b" }}>
                Publications
              </h3>
              {publications.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="card-glass p-5 flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(148,163,184,0.08)" }}
                    >
                      <Icon size={18} style={{ color: "#94a3b8" }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm leading-snug" style={{ color: "#e2e8f0" }}>
                        {p.title}
                      </h4>
                      <p className="text-xs mt-2 leading-relaxed" style={{ color: "#475569" }}>
                        {p.venue}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#64748b" }}>
                Languages
              </h3>
              <div className="card-glass p-5 space-y-3">
                {[
                  { lang: "Spanish", level: "Native", pct: 100 },
                  { lang: "English", level: "Fluent", pct: 92 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "#e2e8f0" }}>{l.lang}</span>
                      <span style={{ color: "#64748b" }}>{l.level}</span>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${l.pct}%`,
                          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
