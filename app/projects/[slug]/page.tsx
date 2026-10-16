import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} case study`,
    description: project.summary,
    openGraph: { title: `${project.title} — Product case study`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const current = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(current + 1) % projects.length];

  return (
    <main id="main">
      <section className="case-hero">
        <div className="shell">
          <Link className="back-link" href="/#work">← Back to selected work</Link>
          <h1>{project.title}</h1>
          <div className="case-intro">
            <p>{project.summary}</p>
            <div className="case-facts">
              <div><small>TYPE</small><b>{project.type}</b></div>
              <div><small>PERIOD</small><b>{project.period}</b></div>
              <div><small>ROLE</small><b>Design &amp; development</b></div>
            </div>
          </div>
        </div>
      </section>

      <ProjectVisual type={project.visual} className="case-visual" />

      <section className="case-body">
        <div className="shell">
          <div className="case-overview">
            <div>
              <span className="section-kicker">The challenge</span>
              <h2>Making complexity feel manageable.</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <span className="section-kicker">My role &amp; result</span>
              <h2>From structure to shipped experience.</h2>
              <p>{project.role}</p>
              <p>{project.outcome}</p>
              <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">
                View source on GitHub ↗
              </a>
            </div>
          </div>

          <div className="case-highlights">
            <span className="section-kicker">Selected decisions</span>
            <h2>Details that support the whole product.</h2>
            <div className="highlight-grid">
              {project.highlights.map((highlight, index) => (
                <article className="highlight" key={highlight.title}>
                  <span>0{index + 1}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="stack-block">
            <h2>Technology</h2>
            <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <div className="shell">
        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span>NEXT CASE STUDY</span>
          <strong>{next.title} →</strong>
        </Link>
      </div>
    </main>
  );
}
