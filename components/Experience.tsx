"use client";

const experience = [
  {
    role: "Senior Data Engineer",
    company: "Abarca Health LLC",
    location: "San Juan, PR",
    period: "June 2023 – Present",
    current: true,
    bullets: [
      "Architected migration of 40+ production DAGs from Stonebranch to Apache Airflow 3.x TaskFlow API, eliminating legacy scheduler dependency and improving end-to-end pipeline observability.",
      "Engineered containerized dbt transformation runs via @task.kubernetes_cmd, enabling isolated, reproducible Kubernetes pod execution per transformation step.",
      "Built dynamic DAG factory pattern for pharmaceutical data synchronization, cutting new-client pipeline onboarding from days to hours.",
      "Led Blue Shield of California (BSC) platform deployments: ETL design, Snowflake schema validation, and cross-functional alignment from raw ingestion through reporting layer.",
      "Designed Snowflake stored procedures with Time Travel recovery logic for audit-safe healthcare data rollbacks.",
      "Earned PCAP-31-03 certification (December 2025); applied advanced Python patterns to standardize DataOps tooling across the team.",
    ],
    tags: ["Airflow 3.x", "dbt", "Snowflake", "Kubernetes", "Python"],
  },
  {
    role: "BI Specialist III — Team Lead",
    company: "Abarca Health LLC",
    location: "San Juan, PR",
    period: "April 2022 – June 2023",
    current: false,
    bullets: [
      "Led a 4-person BI team through the active migration from SSIS to dbt, driving adoption of version-controlled, modular SQL models.",
      "Championed the transition from SQL Server to Snowflake; designed initial star schema models, reducing core PBM dashboard query time by 40%.",
      "Maintained T-SQL and SSIS workloads in parallel during transition, ensuring zero disruption to client reporting SLAs.",
      "Established dbt coding standards, testing patterns, and code review practices that became the team baseline for all new pipeline development.",
    ],
    tags: ["dbt", "Snowflake", "SSIS", "T-SQL", "Team Lead"],
  },
  {
    role: "BI Specialist II — Team Lead",
    company: "Abarca Health LLC",
    location: "San Juan, PR",
    period: "April 2020 – April 2022",
    current: false,
    bullets: [
      "Developed T-SQL stored procedures and SSIS pipelines ingesting pharmaceutical claims data from multiple payers, processing 1M+ records per daily cycle.",
      "Initiated early evaluation of dbt and Snowflake; built proof-of-concept models that informed the platform migration roadmap.",
      "Promoted to team lead; mentored 2 analysts on T-SQL optimization, SSIS package design, and data modeling fundamentals.",
    ],
    tags: ["T-SQL", "SSIS", "dbt POC", "Snowflake POC"],
  },
  {
    role: "BI Specialist I",
    company: "Abarca Health LLC",
    location: "San Juan, PR",
    period: "April 2019 – April 2020",
    current: false,
    bullets: [
      "Built T-SQL queries, stored procedures, and SSIS ETL packages for the pharmacy analytics platform, supporting monthly reporting for 5+ client accounts.",
      "Automated recurring manual reporting workflows via SSIS, saving ~12 analyst hours per week.",
    ],
    tags: ["T-SQL", "SSIS", "ETL"],
  },
  {
    role: "Junior BI Specialist",
    company: "Abarca Health LLC",
    location: "San Juan, PR",
    period: "April 2018 – April 2019",
    current: false,
    bullets: [
      "Designed and implemented the company's first Master Data Services (MDS) solution, addressing a critical gap in reference data governance.",
      "Developed T-SQL scripts and SSIS packages for pharmacy benefit data extraction, supporting the go-live of two enterprise health plan clients.",
    ],
    tags: ["MDS", "T-SQL", "SSIS"],
  },
  {
    role: "Professional in Systems",
    company: "Coosalud EPS-S",
    location: "Cartagena, COL",
    period: "Nov 2014 – Jul 2015",
    current: false,
    bullets: [
      "Developed internal database systems and technical solutions supporting health insurance operations for a national Colombian health provider.",
    ],
    tags: ["Database", "Health Insurance"],
  },
  {
    role: "Young Researcher",
    company: "University of Cartagena",
    location: "Cartagena, COL",
    period: "May 2013 – May 2014",
    current: false,
    bullets: [
      "Conducted research on cloud computing and big data architectures; co-authored published IEEE conference paper on smart grid brokerage systems.",
    ],
    tags: ["Research", "Cloud Computing", "IEEE"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label">Work History</p>
          <h2 className="section-title">
            7+ years building{" "}
            <span style={{ color: "#00d4ff" }}>healthcare data</span> at scale
          </h2>
        </div>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(124,58,237,0.3), transparent)",
            }}
          />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                  style={{
                    background: job.current ? "#00d4ff" : "#0a0f1e",
                    borderColor: job.current ? "#00d4ff" : "rgba(0,212,255,0.4)",
                    boxShadow: job.current ? "0 0 12px rgba(0,212,255,0.6)" : "none",
                    transform: "translateX(-5px)",
                  }}
                />

                <div className="card-glass p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-base" style={{ color: "#e2e8f0" }}>
                          {job.role}
                        </h3>
                        {job.current && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "rgba(0,212,255,0.12)",
                              color: "#00d4ff",
                              border: "1px solid rgba(0,212,255,0.3)",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm mt-0.5" style={{ color: "#94a3b8" }}>
                        {job.company}{" "}
                        <span style={{ color: "#475569" }}>· {job.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono" style={{ color: "#475569" }}>
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                        <span style={{ color: "#00d4ff", marginTop: "0.3em", flexShrink: 0 }}>›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="skill-tag" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
