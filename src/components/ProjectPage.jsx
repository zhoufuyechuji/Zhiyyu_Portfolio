import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import CaseFileSection from "./CaseFileSection.jsx";
import GlitchText from "./GlitchText.jsx";
import ImageGallery from "./ImageGallery.jsx";
import MonitorFrame from "./MonitorFrame.jsx";
import NavigationBar from "./NavigationBar.jsx";
import SkillTag from "./SkillTag.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const theme = project.theme || {};
  const themeStyle = {
    "--project-bg": theme.primaryColor,
    "--project-panel": theme.secondaryColor,
    "--project-text": theme.textColor,
    "--project-accent": theme.accentColor,
    "--project-accent-secondary": theme.accentSecondary,
    "--project-border": `${theme.accentColor}55`,
    "--project-glow": `${theme.accentColor}33`,
    "--project-texture": theme.backgroundStyle
  };

  return (
    <div
      className={`app-shell project-page-shell project-theme project-theme--${theme.themeName || "default"}`}
      style={themeStyle}
      data-page-mood={theme.pageMood}
    >
      <NavigationBar />
      <main className="project-page">
        <Link className="back-link" to="/#projects">
          Back to Project Wall
        </Link>

        <header className="project-hero">
          <div>
            <span className="project-hero__eyebrow">CLASSIFIED CASE FILE / SIGNAL STABLE</span>
            <GlitchText as="h1">{project.title}</GlitchText>
            <div className="project-theme-readout">
              <span>{theme.pageMood}</span>
              <span>{theme.panelStyle}</span>
            </div>
            <p>{project.fullDescription}</p>
          </div>
          <MonitorFrame eyebrow={`CAM-${String(currentIndex + 1).padStart(2, "0")} / HERO CAPTURE`}>
            <img src={project.heroImage} alt={`${project.title} hero visual`} />
          </MonitorFrame>
        </header>

        <section className="project-meta-grid" aria-label="Project metadata">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Project Type</span><strong>{project.type}</strong></div>
          <div><span>Timeline</span><strong>{project.timeline}</strong></div>
          <div><span>Tools</span><strong>{project.tools.join(" / ")}</strong></div>
        </section>

        <CaseFileSection eyebrow="REPORT 01" title="Design Goal" note="Design note: mechanics, mood, and player behavior should point to the same feeling.">
          <p>{project.designGoal}</p>
        </CaseFileSection>

        <CaseFileSection eyebrow="REPORT 02" title="Player Experience Goal">
          <p>{project.playerExperienceGoal}</p>
        </CaseFileSection>

        <CaseFileSection eyebrow="REPORT 03" title="Gameplay / System Breakdown">
          <div className="project-motifs" aria-label="Project visual motifs">
            {theme.decorativeMotifs?.map((motif) => (
              <span key={motif}>{motif}</span>
            ))}
          </div>
          <div className="breakdown-list">
            {project.breakdownSections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </CaseFileSection>

        <CaseFileSection eyebrow="REPORT 04" title="Process Screenshots">
          <ImageGallery images={project.galleryImages} title={project.title} />
        </CaseFileSection>

        <CaseFileSection eyebrow="REPORT 05" title="My Contribution">
          <p>{project.contribution}</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <SkillTag key={tag}>{tag}</SkillTag>
            ))}
          </div>
        </CaseFileSection>

        <CaseFileSection eyebrow="REPORT 06" title="Reflection / What I Learned">
          <p>{project.reflection}</p>
          {project.links?.length ? (
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </CaseFileSection>

        <nav className="project-bottom-nav" aria-label="Project navigation">
          <Link to="/">Back Home</Link>
          <Link to={`/projects/${nextProject.slug}`}>Next Case: {nextProject.title}</Link>
        </nav>
      </main>
    </div>
  );
}
