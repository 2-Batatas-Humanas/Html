character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");

possibleTraditions = Object.keys(traditions);

receiveLevel0Spells = false;

traditionsChosen = [];

spellsChosen = [];

currentPower = 0;

traditionSpellsChoices = 0;

function loadChoices(){
    if(!character.status){
        let id = "possibleChoices";
        character.traditions = {};
        character.additionalAttCharacts = {
            power: 0
        }
        switch(character.novicePath.type){
            case "magician":
                addPToDiv(id, "Você terá que fazer quatro escolhas: escolher uma nova tradição ou escolher uma magia para cada escolha.");
                addPToDiv(id, "Você automaticamente recebe, como talento de Mágico, as magias de nível 0 da tradição que escolher.");
                receiveLevel0Spells = true;
                character.additionalAttCharacts.power = 1;
                traditionSpellsChoices = 4;
                break;
            case "priest":
                addPToDiv(id, "Você só pode escolher certas tradições, depende da sua religião.");
                addPToDiv(id, "Escolha uma tradição, inicialmente.");
                addPToDiv(id, "Depois você terá duas escolhas: escolher uma nova tradição ou escolher uma magia para cada escolha.");
                traditionSpellsChoices = 3;
                character.additionalAttCharacts.power = 1;
                switch(character.novicePath.choices.religion){
                    case "Culto do Novo Deus":
                        possibleTraditions = ["Celestial", "Teurgia", "Vida"];
                        break;
                    case "Ancestrais Anões":
                        possibleTraditions = ["Batalha", "Terra", "Vida"];
                        break;
                    case "Fé Antiga":
                        possibleTraditions = ["Natureza", "Primitiva", "Vida"];
                        break;
                    case "Bruxaria":
                        possibleTraditions = ["Encantamento", "Maldição", "Vida"];
                        break;
                }
                break;
            default:
                alert("Você não deveria estar aqui!");
        }
    }
    else {
        traditionSpellsChoices = parseInt(localStorage.getItem("magic")) + displayTradsAndSpells();
        if(character.novicePath.type == "magician"){
            receiveLevel0Spells = true;
        }
        currentPower = character.status.power;
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
        let button = document.createElement("button");
        button.style.borderRadius = "50%";
        button.style.marginLeft = "20px";
        let image = document.createElement("img");
        image.src = "Images/plusSign.png";
        image.width = 15;
        button.appendChild(image);
        p.innerHTML = spell;
        p.appendChild(button);
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

function addTradition(){
    if(traditionsChosen.includes(tradName)){
        alert("Você já adicionou essa tradição!");
        return
    }
    let numTraditions = traditionsChosen.length;
    let numSpells = spellsChosen.length;
    if(numTraditions + numSpells >= traditionSpellsChoices){
        alert("Você já adicionou o máximo de tradições e magias que você podia! Remova uma tradição ou uma magia se quiser mudar a escolha");
        return
    }

    traditionsChosen.push(tradName);
    let ul = document.querySelector("#traditionsList");

    let li = document.createElement("li");
    li.className = "traditionName";
    li.id = "liTrad" + numTrad;
    li.innerHTML = tradName + "(" + (traditions[tradName].attribute == "intellect"? "I" : "V") + ")" + `<button onclick="removeTradition(${numTrad})">X</button>`;
    ul.appendChild(li);

    let tradUl = document.createElement("ul");
    tradUl.id = "tradList" + numTrad;
    if(receiveLevel0Spells){
        let spells = Object.keys(traditions[tradName].spells);
        let auxLi;
        spells.forEach(function(spell){
            if(traditions[tradName].spells[spell].level == 0){
                auxLi = document.createElement("li");
                auxLi.innerHTML = spell + "(0)";
                auxLi.className = "spellName";
                tradUl.appendChild(auxLi);
            }
        })
    }
    ul.appendChild(tradUl);
}

function removeTradition(numTrad){
    let ul = document.querySelector("#traditionsList");
    let li = document.querySelector("#liTrad" + numTrad);
    let tradUl = document.querySelector("#tradList" + numTrad);
    traditionsChosen = traditionsChosen.filter((val) => {if((li.innerHTML).slice(0, li.innerHTML.indexOf("<") - 3) != val) return true});
    spellsChosen = spellsChosen.filter((val) => {if(!val in traditions[(li.innerHTML).slice(0, li.innerHTML.indexOf("<") - 3)].spells) return true});
    ul.removeChild(li);
    ul.removeChild(tradUl);
}

function addSpell(numSpell, spellName, numTrad, tradName){
    if(spellsChosen.includes(spellName)){
        alert("Você já adicionou essa magia!");
        return
    }
    let numTraditions = traditionsChosen.length;
    let numSpells = spellsChosen.length;
    if(numTraditions + numSpells >= traditionSpellsChoices){
        alert("Você já adicionou o máximo de tradições e magias que você podia!");
        return
    }
    if(parseInt(traditions[tradName].spells[spellName].level) > currentPower){
        alert("Essa magia é de um nível superior ao poder do seu personagem!");
        return
    }
    let ul = document.querySelector("#tradList" + numTrad);
    if(ul){
        spellsChosen.push(spellName);
        let li = document.createElement("li");
        li.className = "spellName";
        li.id = "liSpell" + numTrad + numSpell;
        li.innerHTML = spellName + "(" + traditions[tradName].spells[spellName].level + ")" + `<button onclick="removeSpell(${numSpell}, ${numTrad})">X</button>`;
        ul.appendChild(li);
    } else{
        alert("Adicione primeiro a tradição para adicionar qualquer magia");
    }
}

function removeSpell(numSpell, numTrad){
    let ul = document.querySelector("#tradList" + numTrad);
    let li = document.querySelector("#liSpell" + numTrad + numSpell);
    spellsChosen = spellsChosen.filter((val) => {if((li.innerHTML).slice(0, li.innerHTML.indexOf("<") - 3) != val) return true})
    ul.removeChild(li);
}

function displayTradsAndSpells(){
    traditionSpellsChoices = 1000;
    currentPower = 10;
    let tradNum = -1;
    let totalSpells = 0;
    let trads = Object.keys(character.traditions);
    trads.forEach(function(value){
        addTradition(value, tradNum);
        let spellNum = -1;
        let spells = Object.keys(character.traditions[value]);
        spells.forEach(function(val){
            addSpell(spellNum, val, tradNum, value);
            spellNum--;
            totalSpells++;
        });
        tradNum--;
    });
    return -tradNum + totalSpells -1;
}

function nextPage(){
    let numTraditions = traditionsChosen.length;
    let numSpells = spellsChosen.length;
    if(numTraditions + numSpells < traditionSpellsChoices){
        alert("Faça todas as escolhas de tradições ou magias");
        return
    }
    if(receiveLevel0Spells){
        traditionsChosen.forEach(function(trad){
            let tradSpells = Object.keys(traditions[trad].spells);
            tradSpells.forEach(function(spell){
                if(traditions[trad].spells[spell].level == 0){
                    spellsChosen.push(spell);
                }
            });
        });
    }
    traditionsChosen.forEach(function(trad){
        character.traditions[trad] = {};
        let tradSpells = Object.keys(traditions[trad].spells);
        tradSpells.forEach(function(spell){
            if(spellsChosen.includes(spell)){
                character.traditions[trad][spell] = deepCopy(traditions[trad].spells[spell]);
            }
        })
    });
    localStorage.setItem("character", JSON.stringify(character));
    window.location.href = "market.html";
}
