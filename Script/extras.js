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
    if(choices.backgroundChange == "2d6 cp"){
        choices.backgroundMoney = document.querySelector("#background").value;
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
    }

    choices.interestingThings = [document.querySelector("#interestingThing").value];
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        choices.interestingThings.push(document.querySelector("#secondInterestingThing").value);
    }
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("choices", JSON.stringify(choices));
    if(character.novicePath.type == "magician" || character.novicePath.type == "priest"){
        window.location.href = "spells.html";
    } else{
        window.location.href = "market.html";
    }
}
