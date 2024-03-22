// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

const paises =[
    {
        name : "Chile",
        popultation : 10000
    },
    {
        name : "Venezuela",
        popultation : 20000
    },
    {
        name : "Peru",
        popultation : 15000
    },
    {
        name : "Argentina",
        popultation : 50000 
    },
    {
        name : "Bolivia",
        popultation : 5000 
    },
    {   
        name : "Hong Kong",
        popultation : 2500
    }
]

const orderByPopulation = paises.sort(function(a,b){
    if (a.popultation>b.popultation){
        return 1;
    }
    if (a.popultation<b.popultation){
        return -1;
    }
    return 0;
});


console.log(orderByPopulation);

/*
Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:

Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.

Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza
 este comportamiento, por esto no todos los navegadores (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.

Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.

compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
*/