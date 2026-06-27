// PROJECTS DATA
// Note: Place your screenshot images in an "images/" folder next to index.html
const projects = [
  {
    title: 'Bakery Website',
    desc: 'A responsive bakery website featuring modern layouts, product showcases, and contact sections.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: 'images/bakery.png',
    demo: 'https://jannatsiddiqui362-spec.github.io/bakery-website-/',
    src: 'https://jannatsiddiqui362-spec.github.io/bakery-website-/'
  },
  {
    title: 'Calculator App',
    desc: 'A responsive calculator application capable of performing standard arithmetic operations with a clean user interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: 'images/calculator.png',
    bg: '#1a1a2e',
    contain: true,
    demo: 'https://jannatsiddiqui362-spec.github.io/scientific-calculator-app/',
    src: 'https://jannatsiddiqui362-spec.github.io/scientific-calculator-app/'
  },
  {
    title: 'To-Do App',
    desc: 'A task management application with task creation, completion tracking, deletion, and Local Storage support.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: 'images/taskflow.png',
    demo: 'https://jannatsiddiqui362-spec.github.io/taskflow-todo-app/',
    src: 'https://jannatsiddiqui362-spec.github.io/taskflow-todo-app/'
  },
  {
    title: 'Resume Builder App',
    desc: 'A resume creation tool with live preview functionality and PDF export support.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: 'images/resume-builder.png',
    demo: 'https://jannatsiddiqui362-spec.github.io/ai-smart-resume-builder/',
    src: 'https://jannatsiddiqui362-spec.github.io/ai-smart-resume-builder/'
  },
  {
    title: 'AI Prompt Learning Platform',
    desc: 'A modern SaaS-style learning platform focused on Prompt Engineering, AI tools, and educational resources for learners.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
    img: 'images/prompt-vault.png',
    demo: 'https://jannatsiddiqui362-spec.github.io/ai-prompt-learning-platform-/',
    src: 'https://jannatsiddiqui362-spec.github.io/ai-prompt-learning-platform-/'
  },
  {
    title: 'AI Website Content Generator',
    desc: 'An AI-powered tool that generates complete, professional website copy for any business instantly, with multiple variations and export support.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
    img: 'images/ai-content-gen.png',
    demo: 'https://jannatsiddiqui362-spec.github.io/ai-website-content-generator/',
    src: 'https://jannatsiddiqui362-spec.github.io/ai-website-content-generator/'
  }
];

// RENDER PROJECTS
const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  const tags = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  const imgStyle = p.contain ? 'object-fit:contain;' : '';
  const wrapStyle = p.bg ? `style="background:${p.bg};"` : '';
  grid.innerHTML += `
  <div class="project-card">
    <div class="project-img-wrap" ${wrapStyle}>
      <img src="${p.img}" alt="${p.title}" loading="lazy" style="${imgStyle}"
        onerror="this.onerror=null;this.src='https://placehold.co/600x200/1e293b/6366f1?text=${encodeURIComponent(p.title)}';">
      <div class="project-img-overlay"></div>
    </div>
    <div class="project-body">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-actions">
        <a href="${p.demo}" target="_blank" rel="noopener" class="btn-demo">View Project</a>
        <a href="${p.src}" target="_blank" rel="noopener" class="btn-source">Source Code</a>
      </div>
    </div>
  </div>`;
});

// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    const l = document.getElementById('loader');
    l.style.opacity = '0';
    setTimeout(() => l.style.display = 'none', 500);
  }, 1400);
});

// SMOOTH NAV
function nav(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const h = document.getElementById('navbar').offsetHeight;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - h, behavior: 'smooth' });
  document.getElementById('mobile-nav').classList.remove('open');
}

// THEME TOGGLE
document.getElementById('theme-toggle').addEventListener('click', function () {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
  this.textContent = dark ? 'Dark Mode' : 'Light Mode';
});

// HAMBURGER MENU
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('open');
});

// SCROLL EVENTS
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-progress').style.width = pct + '%';
  document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);

  // Active nav link
  const h = document.getElementById('navbar').offsetHeight;
  const ids = ['about', 'skills', 'projects', 'education', 'goals', 'achievements', 'contact'];
  let cur = '';
  ids.forEach(id => {
    const s = document.getElementById(id);
    if (s && window.scrollY >= s.offsetTop - h - 10) cur = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    const m = a.getAttribute('onclick') && a.getAttribute('onclick').match(/'([^']+)'/);
    if (m) a.classList.toggle('active', m[1] === cur);
  });
});

// TYPING ANIMATION
const phrases = ['Web Development Student', 'AI Enthusiast', 'Learning & Growing', 'Building Projects'];
let pi = 0, ci = 0, del = false;
function type() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const ph = phrases[pi];
  if (!del) {
    el.textContent = ph.slice(0, ++ci);
    if (ci === ph.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = ph.slice(0, --ci);
    if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, del ? 55 : 100);
}
type();

// REVEAL ON SCROLL
const ro = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// SKILL BARS ANIMATION
const so = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(b => b.style.width = b.dataset.width + '%');
      so.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => so.observe(el));

// CONTACT FORM
document.getElementById('contact-form').addEventListener('submit', function () {
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
});
