# Mensajeria secreta para parejas (Cifrado César)

## Índice

* [1. Resumen del proyecto](#1-Resumen-del-proyecto)
* [2. Mi proceso de creación](#2-Mi-proceso-de-creación)
* [3. Los usuarios y los objetivos en relación con el producto](#3-los-usuarios-y-los-objetivos-en-relación-con-el-producto)
* [4. Cómo el producto soluciona los problemas de los usuarios](#4-como-el-producto-soluciona-los-problemas-de-los-usuarios)
* [5. Foto del primer prototipo en papel](#5-foto-del-primer-prototipo-en-papel)
* [6. Resumen del feedback](#6-resumen-del-feedback)
* [7. Imagen del prototipo final](#7-imagen-del-prototipo-final)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)

***

## 1. Resumen del proyecto
  En el proyecto de cifrado se contaba con un objeto llamado cipher y dentro 
  de este se crearon dos métodos para codificar y decodificar strings con el 
  objetivo de cifrar y descifrar mensajes secretos entre amantes. Se diseño 
  esta página para enamorados ocultos que no quieren que otros lean sus mensajes

***

## 2. Mi proceso de creación 

  La temática escogida fue Mensajería secreta para parejas. 
  Mi proceso para definir el producto final fue usar al principio un poco de 
  mi experiencia personal sobre relaciones a distancia y constantemente  
  solicitar feedback a otros posibles usuarios. Los primeros prototipos no 
  eran fluidos ni intuitivos. Luego de codear en JavaScript el método de 
  codificar y enlazar este con los botones de la página html comencé de 
  nuevo a modificar los botones y el orden en que solicitaba la información. 
  Varias veces durante el proceso de darle estilo a la página web regresaba 
  a los usuarios de prueba y les pedía su opinión.  

  El prototipo inicial en papel y lápiz no se parece al producto final debido a 
  que el primero no fue de alta fidelidad, no incluía colores, tipos de letra 
  o cuantos clicks debía dar el usuario para llegar a lo que necesitaba. El  
  segundo prototipo fue diseñado con la idea de simplificar en una sola pantalla 
  las funciones de cifrar y descifrar. No me enfoque en los colores o formas.  
  En el producto final se simplifico aún más buscando que se pudiese usar de 
  una forma intuitiva y ahí si se diseñó con paletas de colores e imágenes  
  que estuviesen acorde con la temática.

## 3. Los usuarios y los objetivos en relación con el producto

  Los principales usuarios para los cuales se pensó este producto serian 
  parejas de enamorados de cualquier edad, pero con facilidad de uso de 
  las tecnologías actuales. Los usuarios principales buscan cifrar y 
  descifrar mensajes secretos. Es decir, este producto se diseñó para 
  parejas que se comunican virtualmente, por ejemplo, por redes sociales, 
  y desean enviarse mensajes de texto, pero encriptados para que nadie 
  más pueda saber lo que estos dicen. La idea es que ambos amantes usen 
  este programa en sus laptops, tablets o celulares para escribir 
  sus mensajes y luego cifrarlos. Luego enviarse el mensaje encriptado 
  por redes sociales y que finalmente la otra persona descifre el mensaje 
  para poderlo entender. El proceso, de enviarse mensajes encriptados, 
  se repetiría en ambos sentidos para mantener una mensajería secreta. 

## 4. Cómo el producto soluciona los problemas de los usuarios

  He diseñado este producto de una forma que resuelva el problema de privacidad 
  que tiene la pareja secreta. Por ejemplo, solo los amantes sabrán el numero 
  de desplazamientos de sus mensajes, así que solo ellos podrían saber que dice. 
  Es decir, otra persona ajena a la pareja no entendería el mensaje cifrado, 
  pero aun si obtuviese acceso a la página diseñada tampoco sabría que numero 
  de desplazamientos debe escoger para descifrar el mensaje. Además, no se 
  solicita al usuario que se identifique, así no queda registro de quien usa  
  el programa. Finalmente, se creó un botón para borrar todos los campos de 
  textos llenados, así que con un solo click toda la información secreta se elimina. 

## 5. Foto del primer prototipo en papel

  Primero cree un diagrama de flujo
  
  ![flujo del primer prototipo](https://user-images.githubusercontent.com/60791273/74837638-ecb27080-52ef-11ea-8817-b22f3a902a2a.png)

  Luego diseñe con papel y lápiz el primer prototipo que contenía 8 pantallas o mas

  ![protitpo en papel 0](https://user-images.githubusercontent.com/60791273/74838261-4d8e7880-52f1-11ea-96de-b5ca1a60b97b.jpeg)

  ![protitpo en papel 1](https://user-images.githubusercontent.com/60791273/74838264-4e270f00-52f1-11ea-9997-3b15b3c52fae.jpeg)

## 6. Resumen del feedback

  Los encuestados sugirieron reducir la cantidad de pantallas que presente en el
  prototipo. Simplificar lo que mostraba en cada pantalla para que fuese fácil
  de entender. No recargar la página de mucha información o imágenes para que
  fuese más agradable e intuitiva. Usar colores y formas suaves acorde a
  la temática escogida.

  Después del feedback modifique mi prototipo en papel como se muestra a continuación

  ![prototipo despues del primer feedback](https://user-images.githubusercontent.com/60791273/74838318-69921a00-52f1-11ea-87ed-fbf5de1176aa.jpeg)

## 7. Imagen del prototipo final

  El primer prototipo no presentaba una fluidez y tonos de colores acorde a la temática 
  
  ![prototipo final cifrado cesar](https://user-images.githubusercontent.com/60791273/74837398-66962a00-52ef-11ea-8f0e-539026477c49.png)

  A continuación se muestra el producto final luego de otra ronda de feedback

  ![producto final Cifrado Cesar](https://user-images.githubusercontent.com/60791273/74839662-a4954d00-52f3-11ea-9443-66741fc8f6aa.png)

## 8. Objetivos de aprendizaje

UX (Diseño de experiencia de usuario)

Diseño centrado en el usuario Lo puedo explicar con mis propias palabras
Crear prototipos para obtener feedback e iterar Lo puedo explicar con mis propias palabras
Aplicar los principios de diseño visual 

HTML y CSS

Uso correcto de HTML semantico
Uso de selectores de CSS
Construir tu aplicación respetando el diseño realizado

DOM (Document Object Model)

Utilizar los métodos de selección del DOM (getElementById,querySelector,etc)
Manejar eventos del DOM (addEventListener)
Manipulación dinámica del DOM (createElement,innerHTML)

JavaScript

Manipular strings (cadenas de texto) y concatenar
Utilizar condicionales if-else o switch
Utilizar bucles for o do-while
Utlizar funciones de tipo flecha (arrow-function)
Datos atómicos y estructurados (strings, numbers, array, objects)
Utilizar ES Modules (import | export)

Testing

Testeo de tus funciones (mínimo 70%)

Git y GitHub

Comandos de git (add | commit | pull| status | push)
Manejo de repositorios de GitHub (clone | fork | gh-pages)

Buenas prácticas de desarrollo

Organizar y dividir el código en módulos (modularización)
Uso de identificadores descriptivos (Nomenclatura | Semántica)
Uso de linter para seguir buenas prácticas (ESLINT)
