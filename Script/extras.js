character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) console.log("Couldn't load choices");

character.languages = {
    "Língua Comum": {
        speakable: true,
        readable: false,
        writable: false
    }
};

switch(character.ancestry){
    case "dwarf":
        character.languages["Anão"] = {
            speakable: true,
            readable: true,
            writable: true
        }
        break;
    case "goblin":
        character.languages["Élfico"] = {
            speakable: true,
            readable: false,
            writable: false
        }
        break;
    case "orc":
        character.languages["Dialeto Sombrio"] = {
            speakable: true,
            readable: false,
            writable: false
        }
        break;
    case "yerath":
        character.languages["Yerath"] = {
            speakable: true,
            readable: false,
            writable: false
        }
        break;
}

function checkLangInStorage(){
    let id = "langDiv";
    if(character.ancestry == "human" && choices.profLangChoice == "language"){
        createNewInput(id, "Idioma adquirido pela escolha entre profissão e idioma(tipo 1). Coloque o nome do idioma: ", "extraHumanChoice", "text");
        character.languages["Idioma novo - tipo 1"] = {
            speakable: true,
            readable: false,
            writable: false
        };
    }
    if(choices.backgroundChange){
        switch(choices.backgroundChange){
            case "language":
                createNewInput(id, "Idioma adquirido pelo antecedente do personagem(tipo 2). Coloque o nome do idioma: ", "backgroundChoice", "text");
                character.languages["Idioma novo - tipo 2"]= {
                    speakable: true,
                    readable: false,
                    writable: false
                };
                break;
            case "read common language":
                character.languages["Língua Comum"].readable = true;
                addPToDiv(id, "O antecedente do seu personagem deu a ele a habilidade de ler a Língua Comum");
                break;
            case "read write common language":
                character.languages["Língua Comum"].readable = true;
                character.languages["Língua Comum"].writable = true;
                addPToDiv(id, "O antecedente do seu personagem deu a ele a habilidade de ler e escrever a Língua Comum");
                break;
            case "language gnomish":
                addPToDiv(id, "O antecedente do seu personagem deu a ele a habilidade de falar a Língua dos Anões");
                character.languages["Anão"] = {
                    speakable: true,
                    readable: false,
                    writable: false
                };
        }
    }
    if(character.novicePath){
        switch(character.novicePath.type){
            case "rogue":
                if(choices.rogueProfLangChoice == "language"){
                    createNewInput(id, "Idioma adquirido pela trilha de aprendiz do personagem(tipo 3). Coloque o nome do idioma: ", "rogueLang", "text");
                    character.languages["Idioma novo - tipo 3"] = {
                        speakable: true,
                        readable: false,
                        writable: false
                    };
                }
                break;
            case "priest":
                if(choices.priestLangChoice == "language"){
                    createNewInput(id, "Idioma adquirido pela trilha de aprendiz do personagem(tipo 3). Coloque o nome do idioma: ", "priestLang", "text");
                    character.languages["Idioma novo - tipo 3"] = {
                        speakable: true,
                        readable: false,
                        writable: false
                    };
                } else{
                    let possibleLanguagesKeys = [];
                    let keys = Object.keys(character.languages);
                    keys.forEach(function(value){
                        if(!character.languages[value].readable){
                            possibleLanguagesKeys.push(value);
                        }
                    });
                    createOptionsInput(id, "Escolha um idioma para poder ler(escolha de Sacerdote): ", "priestReadLang", possibleLanguagesKeys, possibleLanguagesKeys);
                }
                break;
        }
    }
    if(choices.readWriteAdds > 0){
        addBrToDiv(id);
        let possibleLanguages = 0
        let possibleLanguagesKeys = [];
        let keys = Object.keys(character.languages);
        keys.forEach(function(value){
            if(!character.languages[value].readable || !character.languages[value].writable){
                possibleLanguages++;
                possibleLanguagesKeys.push(value);
            }
        });
        if(possibleLanguages <= choices.readWriteAdds){
            keys.forEach(function(value){
                character.languages[value].readable = true;
                character.languages[value].writable = true;
            });
        } else{
            for(let i = 0; i < choices.readWriteAdds; i++){
                createOptionsInput(id, "Escolha um idioma para poder ler e escrever: ", "language" + i, possibleLanguagesKeys, possibleLanguagesKeys);
            }
        }
    }
    
}

function setWealth(){
    let id = "wealthDiv";
    let wealth = document.querySelector("#wealth").value;
    emptyDiv(id);
    switch(wealth){
        case "destitute":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Porrete", "Funda com 20 pedras"],
            ["club", "sling"]);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque quantos milavos você possui no começo por ser desprovido(1d6 ma): ", "money", "number", null, 1, 1, 6);
            break;
        case "poor":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Cajado", "Funda com 20 pedras"],
            ["staff", "sling"]);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque quantos milavos você possui no começo por ser pobre(2d6 ma): ", "money", "number", null, 1, 1, 12);
            break;
        case "gettingBy":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Cajado", "Porrete", "Funda com 20 pedras"],
            ["staff", "club", "sling"]);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque quantas tochas você recebe(1d3): ", "numTorch", "number", null, 1, 1, 3);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque quantos centavos de cobre você possui no começo por ser modesto(1d6 cc): ", "money", "number", null, 1, 1, 6);
            break;
        case "comfortable":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Cajado", "Porrete", "Funda com 20 pedras"],
            ["staff", "club", "sling"]);
            addBrToDiv(id, 1);
            createOptionsInput(id, "Qual kit você escolhe? ", "kit",
            ["Kit de ferramentas", "Kit de escrita"],
            ["tools", "writing"]);
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque quantos centavos de cobre você possui no começo por ser confortável(2d6 cc): ", "money", "number", null, 1, 1, 12);
            break;
        case "wealthy":
            createNewInput(id, "Coloque quantos xelins de prata você possui no começo por ser abastado(1d6 xp): ", "money", "number", null, 1, 1, 6);
            break;
        case "rich":
            createNewInput(id, "Coloque quantos xelins de prata você possui no começo por ser rico(2d6 xp): ", "money", "number", null, 1, 1, 12);
            break;
    }
    addBrToDiv(id);
    createNewInput(id, "Qual é a quantidade de xelins de prata que você recebeu por ter ido para o nível 1?(2d6 xp) ", "level1Money", "number", null, 1, 1, 12);

    switch(choices.backgroundChange){
        case "2d6 cp":
            addBrToDiv(id);
            createNewInput(id, "Você recebeu 2d6 centavos de cobre pelo seu antecedente. Coloque quanto deu: ", "background", "number", null, 1, 1, 12);
            break;
        case "battlehammer/warhammer":
            addBrToDiv(id);
            createOptionsInput(id, "Qual desses você escolhe?(o seu personagem recebeu por causa do antecedente) ", "background",
            ["Machado de batalha", "Martelo de Guerra"], 
            ["battlehammer", "warhammer"]);
            break;
        case "random enchanted object":
            addBrToDiv(id);
            createNewInput(id, "Você recebeu um objeto encantado por causa do antecedente. Coloque o nome dele: ", "background", "text");
            addBrToDiv(id, 1);
            createNewInput(id, "Coloque a propriedade mágica do seu objeto: ", "magicProperty", "text");
            break;
        case "1d6 insanity":
        case "1d6 insanity+profession":
            addBrToDiv(id);
            createNewInput(id, "Qual é o tanto de insanidade que o seu personagem recebeu do seu antecedente(1d6): ", "insanity", "number", null, 1, 1, 6);
            break;
        case "1d3 insanity":
            addBrToDiv(id);
            createNewInput(id, "Qual é o tanto de insanidade que o seu personagem recebeu do seu antecedente(1d3): ", "insanity", "number", null, 1, 1, 3);
            break;
        case "1d3 corruption":
            addBrToDiv(id);
            createNewInput(id, "Qual é o tanto de corrupção que o seu personagem recebeu do seu antecedente(1d3): ", "corruption", "number", null, 1, 1, 3);
            break;
    }
    if(character.ancestry == "clockwork"){
        addBrToDiv(id);
        switch(choices.purposeChange){
            case "2 strength/agility":
                createOptionsInput(id, "Escolha um atributo para aumentar em 2(função autômata): ", "purpose",
                ["Força", "Agilidade"],
                ["strength", "agility"]);
                break;
            case "2 intellect/will":
                createOptionsInput(id, "Escolha um atributo para aumentar em 2(função autômata): ", "purpose",
                ["Intelecto", "Vontade"],
                ["intellect", "will"]);
                break;
            case "2 agility/intellect":
                createOptionsInput(id, "Escolha um atributo para aumentar em 2(função autômata): ", "purpose",
                ["Intelecto", "Agilidade"],
                ["intellect", "agility"]);
                break;
            case "2 attribute":
                createOptionsInput(id, "Escolha um atributo para aumentar em 2(função autômata): ", "purpose",
                ["Força", "Agilidade", "Intelecto", "Vontade"],
                ["strength", "agility", "intellect", "will"]);
                break;
        }
    }
}

function interestingThings(){
    createNewInput("interestingThings", "Coloque o nome da coisa interessante: ", "interestingThing", "text");
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        addBrToDiv("interestingThings", 1);
        createNewInput("interestingThings", "Coloque o nome da segunda coisa interessante(o personagem ganhou pelo antecedente): ", "secondInterestingThing", "text");
    }
}

function nextPage(){
    if(choices.readWriteAdds > 0){
        for(let i = 0; i < 10; i++){
            var select = document.querySelector("#language" + i);
            if(select){
                character.languages[select.value].readable = true;
                character.languages[select.value].writable = true;
            }
        }
    }
    if(character.novicePath.type == "priest" && choices.priestLangChoice == "read language"){
        let lang = document.querySelector("#priestReadLang").value;
        if(lang in Object.keys(character.languages)){
            character.languages[lang].readable = true;
        }
    }
    if(choices.backgroundChange == "language"){
        let lang = document.querySelector("#backgroundChoice").value;
        character.languages[lang] = {
            speakable: character.languages["Idioma novo - tipo 2"].speakable,
            readable: character.languages["Idioma novo - tipo 2"].readable,
            writable: character.languages["Idioma novo - tipo 2"].writable
        }
        delete character.languages["Idioma novo - tipo 2"];
    }
    if(character.ancestry == "human" && choices.profLangChoice == "language"){
        let lang = document.querySelector("#extraHumanChoice").value;
        character.languages[lang] = {
            speakable: character.languages["Idioma novo - tipo 1"].speakable,
            readable: character.languages["Idioma novo - tipo 1"].readable,
            writable: character.languages["Idioma novo - tipo 1"].writable
        }
        delete character.languages["Idioma novo - tipo 1"];
    }
    if(character.novicePath.type == "magician"){
        let keys = Object.keys(character.languages);
        keys.forEach(function(value){
            character.languages[value].readable = true;
        });
    }
    else if(character.novicePath.type == "rogue" && choices.rogueProfLangChoice == "language"){
        let lang = document.querySelector("#rogueLang").value;
        character.languages[lang] = {
            speakable: character.languages["Idioma novo - tipo 3"].speakable,
            readable: character.languages["Idioma novo - tipo 3"].readable,
            writable: character.languages["Idioma novo - tipo 3"].writable
        }
        delete character.languages["Idioma novo - tipo 3"];
    }
    else if(character.novicePath.type == "priest"){
        if(choices.priestLangChoice == "language"){
            let lang = document.querySelector("#priestLang").value;
            character.languages[lang] = {
                speakable: character.languages["Idioma novo - tipo 3"].speakable,
                readable: character.languages["Idioma novo - tipo 3"].readable,
                writable: character.languages["Idioma novo - tipo 3"].writable
            }
            delete character.languages["Idioma novo - tipo 3"];
        }
    }

    character.wealth = document.querySelector("#wealth").value;
    choices.initialWealthMoney = document.querySelector("#money").value;
    choices.level1Money = document.querySelector("#level1Money").value;
    if(character.wealth != "wealthy" && character.wealth != "rich"){
        choices.wealthWeaponChoice = document.querySelector("#wealthWeapon").value;
        if(character.wealth == "gettingBy"){
            choices.numTorch = document.querySelector("#numTorch").value;
        }
        else if(character.wealth == "comfortable"){
            choices.kit = document.querySelector("#kit").value;
        }
    }
    switch(choices.backgroundChange){
        case "2d6 cp":
            choices.backgroundMoney = document.querySelector("#background").value;
            break;
        case "battlehammer/warhammer":
            choices.battleWarHammer = document.querySelector("#background").value;
            break;
        case "random enchanted object":
            choices.newObject = document.querySelector("#background").value;
            choices.magicProperty = document.querySelector("#magicProperty").value;
            break;
        case "1d6 insanity":
        case "1d6 insanity+profession":
            choices.backgroundInsanity = document.querySelector("#insanity").value;
            break;
        case "1d3 corruption":
            choices.backgroundCorruption = document.querySelector("#corruption").value;
            break;
        case "1d3 insanity":
            choices.backgroundInsanity = document.querySelector("#insanity").value;
            break;
    }
    if(character.ancestry == "clockwork"){
        choices.purposeChoice = document.querySelector("#purpose").value;
    }

    character.interestingThings = [document.querySelector("#interestingThing").value];
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        character.interestingThings.push(document.querySelector("#secondInterestingThing").value);
    }
    createInventory();
    character = processChoices(character, choices);
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.removeItem("choices");
    if(character.novicePath.type == "magician" || character.novicePath.type == "priest"){
        window.location.href = "spells.html";
    } else{
        window.location.href = "market.html";
    }
}

function createInventory(){
    character.inventory = {
        weapons: {},
        ammo: {},
        armors: {},
        interestingThings: [],
        bags: [],
        items: {},
        hirelings: {},
        animals: {},
        money: {
            bits: 0,
            copperPennies: parseInt(choices.backgroundMoney) || 0,
            silverShillings: parseInt(choices.level1Money),
            goldCrowns: 0
        }
    };
    character.inventory.interestingThings.push(character.interestingThings[0]);
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        character.inventory.interestingThings.push(character.interestingThings[1]);
    }
    switch(character.wealth){
        case "destitute":
            character.inventory.bags.push("Bolsa");
            character.inventory.armors["Trapos"] = deepCopy(item.armor["Roupas"]);
            character.inventory.money.bits = parseInt(choices.initialWealthMoney);

            if(choices.wealthWeaponChoice == "club"){
                character.inventory.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else{// Sling
                character.inventory.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.inventory.ammo["Pedras"] = {
                    quantity: 20
                }
            }
            break;
        case "poor":
            character.inventory.bags.push("Saco");
            character.inventory.money.bits = parseInt(choices.initialWealthMoney);
            character.inventory.armors["Roupas comuns remendadas"] = deepCopy(item.armor["Roupas"]);
            character.inventory.items["Pão"] = {};
            character.inventory.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.inventory.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.inventory.items["Vela"] = deepCopy(item.personalGear["Vela"]);

            if(choices.wealthWeaponChoice == "staff"){
                character.inventory.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.inventory.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.inventory.ammo["Pedras"] = {
                    quantity: 20
                }
            }
            break;
        case "gettingBy":
            character.inventory.bags.push("Mochila");
            character.inventory.money.copperPennies += parseInt(choices.initialWealthMoney);
            character.inventory.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.inventory.armors["Roupas comuns"] = deepCopy(item.armor["Roupas"]);
            character.inventory.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.inventory.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.inventory.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.inventory.items["Tocha"] = deepCopy(item.personalGear["Tocha"]);
            if(choices.numTorch > 1){
                character.inventory.items["Tocha"].quantity = choices.numTorch;
            }
            if(choices.wealthWeaponChoice == "club"){
                character.inventory.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else if(choices.wealthWeaponChoice == "staff"){
                character.inventory.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.inventory.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.inventory.ammo["Pedras"] = {
                    quantity: 20
                }
            }
            break;
        case "comfortable":
            character.inventory.bags.push("Mochila");
            character.inventory.money.copperPennies += parseInt(choices.initialWealthMoney);
            character.inventory.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.inventory.armors["Roupas de qualidade"] = deepCopy(item.armor["Roupas"]);
            character.inventory.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.inventory.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.inventory.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.inventory.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.inventory.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.inventory.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.inventory.items["Tocha"] = deepCopy(item.personalGear["Tocha"]);
            character.inventory.items["Tocha"].quantity = 2;
            character.inventory.items["Kit de cura"] = deepCopy(item.tool["Kit de Curandeiro (6 usos)"]);
            if(choices.kit == "tools"){
                character.inventory.items["Kit de ferramentas"] = deepCopy(item.tool["Kit de Ferramentas"]);
            } else{
                character.inventory.items["Kit de escrita"] = deepCopy(item.tool["Kit de Escrita"]);
            }
            character.inventory.weapons["Escudo pequeno"] = deepCopy(item.weapon["Escudo pequeno"]);
            character.inventory.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);

            if(choices.wealthWeaponChoice == "club"){
                character.inventory.weapons["Porrete"] = deepCopy(item.weapon["Porrete"]);
            } else if(choices.wealthWeaponChoice == "staff"){
                character.inventory.weapons["Cajado"] = deepCopy(item.weapon["Cajado"]);
            } else{// Sling
                character.inventory.weapons["Funda"] = deepCopy(item.weapon["Funda"]);
                character.inventory.ammo["Pedras"] = {
                    quantity: 20
                }
            }
            break;
        case "wealthy":
            character.inventory.bags.push("Mochila");
            character.inventory.money.silverShillings += parseInt(choices.initialWealthMoney);
            character.inventory.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.inventory.armors["Roupas de cortesão"] = deepCopy(item.armor["Roupas"]);
            character.inventory.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.inventory.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.inventory.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.inventory.items["Corda (20 metros)"] = deepCopy(item.personalGear["Corda (20 metros)"]);
            character.inventory.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.inventory.items["Pederneira"] = deepCopy(item.personalGear["Pederneira"]);
            character.inventory.items["Lanterna"] = deepCopy(item.personalGear["Lanterna"]);
            character.inventory.items["Frasco de óleo"] = deepCopy(item.personalGear["Óleo, frasco"]);
            character.inventory.items["Frasco de óleo"].quantity = 2;
            character.inventory.weapons["Escudo pequeno"] = deepCopy(item.weapon["Escudo pequeno"]);
            character.inventory.items["Kit de cura"] = deepCopy(item.tool["Kit de Curandeiro (6 usos)"]);
            character.inventory.items["Kit de ferramentas"] = deepCopy(item.tool["Kit de Ferramentas"]);
            character.inventory.items["Kit de escrita"] = deepCopy(item.tool["Kit de Escrita"]);
            character.inventory.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);
            break;
        case "rich":
            character.inventory.bags.push("Mochila");
            character.inventory.money.silverShillings += parseInt(choices.initialWealthMoney);
            character.inventory.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            character.inventory.armors["Roupas de nobre"] = deepCopy(item.armor["Roupas"]);
            character.inventory.items["Manto"] = deepCopy(item.clothingAndAccessory["Manto"]);
            character.inventory.items["Rações para uma semana"] = deepCopy(item.food["Ração"]);
            character.inventory.items["Odre"] = deepCopy(item.personalGear["Odre"]);
            character.inventory.items["Poção de Cura"] = deepCopy(item.potion["Cura"]);
            character.inventory.hirelings["Servo pessoal"] = deepCopy(item.hireling["Plebeu"]);
            character.inventory.hirelings["Guarda"] = deepCopy(item.hireling["Mercenário"]);
            character.inventory.animals["Cavalo"] = deepCopy(item.animal["Cavalo, mula, pônei"]);
            character.inventory.animals["Cavalo"].quantity = 3;
            character.inventory.items["Sela"] = deepCopy(item.animalGear["Sela"]);
            character.inventory.items["Sela"].quantity = 3;
            break;
    }
    
    switch(choices.backgroundChange){
        case "treasure map":
            character.inventory.items["Mapa do Tesouro"] = {};
            break;
        case "battlehammer/warhammer":
            if(choices.battleWarHammer == "battlehammer"){
                character.inventory.weapons["Machado de batalha"] = deepCopy(item.weapon["Machado de batalha, mangual, estrela da manhã, picareta, ou espada"]);
            } else{
                character.inventory.weapons["Martelo de guerra"] = deepCopy(item.weapon["Espada bastarda ou martelo de guerra"]);
            }
            break;
        case "key to ancient dwarf treasure vault":
            character.inventory.items["Chave para um antigo cofre de tesouros dos anões"] = {};
            break;
        case "knife":
            if(!character.inventory.weapons["Adaga ou faca"]){
                character.inventory.weapons["Adaga ou faca"] = deepCopy(item.weapon["Adaga ou faca"]);
            } else{
                character.inventory.weapons["Adaga ou faca"].quantity = 2;
            }
            break;
        case "lock of hair":
            character.inventory.items["Cacho do cabelo da Rainha das Fadas"] = {};
            break;
        case "signet ring":
            character.inventory.items["Anel com sinete"] = {};
            break;
        case "medal":
            character.inventory.items["Medalha por Coragem"] = {};
            break;
        case "sword":
            character.inventory.weapons["Espada bastarda ou martelo de guerra"] = deepCopy(item.weapon["Espada bastarda ou martelo de guerra"]);
            break;
        case "random enchanted object":
            character.inventory.items[choices.newObject] = {
                description: choices.magicProperty
            };
            break;
        case "incantation rank 0 spell":
            if(!character.inventory.items["Feitiço nível 0"]){
                character.inventory.items["Feitiço nível 0"] = deepCopy(item.incantation["Nível 0"]);
            } else {
                character.inventory.items["Feitiço nível 0 2"] = deepCopy(item.incantation["Nível 0"]);
            }
            break;
    }
}

function processChoices(charact, chs){
    let newCharacter = deepCopy(charact);
    newCharacter.status = {
        strength: 0,
        agility: 0,
        intellect: 0,
        will: 0,
        perception: 0,
        defense: null,
        health: 0,
        size: null,
        speed: null,
        damage: 0,
        power: 0,
        insanity: 0,
        corruption: 0,
        level: 1
    }
    if(chs.backgroundChange){
        switch(chs.backgroundChange){
            case "1d6 insanity":
            case "1d6 insanity+profession":
            case "1d3 insanity":
                newCharacter.status.insanity = parseInt(chs.backgroundInsanity);
                break;
            case "1d3 corruption":
                newCharacter.status.corruption = parseInt(chs.backgroundCorruption);
                break;
            case "1 corruption":
                newCharacter.status.corruption = 1;
                break;
            case "1 insanity":
                newCharacter.status.insanity = 1;
                break;
            case "2 corruption":
                newCharacter.status.corruption = 2;
                break;
            case "1 intellect+1 will+!caste att":
                newCharacter.status.intellect += 1;
                newCharacter.status.perception += 1;
                newCharacter.status.will += 1;
                break;
        }
    }
    switch(charact.ancestry){
        case "human":
            newCharacter.status[chs.raisedAttribute] += 1;
            switch(chs.raisedAttribute){
                case "strength":
                    newCharacter.status.health += 1;
                    break;
                case "agility":
                    newCharacter.status.defense = 11;
                    break;
                case "intellect":
                    newCharacter.status.perception += 1;
                    break;
            }
            break;
        case "clockwork":
            switch(chs.purposeChange){
                case "2 strength/agility":
                case "2 intellect/will":
                case "2 agility/intellect":
                case "2 attribute":
                    newCharacter.status[chs.purposeChoice] += 2;
                    switch(chs.purposeChoice){
                        case "strength":
                            newCharacter.status.health += 2;
                            break;
                        case "intellect":
                            newCharacter.status.perception += 2;
                            break;
                    }
                    break;
                case "2 strength":
                    newCharacter.status.strength += 2;
                    newCharacter.status.health += 2;
                    break;
            }
            switch(chs.formChange){
                case "-5 health+0.5 size":
                    newCharacter.status.health -= 5;
                    newCharacter.status.size = 0.5;
                    break;
                case "0.5 size":
                    newCharacter.status.size = 0.5;
                    break;
                case "2 size+-2 speed+-2 defense":
                    newCharacter.status.size = 2;
                    newCharacter.status.speed = 6;
                    newCharacter.status.defense = 11;
                    break;
                case "2 size+2 speed+-3 defense":
                    newCharacter.status.size = 2;
                    newCharacter.status.speed = 10;
                    newCharacter.status.defense = 11;
                    break;
            }
            break;
        case "yerath":
            if(chs.backgroundChange != "1 intellect+1 will+!caste att"){
                switch(chs.casteChoice){
                    case "profession laborer+2 strength+1 will":
                        newCharacter.status.strength += 2;
                        newCharacter.status.health += 2;
                        newCharacter.status.will += 1;
                        break;
                    case "profession guide+1 agility+1 perception":
                        newCharacter.status.agility += 1;
                        newCharacter.status.perception += 1;
                        break;
                    case "profession soldier+2 strength+13 defense":
                        newCharacter.status.strength += 2;
                        newCharacter.status.defense = 13;
                        newCharacter.status.health += 2;
                        break;
                }
            }
    }
    switch(charact.novicePath.type){
        case "warrior":
            newCharacter.status.health += 5;
            break;
        case "rogue":
            newCharacter.status.health += 3;
            break;
        case "magician":
            newCharacter.status.health += 2;
            newCharacter.status.power += 1;
            break;
        case "priest":
            newCharacter.status.power += 1;
            newCharacter.status.health += 4;
            break;
    }
    newCharacter.status[choices.novicePathAttributes[0]] += 1;
    switch(choices.novicePathAttributes[0]){
        case "strength":
            newCharacter.status.health += 1;
            break;
        case "agility":
            if(charact.ancestry != "clockwork" && charact.ancestry != "yerath"){
                switch(charact.ancestry){
                    case "human":
                        if(!newCharacter.status.defense){
                            newCharacter.status.defense = 10;
                        }
                        break;
                    case "dwarf":
                        newCharacter.status.defense = 9;
                        break;
                    case "changeling":
                        newCharacter.status.defense = 10;
                        break;
                    case "goblin":
                        newCharacter.status.defense = 12;
                        break;
                    case "orc":
                        newCharacter.status.defense = 10;
                        break;
                }
                newCharacter.status.defense += 1;
            }
            break;
        case "intellect":
            newCharacter.status.perception += 1;
            break;
    }
    newCharacter.status[choices.novicePathAttributes[1]] += 1;
    switch(choices.novicePathAttributes[1]){
        case "strength":
            newCharacter.status.health += 1;
            break;
        case "agility":
            if(charact.ancestry != "clockwork" && charact.ancestry != "yerath"){
                switch(charact.ancestry){
                    case "human":
                        if(!newCharacter.status.defense){
                            newCharacter.status.defense = 10;
                        }
                        break;
                    case "dwarf":
                        newCharacter.status.defense = 9;
                        break;
                    case "changeling":
                        newCharacter.status.defense = 10;
                        break;
                    case "goblin":
                        newCharacter.status.defense = 12;
                        break;
                    case "orc":
                        newCharacter.status.defense = 10;
                        break;
                }
                newCharacter.status.defense += 1;
            }
            break;
        case "intellect":
            newCharacter.status.perception += 1;
            break;
    }
    return newCharacter;
}
