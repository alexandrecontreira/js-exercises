let soma = 0;

let i = 0;
 while (i < 3){
     let nota = parseFloat(prompt('digite a nota:').replace(',','.'));
     soma += nota;
     i++;
 }
let media = soma/4
console.log(media.toFixed)