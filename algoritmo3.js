// Obtener los últimos n elementos de una matriz

// Escriba una función que tome una matriz (a) como argumento. Extraiga los últimos 3 elementos de 'a'. Devolver la matriz resultante


const myFunction = (a, n) => {

    return a.slice(-3);
    }


console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))

// Se usa el método slice() el devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

// slice extrae hasta, pero sin incluir el final.