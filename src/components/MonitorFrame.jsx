export default function MonitorFrame({ eyebrow, children, className = "" }) {
  return (
    <section className={`monitor-frame ${className}`}>
      <div className="monitor-frame__bar">
        <span>{eyebrow}</span>
        <span className="record-dot">REC</span>
      </div>
      <div className="monitor-frame__body">{children}</div>
    </section>
  );
}
