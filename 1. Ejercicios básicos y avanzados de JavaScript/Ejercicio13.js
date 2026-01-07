/* 
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, 
y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función: 
*/
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombre) {
    let posicion = -1;
    for (let i = 0; i < nameList.length; i ++){
        if(nombre === nameList[i]){
             posicion = i+1; // para humanos
             break;}
    }
    if(posicion !== -1){
         console.log("El nombre: " + nombre + " existe dentro de la lista y la posición que ocupa es: " + posicion)
    }
    else {
        console.log("El nombre: " + nombre + " no existe dentro del array")
    } 
}
nameFinder(names, "Marc");
nameFinder(names, "Juan");