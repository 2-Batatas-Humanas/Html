character = JSON.parse(localStorage.getItem("character"));
if(!character) console.log("Couldn't load character");
choices = JSON.parse(localStorage.getItem("choices"));
if(!choices) console.log("Couldn't load choices");

function loadTraditions(){
    let intellectTrads = document.querySelector("#intellectTraditions");
    let willTrads = document.querySelector("#willTraditions");
    let trads = Object.keys(traditions);
    let numTrads = 0;
    trads.forEach(function(trad){
        let newDiv = document.createElement("div");
        newDiv.className = "tradition";
        let button = document.createElement("button");
        button.id = "trad" + numTrads;
        button.innerHTML = trad;
        button.setAttribute("onclick", "loadSpells(this.id)");
        newDiv.appendChild(button);
        if(traditions[trad].attribute === "intellect"){
            intellectTrads.appendChild(newDiv);
        } else{
            willTrads.appendChild(newDiv);
        }
        numTrads++;
    });
}

function loadSpells(numTrad){
    let trad = document.querySelector("#" + numTrad).innerHTML;
    let spellsDiv = document.querySelector("#spells");
    spellsDiv.innerHTML = "";
    let spells = Object.keys(traditions[trad].spells);
    let numSpells = 0;
    spells.forEach(function(spell){
        let newDiv = document.createElement("div");
        let id = "spell" + numTrad + numSpells;
        newDiv.id = id;
        newDiv.className = "spell";
        spellsDiv.appendChild(newDiv);
        const spellObj = traditions[trad].spells[spell];
        addPToDiv(id, spell);
        const addToDiv = function(att, name){
            if(spellObj[att]){
                addPToDiv(id, name + ": " + spellObj[att]);
            }
        }
        const atts = ["description", "target", "area", "duration", "level", "type"];
        const names = ["Descrição", "Alvo", "Área", "Duração", "Nível", "Tipo"];
        for(let i = 0; i < atts.length; i++){
            addToDiv(atts[i], names[i]);
        }
        numSpells++;
    });
}