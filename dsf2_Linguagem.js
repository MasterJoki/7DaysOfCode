console.clear();

const nome = prompt('Qual o seu nome?');
const idade = prompt('Qual a sua idade?');
const linguagem = prompt('Qual linguagem de programação você está aprendendo?');
const msg = 'Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!';

//alert
alert(msg);

let msg2 = "";
let resp = "";

while(resp != "1" && resp != "2"){
    resp = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO.');
    
    switch (resp){
        case "1": msg2 = 'Muito bom! Continue estudando e você terá muito sucesso.'; break;
        case "2": msg2 = 'Ahh que pena... Tente aprender outras linguagens!'; break;
        default: alert('Informe apenas 1 ou 2'); break;
    }
}

//alert
alert(msg2);
