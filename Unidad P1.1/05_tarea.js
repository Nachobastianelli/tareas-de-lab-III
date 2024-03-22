// 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la
// falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
// de estudiantes están presentes cuando la clase empieza.
// Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
// que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
// profesor de la clase es un 70%, determinar si la clase se cancela o no.
// Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
// CANCELA.

const asistencias  = [1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let countAttendence = 0;

let missings = 0;


const verifyAttendence = asistencias.forEach(element => {
    if (element <= 0){
        countAttendence++;
    }
});   

missings = asistencias.length - countAttendence;

console.log(`Asistencias: ${countAttendence}\nInasistencias: ${missings}`);

//suponiendo que con un 70% de asistencia se dicta la clase:


let min = (asistencias.length * 70) / 100;

function classIsHeld(){
    if (countAttendence >= Math.round(min)){
        console.log('Se dictan las clases normalmente');
    }else{
        console.log('Debido a las inasistenicas de los compañeros, no se pueden dictar las clases.');
    }
}

console.log(Math.round(min));

classIsHeld()