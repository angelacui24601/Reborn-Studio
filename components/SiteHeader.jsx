"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <nav className="navbar" id="navbar">
        <Link href="/" className="nav-logo">REBORN<span>.</span></Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">Start a Project</Link>
        <div className="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </>
  );
}