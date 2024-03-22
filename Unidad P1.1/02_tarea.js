
// 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
// personas mayores de 20 años y menores de 29.

const users = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
    ];

//I make a function other than the arrow function because i dont know how to write the code in one line 

function filter(edades){
    if (edades >= 20 && edades <= 29){
        return edades
    }
};

const filtedByAge = users.filter((user) => filter(user.age));

console.log(filtedByAge);
