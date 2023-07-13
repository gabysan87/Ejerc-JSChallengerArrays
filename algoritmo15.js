// Combinar un número arbitrario de matrices

// Escribe una función que tome argumentos en un número arbitrario de arreglos. Debería devolver una matriz que contenga los valores de todas las matrices.

const myFunction = (...arrays) => {

return [].concat(...arrays)
// return arrays.flat() JS

}
console.log(myFunction([1, 2, 3], [4, 5, 6]))
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
console.log(myFunction([true, true], [1, 2], ['a', 'b']))

// Se usa el operador de propagación (...) junto con el método concat() para combinar los valores de múltiples matrices 