// 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
// torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
// velas más altas de la torta.
// Tu objetivo es contar cuántas son las más altas de la torta
// Ejemplo candles = [4, 4, 1, 3]
// Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
// debe retornar 2 como valor.

const candles = [1,2, 1, 3, 4, 4,2, 3];

let countMax = 0

let maxNumber = 0;

function findMaxNumber(arr){
    let max = 0;

    for (let i = 0; i < arr.length ; i++){
    if (arr[i]> max){
        max = arr[i];
    }

    }
    return max;
}

maxNumber = findMaxNumber(candles);

function countMaxNumber(arr){
    let count = 0;
    for (let i = 0; i < arr.length ; i++){
        if (maxNumber === arr[i]){
            count++;
        }
    
        }
        return count;
}

countMax = countMaxNumber(candles);



console.log(`El numero mas grande es ${maxNumber} y se repite ${countMax} de veces`);

//la idea es hacer dos variables, un maximo y un countMax, 

// const maxNumber = Math.max(...candles);

// for (let i = 0; i < candles.length; i++){
    
    
//     if (candles[i] === maxNumber){
//         count++
//     } 
    
// }

// console.log(`El numero mas grande es ${maxNumber} y se repite ${count} de veces`);

