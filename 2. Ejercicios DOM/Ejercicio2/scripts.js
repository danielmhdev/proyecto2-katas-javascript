// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
console.log(divVacio)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv = document.createElement("div")
const P = document.createElement("p");
nuevoDiv.appendChild(P);

console.log(nuevoDiv)

/* 
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript. 
*/
const DivLoop = document.createElement("div")

for (let index = 0; index < 6; index++) {
    const PLoop = document.createElement("p");
    DivLoop.appendChild(PLoop);
}
console.log(DivLoop);

/* 
2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'. 
*/
const pTexto = document.createElement("p")
pTexto.textContent = "Soy dinámico!";
document.body.appendChild(pTexto);
console.log(pTexto);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const titleH2 = document.querySelector(".fn-insert-here")
titleH2.textContent = "Wubba Lubba dub dub";

/* 
2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 
*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let listApp = document.createElement('ul');

for(app of apps){
    let listElement = document.createElement('li');
    listElement.innerText = app;
    listApp.appendChild(listElement);
}
document.querySelector('body').appendChild(listApp);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminarNodos = document.querySelectorAll(".fn-remove-me")
for (const nodo of eliminarNodos) {
    nodo.remove();
}
/* 
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild. 
*/
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
const primerDiv = document.querySelector('div');

primerDiv.after(pMedio);
/* 
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here 
*/
const insertarTexto = document.querySelectorAll(".fn-insert-here")

for (const contenedor of insertarTexto){
    const pInterior = document.createElement("p")
    pInterior.textContent = "Voy Dentro!";
    contenedor.appendChild(pInterior);
}