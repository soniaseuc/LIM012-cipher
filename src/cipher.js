const cipher = {
  encode : (key,inputEncode) => {   
    let offset = parseInt(key); 
    //console.log(typeof offset);
    //console.log(typeof inputEncode);
    try {
      //console.log('entro al try');
      if(offset === 0 || inputEncode === "") throw new TypeError;
      if(offset === 0 || inputEncode === " ") throw new TypeError;
      if(offset === '' || inputEncode === "") throw new TypeError;
      if(offset === ' ' || inputEncode === " ") throw new TypeError;
      if(offset === null || typeof inputEncode === 'object') throw new TypeError;
      if (offset === undefined || inputEncode === undefined) throw new TypeError;
      //console.log('salgo del try');
      }    
    catch(err) { 
      //console.log('entro al catch');   
      return err;
    }      
    //console.log('entro al cuerpo de la funcion');
    let myStringCipher = '';              
    for(let i = 0; i< inputEncode.length; i++){  
      let numberOfTheLetter = inputEncode.charCodeAt(i);
      if (numberOfTheLetter === 32){
        myStringCipher += ' ';
      } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {                  
            let asciiCode = (inputEncode.charCodeAt(i) - 65 + offset) % 26 + 65;
            let cipherLetter = String.fromCharCode(asciiCode);
            myStringCipher += cipherLetter;
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {  
            let asciiCode= (inputEncode.charCodeAt(i) - 97 + offset) % 26 + 97;
            let cipherLetter = String.fromCharCode(asciiCode);
            myStringCipher += cipherLetter;                         
      } else if (numberOfTheLetter >= 49 && numberOfTheLetter <= 57) {  
        let asciiCode= (inputEncode.charCodeAt(i) - 49 + offset) % 26 + 49;
        let cipherLetter = String.fromCharCode(asciiCode);
        myStringCipher += cipherLetter;                         
      }  else {
        return 'Has introducido caracteres especiales no validos';        
      }
    }       
    return myStringCipher;    
  },           

  decode : (key,inputDecode) => {    
    let offset = parseInt(key);
    try {
      //console.log('entro al try');
      if(offset === 0 || inputDecode === "") throw new TypeError;
      if(offset === 0 || inputDecode === " ") throw new TypeError;
      if(offset === '' || inputDecode === "") throw new TypeError;
      if(offset === ' ' || inputDecode === " ") throw new TypeError;
      if(offset === null || typeof inputDecode === 'object') throw new TypeError;
      if (offset === undefined || inputDecode === undefined) throw new TypeError;
      //console.log('salgo del try');
      }    
    catch(err) { 
      //console.log('entro al catch');   
      return err;
    } 
    //console.log('entro al cuerpo de la funcion');
    let stringDecipher = '';// almacenar el valor del string descifrado              
      for(let i = 0; i< inputDecode.length; i++){     
        let numberOfTheLetter = inputDecode.charCodeAt(i);  
        if (numberOfTheLetter === 32){
          stringDecipher += ' ';
        } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
            let asciiCode = (inputDecode.charCodeAt(i) + 65 - offset) % 26 + 65;
            let decipherLetter = String.fromCharCode(asciiCode);
            stringDecipher += decipherLetter; // formar el string descifrado 
        } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {
            let asciiCode = (inputDecode.charCodeAt(i) - 45 - offset) % 26 + 97;
            let decipherLetter = String.fromCharCode(asciiCode);
            stringDecipher += decipherLetter; // formar el string descifrado
        } else if (numberOfTheLetter >= 48 && numberOfTheLetter <= 57) {  
            let asciiCode= (inputDecode.charCodeAt(i) + 4 - offset) % 26 + 48;
            let decipherLetter = String.fromCharCode(asciiCode);
            stringDecipher += decipherLetter;                         
    }  else {
          return 'Has introducido caracteres especiales no validos';         
        }
      }          
      return stringDecipher;
  } 
};

export default cipher;