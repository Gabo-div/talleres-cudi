import { Link, useNavigate } from "react-router";
import reactLogo from "../assets/react.svg";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      return;
    }

    navigate(`/buscar?query=${query}`);
  };

  return (
    <main className="hero">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>React Movies</h1>

      <form className="hero-search" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Buscar Peliculas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Buscar</button>
      </form>

      <p>
        Esta es una aplicación de películas construida con React Router.
        <br />
        Puedes navegar a la sección de películas haciendo clic en el botón de
        abajo.
        <br />
      </p>

      <Link to="/peliculas" className="button">
        Ver Peliculas
      </Link>
    </main>
  );
}
