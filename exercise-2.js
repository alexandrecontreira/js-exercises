// Escreva uma função JavaScript para verificar se uma 'entrada' é um array ou não.
// Dados de teste :
// console.log(is_array(true));
// console.log(is_array({}));
// console.log(is_array(5));
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// deve retornar
// falso
// verdadeiro
//link: https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR
// //versao-1
// function is_array(x) {
//
//     if (typeof (x) === "number") {
//         return true
//     }
//     if (typeof (x) === "string") {
//         return true
//     }
// }
//     console.log(is_array(true));
//     console.log(is_array({}));
//     console.log(is_array(5));
//     console.log(is_array('w3resource'));
//     console.log(is_array([1, 2, 4, 0]));

// versao-2
function is_array(x) {
return Array.isArray(x);

}

console.log(is_array(true));
console.log(is_array({}));
console.log(is_array(5));
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


