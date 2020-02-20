const cipher = {

  encode : (key,inputEncode) => {       
    let offset = parseInt(key); 
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
      }
    }       
    return myStringCipher;
  },           

  decode : (key,inputDecode) => {    
    let offset = parseInt(key);
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
        }
      }          
      return stringDecipher;
  } 
};

export default cipher;