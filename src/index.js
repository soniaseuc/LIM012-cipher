import cipher from './cipher.js';

//el numero de desplazamiento
const key = document.getElementById('offset');

//para guardar en la variable inputEncode todo lo que escriba el usuario
const inputEncode = document.getElementById('input');

//la variable outputEncode muestra toda la info que sale cifrada
const outputEncode = document.getElementById('output');

//el boton de cifrado
const btnCipher = document.getElementById('btnCipher');
  btnCipher.addEventListener('click',() => {    
    outputEncode.value = cipher.encode (key.value,inputEncode.value);
});
//la variable inputDecode muestra toda la info que sale cifrada
const inputDecode = document.getElementById('input');

//la variable outputDecode muestra toda la info que sale descifrada
const outputDecode = document.getElementById('output');

//el boton de descifrado
const btnDecipher = document.getElementById('btnDecipher');
  btnDecipher.addEventListener('click',() => {
    outputDecode.value = cipher.decode (key.value,inputDecode.value);
});