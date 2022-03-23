// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var newObject = {}
for (x=0; x<string.length;x++){
  if(newObject.hasOwnProperty(string[x])){
    newObject [string[x]] += 1;
  }
  else {
    newObject [string[x]] = 1;
  }
}
return newObject
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for ( x=0; x<s.length; x++){
    if (s[x] === s[x].toUpperCase()){
      mayuscula += s[x];
    }
    else {
           minuscula += s[x];  
     8 
     }
  }
  return (mayuscula + minuscula);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var cambios = str.split(' ').map( function(coso){
   return coso.split('').reverse().join('');
 })
 return cambios.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cadena = numero.toString()
  var cadenaInver = '';
  cadenaInver = cadena.split('').reverse().join('');
  if (cadena === cadenaInver){
    return 'Es capicua';
  }
  return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var coso = '';
  for (x=0; x<cadena.length;x++){
    if( cadena[x] !== 'a' && cadena[x] !== 'b' && cadena[x] !== 'c'){
      coso += cadena[x];
    }
  }
  return coso
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while (cambio){
    cambio = false;
    for (var x=0; x<arr.length - 1; x++){
      if (arr [x].length > arr [x+1].length){
        var aux = arr [x];
        arr [x] = arr [x+1];
        arr [x+1] = aux;
        cambio = true
      }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var int = [];
  for (x = 0; x < arreglo1.length; x++){
    for (y = 0; y < arreglo2.length; y++){
      if (arreglo1[x]=== arreglo2 [y]){
        int.push(arreglo1[x])
      }
    }
  }
  return int
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

