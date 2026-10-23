"use client";

import { FormEvent, useEffect, useState } from "react";
import TechIcon from "./TechIcon";
import ThemeToggle from "./ThemeToggle";

const nav = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
] as const;

const projects = [
  {
    no: "01",
    name: "CampusOS",
    type: "MULTI-TENANT COLLEGE PLATFORM",
    desc: "A college operations platform designed around tenant isolation, role-based access, real-time data, and connected academic workflows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    art: "campus",
    href: "https://github.com/shreya0517",
  },
  {
    no: "02",
    name: "CodeCamp",
    type: "COLLABORATIVE DEVELOPER SPACE",
    desc: "A shared space for developers to solve problems together, collaborate on code, and learn through live sessions and coding rooms.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    art: "code",
    href: "https://github.com/shreya0517",
  },
  {
    no: "03",
    name: "Golf Charity Platform",
    type: "DONATION & PRIZE-DRAW SYSTEM",
    desc: "A full-stack donation and prize-draw platform with secure payment flows, structured data, and a thoughtful user experience.",
    tags: ["Next.js", "Stripe", "TypeScript", "Supabase"],
    art: "golf",
    href: "https://github.com/shreya0517/GolfDraww",
  },
];
const skillGroups = [
  {
    title: "Frontend development",
    icon: "◫",
    desc: "Building polished, responsive interfaces.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend development",
    icon: "⌘",
    desc: "APIs, application logic, and collaboration.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    icon: "◉",
    desc: "Designing reliable data layers.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma"],
  },
  {
    title: "DevOps & workflow",
    icon: "⌁",
    desc: "Shipping and maintaining applications.",
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
function Stars() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
      {Array.from({ length: 64 }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            animationDelay: `${(i % 9) * -0.47}s`,
            animationDuration: `${3.2 + (i % 6) * 0.7}s`,
            opacity: 0.25 + ((i * 7) % 70) / 100,
          }}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -48% 0px", threshold: [0.05, 0.2, 0.45, 0.7] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Portfolio enquiry");
    const message = String(form.get("message") || "");
    const body = `Hi Shreya,\n\n${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="portfolio theme-dark">
      <Stars />
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          Shreya <span>.</span>
        </a>
        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {nav.map(([id, label]) => (
            <a

              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <ThemeToggle />
          <a className="resume-button" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
        </div>
      </header>

      <section
        className="page home-page"
        id="home"
        aria-labelledby="home-title"
      >
        <div className="home-copy">
          <p className="eyebrow">
            <span className="pulse-dot" /> FULL STACK DEVELOPER · NEW DELHI,
            INDIA
          </p>
          <h1 id="home-title">
            Hi!  I’m
            <br />
            <span>Shreya.</span>
          </h1>
          <p className="hero-lead">
           I’m a Computer Science student and full-stack developer interested in building useful products, reliable backend systems, and thoughtful user experiences.
          </p>
          <div className="hero-buttons">
            <a className="button button-bright" href="#projects">
              Explore my work <Arrow />
            </a>
            <a className="button button-outline" href="#contact">
              ✉ &nbsp; Let’s Connect
            </a>
          </div>
          <div className="open-to">
            <div className="avatar-stack">
              <i>SG</i>
              <i>JS</i>
              <i>TS</i>
            </div>
            <p>
              Open to SDE internships
              <br />
              and exciting opportunities!
            </p>
            <span className="online-dot" />
          </div>
          <div className="home-meta">
            <span>Always learning — One commit at a time</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
        <div
          className="hero-character"
          aria-label="Anime-inspired developer illustration with headphones, laptop, and orbital space elements"
          role="img"
        >
          <div className="character-vignette" />
          <div className="hero-cosmic-glow" />
          <div className="hero-image-credit">
            CREATIVE MIND · DEVELOPER SOUL
          </div>
          <div className="hero-floating-note note-left">
            Building
            <br />a better
            <br />
            internet. ↗
          </div>
          <div className="hero-floating-note note-right">
            Same girl.
            <br />
            Bigger dreams...
          </div>
        </div>
        {/* <div className="home-bottom">
          <span className="section-kicker">
            <i /> FEATURED PROJECTS
          </span>
          <a href="#projects">
            VIEW ALL PROJECTS <Arrow diagonal />
          </a>
        </div> */}
        {/* <div className="home-project-strip">
          {projects.map((p) => (
            <a href="#projects" className={`mini-project ${p.art}`} key={p.no}>
              <span className="mini-number">{p.no}</span>
              <span className="mini-project-name">{p.name}</span>
              <Arrow diagonal />
            </a>
          ))}
        </div> */}
        {/* <div className="home-techline">
          <span>TECH STACK I WORK WITH</span>
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "Docker",
            "AWS",
          ].map((t) => (
            <b key={t}>{t}</b>
          ))}
        </div> */}
      </section>

      <div className="page-break">
        <span>01</span>
        <i />
        <span>ABOUT ME</span>
        <i />
        <span>02</span>
      </div>
      <section
        className="page about-page"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="page-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2 id="about-title">
            A bit about me
            <br />
            <span>me.</span>
          </h2>
          <p className="heading-sub">Curious by nature. Engineer by choice.</p>
        </div>
        <div className="about-main">
          <div className="about-copy">
            <p className="large-copy">
              Backend engineering, architecture, problem solving, and product development.
            </p>
            <p>
              I’m a Computer Science undergraduate at GGSIPU, New Delhi, with a strong interest in full-stack development and software engineering.
I enjoy taking a problem from an initial idea to a working application from designing the data model and building APIs to creating interfaces that feel intuitive to use.
My recent work has involved multi-tenant application architecture, authentication, authorization, and tenant isolation. I’m especially interested in understanding why systems work, not just how to make them work.
            </p>
            <div className="stats-row">
              <div>
                <b>9.2</b>
                <span>CGPA</span>
              </div>
              <div>
                <b>4th</b>
                <span>Year of study</span>
              </div>
              <div>
                <b>3+</b>
                <span>Major projects</span>
              </div>
              <div>
                <b>1</b>
                <span>Internship</span>
              </div>
            </div>
          </div>
          <div className="beyond-card">
            <p className="section-kicker">
              <i /> BEYOND CODE
            </p>
            <h3>Life outside the editor.</h3>
            <p>
              I enjoy playing volleyball, listening to music, spending time with
              my cat Chiku, and exploring new technologies. Always curious,
              always learning, always building.
            </p>
            <div className="interest-chips">
              <span>♡ Volleyball</span>
              <span>♫ Music</span>
              <span>♧ Chiku</span>
              <span>✧ Learning</span>
              <span>⌁ Building</span>
            </div>
            <blockquote>
              “I care about what happens beneath the interface — just as much as
              what people see on it.”<span>— Shreya</span>
            </blockquote>
          </div>
        </div>
        <div className="about-lower">
          <div className="ambient-orbit">
            <div className="ambient-planet" />
            <i />
            <i />
            <i />
            <span>STAY CURIOUS</span>
          </div>
          <div className="principles">
            <p className="section-kicker">
              <i /> HOW I LIKE TO BUILD
            </p>
            <div>
              <b>01</b>
              <span>
                <strong>Think in systems</strong>
                <small>
                  Understand the whole problem before choosing a solution.
                </small>
              </span>
            </div>
            <div>
              <b>02</b>
              <span>
                <strong>Build with intention</strong>
                <small>Make interfaces clear, reliable, and accessible.</small>
              </span>
            </div>
            <div>
              <b>03</b>
              <span>
                <strong>Keep learning</strong>
                <small>Turn every project into a chance to get better.</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-break">
        <span>02</span>
        <i />
        <span>SELECTED WORK</span>
        <i />
        <span>03</span>
      </div>
      <section
        className="page projects-page"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="projects-heading">
          <div className="page-heading">
            <p className="eyebrow">02 / PROJECTS</p>
            <h2 id="projects-title">
              Selected
              <br />
              <span>work.</span>
            </h2>
            <p className="heading-sub">
              Ideas, experiments, and products in progress.
            </p>
          </div>
          <p className="projects-intro">
            A collection of projects where I turn ideas into real, working
            products. Each one is a chance to explore, learn, and solve a
            meaningful problem.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.no}>
              <a
                className={`project-art art-${p.art}`}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name} repository`}
              >
                <span className="art-label">{p.no} / SELECTED PROJECT</span>
                <span className="art-open">
                  <Arrow diagonal />
                </span>
                {p.art === "campus" ? (
                  <div className="campus-building">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <b>CampusOS</b>
                  </div>
                ) : p.art === "code" ? (
                  <div className="code-window">
                    <div className="window-top">
                      <i />
                      <i />
                      <i />
                      <span>codesync.tsx</span>
                    </div>
                    <div className="code-lines">
                      <b>const</b> room = <em>"CodeCamp"</em>;<br />
                      <b>await</b> connect(room);
                      <br />
                      <span>→</span> shareIdeas();
                      <br />
                      <span>→</span> buildTogether();
                    </div>
                    <div className="video-tile">
                      LIVE ROOM <b>●</b>
                    </div>
                  </div>
                ) : (
                  <div className="golf-scene">
                    <div className="golf-sun" />
                    <div className="golf-flag" />
                    <div className="golf-ball" />
                    <div className="golf-horizon" />
                  </div>
                )}
              </a>
              <div className="project-info">
                <p className="project-type">{p.type}</p>
                <h3>{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t}>
                      <TechIcon name={t} size={14} />
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  className="project-visit"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore project <Arrow diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="github-band">
          <div>
            <span className="github-mark">⌘</span>
            <span>
              <small>MORE PROJECTS & CODE</small>
              <b>github.com/shreya0517</b>
            </span>
            <a
              href="https://github.com/shreya0517"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
            >
              <Arrow diagonal />
            </a>
          </div>
          <div className="github-stats">
            <span>
              <b>03</b>
              <small>Featured projects</small>
            </span>
            <span>
              <b>∞</b>
              <small>Ideas to explore</small>
            </span>
            <span>
              <b>01</b>
              <small>Open source profile</small>
            </span>
          </div>
        </div>
      </section>

      <div className="page-break">
        <span>03</span>
        <i />
        <span>TOOLS & TECHNOLOGIES</span>
        <i />
        <span>04</span>
      </div>
      <section
        className="page skills-page"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="skills-heading">
          <div className="page-heading">
            <p className="eyebrow">03 / SKILLS</p>
            <h2 id="skills-title">
              Tech stack
              <br />I work <span>with.</span>
            </h2>
          </div>
          <p className="projects-intro">
            Technologies I’ve learned, used in real projects, and continue to
            explore. I enjoy working across the stack and learning new tools
            along the way.
          </p>
        </div>
        <div className="skill-cards">
          {skillGroups.map((group, i) => (
            <article className="skill-category" key={group.title}>
              <div className="skill-card-head">
                <span>{group.icon}</span>
                <small>0{i + 1} / CATEGORY</small>
              </div>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>
                    <i className="tech-symbol">
                      <TechIcon name={item} size={15} />
                    </i>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <aside className="learning-card">
            <div className="progress-orb">
              <span>∞</span>
            </div>
            <p>
              Always curious,
              <br />
              <strong>always learning.</strong>
            </p>
            <div className="learning-stats">
              <span>
                <b>15+</b>
                <small>Technologies</small>
              </span>
              <span>
                <b>3</b>
                <small>Major projects</small>
              </span>
              <span>
                <b>2+</b>
                <small>Years learning</small>
              </span>
              <span>
                <b>100+</b>
                <small>Problems solved*</small>
              </span>
            </div>
            <small className="asterisk">
              *Personal practice estimate; update as needed.
            </small>
          </aside>
        </div>
        <div className="workflow-band">
          <p className="section-kicker">
            <i /> TOOLS & WORKFLOW
          </p>
          <div>
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Figma",
              "Postman",
              "Docker",
              "Vercel",
              "Linux",
              "pnpm",
              "Jest",
              "Prisma",
              "Supabase",
            ].map((tool) => (
              <span key={tool}>
                <i className="workflow-icon">
                  <TechIcon name={tool} size={16} />
                </i>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="page-break">
        <span>04</span>
        <i />
        <span>THE JOURNEY SO FAR</span>
        <i />
        <span>05</span>
      </div>
      <section
        className="page experience-page"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="experience-heading">
          <div className="page-heading">
            <p className="eyebrow">04 / EXPERIENCE & ACHIEVEMENTS</p>
            <h2 id="experience-title">
              My journey,
              <br />
              <span>so far.</span>
            </h2>
            <p className="heading-sub">Small steps. Real progress.</p>
          </div>
          <div className="journey-metrics">
            <div>
              <b>01</b>
              <span>Internship</span>
            </div>
            <div>
              <b>9.2</b>
              <span>CGPA</span>
            </div>
            <div>
              <b>03</b>
              <span>Achievements</span>
            </div>
          </div>
        </div>
        <div className="timeline-layout">
          <div className="timeline-panel">
            <p className="section-kicker">
              <i /> WORK EXPERIENCE
            </p>
            <article className="timeline-item">
              <div className="timeline-icon">B</div>
              <div className="timeline-copy">
                <small>JUN 2025 — AUG 2025</small>
                <h3>Software Development Engineer Intern</h3>
                <p className="timeline-org">Bluestock Fintech</p>
                <ul>
                  <li>
                    Developed stock dashboard features using JavaScript, REST
                    APIs, and MySQL.
                  </li>
                  <li>
                    Contributed to full-stack product features and improved user
                    workflows.
                  </li>
                  <li>
                    Gained hands-on experience collaborating in a fintech
                    environment.
                  </li>
                </ul>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-icon">⌘</div>
              <div className="timeline-copy">
                <small>2023 — PRESENT</small>
                <h3>Full-stack developer in progress</h3>
                <p className="timeline-org">
                  Personal projects & continuous learning
                </p>
                <ul>
                  <li>
                    Building CampusOS, CodeCamp, and a golf charity platform.
                  </li>
                  <li>
                    Exploring multi-tenant architecture, authentication, and
                    system design.
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="timeline-side">
            <div className="timeline-panel education-panel">
              <p className="section-kicker">
                <i /> EDUCATION
              </p>
              <div className="education-entry">
                <div className="education-emblem">G</div>
                <div>
                  <h3>GGSIPU, New Delhi</h3>
                  <p>B.Tech in Computer Science & Engineering</p>
                  <small>
                    2023 — Present <i /> CGPA: 9.2
                  </small>
                </div>
              </div>
            </div>
            <div className="timeline-panel achievements-panel">
              <p className="section-kicker">
                <i /> ACHIEVEMENTS
              </p>
              <div className="achievement">
                <span>✦</span>
                <p>
                  <b>6th Rank</b>
                  <small>College exam · Second year</small>
                </p>
              </div>
              <div className="achievement">
                <span>✧</span>
                <p>
                  <b>Gold Medal</b>
                  <small>Volleyball tournament</small>
                </p>
              </div>
              <div className="achievement">
                <span>◇</span>
                <p>
                  <b>4th Rank</b>
                  <small>College hackathon</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-strip">
          <span>“</span>
          <p>
            Progress isn’t always big steps. Sometimes it’s just showing up,
            again and again.
          </p>
          <b>— Shreya</b>
          <div className="quote-stars">✦　·　✧　·　✦</div>
        </div>
      </section>

      <div className="page-break">
        <span>05</span>
        <i />
        <span>LET’S CONNECT</span>
        <i />
        <span>06</span>
      </div>
      <section
        className="page contact-page"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-heading">
          <div className="page-heading">
            <p className="eyebrow">05 / CONTACT</p>
            <h2 id="contact-title">
              Let’s build
              <br />
              something
              <br />
              <span>together.</span>
            </h2>
            <p className="heading-sub">
              Have a project in mind, a collaboration idea, or just want to say
              hi? I’d love to hear from you.
            </p>
          </div>
          <div className="contact-planet" aria-hidden="true">
            <div className="contact-moon" />
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <span>
              GOOD THINGS START
              <br />
              WITH A CONVERSATION ♡
            </span>
          </div>
        </div>
        <div className="contact-grid">
          <form className="message-form" onSubmit={handleContact}>
            <p className="section-kicker">
              <i /> SEND ME A MESSAGE
            </p>
            <div className="form-pair">
              <label>
                Your name
                <input name="name" placeholder="" required />
              </label>
              <label>
                Your email
                <input
                  name="email"
                  type="email"
                  placeholder=""
                  required
                />
              </label>
            </div>
            <label>
              Subject
              <input
                name="subject"
                placeholder="Let’s build something great"
                required
              />
            </label>
            <label>
              Your message
              <textarea
                name="message"
                placeholder="Tell me a little about what you have in mind..."
                rows={4}
                required
              />
            </label>
            <button
              className="button button-bright submit-button"
              type="submit"
            >
              Send message <Arrow diagonal />
            </button>
            <small className="form-note">
              Opens your email app with your message ready to send.
            </small>
          </form>
          <div className="contact-details">
            <a
              className="contact-detail"
              href="https://github.com/shreya0517"
              target="_blank"
              rel="noreferrer"
            >
              <span className="detail-icon">⌘</span>
              <span>
                <small>CODE & PROJECTS</small>
                <b>GitHub</b>
                <em>github.com/shreya0517</em>
              </span>
              <Arrow diagonal />
            </a>
            <a
              className="contact-detail"
              href="https://leetcode.com/u/shreya_0507/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="detail-icon">⌁</span>
              <span>
                <small>PROBLEM SOLVING</small>
                <b>LeetCode</b>
                <em>leetcode.com/u/shreya_0507</em>
              </span>
              <Arrow diagonal />
            </a>
            <div className="contact-detail">
              <span className="detail-icon">⌖</span>
              <span>
                <small>BASED IN</small>
                <b>New Delhi, India</b>
                <em>Open to remote opportunities</em>
              </span>
            </div>
            <div className="contact-note">
              <span>✧</span>
              <p>
                Thanks for being here.
                <br />
                <b>Let’s make something meaningful.</b>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <a className="brand" href="#home">
            Shreya<span>.</span>
          </a>
          <span>DESIGNED WITH INTENT · BUILT WITH CODE</span>
          <a href="#home">BACK TO TOP ↑</a>
          <small>© {new Date().getFullYear()} SHREYA GARG</small>
        </footer>
      </section>
    </main>
  );
}
