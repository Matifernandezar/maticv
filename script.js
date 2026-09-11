const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const toast = document.querySelector('.toast');
const portrait = document.querySelector('.portrait-frame img');

// Mobile layout hotfix for the fiber section. Prevents horizontal overflow
// and stacks the technical path cleanly on small screens.
const mobileFixes = document.createElement('style');
mobileFixes.textContent = `
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

.fiber-grid,
.fiber-copy,
.fiber-details,
.fiber-details > div {
  min-width: 0;
  max-width: 100%;
}

.fiber-copy p,
.fiber-details span {
  overflow-wrap: anywhere;
}

@media (max-width: 760px) {
  .fiber-copy {
    width: 100%;
    max-width: 100%;
  }

  .fiber-path {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
    max-width: 100%;
    overflow: visible;
    padding-bottom: 0;
  }

  .fiber-path span {
    display: block;
    width: 100%;
    min-width: 0;
    white-space: normal;
    text-align: left;
    padding: 12px 14px;
  }

  .fiber-path i {
    display: none;
  }

  .fiber-details,
  .fiber-details > div {
    width: 100%;
    max-width: 100%;
  }
}
`;
document.head.appendChild(mobileFixes);

if (portrait) {
  portrait.src = 'assets/mati.png';
}

// Cursos y capacitaciones profesionales
const educationSection = document.querySelector('#formacion');
if (educationSection) {
  const coursesSection = document.createElement('section');
  coursesSection.className = 'courses section-shell';
  coursesSection.id = 'cursos';
  coursesSection.innerHTML = `
    <div class="container">
      <div class="section-heading reveal">
        <p class="eyebrow">CURSOS Y CAPACITACIONES</p>
        <h2>Formación complementaria en comunicaciones, redes e informática.</h2>
        <p>Capacitaciones realizadas en organismos de la Fuerza Aérea Argentina, Ejército Argentino, INAP y programas nacionales de formación tecnológica.</p>
      </div>

      <div class="courses-grid">
        <article class="course-card reveal">
          <div class="course-meta"><span>2022</span><span>FUERZA AÉREA ARGENTINA</span></div>
          <h3>Especialidad Avanzada en Informática</h3>
          <p>Dirección de Ciberdefensa · Capacitación dictada por la Dirección de Comunicaciones e Informática de la Fuerza Aérea Argentina.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>2022</span><span>FUERZA AÉREA ARGENTINA</span></div>
          <h3>Operador de Equipamiento Radioeléctrico HF</h3>
          <p>Operación de equipamiento y sistemas de comunicaciones radioeléctricas en banda HF.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>2021</span><span>FUERZA AÉREA ARGENTINA</span></div>
          <h3>Operador de Enlaces Satelitales</h3>
          <p>Capacitación orientada a la operación de enlaces y sistemas de comunicaciones satelitales.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>FAA</span><span>NETWORKING</span></div>
          <h3>Supervisor de la Red WAN de la Fuerza Aérea Argentina</h3>
          <p>Formación vinculada a la supervisión y operación de la infraestructura WAN institucional.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>PROGRAMA NACIONAL</span><span>PROGRAMACIÓN</span></div>
          <h3>#SéProgramar</h3>
          <p>Ministerio de Desarrollo Tecnológico · Fundamentos de programación y pensamiento computacional.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>2023</span><span>INAP</span></div>
          <h3>Word · Excel · PowerPoint — Nivel Intermedio</h3>
          <p>Instituto Nacional de la Administración Pública.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>2022</span><span>INAP</span></div>
          <h3>Gestión de Documentación y Expedientes Electrónicos</h3>
          <p>Instituto Nacional de la Administración Pública.</p>
        </article>

        <article class="course-card reveal">
          <div class="course-meta"><span>2022</span><span>EJÉRCITO ARGENTINO</span></div>
          <h3>Cursillo de Comunicaciones Informáticas</h3>
          <p>Capacitación en comunicaciones informáticas realizada en el Ejército Argentino.</p>
        </article>
      </div>
    </div>
  `;
  educationSection.insertAdjacentElement('afterend', coursesSection);

  const contactLink = nav?.querySelector('a[href="#contacto"]');
  if (nav && contactLink && !nav.querySelector('a[href="#cursos"]')) {
    const coursesLink = document.createElement('a');
    coursesLink.href = '#cursos';
    coursesLink.textContent = 'Cursos';
    nav.insertBefore(coursesLink, contactLink);
  }

  const courseStyles = document.createElement('style');
  courseStyles.textContent = `
    .courses{background:linear-gradient(to bottom,transparent,rgba(9,20,34,.52),transparent)}
    .courses-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
    .course-card{position:relative;padding:26px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(155deg,rgba(255,255,255,.04),rgba(255,255,255,.012));min-height:205px;transition:transform .25s,border-color .25s}
    .course-card:hover{transform:translateY(-4px);border-color:rgba(84,216,255,.28)}
    .course-meta{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:28px;color:var(--accent);font-size:10px;font-weight:800;letter-spacing:.11em}
    .course-card h3{font-size:22px;line-height:1.2;margin-bottom:10px}
    .course-card p{margin:0;color:var(--muted);font-size:13px}
    @media (max-width:760px){.courses-grid{grid-template-columns:1fr}.course-card{min-height:0;padding:22px}.course-meta{margin-bottom:22px}}
  `;
  document.head.appendChild(courseStyles);
}

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('[data-cv]').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});
