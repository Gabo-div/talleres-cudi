import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function Movie() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", id],
    queryFn: async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error("Ocurrió un error");
      }

      const data = await res.json();
      return data;
    },
  });

  return (
    <main className="movie container">
      <h1>Detalles</h1>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Ocurrió un error al cargar las peliculas</p>}
      {data && (
        <section className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="movie-poster"
            alt={data.title}
          />
          <h2>{data.title}</h2>
          <p>{data.overview}</p>
          <div className="movie-info">
            <p>
              <span>Lanzamiento: </span>
              {data.release_date}
            </p>
            <p>
              <span>Duracion: </span>
              {data.runtime} minutos
            </p>
            <p>
              <span>Calificacion: </span>
              {data.vote_average}
            </p>
            <p>
              <span>Generos: </span>
              {data.genres.map((g) => g.name).join(", ")}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
