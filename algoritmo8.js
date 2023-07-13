// Cuente el número de valores negativos en la matriz

// Escribe una función que tome una matriz de números como argumento. Devuelve el número de valores negativos en la matriz.

const myFunction = (a) => {

    return a.filter(x => x < 0).length
//    return a.filter((el) => el < 0).length; JS
}

console.log(myFunction([1,-2,2,-4]))
console.log(myFunction([0,9,1]))
console.log(myFunction([4,-3,2,1,0]))

// se utiliza filter para filtrar solo los números negativos y luego obtener la longitud del array obtenido.