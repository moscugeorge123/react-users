import { NavLink, Outlet } from "react-router";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="register"
      >
        Register
      </NavLink>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

// 3 pagini - Pisici, Caini, Papagali
// Fiecare pagina va contine 2-3 categorii (link-uri) de animale
// la click pe categorii va face render la poze din acea categorie
