export default function CaseFileSection({ eyebrow, title, children, note }) {
  return (
    <section className="case-file-section">
      <div>
        <span className="case-file-section__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-file-section__body">{children}</div>
      {note ? <aside className="case-file-section__note">{note}</aside> : null}
    </section>
  );
}
