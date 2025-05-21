import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

export default function Pokedex() {
  const [pagina, setPagina] = useState(0);
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    if (pagina < 0) {
      return;
    }

    const obtenerPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${pagina * 20}`
      );
      const data = await res.json();

      setPokemones(data.results);
    };
    obtenerPokemon();
  }, [pagina]);

  const handlePrev = () => {
    setPagina(pagina - 1);
  };

  const handleNext = () => {
    setPagina(pagina + 1);
  };

  return (
    <div>
      <h2>Pagina {pagina + 1}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {pokemones.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            nombre={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>

      <div>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}
