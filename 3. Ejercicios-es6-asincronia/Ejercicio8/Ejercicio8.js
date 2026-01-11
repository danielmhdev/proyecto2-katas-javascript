const selectCharacter = document.querySelector("#character-list");
const imagen = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
    .then((result) => result.json())
    .then((characters) => { 
        

        for (const character of characters) {
            const newOption = document.createElement("option");
            
        
            newOption.value = character.imageUrl; 
            newOption.innerHTML = character.fullName;
            
            selectCharacter.appendChild(newOption);
        }

        if (characters.length > 0) {
            imagen.src = characters[0].imageUrl;
        }
    });

selectCharacter.addEventListener("change", (ev) => {
 
    imagen.setAttribute("src", ev.target.value);
});