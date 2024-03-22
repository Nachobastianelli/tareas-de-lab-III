// 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
// Ejemplos:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
// 12]]
// toArray({}) ➞ []
// */

const objetInJavaScript = {
    a : 1,
    b : 2,
    c : 3
};

console.log(objetInJavaScript);

function toArray(obj) {
    return Object.entries(obj);
  }

console.log(toArray(objetInJavaScript));