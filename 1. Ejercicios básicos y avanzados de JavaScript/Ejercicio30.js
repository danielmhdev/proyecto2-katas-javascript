/* 
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. 
*/

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const metal = [];
const rock = [];
const pop = [];
const country = [];
const grunge = [];

for (const cancion of tracks) {
    if (cancion.genre == "Rock"){
        rock.push(cancion.title);
    }
    else if (cancion.genre == "Metal"){
        metal.push(cancion.title);
    }
    else if (cancion.genre == "Pop"){
        pop.push(cancion.title);
    }
    else if (cancion.genre == "Country"){
        country.push(cancion.title);
    }
    else if (cancion.genre == "Grunge"){
        grunge.push(cancion.title);
    }
};

const cancionesGenero = {
    "Metal" : metal,
    "Rock" : rock,
    "Pop" : pop,
    "Country" : country,
    "Grunge" : grunge
};

console.log(cancionesGenero);