import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <header className="navigation-bar">
      <Link className="navigation-bar__brand" to="/">
        ZY / Digital Dream Room
      </Link>
      <nav aria-label="Primary navigation">
        <a href="/#profile-room">Profile Room</a>
        <a href="/#projects">Project Wall</a>
        <a href="/#skills">Project Archive</a>
        <a href="/#transmission">Transmission</a>
      </nav>
    </header>
  );
}
