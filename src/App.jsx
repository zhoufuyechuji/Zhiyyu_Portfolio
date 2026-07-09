import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    window.setTimeout(() => {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.setAttribute("tabindex", "-1");
      target?.focus({ preventScroll: true });
    }, 80);
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
