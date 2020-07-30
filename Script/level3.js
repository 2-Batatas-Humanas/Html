character = JSON.parse(localStorage.getItem("character"));

if(character.status.level != 2){
    alert("Aconteceu um Bug");
    window.location.href = "character.html";
}

character.status.level++;

additions = {
    health: 0,
    perception: 0,
    power: 0,
    speed: 0
}

function setExpertPath(){
    let select = document.querySelector("#expertPath");
    let expertPath;
    switch(select.value){
        case "Clérigo":
            expertPath = new Clerigo("t", character.status.level);
            break;
        case "Druida":
            expertPath = new Druida("t", character.status.level);
            break;
        case "Oráculo":
            expertPath = new Oraculo("t", character.status.level);
            break;
        case "Paladino":
            expertPath = new Paladino("t", character.status.level);
            break;
        case "Artífice":
            expertPath = new Artifice("t", character.status.level);
            break;
        case "Bruxa":
            expertPath = new Bruxa("t", character.status.level);
            break;
        case "Feiticeiro":
            expertPath = new Feiticeiro("t", character.status.level);
            break;
        case "Mago":
            expertPath = new Mago("t", character.status.level);
            break;
        case "Assassino":
            expertPath = new Assassino("t", character.status.level);
            break;
        case "Batedor":
            expertPath = new Batedor("t", character.status.level);
            break;
        case "Ladrão":
            expertPath = new Ladrao("t", character.status.level, {thieveryTalent3: {t1: " ", t2: " "}});
            break;
        case "Warlock":
            expertPath = new Warlock("t", character.status.level);
            break;
        case "Atador de Feitiços":
            expertPath = new AtadorDeFeiticos("t", character.status.level);
            break;
        case "Combatente":
            expertPath = new Combatente("t", character.status.level, {talent: " "});
            break;
        case "Furioso":
            expertPath = new Furioso("t", character.status.level);
            break;
        case "Patrulheiro":
            expertPath = new Patrulheiro("t", character.status.level);
            break;
        case "Highlander":
            expertPath = new Highlander("t", character.status.level);
            break;
        case "Silhouette":
            expertPath = new Silhouette("t", character.status.level);
            break;
        case "SummerChild":
            expertPath = new SummerChild("t", character.status.level);
            break;
        case "Soulthief":
            expertPath = new Soulthief("t", character.status.level);
            break;
    }
    getSpecifications(expertPath.level3(), select.value);
}

function getSpecifications(adds, path){
    if(localStorage.getItem("magic")){
        localStorage.removeItem("magic");
    }
    let id = "expertDiv";
    emptyDiv(id);
    addPToDiv(id, path);
    // For all Expert Paths:
    createOptionsInput(id, "Escolha um atributo para aumentar em 1: ", "attribute1",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Escolha um <b>outro</b> atributo para aumentar em 1: ", "attribute2",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);

    createTextareaInput(id, "Coloque o treinamento de especialista do seu personagem: ", "training");

    // For a specific Path:
    if(adds.health){
        additions.health = adds.health;
        addPToDiv(id, "Sua saúde aumentou em " + adds.health);
    }
    if(adds.power){
        additions.power = adds.power;
        addPToDiv(id, "Seu poder aumentou em " + adds.power);
    }
    if(adds.perception){
        additions.perception = adds.perception;
        addPToDiv(id, "Seu poder aumentou em " + adds.perception);
    }
    if(adds.speed){
        additions.speed = adds.speed;
        addPToDiv(id, "Seu poder aumentou em " + adds.speed);
    }

    if(path == "Ladrão"){
        addImageToDiv(id, "Images/talentosLadrão.png", 250);
        addBrToDiv(id);
        createOptionsInput(id, "Escolha um dos talentos de Ladrão acima: ", "thieveryTalent1",
        ["Artista da Fuga", "Esconder-se nas Sombras", "Sentidos Aguçados", "Mover-se Silenciosamente", "Abrir Fechaduras", "Punguista", "Escalar Paredes", "Sentir Armadilhas"],
        ["escapeArtist", "hideInShadows", "keenSenses", "moveSilently", "openLocks", "pickPockets", "scaleWalls", "trapSense"]);
        addBrToDiv(id, 1);
        createOptionsInput(id, "Escolha <b>outro</b> dos talentos de Ladrão acima: ", "thieveryTalent2",
        ["Artista da Fuga", "Esconder-se nas Sombras", "Sentidos Aguçados", "Mover-se Silenciosamente", "Abrir Fechaduras", "Punguista", "Escalar Paredes", "Sentir Armadilhas"],
        ["escapeArtist", "hideInShadows", "keenSenses", "moveSilently", "openLocks", "pickPockets", "scaleWalls", "trapSense"]);
        addBrToDiv(id);
    }

    if(path == "Combatente"){
        addImageToDiv(id, "Images/talentosCombatente.png", 250);
        addBrToDiv(id);
        createOptionsInput(id, "Escolha um dos talentos de Combatente acima: ", "combatenteTalent",
        ["Especialização em Defesa", "Lutar com Duas Armas", "Lutar com Qualquer Coisa", "Ataque Poderoso", "Ataque Preciso", "Bater com Escudo", "Recarga Rápida", "Disparo Rápido"],
        ["defenseEspecialization", "fightWithTwoWeapons", "haftAttack", "powerfulAttack", "preciseAttack", "shieldBash", "swiftReload", "swiftShot"]);
        addBrToDiv(id);
    }

    if(adds.spell){
        character.traditions = character.traditions || {};
        character.traditions["Especial"] = character.traditions["Especial"] || [];
        if(!character.traditions["Especial"].includes(adds.spell)){
            character.traditions["Especial"].push(adds.spell);
        }
        addPToDiv(id, "Você recebeu a magia " + adds.spell + ". Ela está na parte especial na aba tradições.");
    }

    if(adds.magic){
        localStorage.setItem("magic", adds.magic);
    }

    if(adds.choice){
        let options = [];
        let optionsValues = [];
        if(adds.choice.language == "new"){
            options.push("Adicionar um novo idioma");
            optionsValues.push("add new language");
        } else {
            options.push("Adicionar o idioma Alto Arcaico");
            optionsValues.push("add language Alto Arcaico");
        }
        switch(adds.choice.profession){
            case "any":
                options.push("Adicionar uma profissão");
                optionsValues.push("Add profession");
                break;
            case "academic":
                options.push("Adicionar uma profissão do tipo acadêmica");
                optionsValues.push("Add academic profession");
                break;
            case "religious":
                options.push("Adicionar uma profissão do tipo religiosa");
                optionsValues.push("Add religious profession");
                break;
            case "wilderness":
                options.push("Adicionar uma profissão do tipo selvagem");
                optionsValues.push("Add wilderness profession");
                break;
            case "common":
                options.push("Adicionar uma profissão do tipo comum");
                optionsValues.push("Add common profession");
                break;
            case "criminal":
                options.push("Adicionar uma profissão do tipo criminosa");
                optionsValues.push("Add criminal profession");
                break;
            case "rastreador":
                options.push("Adicionar a profissão rastreador");
                optionsValues.push("Add rastreador profession");
                break;
            case "artist":
                options.push("Adicionar a profissão artista");
                optionsValues.push("Add artist profession");
                break;
        }
        if(adds.choice.profession2){
            switch(adds.choice.profession2){
                case "any":
                    options.push("Adicionar uma profissão");
                    optionsValues.push("Add profession");
                    break;
                case "academic":
                    options.push("Adicionar uma profissão do tipo acadêmica");
                    optionsValues.push("Add academic profession");
                    break;
                case "religious":
                    options.push("Adicionar uma profissão do tipo religiosa");
                    optionsValues.push("Add religious profession");
                    break;
                case "wilderness":
                    options.push("Adicionar uma profissão do tipo selvagem");
                    optionsValues.push("Add wilderness profession");
                    break;
                case "common":
                    options.push("Adicionar uma profissão do tipo comum");
                    optionsValues.push("Add common profession");
                    break;
                case "criminal":
                    options.push("Adicionar uma profissão do tipo criminosa");
                    optionsValues.push("Add criminal profession");
                    break;
                case "rastreador":
                    options.push("Adicionar a profissão rastreador");
                    optionsValues.push("Add rastreador profession");
                    break;
                case "artist":
                    options.push("Adicionar a profissão artista");
                    optionsValues.push("Add artist profession");
                    break;
            }
        }
        if(adds.choice.profession3){
            switch(adds.choice.profession3){
                case "any":
                    options.push("Adicionar uma profissão");
                    optionsValues.push("Add profession");
                    break;
                case "academic":
                    options.push("Adicionar uma profissão do tipo acadêmica");
                    optionsValues.push("Add academic profession");
                    break;
                case "religious":
                    options.push("Adicionar uma profissão do tipo religiosa");
                    optionsValues.push("Add religious profession");
                    break;
                case "wilderness":
                    options.push("Adicionar uma profissão do tipo selvagem");
                    optionsValues.push("Add wilderness profession");
                    break;
                case "common":
                    options.push("Adicionar uma profissão do tipo comum");
                    optionsValues.push("Add common profession");
                    break;
                case "criminal":
                    options.push("Adicionar uma profissão do tipo criminosa");
                    optionsValues.push("Add criminal profession");
                    break;
                case "rastreador":
                    options.push("Adicionar a profissão rastreador");
                    optionsValues.push("Add rastreador profession");
                    break;
                case "artist":
                    options.push("Adicionar a profissão artista");
                    optionsValues.push("Add artist profession");
                    break;
            }
        }
        createOptionsInput(id, "Escolha uma das opções: ", "langProfChoice", options, optionsValues);
    }
}

function nextPage(){
    let training = document.querySelector("#training");
    if(!training){
        alert("Aperte Ok para continuar");
        return
    }
    if(!training.value){
        alert("Coloque um treinamento de especialista");
        return
    }
    let att1 = document.querySelector("#attribute1").value;
    let att2 = document.querySelector("#attribute2").value;
    if(att1 == att2){
        alert("Coloque atributos diferentes");
        return
    }
    let expertPath = document.querySelector("#expertPath").value;
    character.expertPath = {};
    character.expertPath.type = expertPath;
    if(expertPath == "Ladrão"){
        let talent1 = document.querySelector("#thieveryTalent1").value;
        let talent2 = document.querySelector("#thieveryTalent2").value;
        if(talent1 == talent2){
            alert("Escolha talentos de ladrão diferentes");
            return
        }
        character.expertPath.choices = {
            thieveryTalent3: {
                t1: talent1,
                t2: talent2
            }
        }
    }
    if(expertPath == "Combatente"){
        let talent = document.querySelector("#combatenteTalent").value;
        character.expertPath.choices = {
            talent: talent
        }
    }
    character.expertPath.training = training.value;
    character.status.health += additions.health;
    character.status.power += additions.power;
    character.status.perception += additions.perception;
    character.status.speed += additions.speed;
    switch(att1){
        case "strength":
            character.status.strength++;
            character.status.health++;
            break;
        case "agility":
            character.status.agility++;
            if(character.ancestry != "clockwork" || character.ancestry != "yerath"){
                character.status.defense++;
            }
            break;
        case "intellect":
            character.status.intellect++;
            character.status.perception++;
            break;
        case "will":
            character.status.will++;
            break;
    }
    switch(att2){
        case "strength":
            character.status.strength++;
            character.status.health++;
            break;
        case "agility":
            character.status.agility++;
            if(character.ancestry != "clockwork" || character.ancestry != "yerath"){
                character.status.defense++;
            }
            break;
        case "intellect":
            character.status.intellect++;
            character.status.perception++;
            break;
        case "will":
            character.status.will++;
            break;
    }
    localStorage.setItem("character", JSON.stringify(character));
    let langProfChoice = document.querySelector("#langProfChoice");
    if(langProfChoice){
        if(langProfChoice.value == "add language Alto Arcaico"){
            character.languages["Alto Arcaico"] = {
                speakable: true,
                readable: false,
                writable: false
            }
        } else if(langProfChoice.value == "Add rastreador profession"){
            character.professions.push("Rastreador");
        } else if(langProfChoice.value == "Add artist profession"){
            character.professions.push("Artista");
        }
        else{
            localStorage.setItem("choice", langProfChoice.value);
            window.location.href = "auxiliar.html";
            return
        }
    }
    let magic = localStorage.getItem("magic");
    if(magic){
        window.location.href = "spells.html";
        return
    }
    window.location.href = "character.html";
}
