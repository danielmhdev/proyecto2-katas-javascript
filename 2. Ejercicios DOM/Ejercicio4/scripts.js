/* 
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click 
*/
const botonClick = document.querySelector('#btnToClick');

botonClick.addEventListener('click', (event) => {
    console.log('Click Event Info:', event);
});
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', () => {
    console.log(inputFocus.value);
});
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValor = document.querySelector('.value');

inputValor.addEventListener('input', () => {
    console.log(inputValor.value);
});