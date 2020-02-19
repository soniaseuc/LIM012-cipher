const cipher = {

  encode : (clave,textoDeEntradaACifrar) => {       
    let offset = parseInt(clave); 
    let myStringCipher = '';              
    for(let i = 0; i< textoDeEntradaACifrar.length; i++){  
      let numberOfTheLetter = textoDeEntradaACifrar.charCodeAt(i);
      if (numberOfTheLetter === 32){
        myStringCipher += ' ';
      } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {                  
            let asciiCode = (textoDeEntradaACifrar.charCodeAt(i) - 65 + offset) % 26 + 65;
            let cipherLetter = String.fromCharCode(asciiCode);
            myStringCipher += cipherLetter;
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {  
            let asciiCode= (textoDeEntradaACifrar.charCodeAt(i) - 97 + offset) % 26 + 97;
            let cipherLetter = String.fromCharCode(asciiCode);
            myStringCipher += cipherLetter;                         
      }
    }       
    return myStringCipher;
  },    
            
  decode : (clave,textoDeSalidaCifrado) => {    
    let offset = parseInt(clave);
    let stringDecipher = '';// almacenar el valor del string descifrado              
      for(let i = 0; i< textoDeSalidaCifrado.length; i++){     
        let numberOfTheLetter = textoDeSalidaCifrado.charCodeAt(i);  
        if (numberOfTheLetter === 32){
          stringDecipher += ' ';
        } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
            let asciiCode = (textoDeSalidaCifrado.charCodeAt(i) + 65 - offset) % 26 + 65;
            let decipherLetter = String.fromCharCode(asciiCode);
            stringDecipher += decipherLetter; // formar el string descifrado 
        } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {
            let asciiCode = (textoDeSalidaCifrado.charCodeAt(i) - 45 - offset) % 26 + 97;
            let decipherLetter = String.fromCharCode(asciiCode);
            stringDecipher += decipherLetter; // formar el string descifrado
        }
      }          
      return stringDecipher;
  } 
};

export default cipher;