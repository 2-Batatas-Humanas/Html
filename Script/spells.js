character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");

possibleTraditions = Object.keys(traditions);

receiveLevel0Spells = false;

traditionsChosen = [];

spellsChosen = [];

currentPower = 0;

traditionSpellsChoices = 0;

function loadChoices(){
    if(!character.traditions){
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

    }
    currentPower = character.additionalAttCharacts.power;

}

function loadTraditions(){
    let intellectTrads = document.querySelector("#intellectTraditions");
    let willTrads = document.querySelector("#willTraditions");
    let trads = Object.keys(traditions);
    let numTrads = 0;
    trads.forEach(function(trad){
        let newDiv = document.createElement("div");
        newDiv.className = "tradition";
        if(traditions[trad].darkMagic){
            newDiv.classList.add("darkMagic");
        }
        if(!(possibleTraditions.includes(trad))){
            newDiv.classList.add("traditionInavailable");
        }
        newDiv.id = "trad" + numTrads;
        newDiv.setAttribute("onclick", `loadSpells("${trad}", (this.id).slice(4))`);
        let p = document.createElement("p");
        p.innerHTML = trad;
        p.id = "tradName" + numTrads;
        newDiv.appendChild(p);
        if(traditions[trad].attribute === "intellect"){
            newDiv.classList.add("intellect");
            intellectTrads.appendChild(newDiv);
        } else{
            newDiv.classList.add("will");
            willTrads.appendChild(newDiv);
        }
        numTrads++;
    });
}

const addToDiv = function(att, name, spellObj, id){
    if(spellObj[att]){
        addPToDiv(id, name + ": " + spellObj[att]);
    }
}

function loadSpells(trad, numTrad){
    if(!possibleTraditions.includes(trad)){
        return
    }
    let spellsDiv = document.querySelector("#spells");
    spellsDiv.innerHTML = "";
    let removeButton = document.createElement("button");
    removeButton.id = "removeButton";
    removeButton.innerHTML = "X";
    removeButton.onclick = function() {
        let div = document.querySelector("#spells");
        let h2 = document.querySelector("#currentTradition");
        div.innerHTML = "";
        h2.innerHTML = "";
    }
    spellsDiv.appendChild(removeButton);
    let h2 = document.querySelector("#currentTradition");
    h2.innerHTML = trad;
    let addTraditionButton = document.createElement("button");
    addTraditionButton.setAttribute("onclick", `addTradition("${trad}", ${numTrad})`);
    addTraditionButton.innerHTML = "Adicionar Tradição";
    h2.appendChild(addTraditionButton);
    let spells = Object.keys(traditions[trad].spells);
    let numSpells = 0;
    spells.forEach(function(spell){
        let newDiv = document.createElement("div");
        let id = "spell" + numTrad + numSpells;
        newDiv.id = id;
        newDiv.className = "spell";
        spellsDiv.appendChild(newDiv);
        const spellObj = traditions[trad].spells[spell];
        addPToDiv(id, "<b>" + spell + "</b>");
        if(!receiveLevel0Spells || spellObj.level != 0){
            let addSpellButton = document.createElement("button");
            addSpellButton.id = "spellBtn" + numSpells;
            addSpellButton.setAttribute("onclick", `addSpell((this.id).slice(8), "${spell}", ${numTrad}, "${trad}")`);
            addSpellButton.innerHTML = "Adicionar magia";
            newDiv.appendChild(addSpellButton);
        }
        const atts = ["description", "target", "area", "duration", "attackRoll20", "requisites", "type", "level"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Ataque 20+", "Requisitos", "Tipo", "Nível"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i], spellObj, id);
        }
        numSpells++;
    });
}

function addTradition(tradName, numTrad){
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
