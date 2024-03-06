let i = 0;
let soma = 0;
 while (i <= 3){
     let nota = parseFloat(prompt('digite a nota:').replace(',','.'));
     soma = soma + nota;
     i++;
}
 let media = soma/4
console.log(media.toFixed(1).replace(',','.'))