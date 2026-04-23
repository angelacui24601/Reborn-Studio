"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursorFollower");
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const heroBg = document.querySelector(".hero-video-placeholder");

    let mx = 0;
    let my = 0;
    let fx = 0;
    let fy = 0;
    let rafId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
      }
    };

    const animateFollower = () => {
      if (!follower) return;
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = `${fx}px`;
      follower.style.top = `${fy}px`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const isInteractive = (target) => target.closest("a, button, input, textarea, .wcard, .port-card, .team-card, .service-column, .masonry-item, .video-placeholder");
    const onMouseOver = (e) => {
      if (!isInteractive(e.target)) return;
      cursor?.classList.add("grow");
      follower?.classList.add("grow");
    };
    const onMouseOut = (e) => {
      if (!isInteractive(e.target)) return;
      cursor?.classList.remove("grow");
      follower?.classList.remove("grow");
    };

    const onScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
      if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };

    const onMenuClick = () => {
      hamburger?.classList.toggle("open");
      mobileMenu?.classList.toggle("open");
      document.body.style.overflow = mobileMenu?.classList.contains("open") ? "hidden" : "";
    };

    const setupPortfolioFilter = () => {
      const filterBtns = document.querySelectorAll(".filter-btn");
      if (!filterBtns.length) return () => {};

      const handlers = [];
      filterBtns.forEach((btn) => {
        const handler = () => {
          filterBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const filter = btn.dataset.filter;
          document.querySelectorAll(".port-card").forEach((card) => {
            const show = filter === "all" || card.dataset.cat === filter;
            card.style.display = show ? "" : "none";
          });
        };
        btn.addEventListener("click", handler);
        handlers.push({ btn, handler });
      });

      return () => {
        handlers.forEach(({ btn, handler }) => btn.removeEventListener("click", handler));
      };
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-up, .reveal-up").forEach((el) => observer.observe(el));
    const teardownFilter = setupPortfolioFilter();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    hamburger?.addEventListener("click", onMenuClick);
    if (follower) rafId = requestAnimationFrame(animateFollower);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      hamburger?.removeEventListener("click", onMenuClick);
      observer.disconnect();
      teardownFilter();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}