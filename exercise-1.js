let inputArray = [3, 9, -2, -5, 7, 3];
//encontra a posição par no array
let par = 0;
//encontra a posição impar no array
let impar = 0;
//produto par * impar
let prod = 0;
a = 0;
b = 0;
let prodArray =[

];
for(i= 0; i < inputArray.length; i++){
    a = i*2;
    b = (i*2)+1;

    if(( a < inputArray.length) && ( b < inputArray.length)) {
        par = inputArray[a];
        impar = inputArray[b];
        prod = (par * impar);
        prodArray[i] = prod;
        //console.log(i,'par', a , 'impar', b) ;
        // console.log('posição:', i, '=', [par], '*', [impar], '=', prodArray[i])

    }

}
console.log(Math.max(...prodArray))