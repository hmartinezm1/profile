"use client";

import { Database, GitBranch, Server, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Platform Engineering",
    desc: "Snowflake-native design with Time Travel, Streams, RBAC, and dynamic SQL stored procedures for audit-safe healthcare rollbacks.",
    color: "#00d4ff",
  },
  {
    icon: GitBranch,
    title: "Pipeline Orchestration",
    desc: "Architected 40+ production DAG migrations to Apache Airflow 3.x TaskFlow API. Dynamic DAG factories cutting client onboarding from days to hours.",
    color: "#a78bfa",
  },
  {
    icon: Server,
    title: "Infrastructure & DevOps",
    desc: "Containerized dbt transformation runs via @task.kubernetes_cmd — isolated, reproducible Kubernetes pod execution per transformation step.",
    color: "#34d399",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare Data Domain",
    desc: "7+ years in pharmacy benefit management (PBM). Deep understanding of pharmaceutical analytics, healthcare compliance, and client SLAs.",
    color: "#fb923c",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title mb-6">
              Where DataOps meets{" "}
              <span style={{ color: "#00d4ff" }}>infrastructure thinking</span>
            </h2>

            <div className="space-y-4" style={{ color: "#94a3b8", lineHeight: "1.75" }}>
              <p>
                I&apos;m a data engineer with{" "}
                <span style={{ color: "#e2e8f0" }}>
                  7+ years at Abarca Health LLC
                </span>
                , where I&apos;ve grown from building SSIS pipelines to architecting
                cloud-native data platforms on Snowflake and Kubernetes.
              </p>
              <p>
                My work lives at the intersection of data engineering and
                DevOps — I don&apos;t just write pipelines, I build the systems and
                toolchains that make data products reliable, observable, and
                maintainable at scale.
              </p>
              <p>
                Currently focused on{" "}
                <span style={{ color: "#00d4ff" }}>Apache Airflow 3.x</span>{" "}
                modernization, dbt-on-Kubernetes execution patterns, and
                scaling pharmaceutical analytics infrastructure to serve
                enterprise health plan clients.
              </p>
              <p>
                <span style={{ color: "#a78bfa" }}>PCAP-31-03 certified</span>{" "}
                Python developer. Published IEEE researcher. Masters in
                Computer Engineering (GPA 4.00) from UPR Mayagüez.
              </p>
            </div>

            {/* Current stack */}
            <div
              className="mt-8 p-4 rounded-lg"
              style={{
                background: "rgba(0, 212, 255, 0.04)",
                border: "1px solid rgba(0, 212, 255, 0.12)",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              <p className="text-xs mb-3" style={{ color: "#64748b" }}>
                // current_stack.py
              </p>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                <span style={{ color: "#00d4ff" }}>stack</span>{" "}
                <span style={{ color: "#64748b" }}>=</span>{" "}
                <span style={{ color: "#e2e8f0" }}>{`{`}</span>
              </p>
              <div className="pl-4 text-sm space-y-1" style={{ color: "#94a3b8" }}>
                <p>
                  <span style={{ color: "#a78bfa" }}>&quot;orchestration&quot;</span>
                  {": "}
                  <span style={{ color: "#34d399" }}>&quot;Airflow 3.x&quot;</span>,
                </p>
                <p>
                  <span style={{ color: "#a78bfa" }}>&quot;transform&quot;</span>
                  {": "}
                  <span style={{ color: "#34d399" }}>&quot;dbt&quot;</span>,
                </p>
                <p>
                  <span style={{ color: "#a78bfa" }}>&quot;warehouse&quot;</span>
                  {": "}
                  <span style={{ color: "#34d399" }}>&quot;Snowflake&quot;</span>,
                </p>
                <p>
                  <span style={{ color: "#a78bfa" }}>&quot;infra&quot;</span>
                  {": "}
                  <span style={{ color: "#34d399" }}>&quot;Kubernetes + Docker&quot;</span>,
                </p>
                <p>
                  <span style={{ color: "#a78bfa" }}>&quot;lang&quot;</span>
                  {": "}
                  <span style={{ color: "#34d399" }}>&quot;Python + T-SQL&quot;</span>,
                </p>
              </div>
              <p className="text-sm" style={{ color: "#e2e8f0" }}>
                {`}`}
              </p>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="card-glass p-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${h.color}18` }}
                  >
                    <Icon size={18} style={{ color: h.color }} />
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: "#e2e8f0" }}
                  >
                    {h.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
