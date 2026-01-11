const randomImage = document.querySelector(".random-image");
const randomPokemon = Math.floor((Math.random() * 151) + 1);

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then((result) => {
        if (!result.ok) {
            throw new Error("No se pudo conectar con la API");
        }
        return result.json();
    })
    .then((data) => {
        randomImage.src = data.sprites.other["official-artwork"].front_default;
        randomImage.alt = `Imagen de ${data.name}`; 
    })
    .catch((error) => {
        console.error("Hubo un error cazando al Pokemon:", error);
    });