"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function PortfolioFilters({ projects }) {
  const [activeClient, setActiveClient] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(null);

  const clients = useMemo(
    () => [...new Set(projects.map((p) => p.client).filter(Boolean))],
    [projects]
  );
  const services = useMemo(
    () => [...new Set(projects.flatMap((p) => p.services || []).filter(Boolean))],
    [projects]
  );
  const industries = useMemo(
    () => [...new Set(projects.map((p) => p.industry).filter(Boolean))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeClient && p.client !== activeClient) return false;
      if (activeService && !(p.services || []).includes(activeService)) return false;
      if (activeIndustry && p.industry !== activeIndustry) return false;
      return true;
    });
  }, [projects, activeClient, activeService, activeIndustry]);

  const isAllActive = !activeClient && !activeService && !activeIndustry;

  const resetAll = () => {
    setActiveClient(null);
    setActiveService(null);
    setActiveIndustry(null);
  };

  return (
    <div className="portfolio-grid-section">
      <div className="filter-section fade-up">
        <div className="filter-bar filter-bar--top">
          <button
            className={`filter-btn${isAllActive ? " active" : ""}`}
            onClick={resetAll}
          >
            All Work
          </button>
        </div>

        <div className="filter-row">
          <div className="filter-row-label">Clients</div>
          <div className="filter-bar">
            {clients.map((client) => (
              <button
                key={client}
                className={`filter-btn${activeClient === client ? " active" : ""}`}
                onClick={() =>
                  setActiveClient(activeClient === client ? null : client)
                }
              >
                {client}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-row-label">Services</div>
          <div className="filter-bar">
            {services.map((service) => (
              <button
                key={service}
                className={`filter-btn${activeService === service ? " active" : ""}`}
                onClick={() =>
                  setActiveService(activeService === service ? null : service)
                }
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-row-label">Industries</div>
          <div className="filter-bar">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`filter-btn${activeIndustry === industry ? " active" : ""}`}
                onClick={() =>
                  setActiveIndustry(activeIndustry === industry ? null : industry)
                }
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="portfolio-grid" id="portfolioGrid">
        {filteredProjects.map((project, idx) => {
          const mediaItems = project.media?.length
            ? project.media
            : project.masonry || [];
          const bg =
            project.coverBg ||
            mediaItems[0]?.bg ||
            "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)";
          const isImageBg = /^url\(/i.test((bg || "").trim());
          return (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="port-card fade-up"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                transitionDelay: `${idx * 0.05}s`,
              }}
            >
              <div className="port-card-img">
                <div
                  className={`img-placeholder${isImageBg ? " has-media-image" : ""}`}
                  style={{ background: bg }}
                ></div>
                <div className="port-overlay">
                  <div className="port-overlay-icon">→</div>
                </div>
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
  );
}
