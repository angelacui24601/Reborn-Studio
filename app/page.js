import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-follower" id="cursorFollower"></div>
      <SiteHeader />

      <section className="hero-video" id="heroSection">
        <div className="hero-video-bg">
          <div className="hero-video-placeholder"></div>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow reveal-up">New York - Est. 2024</div>

          <h1 className="hero-headline">
            <span className="hero-line reveal-up" style={{ "--d": "0.05s" }}>WE MAKE</span>
            <span className="hero-line hero-line--italic reveal-up" style={{ "--d": "0.15s" }}>culture</span>
            <span className="hero-line reveal-up" style={{ "--d": "0.25s" }}>MOVE.</span>
          </h1>

          <div className="hero-footer reveal-up" style={{ "--d": "0.4s" }}>
            <Link href="/portfolio" className="hero-cta-link">
              <span>View Work</span>
            </Link>
            <p className="hero-sub">Creative direction. Campaign production.<br/>Visual storytelling.</p>
          </div>
        </div>
      </section>

      <div className="marquee-band">
        <div className="marquee-track">
          <span>Creative Direction</span><span className="mdot">-</span>
          <span>Brand Campaigns</span><span className="mdot">-</span>
          <span>Visual Storytelling</span><span className="mdot">-</span>
          <span>Campaign Production</span><span className="mdot">-</span>
          <span>Motion Design</span><span className="mdot">-</span>
          <span>Photography</span><span className="mdot">-</span>
        </div>
      </div>

      <section className="statement-section">
        <p className="statement-text reveal-up">
          We are a creative and production studio<br />
          built for brands that <em>refuse to stand still.</em>
        </p>
      </section>

      <section className="work-section">
        <div className="work-header">
          <span className="work-label reveal-up">Selected Work</span>
          <Link href="/portfolio" className="work-all-link reveal-up" style={{ "--d": "0.08s" }}>All Projects -&gt;</Link>
        </div>

        <div className="work-grid">
          <Link href="/project/1" className="wcard wcard--large reveal-up">
            <div className="wcard-img">
              <div className="img-placeholder" style={{ background: "linear-gradient(145deg,#0f0d0b 0%,#2a2010 60%,#1a1208 100%)" }}></div>
            </div>
            <div className="wcard-info">
              <span className="wcard-cat">Sports Photography</span>
              <h3 className="wcard-title">Toma el Juego</h3>
            </div>
          </Link>

          <div className="wcard-stack">
            <Link href="/project/2" className="wcard reveal-up">
              <div className="wcard-img"><div className="img-placeholder" style={{ background: "linear-gradient(145deg,#08080f 0%,#181830 60%,#100e20 100%)" }}></div></div>
              <div className="wcard-info"><span className="wcard-cat">Video Campaign</span><h3 className="wcard-title">Neon Futures</h3></div>
            </Link>
            <Link href="/project/3" className="wcard reveal-up">
              <div className="wcard-img"><div className="img-placeholder" style={{ background: "linear-gradient(145deg,#0d0d0d 0%,#252525 60%,#181818 100%)" }}></div></div>
              <div className="wcard-info"><span className="wcard-cat">Photography</span><h3 className="wcard-title">Still Life Series</h3></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="strip-section">
        <div className="strip-left reveal-up">
          <p className="strip-overline">What We Do</p>
          <h2 className="strip-headline">Creative<br/>Without<br/>Limits.</h2>
        </div>
        <div className="strip-right">
          <div className="strip-item reveal-up"><span className="strip-num">01</span><div><h4>Creative Direction</h4><p>Concepts that move the needle.</p></div></div>
          <div className="strip-item reveal-up"><span className="strip-num">02</span><div><h4>Campaign Production</h4><p>Full-service production from casting to post.</p></div></div>
          <div className="strip-item reveal-up"><span className="strip-num">03</span><div><h4>Content &amp; Rollout</h4><p>Assets built to perform across channels.</p></div></div>
          <div className="strip-cta reveal-up"><Link href="/services" className="btn btn-outline-dark">See All Services</Link></div>
        </div>
      </section>

      <section className="cta-band">
        <h2 className="cta-band-text reveal-up">Let&apos;s build<br/><em>what&apos;s next.</em></h2>
        <Link href="/contact" className="cta-band-btn reveal-up">Start a Project</Link>
      </section>

      <SiteFooter />
      <ClientEffects />
    </>
  );
}
