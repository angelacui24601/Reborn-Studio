import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/projects";
import ClientEffects from "@/components/ClientEffects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ id: String(project.id) }));
}

export default async function ProjectDetailPage({ params }) {
  const projects = await getProjects();
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="cursor" id="cursor"></div>

      <div className="project-detail-layout">
        <aside className="project-left" id="projectLeft">
          <div className="project-left-inner">
            <Link href="/portfolio" className="back-btn" id="backBtn">
              <span className="back-arrow">←</span>
              <span>Portfolio</span>
            </Link>

            <div className="proj-cat-badge">{project.category}</div>
            <h1 className="proj-title">{project.title}</h1>

            <div className="proj-meta-grid">
              <div className="proj-meta-item"><div className="proj-meta-label">Client</div><div className="proj-meta-val">{project.client}</div></div>
              <div className="proj-meta-item"><div className="proj-meta-label">Year</div><div className="proj-meta-val">{project.year}</div></div>
              <div className="proj-meta-item" style={{ gridColumn: "1/-1" }}><div className="proj-meta-label">Scope</div><div className="proj-meta-val">{project.scope}</div></div>
            </div>

            <div className="proj-description" dangerouslySetInnerHTML={{ __html: project.description || "" }}></div>

            <div className="proj-results">
              <div className="proj-results-label">Results</div>
              <div className="proj-stats">
                {(project.stats || []).map((stat) => (
                  <div key={stat.label}>
                    <div className="proj-stat-num">{stat.num}</div>
                    <div className="proj-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="next-project-btn">
              <div className="next-label">Next Project</div>
              <Link href={`/project/${nextProject.id}`} className="next-link">
                <span>{nextProject.title}</span>
                <span className="next-link-arrow">→</span>
              </Link>
            </div>
          </div>
        </aside>

        <main className="project-right" id="projectRight">
          {project.isVideo && project.videoLabel ? (
            <>
              <div className="right-section-label">Campaign Film</div>
              <div className="masonry-video" style={{ marginBottom: 32 }}>
                <div className="video-placeholder">
                  <div className="img-placeholder" style={{ position: "absolute", inset: 0, opacity: 0.25, background: project.masonry?.[0]?.bg || "#222" }}></div>
                  <div className="play-btn">▶</div>
                  <div className="video-label">{project.videoLabel}</div>
                </div>
              </div>
            </>
          ) : null}

          <div className="right-section-label">Visual Gallery</div>
          <div className="masonry-grid">
            {(project.masonry || []).map((item) => (
              <div key={item.caption} className={`masonry-item ${item.size}`}>
                <div className="img-placeholder" style={{ background: item.bg }}></div>
                <div className="masonry-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <ClientEffects />
    </>
  );
}