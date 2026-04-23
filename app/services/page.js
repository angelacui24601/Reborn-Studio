import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";

export default function ServicesPage() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <SiteHeader />

      <main className="services-main">
        <div className="page-header">
          <div className="section-label fade-up">Capabilities</div>
          <h1 className="fade-up" style={{ transitionDelay: "0.1s" }}>Services</h1>
        </div>

        <section className="services-columns-wrap">
          <div className="section-label fade-up">What We Offer</div>
          <p className="services-columns-intro fade-up" style={{ transitionDelay: "0.08s" }}>
            Three focused service pillars designed to help brands build sharp ideas and execute them across every touchpoint.
          </p>

          <div className="services-columns">
            <article className="service-column fade-up" style={{ transitionDelay: "0.12s" }}>
              <div className="service-column-image"><div className="img-placeholder" style={{ background: "linear-gradient(145deg, #251d16 0%, #3d2f24 100%)" }}></div></div>
              <h3>Creative Direction</h3>
              <ul>
                <li>Brand and campaign concept development</li>
                <li>Visual language and mood systems</li>
                <li>Art direction for photo and film</li>
                <li>Creative deck and pre-production alignment</li>
              </ul>
            </article>

            <article className="service-column fade-up" style={{ transitionDelay: "0.18s" }}>
              <div className="service-column-image"><div className="img-placeholder" style={{ background: "linear-gradient(145deg, #151c24 0%, #243447 100%)" }}></div></div>
              <h3>Campaign Production</h3>
              <ul>
                <li>Production planning and scheduling</li>
                <li>Casting, locations, and crew curation</li>
                <li>On-set direction and production management</li>
                <li>Editing, color, and post delivery</li>
              </ul>
            </article>

            <article className="service-column fade-up" style={{ transitionDelay: "0.24s" }}>
              <div className="service-column-image"><div className="img-placeholder" style={{ background: "linear-gradient(145deg, #222018 0%, #3f3a26 100%)" }}></div></div>
              <h3>Content &amp; Rollout</h3>
              <ul>
                <li>Cross-channel campaign asset systems</li>
                <li>Photography and motion content packages</li>
                <li>Launch planning for social, web, and OOH</li>
                <li>Performance-ready deliverables by format</li>
              </ul>
            </article>
          </div>

          <div className="services-columns-cta fade-up" style={{ transitionDelay: "0.3s" }}>
            <Link href="/contact" className="btn btn-fill">Start a Project</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}