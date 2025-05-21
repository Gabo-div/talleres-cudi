const busquedaInput = document.querySelector("#busqueda");
const busquedaBoton = document.querySelector("#boton");
const plantillaPokemon = document.querySelector("#plantilla-pokemon");
const resultados = document.querySelector("#resultados");

busquedaBoton.addEventListener("click", async () => {
  const nombrePokemon = busquedaInput.value;
  busquedaInput.value = "";

  if (!nombrePokemon) {
    return;
  }

  const datosPokemon = await obtenerPokemon(nombrePokemon);

  const pokemonCard = plantillaPokemon.content.cloneNode(true);

  const pokemonNombre = pokemonCard.querySelector("h1");
  pokemonNombre.textContent = datosPokemon.nombre;

  const pokemonImage = pokemonCard.querySelector("img");
  pokemonImage.setAttribute("src", datosPokemon.imagen);

  resultados.appendChild(pokemonCard);
});

const obtenerPokemon = async (nombre) => {
  try {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + nombre
    );

    if (!respuesta.ok) {
      throw new Error("Error en al respuesta");
    }

    const datos = await respuesta.json();

    const pokemon = {
      nombre: datos.name,
      imagen: datos.sprites.front_default,
    };

    return pokemon;
  } catch (error) {
    console.log("Ocurrió un error: ", error);
  }
};
