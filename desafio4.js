console.clear();

const numero = Math.floor(Math.random() * 11);
let contadorChances = 3;
let msg = 'Advinhe um número de 0 a 10';
let msgErro = 'Informe apenas números de 0 a 10';

console.log(numero);

while (contadorChances != 0){
    let resp = prompt(msg);
    while(isNaN(resp) || resp > 10 || resp < 0 || resp == ''){
        alert(msgErro);
        resp = prompt(msg);
    }
    
    if (resp == numero){
        alert('Parabéns, você acertou o número! O número era: ' + numero); 
        break;
    }
    else{
        contadorChances--;
        if (contadorChances > 0)
            alert('Infelizmente não é esse o número, tente novamente. Você ainda tem: ' + contadorChances + ' chances');
        else{
            alert('Infelimente suas chances acabaram, não foi dessa vez! O número era: ' + numero + '. ')
            break;
        }
    }
}