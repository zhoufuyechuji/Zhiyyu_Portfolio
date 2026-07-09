import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConnectionLines from "./ConnectionLines.jsx";
import EvidenceCard from "./EvidenceCard.jsx";

export default function EvidenceWall({ projects }) {
  const [focusedSlug, setFocusedSlug] = useState("");
  const [openingSlug, setOpeningSlug] = useState("");
  const boardRef = useRef(null);
  const openTimerRef = useRef(0);
  const navigate = useNavigate();

  function handleSelect(project, event) {
    event.preventDefault();
    if (openingSlug) return;

    const board = boardRef.current;
    const card = event.currentTarget;

    if (focusedSlug !== project.slug) {
      if (board) {
        const cardRect = card.getBoundingClientRect();
        const boardRect = board.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const boardCenterX = boardRect.left + boardRect.width / 2;
        const boardCenterY = boardRect.top + boardRect.height / 2;
        board.style.setProperty("--focus-x", `${Math.round((boardCenterX - cardCenterX) * 0.72)}px`);
        board.style.setProperty("--focus-y", `${Math.round((boardCenterY - cardCenterY) * 0.72)}px`);
      }
      setFocusedSlug(project.slug);
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = window.setTimeout(() => {
        setOpeningSlug(project.slug);
        window.setTimeout(() => navigate(`/projects/${project.slug}`), 760);
      }, 820);
      return;
    }

    window.clearTimeout(openTimerRef.current);
    setOpeningSlug(project.slug);
    window.setTimeout(() => {
      navigate(`/projects/${project.slug}`);
    }, 760);
  }

  const focusedProject = projects.find((project) => project.slug === focusedSlug);

  return (
    <section
      className={`evidence-wall project-wall scene-panel${focusedSlug ? " is-focusing" : ""}${openingSlug ? " is-opening-project" : ""}`}
      id="projects"
      aria-labelledby="projects-title"
      data-project-wall
    >
      <div className="room-perspective" aria-hidden="true">
        <span className="room-perspective__ceiling" />
        <span className="room-perspective__floor" />
        <span className="room-perspective__left" />
        <span className="room-perspective__right" />
      </div>
      <div className="section-heading">
        <span>DREAM ARCHIVE / DESIGN LOGS</span>
        <h2 id="projects-title">PROJECT WALL</h2>
      </div>
      <p className="project-wall__direction">
        Select a floating project window. The lens will move closer, the signal will break, then the full project page will open.
      </p>
      <div className="evidence-wall__board" ref={boardRef} data-project-board>
        <div className="wall-lamp" aria-hidden="true" />
        <ConnectionLines />
        {projects.map((project, index) => (
          <EvidenceCard
            key={project.id}
            project={project}
            index={index}
            focused={focusedSlug === project.slug}
            dimmed={Boolean(focusedSlug && focusedSlug !== project.slug)}
            onSelect={(event) => handleSelect(project, event)}
          />
        ))}
        <div className="project-focus-view" data-project-focus-view aria-live="polite">
          <span>{focusedProject ? "Lens locked on" : "Lens waiting"}</span>
          <strong>{focusedProject ? focusedProject.title : "OPEN CASE FILE"}</strong>
          {focusedProject ? <small>Signal opening project page</small> : null}
        </div>
      </div>
      <div className="glitch-transition" aria-hidden="true" />
    </section>
  );
}
