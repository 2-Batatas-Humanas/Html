character = JSON.parse(localStorage.getItem("character"));
if(character.status.level == 5){
    character.status.level++;
} else{
    alert("Aconteceu um erro");
    window.location.href = "character.html";
}

magicIsMight = false;

window.onload = () => {
    let div = document.querySelector("#info")
    let previousExpertPath = null;
    let expertPath = null;
    switch(character.expertPath.type){
        case "Clérigo":
            previousExpertPath = new Clerigo("t", 3);
            expertPath = new Clerigo("t", character.status.level);
            break;
        case "Druida":
            previousExpertPath = new Druida("t", 3);
            expertPath = new Druida("t", character.status.level);
            break;
        case "Oráculo":
            previousExpertPath = new Oraculo("t", 3);
            expertPath = new Oraculo("t", character.status.level);
            break;
        case "Paladino":
            previousExpertPath = new Paladino("t", 3);
            expertPath = new Paladino("t", character.status.level);
            break;
        case "Artífice":
            previousExpertPath = new Artifice("t", 3);
            expertPath = new Artifice("t", character.status.level);
            break;
        case "Bruxa":
            previousExpertPath = new Bruxa("t", 3);
            expertPath = new Bruxa("t", character.status.level);
            break;
        case "Feiticeiro":
            previousExpertPath = new Feiticeiro("t", 3);
            expertPath = new Feiticeiro("t", character.status.level);
            break;
        case "Mago":
            previousExpertPath = new Mago("t", 3);
            expertPath = new Mago("t", character.status.level);
            break;
        case "Assassino":
            previousExpertPath = new Assassino("t", 3);
            expertPath = new Assassino("t", character.status.level);
            break;
        case "Batedor":
            previousExpertPath = new Batedor("t", 3);
            expertPath = new Batedor("t", character.status.level);
            break;
        case "Ladrão":
            previousExpertPath = new Ladrao("t", 3, {thieveryTalent3: {t1: " ", t2: " "}});
            expertPath = new Ladrao("t", character.status.level, {thieveryTalent3: {t1: " ", t2: " "}});
            break;
        case "Warlock":
            previousExpertPath = new Warlock("t", 3);
            expertPath = new Warlock("t", character.status.level);
            break;
        case "Atador de Feitiços":
            previousExpertPath = new AtadorDeFeiticos("t", 3);
            expertPath = new AtadorDeFeiticos("t", character.status.level);
            break;
        case "Combatente":
            previousExpertPath = new Combatente("t", 3, {talent: " "});
            expertPath = new Combatente("t", character.status.level, {talent: " "});
            break;
        case "Furioso":
            previousExpertPath = new Furioso("t", 3);
            expertPath = new Furioso("t", character.status.level);
            break;
        case "Patrulheiro":
            previousExpertPath = new Patrulheiro("t", 3);
            expertPath = new Patrulheiro("t", character.status.level);
            break;
        case "Highlander":
            previousExpertPath = new Highlander("t", 3);
            expertPath = new Highlander("t", character.status.level);
            break;
        case "Silhouette":
            previousExpertPath = new Silhouette("t", 3);
            expertPath = new Silhouette("t", character.status.level);
            break;
        case "SummerChild":
            previousExpertPath = new SummerChild("t", 3);
            expertPath = new SummerChild("t", character.status.level);
            break;
        case "Soulthief":
            previousExpertPath = new Soulthief("t", 3);
            expertPath = new Soulthief("t", character.status.level);
            break;
    }
    let adds = expertPath.level6();
    if(adds.health){
        let health = document.createElement("p");
        health.innerHTML = "O seu personagem aumenta em " + adds.health + " em saúde.";
        character.status.health += adds.health;
        div.appendChild(health);
    }
    if(adds.power){
        let power = document.createElement("p");
        power.innerHTML = "O seu personagem aumenta em " + adds.power + " em poder.";
        character.status.power += adds.power;
        div.appendChild(power);
    }
    if(adds.perception){
        let perception = document.createElement("p");
        perception.innerHTML = "O seu personagem aumenta em " + adds.perception + " em percepção.";
        character.status.perception += adds.perception;
        div.appendChild(perception);
    }
    if(adds.speed){
        let speed = document.createElement("p");
        speed.innerHTML = "O seu personagem aumenta em " + adds.speed + " em deslocamento.";
        character.status.speed += adds.speed;
        div.appendChild(speed);
    }
    if(adds.magic){
        localStorage.setItem("magic", adds.magic);
        magicIsMight = true;
    }
    Object.keys(expertPath.talents).forEach(function(talent){
        if(!talent in previousExpertPath.talents){
            let tal = document.createElement("p");
            tal.innerHTML = "O seu personagem recebeu o seguinte talento: " + talent + " - " + expertPath.talents[talent];
            div.appendChild(tal);
        }
    });
    if(expertPath instanceof Ladrao){
        let id = "info";
        let talents = ["escapeArtist", "hideInShadows", "keenSenses", "moveSilently", "openLocks", "pickPockets", "scaleWalls", "trapSense"];
        let nameTalents = ["Artista da Fuga", "Esconder-se nas Sombras", "Sentidos Aguçados", "Mover-se Silenciosamente", "Abrir Fechaduras", "Punguista", "Escalar Paredes", "Sentir Armadilhas"];
        nameTalents.splice(talents.indexOf(character.expertPath.choices.thieveryTalent3.t1), 1);
        talents.splice(talents.indexOf(character.expertPath.choices.thieveryTalent3.t1), 1);
        nameTalents.splice(talents.indexOf(character.expertPath.choices.thieveryTalent3.t2), 1);
        talents.splice(talents.indexOf(character.expertPath.choices.thieveryTalent3.t2), 1);
        addImageToDiv(id, "Images/talentosLadrão.png", 250);
        addBrToDiv(id);
        createOptionsInput(id, "Escolha um dos talentos de Ladrão acima(os que não estão na lista você já escolheu previamente): ", "thieveryTalent6", nameTalents, talents);
        addBrToDiv(id);
    }
}

function nextPage(){
    if(character.expertPath.type == "Ladrão"){
        character.expertPath.choices.thieveryTalent6 = document.querySelector("#thieveryTalent6").value;
    }
    localStorage.setItem("character", JSON.stringify(character));
    if(magicIsMight){
        window.location.href = "spells.html";
    } else {
        window.location.href = "character.html";
    }
}