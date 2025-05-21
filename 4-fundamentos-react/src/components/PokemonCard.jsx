import { useEffect, useState } from "react";

export default function PokemonCard({ nombre, url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const obtenerPokemon = async () => {
      const res = await fetch(url);
      const data = await res.json();

      const datosPokemon = {
        imagen: data.sprites.front_default,
        nombre: data.name,
      };

      setPokemon(datosPokemon);
    };

    obtenerPokemon();
  }, [url]);

  if (pokemon === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ border: "1px solid white", borderRadius: "1rem" }}>
      <img src={pokemon.imagen} />
      <h2>{pokemon.nombre}</h2>
    </div>
  );
}
