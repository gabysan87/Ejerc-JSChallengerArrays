// Devuelve la cadena más larga de una matriz de cadenas

// Escriba una función que tome una matriz de cadenas como argumento. Devuelve la cadena más larga.

const myFunction = (arr) =>{

    // return arr.reduce((longest_word, current_word) => longest_word.length > current_word.length ? longest_word : current_word);
    return arr.reduce((a, b) => a.length <= b.length ? b : a) 
}

console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))

// se usa el metodo reduce este reductor recorre la matriz elemento por elemento, agregando en cada paso el valor actual de la matriz al resultado del paso anterior (este resultado es la suma acumulada de todos los pasos anteriores), hasta que no haya más elementos para agregar, 
// luego se usa length para ver la longitud de cada elemento y asi poder tomar la palabra mas larga