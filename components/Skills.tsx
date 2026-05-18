"use client";

const skillGroups = [
  {
    category: "Orchestration",
    color: "cyan",
    skills: ["Apache Airflow 3.x", "TaskFlow API", "KubernetesPodOperator", "DAG Factory Pattern", "Stonebranch"],
  },
  {
    category: "Transformation & ETL",
    color: "purple",
    skills: ["dbt (models, tests, snapshots, macros)", "SSIS", "T-SQL Stored Procedures", "Dynamic SQL"],
  },
  {
    category: "Data Platform",
    color: "green",
    skills: ["Snowflake", "Time Travel", "Streams & Tasks", "RBAC", "SQL Server", "Star Schema Design"],
  },
  {
    category: "Infrastructure",
    color: "orange",
    skills: ["Kubernetes", "Docker", "Bash Scripting", "Containerized Workloads"],
  },
  {
    category: "Languages",
    color: "cyan",
    skills: ["Python (PCAP-31-03)", "T-SQL", "SQL", "Bash"],
  },
  {
    category: "Domain",
    color: "purple",
    skills: ["Pharmacy Benefit Management", "Pharmaceutical Analytics", "Healthcare Data Platforms", "PBM Client Reporting"],
  },
];

type ColorVariant = "cyan" | "purple" | "green" | "orange";

const tagClass: Record<ColorVariant, string> = {
  cyan: "skill-tag",
  purple: "skill-tag skill-tag-purple",
  green: "skill-tag skill-tag-green",
  orange: "skill-tag skill-tag-orange",
};

const categoryColor: Record<ColorVariant, string> = {
  cyan: "#00d4ff",
  purple: "#a78bfa",
  green: "#34d399",
  orange: "#fb923c",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(13,21,38,0.5)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">
            The stack behind the{" "}
            <span style={{ color: "#00d4ff" }}>pipelines</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const variant = group.color as ColorVariant;
            return (
              <div key={group.category} className="card-glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: categoryColor[variant],
                      boxShadow: `0 0 8px ${categoryColor[variant]}`,
                    }}
                  />
                  <h3 className="text-xs font-semibold tracking-wider uppercase" style={{ color: categoryColor[variant] }}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className={tagClass[variant]}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
