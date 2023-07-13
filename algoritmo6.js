// Eliminar un elemento de matriz específico

// Escriba una función que tome una matriz (a) y un valor (b) como argumento. La función debe eliminar todos los elementos iguales a 'b' de la matriz. Devuelve la matriz filtrada.

const myFunction = (a, b) => {

    return a.filter(curr => curr !==b)
}

console.log(myFunction([1,2,3], 2))
console.log(myFunction([1,2,'2'], '2'))
console.log(myFunction([false,'2',1], false))
console.log(myFunction([1,2,'2',1], 1))
