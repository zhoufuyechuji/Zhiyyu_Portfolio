import { contactLinks } from "../data/projects.js";

export default function TerminalContact() {
  return (
    <section className="terminal-contact" id="transmission" aria-labelledby="transmission-title">
      <span>ACCESS GRANTED</span>
      <h2 id="transmission-title">Secure Transmission</h2>
      <p>Open a channel for collaborations, design roles, or portfolio conversations.</p>
      <div className="terminal-contact__links">
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
