import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";
import PortfolioFilters from "@/components/PortfolioFilters";
import { getProjects } from "@/lib/projects";

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

        <PortfolioFilters projects={projects} />

        {featured && (
          (() => {
            const featuredBg = featured.coverBg || (featured.media?.[0]?.bg || featured.masonry?.[0]?.bg) || "#222";
            const isFeaturedImageBg = /^url\(/i.test((featuredBg || "").trim());

            return (
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
                <div className={`img-placeholder${isFeaturedImageBg ? " has-media-image" : ""}`} style={{ height: "100%", background: featuredBg }}></div>
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
            );
          })()
        )}
      </main>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}