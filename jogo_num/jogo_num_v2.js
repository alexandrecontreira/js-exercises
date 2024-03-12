let numSec = parseInt(Math.random() * 10 + 1);
let numDig = 0;
while (numSec != numDig) {
    numDig = prompt('Digite um numero entre 1 e 10:');

    prompt('Que pena, tente novamente!')

}
if (numSec === numDig) {
    prompt('Parabens você acertou!')
}




