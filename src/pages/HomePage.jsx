import EvidenceWall from "../components/EvidenceWall.jsx";
import GlitchText from "../components/GlitchText.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import SkillTag from "../components/SkillTag.jsx";
import TerminalContact from "../components/TerminalContact.jsx";
import { profile, projects, skillGroups } from "../data/projects.js";

export default function HomePage() {
  return (
    <div className="app-shell surveillance-shell">
      <NavigationBar />
      <main className="scene-camera" data-scene-camera>
        <section className="hero-section profile-room scene-panel" id="profile-room" aria-labelledby="profile-room-title">
          <div className="profile-room__depth" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-section__copy profile-room__copy">
            <span className="status-chip">PROFILE ROOM / OBSERVED PORTFOLIO SIGNAL</span>
            <GlitchText as="h1" id="profile-room-title">{profile.name}</GlitchText>
            <p className="hero-section__title">{profile.title}</p>
            <p>{profile.intro}</p>
          </div>
          <section className="profile-room__stage" aria-label="Profile room scene">
            <figure className="profile-avatar">
              <img src="/assets/about-persona.png" alt="Stylized avatar placeholder for Zhiyun Yu" />
            </figure>
            <div className="profile-fragments" aria-label="Profile fragments">
              <DossierField label="Name" value={profile.name} />
              <DossierField label="Role" value={profile.role} />
              <DossierField label="Design Focus" value={profile.focus} />
              <DossierField label="Tools" value={profile.tools} />
              <DossierField label="Interests" value={profile.interests} />
              <DossierField label="Current Mission" value={profile.mission} />
            </div>
          </section>
        </section>

        <EvidenceWall projects={projects} />

        <section className="skill-archive scene-panel" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <span>CASE FILES / PROJECT ARCHIVE</span>
            <h2 id="skills-title">Skills Archive</h2>
          </div>
          <div className="skill-archive__grid">
            {skillGroups.map((group) => (
              <article key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <div className="tag-row">
                  {group.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <TerminalContact />
      </main>
    </div>
  );
}

function DossierField({ label, value }) {
  return (
    <article className="dossier-field">
      <span>{label}</span>
      <p>{value}</p>
    </article>
  );
}
