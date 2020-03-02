const cipher = {
  encode : (key,input) => {   
    let offset = parseInt(key); 

    try {      
      if(offset === 0 || input === "") throw new TypeError;
      if(offset === 0 || input === " ") throw new TypeError;
      if(offset === '' || input === "") throw  new TypeError;
      if(offset === ' ' || input === " ") throw  new TypeError;
      if(offset === null || typeof input === 'object') throw new TypeError;
      if (offset === undefined || input === undefined) throw  new TypeError;      
    }    
    catch(Err) {                 
      return Err();
    }    
    let myStringCipher = '';              
    for(let i = 0; i< input.length; i++){  
      let numberOfTheLetter = input.charCodeAt(i);
      if (numberOfTheLetter === 32){
        myStringCipher += ' ';
      } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {                  
          let asciiCode = (input.charCodeAt(i) - 65 + offset) % 26 + 65;
          let cipherLetter = String.fromCharCode(asciiCode);
          myStringCipher += cipherLetter;
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {  
          let asciiCode= (input.charCodeAt(i) - 97 + offset) % 26 + 97;
          let cipherLetter = String.fromCharCode(asciiCode);
          myStringCipher += cipherLetter;                         
      } else if (numberOfTheLetter >= 49 && numberOfTheLetter <= 57) {  
          let asciiCode= (input.charCodeAt(i) - 49 + offset) % 9 + 49;
          let cipherLetter = String.fromCharCode(asciiCode);
          myStringCipher += cipherLetter;                         
      } else {
        myStringCipher = myStringCipher + input[i];        
      }
    }       
    return myStringCipher;    
  },           

  decode : (key,input) => {    
    let offset = parseInt(key);
    try {      
      if(offset === 0 || input === "") throw new TypeError;
      if(offset === 0 || input === " ") throw new TypeError;
      if(offset === '' || input === "") throw new TypeError;
      if(offset === ' ' || input === " ") throw new TypeError;
      if(offset === null || typeof input === 'object') throw new TypeError;
      if (offset === undefined || input === undefined) throw new TypeError;      
      }    
    catch(err) { 
      return err();
    }    
    let stringDecipher = '';// almacenar el valor del string descifrado              
    for(let i = 0; i< input.length; i++){     
      let numberOfTheLetter = input.charCodeAt(i);  
      if (numberOfTheLetter === 32){
        stringDecipher += ' ';
      } else if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
          let asciiCode = (input.charCodeAt(i) + 65 - offset) % 26 + 65;
          let decipherLetter = String.fromCharCode(asciiCode);
          stringDecipher += decipherLetter; // formar el string descifrado 
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {
          let asciiCode = (input.charCodeAt(i) - 45 - offset) % 26 + 97;
          let decipherLetter = String.fromCharCode(asciiCode);
          stringDecipher += decipherLetter; // formar el string descifrado
      } else if (numberOfTheLetter >= 49 && numberOfTheLetter <= 57) {  
          let asciiCode= (input.charCodeAt(i) + 49 - offset) % 9 + 49;
          let decipherLetter = String.fromCharCode(asciiCode);
          stringDecipher += decipherLetter;                         
      } else {
          stringDecipher = stringDecipher + input[i];         
      }
    }          
    return stringDecipher;
  } 
};

export default cipher;