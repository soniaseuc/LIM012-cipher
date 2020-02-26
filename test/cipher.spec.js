// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('cipher debería ser un objeto', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33, 'A BCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('H IJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    it('debería retornar "h ijklmnopqrstuvwxyzabcdefg" para "a bcdefghijklmnopqrstuvwxyz" con offset 33', () => {
       expect(cipher.encode(33, 'a bcdefghijklmnopqrstuvwxyz')).toBe('h ijklmnopqrstuvwxyzabcdefg');
     });

     it('debería retornar "H IJKLMNOPQRSTUVWXYZABCDEFG" para "A BCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33, 'A BCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('H IJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //it('debería retornar " !@" para " !@"', () => {
    //expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('debería ser una function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "A BCDEFGHIJKLMNOPQRSTUVWXYZ" para "H IJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'H IJKLMNOPQRSTUVWXYZABCDEFG')).toBe('A BCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
     it('debería retornar "a bcdefghijklmnopqrstuvwxyz" para "h ijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
       expect(cipher.decode(33, 'h ijklmnopqrstuvwxyzabcdefg')).toBe('a bcdefghijklmnopqrstuvwxyz');
     });

     it('debería retornar "A BCDEFGHIJKLMNOPQRSTUVWXYZ" para "H IJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'H IJKLMNOPQRSTUVWXYZABCDEFG')).toBe('A BCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //it('debería retornar " !@" para " !@"', () => {
    // expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });

});
