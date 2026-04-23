import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">REBORN<span>.</span></div>
          <p className="footer-tagline">Bold visual campaigns that connect brands<br/>with modern audiences.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@rebornstudios.com">hello@rebornstudios.com</a>
          <p style={{ marginTop: 20, color: "var(--gray-3)" }}>Follow Us</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Vimeo">VM</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024 Reborn Studios. All rights reserved.</span>
        <span>New York, NY</span>
      </div>
    </footer>
  );
}