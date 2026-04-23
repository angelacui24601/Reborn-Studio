import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";
import { getProjects } from "@/lib/projects";

function getFilterCategory(category) {
  const v = (category || "").toLowerCase();
  if (v.includes("video")) return "video";
  if (v.includes("photo")) return "photography";
  if (v.includes("brand")) return "brand";
  return "all";
}

function getFirstParagraph(description) {
  const match = (description || "").match(/<p>(.*?)<\/p>/i);
  return match ? match[1] : "";
}

export default async function PortfolioPage() {
  const projects = await getProjects();
  const featured = projects[0];

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <SiteHeader />

      <main className="portfolio-main">
        <div className="page-header">
          <div className="section-label fade-up">Our Work</div>
          <h1 className="fade-up" style={{ transitionDelay: "0.1s" }}>Portfolio</h1>
        </div>

        <div className="portfolio-grid-section">
          <div className="filter-bar fade-up">
            <button className="filter-btn active" data-filter="all">All Work</button>
            <button className="filter-btn" data-filter="video">Video Campaign</button>
            <button className="filter-btn" data-filter="photography">Photography</button>
            <button className="filter-btn" data-filter="brand">Brand Campaign</button>
          </div>

          <div className="portfolio-grid" id="portfolioGrid">
            {projects.map((project, idx) => {
              const bg = project.masonry?.[0]?.bg || "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)";
              return (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="port-card fade-up"
                  data-cat={getFilterCategory(project.category)}
                  style={{ display: "block", textDecoration: "none", color: "inherit", transitionDelay: `${idx * 0.05}s` }}
                >
                  <div className="port-card-img">
                    <div className="img-placeholder" style={{ background: bg }}></div>
                    <div className="port-overlay"><div className="port-overlay-icon">→</div></div>
                  </div>
                  <div className="port-card-body">
                    <div className="port-card-cat">{project.category}</div>
                    <div className="port-card-title">{project.title}</div>
                    <p className="port-card-desc">{project.scope}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {featured && (
          <section className="case-study">
            <div className="case-study-inner">
              <div className="case-study-header fade-up">
                <div className="section-label" style={{ color: "var(--gray-3)" }}>Case Study</div>
                <h2>
                  {featured.title.split(" — ")[0]}
                  <br />
                  {featured.title.split(" — ").slice(1).join(" — ")}
                </h2>
                <div className="case-meta" style={{ marginTop: 32 }}>
                  <div className="case-meta-item"><span className="case-meta-label">Client</span><span className="case-meta-val">{featured.client}</span></div>
                  <div className="case-meta-item"><span className="case-meta-label">Category</span><span className="case-meta-val">{featured.category}</span></div>
                  <div className="case-meta-item"><span className="case-meta-label">Year</span><span className="case-meta-val">{featured.year}</span></div>
                  <div className="case-meta-item"><span className="case-meta-label">Scope</span><span className="case-meta-val">{featured.scope}</span></div>
                </div>
              </div>

              <div className="case-img-hero fade-up">
                <div className="img-placeholder" style={{ height: "100%", background: featured.masonry?.[0]?.bg || "#222" }}></div>
              </div>

              <div className="case-body fade-up">
                <div className="case-body-text">
                  <h3>The Challenge</h3>
                  <p>{getFirstParagraph(featured.description)}</p>
                </div>
                <div className="case-body-text">
                  <h3>Results</h3>
                  <p>{featured.stats?.map((s) => `${s.label}: ${s.num}`).join(" • ")}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}