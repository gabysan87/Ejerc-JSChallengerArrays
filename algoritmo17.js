// Combinar dos matrices con valores duplicados

// Escribe una función que tome dos matrices como argumentos. Combine ambas matrices y elimine los valores duplicados. Ordene el resultado de la fusión en orden ascendente. Devolver la matriz resultante

const myFunction = (a, b) => {

// return  [...new Set([...a, ...b])].sort((x, y) => x - y); JS
return [...a, ...b].filter((valor, indice, arreglo) => arreglo.indexOf(valor) === indice).sort((a, b) => a - b)
}

console.log(myFunction([1, 2, 3], [3, 4, 5]))
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

// La función combinarOrdenarMatrices toma dos matrices como argumentos, las combina usando el operador de propagación (...), luego aplica el método filter() para eliminar los valores duplicados y finalmente utiliza el método sort() para ordenar los valores resultantes en orden ascendente.