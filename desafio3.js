console.clear();

var msgErro = 'Insira apenas 1 ou 2';
var area = "";
var linguagem ="";
var resp = "";
var msg = "";
var resp2 = "";
var tecnologias = [];
let msg2 = "";

while (area != 1 && area != 2){
    area = prompt('Qual a area que você deseja seguir? Digite 1 para Front-End ou 2 para Back-End.');
    if(area != 1 && area != 2)
        alert(msgErro);
}

if (area == 1){
    while (linguagem != 1 && linguagem != 2){
        linguagem = prompt('Qual a linguagem você deseja seguir? Digite 1 para React ou 2 para Vue.');
        if(linguagem != 1 && linguagem != 2)
            alert(msgErro);
    }

    if (linguagem == 1)
        linguagem = "React"
    else
        linguagem = "Vue"
}
else{
    while (linguagem != 1 && linguagem != 2){
        linguagem = prompt('Qual a linguagem você deseja seguir? Digite 1 para C# ou 2 para Java.');
        if(linguagem != 1 && linguagem != 2)
            alert(msgErro);
    }

    if (linguagem == 1)
        linguagem = "C#"
    else
        linguagem = "Java"
}

tecnologias.push(linguagem);

if (area == 1)
    area = "Front-End"
else
    area = "Back-End"

while (resp != 1 && resp != 2){
    resp = prompt('Como você deseja continuar no futuro? Digite 1 caso deseje se especializar em ' + area + ' ou digite 2 caso deseje se tornar um Fullstack.');
    if(resp != 1 && resp != 2)
        alert(msgErro);
}

if (resp == 1) 
    msg = 'Que legal! Bons estudos na área do ' + area + '!';
else 
    msg = 'Que legal! Espero que consiga se dar bem no Fullstack!';

alert(msg);

while(resp2 == 1 || resp2 == 0){
    resp2 = 0;

    while (resp2 != 1 && resp2 != 2){
        resp2 = prompt('Você gostaria de se especializar em mais alguma tecnologia? Digite 1 para Sim ou 2 para Não. ');
        if(resp2 != 1 && resp2 != 2)
            alert(msgErro);
    }

    if (resp2 == 1){
        let tecnologia = prompt('Qual outra tecnologia você gostaria de se especializar?');
        tecnologias.push(tecnologia);
    }
}

msg2 = 'As tecnologias escolhidas foram: ';

for (tecnoliga of tecnologias) 
    msg2 += tecnoliga + ', ';

msg2 = msg2.substring(0, msg2.length - 2) + '. ';

alert(msg2);