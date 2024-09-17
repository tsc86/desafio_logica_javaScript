/*Crie uma variavel para armazenar o nome e a quabtidade de 
experiência (XP) de um herói, depois utilize uma estrutura 
de decisão pada apresentar alguma das mensagens abaixo:

Se XP for menor do que  1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.0000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

SAIDA

Ao final deve se exibir uma mensagem:
"O Herói de nome #### está no nivel de  ####*/



let nomeHeroi = "Thiago";
let nivelHeroi = 10001;

if (nivelHeroi <= 1000){ 
    console.log("O Herói " + nomeHeroi + " está no nivel de Ferro com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 1000 && nivelHeroi <=2000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Bronze com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 2000 && nivelHeroi <= 5000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Prata com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 5000 && nivelHeroi <= 7000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Ouro com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 7000 && nivelHeroi <= 8000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Platina com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 8000 && nivelHeroi <= 9000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Ascendente com " + nivelHeroi + " pontos." )
    }else if (nivelHeroi > 9000 && nivelHeroi <= 10000){
        console.log("O Herói " + nomeHeroi + " está no nivel de Imortal com " + nivelHeroi + " pontos." )
    }else {
        console.log("O Herói " + nomeHeroi + " está no nivel de Radiante com " + nivelHeroi + " pontos." )
    };

