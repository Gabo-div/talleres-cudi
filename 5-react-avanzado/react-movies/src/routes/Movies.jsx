import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day",
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

  console.log(data);

  return (
    <main className="movies container">
      <h1>Peliculas Recomendadas</h1>

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
