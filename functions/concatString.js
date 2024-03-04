//exercicio-1
function concatString() {
    let txt = '';
    for (let i = 0; i < arguments.length; i++) {
        let a = arguments[i];
        if (i === 0) {
            txt = txt + a
        } else {
            txt = txt + ' ' + a
        }
    }
    return txt;
}

console.log(concatString('alex', 'souza'));
console.log(concatString('rua', 'numero', 'bairro', 'cep', 'estado'));
