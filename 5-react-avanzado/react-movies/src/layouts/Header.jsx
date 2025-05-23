import { Link, Outlet } from "react-router";

export default function Header() {
  return (
    <>
      <header className="header container">
        <h1>React Movies</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="button">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/peliculas" className="button">
                Peliculas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
