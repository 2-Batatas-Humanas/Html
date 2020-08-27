character = JSON.parse(localStorage.getItem("character"));

if(character.status.level === 6){
    character.status.level++;
} else{
    alert("Houve um erro");
    window.location.href = "character.html";
}

window.onload = () => {
    changePath("Abjurador");
    changePathExpert("Clérigo");
}

function changePathType(){
    let checkbox = document.querySelector("#changePath");
    let masterDiv = document.querySelector("#masterPathDiv");
    let expertDiv = document.querySelector("#expertPathDiv");
    if(checkbox.checked){
        masterDiv.classList.add("none");
        expertDiv.classList.remove("none");
    } else{
        masterDiv.classList.remove("none");
        expertDiv.classList.add("none");
    }
}

function changePath(path){
    let id = "masterChoicesDiv";
    emptyDiv(id);

    let masterPath;
    switch(path){
        case "Abjurador":
            masterPath = new Abjurador("t", 7);
            break;
        case "Adivinho":
            masterPath = new Adivinho("t", 7);
            break;
        case "Aeromante":
            masterPath = new Aeromante("t", 7);
            break;
        case "Apocaliptista":
            masterPath = new Apocaliptista("t", 7);
            break;
        case "Arcanista":
            masterPath = new Arcanista("t", 7);
            break;
        case "Astromante":
            masterPath = new Astromante("t", 7);
            break;
        case "Bardo":
            masterPath = new Bardo("t", 7);
            break;
        case "Cavaleiro Mago":
            masterPath = new CavaleiroMago("t", 7);
            break;
        case "Cronomante":
            masterPath = new Cronomante("t", 7);
            break;
        case "Curandeiro":
            masterPath = new Curandeiro("t", 7);
            break;
        case "Destruidor":
            masterPath = new Destruidor("t", 7);
            break;
        case "Encantador":
            masterPath = new Encantador("t", 7);
            break;
        case "Erudito":
            masterPath = new Erudito("t", 7);
            break;
        case "Geomante":
            masterPath = new Geomante("t", 7);
            break;
        case "Hidromante":
            masterPath = new Hidromante("t", 7);
            break;
        case "Homem Selvagem":
            masterPath = new HomemSelvagem("t", 7);
            break;
        case "Ilusionista":
            masterPath = new Ilusionista("t", 7);
            break;
        case "Invocador":
            masterPath = new Invocador("t", 7);
            break;
        case "Magus":
            masterPath = new Magus("t", 7);
            break;
        case "Mestre das Feras":
            masterPath = new MestreDasFeras("t", 7);
            break;
        case "Metamorfo":
            masterPath = new Metamorfo("t", 7);
            break;
        case "Necromante":
            masterPath = new Necromante("t", 7);
            break;
        case "Piromante":
            masterPath = new Piromante("t", 7);
            break;
        case "Rogador":
            masterPath = new Rogador("t", 7);
            break;
        case "Runista":
            masterPath = new Runista("t", 7);
            break;
        case "Taumaturgo":
            masterPath = new Taumaturgo("t", 7);
            break;
        case "Tecnomante":
            masterPath = new Tecnomante("t", 7);
            break;
        case "Tempestuoso":
            masterPath = new Tempestuoso("t", 7);
            break;
        case "Tenebrista":
            masterPath = new Tenebrista("t", 7);
            break;
        case "Teurgo":
            masterPath = new Teurgo("t", 7);
            break;
        case "Transmutador":
            masterPath = new Transmutador("t", 7);
            break;
        case "Viajante":
            masterPath = new Viajante("t", 7);
            break;
        case "Acrobata":
            masterPath = new Acrobata("t", 7);
            break;
        case "Atirador de Elite":
            masterPath = new AtiradorDeElite("t", 7);
            break;
        case "Bruto":
            masterPath = new Bruto("t", 7);
            break;
        case "Campeão":
            masterPath = new Campeao("t", 7);
            break;
        case "Capelão":
            masterPath = new Capelao("t", 7);
            break;
        case "Carrasco":
            masterPath = new Carrasco("t", 7);
            break;
        case "Cavaleiro":
            masterPath = new Cavaleiro("t", 7);
            break;
        case "Conquistador":
            masterPath = new Conquistador("t", 7);
            break;
        case "Defensor":
            masterPath = new Defensor("t", 7);
            break;
        case "Dervixe":
            masterPath = new Dervixe("t", 7);
            break;
        case "Diplomata":
            masterPath = new Diplomata("t", 7);
            break;
        case "Duelista":
            masterPath = new Duelista("t", 7);
            break;
        case "Encouraçado":
            masterPath = new Encouracado("t", 7);
            break;
        case "Engenheiro":
            masterPath = new Engenheiro("t", 7);
            break;
        case "Envenenador":
            masterPath = new Envenenador("t", 7);
            break;
        case "Exorcista":
            masterPath = new Exorcista("t", 7);
            break;
        case "Explorador":
            masterPath = new Explorador("t", 7);
            break;
        case "Faz-Tudo":
            masterPath = new FazTudo("t", 7);
            break;
        case "Gladiador":
            masterPath = new Gladiador("t", 7);
            break;
        case "Infiltrador":
            masterPath = new Infiltrador("t", 7);
            break;
        case "Inquisidor":
            masterPath = new Inquisidor("t", 7);
            break;
        case "Lâmina":
            masterPath = new Lamina("t", 7);
            break;
        case "Mercador da Morte":
            masterPath = new MercadorDaMorte("t", 7);
            break;
        case "Mestre das Armas":
            masterPath = new MestreDasArmas("t", 7);
            break;
        case "Milagreiro":
            masterPath = new Milagreiro("t", 7);
            break;
        case "Mirmidão":
            masterPath = new Mirmidao("t", 7);
            break;
        case "Pistoleiro":
            masterPath = new Pistoleiro("t", 7);
            break;
        case "Saqueador":
            masterPath = new Saqueador("t", 7);
            break;
        case "Sentinela":
            masterPath = new Sentinela("t", 7);
            break;
        case "Templário":
            masterPath = new Templario("t", 7);
            break;
        case "Vingador":
            masterPath = new Vingador("t", 7);
            break;
        case "Zelota":
            masterPath = new Zelota("t", 7);
            break;
    }
    addHToDiv(id, path, 2);

    let adds = masterPath.level7();

    if(adds.health){
        addPToDiv(id, "Saúde: +" + adds.health);
    }
    if(adds.power){
        addPToDiv(id, "Poder: +" + adds.power);
    }
    if(adds.perception){
        addPToDiv(id, "Percepção: +" + adds.perception);
    }
    if(adds.speed){
        addPToDiv(id, "Deslocamento: +" + adds.speed);
    }
    if(adds.defense){
        addPToDiv(id, "Defesa: +" + adds.speed);
    }
    if(adds.corruption){
        addPToDiv(id, "Corrupção: +" + adds.corruption);
    }

    if(path === "Faz-Tudo"){
        createNewInput(id, "Você adiciona uma profissão qualquer. Coloque o nome da profissão nova: ", "profession", "text");
        addBrToDiv(id);
        createNewInput(id, "Você adiciona um novo idioma. Coloque o nome do novo idioma: ", "language", "text");
    } else{
        if(adds.choice){
            let professions = "";
            switch(adds.choice.profession){
                case "any":
                    professions += " Qualquer";
                    break
                case "academic":
                    professions += " Acadêmica";
                    break;
                case "religious":
                    professions += " Religiosa";
                    break;
                case "wilderness":
                    professions += " Selvagem";
                    break;
                case "common":
                    professions += " Comum";
                    break;
                case "criminal":
                    professions += " Criminosa";
                    break;
                case "martial":
                    professions += " Marcial";
                    break;
                case "animator":
                    professions += " Animador";
                    break;
                case "military":
                    professions += " Militar";
                    break;
            }
            if(adds.choice.profession2){
                switch(adds.choice.profession2){
                    case "religious":
                        professions += " ou Religiosa";
                        break;
                    case "musician":
                        professions += " ou Músico";
                        break;
                    case "military":
                        professions += ", Militar ";
                        break;
                }
                if(adds.choice.profession3){
                    professions += "ou Selvagem";
                }
            }        
            createOptionsInput(id, "Escolha um para adicionar: ", "profLangChoice",["Idioma", "Profissão" + professions], ["language", "profession"]);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque o nome do seu novo idioma(ou da sua nova profissão): ", "langProf", "text");
        }
    }
    addBrToDiv(id);
    createOptionsInput(id, "Escolha um atributo para aumentar em 1: ", "attribute1",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Escolha um <b>outro</b> atributo para aumentar em 1: ", "attribute2",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Escolha <b>outro</b> atributo para aumentar em 1: ", "attribute3",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createTextareaInput(id, "Coloque o treinamento de mestre do seu personagem: ", "training");
    addBrToDiv(id);
    if(adds.magic){
        addPToDiv(id, adds.magic + " Clique em próximo para adicionar a magia.");
        localStorage.setItem("magic", adds.magic);
    }
    Object.keys(masterPath.talents).forEach(function(talent){
        addPToDiv(id, "Novo talento - <b>" + talent + "</b>: " + masterPath.talents[talent]);
    });
    if(adds.spell){
        addPToDiv(id, "Você aprende a seguinte magia:");
        addHToDiv(id, adds.spell, 3);
        let trad = "Especial";
        let spell = adds.spell;
        const addToDiv = function(att, name, spellObj, id){
            if(spellObj[att] || spellObj[att] === 0){
                addPToDiv(id, name + ": " + spellObj[att]);
            }
        }
        const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], traditions[trad].spells[spell], id);
        }
    }
}

function changePathExpert(path){
    let id = "expertChoicesDiv";
    emptyDiv(id);

    let expertPath;
    switch(path){
        case "Clérigo":
            expertPath = new Clerigo("t", 3);
            break;
        case "Druida":
            expertPath = new Druida("t", 3);
            break;
        case "Oráculo":
            expertPath = new Oraculo("t", 3);
            break;
        case "Paladino":
            expertPath = new Paladino("t", 3);
            break;
        case "Artífice":
            expertPath = new Artifice("t", 3);
            break;
        case "Bruxa":
            expertPath = new Bruxa("t", 3);
            break;
        case "Feiticeiro":
            expertPath = new Feiticeiro("t", 3);
            break;
        case "Mago":
            expertPath = new Mago("t", 3);
            break;
        case "Assassino":
            expertPath = new Assassino("t", 3);
            break;
        case "Batedor":
            expertPath = new Batedor("t", 3);
            break;
        case "Ladrão":
            expertPath = new Ladrao("t", 3, {thieveryTalent3: {t1: " ", t2: " "}});
            break;
        case "Warlock":
            expertPath = new Warlock("t", 3);
            break;
        case "Atador de Feitiços":
            expertPath = new AtadorDeFeiticos("t", 3);
            break;
        case "Combatente":
            expertPath = new Combatente("t", 3, {talent: " "});
            break;
        case "Furioso":
            expertPath = new Furioso("t", 3);
            break;
        case "Patrulheiro":
            expertPath = new Patrulheiro("t", 3);
            break;
        case "Highlander":
            expertPath = new Highlander("t", 3);
            break;
        case "Silhouette":
            expertPath = new Silhouette("t", 3);
            break;
        case "SummerChild":
            expertPath = new SummerChild("t", 3);
            break;
        case "Soulthief":
            expertPath = new Soulthief("t", 3);
            break;
    }
    addHToDiv(id, path, 2);

    let adds = expertPath.level3();

    if(adds.health){
        addPToDiv(id, "Saúde: +" + adds.health);
    }
    if(adds.power){
        addPToDiv(id, "Poder: +" + adds.power);
    }
    if(adds.perception){
        addPToDiv(id, "Percepção: +" + adds.perception);
    }
    if(adds.speed){
        addPToDiv(id, "Deslocamento: +" + adds.speed);
    }

    if(adds.choice){
        let professions = "";
        switch(adds.choice.profession){
            case "any":
                professions += " Qualquer";
                break
            case "academic":
                professions += " Acadêmica";
                break;
            case "religious":
                professions += " Religiosa";
                break;
            case "wilderness":
                professions += " Selvagem";
                break;
            case "common":
                professions += " Comum";
                break;
            case "criminal":
                professions += " Criminosa";
                break;
            case "rastreador":
                professions += " Rastreador";
                break;
            case "artist":
                professions += " Artista";
                break;
        }
        if(adds.choice.profession2){
            switch(adds.choice.profession2){
                case "religious":
                    professions += " ou Religiosa";
                    break;
                case "wilderness":
                    professions += " ou Selvagem";
                    break;
                case "criminal":
                    professions += " ou Criminosa";
                    break;
                case "common":
                    professions += ", Comum ";
                    break;
            }
            if(adds.choice.profession3){
                professions += "ou Selvagem";
            }
        }
        let language = "";
        if(path === "Soulthief"){
            language = " Alto Arcaico";
        }  
        createOptionsInput(id, "Escolha um para adicionar: ", "profLangChoicee",["Idioma" + language, "Profissão" + professions], ["language", "profession"]);
        addBrToDiv(id, 1);
        createNewInput(id, "Coloque o nome do seu novo idioma(ou da sua nova profissão): ", "langProfe", "text");
    }
    addBrToDiv(id);
    createOptionsInput(id, "Escolha um atributo para aumentar em 1: ", "attribute1e",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createOptionsInput(id, "Escolha um <b>outro</b> atributo para aumentar em 1: ", "attribute2e",
    ["Força", "Agilidade", "Intelecto", "Vontade"],
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    createTextareaInput(id, "Coloque o treinamento de especialista do seu personagem: ", "trainingExpert");
    addBrToDiv(id);

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
        ["Especialização em Defesa", "Lutar com Qualquer Coisa", "Ataque Poderoso", "Ataque Preciso", "Bater com Escudo", "Recarga Rápida", "Disparo Rápido", "Lutar com Duas Armas"],
        ["defenseEspecialization", "haftAttack", "powerfulAttack", "preciseAttack", "shieldBash", "swiftReload", "swiftShot", "fightWithTwoWeapons"]);
        addBrToDiv(id);
    }

    if(adds.magic){
        addPToDiv(id, adds.magic + " Clique em próximo para adicionar a magia.");
        localStorage.setItem("magic", adds.magic);
    }
    Object.keys(expertPath.talents).forEach(function(talent){
        addPToDiv(id, "Novo talento - <b>" + talent + "</b>: " + expertPath.talents[talent]);
    });
    if(adds.spell){
        addPToDiv(id, "Você aprende a seguinte magia:");
        addHToDiv(id, adds.spell, 3);
        let trad = "Especial";
        let spell = adds.spell;
        const addToDiv = function(att, name, spellObj, id){
            if(spellObj[att] || spellObj[att] === 0){
                addPToDiv(id, name + ": " + spellObj[att]);
            }
        }
        const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], traditions[trad].spells[spell], id);
        }
    }
}

function nextPage(){
    let isExpert = document.querySelector("#changePath").checked;
    let info;
    if(isExpert){
        info = solveExpert();
    }
    else{
        info = solveMaster();
    }
    if(!info) return;

    if(info.spell !== "n"){
        character.traditions = character.traditions || {};
        character.traditions["Especial"] = character.traditions["Especial"] || [];
        if(!character.traditions["Especial"].includes(info.spell)){
            character.traditions["Especial"].push(info.spell);
        }
    }
    localStorage.setItem("character", JSON.stringify(character));
    if(info.magic !== "n"){
        window.location.href = "spells.html";
    } else{
        window.location.href = "character.html";
    }
}

function solveExpert(){
    character.masterPath = {};
    let path = document.querySelector("#expertPath").value;
    if(path === character.expertPath.type){
        alert("Você já tinha escolhido essa trilha de especialista. Escolha outra");
        return false;
    }
    character.masterPath.type = path;
    let expertPath;
    switch(path){
        case "Clérigo":
            expertPath = new Clerigo("t", 3);
            break;
        case "Druida":
            expertPath = new Druida("t", 3);
            break;
        case "Oráculo":
            expertPath = new Oraculo("t", 3);
            break;
        case "Paladino":
            expertPath = new Paladino("t", 3);
            break;
        case "Artífice":
            expertPath = new Artifice("t", 3);
            break;
        case "Bruxa":
            expertPath = new Bruxa("t", 3);
            break;
        case "Feiticeiro":
            expertPath = new Feiticeiro("t", 3);
            break;
        case "Mago":
            expertPath = new Mago("t", 3);
            break;
        case "Assassino":
            expertPath = new Assassino("t", 3);
            break;
        case "Batedor":
            expertPath = new Batedor("t", 3);
            break;
        case "Ladrão":
            expertPath = new Ladrao("t", 3, {thieveryTalent3: {t1: " ", t2: " "}});
            break;
        case "Warlock":
            expertPath = new Warlock("t", 3);
            break;
        case "Atador de Feitiços":
            expertPath = new AtadorDeFeiticos("t", 3);
            break;
        case "Combatente":
            expertPath = new Combatente("t", 3, {talent: " "});
            break;
        case "Furioso":
            expertPath = new Furioso("t", 3);
            break;
        case "Patrulheiro":
            expertPath = new Patrulheiro("t", 3);
            break;
        case "Highlander":
            expertPath = new Highlander("t", 3);
            break;
        case "Silhouette":
            expertPath = new Silhouette("t", 3);
            break;
        case "SummerChild":
            expertPath = new SummerChild("t", 3);
            break;
        case "Soulthief":
            expertPath = new Soulthief("t", 3);
            break;
    }
    let adds = expertPath.level3();

    let training = document.querySelector("#trainingExpert").value;
    if(!training){
        alert("Coloque um treinamento para a trilha");
        return false;
    }
    character.masterPath.training = training;
    
    if(path == "Ladrão"){
        let talent1 = document.querySelector("#thieveryTalent1").value;
        let talent2 = document.querySelector("#thieveryTalent2").value;
        if(talent1 === talent2){
            alert("Escolha talentos de ladrão diferentes");
            return false
        }
        character.masterPath.choices = {
            thieveryTalent3: {
                t1: talent1,
                t2: talent2
            }
        }
    }

    if(adds.choice){
        let profLangChoice = document.querySelector("#profLangChoicee").value;
        if(profLangChoice === "language"){
            if(path === "Soulthief"){
                character.languages["Alto Arcaico"] = {
                    speakable: true,
                    readable: false,
                    writable: false
                }
            } else{
                let name = document.querySelector("#langProfe").value;
                if(!name){
                    alert("Coloque o idioma novo");
                    return false;
                }
                character.languages[name] = {
                    speakable: true,
                    readable: false,
                    writable: false
                }
            }
        } else{
            let name = document.querySelector("#langProfe").value;
            if(!name){
                alert("Coloque a profissão nova");
                return false;
            }
            character.professions.push(name);
        }
    }

    let att1 = document.querySelector("#attribute1e").value;
    let att2 = document.querySelector("#attribute2e").value;
    if(att1 === att2){
        alert("Coloque atributos diferentes");
        return false;
    }
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

    if(adds.health){
        character.status.health += adds.health;
    }
    if(adds.power){
        character.status.power += adds.power;
    }
    if(adds.perception){
        character.status.perception += adds.perception;
    }
    if(adds.speed){
        character.status.speed += adds.speed;
    }

    character.masterPath.expert = true;

    if(path === "Combatente"){
        let talent = document.querySelector("#combatenteTalent").value;
        character.masterPath.choices = {
            talent: talent
        }
    }

    return {
        spell: adds.spell || "n",
        magic: adds.magic || "n"
    }
}

function solveMaster(){
    character.masterPath = {};
    let path = document.querySelector("#masterPath").value;
    character.masterPath.type = path;

    let masterPath;
    switch(path){
        case "Abjurador":
            masterPath = new Abjurador("t", 7);
            break;
        case "Adivinho":
            masterPath = new Adivinho("t", 7);
            break;
        case "Aeromante":
            masterPath = new Aeromante("t", 7);
            break;
        case "Apocaliptista":
            masterPath = new Apocaliptista("t", 7);
            break;
        case "Arcanista":
            masterPath = new Arcanista("t", 7);
            break;
        case "Astromante":
            masterPath = new Astromante("t", 7);
            break;
        case "Bardo":
            masterPath = new Bardo("t", 7);
            break;
        case "Cavaleiro Mago":
            masterPath = new CavaleiroMago("t", 7);
            break;
        case "Cronomante":
            masterPath = new Cronomante("t", 7);
            break;
        case "Curandeiro":
            masterPath = new Curandeiro("t", 7);
            break;
        case "Destruidor":
            masterPath = new Destruidor("t", 7);
            break;
        case "Encantador":
            masterPath = new Encantador("t", 7);
            break;
        case "Erudito":
            masterPath = new Erudito("t", 7);
            break;
        case "Geomante":
            masterPath = new Geomante("t", 7);
            break;
        case "Hidromante":
            masterPath = new Hidromante("t", 7);
            break;
        case "Homem Selvagem":
            masterPath = new HomemSelvagem("t", 7);
            break;
        case "Ilusionista":
            masterPath = new Ilusionista("t", 7);
            break;
        case "Invocador":
            masterPath = new Invocador("t", 7);
            break;
        case "Magus":
            masterPath = new Magus("t", 7);
            break;
        case "Mestre das Feras":
            masterPath = new MestreDasFeras("t", 7);
            break;
        case "Metamorfo":
            masterPath = new Metamorfo("t", 7);
            break;
        case "Necromante":
            masterPath = new Necromante("t", 7);
            break;
        case "Piromante":
            masterPath = new Piromante("t", 7);
            break;
        case "Rogador":
            masterPath = new Rogador("t", 7);
            break;
        case "Runista":
            masterPath = new Runista("t", 7);
            break;
        case "Taumaturgo":
            masterPath = new Taumaturgo("t", 7);
            break;
        case "Tecnomante":
            masterPath = new Tecnomante("t", 7);
            break;
        case "Tempestuoso":
            masterPath = new Tempestuoso("t", 7);
            break;
        case "Tenebrista":
            masterPath = new Tenebrista("t", 7);
            break;
        case "Teurgo":
            masterPath = new Teurgo("t", 7);
            break;
        case "Transmutador":
            masterPath = new Transmutador("t", 7);
            break;
        case "Viajante":
            masterPath = new Viajante("t", 7);
            break;
        case "Acrobata":
            masterPath = new Acrobata("t", 7);
            break;
        case "Atirador de Elite":
            masterPath = new AtiradorDeElite("t", 7);
            break;
        case "Bruto":
            masterPath = new Bruto("t", 7);
            break;
        case "Campeão":
            masterPath = new Campeao("t", 7);
            break;
        case "Capelão":
            masterPath = new Capelao("t", 7);
            break;
        case "Carrasco":
            masterPath = new Carrasco("t", 7);
            break;
        case "Cavaleiro":
            masterPath = new Cavaleiro("t", 7);
            break;
        case "Conquistador":
            masterPath = new Conquistador("t", 7);
            break;
        case "Defensor":
            masterPath = new Defensor("t", 7);
            break;
        case "Dervixe":
            masterPath = new Dervixe("t", 7);
            break;
        case "Diplomata":
            masterPath = new Diplomata("t", 7);
            break;
        case "Duelista":
            masterPath = new Duelista("t", 7);
            break;
        case "Encouraçado":
            masterPath = new Encouracado("t", 7);
            break;
        case "Engenheiro":
            masterPath = new Engenheiro("t", 7);
            break;
        case "Envenenador":
            masterPath = new Envenenador("t", 7);
            break;
        case "Exorcista":
            masterPath = new Exorcista("t", 7);
            break;
        case "Explorador":
            masterPath = new Explorador("t", 7);
            break;
        case "Faz-Tudo":
            masterPath = new FazTudo("t", 7);
            break;
        case "Gladiador":
            masterPath = new Gladiador("t", 7);
            break;
        case "Infiltrador":
            masterPath = new Infiltrador("t", 7);
            break;
        case "Inquisidor":
            masterPath = new Inquisidor("t", 7);
            break;
        case "Lâmina":
            masterPath = new Lamina("t", 7);
            break;
        case "Mercador da Morte":
            masterPath = new MercadorDaMorte("t", 7);
            break;
        case "Mestre das Armas":
            masterPath = new MestreDasArmas("t", 7);
            break;
        case "Milagreiro":
            masterPath = new Milagreiro("t", 7);
            break;
        case "Mirmidão":
            masterPath = new Mirmidao("t", 7);
            break;
        case "Pistoleiro":
            masterPath = new Pistoleiro("t", 7);
            break;
        case "Saqueador":
            masterPath = new Saqueador("t", 7);
            break;
        case "Sentinela":
            masterPath = new Sentinela("t", 7);
            break;
        case "Templário":
            masterPath = new Templario("t", 7);
            break;
        case "Vingador":
            masterPath = new Vingador("t", 7);
            break;
        case "Zelota":
            masterPath = new Zelota("t", 7);
            break;
    }
    let adds = masterPath.level7();

    let training = document.querySelector("#training").value;
    if(!training){
        alert("Coloque um treinamento para a trilha");
        return false;
    }
    character.masterPath.training = training;

    if(adds.choice){
        let profLangChoice = document.querySelector("#profLangChoice").value;
        if(profLangChoice === "language"){
        
            let name = document.querySelector("#langProf").value;
            if(!name){
                alert("Coloque o idioma novo");
                return false;
            }
            character.languages[name] = {
                speakable: true,
                readable: false,
                writable: false
            }
        } else{
            let name = document.querySelector("#langProf").value;
            if(!name){
                alert("Coloque a profissão nova");
                return false;
            }
            character.professions.push(name);
        }
    }

    let att1 = document.querySelector("#attribute1").value;
    let att2 = document.querySelector("#attribute2").value;
    let att3 = document.querySelector("#attribute3").value;
    if(att1 === att2 || att1 === att3 || att2 === att3){
        alert("Coloque atributos diferentes");
        return false;
    }
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
    switch(att3){
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

    if(adds.health){
        character.status.health += adds.health;
    }
    if(adds.power){
        character.status.power += adds.power;
    }
    if(adds.perception){
        character.status.perception += adds.perception;
    }
    if(adds.speed){
        character.status.speed += adds.speed;
    }
    if(adds.defense){
        character.status.defense += adds.defense;
    }
    if(adds.corruption){
        character.status.corruption += adds.corruption;
    }

    return {
        spell: adds.spell || "n",
        magic: adds.magic || "n"
    }
}