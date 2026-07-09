export default function GlitchText({ as: Tag = "span", children, className = "" }) {
  return (
    <Tag className={`glitch-text ${className}`} data-text={children}>
      {children}
    </Tag>
  );
}
