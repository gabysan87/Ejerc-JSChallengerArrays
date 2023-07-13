// Ordenar matriz por propiedad de objeto
// Escribe una función que tome una matriz de objetos como argumento. Ordene la matriz por la propiedad b en orden ascendente. Devuelve la matriz ordenada

const myFunction = (arr) =>{

return arr.sort((a, b) => a.b - b.b);

// const sort = (x, y) => x.b - y.b;
//    return arr.sort(sort); JS

}

console.log(myFunction([{a:1,b:2},{a:5,b:4}]))
console.log(myFunction([{a:2,b:10},{a:5,b:4}]))
console.log(myFunction([{a:1,b:7},{a:2,b:1}]))

// Esta función toma una matriz de objetos como argumento y la ordena según la propiedad "b" en orden ascendente utilizando el método sort() junto con una función de comparación. Devuelve la matriz ordenada.