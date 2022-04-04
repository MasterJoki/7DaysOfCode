console.clear();

var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var resp = '';
var comida = '';
var resp2 = '';
var msg = '';

do{
    do{
        resp = prompt('Deseja adicionar uma comida na sua lista de compras? Responda com sim ou não.').toLowerCase();
        
        if(resp != 'sim' && resp != 'não' && resp != 'nao')
            alert('Por favor responda apenas com sim ou não.');

    }while(resp != 'sim' && resp != 'não' && resp != 'nao')

    if(resp == 'sim'){
        do{
            comida = prompt('Qual comida você deseja inserir? ');

            if(comida.trim() == '')
                alert('Por favor indique um valor válido para a comida.');

        }while(comida.trim() == '')

        do{ 
            resp2 = prompt('Onde deseja inserir essa comida? Opções disponíveis: frutas, laticinios, congelados e doces').toLowerCase();

            if(resp2 != 'frutas' && resp2 != 'fruta' && resp2 != 'laticinios' && resp2 != 'laticinio' && resp2 != 'laticínios' && resp2 != 'laticínio' && resp2 != 'congelados' && resp2 != 'congelado' && resp2 != 'doces' && resp2 != 'doce')
                alert('Escolha apenas uma das opções listadas.');

        }while(resp2 != 'frutas' && resp2 != 'fruta' && resp2 != 'laticinios' && resp2 != 'laticinio' && resp2 != 'laticínios' && resp2 != 'laticínio' && resp2 != 'congelados' && resp2 != 'congelado' && resp2 != 'doces' && resp2 != 'doce')

        switch (resp2){
            case 'frutas': frutas.push(comida); break;
            case 'fruta': frutas.push(comida); break; 

            case 'laticionios': laticinios.push(comida); break; 
            case 'laticionio': laticinios.push(comida); break;
            case 'laticíonios': laticinios.push(comida); break;
            case 'laticíonio': laticinios.push(comida); break;

            case 'congelados': congelados.push(comida); break; 
            case 'congelado': congelados.push(comida); break; 

            case 'doces': doces.push(comida); break; 
            case 'doce': doces.push(comida); break;
        }
    }
} while (resp == 'sim')

msg = 'Lista de compras: \n     Frutas: ';
for (fruta of frutas) {
    msg += fruta + ', ';
}
msg = msg.substring(0, msg.length - 2) + '. ';

msg += '\n     Laticínios: ';
for (laticinio of laticinios){
    msg += laticinio + ', ';
}
msg = msg.substring(0, msg.length - 2) + '. ';

msg += '\n     Congelados: ';
for (congelado of congelados){
    msg += congelado + ', ';
}
msg = msg.substring(0, msg.length - 2) + '. ';

msg += '\n     Doces: ';
for (doce of doces){
    msg += doce + ', ';
}
msg = msg.substring(0, msg.length - 2) + '. ';

alert(msg);
