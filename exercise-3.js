let i = 0;
let soma = 0;
 while (i <= 3){
     let nota = parseFloat(prompt('digite a nota:').replace(',','.'));
     soma = soma + nota;
     i++;
}
 let media = soma/4
console.log(media.toFixed(1).replace(',','.'))


// let i = 0;
// let soma = 0;
//  while (i <= 3){
//      let nota = parseFloat(prompt('digite a nota:').replace(',','.'));
//      soma = soma + nota;
//      i++;
// }
//  let media = soma/4
//  console.log(media.toFixed(1).replace(',','.'))
//  if(media >= 6.0){
//      prompt("Parabens,você está aprovado")
//  }else{
//      prompt("Que pena!Você está reprovado")
//  }
// var nota = 14013;

// function insertDot(a){
//   nota = nota.toString(); // Transforma em String 
//   var beforeDot = nota.substring(0, nota.length-2); // Captura do primeiro ao penúltimo caractere
//   var afterDot = nota.substring(nota.length-2, nota.length); // Captura o penúltimo ao último caractere
//   return parseFloat(beforeDot + "." + afterDot); // retorna um NÚMERO com com o ponto inserido
// }

// document.body.innerHTML += insertDot(nota);
// document.body.innerHTML += "<br>";
// document.body.innerHTML += insertDot(nota) * 2;