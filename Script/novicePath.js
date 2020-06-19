character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) console.log("Couldn't load choices");

function getNovicePath(){
    let novicePath = document.querySelector("#novicePath").value;
    let id = "novicePathDiv"
    emptyDiv(id);
    createOptionsInput(id, "Selecione um atributo para aumentar em 1: ", "attribute1",
    ["Força", "Agilidade", "Intelecto", "Vontade"], 
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id, 1);
    createOptionsInput(id, "Selecione um outro atributo para aumentar em 1: ", "attribute2",
    ["Força", "Agilidade", "Intelecto", "Vontade"], 
    ["strength", "agility", "intellect", "will"]);
    addBrToDiv(id);
    switch(novicePath){
        case "warrior":
            createTextareaInput(id, "Coloque qual é o treinamento de guerreiro para o seu personagem: ", "training");
            break;
        case "rogue":
            createTextareaInput(id, "Coloque qual é o treinamento de ladino para o seu personagem: ", "training");
            addBrToDiv(id);
            createOptionsInput(id, "Escolha uma opção: ", "rogueProfLangChoice",
            ["Adicionar um idioma à lista de idiomas que o personagem pode falar", "Adicionar uma profissão comum, criminosa ou selvagem"],
            ["language", "profession"]);
            break;
        case "magician":
            createTextareaInput(id, "Coloque qual é o treinamento de mágico para o seu personagem: ", "training");
            break;
        case "priest":
            createTextareaInput(id, "Coloque qual é o treinamento de sacerdote para o seu personagem: ", "training");
            addBrToDiv(id);
            createOptionsInput(id, "Escolha uma opção: ", "priestLangChoice",
            ["Adicionar um idioma à lista de idiomas que o personagem pode falar", "Ler um idioma que fala"],
            ["language", "read language"]);
            break;
        default:
            alert("Developer error");
    }
}

function nextPage(){
    let attribute1 = document.querySelector("#attribute1").value;
    let attribute2 = document.querySelector("#attribute2").value;
    if(attribute1 == attribute2){
        alert("Selecione atributos diferentes");
        return
    }
    let training = document.querySelector("#training").value;
    if(training === ""){
        alert("Coloque o treinamento do seu personagem");
        return
    }
    let novicePath = document.querySelector("#novicePath").value;
    character.novicePath = {
        "type": novicePath,
        "training": training,
        "attributes": [attribute1, attribute2]
    }
    switch(novicePath){
        case "rogue":
            choices.rogueProfLangChoice = document.querySelector("#rogueProfLangChoice").value;
            break;
        case "priest":
            choices.priestLangChoice = document.querySelector("#priestLangChoice").value;
            break;
    }
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("choices", JSON.stringify(choices));
    window.location.href = "professions.html";
}