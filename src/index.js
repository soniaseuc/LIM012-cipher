import cipher from './cipher.js';

//el número de desplazamiento
const key = document.getElementById('offset');

//para guardar en la variable input todo lo que escriba el usuario para cifrar
const input = document.getElementById('input');

//la variable output muestra toda la info que sale cifrada
const output = document.getElementById('output');

//el boton de cifrado
const btnCipher = document.getElementById('btnCipher');
  btnCipher.addEventListener('click',() => {    
    output.value = cipher.encode (key.value,input.value);
});

//el boton de descifrado
const btnDecipher = document.getElementById('btnDecipher');
  btnDecipher.addEventListener('click',() => {
    output.value = cipher.decode (key.value,input.value);
});