character = JSON.parse(localStorage.getItem("character"));

if(character.status.level == 4){
    character.status.level++;
} else{
    alert("Aconteceu um Bug");
    window.location.href = "character.html";
}

window.onload = () => {
    let div = document.querySelector("#adds");

    let health = document.createElement("p");
    health.innerHTML = "O seu personagem aumenta em ";
    let power;
    let talent1 = document.createElement("p");
    talent1.innerHTML = "O seu personagem ganha o seguinte talento: ";
    switch(character.novicePath.type){
        case "warrior":
            health.innerHTML += "5 em saúde";
            character.status.health += 5;
            let defense = document.createElement("p");
            defense.innerHTML = "O seu personagem aumenta 1 em defesa";
            character.status.defense++;
            talent1.innerHTML += "Especialização em Combate - Quando o guerreiro utiliza uma ação para atacar com uma arma, ele pode escolher entre causar 1d6 de dano adicional neste ataque ou fazer outro ataque contra um alvo diferente a qualquer momento antes do fim do turno."
            div.appendChild(health);
            div.appendChild(defense);
            div.appendChild(talent1);
            break;
        case "rogue":
            health.innerHTML += "3 em saúde";
            character.status.health += 3;
            talent1.innerHTML += "Truques Sujos - Os ataques do ladino causam 1d6 de dano adicional quando faz uma jogada de ataque com 1 dádiva."
            let talent2 = document.createElement("p");
            talent2.innerHTML += "O seu personagem também ganha o seguinte talento: Astúcia Ladina - O ladino pode utilizar Trapaça duas vezes por rodada."
            div.appendChild(health);
            div.appendChild(talent1);
            div.appendChild(talent2);
            break;
        case "magician":
            health.innerHTML += "2 em saúde";
            character.status.health += 2;
            power = document.createElement("p");
            power.innerHTML = "O seu personagem aumenta 1 em poder";
            character.status.power++;
            talent1.innerHTML += "Contramágica - Quando uma criatura que o personagem pode ver o ataca com uma magia, ele pode utilizar uma ação desencadeada para confrontá-la. A criatura que desencadeou o efeito faz uma jogada de ataque com 1 perdição e o personagem faz uma jogada de desafio para resistir com 1 dádiva.";
            localStorage.setItem("magic", "O mágico descobre uma tradição ou aprende uma magia.");
            div.appendChild(health);
            div.appendChild(power);
            div.appendChild(talent1);
            break;
        case "priest":
            health.innerHTML += "4 em saúde";
            character.status.health += 4;
            power = document.createElement("p");
            power.innerHTML = "O seu personagem aumenta 1 em poder";
            character.status.power++;
            talent1.innerHTML += "Golpe Divino - Quando o sacerdote utilizar Oração para fornecer a uma criatura 1 dádiva em uma jogada de ataque, o ataque da criatura causa 1d6 de dano adicional."
            localStorage.setItem("magic", "O sacerdote aprende uma magia de suas tradições.");
            div.appendChild(health);
            div.appendChild(power);
            div.appendChild(talent1);
            break;
    }
}

function nextPage(){
    localStorage.setItem("character", JSON.stringify(character));
    switch(character.novicePath.type){
        case "magician":
        case "priest":
            window.location.href = "spells.html";
            break;
        default:
            window.location.href = "character.html";
    }
}