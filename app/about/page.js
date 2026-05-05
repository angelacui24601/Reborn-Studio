import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";

export default function AboutPage() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <SiteHeader />

      <main className="about-main">
        <div className="page-header">
          <div className="section-label fade-up">The Agency</div>
          <h1 className="fade-up" style={{ transitionDelay: "0.1s" }}>About Us</h1>
        </div>

        <section className="about-vision">
          <div>
            <div className="section-label fade-up">Our Vision</div>
            <p className="about-vision-text fade-up" style={{ transitionDelay: "0.1s" }}>
              Reborn Studios exists to help brands tell stories that <em>resonate with culture.</em> We believe powerful visual narratives create lasting impact.
            </p>
          </div>

          <div className="about-vision-right fade-up" style={{ transitionDelay: "0.2s" }}>
            <p>Founded in New York in 2024, Reborn Studios grew out of a shared belief among its founders that the creative agency model had grown too comfortable.</p>
            <p>We built a practice at the intersection of editorial craft and commercial ambition, spanning identity, film, photography, and campaign rollouts.</p>
            <p>Every project begins with a simple question: what does it mean for this brand to be <em>alive</em> right now?</p>

            <div className="about-stats">
              <div className="stat-item"><div className="stat-num">200<span>+</span></div><div className="stat-label">Projects Delivered</div></div>
              <div className="stat-item"><div className="stat-num">80<span>+</span></div><div className="stat-label">Global Clients</div></div>
              <div className="stat-item"><div className="stat-num">7<span>+</span></div><div className="stat-label">Years Active</div></div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team-inner">
            <div className="team-header fade-up"><div className="section-label" style={{ color: "var(--gray-3)" }}>The People</div><h2>Our<br/>Team</h2></div>
            <div className="team-grid">
              <div className="team-card fade-up">
                <div className="team-card-img"><div className="img-placeholder" style={{ background: "linear-gradient(160deg, #2a2318 0%, #4a3828 60%, #1a1a1a 100%)" }}></div></div>
                <div className="team-card-name">Jordan K.</div><div className="team-card-title">Creative Director</div>
              </div>
              <div className="team-card fade-up" style={{ transitionDelay: "0.1s" }}>
                <div className="team-card-img"><div className="img-placeholder" style={{ background: "linear-gradient(160deg, #181824 0%, #2a2a3e 60%, #1a1a2a 100%)" }}></div></div>
                <div className="team-card-name">Marcus T.</div><div className="team-card-title">Producer</div>
              </div>
              <div className="team-card fade-up" style={{ transitionDelay: "0.2s" }}>
                <div className="team-card-img"><div className="img-placeholder" style={{ background: "linear-gradient(160deg, #1e1c18 0%, #383428 60%, #1a1a18 100%)" }}></div></div>
                <div className="team-card-name">Aisha M.</div><div className="team-card-title">Visual Designer</div>
              </div>
            </div>
          </div>
        </section>

        <section className="company-section">
          <div className="company-inner">
            <div className="section-label fade-up">Trusted By</div>
            <h2 className="company-title fade-up" style={{ transitionDelay: "0.08s" }}>Brands We&apos;ve Worked With</h2>
            <p className="company-copy fade-up" style={{ transitionDelay: "0.12s" }}>
              Replace these placeholders with your partner logos as you grow your client list.
            </p>

            <div className="company-logos">
              <div className="company-logo-tile fade-up">Nike</div>
              <div className="company-logo-tile fade-up" style={{ transitionDelay: "0.05s" }}>Adidas</div>
              <div className="company-logo-tile fade-up" style={{ transitionDelay: "0.1s" }}>Puma</div>
              <div className="company-logo-tile fade-up" style={{ transitionDelay: "0.15s" }}>New Balance</div>
              <div className="company-logo-tile fade-up" style={{ transitionDelay: "0.2s" }}>Reebok</div>
              <div className="company-logo-tile fade-up" style={{ transitionDelay: "0.25s" }}>Asics</div>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-inner">
            <div className="section-label fade-up" style={{ color: "var(--gray-3)" }}>Testimonials</div>
            <h2 className="testimonials-title fade-up" style={{ transitionDelay: "0.08s" }}>
              What Clients Say
            </h2>

            <div className="testimonials-grid">
              <article className="testimonial-card fade-up" style={{ transitionDelay: "0.12s" }}>
                <p className="testimonial-quote">
                  “Reborn translated our vision into a campaign that felt premium and culturally real. The team is fast, thoughtful, and deeply creative.”
                </p>
                <p className="testimonial-author">Marketing Lead, Nike</p>
              </article>

              <article className="testimonial-card fade-up" style={{ transitionDelay: "0.18s" }}>
                <p className="testimonial-quote">
                  “From pre-production to final assets, every touchpoint was organized and intentional. We launched with total confidence.”
                </p>
                <p className="testimonial-author">Brand Director, Adidas</p>
              </article>

              <article className="testimonial-card fade-up" style={{ transitionDelay: "0.24s" }}>
                <p className="testimonial-quote">
                  “Their creative direction gave our brand a stronger voice across social, web, and OOH. Results exceeded expectations.”
                </p>
                <p className="testimonial-author">Founder, Atelier 88</p>
              </article>
            </div>
          </div>
        </section>

        <section style={{ padding: "120px 48px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label fade-up" style={{ justifyContent: "center" }}>Work With Us</div>
          <h2 className="fade-up" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.9, color: "var(--black)", margin: "24px 0 48px" }}>
            Let&apos;s Make<br/><em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--warm)" }}>Something</em><br/>Unforgettable.
          </h2>
          <div className="fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hello@rebornstudios.com" className="btn btn-fill">Get In Touch</a>
            <Link href="/portfolio" className="btn">View Our Work</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}