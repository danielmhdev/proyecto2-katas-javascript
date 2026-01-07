// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if (numberOne >numberTwo){
        return "El número más grande es: " + numberOne;
    }
    else {
       return "El número más grande es: " + numberTwo;
    }
}

let numeroMasGrande = greaterNumber(50, 80);
console.log(numeroMasGrande);