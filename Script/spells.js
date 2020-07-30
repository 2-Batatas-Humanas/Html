character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");

traditionsChosen = [];
spellsChosen = [];

function loadChoices(){
    let id = "possibleChoices";
    addPToDiv(id, "O poder do seu personagem é: " + character.status.power);
    if(isEmpty(character.traditions)){
        character.traditions = {};
    }
    else {
        displayTradsAndSpells();  
    }
    if(character.level == 1){
        if(character.novicePath.type == "magician"){
            addPToDiv(id, "Você faz 4 escolhas; para cada escolha você adiciona uma tradição ou uma magia.");
            addPToDiv(id, "Tendo a trilha de aprendiz Mágico, você tem direito às magias de nível 0 automaticamente quando você pega uma tradição.");
            character.traditions["Special"] = ["Sentir Magia"];
        }
        else if(character.novicePath.type == "priest"){
            addPToDiv(id, "Você faz 2 escolhas; para cada escolha você adiciona uma tradição associada com sua religião ou uma magia.");
        }
        else {
            addPToDiv(id, "Não sei porque você veio parar aqui, mas pode pegar magias se você quiser :)");
        }
    }
    else {
        let text = localStorage.getItem("magic");
        if(text){
            localStorage.removeItem("magic");
            addPToDiv(id, text);
        } else{
            addPToDiv(id, "Pode pegar magias a vontade :)");
        }
    }
    if(character.novicePath.type == "magician"){
        addPToDiv(id, "Tendo a trilha de aprendiz Mágico, você tem direito às magias de nível 0 automaticamente quando você pega uma tradição.");
    }
    else if(character.novicePath.type == "priest"){
        switch(character.novicePath.choices.religion){
            case "Culto do Novo Deus":
                addPToDiv(id, "As Tradições associadas com sua religião são: Celestial, Teurgia, Vida");
                break;
            case "Ancestrais Anões":
                addPToDiv(id, "As Tradições associadas com sua religião são: Batalha, Terra, Vida");
                break;
            case "Fé Antiga":
                addPToDiv(id, "As Tradições associadas com sua religião são: Natureza, Primitiva, Vida");
                break;
            case "Bruxaria":
                addPToDiv(id, "As Tradições associadas com sua religião são: Encantamento, Maldição, Vida");
                break;
        }
    }
}

function findTradition(code){
    let trads = Object.keys(traditions);
    let found = false;
    trads.forEach(function(trad){
        if(traditions[trad].id == code){
            found = trad;
            return
        }
    });
    return found;
}

function findSpell(tradCode, code){
    let trad = findTradition(tradCode);
    let spells = Object.keys(traditions[trad].spells);
    let found = false;
    spells.forEach(function(spell){
        if(traditions[trad].spells[spell].id == code){
            found = spell;
            return
        }
    });
    return found;
}

function openTradition(code){
    let div = document.querySelector("#" + code);
    if(div.innerHTML == ""){
        let name = findTradition(code);
        let spells = Object.keys(traditions[name].spells);
        spells.forEach(function(spell){
            let button = document.createElement("button");
            button.innerHTML = spell;
            button.className = "spell";
            button.setAttribute("onclick", `openSpell("${code}", "${traditions[name].spells[spell].id}")`);
            let image = document.createElement("img");
            image.id = "overallImage" +  traditions[name].id + traditions[name].spells[spell].id;
            image.width = 15;
            image.style.marginLeft = "10px";
            if(spellsChosen.includes(spell)){
                image.src = "Images/checkSign.jpg";
            }
            button.appendChild(image)
            div.appendChild(button); 
            let spellDiv = document.createElement("div");
            spellDiv.id = code + traditions[name].spells[spell].id;
            div.appendChild(spellDiv);
        });
    } else{
        div.innerHTML = "";
    }
}

const addToDiv = function(att, name, spellObj, id){
    if(spellObj[att] || spellObj[att] === 0){
        addPToDiv(id, name + ": " + spellObj[att]);
    }
}

function openSpell(tradCode, spellCode){
    let div = document.querySelector("#" + tradCode + spellCode);
    if(div.innerHTML == ""){
        let trad = findTradition(tradCode);
        let spell = findSpell(tradCode, spellCode);
        let p = document.createElement("p");
        p.innerHTML = spell;
        if(!spellsChosen.includes(spell)){
            let button = document.createElement("button");
            button.id = "button" + traditions[trad].id + traditions[trad].spells[spell].id;
            button.style.borderRadius = "50%";
            button.style.marginLeft = "20px";
            button.setAttribute("onclick", `addSpell("${trad}", "${spell}")`);
            let image = document.createElement("img");
            image.id = "image" + traditions[trad].id + traditions[trad].spells[spell].id;
            image.src = "Images/plusSign.png";
            image.width = 15;
            button.appendChild(image);
            p.appendChild(button);
        } else{
            let button = document.createElement("button");
            button.id = "button" + traditions[trad].id + traditions[trad].spells[spell].id;
            button.style.marginLeft = "20px";
            button.setAttribute("onclick", `removeSpell("${trad}", "${spell}")`)
            let image = document.createElement("img");
            image.id = "image" + traditions[trad].id + traditions[trad].spells[spell].id;
            image.src = "Images/checkSign.jpg";
            button.onmouseenter = function (){
                image.src = "Images/crossSign.png";
            };
            button.onmouseleave = function (){
                image.src = "Images/checkSign.jpg";
            }
            image.width = 15;
            button.appendChild(image);
            p.appendChild(button);
        }
        div.appendChild(p);
        const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], traditions[trad].spells[spell], tradCode + spellCode);
        }
    } else{
        div.innerHTML = "";
    }
}

function changeTraditionImage(trad){
    let image = document.querySelector("#image" + traditions[trad].id);
    if(traditionsChosen.includes(trad)){
        image.src = "Images/star.jpg";
    } else{
        image.src = "";
    }
}

function addTradition(trad){
    let div = document.querySelector("#chosen");

    let tradDiv = document.createElement("div");
    tradDiv.id = "div" + traditions[trad].id;
    
    let p = document.createElement("p");
    p.innerHTML = trad;
    let button = document.createElement("button");
    button.style.marginLeft = "5px";
    button.setAttribute("onclick", `removeTradition("${trad}")`);
    let image = document.createElement("img");
    image.src = "Images/crossSign.png";
    image.width = 15;
    button.appendChild(image);
    p.appendChild(button);
    tradDiv.appendChild(p)

    let ul = document.createElement("ul");
    ul.id = "chosen" + traditions[trad].id;
    tradDiv.appendChild(ul);

    div.appendChild(tradDiv);
    
    traditionsChosen.push(trad);
    changeTraditionImage(trad);
}

function removeTradition(trad){
    let div = document.querySelector("#chosen");

    let tradDiv = document.querySelector("#" + "div" + traditions[trad].id);
    div.removeChild(tradDiv);

    traditionsChosen.splice(traditionsChosen.indexOf(trad), 1);
    let spells = Object.keys(traditions[trad].spells);
    spells.forEach(function(spell){
        while(spellsChosen.includes(spell)){
            spellsChosen.splice(spellsChosen.indexOf(spell), 1);
        }
        changeSpellImage(trad, spell, "remove");
    });
    changeTraditionImage(trad);
}

function changeSpellImage(trad, spell, type){
    let image = document.querySelector("#image" + traditions[trad].id + traditions[trad].spells[spell].id);
    let button = document.querySelector("#button" + traditions[trad].id + traditions[trad].spells[spell].id);
    let overallImage = document.querySelector("#overallImage" + traditions[trad].id + traditions[trad].spells[spell].id);
    if(image && button){
        if(type == "add"){
            image.src = "Images/checkSign.jpg";
            button.style.borderRadius = "0%";
            button.onmouseenter = function (){
                image.src = "Images/crossSign.png";
            };
            button.onmouseleave = function (){
                image.src = "Images/checkSign.jpg";
            }
            button.setAttribute("onclick", `removeSpell("${trad}", "${spell}")`)
            button.blur()
            overallImage.src = "Images/checkSign.jpg";
        } else{
            image.src = "Images/plusSign.png";
            button.onmouseenter = () => {};
            button.onmouseleave = () => {};
            button.style.borderRadius = "50%";
            button.setAttribute("onclick", `addSpell("${trad}", "${spell}")`);
            button.blur()
            overallImage.src = "";
        }
    }
    else if(overallImage){
        if(type == "add"){
            overallImage.src = "Images/checkSign.jpg";
        } else{
            overallImage.src = "";
        }
    }
}

function addSpell(trad, spell){
    if(!traditionsChosen.includes(trad)){
        addTradition(trad);
    }
    let ul = document.querySelector("#chosen" + traditions[trad].id);

    let li = document.createElement("li");
    li.innerHTML = spell;
    li.id = "spell" + traditions[trad].id + traditions[trad].spells[spell].id;
    
    let button = document.createElement("button");
    button.style.marginLeft = "5px";
    button.setAttribute("onclick", `removeSpell("${trad}", "${spell}")`);
    let image = document.createElement("img");
    image.src = "Images/crossSign.png";
    image.width = 15;
    button.appendChild(image);

    li.appendChild(button);

    ul.appendChild(li);
    
    spellsChosen.push(spell);
    changeSpellImage(trad, spell, "add");
}

function removeSpell(trad, spell){
    let ul = document.querySelector("#chosen" + traditions[trad].id);
    let lis = ul.getElementsByTagName("li");
    if(lis.length == 1){
        removeTradition(trad);
        return
    }
    for(let i = 0; i < lis.length; i++){
        if(lis[i].id == ("spell" + traditions[trad].id + traditions[trad].spells[spell].id)){
            ul.removeChild(lis[i]);
            break;
        }
    }
    spellsChosen.splice(spellsChosen.indexOf(spell), 1);
    changeSpellImage(trad, spell, "remove");
}

function displayTradsAndSpells(){
    let trads = Object.keys(character.traditions);
    trads.forEach(function(trad){
        if(trad != "Especial"){
            character.traditions[trad].forEach(function(spell){
                addSpell(trad, spell);
            });
        }
    });
}

function nextPage(){
    if(traditionsChosen.length > 0){
        traditionsChosen.forEach(function(trad){
            character.traditions[trad] = [];
            spellsChosen.forEach(function(spell){
                if(Object.keys(traditions[trad].spells).includes(spell)){
                    character.traditions[trad].push(spell);
                }
            });
        });
    }
    console.log(character.traditions);
    localStorage.setItem("character", JSON.stringify(character));
    window.location.href = "character.html";
}
