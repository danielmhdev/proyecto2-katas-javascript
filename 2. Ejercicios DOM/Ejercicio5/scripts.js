/* 
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.
 */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const container = document.querySelector("#album-container");

const ulList = document.createElement("ul");
ulList.className = "metal-list";

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  li.className = "metal-item";
  ulList.appendChild(li);
};

container.appendChild(ulList);