// Ordenar una matriz de números en orden descendente

// Escribe una función que tome una matriz de números como argumento. Debería devolver una matriz con los números ordenados en orden descendente.


const myFunction = (arr) => {

    return arr.sort((a, b) => b - a)
    // return arr.sort().reverse()
}

console.log(myFunction([1,3,2]))
console.log(myFunction([4,2,3,1]))

// Use el método sort() y reverse() para ordenar datos en orden descendente
// Para ordenar los datos en orden descendente, necesitamos una matriz de datos para implementar ambos métodos en una sola matriz. Inicializaremos una matriz que contiene elementos no ordenados y probaremos los métodos de clasificación e inversión.