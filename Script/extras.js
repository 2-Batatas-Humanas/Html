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
                character.languages["Anão"] = {
                    speakable: true,
                    readable: false,
                    writable: false
                }
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
                createOptionsInput(id, "Escolha um idioma para ler e escrever: ", "language" + i, possibleLanguagesKeys, possibleLanguagesKeys);
            }
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
        for(let i = 0; i < 4; i++){
            var select = document.querySelector("#language" + i);
            if(select){
                character.languages[select.value].readable = true;
                character.languages[select.value].writable = true;
            }
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
    character.wealth = document.querySelector("#wealth").value;
    choices.interestingThings = [document.querySelector("#interestingThing").value];
    if(character.ancestry == "yerath" && choices.backgroundChange == "extra interesting thing"){
        choices.interestingThings.push(document.querySelector("#secondInterestingThing").value);
    }
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("choices", JSON.stringify(choices));
    //window.location.href = ".html";
}