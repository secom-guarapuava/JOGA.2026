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

  /* -------- Faíscas de energia subindo no hero -------- */
  const confetti = $('#confetti');
  if (confetti && !prefersReduced) {
    const colors = ['#F2C30F','#FFE985','#FFFFFF','#E94E2C','#F2C30F','#7FA3FF','#FFFFFF','#F2C30F'];
    const N = 46;
    for (let i = 0; i < N; i++) {
      const c = document.createElement('span');
      c.className = 'cnf';
      const s = 3 + Math.random() * 5;
      c.style.width  = s + 'px';
      c.style.height = s + 'px';
      c.style.left = (Math.random() * 100) + '%';
      c.style.top  = (60 + Math.random() * 60) + 'vh';
      c.style.color = colors[i % colors.length];
      c.style.animationDuration = (5 + Math.random() * 9) + 's';
      c.style.animationDelay = (-Math.random() * 12) + 's';
      c.style.setProperty('--dx', ((Math.random() - 0.5) * 180) + 'px');
      confetti.appendChild(c);
    }
  }

  /* -------- Ticker com ícones esportivos -------- */
  const tickerTrack = $('#tickerTrack');
  if (tickerTrack) {
    const words = ['JOGA 2026','ENERGIA PARA SERVIR','DISPOSIÇÃO PARA JOGAR','19 — 27 OUT','GUARAPUAVA','SERVIDORES MUNICIPAIS','O SEU MOVIMENTO FAZ A DIFERENÇA','ESPÍRITO DE EQUIPE'];
    // SVG ícones de esporte (bola, troféu, raquete, apito, medalha, chuteira)
    const icons = [
      '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="12,5 16,8 14.5,13 9.5,13 8,8" /></svg>',
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10v3a5 5 0 11-10 0V4zm-3 2h3v1a5 5 0 002 4v2H7v6h10v-6h-2v-2a5 5 0 002-4V6h3v3a4 4 0 01-4 4h-1m-8-4h1a4 4 0 01-4-4V6z"/></svg>',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="10" cy="10" rx="6" ry="7" transform="rotate(-30 10 10)"/><line x1="14" y1="14" x2="20" y2="20" stroke-linecap="round" stroke-width="3"/></svg>',
      '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4v16M4 12h16M6 6c4 4 4 8 0 12M18 6c-4 4-4 8 0 12" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="14" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 8l2-5h2l2 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 14l4-1 3-3 6-1 4 2v3H8l-3 2H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
    ];
    // Construir o conteúdo (2x para o loop infinito)
    const buildBlock = () => words.map((w,i)=>{
      const icon = icons[i % icons.length];
      return `<span class="tk-icon" aria-hidden="true">${icon}</span><span class="tk-word"><span class="tk-text">${w}</span></span>`;
    }).join('');
    tickerTrack.innerHTML = buildBlock() + buildBlock();
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
