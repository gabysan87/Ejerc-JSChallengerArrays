// Obtener los primeros n elementos de una matriz

// Escriba una función que tome una matriz (a) como argumento. Extraiga los primeros 3 elementos de a. Devolver la matriz resultante

const myFunction = (a) => {

    return a.slice(0,3)
}


console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))

// Utilizo el metodo slice() el cual extrae una sección de una cadena y devuelve una cadena nueva, se le agrega los parametros desde inicio a fin del 0 al 3.