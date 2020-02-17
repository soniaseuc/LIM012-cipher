const cipher = {

  encode : (clave,textoDeEntradaACifrar) => {
    let mayusTextoDeEntradaACifrar = textoDeEntradaACifrar.toUpperCase();
    let offset = parseInt(clave); //para que convierta a numeros, el string que ponga en clave, y lo guarde en la variable offset
    let stringCifrado = ''; // almacenar el valor del string Cifrado, el espacio permite que se cifre una letra y se guarde en dicho espacio, permite que cifre mas de una letra(palabras)
    let asciiCode; //declarando una variable local que guardara el valor de la formula de cifrado y el metodo charCodeAt devuelve como numero indicando el valor Unicode del caracter en el indice proporcionado
    let letraCifrada;  //declarando una variable que almacenara las letras que se cifraran y que se obtienen con el metodo String.fromCharCode que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especifica
      for(let i = 0; i< mayusTextoDeEntradaACifrar.length; i++){   //declarando la variable i que permite recorrer cada caracter
        let mensaje = mayusTextoDeEntradaACifrar.charCodeAt(i);
          if (mensaje===32){
            stringCifrado += ' ';
          } else {
              asciiCode= (mayusTextoDeEntradaACifrar.charCodeAt(i) - 65 + offset) % 26 + 65;
              letraCifrada= String.fromCharCode(asciiCode);
              stringCifrado += letraCifrada; // formar el string cifrado 
            }
      }       
      return stringCifrado;
  },
    //console.log(encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    //console.log(encode(offset,mayusTextoDeEntradaACifrar));
        
  decode : (clave,textoDeSalidaCifrado) => {
    let mayusTextoDeSalidaCifrado = textoDeSalidaCifrado.toUpperCase();
    let offset = parseInt(clave);
    let stringDescifrado = '';// almacenar el valor del string descifrado
    let asciiCode;
    let letraDescifrada;                
      for(let i = 0; i< mayusTextoDeSalidaCifrado.length; i++){
        let mensaje = mayusTextoDeSalidaCifrado[i].charCodeAt();
        if (mensaje===32){
          stringDescifrado += ' ';
        } else {
            asciiCode = (mayusTextoDeSalidaCifrado.charCodeAt(i) + 65 - offset) % 26 + 65;
            letraDescifrada = String.fromCharCode(asciiCode);
            stringDescifrado += letraDescifrada; // formar el string descifrado 
            }
      }          
      return stringDescifrado;
  }
    //console.log(decode(offset,stringCifrado));
    //console.log(decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'));
    
};

export default cipher;