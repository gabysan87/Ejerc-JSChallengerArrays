// Devuelve los últimos n elementos de la matriz

// Escribe una función que tome una matriz (a) y un número (n) como argumentos. Debería devolver los últimos n elementos de a.

const myFunction = (a, n) => {

    return a.slice(-n)
}


console.log(myFunction([1, 2, 3, 4, 5], 2))
console.log(myFunction([1, 2, 3], 6))
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3))