import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { certificates, experience, profile, skills } from "@/content/profile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="shell">
          <p className="eyebrow">Frontend developer · Available for opportunities</p>
          <h1>
            Thoughtful interfaces for <em>complex products.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button" href="/yulia-vorotintseva-cv.pdf" download>Download CV</a>
            </div>
          </div>
          <div className="scroll-note">
            <span>{profile.location}<br />React · Next.js · TypeScript</span>
            <span aria-hidden="true">↘</span>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <header className="section-head">
            <span className="section-kicker">01 / Selected work</span>
            <h2 className="section-title">Products built with <em>purpose.</em></h2>
          </header>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.slug}>
                <ProjectVisual type={project.visual} />
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.index}</span><span>{project.type}</span><span>{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <Link className="text-link" href={`/projects/${project.slug}`}>
                    View case study <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="shell">
          <header className="section-head">
            <span className="section-kicker">02 / Experience</span>
            <h2 className="section-title">From product intent to <em>working software.</em></h2>
          </header>
          <div className="experience-grid">
            <div className="experience-intro">
              <p>Commercial and project experience across web and mobile products, from architecture and data flows to polished user interactions.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Full profile on LinkedIn ↗</a>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.role} <span>— {item.company}</span></h3>
                    <p>{item.summary}</p>
                    <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="shell">
          <header className="section-head">
            <span className="section-kicker">03 / About</span>
            <h2 className="section-title">Clear systems. <em>Human outcomes.</em></h2>
          </header>
          <div className="about-grid">
            <p className="about-lead">I enjoy finding the simple, useful interface hiding inside a complicated problem.</p>
            <div className="about-detail">
              <p>I&apos;m a frontend developer with commercial experience at Purrweb and a foundation in information technology. My work centers on React and TypeScript products where thoughtful architecture, reliable data flows, and interaction details matter equally.</p>
              <p>I also build full-stack and React Native applications, which helps me collaborate across API, platform, and product boundaries.</p>
              <div className="fact-list">
                <div className="fact"><span>Based in</span><b>{profile.location}</b></div>
                <div className="fact"><span>Languages</span><b>{profile.languages.join(" · ")}</b></div>
                <div className="fact"><span>Availability</span><b>{profile.availability}</b></div>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certificates">
        <div className="shell">
          <header className="section-head">
            <span className="section-kicker">04 / Credentials</span>
            <h2 className="section-title">Always learning, <em>always applying.</em></h2>
          </header>
          <div className="cert-grid">
            {certificates.map((certificate, index) => (
              <a className="cert-card" href={certificate.verify} target="_blank" rel="noreferrer" key={certificate.title}>
                <span>0{index + 1} · VERIFIED CREDENTIAL</span>
                <h3>{certificate.title}</h3>
                <p><span>{certificate.issuer}<br />{certificate.date}</span><b aria-hidden="true">↗</b></p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell">
          <p className="eyebrow">Open to frontend opportunities</p>
          <h2>Have a product in mind? <em>Let&apos;s talk.</em></h2>
          <div className="contact-links">
            <a className="button button-primary" href={`mailto:${profile.email}`}>Email ↗</a>
            <a className="button" href={profile.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
          </div>
          <footer className="footer">
            <span>© {new Date().getFullYear()} {profile.name}<br />Designed and built with care.</span>
            <div className="footer-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="#main">Back to top ↑</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
