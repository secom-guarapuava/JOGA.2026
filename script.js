/* ============================================================
   JOGA 2026 — Site oficial · script.js
   Microinterações, partículas, scroll reveal, contador,
   placares animados e detalhes premium.
   ============================================================ */

(() => {
  'use strict';

  /* -------- Helpers -------- */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------- NAV: scroll states + esconder ao rolar p/ baixo -------- */
  const nav = $('#nav');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    if (y > 240 && y > lastY + 6) {
      nav.classList.add('is-hidden');
    } else if (y < lastY - 6) {
      nav.classList.remove('is-hidden');
    }
    lastY = y;
    toTop.classList.toggle('is-visible', y > 600);
  };
  const toTop = $('.toTop');
  window.addEventListener('scroll', onScroll, { passive: true });

  /* -------- Burger menu -------- */
  const burger = $('#burger');
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  // fecha menu mobile ao clicar em links
  $$('.nav__mobile a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded','false');
  }));

  /* -------- Reveal on scroll -------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* -------- Stats counter -------- */
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const num = el.querySelector('.stat__num') || el;
      const target = parseInt(num.getAttribute('data-target'), 10);
      const suffix = num.getAttribute('data-suffix') || '';
      if (isNaN(target)) return;
      animateNumber(num, target, 1400, suffix);
      statIO.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  $$('.stat').forEach(s => statIO.observe(s));

  function animateNumber(el, target, dur = 1200, suffix = '') {
    if (prefersReduced) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const from = 0;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (target - from) * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* -------- Placares: contador nos dois lados do board destaque -------- */
  const bnIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      animateNumber(el, target, 1100);
      bnIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.bn').forEach(b => bnIO.observe(b));

  /* -------- Countdown (até 19 de outubro de 2026, 08:00 -03) -------- */
  const targetDate = new Date('2026-10-19T08:00:00-03:00');
  const cdNodes = {
    dias: $('[data-unit="dias"]'),
    horas: $('[data-unit="horas"]'),
    min: $('[data-unit="min"]'),
    seg: $('[data-unit="seg"]'),
  };
  const updateCountdown = () => {
    const now = new Date();
    let diff = Math.max(0, targetDate - now);
    const sec = 1000, min = 60*sec, hour = 60*min, day = 24*hour;
    const d = Math.floor(diff / day); diff -= d*day;
    const h = Math.floor(diff / hour); diff -= h*hour;
    const m = Math.floor(diff / min); diff -= m*min;
    const s = Math.floor(diff / sec);
    if (cdNodes.dias)  cdNodes.dias.textContent  = String(d).padStart(3,'0');
    if (cdNodes.horas) cdNodes.horas.textContent = String(h).padStart(2,'0');
    if (cdNodes.min)   cdNodes.min.textContent   = String(m).padStart(2,'0');
    if (cdNodes.seg)   cdNodes.seg.textContent   = String(s).padStart(2,'0');
  };
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* -------- Partículas do hero (confetes/luzes) -------- */
  const particles = $('#particles');
  if (particles && !prefersReduced) {
    const colors = ['#FFFFFF','#F2C30F','#4DAE3F','#FFFFFF','#FFFFFF','#F2C30F'];
    const N = 22;
    for (let i = 0; i < N; i++) {
      const p = document.createElement('span');
      p.className = 'p';
      const size = 4 + Math.random() * 8;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = (Math.random() * 100) + '%';
      p.style.top  = (Math.random() * 100) + '%';
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (7 + Math.random() * 8) + 's';
      p.style.animationDelay = (-Math.random() * 10) + 's';
      p.style.opacity = String(0.6 + Math.random() * 0.4);
      particles.appendChild(p);
    }
  }

  /* -------- Vídeo play overlay -------- */
  const playBtn = $('#videoPlay');
  const screen = $('#videoScreen');
  if (playBtn && screen) {
    playBtn.addEventListener('click', () => {
      playBtn.classList.add('is-hidden');
      const iframe = screen.querySelector('iframe');
      if (iframe) {
        const url = new URL(iframe.src);
        url.searchParams.set('autoplay', '1');
        iframe.src = url.toString();
      }
    });
  }

  /* -------- Smooth scroll (fallback p/ navegadores antigos) -------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
      }
    });
  });

  /* -------- Card stack parallax suave -------- */
  const cardStack = $('.card-stack');
  if (cardStack && !prefersReduced) {
    cardStack.addEventListener('mousemove', (e) => {
      const r = cardStack.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cardStack.querySelectorAll('.cs').forEach((el, i) => {
        const f = (i + 1) * 4;
        el.style.transform = `translate(${x*f}px, ${y*f}px) rotate(${[-6,4,-2][i]}deg)`;
      });
    });
    cardStack.addEventListener('mouseleave', () => {
      cardStack.querySelectorAll('.cs').forEach((el, i) => {
        el.style.transform = `rotate(${[-6,4,-2][i]}deg)`;
      });
    });
  }

  /* -------- SVG filter para grunge nas inks -------- */
  // Injetar definição SVG para o filter grunge se ainda não existir
  if (!document.getElementById('jogaGrungeDefs')) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id','jogaGrungeDefs');
    svg.setAttribute('width','0'); svg.setAttribute('height','0');
    svg.style.position='absolute'; svg.style.width='0'; svg.style.height='0';
    svg.innerHTML = `
      <defs>
        <filter id="grunge">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
          <feDisplacementMap in="SourceGraphic" scale="4"/>
        </filter>
      </defs>`;
    document.body.appendChild(svg);
  }

})();
