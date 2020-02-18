import cipher from './cipher.js';

//el numero de desplazamiento
const clave = document.getElementById('desplazamiento');

//para guardar en la variable textoDeEntradaACifrar todo lo que escriba el usuario
const textoDeEntradaACifrar = document.getElementById('inputEncode');

//la variable textoDeSalidaCifrado muestra toda la info que sale cifrada
const textoDeSalidaCifrado = document.getElementById('outputEncode');

//el boton de cifrado
const botonDeCifrar = document.getElementById('cifrar');
  botonDeCifrar.addEventListener('click',() => {
    textoDeSalidaCifrado.value = cipher.encode (clave.value,textoDeEntradaACifrar.value);
});
//la variable textoDeSalidaCifrado muestra toda la info que sale cifrada
const textoDeEntradaCifrado = document.getElementById('inputEncode');

//la variable textoDescifrado muestra toda la info que sale descifrada
const textoDescifrado = document.getElementById('outputEncode');

//el boton de descifrado
const botonDeDescifrar = document.getElementById('descifrar');
  botonDeDescifrar.addEventListener('click',() => {
    textoDescifrado.value = cipher.decode (clave.value,textoDeEntradaCifrado.value);
});