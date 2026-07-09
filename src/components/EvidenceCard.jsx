export default function EvidenceCard({ project, index, focused, dimmed, onSelect }) {
  return (
    <a
      className={`evidence-card evidence-card--${index + 1}${focused ? " is-focused" : ""}${dimmed ? " is-dimmed" : ""}`}
      href={`/projects/${project.slug}`}
      data-project-card
      data-slug={project.slug}
      onClick={onSelect}
      aria-label={`Open project: ${project.title}`}
    >
      <span className="evidence-card__pin" aria-hidden="true" />
      <span className="evidence-card__tape" aria-hidden="true" />
      <article className="evidence-card__paper">
        <div className="evidence-card__image">
          <img src={project.thumbnail} alt={`${project.title} project thumbnail`} />
          <span className="evidence-card__scan">ARCHIVE NODE</span>
        </div>
        <div className="evidence-card__meta">
          <span>CASE FILE / {project.type}</span>
          <h3>{project.title}</h3>
          <strong>{project.role}</strong>
          <p>{project.shortDescription}</p>
          <div className="evidence-card__tags">
            {project.tags.slice(0, 3).map((tag) => (
              <em key={tag}>{tag}</em>
            ))}
          </div>
        </div>
        <span className="project-open-prompt">OPEN CASE FILE</span>
      </article>
    </a>
  );
}
