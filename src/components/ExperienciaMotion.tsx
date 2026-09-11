import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExperienciaMotion() {
  const { pathname } = useLocation();
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduz.matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    const atualizar = (tempo: number) => lenis.raf(tempo * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(atualizar);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(atualizar); lenis.destroy(); };
  }, []);

  useGSAP(() => {
    window.scrollTo(0, 0);
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) return;

    gsap.from(".page-intro > *, .hero-copy > *", { y: 54, opacity: 0, duration: 1.05, stagger: 0.09, ease: "power3.out" });
    ScrollTrigger.batch(".reveal, .property-card, .principles article, .benefits article, .process li, .contact-details article", {
      start: "top 86%", once: true,
      onEnter: (elementos) => gsap.fromTo(elementos, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: .85, stagger: .08, ease: "power3.out", overwrite: true }),
    });

    if (pathname === "/") {
      const video = document.querySelector<HTMLVideoElement>(".hero-video");
      if (video) {
        const duracao = 15.133333;
        video.pause();
        const heroTl = gsap.timeline({
          scrollTrigger: { trigger: ".hero", start: "top top", end: () => `+=${duracao * 420}`, pin: true, scrub: .55, anticipatePin: 1, invalidateOnRefresh: true },
        });
        heroTl.to(video, { currentTime: duracao - .04, ease: "none", duration: 1 }, 0)
          .to(".hero-copy", { yPercent: -42, opacity: 0, ease: "power1.in", duration: .42 }, .12)
          .to(".hero-progress span", { scaleX: 1, ease: "none", duration: 1 }, 0);
      }
      const pista = document.querySelector<HTMLElement>(".horizontal-track");
      if (pista && window.innerWidth > 900) {
        const galeriaTl = gsap.timeline({ scrollTrigger: { trigger: ".horizontal-section", start: "top top", end: () => `+=${Math.max(2800, pista.scrollWidth * 1.55)}`, pin: true, scrub: .65, invalidateOnRefresh: true } });
        galeriaTl.to(pista, { x: () => -Math.max(0, pista.scrollWidth - (pista.parentElement?.clientWidth ?? window.innerWidth)), ease: "none", duration: .64 })
          .to(".horizontal-intro", { opacity: 0, xPercent: -24, duration: .12, ease: "power2.in" }, .58)
          .fromTo(".catalogue-expansion", { clipPath: "circle(0% at 88% 52%)" }, { clipPath: "circle(150% at 88% 52%)", duration: .36, ease: "power2.inOut" }, .64)
          .fromTo(".catalogue-expansion__mosaic img", { scale: .82, opacity: 0 }, { scale: 1, opacity: 1, stagger: .012, duration: .2, ease: "power2.out" }, .72);
      }
      gsap.fromTo(".all-projects", { clipPath: "inset(8% 9% 8% 9% round 28px)" }, {
        clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none",
        scrollTrigger: { trigger: ".all-projects", start: "top 88%", end: "top 18%", scrub: .8 },
      });
      gsap.to(".dream-word", { backgroundPositionX: "0%", ease: "none", scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom 25%", scrub: 1 } });
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { dependencies: [pathname], revertOnUpdate: true });

  useEffect(() => {
    if (!cursor.current || matchMedia("(pointer: coarse)").matches) return;
    const moverX = gsap.quickTo(cursor.current, "x", { duration: .35, ease: "power3" });
    const moverY = gsap.quickTo(cursor.current, "y", { duration: .35, ease: "power3" });
    const mover = (e: PointerEvent) => { moverX(e.clientX); moverY(e.clientY); };
    window.addEventListener("pointermove", mover);
    return () => window.removeEventListener("pointermove", mover);
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true"><span /></div>;
}
