// ── Progress bar + nav scroll
const prog = document.getElementById('prog');
const nav  = document.getElementById('nav');
if (prog && nav) {
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    prog.style.width = (isNaN(pct) ? 0 : pct) + '%';
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ── Reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  // ── Skill bars
  const skillBox = document.getElementById('skillBox');
  if (skillBox) {
    let done = false;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done) {
          done = true;
          document.querySelectorAll('.s-fill').forEach((b, i) => {
            setTimeout(() => { b.style.width = b.dataset.w + '%'; }, i * 80);
          });
        }
      });
    }, { threshold: 0.15 }).observe(skillBox);
  }

  // ── Counter animation
  const counterBox = document.querySelector('[data-counters]');
  if (counterBox) {
    let done = false;
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done) {
          done = true;
          counterBox.querySelectorAll('[data-target]').forEach((el, i) => {
            const t = +el.dataset.target;
            const suffix = el.dataset.suffix || '';
            let c = 0; const s = t / 50;
            const tick = () => {
              c = Math.min(c + s, t);
              el.textContent = Math.floor(c) + suffix;
              if (c < t) requestAnimationFrame(tick);
            };
            setTimeout(tick, i * 150);
          });
        }
      });
    }, { threshold: 0.5 }).observe(counterBox);
  }
});
