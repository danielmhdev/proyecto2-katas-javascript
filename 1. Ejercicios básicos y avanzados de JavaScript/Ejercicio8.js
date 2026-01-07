/*
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: 
*/
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWordClasica(stringList) {
    let masLargo = "";
  for (let i = 0; i < stringList.length; i ++){
    if (stringList[i].length > masLargo.length){
        masLargo = stringList[i];
    }
  }
  console.log(masLargo);
}

function findLongestWord(stringList) {
    let masLargo = "";
  for (const name of stringList) {
    if (name.length> masLargo.length){
        masLargo = name;
    }
    }
  console.log(masLargo);
}
findLongestWord(avengers);

