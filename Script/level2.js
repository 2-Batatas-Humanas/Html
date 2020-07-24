character = JSON.parse(localStorage.getItem("character"));

character = getCharacter(character);

if(character.level != 1){
    alert("Aconteceu um bug");
    window.location.href = "character.html";
}

character.level++;

function getLevel2(){
    let id = "mainDiv"
    switch(character.novicePath.pathName){
        case "Guerreiro":
            addPToDiv(id, "Você não precisa fazer nada. Pode apertar em próximo para voltar à página do seu personagem.");
            break;
        case "Ladino":
            createOptionsInput(id, "Escolha um talento de ladino", "rogueTalent",
            ["Ataque Furtivo: Uma vez por rodada, quando o ladino ataca com uma arma básica ou rápida e faz a jogada de ataque com ao menos 1 ", "Magia: O ladino aumenta seu Poder em 1 e descobre uma tradição. Em seguida, ele faz duas escolhas: descobrir uma tradição ou aprender uma magia, para cada escolha. Caso escolha esse talento novamente, o ladino aumenta seu Poder em 1 e, descobre uma nova tradição ou aprende uma magia.", "Escaramuça: O ladino pode utilizar uma ação para se mover até metade de seu Deslocamento. Esse movimento não desencadeia ataques livres. Durante seu movimento, o ladino pode executar um ataque. A jogada de ataque é feita com 1 perdição, mas o ataque causa 1d6 de dano adicional. Caso escolha esse talento uma segunda vez, o ladino pode se mover até seu Deslocamento completo ao invés da metade.", "Subterfúgio: O personagem pode utilizar uma ação para fazer uma jogada de ataque de Intelecto contra o Intelecto de uma criatura, a curta distância, que possa ouvi-lo e entender o que diz. Caso seja bem-sucedido, o alvo fica encantado por 1 rodada ou até que o ataque. Caso fracasse, o alvo fica imune ao Subterfúgio do ladino até que complete um descanso. Caso escolha esse talento uma segunda vez, o ladino faz as jogadas de ataque com 1 dádiva e pode afetar criaturas que não entendem o que ele diz.", "Ameaças: O ladino pode utilizar uma ação desencadeada em seu turno para fazer uma jogada de ataque de Intelecto contra a Vontade de uma criatura alvo, a curta distância, que possa ouvi-lo e vê-lo. Caso seja bem-sucedido, o alvo fica assustado por 1 rodada. Caso fracasse, o alvo fica imune a Ameaças do ladino até que complete um descanso. Caso escolha esse talento novamente, os ataques do ladino com armas causam 1d6 de dano adicional a alvos assustados dessa maneira."],
            ["backStab", "magic", "skirmish", "subterfuge", "threats"]);
            break;
        case "Mágico":
        case "Sacerdote":
            addPToDiv(id, "Você tem que escolher magias. Clique em próximo.");
            break;
    }
}

function nextPage(){
    let magicChoices = false;
    switch(character.novicePath.pathName){
        case "Guerreiro":
            character.health += 5;
            break;
        case "Ladino":
            character.health += 3;
            character.novicePath.choices = {
                rogueTalent2: document.querySelector("#rogueTalent").value
            }
            if(character.novicePath.choices.rogueTalent2 == "magic"){
                character.power += 1;
                magicChoices = 3;
            }
            break;
        case "Mágico":
            character.health += 2;
            magicChoices = 2;
            break;
        case "Sacerdote":
            character.health += 4;
            magicChoices = 2;
            break;
    }
    character = getCharacterObject(character);
    localStorage.setItem("character", JSON.stringify(character));
    if(magicChoices){
        localStorage.setItem("magic", "" + magicChoices);
        window.location.href = "spells.html";
    } else{
        window.location.href = "character.html";
    }
}