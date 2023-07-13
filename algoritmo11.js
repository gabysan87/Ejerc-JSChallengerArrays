// Calcular la suma de una matriz de números

// Escribe una función que tome una matriz de números como argumento. Debería devolver la suma de los números.

const myFunction = (a) => {

    // return a.reduce((acc, cur) => acc + cur, 0); JS
    return a.reduce((a, b) => (a | 0) + (b | 0)); 
}

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000,1]))
console.log(myFunction([-50,0,50,200]))

// https://es.stackoverflow.com/questions/366118/c%C3%B3mo-podr%C3%ADa-sumar-todos-los-n%C3%BAmeros-de-un-array-en-javascript

// Lo que hice fue usar el operador binario | para forzar a a y a b a que se convirtieran en numeros enteros, (esto es lo que ocurre al hacer a | 0 o b | 0) y se conoce como pipe.

// Por lo tanto es el equivalente a transformar esas cadenas de texto en enteros de forma corta para posteriormente hacer la operacion.