export default function ConnectionLines() {
  const lines = [
    "M 18 30 C 32 12, 42 18, 50 28",
    "M 50 28 C 62 42, 74 34, 84 26",
    "M 18 30 C 24 54, 34 63, 44 72",
    "M 44 72 C 54 54, 67 57, 84 68",
    "M 50 28 C 57 50, 63 60, 67 82",
    "M 84 26 C 78 44, 84 56, 84 68"
  ];

  return (
    <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {lines.map((line, index) => (
        <path key={line} className={index % 2 ? "connection-lines__thread muted" : "connection-lines__thread"} d={line} />
      ))}
    </svg>
  );
}
