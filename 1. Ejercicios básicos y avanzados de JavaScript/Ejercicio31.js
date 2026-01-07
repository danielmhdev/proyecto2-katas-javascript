/* 
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.
*/
const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];


for (let i = 0; i < artists.length; i ++) {
    console.log("-----------");
    console.log ("El artista: " + artists[i].name)
    for (let j = 0; j < artists[i].influences.length; j ++) {
        console.log("Influencia "+ (j+1) + " " + artists[i].influences[j])
    }

}

for (const artist of artists) {
    console.log("-----------");
    console.log(`El artista: ${artist.name}`);
    for (const influence of artist.influences) {
        console.log(`Influencia: ${influence}`);
    }
}