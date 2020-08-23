character = JSON.parse(localStorage.getItem("character"));

if(character.status.level == 3){
    character.status.level++;
} else{
    alert("Aconteceu um Bug");
    window.location.href = "character.html";
}

function loadTalent(){
    let healthAdd = document.querySelector("#health");
    let talentName = document.querySelector("#talentName");
    let talent = document.querySelector("#talent");
    switch(character.ancestry){
        case "human":
            healthAdd.innerHTML += "5 na sua saúde.";
            character.status.health += 5;
            talentName.innerHTML += "Determinado";
            talent.innerHTML += "Determinado: Quando obtém um 1 na jogada de um dado de uma dádiva, o jogador pode jogar novamente o dado e optar pelo novo número.";
            break;
        case "dwarf":
            healthAdd.innerHTML += "6 na sua saúde.";
            character.status.health += 6;
            talentName.innerHTML += "Sacudir a Poeira";
            talent.innerHTML += "Sacudir a Poeira: O anão pode utilizar uma ação para curar uma quantidade de dano igual à sua taxa de cura e remover uma das seguintes aflições: fatigado, debilitado ou envenenado. Uma vez que utilizou este talento, ele não pode mais ser utilizado até que tenha completado um descanso.";
            break;
        case "clockwork":
            healthAdd.innerHTML += "5 na sua saúde.";
            character.status.health += 5;
            talentName.innerHTML += "Acelerar as Engrenagens";
            talent.innerHTML += "Acelerar as Engrenagens: O autômato pode aumentar em 1 o número de ações que pode utilizar em um turno. Quando o turno termina, o jogador joga 1d6. Se o resultado for um número ímpar, o autômato se torna um objeto no fim do turno.";
            break;
        case "changeling":
            healthAdd.innerHTML += "4 na sua saúde.";
            character.status.health += 4;
            talentName.innerHTML += "Vantagem do Doppelganger";
            talent.innerHTML += "Vantagem do Doppelganger: O jogador pode utilizar uma ação desencadeada em seu turno para utilizar Roubar Identidade. Desta maneira, suas jogadas de ataque contra o alvo de Roubar Identidade são feitas com 1 dádiva enquanto está com a aparência daquela criatura.";
            break;
        case "goblin":
            healthAdd.innerHTML += "4 na sua saúde.";
            character.status.health += 4;
            talentName.innerHTML += "Saltar para Longe";
            talent.innerHTML += "Saltar para Longe: Quando uma criatura, que o goblin pode ver, fracassa em uma jogada de ataque contra a Defesa ou Agilidade do goblin, ele pode utilizar uma ação desencadeada para fugir";
            break;
        case "orc":
            healthAdd.innerHTML += "6 na sua saúde.";
            character.status.health += 6;
            talentName.innerHTML += "Fúria Crescente";
            talent.innerHTML += "Fúria Crescente: Quando o orc sofre dano, ele faz seu próximo ataque antes do fim da próxima rodada com 1 dádiva.";
            break;
        case "yerath":
            healthAdd.innerHTML += "4 na sua saúde.";
            character.status.health += 4;
            talentName.innerHTML += "Asas Ágeis";
            talent.innerHTML += "Asas Ágeis: Você pode usar uma ação desencadeada no seu turno para usar Voar.";
            break;    
    }
}

function nextPage(){
    let choice = document.querySelector("#select");
    if(choice == "magic"){
        localStorage.setItem("character", JSON.stringify(character));
        localStorage.setItem("magic", "Você escolheu pegar uma magia em vez do talento de nível 4. Escolha sua magia");
        window.location.href = "spells.html";
    } else{
        character.level4talent = true;
        localStorage.setItem("character", JSON.stringify(character));
        window.location.href = "character.html";
    }
}
