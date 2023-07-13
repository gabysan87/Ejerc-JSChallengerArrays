// Eliminar los primeros n elementos de una matriz

// Escriba una función que tome una matriz (a) como argumento. Elimina los 3 primeros elementos de 'a'. Devolver el resultado

const myFunction = (a) =>{

return a.splice(3);
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))

// Se utiliza el metodo splice() el cual sirve para eliminar elementos existentes de la array, se coloca el nro. 3 que son los que solicita eliminar los 3 primeros