// Devuelve el promedio de una matriz de números

// Escribe una función que tome una matriz de números como argumento. Debería devolver el promedio de los números.

const myFunction = (arr) =>{

// return arr.reduce((acc, cur) => acc + cur, 0) / arr.length

return arr.reduce((a, n) => (a+= n, a), 0) /arr.length
}

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000]))

// reduce()es devolver la suma de todos los elementos en una matriz
// se pueden utilizar funciones de JavaScript específicas para calcular el promedio de un array, como reduce() 