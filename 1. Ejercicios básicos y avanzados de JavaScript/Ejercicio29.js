/* 
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. 
*/

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];
const decada70 = [];
const decada80 = [];
const decada90 = [];
const decada2000 = [];
const decada2010 = [];

for (const pelicula of starWarsMovies) {
    if (pelicula.releaseYear >=1970 && pelicula.releaseYear < 1980){
        decada70.push(pelicula);

    }
    else if(pelicula.releaseYear >=1980 && pelicula.releaseYear < 1990){
       decada80.push(pelicula);
    }
    else if (pelicula.releaseYear >=1990 && pelicula.releaseYear < 2000){
        decada90.push(pelicula);
    }
    else if (pelicula.releaseYear >= 2000 && pelicula.releaseYear <2010){
        decada2000.push(pelicula);
    }
    else if (pelicula.releaseYear >= 2010 && pelicula.releaseYear <2020){
        decada2010.push(pelicula);
    }
};

const decadas = {
    "decada70" : decada70,
    "decada80" : decada80,
    "decada90" : decada90,
    "decada2000" : decada2000,
    "decada2010" : decada2010,
}

console.log(decadas);