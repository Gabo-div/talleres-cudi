import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Ocurrió un error");
      }

      const data = await res.json();
      return data;
    },
  });

  if (!query) {
    return <div>Necesitas introducir una busqueda</div>;
  }

  return (
    <main className="movies container">
      <h1>Resultados para: "{query}"</h1>

      {isLoading && <p>Cargando...</p>}
      {isError && <p>Occurió un error recibiendo las peliculas</p>}
      {data && data.results.length > 0 && (
        <section className="movies-list">
          {data.results.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </section>
      )}
    </main>
  );
}
