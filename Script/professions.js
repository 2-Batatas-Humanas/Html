character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) console.log("Couldn't load choices");

character.professions = [];
choices.languages = [];
choices.numProfsChosen = 0;

function checkProfessionsInChoices(){
    let professionsDiv = document.querySelector("#professions");
    if(character.ancestry == "human" && choices.profLangChoice == "profession"){
        let div = document.createElement("div");
        div.id = "humanProfession";

        let span = document.createElement("span");
        span.innerHTML = "Profissão extra adquirida pela escolha entre profissão e idioma de humano:<br>";
        div.appendChild(span);

        professionsDiv.appendChild(div);

        createProfessionInput("humanProfession", "extraHumanChoice");
    }
    if(character.ancestry == "yerath"){
        const firstPlus = choices.casteChoice.indexOf("+");
        let prof = choices.casteChoice.slice(11, firstPlus);
        switch(prof){
            case "drone":
                character.professions[0] = "Drone";
                break;
            case "scout":
                character.professions[0] = "Sentinela";
                break;
            case "soldier":
                character.professions[0] = "Soldado";
                break;

        }

        let p = document.createElement("p");
        p.innerHTML = "Profissão " + prof + " - adquirida pela casta - adicionada."

        professionsDiv.appendChild(p);
    }
    if(choices.backgroundChange){
        switch(choices.backgroundChange){
            case "profession":
            case "1d6 insanity+profession":
                let div = document.createElement("div");
                div.id = "backgroundProfession";

                let span = document.createElement("span");
                span.innerHTML = "Profissão extra adquirida pelo antecedente do personagem:<br>";
                div.appendChild(span);

                professionsDiv.appendChild(div);

                createProfessionInput("backgroundProfession", "backgroundProfession");
                break;
            case "profession artisan":
                character.professions[0] = "Artesão";
                break;
            case "profession criminal":
                createNewInput("professions", "Profissão do tipo criminosa adquirida pelo antecedente do personagem. Coloque o nome: ", "backgroundProfession", "text");
                break;
            case "profession academic":
                createNewInput("professions", "Profissão do tipo acadêmica adquirida pelo antecedente do personagem. Coloque o nome: ", "backgroundProfession", "text");
                choices.languages[0] = "read write";
                break;
            
        }
    }
    let p = document.createElement("p");
    p.innerHTML = "Adicione outras profissões. Para adicionar uma profissão clique no '+'.";
    
    let button = document.createElement("button");
    button.innerHTML = "+";
    button.id = "plus";
    button.style.borderRadius = "50%";
    button.onclick = addProfDiv;
    
    professionsDiv.appendChild(p);
    professionsDiv.appendChild(button);
}

function addProfDiv(){
    let div = document.querySelector("#professions");
    let previousButton = document.querySelector("#plus");
    div.removeChild(previousButton);
        
    let newDiv = document.createElement("div");
    newDiv.id = "profDiv" + choices.numProfsChosen;
    div.appendChild(newDiv);

    createProfessionInput("profDiv" + choices.numProfsChosen, "prof" + choices.numProfsChosen);

    let button = document.createElement("button");
    button.innerHTML = "+";
    button.id = "plus";
    button.style.borderRadius = "50%";
    button.onclick = addProfDiv;

    div.appendChild(button);

    choices.numProfsChosen++;
    
}

function createProfessionInput(divId, inputId){
    createOptionsInput(divId, "Selecione o tipo da sua profissão: ", inputId + "Type", 
    ["Acadêmica", "Comum", "Criminosa", "Marcial", "Religiosa", "Selvagem"], 
    ["academic", "common", "criminal", "martial", "religious", "wilderness"]);
    createNewInput(divId, "Coloque o nome da sua profissão: ", inputId + "Name", "text");
    addBrToDiv(divId, 1);
    createCheckbox(divId, "A sua profissão é do tipo religiosa e é uma das seguintes: Devoto, Evangelista, Pastor ou Acólito do Novo Deus? ", inputId + "ReligiousExtra");
    addBrToDiv(divId, 2);
}

function nextPage(){
    if(character.ancestry == "human" && choices.profLangChoice == "profession"){
        var type = document.querySelector("#extraHumanChoiceType").value;
        var name = document.querySelector("#extraHumanChoiceName").value;
        var religiousExtra = document.querySelector("#extraHumanChoiceReligiousExtra").checked;
        if(name === ""){
            alert("Coloque o nome da profissão extra adquirida pela escolha entre profissão e idioma");
            return
        }
        if(type == "academic" || (type == "religious" && religiousExtra)){
            choices.languages.push("read write"); 
        }
        character.professions.push(name);
    }
    if(choices.backgroundChange){
        if(choices.backgroundChange == "profession criminal" || choices.backgroundChange == "profession academic"){
            var name = document.querySelector("#backgroundProfession").value;
            if(name === ""){
                alert("Coloque o nome de todas as profissões");
                return
            }
            character.professions.push(name);
        }
        else if(choices.backgroundChange != "profession artisan"){
            var type = document.querySelector("#backgroundProfessionType").value;
            var name = document.querySelector("#backgroundProfessionName").value;
            var religiousExtra = document.querySelector("#backgroundProfessionReligiousExtra").checked;
            if(name === ""){
                alert("Coloque o nome da profissão extra adquirida pelo antecedente");
                return
            }
            if(type == "academic" || (type == "religious" && religiousExtra)){
                choices.languages.push("read write"); 
            }
            character.professions.push(name);
        }   
    }
    for(let i = 0; i < choices.numProfsChosen; i++){
        var type = document.querySelector("#prof" + i + "Type").value;
        var name = document.querySelector("#prof" + i + "Name").value;
        var religiousExtra = document.querySelector("#prof" + i + "ReligiousExtra").checked;
        if(name === ""){
            alert("Coloque o nome de todas as profissões");
            return
        }
        if(type == "academic" || (type == "religious" && religiousExtra)){
            choices.languages.push("read write"); 
        }
        character.professions.push(name);
    }
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("choices", JSON.stringify(choices));
    //window.location.href = "languages.html";
}