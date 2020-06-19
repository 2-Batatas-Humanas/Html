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
            break;
        case "poor":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Cajado", "Funda com 20 pedras"],
            ["staff", "sling"]);
            break;
        case "gettingBy":
        case "comfortable":
            createOptionsInput(id, "Qual arma você escolhe? ", "wealthWeapon",
            ["Cajado", "Porrete", "Funda com 20 pedras"],
            ["staff", "club", "sling"]);
            break;
        case "wealthy":
        case "rich":
            addPToDiv(id, "Você é um burguês!");
            break;
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
        })
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
    if(character.wealth != "wealthy" && character.wealth != "rich"){
        choices.wealthWeaponChoice = document.querySelector("#wealthWeapon").value;
    }

    choices.interestingThings = [document.querySelector("#interestingThing").value];
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        choices.interestingThings.push(document.querySelector("#secondInterestingThing").value);
    }
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("choices", JSON.stringify(choices));
}
