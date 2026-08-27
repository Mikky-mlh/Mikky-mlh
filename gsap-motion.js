'use strict';

/* ═══════════════════════════════════════════════════════════
   CREATIVE MOTION (GSAP) — scrub reveal + image scale/fade
   Pure enhancement. If GSAP fails to load, the page stays fully
   readable (motion is applied progressively from a hidden state).
   ═══════════════════════════════════════════════════════════ */
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap || !window.ScrollTrigger || reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    /* 1. Scrub word-reveal manifesto (Desire) */
    const lines = document.querySelectorAll('.manifesto-pin .manifesto-line');
    if (lines.length) {
        const words = [];
        lines.forEach((line) => {
            line.querySelectorAll('.m-word').forEach((w) => words.push(w));
        });

        gsap.set(words, { opacity: 0.1 });
        gsap.to(words, {
            opacity: 1,
            ease: 'none',
            stagger: 0.04,
            scrollTrigger: {
                trigger: '.manifesto',
                start: 'top 75%',
                end: 'bottom 60%',
                scrub: true,
            },
        });
    }

    /* 2. Featured card tops — scale in, fade out (Intersection pulse) */
    const cards = document.querySelectorAll('[data-gsap-scale]');
    cards.forEach((card) => {
        const top = card.querySelector('.featured-card-top');
        if (!top) return;
        gsap.fromTo(
            top,
            { opacity: 0.25, scale: 0.92 },
            {
                opacity: 1,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 92%',
                    end: 'top 55%',
                    scrub: true,
                },
            }
        );
    });
})();
