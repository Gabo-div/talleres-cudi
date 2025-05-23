import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-info">
        <h3>{movie.title}</h3>
        <div className="rate">{movie.vote_average}</div>
        <p className="overview">{movie.overview}</p>
        <Link to={`/peliculas/${movie.id}`} className="button">
          Ver Más
        </Link>
      </div>
    </article>
  );
}
